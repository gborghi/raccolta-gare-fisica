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
  setSynonyms,
  synonymAlternatives,
  MetaIndex,
  makeRowMatcher,
  plainSynonymIds,
  resolveField,
  foldText,
  highlightTerms,
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

// ---------------------------------------------------------------------------
// v2: campo:valore, metadata, synonyms, in-page row filters
// ---------------------------------------------------------------------------

const SYN = [
  { tipo: "fisica", termini: ["molla", "spring", "ressort", "mola"] },
  { tipo: "nazione", termini: ["giappone", "japan", "japon", "japão"] },
  { tipo: "nazione", termini: ["brasile", "brasil", "brazil"] },
  { tipo: "fisica", termini: ["quantità di moto", "momentum", "impulso"] },
  { tipo: "mate", termini: ["induzione", "induction"] },
  { tipo: "fisica", termini: ["induzione elettromagnetica", "electromagnetic induction"] },
  { tipo: "gara", termini: ["oii", "olimpiadi italiane di fisica"] },
]

describe("v2 parser: campo:valore", () => {
  test("field syntax is boolean", () => {
    assert.strictEqual(hasBooleanSyntax("nazione:Japan"), true)
    assert.strictEqual(hasBooleanSyntax("ore 3:00"), false)
    assert.strictEqual(hasBooleanSyntax("x:"), false)
  })
  test("field node + quoted value", () => {
    assert.deepStrictEqual(parseBooleanQuery("nazione:Japan"), {
      type: "field", field: "nazione", value: "Japan", raw: "nazione:Japan",
    })
    const ast = parseBooleanQuery('gara:"Giochi di Archimede" AND anno:2019') as any
    assert.strictEqual(ast.type, "and")
    assert.strictEqual(ast.children[0].value, "Giochi di Archimede")
    assert.strictEqual(ast.children[1].field, "anno")
  })
  test("fallback strips field prefix", () => {
    assert.strictEqual(stripBooleanSyntax('nazione:"Japan'), "Japan")
  })
  test("aliases", () => {
    assert.deepStrictEqual(resolveField("nazione", ["country", "year"]), ["country"])
    assert.deepStrictEqual(resolveField("Difficoltà", ["difficolta"]), ["difficolta"])
    assert.deepStrictEqual(resolveField("comp_code", ["comp_code"]), ["comp_code"])
    assert.deepStrictEqual(resolveField("boh", ["country"]), [])
  })
})

describe("v2 synonyms", () => {
  test("folding", () => assert.strictEqual(foldText("  Japão  QUANTITÀ "), "japao quantita"))
  test("whole term and per-word expansion", () => {
    setSynonyms(SYN)
    assert.deepStrictEqual(synonymAlternatives("Giappone").sort(), ["japan", "japao", "japon"].sort())
    assert.ok(synonymAlternatives("quantità di moto").includes("momentum"))
    assert.ok(synonymAlternatives("molla energia").includes("spring energia"))
    assert.deepStrictEqual(synonymAlternatives("energia"), [])
  })
  test("group boundaries: math induction != electromagnetic induction", () => {
    setSynonyms(SYN)
    assert.deepStrictEqual(synonymAlternatives("induction"), ["induzione"])
    assert.deepStrictEqual(synonymAlternatives("electromagnetic induction"), ["induzione elettromagnetica"])
  })
})

