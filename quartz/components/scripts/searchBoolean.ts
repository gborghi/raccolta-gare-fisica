// Boolean query support for the site search overlay (quartz-community/search fork).
//
// Single source of truth for the parser/evaluator. scripts/patch-search-boolean.mjs
// copies this file into the gitignored search fork
// (.quartz/plugins/search/src/components/scripts/rgfBoolean.ts) and wires it into
// search.inline.ts. Pure module: no DOM access except mountSearchHelp().
//
// Syntax (documented to users in the help hint, Italian):
//   AND, OR, NOT     operators, UPPERCASE ONLY (lowercase "and/or/not" and the
//                    Italian "e"/"o"/"non" stay ordinary search words)
//   -parola          NOT shorthand (only at the start of a word: "x-ray" is a word)
//   "frase esatta"   exact phrase (case-insensitive, whitespace-collapsed); literal
//                    matches rank first. Per-quesito keyword entries (no running
//                    text in the index) match a phrase by all of its words.
//   ( ... )          grouping
//   precedence       NOT > AND > OR
//   bare words       adjacent bare words form ONE group searched exactly like a
//                    plain query (all words required, prefix match) -> implicit AND.
//                    `(energia OR quantità di moto) AND urto`
//                    == (energia OR (quantità AND di AND moto)) AND urto
//
//   campo:valore     metadata (frontmatter) field filter: `nazione:Japan`,
//                    `anno:2019`, `gara:"Giochi di Archimede"`. Italian/English
//                    aliases (see FIELD_ALIASES) or any raw field name of
//                    static/searchMeta.json. Unknown field -> searched as text.
//
// Extensions (v2):
//   metadata         in boolean queries a bare term also matches the item's
//                    metadata (nation, competition, year, topics, ...), ranked after
//                    text matches: `Brasil AND geometria`.
//   synonyms         every term is expanded into the OR of its cross-language synonym
//                    group (static/sinonimi.json, [{tipo, termini[]}]) before
//                    evaluation; original-term hits rank first. Plain queries keep
//                    the original code path and only APPEND synonym-only results.
//
// A query WITHOUT any of the syntax above is "plain": the caller must run the
// original, untouched search code path (identical results/ranking).
// A malformed query (unbalanced parens/quotes, dangling operator, empty group)
// degrades to a plain search on the query stripped of operator syntax. Never throws.

export type BoolNode =
  | { type: "terms"; text: string }
  | { type: "phrase"; text: string }
  | { type: "field"; field: string; value: string; raw: string }
  | { type: "not"; child: BoolNode }
  | { type: "and"; children: BoolNode[] }
  | { type: "or"; children: BoolNode[] }

export type QueryPlan =
  | { mode: "plain"; query: string }
  | { mode: "fallback"; query: string; reason: string }
  | { mode: "boolean"; query: string; ast: BoolNode; highlight: string }

type Tok =
  | { t: "lp" }
  | { t: "rp" }
  | { t: "and" }
  | { t: "or" }
  | { t: "not" }
  | { t: "word"; v: string }
  | { t: "phrase"; v: string }
  | { t: "field"; f: string; v: string; raw: string }

const KEYWORDS: Record<string, "and" | "or" | "not"> = { AND: "and", OR: "or", NOT: "not" }

class Malformed extends Error {}

/** `campo:valore` at the start of a word (field name: letters/underscore, >= 2 chars). */
const FIELD_RE = /^[\p{L}_]{2,}:[^\s:]/u
const FIELD_PREFIX_RE = /^([\p{L}_]{2,}):/u

function isSpace(c: string): boolean {
  return /\s/.test(c)
}

