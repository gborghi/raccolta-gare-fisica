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
// A query WITHOUT any of the syntax above is "plain": the caller must run the
// original, untouched search code path (identical results/ranking).
// A malformed query (unbalanced parens/quotes, dangling operator, empty group)
// degrades to a plain search on the query stripped of operator syntax. Never throws.

export type BoolNode =
  | { type: "terms"; text: string }
  | { type: "phrase"; text: string }
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

const KEYWORDS: Record<string, "and" | "or" | "not"> = { AND: "and", OR: "or", NOT: "not" }

class Malformed extends Error {}

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
    !!t && (t.t === "lp" || t.t === "not" || t.t === "word" || t.t === "phrase")

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
    case "not":
      return positiveTerms(node.child, !negated)
    case "and":
    case "or":
      return node.children.flatMap((c) => positiveTerms(c, negated))
  }
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
    const words = [...new Set(positiveTerms(ast))]
    return { mode: "boolean", query, ast, highlight: words.join(" ") }
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

export interface EvalContext {
  /** Ranked ids for a run of bare words, searched like a plain query (all words, prefix). */
  searchTerms(text: string): Promise<number[]>
  /** Text (title + content) of a document, for exact-phrase checks. */
  textOf(id: number): string
  /** Every document id (universe for NOT). */
  allIds(): number[]
  /** True for keyword-bag entries (no running text): phrases match them by all words. */
  isKeywordEntry?(id: number): boolean
}

/** Lowercase + whitespace-collapse, the same case handling as the search encoder. */
export function normalizeText(s: string): string {
  return s.toLowerCase().replace(/\s+/g, " ")
}

type Scored = Map<number, number> // id -> rank score (lower = better)

async function evalNode(node: BoolNode, ctx: EvalContext): Promise<Scored> {
  switch (node.type) {
    case "terms": {
      const ids = await ctx.searchTerms(node.text)
      const m: Scored = new Map()
      ids.forEach((id, i) => {
        if (!m.has(id)) m.set(id, i)
      })
      return m
    }
    case "phrase": {
      // Literal (adjacent-words) matches first. Keyword-only index entries (per-quesito
      // atoms whose `content` is a bag of keywords, word order lost) cannot contain a
      // phrase literally: for those, all the phrase's words are required (as in a plain
      // query) and they rank after the literal matches.
      const needle = normalizeText(node.text)
      const ids = await ctx.searchTerms(node.text)
      const literal: number[] = []
      const loose: number[] = []
      const seen = new Set<number>()
      for (const id of ids) {
        if (seen.has(id)) continue
        seen.add(id)
        if (normalizeText(ctx.textOf(id)).includes(needle)) literal.push(id)
        else if (ctx.isKeywordEntry?.(id)) loose.push(id)
      }
      const m: Scored = new Map()
      literal.concat(loose).forEach((id, i) => m.set(id, i))
      return m
    }
    case "not": {
      const excluded = await evalNode(node.child, ctx)
      const all = ctx.allIds()
      const m: Scored = new Map()
      for (const id of all) if (!excluded.has(id)) m.set(id, all.length)
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
        acc = new Map(all.map((id) => [id, all.length] as [number, number]))
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

const HELP_CSS = `
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
  `<summary><span class="rgf-q" aria-hidden="true">?</span>Ricerca avanzata: AND, OR, NOT, "frase", ( )</summary>` +
  `<ul>` +
  `<li><code>energia urto</code> tutte le parole (come prima)</li>` +
  `<li><code>energia OR impulso</code> almeno una · <code>AND</code> entrambe</li>` +
  `<li><code>NOT attrito</code> oppure <code>-attrito</code> escludi</li>` +
  `<li><code>"quantità di moto"</code> frase (prima i testi identici) · <code>( )</code> raggruppa</li>` +
  `</ul>` +
  `<div>Operatori in <b>MAIUSCOLO</b> (“e”, “o” restano parole). Es.: <code>(energia OR "quantità di moto") AND urto <span class="rgf-nw">-attrito</span></code></div>`

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
    searchBar.setAttribute("title", 'Operatori: AND, OR, NOT, -parola, "frase esatta", ( )')
  } catch {
    // purely cosmetic
  }
}
