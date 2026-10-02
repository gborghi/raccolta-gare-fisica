import test, { describe } from "node:test"
import assert from "node:assert"
import {
  hasBooleanSyntax,
  parseBooleanQuery,
  planQuery,
  stripBooleanSyntax,
  displayTerm,
  evaluateBoolean,
  positiveTerms,
  type EvalContext,
} from "./searchBoolean"

// Tiny fake engine with the same semantics as the plain FlexSearch query used by the
// site (lowercase, every word required, word-prefix match).
const DOCS = [
  "Urto elastico: conservazione di energia e quantità di moto", // 0
  "Urto anelastico con attrito sul piano", // 1
  "Energia potenziale elastica di una molla", // 2
  "Quantità di moto di un sistema isolato", // 3
  "Moto circolare uniforme e forza centripeta", // 4
  "Circuito RC: energia immagazzinata nel condensatore", // 5
]
const ctx: EvalContext = {
  async searchTerms(text) {
    const words = text.toLowerCase().split(/\s+/).filter(Boolean)
    return DOCS.map((d, id) => ({ id, toks: d.toLowerCase().split(/\s+/) }))
      .filter(({ toks }) => words.every((w) => toks.some((t) => t.startsWith(w))))
      .map(({ id }) => id)
  },
  textOf: (id) => DOCS[id] ?? "",
  allIds: () => DOCS.map((_, i) => i),
}
const run = async (q: string) => {
  const plan = planQuery(q)
  assert.strictEqual(plan.mode, "boolean", `expected boolean plan for ${q}`)
  return (await evaluateBoolean((plan as any).ast, ctx)).sort((a, b) => a - b)
}

describe("detection: plain queries keep the original path", () => {
  for (const q of [
    "energia",
    "quantità di moto",
    "urto e energia",
    "moto o quiete",
    "energia and urto",
    "not energia",
    "x-ray",
    "forza-peso",
    "2016",
    "",
  ]) {
    test(`plain: ${JSON.stringify(q)}`, () => {
      assert.strictEqual(hasBooleanSyntax(q), false)
      const plan = planQuery(q)
      assert.deepStrictEqual(plan, { mode: "plain", query: q })
      assert.strictEqual(displayTerm(q), q)
    })
  }
  for (const q of ["a AND b", "a OR b", "NOT a", "-attrito", '"quantità di moto"', "(a)", "a -b"]) {
    test(`boolean syntax: ${q}`, () => assert.strictEqual(hasBooleanSyntax(q), true))
  }
})

describe("parser", () => {
  test("precedence NOT > AND > OR", () => {
    assert.deepStrictEqual(parseBooleanQuery("a OR b AND NOT c"), {
      type: "or",
      children: [
        { type: "terms", text: "a" },
        {
          type: "and",
          children: [
            { type: "terms", text: "b" },
            { type: "not", child: { type: "terms", text: "c" } },
          ],
        },
      ],
    })
  })
  test("adjacent bare words form one group (implicit AND)", () => {
    assert.deepStrictEqual(parseBooleanQuery("(energia OR quantità di moto) AND urto"), {
      type: "and",
      children: [
        {
          type: "or",
          children: [
            { type: "terms", text: "energia" },
            { type: "terms", text: "quantità di moto" },
          ],
        },
        { type: "terms", text: "urto" },
      ],
    })
  })
  test("phrase and -word", () => {
    assert.deepStrictEqual(parseBooleanQuery('"quantità  di moto" -urto'), {
      type: "and",
      children: [
        { type: "phrase", text: "quantità di moto" },
        { type: "not", child: { type: "terms", text: "urto" } },
      ],
    })
  })
  test("hyphen inside a word is not NOT", () => {
    assert.deepStrictEqual(parseBooleanQuery("forza-peso OR attrito"), {
      type: "or",
      children: [
        { type: "terms", text: "forza-peso" },
        { type: "terms", text: "attrito" },
      ],
    })
  })
  test("lowercase keywords are words", () => {
    assert.deepStrictEqual(parseBooleanQuery("(a or b)"), { type: "terms", text: "a or b" })
  })
})