describe("v2 evaluator: metadata + synonyms", () => {
  const D = [
    { t: "Una molla compressa accumula energia", m: { country: "Italia", topics: "Energia|Molle" } }, // 0
    { t: "A spring stores elastic energia", m: { country: "Japan", topics: "Energy" } }, // 1
    { t: "Area of a triangle", m: { country: "Japan", topics: "topic_geometria_piana" } }, // 2
    { t: "Area di un cerchio", m: { country: "Brasile", topics: "topic_geometria_piana" } }, // 3
    { t: "Springfield is a town energia", m: { country: "USA", topics: "" } }, // 4 (prefix only)
  ]
  const slugs = D.map((_, i) => `p#q${i}`)
  const meta = new MetaIndex({
    f: ["country", "topics"],
    r: Object.fromEntries(D.map((d, i) => [slugs[i], [d.m.country, d.m.topics]])),
  })
  const toIds = (ss: string[] | null) => (ss === null ? null : ss.map((s) => slugs.indexOf(s)))
  const c: EvalContext = {
    async searchTerms(text) {
      const ws = foldText(text).split(" ")
      return D.map((d, id) => ({ id, toks: foldText(d.t).split(" ") }))
        .filter(({ toks }) => ws.every((w) => toks.some((t) => t.startsWith(w))))
        .map(({ id }) => id)
    },
    textOf: (id) => D[id]!.t,
    allIds: () => D.map((_, i) => i),
    expand: (t) => synonymAlternatives(t),
    metaSearch: (t, a) => toIds(meta.matchAny(t, a))!,
    fieldSearch: (f, v, a) => toIds(meta.matchField(f, v, a)),
  }
  const run = async (q: string) => {
    setSynonyms(SYN)
    const plan = planQuery(q) as any
    assert.strictEqual(plan.mode, "boolean")
    return evaluateBoolean(plan.ast, c)
  }
  test("spring AND energia: typed term (prefix, as before) first, synonym hit (molla) after", async () => {
    assert.deepStrictEqual(await run("spring AND energia"), [1, 4, 0])
  })
  test("molla AND energia: synonym 'spring' is whole-word only (no Springfield)", async () => {
    assert.deepStrictEqual(await run("molla AND energia"), [0, 1])
  })
  test("nazione:Japan (and synonyms: nazione:Giappone)", async () => {
    assert.deepStrictEqual(await run("nazione:Japan"), [1, 2])
    assert.deepStrictEqual(await run("nazione:Giappone"), [1, 2])
  })
  test("Giappone AND area: bare term matches metadata", async () => {
    assert.deepStrictEqual(await run("Giappone AND area"), [2])
  })
  test("Brasil AND geometria: both via metadata", async () => {
    assert.deepStrictEqual(await run("Brasil AND geometria"), [3])
  })
  test("unknown field searched as text", async () => {
    assert.deepStrictEqual(await run("boh:triangle"), [])
    assert.deepStrictEqual(await run("area:triangle"), [])
  })
  test("plain: synonym-only ids appended, whole word only", async () => {
    setSynonyms(SYN)
    const extra = await plainSynonymIds("molla", c.searchTerms, c.textOf)
    assert.deepStrictEqual(extra, [1]) // "spring" (not Springfield); original 0 comes from the plain path
  })
})

describe("v2 row matcher (in-page lists)", () => {
  test("empty query", () => assert.strictEqual(makeRowMatcher("  "), null))
  test("plain: identical substring test, plus synonyms (whole word)", () => {
    setSynonyms(SYN)
    const m = makeRowMatcher("Mol")!
    assert.strictEqual(m("Una MOLLA"), true)
    assert.strictEqual(m("spring"), false)
    const m2 = makeRowMatcher("molla")!
    assert.strictEqual(m2("a spring"), true)
    assert.strictEqual(m2("springfield"), false)
  })
  test("boolean + fields", () => {
    setSynonyms(SYN)
    const row = { country: "Brasile", topics: ["topic_geometria_piana"], year: 2019 }
    assert.strictEqual(makeRowMatcher("Brasil AND geometria")!("Area di un cerchio", row), true)
    assert.strictEqual(makeRowMatcher("nazione:Japan")!("x", row), false)
    assert.strictEqual(makeRowMatcher("nazione:Brazil")!("x", row), true)
    assert.strictEqual(makeRowMatcher("anno:2019 AND cerchio")!("Area di un cerchio", row), true)
    assert.strictEqual(makeRowMatcher("cerchio -geometria")!("Area di un cerchio", row), false)
    assert.strictEqual(makeRowMatcher('"di un cerchio"')!("Area di un cerchio", row), true)
  })
  test("malformed -> plain on stripped query", () => {
    assert.strictEqual(makeRowMatcher("(cerchio")!("area di un cerchio"), true)
  })
})

describe("v3: multi-word operands, stopwords, highlight", () => {
  test("highlight drops stopwords and 1-letter tokens", () => {
    const plan = planQuery("(energia OR quantità di moto) AND urto") as any
    assert.strictEqual(plan.highlight, "energia quantità moto urto")
    assert.deepStrictEqual(highlightTerms(parseBooleanQuery("the spring AND a") as any), ["spring"])
    assert.strictEqual((planQuery('"di" OR il') as any).highlight, "di il") // only stopwords: kept
  })
  test("multi-word operand: literal word order first, 'di' never searched alone", async () => {
    const D = ["moto di quantità studiare", "quantità di moto conservata", "dimostri la quantità del moto"]
    const asked: string[] = []
    const c: EvalContext = {
      async searchTerms(text) {
        asked.push(text)
        const ws = text.toLowerCase().split(/\s+/)
        return D.map((d, id) => ({ id, toks: d.split(" ") }))
          .filter(({ toks }) => ws.every((w) => toks.some((t) => t.startsWith(w))))
          .map(({ id }) => id)
      },
      textOf: (id) => D[id]!,
      allIds: () => D.map((_, i) => i),
    }
    const plan = planQuery("quantità di moto AND NOT xyz") as any
    const ids = await evaluateBoolean(plan.ast, c)
    assert.strictEqual(ids[0], 1)
    assert.deepStrictEqual([...ids].sort(), [0, 1, 2])
    assert.ok(asked.includes("quantità moto"))
    assert.ok(!asked.some((a) => a.split(" ").includes("di")))
  })
})
