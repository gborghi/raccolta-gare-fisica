// Boolean query support for the site search overlay (quartz-community/search fork).
//
// Single source of truth for the parser/evaluator. scripts/patch-search-boolean.mjs
// copies this file into the gitignored search fork
// (.quartz/plugins/search/src/components/scripts/rgfBoolean.ts) and wires it into
// search.inline.ts. Pure module: no DOM access except mountSearchHelp(), mountResultCount(),
// showResultCount() and isolateAtom() (v4: result count, atom-scoped preview).
//
// Syntax (documented to users in the help hint, Italian):
//   AND, OR, NOT     operators, UPPERCASE ONLY (lowercase "and/or/not" and the
//                    Italian "e"/"o"/"non" stay ordinary search words)
//   -parola          NOT shorthand (only at the start of a word: "x-ray" is a word);
//                    NOT and -x negate ONE operand (next word / phrase / field / group)
//   "frase esatta"   exact phrase (case-insensitive, whitespace-collapsed); literal
//                    matches rank first. Per-quesito keyword entries (no running
//                    text in the index) match a phrase by all of its words (whole
//                    words). A phrase matches the phrase or one of its synonym
//                    phrases -- in the text, the keyword bag or the metadata (whole-word
//                    sequence) -- never more than the union of those variants.
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
// A query WITHOUT any of the syntax above is evaluated the same way (bare words =
// implicit AND), so adding an operator never changes what the words alone mean. Only a
// query with no searchable word (empty, stopwords, 1-letter tokens) is "plain": the
// caller runs the original search code path.
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
      // NOT / -word negates ONE operand: the next word, phrase, field or (group).
      // "-rettangolo triangolo" == "triangolo -rettangolo" == triangolo AND NOT rettangolo
      // (before: NOT swallowed the whole bare-word run -> NOT (rettangolo AND triangolo)).
      if (peek()?.t === "word") {
        return { type: "not", child: { type: "terms", text: (toks[p++] as { v: string }).v } }
      }
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
    if (!hasBooleanSyntax(query)) {
      // Every query with a searchable word is evaluated by the boolean engine, so the
      // same words always give the same set: `urto` ⊇ `urto -elastico`, space == AND
      // (`triangolo isoscele` == `triangolo AND isoscele`), `"a b"` ⊆ `a b`.
      // Only queries without one (empty, stopwords, 1-letter tokens) keep the plain path.
      const content = query.split(/\s+/).filter((w) => w.length > 1 && !isStopword(w))
      if (content.length < 1) return { mode: "plain", query }
    }
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
/** Every dictionary term (padHay form) -> its group's head term (first, usually Italian). */
let synHead: Map<string, string> = new Map()
/** Sorted content words of a multi-word dictionary term ("moto quantita") -> the term ("quantita di moto"). */
let conceptIndex: Map<string, string> = new Map()

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
  synHead = new Map()
  conceptIndex = new Map()
  for (const t of synMap.keys()) {
    const cw = t.split(" ").filter((w) => w.length > 1 && !isStopword(w))
    const key = [...new Set(cw)].sort().join(" ")
    if (cw.length >= 2 && !conceptIndex.has(key)) conceptIndex.set(key, t)
  }
  for (const g of Array.isArray(groups) ? groups : []) {
    const terms = (g?.termini || []).map((t) => padHay(t).trim()).filter(Boolean)
    if (terms.length < 2) continue
    for (const t of terms) if (!synHead.has(t)) synHead.set(t, terms[0])
  }
  shadowCache.clear()
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

/** `alt` occurs as WHOLE word(s) in the padded hay (no prefix match). */
function plainWholeIn(hay: string, alt: string): boolean {
  const a = padHay(alt).trim()
  return a.length > 0 && hay.includes(" " + a + " ")
}

const shadowCache = new Map<string, RegExp | null>()

/**
 * Longer dictionary terms that contain `alt` but name a DIFFERENT concept: "angular
 * momentum" (momento angolare) contains "momentum" (quantità di moto). A term counts as
 * the same concept, and is not a shadow, when the Italian head of its group contains the
 * head of alt's group ("conservazione della quantità di moto" ⊇ "quantità di moto").
 */