/** Cheap detection: does the query use ANY boolean syntax? */
export function hasBooleanSyntax(query: string): boolean {
  if (!query) return false
  if (/[()"]/.test(query)) return true
  for (const w of query.split(/\s+/)) {
    if (w === "AND" || w === "OR" || w === "NOT") return true
    if (/^-[^\s-]/.test(w)) return true
    if (FIELD_RE.test(w)) return true
  }
  return false
}

function tokenize(q: string): Tok[] {
  const out: Tok[] = []
  let i = 0
  const n = q.length
  // true when the previous char was whitespace / start / "(" -> a "-" here is NOT
  while (i < n) {
    const c = q[i]!
    if (isSpace(c)) {
      i++
      continue
    }
    if (c === "(") {
      out.push({ t: "lp" })
      i++
      continue
    }
    if (c === ")") {
      out.push({ t: "rp" })
      i++
      continue
    }
    if (c === '"') {
      const end = q.indexOf('"', i + 1)
      if (end < 0) throw new Malformed("unterminated quote")
      const v = q
        .slice(i + 1, end)
        .replace(/\s+/g, " ")
        .trim()
      if (!v) throw new Malformed("empty phrase")
      out.push({ t: "phrase", v })
      i = end + 1
      continue
    }
    if (c === "-" && i + 1 < n && !isSpace(q[i + 1]!) && q[i + 1] !== "-") {
      out.push({ t: "not" })
      i++
      continue
    }
    const fm = FIELD_PREFIX_RE.exec(q.slice(i))
    if (fm && i + fm[0].length < n && !isSpace(q[i + fm[0].length]!)) {
      const f = fm[1]!
      let k = i + fm[0].length
      if (q[k] === '"') {
        const end = q.indexOf('"', k + 1)
        if (end < 0) throw new Malformed("unterminated quote")
        const v = q
          .slice(k + 1, end)
          .replace(/\s+/g, " ")
          .trim()
        if (!v) throw new Malformed("empty field value")
        out.push({ t: "field", f, v, raw: q.slice(i, end + 1) })
        i = end + 1
        continue
      }
      if (q[k] !== "(" && q[k] !== ")") {
        let j = k
        while (j < n && !isSpace(q[j]!) && q[j] !== "(" && q[j] !== ")" && q[j] !== '"') j++
        out.push({ t: "field", f, v: q.slice(k, j), raw: q.slice(i, j) })
        i = j
        continue
      }
    }
    let j = i
    while (j < n && !isSpace(q[j]!) && q[j] !== "(" && q[j] !== ")" && q[j] !== '"') j++
    const w = q.slice(i, j)
    const kw = KEYWORDS[w]
    out.push(kw ? { t: kw } : { t: "word", v: w })
    i = j
  }
  return out
}

function parseTokens(toks: Tok[]): BoolNode {
  let p = 0
  const peek = () => toks[p]
  const startsUnary = (t: Tok | undefined) =>
    !!t && (t.t === "lp" || t.t === "not" || t.t === "word" || t.t === "phrase" || t.t === "field")

  function parseOr(): BoolNode {
    const children = [parseAnd()]
    while (peek()?.t === "or") {
      p++
      children.push(parseAnd())
    }
    return children.length === 1 ? children[0]! : { type: "or", children }
  }
  function parseAnd(): BoolNode {
    const children = [parseUnary()]
    for (;;) {
      const t = peek()
      if (t?.t === "and") {
        p++
        children.push(parseUnary())
      } else if (startsUnary(t)) {
        children.push(parseUnary()) // implicit AND
      } else break
    }
    return children.length === 1 ? children[0]! : { type: "and", children }
  }
  function parseUnary(): BoolNode {
    const t = peek()
    if (!t) throw new Malformed("missing operand")
    if (t.t === "not") {
      p++
      return { type: "not", child: parseUnary() }
    }
    if (t.t === "lp") {
      p++
      if (peek()?.t === "rp") throw new Malformed("empty group")
      const inner = parseOr()
      if (peek()?.t !== "rp") throw new Malformed("unbalanced parenthesis")
      p++
      return inner
    }
    if (t.t === "phrase") {
      p++
      return { type: "phrase", text: t.v }
    }
    if (t.t === "field") {
      p++
      return { type: "field", field: t.f, value: t.v, raw: t.raw }
    }
    if (t.t === "word") {
      const words: string[] = []
      while (peek()?.t === "word") words.push((toks[p++] as { v: string }).v)
      return { type: "terms", text: words.join(" ") }
    }
    throw new Malformed(`unexpected ${t.t}`)
  }

  if (toks.length === 0) throw new Malformed("empty")
  const ast = parseOr()
  if (p !== toks.length) throw new Malformed("unbalanced parenthesis or trailing operator")
  return ast
}

/** Parse a boolean query. Returns null when malformed (never throws). */
export function parseBooleanQuery(query: string): BoolNode | null {
  try {
    return parseTokens(tokenize(query))
  } catch {
    return null
  }
}

/** Query stripped of operator syntax, for the graceful plain-search fallback. */
export function stripBooleanSyntax(query: string): string {
  return query
    .replace(/[()"]/g, " ")
    .split(/\s+/)
    .map((w) => w.replace(FIELD_PREFIX_RE, ""))
    .filter((w) => w && w !== "AND" && w !== "OR" && w !== "NOT")
    .map((w) => w.replace(/^-+(?=[^\s-])/, ""))
    .filter((w) => w && w !== "-")
    .join(" ")
}

/** Words of the positive (non-negated) leaves, for result highlighting. */
export function positiveTerms(node: BoolNode, negated = false): string[] {
  switch (node.type) {
    case "terms":
    case "phrase":
      return negated ? [] : node.text.split(/\s+/).filter(Boolean)
    case "field":
      return negated ? [] : node.value.split(/\s+/).filter(Boolean)
    case "not":
      return positiveTerms(node.child, !negated)
    case "and":
    case "or":
      return node.children.flatMap((c) => positiveTerms(c, negated))
  }
}

/**
 * Short function words (IT/EN/FR/ES/PT/DE). Inside a multi-word operand they are not
 * searched on their own (the engine matches prefixes: "di" would hit "dimostri") and
 * they are never highlighted.
 */
const STOPWORDS = new Set(
  (
    "a ad al allo ai agli all alla alle col coi con da dal dallo dai dagli dall dalla dalle de " +
    "dei degli del dell della delle dello di e ed gli i il in l la le lo nei negli nel nell " +
    "nella nelle nello o per su sul sullo sui sugli sull sulla sulle tra fra un una uno " +
    "che non si se " +
    "an and as at by for from in into is of on or the to with " +
    "au aux des du en et les un une " +
    "el los las y del " +
    "da do dos das em no na nos nas os um uma " +
    "der die das und den dem ein eine"
  ).split(" "),
)

export function isStopword(w: string): boolean {
  return STOPWORDS.has(foldText(w))
}

/** Words of a bare-word group that are searched (stopwords dropped unless only stopwords). */
export function contentWords(text: string): string[] {
  const words = text.split(/\s+/).filter(Boolean)
  const kept = words.filter((w) => !isStopword(w) && w.length > 1)
  return kept.length > 0 ? kept : words
}

/** Terms to highlight for a boolean query: positive words, no stopwords / 1-letter tokens. */
export function highlightTerms(node: BoolNode): string[] {
  const words = positiveTerms(node).filter((w) => w.length > 1 && !isStopword(w))
  return [...new Set(words)]
}

/** Decide how a (tag-stripped) query must be searched. Never throws. */
export function planQuery(query: string): QueryPlan {
  try {
    if (!hasBooleanSyntax(query)) return { mode: "plain", query }
    const ast = parseBooleanQuery(query)
    if (!ast) {
      const stripped = stripBooleanSyntax(query)
      return { mode: "fallback", query: stripped || query, reason: "malformed" }
    }
    const words = highlightTerms(ast)
    const fallback = [...new Set(positiveTerms(ast))]
    return { mode: "boolean", query, ast, highlight: (words.length ? words : fallback).join(" ") }
  } catch {
    return { mode: "plain", query }
  }
}

/** Term to highlight / remember for a query (identity for plain queries). */
export function displayTerm(query: string): string {
  const plan = planQuery(query)
  if (plan.mode === "boolean") return plan.highlight
  return plan.query
}

// ---------------------------------------------------------------------------
// Text folding, synonyms, metadata
// ---------------------------------------------------------------------------

/** Lowercase + whitespace-collapse, the same case handling as the search encoder. */
export function normalizeText(s: string): string {
  return s.toLowerCase().replace(/\s+/g, " ")
}

/** Case/accent-insensitive form ("Giappone" == "giappone", "Japão" == "japao"). */
export function foldText(s: string): string {
  return String(s ?? "")
    .normalize("NFD")
    .replace(/\p{M}+/gu, "")
    .toLowerCase()
    .replace(/[_\s]+/g, " ")
    .trim()
}

export interface SynonymGroup {
  tipo?: string
  termini: string[]
}

let synMap: Map<string, string[]> = new Map()

/** Install the synonym dictionary (format of static/sinonimi.json). */
export function setSynonyms(groups: SynonymGroup[] | null | undefined): void {
  const m = new Map<string, Set<string>>()
  for (const g of Array.isArray(groups) ? groups : []) {
    const terms = [...new Set((g?.termini || []).map(foldText).filter(Boolean))]
    if (terms.length < 2) continue
    for (const t of terms) {
      let s = m.get(t)
      if (!s) m.set(t, (s = new Set()))
      for (const o of terms) if (o !== t) s.add(o)
    }
  }
  synMap = new Map([...m].map(([k, v]) => [k, [...v]]))
}

export function hasSynonyms(): boolean {
  return synMap.size > 0
}

const MAX_EXPANSIONS = 24

/**
 * Synonym alternatives of a leaf text, EXCLUDING the text itself (folded).
 * Whole leaf first ("quantità di moto" -> "momentum"); otherwise per word
 * (cartesian product, capped): "molla energia" -> "spring energia", ...
 */
export function synonymAlternatives(text: string): string[] {
  const f = foldText(text)
  if (!f || synMap.size === 0) return []
  const whole = synMap.get(f)
  if (whole) return whole.slice(0, MAX_EXPANSIONS)
  const words = f.split(" ")
  if (words.length < 2) return []
  const options = words.map((w) => [w, ...(synMap.get(w) || [])])
  if (options.every((o) => o.length === 1)) return []
  let combos: string[][] = [[]]
  for (const opt of options) {
    const next: string[][] = []
    for (const c of combos) for (const o of opt) if (next.length < MAX_EXPANSIONS + 1) next.push([...c, o])
    combos = next
  }
  return combos
    .slice(1)
    .map((c) => c.join(" "))
    .filter((s) => s !== f)
}

/** Field aliases (Italian / English) -> candidate metadata keys. */
export const FIELD_ALIASES: Record<string, string[]> = {
  nazione: ["country", "flag_name"],
  paese: ["country", "flag_name"],
  stato: ["country", "flag_name"],
  country: ["country", "flag_name"],
  nation: ["country", "flag_name"],
  gara: ["competition", "comp_code", "family"],
  competizione: ["competition", "comp_code", "family"],
  competition: ["competition", "comp_code", "family"],
  famiglia: ["family"],
  anno: ["year"],
  year: ["year"],
  livello: ["level"],
  level: ["level"],
  fase: ["level"],
  difficolta: ["difficolta"],
  difficulty: ["difficolta"],
  tipo: ["tipo_gara", "modalita"],
  modalita: ["modalita"],
  argomento: ["topics"],
  argomenti: ["topics"],
  topic: ["topics"],
  tema: ["topics"],
  metodo: ["methods"],
  metodi: ["methods"],
  method: ["methods"],
  abilita: ["skills"],
  competenza: ["skills"],
  skill: ["skills"],
  oggetto: ["objects"],
  oggetti: ["objects"],
  object: ["objects"],
  area: ["cluster", "topics"],
  cluster: ["cluster"],
  quesito: ["quesito"],
  numero: ["quesito"],
  problema: ["quesito"],
  risposta: ["answer"],
  answer: ["answer"],
  testo: ["summary"],
}

/** Metadata keys a `campo:` name refers to, among the available ones (empty = unknown). */
export function resolveField(name: string, available: Iterable<string>): string[] {
  const avail = new Set(available)
  const f = foldText(name).replace(/ /g, "_")
  const out: string[] = []
  if (avail.has(f)) out.push(f)
  for (const k of FIELD_ALIASES[f] || []) if (avail.has(k) && !out.includes(k)) out.push(k)
  if (out.length === 0 && avail.has(f + "s")) out.push(f + "s")
  return out
}

/**
 * Compact metadata index: static/searchMeta.json, written by scripts/make-search-meta.mjs.
 * Rows hold indexes into `v` (-1 = empty, arrays for list fields); plain string rows
 * (no `v`) are accepted too.
 */
export interface SearchMeta {
  /** field names */
  f: string[]
  /** unique values */
  v?: string[]
  /** id (index slug, "page#frag") -> values aligned with f */
  r: Record<string, (number | number[] | string | null)[]>
}

function padHay(s: string): string {
  return " " + foldText(s).replace(/[^\p{L}\p{N}]+/gu, " ") + " "
}

/** `alt` occurs as WHOLE word(s) in the padded hay (synonym rule: no prefix match). */
function wholeIn(hay: string, alt: string): boolean {
  const a = padHay(alt).trim()
  return a.length > 0 && hay.includes(" " + a + " ")
}

/** Synonym alternative occurs as whole word(s) in a raw text. */
export function containsWhole(text: string, alt: string): boolean {
  return wholeIn(padHay(text), alt)
}

/** Every word of `needle` starts a word of the padded hay (prefix match, like the engine). */
function wordsIn(hay: string, needle: string): boolean {
  const words = padHay(needle).trim().split(" ").filter(Boolean)
  return words.length > 0 && words.every((w) => hay.includes(" " + w))
}

export class MetaIndex {
  readonly fields: string[]
  private rows: Record<string, (string | null)[]>
  private hay = new Map<string, string>()
  constructor(meta: SearchMeta) {
    this.fields = Array.isArray(meta?.f) ? meta.f : []
    const vals = Array.isArray(meta?.v) ? meta.v : null
    const dec = (x: number | number[] | string | null): string | null => {
      if (x == null) return null
      if (typeof x === "string") return x || null
      if (Array.isArray(x)) return x.map((i) => (vals ? vals[i] : String(i)) ?? "").filter(Boolean).join("|") || null
      return x < 0 ? null : vals ? (vals[x] ?? null) : String(x)
    }
    this.rows = {}
    const r = meta?.r && typeof meta.r === "object" ? meta.r : {}
    for (const k of Object.keys(r)) this.rows[k] = (r[k] || []).map(dec)
  }
  ids(): string[] {
    return Object.keys(this.rows)
  }
  /** Field -> raw value map of one id (lists joined by "|"), or undefined. */
  fieldsOf(id: string): Record<string, string> | undefined {
    const v = this.rows[id]
    if (!v) return undefined
    const o: Record<string, string> = {}
    this.fields.forEach((f, i) => {
      if (v[i]) o[f] = String(v[i])
    })
    return o
  }
  private hayOf(id: string): string {
    let h = this.hay.get(id)
    if (h === undefined) {
      h = padHay((this.rows[id] || []).filter(Boolean).join(" "))
      this.hay.set(id, h)
    }
    return h
  }
  /**
   * Ids whose metadata contains all words of `text` (word-prefix, like the engine) or
   * one of the synonym alternatives as whole word(s).
   */
  matchAny(text: string, alts: string[] = []): string[] {
    const out: string[] = []
    for (const id of Object.keys(this.rows)) {
      const h = this.hayOf(id)
      if (wordsIn(h, text) || alts.some((a) => wholeIn(h, a))) out.push(id)
    }
    return out
  }
  /** Ids whose field(s) contain the value (or a synonym, whole word); null = unknown field. */
  matchField(name: string, value: string, alts: string[] = []): string[] | null {
    const keys = resolveField(name, this.fields)
    if (keys.length === 0) return null
    const idx = keys.map((k) => this.fields.indexOf(k))
    const out: string[] = []
    for (const [id, v] of Object.entries(this.rows)) {
      if (idx.some((i) => v[i] && fieldValueMatches(String(v[i]), value, alts))) out.push(id)
    }
    return out
  }
}

/** Typed value: substring (accent/case-insensitive); synonym alternatives: whole word(s). */
function fieldValueMatches(raw: string, value: string, alts: string[]): boolean {
  const n = foldText(value)
  return raw.split("|").some((v) => {
    if (n && foldText(v).includes(n)) return true
    if (alts.length === 0) return false
    const h = padHay(v)
    return alts.some((a) => wholeIn(h, a))
  })
}

// Lazy loaders (browser). Cached; failures resolve to "no data" (never throw).
let synPromise: Promise<boolean> | null = null
let metaPromise: Promise<MetaIndex | null> | null = null
let metaValue: MetaIndex | null = null

export function loadSynonyms(prefix: string): Promise<boolean> {
  if (!synPromise) {
    synPromise = fetch(prefix + "static/sinonimi.json")
      .then((r) => (r.ok ? r.json() : []))
      .then((j) => {
        setSynonyms(j as SynonymGroup[])
        return hasSynonyms()
      })
      .catch(() => false)
  }
  return synPromise
}

export function loadSearchMeta(prefix: string): Promise<MetaIndex | null> {
  if (!metaPromise) {
    metaPromise = fetch(prefix + "static/searchMeta.json")
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => (metaValue = j ? new MetaIndex(j as SearchMeta) : null))
      .catch(() => null)
  }
  return metaPromise
}

export function getSearchMeta(): MetaIndex | null {
  return metaValue
}

/** For tests / non-fetch environments. */
export function setSearchMeta(meta: SearchMeta | null): void {
  metaValue = meta ? new MetaIndex(meta) : null
  metaPromise = Promise.resolve(metaValue)
}

/** Relative prefix from the current page to the site root (Quartz slugs, works under /repo/). */
export function sitePrefix(): string {
  try {
    const slug = (document.body?.dataset?.slug as string) || ""
    const depth = slug ? slug.split("/").length - 1 : 0
    return depth > 0 ? "../".repeat(depth) : "./"
  } catch {
    return "./"
  }
}

/** Does this query need the metadata index (boolean / field syntax)? */
export function queryNeedsMeta(query: string): boolean {
  return planQuery(query).mode === "boolean"
}

// ---------------------------------------------------------------------------
// Overlay evaluator (async, engine-backed)
// ---------------------------------------------------------------------------

export interface EvalContext {
  /** Ranked ids for a run of bare words, searched like a plain query (all words, prefix). */
  searchTerms(text: string): Promise<number[]>
  /** Text (title + content) of a document, for exact-phrase checks. */
  textOf(id: number): string
  /** Every document id (universe for NOT). */
  allIds(): number[]
  /** True for keyword-bag entries (no running text): phrases match them by all words. */
  isKeywordEntry?(id: number): boolean
  /** Synonym alternatives of a leaf (excluding itself). Default: none. */
  expand?(text: string): string[]
  /** Ids whose metadata matches the text (prefix) or a synonym alternative (whole word). */
  metaSearch?(text: string, alts: string[]): number[]
  /** Ids whose field matches the value or a synonym; null = unknown field (searched as text). */
  fieldSearch?(field: string, value: string, alts: string[]): number[] | null
}

type Scored = Map<number, number> // id -> rank score (lower = better)

/**
 * Rank offsets: literal-phrase hits of a multi-word operand < its other all-words hits <
 * synonym-only hits < metadata-only hits.
 */
const OFF_LOOSE = 5e5
const OFF_SYN = 1e6
const OFF_META = 2e6

function addRanked(m: Scored, ids: number[], offset: number): void {
  ids.forEach((id, i) => {
    const s = offset + i
    const prev = m.get(id)
    if (prev === undefined || s < prev) m.set(id, s)
  })
}

async function evalNode(node: BoolNode, ctx: EvalContext): Promise<Scored> {
  switch (node.type) {
    case "terms": {
      const m: Scored = new Map()
      const words = node.text.split(/\s+/).filter(Boolean)
      if (words.length < 2) {
        addRanked(m, await ctx.searchTerms(node.text), 0)
      } else {
        // multi-word operand ("quantità di moto"): the words in this order rank first
        // (like a phrase); then the other documents with all the content words
        // (stopwords are not searched alone: "di" would prefix-match "dimostri")
        const ids = await ctx.searchTerms(contentWords(node.text).join(" "))
        const needle = normalizeText(node.text)
        const literal: number[] = []
        const loose: number[] = []
        for (const id of ids) (normalizeText(ctx.textOf(id)).includes(needle) ? literal : loose).push(id)
        addRanked(m, literal, 0)
        addRanked(m, loose, OFF_LOOSE)
      }
      const alts = ctx.expand ? ctx.expand(node.text) : []
      // synonyms: whole-word only (the engine matches prefixes -> post-filter), ranked
      // after every hit of the typed term
      for (const a of alts) {
        const hits = (await ctx.searchTerms(a)).filter((id) => containsWhole(ctx.textOf(id), a))
        addRanked(m, hits, OFF_SYN)
      }
      if (ctx.metaSearch) addRanked(m, ctx.metaSearch(node.text, alts), OFF_META)
      return m
    }
    case "phrase": {
      // Literal (adjacent-words) matches first. Keyword-only index entries (per-quesito
      // atoms whose `content` is a bag of keywords, word order lost) cannot contain a
      // phrase literally: for those, all the phrase's words are required (as in a plain
      // query) and they rank after the literal matches. Synonyms of the WHOLE phrase
      // count as literal alternatives (ranked after the original).
      const variants = [node.text, ...(ctx.expand ? ctx.expand(node.text) : [])]
      const m: Scored = new Map()
      for (let v = 0; v < variants.length; v++) {
        const needle = normalizeText(variants[v]!)
        const fneedle = variants[v]!
        const ids = await ctx.searchTerms(variants[v]!)
        const literal: number[] = []
        const loose: number[] = []
        const seen = new Set<number>()
        for (const id of ids) {
          if (seen.has(id)) continue
          seen.add(id)
          const t = ctx.textOf(id)
          if (v === 0 ? normalizeText(t).includes(needle) : containsWhole(t, fneedle)) literal.push(id)
          else if (ctx.isKeywordEntry?.(id)) loose.push(id)
        }
        addRanked(m, literal.concat(loose), v === 0 ? 0 : OFF_SYN)
      }
      if (ctx.metaSearch) addRanked(m, ctx.metaSearch(node.text, variants.slice(1)), OFF_META)
      return m
    }
    case "field": {
      const alts = ctx.expand ? ctx.expand(node.value) : []
      const hit = ctx.fieldSearch ? ctx.fieldSearch(node.field, node.value, alts) : null
      if (hit === null) return evalNode({ type: "terms", text: node.raw.replace(/[:"]/g, " ").trim() }, ctx)
      const m: Scored = new Map()
      addRanked(m, hit, 0)
      return m
    }
    case "not": {
      const excluded = await evalNode(node.child, ctx)
      const all = ctx.allIds()
      const m: Scored = new Map()
      for (const id of all) if (!excluded.has(id)) m.set(id, OFF_META * 2)
      return m
    }
    case "and": {
      const positives = node.children.filter((c) => c.type !== "not")
      const negatives = node.children.filter((c) => c.type === "not") as {
        type: "not"
        child: BoolNode
      }[]
      let acc: Scored | null = null
      for (const c of positives) {
        const r = await evalNode(c, ctx)
        if (acc === null) acc = r
        else {
          const next: Scored = new Map()
          for (const [id, s] of acc) {
            const s2 = r.get(id)
            if (s2 !== undefined) next.set(id, s + s2)
          }
          acc = next
        }
        if (acc.size === 0) return acc
      }
      if (acc === null) {
        // only negations: start from the universe
        const all = ctx.allIds()
        acc = new Map(all.map((id) => [id, OFF_META * 2] as [number, number]))
      }
      for (const n of negatives) {
        const ex = await evalNode(n.child, ctx)
        for (const id of ex.keys()) acc.delete(id)
      }
      return acc
    }
    case "or": {
      const m: Scored = new Map()
      for (const c of node.children) {
        const r = await evalNode(c, ctx)
        for (const [id, s] of r) {
          const prev = m.get(id)
          if (prev === undefined || s < prev) m.set(id, s)
        }
      }
      return m
    }
  }
}

/**
 * Evaluate a boolean AST. Ranking: AND = sum of the operands' ranks, OR = best rank,
 * ties broken by id order from the engine (stable). Returns ids best-first.
 */
export async function evaluateBoolean(ast: BoolNode, ctx: EvalContext): Promise<number[]> {
  const scored = await evalNode(ast, ctx)
  return [...scored.entries()]
    .map(([id, s], i) => ({ id, s, i }))
    .sort((a, b) => a.s - b.s || a.i - b.i)
    .map((x) => x.id)
}

/**
 * Plain query (no operators): ids found ONLY through synonym alternatives, to append
 * after the original results (original ranking untouched). Empty when the query has
 * no synonyms (no extra engine calls).
 */
export async function plainSynonymIds(
  query: string,
  searchTerms: (text: string) => Promise<number[]>,
  textOf?: (id: number) => string,
  maxAlternatives = 8,
): Promise<number[]> {
  const alts = synonymAlternatives(query).slice(0, maxAlternatives)
  const out: number[] = []
  const seen = new Set<number>()
  for (const a of alts) {
    for (const id of await searchTerms(a)) {
      if (textOf && !containsWhole(textOf(id), a)) continue // synonyms: whole word only
      if (!seen.has(id)) {
        seen.add(id)
        out.push(id)
      }
    }
  }
  return out
}

// ---------------------------------------------------------------------------
// In-page list filters (sync): /cerca text box, concept/tag/skill/cluster tables
// ---------------------------------------------------------------------------

/** Row text for list filtering + optional metadata fields (raw values, lists "a|b"). */
export type RowFields = Record<string, string | number | string[] | null | undefined>

export type RowMatcher = (text: string, fields?: RowFields) => boolean

function fieldStr(v: RowFields[string]): string {
  if (v == null) return ""
  return Array.isArray(v) ? v.join("|") : String(v)
}

/**
 * Build a row filter for an in-page search box. Returns null for an empty query.
 *  - plain query: the ORIGINAL test `text.toLowerCase().includes(query)` (identical
 *    results), OR any synonym alternative (accent-insensitive substring).
 *  - boolean / field query: AND/OR/NOT/phrases/`campo:valore`; a bare term matches the
 *    row text OR its metadata (all words as substrings), synonyms included.
 *  - malformed: plain test on the query stripped of syntax.
 */
export function makeRowMatcher(query: string): RowMatcher | null {
  const raw = String(query ?? "").trim()
  if (!raw) return null
  const plan = planQuery(raw)
  if (plan.mode !== "boolean") {
    const q = (plan.mode === "fallback" ? plan.query : raw).trim().toLowerCase()
    if (!q) return null
    const alts = synonymAlternatives(q)
    if (alts.length === 0) return (text) => String(text ?? "").toLowerCase().includes(q)
    return (text) => {
      const t = String(text ?? "").toLowerCase()
      if (t.includes(q)) return true
      const h = padHay(t)
      return alts.some((a) => wholeIn(h, a)) // synonyms: whole word only
    }
  }
  const ast = plan.ast
  return (text, fields) => {
    const ft = foldText(String(text ?? ""))
    let metaHay: string | null = null
    const meta = () => {
      if (metaHay === null) {
        metaHay = fields ? foldText(Object.values(fields).map(fieldStr).join(" | ")) : ""
      }
      return metaHay
    }
    const allWords = (hay: string, s: string) => {
      const ws = contentWords(foldText(s))
      return ws.length > 0 && ws.every((w) => hay.includes(w))
    }
    let hayP: string | null = null
    let metaP: string | null = null
    const synHit = (a: string) =>
      wholeIn((hayP ??= padHay(ft)), a) || wholeIn((metaP ??= padHay(meta())), a)
    const termHit = (s: string) => allWords(ft, s) || allWords(meta(), s)
    const ev = (n: BoolNode): boolean => {
      switch (n.type) {
        case "terms":
          return termHit(n.text) || synonymAlternatives(n.text).some(synHit)
        case "phrase": {
          const p = foldText(n.text)
          return ft.includes(p) || meta().includes(p) || synonymAlternatives(n.text).some(synHit)
        }
        case "field": {
          const keys = fields ? resolveField(n.field, Object.keys(fields)) : []
          if (keys.length === 0) return termHit(n.raw.replace(/[:"]/g, " ")) // unknown field
          const alts = synonymAlternatives(n.value)
          return keys.some((k) => fieldValueMatches(fieldStr(fields![k]), n.value, alts))
        }
        case "not":
          return !ev(n.child)
        case "and":
          return n.children.every(ev)
        case "or":
          return n.children.some(ev)
      }
    }
    try {
      return ev(ast)
    } catch {
      return false
    }
  }
}

const HELP_CSS = `/*rgf-boolean-v3*/
.search > .search-container > .search-space:has(> details.rgf-search-help) > input.search-bar{margin-bottom:.4rem}
.search-space > details.rgf-search-help{width:100%;box-sizing:border-box;margin:0 0 1.2rem;padding:.3rem .8rem;border:1px solid var(--lightgray);border-radius:7px;background:var(--light);box-shadow:none;font-size:.82rem;line-height:1.45;color:var(--darkgray)}
.search-space > details.rgf-search-help > summary{cursor:pointer;list-style:none;display:flex;align-items:center;gap:.4rem;min-height:28px;color:var(--gray);user-select:none}
.search-space > details.rgf-search-help > summary::-webkit-details-marker{display:none}
.search-space > details.rgf-search-help > summary .rgf-q{display:inline-flex;align-items:center;justify-content:center;width:1.25rem;height:1.25rem;border-radius:50%;border:1px solid var(--gray);font-weight:700;font-size:.75rem}
.search-space > details.rgf-search-help ul{margin:.25rem 0 .35rem;padding-left:1.1rem}
.search-space > details.rgf-search-help li{margin:.1rem 0}
.search-space > details.rgf-search-help code{font-size:.8rem;padding:0 .2rem;border-radius:3px;background:var(--lightgray);color:var(--dark);white-space:nowrap}
.search-space > details.rgf-search-help .rgf-nw{white-space:nowrap}
@media (max-width:800px){.search-space > details.rgf-search-help{font-size:.8rem;padding:.25rem .6rem}.search-space > details.rgf-search-help code{white-space:normal}}
`

const HELP_HTML =
  `<summary><span class="rgf-q" aria-hidden="true">?</span>Ricerca avanzata: AND, OR, NOT, "frase", campo:valore</summary>` +
  `<ul>` +
  `<li><code>energia urto</code> tutte le parole (come prima)</li>` +
  `<li><code>energia OR impulso</code> almeno una · <code>AND</code> entrambe</li>` +
  `<li><code>NOT attrito</code> oppure <code>-attrito</code> escludi</li>` +
  `<li><code>"quantità di moto"</code> frase (prima i testi identici) · <code>( )</code> raggruppa</li>` +
  `<li><code>nazione:Japan</code> <code>anno:2019</code> <code>gara:Archimede</code> <code>argomento:geometria</code> filtra per campo (anche <code>livello</code>, <code>difficoltà</code>, <code>metodo</code>, <code>abilità</code>…)</li>` +
  `</ul>` +
  `<div>Operatori in <b>MAIUSCOLO</b> (“e”, “o” restano parole). Con gli operatori le parole cercano anche nei metadati (nazione, gara, anno, argomento): <code>Brasil AND geometria</code>. Sinonimi in più lingue inclusi (<code>molla</code> = <code>spring</code>, <code>Giappone</code> = <code>Japan</code>).</div>`

/** Insert the (collapsible, mobile-friendly) syntax hint right below the search input. */
export function mountSearchHelp(searchSpace: HTMLElement, searchBar: HTMLElement): void {
  try {
    if (!document.getElementById("rgf-search-help-css")) {
      const st = document.createElement("style")
      st.id = "rgf-search-help-css"
      st.textContent = HELP_CSS
      document.head.appendChild(st)
    }
    if (searchSpace.querySelector(".rgf-search-help")) return
    const d = document.createElement("details")
    d.className = "rgf-search-help"
    d.innerHTML = HELP_HTML
    const layout = searchSpace.querySelector(".search-layout")
    searchSpace.insertBefore(d, layout ?? searchBar.nextSibling)
    searchBar.setAttribute("title", 'Operatori: AND, OR, NOT, -parola, "frase esatta", ( ), campo:valore')
  } catch {
    // purely cosmetic
  }
}