describe("malformed queries degrade to plain search (never throw)", () => {
  const cases: [string, string][] = [
    ["(energia OR urto", "energia urto"],
    ["energia OR urto)", "energia urto"],
    ["energia AND", "energia"],
    ["OR energia", "energia"],
    ["energia OR OR urto", "energia urto"],
    ['"quantità di moto', "quantità di moto"],
    ["()", "()"],
    ["NOT", "NOT"],
    ["energia NOT", "energia"],
    ['""', '""'],
    ["((((", "(((("],
  ]
  for (const [q, expected] of cases) {
    test(`fallback: ${q}`, () => {
      assert.strictEqual(parseBooleanQuery(q), null)
      const plan = planQuery(q)
      assert.strictEqual(plan.mode, "fallback")
      assert.strictEqual(plan.query, expected)
    })
  }
  test("stripBooleanSyntax", () => {
    assert.strictEqual(stripBooleanSyntax('(a OR "b c") AND -d NOT e'), "a b c d e")
  })
  test("fuzz: random operator soup never throws", () => {
    const parts = ["(", ")", '"', "AND", "OR", "NOT", "-", "-x", "e", "o", "energia", " ", "  "]
    let seed = 7
    const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff
    for (let i = 0; i < 3000; i++) {
      let q = ""
      const n = 1 + Math.floor(rnd() * 8)
      for (let k = 0; k < n; k++)
        q += parts[Math.floor(rnd() * parts.length)] + (rnd() < 0.6 ? " " : "")
      assert.doesNotThrow(() => planQuery(q))
      assert.doesNotThrow(() => displayTerm(q))
    }
  })
})

describe("evaluator", () => {
  test("AND", async () => assert.deepStrictEqual(await run("urto AND energia"), [0]))
  test("OR", async () => assert.deepStrictEqual(await run("molla OR condensatore"), [2, 5]))
  test("NOT", async () => assert.deepStrictEqual(await run("urto NOT attrito"), [0]))
  test("-word", async () => assert.deepStrictEqual(await run("urto -attrito"), [0]))
  test("pure negation = universe minus", async () =>
    assert.deepStrictEqual(await run("-energia"), [1, 3, 4]))
  test("exact phrase", async () => assert.deepStrictEqual(await run('"quantità di moto"'), [0, 3]))
  test("phrase vs bag of words", async () => {
    // "moto quantità" as a phrase does not occur; as bare words it matches docs 0 and 3
    assert.deepStrictEqual(await run('"moto quantità"'), [])
    assert.deepStrictEqual(await run("(moto quantità)"), [0, 3])
  })
  test("spec example: (energia OR quantità di moto) AND urto", async () =>
    assert.deepStrictEqual(await run("(energia OR quantità di moto) AND urto"), [0]))
  test("phrase on keyword-bag entries falls back to all words, literal hits first", async () => {
    const kw: EvalContext = { ...ctx, isKeywordEntry: (id) => id === 4 || id === 3 }
    const plan = planQuery('"moto di"') as any
    // doc 3 contains "moto di" literally; doc 0 has both words but not adjacent and is
    // running text (excluded); doc 4 is a keyword entry with both words? no ("di" absent)
    assert.deepStrictEqual(await evaluateBoolean(plan.ast, kw), [3])
    const plan2 = planQuery('"moto quantità"') as any
    assert.deepStrictEqual(await evaluateBoolean(plan2.ast, kw), [3])
  })
  test("grouping changes the result", async () => {
    assert.deepStrictEqual(await run("energia OR moto AND urto"), [0, 2, 5])
    assert.deepStrictEqual(await run("(energia OR moto) AND urto"), [0])
  })
  test("highlight terms skip negated leaves", () => {
    const ast = parseBooleanQuery('(energia OR "quantità di moto") -attrito')!
    assert.deepStrictEqual(positiveTerms(ast), ["energia", "quantità", "di", "moto"])
    assert.strictEqual(displayTerm("energia -attrito"), "energia")
  })
  test("ranking: OR keeps best rank, AND sums ranks", async () => {
    const plan = planQuery("energia OR urto") as any
    const ids = await evaluateBoolean(plan.ast, ctx)
    assert.strictEqual(ids.length, 4)
    assert.strictEqual(ids[0], 0) // rank 0 in both lists
  })
})