function shadowsOf(alt: string): RegExp | null {
  const a = padHay(alt).trim()
  if (shadowCache.has(a)) return shadowCache.get(a)!
  const headA = synHead.get(a)
  const out: string[] = []
  if (headA !== undefined) {
    for (const [t, headT] of synHead) {
      if (t === a || headT === headA || !plainWholeIn(" " + t + " ", a)) continue
      if (plainWholeIn(" " + headT + " ", headA)) continue // sub-concept: keep
      out.push(t)
    }
  }
  out.sort((x, y) => y.length - x.length)
  const esc = (x: string) => x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const re = out.length ? new RegExp("(?<= )(?:" + out.map(esc).join("|") + ")(?= )", "g") : null
  shadowCache.set(a, re)
  return re
}

/**
 * Synonym rule: `alt` occurs as WHOLE word(s) in the padded hay, not counting
 * occurrences inside a longer dictionary term of a different concept ("momentum" in
 * "Torque & Angular Momentum Analysis" is angular momentum, not quantità di moto).
 */
function wholeIn(hay: string, alt: string): boolean {
  if (!plainWholeIn(hay, alt)) return false
  const re = shadowsOf(alt)
  return re === null || plainWholeIn(hay.replace(re, "~"), alt)
}

/** Synonym alternative occurs as whole word(s) in a raw text. */
export function containsWhole(text: string, alt: string): boolean {
  return wholeIn(padHay(text), alt)
}

