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
  formatResultCount,
  interfaceLang,
  previewTargetOf,
  isolateAtom,
  showResultCount,
  type AtomEl,
  markResultCount,
  type RowFields,
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

describe("detection: every query with a searchable word uses the boolean engine", () => {
  for (const q of ["energia", "x-ray", "forza-peso", "2016", "di moto", "quantità di moto", "urto e energia", "moto o quiete", "energia and urto", "not energia"]) {
    test(`no operators, still boolean (implicit AND): ${JSON.stringify(q)}`, () => {
      assert.strictEqual(hasBooleanSyntax(q), false)
      assert.strictEqual(planQuery(q).mode, "boolean")
    })
  }
  for (const q of ["", "di", "a", "e di x"]) {
    test(`plain (nothing searchable): ${JSON.stringify(q)}`, () => {
      assert.deepStrictEqual(planQuery(q), { mode: "plain", query: q })
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
  test("multi-word operand: literal word order first, 'di' never searched alone (space == AND)", async () => {
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
    assert.ok(asked.includes("quantità") && asked.includes("moto"))
    assert.ok(!asked.some((a) => a.split(" ").includes("di")))
  })
})

// ---------------------------------------------------------------------------
// v4: result count + atom-scoped preview
// ---------------------------------------------------------------------------

// Minimal DOM stand-in (tests run in plain Node): enough for isolateAtom().
class FakeEl implements AtomEl {
  parentElement: FakeEl | null = null
  kids: FakeEl[] = []
  attrs: Record<string, string> = {}
  constructor(
    public tag: string,
    attrs: Record<string, string> = {},
    public text = "",
    kids: FakeEl[] = [],
  ) {
    Object.assign(this.attrs, attrs)
    for (const k of kids) this.append(k)
  }
  append(k: FakeEl) {
    k.parentElement = this
    this.kids.push(k)
    return this
  }
  get children() {
    return this.kids
  }
  get classList() {
    const cls = (this.attrs["class"] || "").split(/\s+/)
    return { contains: (c: string) => cls.includes(c) }
  }
  getAttribute(n: string) {
    return n in this.attrs ? this.attrs[n]! : null
  }
  querySelectorAll(sel: string): FakeEl[] {
    assert.strictEqual(sel, ".atom-split") // the only selector isolateAtom uses
    const out: FakeEl[] = []
    const walk = (e: FakeEl) => {
      for (const k of e.kids) {
        if (k.classList.contains("atom-split")) out.push(k)
        walk(k)
      }
    }
    walk(this)
    return out
  }
  remove() {
    if (!this.parentElement) return
    const sib = this.parentElement.kids
    sib.splice(sib.indexOf(this), 1)
    this.parentElement = null
  }
  get textContent(): string {
    return this.text + this.kids.map((k) => k.textContent).join(" ")
  }
}

const marker = (id: string) =>
  new FakeEl("p", {}, "", [new FakeEl("span", { class: "atom-split", id, "data-atom": id })])
const para = (t: string) => new FakeEl("p", {}, t)

/** A reader page (popover-hint) like Quesiti/src_archimede_2019_2livello: atoms back to back. */
function readerPage(): FakeEl {
  return new FakeEl("div", { class: "popover-hint" }, "", [
    new FakeEl("div", { class: "markdown-preview-view" }, "", [
      new FakeEl("div", { class: "atom-reader" }),
      marker("q01"),
      para("Triangolo isoscele, bisettrice e cerchio per punto medio"),
      para("Luigi ha disegnato sul proprio quaderno un triangolo isoscele ABC"),
      marker("q02"),
      para("Numeri con 4 divisori e somma divisori 42"),
      para("Alessandra scrive sul quaderno tutti i numeri naturali n"),
      marker("q03"),
      para("Calzini nel cassetto"),
    ]),
  ])
}

describe("v4: visible result count", () => {
  test("Italian / English labels, singular, thousands", () => {
    assert.strictEqual(formatResultCount(0), "0 risultati")
    assert.strictEqual(formatResultCount(1), "1 risultato")
    assert.strictEqual(formatResultCount(248), "248 risultati")
    assert.strictEqual(formatResultCount(1, { lang: "en" }), "1 result")
    assert.strictEqual(formatResultCount(17800, { lang: "en" }), "17,800 results")
    assert.strictEqual(formatResultCount(17800), "17.800 risultati")
  })
  test("truncated (mobile) index: 'almeno N' / 'at least N', never 'almeno 0'", () => {
    assert.strictEqual(formatResultCount(293, { capped: true }), "almeno 293 risultati")
    assert.strictEqual(formatResultCount(293, { lang: "en", capped: true }), "at least 293 results")
    assert.strictEqual(formatResultCount(0, { capped: true }), "0 risultati")
  })
  test("interface language comes from <html lang>", () => {
    assert.strictEqual(interfaceLang("en"), "en")
    assert.strictEqual(interfaceLang("en-GB"), "en")
    assert.strictEqual(interfaceLang("it"), "it")
    assert.strictEqual(interfaceLang(""), "it")
    assert.strictEqual(interfaceLang(), "it") // no document in Node -> Italian default
  })
  test("count element: data-search-count holds the number, only once known", () => {
    const attrs: Record<string, string> = {}
    const el = {
      textContent: "",
      hidden: true,
      setAttribute: (k: string, v: string) => void (attrs[k] = v),
      removeAttribute: (k: string) => void delete attrs[k],
    } as unknown as HTMLElement
    showResultCount(el, null, '"triangolo isoscele"', { loading: true })
    assert.strictEqual(attrs["data-search-count"], undefined)
    assert.strictEqual(attrs["data-search-state"], "loading")
    assert.strictEqual(el.hidden, false)
    showResultCount(el, 248, '"triangolo isoscele"')
    assert.strictEqual(attrs["data-search-count"], "248")
    assert.strictEqual(attrs["data-search-query"], '"triangolo isoscele"')
    assert.strictEqual(attrs["data-search-capped"], undefined)
    assert.strictEqual(el.textContent, "248 risultati")
    showResultCount(el, 293, "urto", { capped: true })
    assert.strictEqual(attrs["data-search-count"], "293")
    assert.strictEqual(attrs["data-search-capped"], "1")
    assert.strictEqual(el.textContent, "almeno 293 risultati")
    showResultCount(el, null, "")
    assert.strictEqual(attrs["data-search-count"], undefined)
    assert.strictEqual(el.hidden, true)
  })
})

describe("v4: preview of a per-quesito hit shows that quesito", () => {
  test("preview target: index key (mate) or clean slug + href fragment (fisica)", () => {
    assert.deepStrictEqual(previewTargetOf("Quesiti/src_x#q12", "/raccolta-gare-mate/Quesiti/src_x#q12"), {
      page: "Quesiti/src_x",
      frag: "q12",
    })
    assert.deepStrictEqual(previewTargetOf("prove/itath2", "/raccolta-gare-fisica/prove/itath2#q06"), {
      page: "prove/itath2",
      frag: "q06",
    })
    assert.deepStrictEqual(previewTargetOf("Quesiti/src_x", "/raccolta-gare-mate/Quesiti/src_x"), {
      page: "Quesiti/src_x",
      frag: "",
    })
  })
  test("isolateAtom keeps only the atom's blocks (marker .. next marker)", () => {
    const page = readerPage()
    assert.ok(isolateAtom(page, "q02"))
    const t = page.textContent
    assert.ok(t.includes("Numeri con 4 divisori"))
    assert.ok(!t.includes("triangolo isoscele"))
    assert.ok(!t.includes("Calzini"))
    const last = readerPage()
    assert.ok(isolateAtom(last, "q03"))
    assert.ok(last.textContent.includes("Calzini") && !last.textContent.includes("divisori"))
  })
  test("unknown atom / block without markers: left untouched", () => {
    const page = readerPage()
    const before = page.textContent
    assert.strictEqual(isolateAtom(page, "q99"), false)
    assert.strictEqual(isolateAtom(page, ""), false)
    assert.strictEqual(page.textContent, before)
    const header = new FakeEl("div", { class: "popover-hint" }, "", [para("Archimede 2019")])
    assert.strictEqual(isolateAtom(header, "q01"), false)
    assert.strictEqual(header.textContent.trim(), "Archimede 2019")
  })
  test('"triangolo isoscele": every hit previews text containing the phrase (not «Numeri con 4 divisori»)', async () => {
    // index entries like the site's: one gara page + one entry per quesito ("page#qNN")
    const ENTRIES: { key: string; text: string; frag?: boolean }[] = [
      { key: "Quesiti/gara2019", text: "Archimede 2019 Triangolo isoscele, bisettrice e cerchio Numeri con 4 divisori" },
      { key: "Quesiti/gara2019#q02", text: "Numeri con 4 divisori e somma divisori 42 triangolo", frag: true },
      { key: "Quesiti/gara2019#q01", text: "Triangolo isoscele, bisettrice e cerchio per punto medio", frag: true },
    ]
    const c: EvalContext = {
      async searchTerms(text) {
        const ws = text.toLowerCase().split(/\s+/).filter(Boolean)
        return ENTRIES.map((e, id) => ({ id, toks: e.text.toLowerCase().split(/[\s,]+/) }))
          .filter(({ toks }) => ws.every((w) => toks.some((t) => t.startsWith(w))))
          .map(({ id }) => id)
      },
      textOf: (id) => ENTRIES[id]!.text,
      allIds: () => ENTRIES.map((_, i) => i),
      isKeywordEntry: (id) => !!ENTRIES[id]!.frag,
    }
    const plan = planQuery('"triangolo isoscele"') as any
    assert.strictEqual(plan.mode, "boolean")
    const ids = await evaluateBoolean(plan.ast, c)
    assert.ok(!ids.includes(1), "q02 (no isoscele) is not a phrase hit")
    assert.deepStrictEqual(new Set(ids), new Set([0, 2]))
    for (const id of ids) {
      const key = ENTRIES[id]!.key
      const target = previewTargetOf(key, "/raccolta-gare-mate/" + key)
      const page = readerPage()
      if (target.frag) assert.ok(isolateAtom(page, target.frag))
      const shown = page.textContent.toLowerCase()
      assert.ok(shown.includes("triangolo isoscele"), `${key}: preview must contain the phrase`)
      if (target.frag) assert.ok(!shown.includes("numeri con 4 divisori"), `${key}: no other quesito`)
    }
  })
})

describe("v5: -word == NOT word, one operand; /cerca count hooks", () => {
  const D = [
    "triangolo rettangolo isoscele", // 0
    "triangolo equilatero", // 1
    "cerchio inscritto in un triangolo", // 2
    "rettangolo aureo", // 3
    "cerchio e quadrato", // 4
  ]
  const c: EvalContext = {
    async searchTerms(text) {
      const ws = text.toLowerCase().split(/\s+/).filter(Boolean)
      return D.map((d, id) => ({ id, toks: d.split(" ") }))
        .filter(({ toks }) => ws.every((w) => toks.some((t) => t.startsWith(w))))
        .map(({ id }) => id)
    },
    textOf: (id) => D[id]!,
    allIds: () => D.map((_, i) => i),
  }
  const ids = async (q: string) => {
    const plan = planQuery(q) as any
    assert.strictEqual(plan.mode, "boolean", q)
    return [...(await evaluateBoolean(plan.ast, c))].sort()
  }
  test("leading / infix minus and NOT give the same set (and count)", async () => {
    const want = [1, 2]
    for (const q of [
      "triangolo -rettangolo",
      "-rettangolo triangolo",
      "triangolo NOT rettangolo",
      "NOT rettangolo triangolo",
    ])
      assert.deepStrictEqual(await ids(q), want, q)
  })
  test("-b alone == NOT b alone (universe minus b)", async () => {
    assert.deepStrictEqual(await ids("-rettangolo"), [1, 2, 4])
    assert.deepStrictEqual(await ids("NOT rettangolo"), [1, 2, 4])
  })
  test("a -b c: minus negates only the next word", async () => {
    assert.deepStrictEqual(await ids("cerchio -quadrato triangolo"), [2])
    assert.deepStrictEqual(await ids("-quadrato cerchio triangolo"), [2])
    assert.deepStrictEqual(await ids("cerchio triangolo NOT quadrato"), [2])
    assert.deepStrictEqual(await ids("cerchio NOT quadrato triangolo"), [2])
  })
  test("NOT still negates a whole phrase / group / field", async () => {
    assert.deepStrictEqual(await ids('triangolo -"triangolo equilatero"'), [0, 2])
    assert.deepStrictEqual(await ids("triangolo NOT (rettangolo OR equilatero)"), [2])
  })
  test("in-page row filter (/cerca, lists): same equivalence", () => {
    for (const [a, b] of [
      ["-rettangolo triangolo", "triangolo NOT rettangolo"],
      ["cerchio -quadrato triangolo", "cerchio triangolo NOT quadrato"],
      ["-rettangolo", "NOT rettangolo"],
    ]) {
      const ma = makeRowMatcher(a)!
      const mb = makeRowMatcher(b)!
      assert.deepStrictEqual(D.map((d) => ma(d)), D.map((d) => mb(d)), `${a} vs ${b}`)
    }
    const m = makeRowMatcher("-rettangolo triangolo")!
    assert.deepStrictEqual(D.map((d) => m(d)), [false, true, true, false, false])
  })
  test("/cerca count: .rgf-search-count[data-search-count] + query, removed when nothing listed", () => {
    const cls = new Set<string>()
    const attrs: Record<string, string> = {}
    const el = {
      classList: { add: (x: string) => void cls.add(x) },
      setAttribute: (k: string, v: string) => void (attrs[k] = v),
      removeAttribute: (k: string) => void delete attrs[k],
    }
    markResultCount(el, 42, "-rettangolo triangolo")
    assert.ok(cls.has("rgf-search-count"))
    assert.strictEqual(attrs["data-search-count"], "42")
    assert.strictEqual(attrs["data-search-query"], "-rettangolo triangolo")
    assert.strictEqual(attrs["data-search-state"], "done")
    markResultCount(el, 0, "")
    assert.strictEqual(attrs["data-search-count"], "0")
    markResultCount(el, null, "")
    assert.strictEqual(attrs["data-search-count"], undefined)
    assert.strictEqual(attrs["data-search-state"], undefined)
  })
})

describe("v5: phrase = the phrase or its synonym phrases, nothing more", () => {
  const SYN5 = [
    { termini: ["quantità di moto", "momentum", "linear momentum", "impuls"] },
    { termini: ["conservazione della quantità di moto", "conservation of momentum"] },
    { termini: ["momento angolare", "angular momentum", "torque & angular momentum analysis"] },
    { termini: ["impulso", "impulse"] },
  ]
  const D = [
    { t: "Un carrello urta un altro: quantità di moto totale", m: "" }, // 0 literal
    { t: "Two carts collide, find the momentum", m: "" }, // 1 synonym, whole word
    { t: "impulsi onda corda", m: "", kw: true }, // 2 keyword bag: 'impuls' only as a prefix
    { t: "problema urto", m: "Conservation of Momentum" }, // 3 metadata, same concept
    { t: "disco rotante", m: "Torque & Angular Momentum Analysis" }, // 4 metadata, other concept
    { t: "moto quantità di carrello", m: "", kw: true }, // 5 keyword bag with all words
    { t: "il moto di una quantità", m: "" }, // 6 running text, words but not the phrase
  ]
  const slugs = D.map((_, i) => `p#q${i}`)
  const meta = new MetaIndex({ f: ["methods"], r: Object.fromEntries(D.map((d, i) => [slugs[i], [d.m]])) })
  const toIds = (ss: string[] | null) => (ss === null ? null : ss.map((s) => slugs.indexOf(s)))
  const c: EvalContext = {
    async searchTerms(text) {
      const ws = foldText(text).split(" ")
      return D.map((d, id) => ({ id, toks: foldText(d.t).split(/[^a-z0-9]+/) }))
        .filter(({ toks }) => ws.every((w) => toks.some((t) => t.startsWith(w))))
        .map(({ id }) => id)
    },
    textOf: (id) => D[id]!.t,
    allIds: () => D.map((_, i) => i),
    isKeywordEntry: (id) => !!D[id]!.kw,
    expand: (t) => synonymAlternatives(t),
    metaSearch: (t, a) => toIds(meta.matchAny(t, a))!,
    fieldSearch: (f, v, a) => toIds(meta.matchField(f, v, a)),
  }
  const run = async (q: string) => {
    setSynonyms(SYN5)
    const plan = planQuery(q) as any
    assert.strictEqual(plan.mode, "boolean")
    return (await evaluateBoolean(plan.ast, c)).sort((a, b) => a - b)
  }
  test("phrase: literal + keyword bag; translations only where the words match too", async () =>
    assert.deepStrictEqual(await run('"quantità di moto"'), [0, 5]))
  test("no prefix match for synonym phrases on keyword bags ('impuls' !~ 'impulsi')", async () =>
    assert.ok(!(await run('"quantità di moto"')).includes(2), "doc 2"))
  test("a synonym inside a longer term of another concept does not count (angular momentum)", async () => {
    assert.deepStrictEqual(await run('"momentum"'), [0, 1, 3]) // not 4: Torque & Angular Momentum
    assert.ok((await run("momentum")).includes(4), "typed word: plain prefix match in metadata")
  })
  test("phrase result is a subset of the union of its variants", async () => {
    const p = await run('"quantità di moto"')
    const u = new Set<number>()
    for (const v of ["quantità di moto", "momentum", "linear momentum", "impuls"]) {
      for (const id of await run(`"${v}"`)) u.add(id)
    }
    assert.ok(p.every((id) => u.has(id)), `${p} ⊄ ${[...u]}`)
  })
  test("space == AND: every spelling of the same words gives the same set", async () => {
    const ref = await run("quantità AND moto")
    for (const q of ["quantità di moto", "quantità AND di AND moto", "(quantità moto)", "moto quantità AND di", "(quantità) AND (moto)"]) {
      assert.deepStrictEqual(await run(q), ref, q)
    }
    assert.deepStrictEqual(ref, [0, 5, 6]) // plain intersection, no term merging
  })
  test("a phrase is a subset of its words AND-ed", async () => {
    const and = new Set(await run("quantità moto"))
    const p = await run('"quantità di moto"')
    assert.ok(p.every((id) => and.has(id)), `${p} ⊄ ${[...and]}`)
    assert.ok(!p.includes(6), "words, not the phrase")
  })
  test("unquoted multi-word query: literal order ranks first", async () => {
    assert.strictEqual((await run("quantità di moto"))[0], 0)
  })
  test("row matcher: space == AND, phrase ⊆ AND", () => {
    setSynonyms(SYN5)
    const rows: [string, RowFields][] = D.map((d) => [d.t, { methods: d.m }])
    const sel = (q: string) => rows.map((r, i) => (makeRowMatcher(q)!(r[0], r[1]) ? i : -1)).filter((i) => i >= 0)
    const and = sel("quantità AND moto")
    assert.deepStrictEqual(sel("quantità di moto"), and)
    assert.deepStrictEqual(sel("quantità AND di AND moto"), and)
    assert.ok(sel('"quantità di moto"').every((i) => and.includes(i)), "phrase ⊆ AND")
    assert.ok(and.includes(6) && !sel('"quantità di moto"').includes(6), "doc 6")
  })
  test("row matcher: same synonym rule on metadata", () => {
    setSynonyms(SYN5)
    const m = makeRowMatcher('"momentum"')!
    assert.strictEqual(m("problema urto", { methods: "Conservation of Momentum" }), true)
    assert.strictEqual(m("disco rotante", { methods: "Torque & Angular Momentum Analysis" }), false)
  })
})

// ---------------------------------------------------------------------------
// v6: set invariants. A dictionary term that contains other words ("urto elastico" in
// the "urto" group) must never turn an AND into a union.
// ---------------------------------------------------------------------------
describe("v6: AND/NOT/phrase invariants (overlay + in-page lists)", () => {
  const SYN6 = [
    { termini: ["urto", "collision", "urto elastico", "elastic collision", "urto anelastico"] },
    { termini: ["elastico", "elastic"] },
    { termini: ["triangolo", "triangle", "triangolo rettangolo", "right triangle"] },
    { termini: ["rettangolo", "rectangle"] },
    { termini: ["quantità di moto", "momentum"] },
  ]
  const D = [
    { t: "urto elastico tra due sfere", m: "" }, // 0
    { t: "urto anelastico con attrito", m: "" }, // 1
    { t: "elastic collision of two carts", m: "" }, // 2
    { t: "collision in one dimension", m: "Elastic Potential Energy" }, // 3
    { t: "molla elastica compressa", m: "" }, // 4
    { t: "triangolo rettangolo inscritto", m: "" }, // 5
    { t: "area of a right triangle", m: "" }, // 6
    { t: "rettangolo e cerchio", m: "" }, // 7
    { t: "triangolo isoscele", m: "Triangle" }, // 8
    { t: "the momentum is conserved", m: "Conservation of Momentum" }, // 9
    { t: "moto di una quantità di gas", m: "" }, // 10
  ]
  const slugs = D.map((_, i) => `p#q${i}`)
  const meta = new MetaIndex({ f: ["topics"], r: Object.fromEntries(D.map((d, i) => [slugs[i], [d.m]])) })
  const toIds = (ss: string[] | null) => (ss === null ? null : ss.map((s) => slugs.indexOf(s)))
  const c: EvalContext = {
    async searchTerms(text) {
      const ws = foldText(text).split(" ")
      return D.map((d, id) => ({ id, toks: foldText(d.t).split(/[^a-z0-9]+/) }))
        .filter(({ toks }) => ws.every((w) => toks.some((t) => t.startsWith(w))))
        .map(({ id }) => id)
    },
    textOf: (id) => D[id]!.t,
    allIds: () => D.map((_, i) => i),
    expand: (t) => synonymAlternatives(t),
    metaSearch: (t, a) => toIds(meta.matchAny(t, a))!,
    fieldSearch: (f, v, a) => toIds(meta.matchField(f, v, a)),
  }
  const ov = async (q: string) => {
    setSynonyms(SYN6)
    const plan = planQuery(q) as any
    assert.strictEqual(plan.mode, "boolean", q)
    return new Set(await evaluateBoolean(plan.ast, c))
  }
  const rows = (q: string) => {
    setSynonyms(SYN6)
    const m = makeRowMatcher(q)!
    return new Set(D.map((d, i) => (m(d.t, { topics: d.m }) ? i : -1)).filter((i) => i >= 0))
  }
  const sub = (a: Set<number>, b: Set<number>) => [...a].every((x) => b.has(x))
  const eq = (a: Set<number>, b: Set<number>) => sub(a, b) && sub(b, a)
  const PAIRS: [string, string][] = [
    ["urto", "elastico"],
    ["elastico", "urto"],
    ["triangolo", "rettangolo"],
    ["rettangolo", "triangolo"],
    ["quantità", "moto"],
    ["urto", "molla"],
    ["triangolo", "cerchio"],
  ]
  for (const [name, sel] of [["overlay", ov], ["rows", async (q: string) => rows(q)]] as const) {
    for (const [A, B] of PAIRS) {
      test(`${name}: ${A} / ${B}`, async () => {
        const a = await sel(A), b = await sel(B), ab = await sel(`${A} AND ${B}`)
        const anb = await sel(`${A} NOT ${B}`), amb = await sel(`${A} -${B}`), mba = await sel(`-${B} ${A}`)
        assert.ok(ab.size <= Math.min(a.size, b.size) && sub(ab, a) && sub(ab, b), `|A AND B| ${ab.size} > min(${a.size}, ${b.size})`)
        assert.strictEqual(ab.size + anb.size, a.size, "|A AND B| + |A NOT B| = |A|")
        assert.ok(eq(anb, amb) && eq(anb, mba), "NOT == - (any position)")
        for (const q of [`${A} ${B}`, `${B} ${A}`, `(${A}) AND (${B})`, `(${A} ${B})`, `${B} AND ${A}`]) {
          assert.ok(eq(await sel(q), ab), `${q} == ${A} AND ${B}`)
        }
        assert.ok(sub(await sel(`"${A} ${B}"`), ab), `"${A} ${B}" ⊆ AND`)
      })
    }
  }
  test("the urto case: AND intersects even though 'urto elastico' is in the urto group", async () => {
    const ab = await ov("urto AND elastico")
    // 0 literal, 2 via synonyms (collision + elastic), 3 collision + "Elastic" in metadata
    assert.deepStrictEqual([...ab].sort((x, y) => x - y), [0, 2, 3])
    assert.strictEqual((await ov("urto")).size, 4) // 0 1 2 3
  })
})