/** Every content word of `phrase` (all words if only stopwords) occurs as a whole word. */
function allWordsWhole(text: string, phrase: string): boolean {
  const cw = contentWords(phrase)
  const words = cw.length > 0 ? cw : phrase.split(/\s+/).filter(Boolean)
  if (words.length === 0) return false
  const h = padHay(text)
  return words.every((w) => plainWholeIn(h, w))
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
 * Operands of a conjunction, normalized so that SPACE == AND:
 *  - nested ANDs and multi-word bare groups are flattened into single words
 *    (`triangolo isoscele`, `triangolo AND isoscele`, `(triangolo isoscele)` are equal);
 *  - stopwords / 1-letter words are dropped when the conjunction has another operand
 *    ("di" would prefix-match "dimostri");
 *  - consecutive words whose content words are a multi-word dictionary term become a
 *    "concept" (`quantità di moto`, `quantità AND moto` -> "quantità di moto"): the words
 *    AND-ed, OR the term's synonym phrases ("momentum"...). A quoted phrase matches a
 *    subset of that, so `"a b"` ⊆ `a b` == `a AND b`.
 * `runs` = typed multi-word groups: documents containing them literally rank first.
 */
type ConjItem = BoolNode | { type: "concept"; term: string; words: string[] }
function conjItems(children: BoolNode[]): { items: ConjItem[]; runs: string[] } {
  const flat: BoolNode[] = []
  const runs: string[] = []
  const walk = (c: BoolNode) => {
    if (c.type === "and") c.children.forEach(walk)
    else if (c.type === "terms" && /\s/.test(c.text.trim())) {
      runs.push(c.text.trim())
      for (const w of c.text.split(/\s+/)) if (w) flat.push({ type: "terms", text: w })
    } else flat.push(c)
  }
  children.forEach(walk)
  const weak = (c: BoolNode) => c.type === "terms" && (c.text.length < 2 || isStopword(c.text))
  const kept = flat.some((c) => c.type !== "not" && !weak(c)) ? flat.filter((c) => !weak(c)) : flat
  // AND is commutative: any subset of the positive words (largest first) that equals the
  // content words of a dictionary term becomes that concept, whatever the order
  const items: ConjItem[] = []
  const wordIdx = kept.map((c, i) => (c.type === "terms" ? i : -1)).filter((i) => i >= 0)
  const used = new Set<number>()
  if (conceptIndex.size > 0 && wordIdx.length >= 2 && wordIdx.length <= 10) {
    const subsets: number[][] = []
    for (let mask = 1; mask < 1 << wordIdx.length; mask++) {
      const sub = wordIdx.filter((_, b) => mask & (1 << b))
      if (sub.length >= 2) subsets.push(sub)
    }
    subsets.sort((a, b) => b.length - a.length || a[0]! - b[0]!)
    for (const sub of subsets) {
      if (sub.some((i) => used.has(i))) continue
      const words = sub.map((i) => (kept[i] as { text: string }).text)
      const term = conceptIndex.get([...new Set(words.map(foldText))].sort().join(" "))
      if (!term) continue
      sub.forEach((i) => used.add(i))
      items.push({ type: "concept", term, words })
    }
  }
  kept.forEach((c, i) => used.has(i) || items.push(c))
  return { items, runs }
}

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

/** Hits of one phrase variant: literal (substring for the typed phrase, whole words for a
 * synonym phrase), then keyword-bag entries holding all its content words as whole words. */
async function variantHits(variant: string, typed: boolean, ctx: EvalContext): Promise<number[]> {
  const needle = normalizeText(variant)
  const literal: number[] = []
  const loose: number[] = []
  const seen = new Set<number>()
  for (const id of await ctx.searchTerms(variant)) {
    if (seen.has(id)) continue
    seen.add(id)
    const t = ctx.textOf(id)
    if (typed ? normalizeText(t).includes(needle) : containsWhole(t, variant)) literal.push(id)
    // keyword bag: every content word as a WHOLE word -- the engine's prefix match
    // alone let "impuls" pull in "impulsi"
    else if (ctx.isKeywordEntry?.(id) && allWordsWhole(t, variant)) loose.push(id)
  }
  return literal.concat(loose)
}

/** Synonym phrases of a dictionary term: text/keyword hits + metadata (whole-word sequence). */
async function synonymPhraseHits(alts: string[], m: Scored, ctx: EvalContext): Promise<void> {
  for (const a of alts) addRanked(m, await variantHits(a, false, ctx), OFF_SYN)
  if (ctx.metaSearch && alts.length) addRanked(m, ctx.metaSearch("", alts), OFF_META)
}

/** AND of two scored sets: ranks add up. */
function intersect(a: Scored, b: Scored): Scored {
  const next: Scored = new Map()
  for (const [id, s] of a) {
    const s2 = b.get(id)
    if (s2 !== undefined) next.set(id, s + s2)
  }
  return next
}

async function evalConj(children: BoolNode[], ctx: EvalContext): Promise<Scored> {
  const { items, runs } = conjItems(children)
  const positives = items.filter((c) => c.type !== "not")
  const negatives = items.filter((c) => c.type === "not") as { type: "not"; child: BoolNode }[]
  let acc: Scored | null = null
  for (const c of positives) {
    let r: Scored
    if (c.type === "concept") {
      // the words AND-ed (each: text/metadata prefix + its own synonyms) ...
      r = await evalNode({ type: "terms", text: c.words[0]! }, ctx)
      for (const w of c.words.slice(1)) r = intersect(r, await evalNode({ type: "terms", text: w }, ctx))
      // ... OR the dictionary term's synonym phrases ("quantità di moto" -> "momentum")
      if (ctx.expand) await synonymPhraseHits(ctx.expand(c.term), r, ctx)
    } else r = await evalNode(c, ctx)
    acc = acc === null ? r : intersect(acc, r)
    if (acc.size === 0) return acc
  }
  if (acc === null) {
    // only negations: start from the universe
    acc = new Map(ctx.allIds().map((id) => [id, OFF_META * 2] as [number, number]))
  }
  for (const n of negatives) {
    const ex = await evalNode(n.child, ctx)
    for (const id of ex.keys()) acc.delete(id)
  }
  // typed word groups ("quantità di moto"): documents with the words in this order first
  for (const run of runs) {
    const needle = normalizeText(run)
    for (const [id, s] of acc) if (!normalizeText(ctx.textOf(id)).includes(needle)) acc.set(id, s + OFF_LOOSE)
  }
  return acc
}

async function evalNode(node: BoolNode, ctx: EvalContext): Promise<Scored> {
  switch (node.type) {
    case "terms": {
      if (/\s/.test(node.text.trim())) return evalConj([node], ctx)
      const m: Scored = new Map()
      addRanked(m, await ctx.searchTerms(node.text), 0)
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
      const alts = ctx.expand ? ctx.expand(node.text) : []
      const m: Scored = new Map()
      addRanked(m, await variantHits(node.text, true, ctx), 0)
      if (ctx.metaSearch) addRanked(m, ctx.metaSearch("", [node.text]), OFF_META)
      // synonym phrases: same rule as an unquoted dictionary term, so a phrase never
      // matches more than the union of its variants, nor more than its words AND-ed
      await synonymPhraseHits(alts, m, ctx)
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
    case "and":
      return evalConj(node.children, ctx)
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
    const word = (w: string) => termHit(w) || synonymAlternatives(w).some(synHit)
    // same normalization as the overlay: space == AND, dictionary terms = words AND-ed OR
    // their synonym phrases
    const conj = (children: BoolNode[]): boolean => {
      const { items } = conjItems(children)
      return items.every((c) =>
        c.type === "concept"
          ? c.words.every(word) || synonymAlternatives(c.term).some(synHit)
          : ev(c),
      )
    }
    const ev = (n: BoolNode): boolean => {
      switch (n.type) {
        case "terms":
          return /\s/.test(n.text.trim()) ? conj([n]) : word(n.text)
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
          return conj(n.children)
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

const HELP_CSS = `/*rgf-boolean-v4*/
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
.search-space > .rgf-search-count{margin:-.9rem 0 .6rem;padding:0 .2rem;font-size:.8rem;line-height:1.3;color:var(--gray);font-variant-numeric:tabular-nums}
.search-space > .rgf-search-count[hidden]{display:none}
`

const HELP_HTML =
  `<summary><span class="rgf-q" aria-hidden="true">?</span>Ricerca avanzata: AND, OR, NOT, "frase", campo:valore</summary>` +
  `<ul>` +
  `<li><code>energia urto</code> tutte le parole: lo spazio vale <code>AND</code></li>` +
  `<li><code>energia OR impulso</code> almeno una · <code>AND</code> entrambe</li>` +
  `<li><code>NOT attrito</code> oppure <code>-attrito</code> escludi</li>` +
  `<li><code>"quantità di moto"</code> frase esatta o una sua traduzione: restringe <code>quantità di moto</code> · <code>( )</code> raggruppa</li>` +
  `<li><code>nazione:Japan</code> <code>anno:2019</code> <code>gara:Archimede</code> <code>argomento:geometria</code> filtra per campo (anche <code>livello</code>, <code>difficoltà</code>, <code>metodo</code>, <code>abilità</code>…)</li>` +
  `</ul>` +
  `<div>Operatori in <b>MAIUSCOLO</b> (“e”, “o” restano parole). Le parole cercano anche nei metadati (nazione, gara, anno, argomento): <code>Brasil geometria</code>. Sinonimi in più lingue inclusi (<code>molla</code> = <code>spring</code>, <code>Giappone</code> = <code>Japan</code>).</div>`

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

// ---------------------------------------------------------------------------
// v4: visible result count, atom-scoped preview
// ---------------------------------------------------------------------------

/** Interface language of the page (<html lang>): "en" for English pages, else "it". */
export function interfaceLang(lang?: string | null): "it" | "en" {
  let l = lang
  if (l == null) {
    try {
      l = document.documentElement.lang
    } catch {
      l = ""
    }
  }
  return /^en\b/i.test(String(l || "").trim()) ? "en" : "it"
}

/**
 * Label of the visible result count. `capped` = the index loaded on this device is a
 * truncated one (mobile tier), so the total is a lower bound: "almeno N risultati".
 */
export function formatResultCount(
  n: number,
  opts: { lang?: "it" | "en"; capped?: boolean } = {},
): string {
  const lang = opts.lang ?? "it"
  const num = Math.max(0, Math.floor(Number(n) || 0))
  const shown = num.toLocaleString(lang === "en" ? "en-US" : "it-IT")
  const atLeast = opts.capped && num > 0
  if (lang === "en") return (atLeast ? "at least " : "") + shown + (num === 1 ? " result" : " results")
  return (atLeast ? "almeno " : "") + shown + (num === 1 ? " risultato" : " risultati")
}

const COUNT_LOADING = { it: "Caricamento dell’indice di ricerca…", en: "Loading the search index…" }

/**
 * Mount (once) the result-count line between the syntax hint and the results.
 * Stable hooks for testers: `.rgf-search-count`, `[data-search-count]` (the number, set
 * only once known), `data-search-query` (the query it counts), `data-search-capped`.
 */
export function mountResultCount(searchSpace: HTMLElement, searchBar: HTMLElement): HTMLElement | null {
  try {
    const existing = searchSpace.querySelector(".rgf-search-count") as HTMLElement | null
    if (existing) return existing
    const el = document.createElement("div")
    el.className = "rgf-search-count"
    el.setAttribute("role", "status")
    el.setAttribute("aria-live", "polite")
    el.hidden = true
    const layout = searchSpace.querySelector(".search-layout")
    searchSpace.insertBefore(el, layout ?? searchBar.nextSibling)
    return el
  } catch {
    return null
  }
}

/**
 * Update the count line. n = null clears it; state "loading" shows the index-loading
 * message (no number yet, so no data-search-count attribute).
 */
export function showResultCount(
  el: HTMLElement | null,
  n: number | null,
  query: string,
  opts: { capped?: boolean; loading?: boolean } = {},
): void {
  if (!el) return
  try {
    const lang = interfaceLang()
    el.removeAttribute("data-search-count")
    el.removeAttribute("data-search-capped")
    if (opts.loading) {
      el.textContent = COUNT_LOADING[lang]
      el.setAttribute("data-search-query", query)
      el.setAttribute("data-search-state", "loading")
      el.hidden = false
      return
    }
    if (n === null) {
      el.textContent = ""
      el.removeAttribute("data-search-query")
      el.removeAttribute("data-search-state")
      el.hidden = true
      return
    }
    el.textContent = formatResultCount(n, { lang, capped: opts.capped })
    el.setAttribute("data-search-count", String(Math.max(0, Math.floor(n))))
    if (opts.capped) el.setAttribute("data-search-capped", "1")
    el.setAttribute("data-search-query", query)
    el.setAttribute("data-search-state", "done")
    el.hidden = false
  } catch {
    // purely informative
  }
}

/**
 * What a result card previews: the page to fetch and the atom (quesito) inside it.
 * Card ids are index keys ("Quesiti/x#q12", mate) or clean slugs with the atom in
 * the href fragment ("prove/x" + href "…/prove/x#a3", fisica): both are handled.
 */
export function previewTargetOf(id: string, href?: string | null): { page: string; frag: string } {
  const raw = String(id || "")
  const h = raw.indexOf("#")
  const page = h >= 0 ? raw.slice(0, h) : raw
  let frag = h >= 0 ? raw.slice(h + 1) : ""
  if (!frag && href) {
    const k = href.indexOf("#")
    if (k >= 0) {
      try {
        frag = decodeURIComponent(href.slice(k + 1))
      } catch {
        frag = href.slice(k + 1)
      }
    }
  }
  return { page, frag }
}

/** Minimal element surface used by isolateAtom (real DOM in the browser, fakes in tests). */
export interface AtomEl {
  parentElement: AtomEl | null
  children: ArrayLike<AtomEl>
  classList?: { contains(c: string): boolean }
  getAttribute(name: string): string | null
  querySelectorAll(sel: string): ArrayLike<AtomEl>
  remove(): void
}

function isAtomMarker(el: AtomEl): boolean {
  return !!el.classList && el.classList.contains("atom-split")
}

function markersIn(el: AtomEl): AtomEl[] {
  const out = Array.from(el.querySelectorAll(".atom-split"))
  return isAtomMarker(el) ? [el, ...out] : out
}

/**
 * Keep only one atom (quesito) of a reader page fragment: the block that starts at the
 * `.atom-split` marker whose data-atom / id is `frag` and ends before the next marker
 * (same partition as atomRouter.inline.ts). Returns false (and leaves `root` untouched)
 * when the marker is not in `root` (e.g. the page-header block).
 */
export function isolateAtom(root: AtomEl, frag: string): boolean {
  if (!frag) return false
  const all = markersIn(root)
  const marker = all.find((m) => m.getAttribute("data-atom") === frag || m.getAttribute("id") === frag)
  if (!marker) return false
  // climb to the top-level block holding the marker (usually a <p> wrapping it)
  let start: AtomEl = marker
  while (start.parentElement && start.parentElement !== root) {
    const parent: AtomEl = start.parentElement
    if (markersIn(parent).length > 1) break
    start = parent
  }
  const container = start.parentElement
  if (!container) return false
  const kids = Array.from(container.children)
  const at = kids.indexOf(start)
  if (at < 0) return false
  let end = kids.length
  for (let i = at + 1; i < kids.length; i++) {
    if (markersIn(kids[i]!).length > 0) {
      end = i
      break
    }
  }
  kids.forEach((k, i) => {
    if (i < at || i >= end) k.remove()
  })
  return true
}

/**
 * /cerca (in-page tag search, quesiti.json rows): expose its own visible count ("N quesiti")
 * with the same hooks as the overlay count: `.rgf-search-count[data-search-count]`,
 * `data-search-query` (text filter, may be ""), `data-search-state="done"`. n = null
 * (no tag selected, nothing listed) removes the number.
 */
export function markResultCount(
  el: { classList: { add(c: string): void }; setAttribute(k: string, v: string): void; removeAttribute(k: string): void } | null,
  n: number | null,
  query: string,
): void {
  if (!el) return
  try {
    el.classList.add("rgf-search-count")
    if (n === null) {
      el.removeAttribute("data-search-count")
      el.removeAttribute("data-search-query")
      el.removeAttribute("data-search-state")
      return
    }
    el.setAttribute("data-search-count", String(Math.max(0, Math.floor(n))))
    el.setAttribute("data-search-query", query)
    el.setAttribute("data-search-state", "done")
  } catch {
    // purely informative
  }
}
