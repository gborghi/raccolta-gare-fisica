// Option-label bold with a space before the closing marker: `**A ** text`,
// `**(B) ** text`, `**C. **`. CommonMark does not close `**` after whitespace, so
// these render as raw asterisks. Narrow fix: ONLY an opening `**` (at line start
// or after whitespace/`(`/`[`/`>`) followed by a short option label A–E with an
// optional `.`/`)` or wrapped in `( )`, then one space, then `**`. Anything else
// (lower-case sub-parts, words, `** and **` between two real bolds) is left alone.
const OPT_BOLD = /(^|[\s>(\[])\*\*(\([A-E]\)|[A-E][.)]?) \*\*(?=(.|$))/gm

export function fixOptionBold(text, stats) {
  return text.replace(OPT_BOLD, (full, pre, lab, next) => {
    if (stats) stats.fixed = (stats.fixed || 0) + 1
    return `${pre}**${lab}**${next === "" || /\s/.test(next) ? "" : " "}`
  })
}

// General bold spacing (round 5). CommonMark does not open `**` before whitespace or
// close it after whitespace, and does not close `**)` right before a letter, so OCR'd
// `**(b) ** text`, `**Dati: **`, `** parabola**`, `**(3 punti) **` and `**(b)**Con`
// render as raw asterisks. Per block unit (a heading, list item, table row,
// blockquote line, or a run of plain lines), with math/code/wikilinks/URLs/HTML
// masked: pair the `**` markers left to right and move inner leading/trailing
// whitespace outside the pair (adding a space where the closer would touch a
// letter). An odd stray marker is dropped when it is a closer (`text** `), or closed
// at the end of its line when it is an opener (`**26. Cordoba …`). Runs of 3+ `*`,
// escaped `\*\*` and fenced code / `$$` display blocks are left alone.
const MASK = /\$\$[\s\S]*?\$\$|\$[^$\n]+\$|`[^`\n]+`|\[\[[^\]\n]*\]\]|\]\([^)\n]*\)|<[^>\n]+>|https?:\/\/[^\s)]+/g
const UNIT_START = /^\s*(#{1,6}\s|[-*+]\s|\d+[.)]\s|>|\|)/
const PUNCT = /[!-\/:-@\[-`{-~\u2000-\u206f\u00a1-\u00bf]/

function fixUnit(u, stats) {
  const masks = []
  let s = u.replace(MASK, (m) => { masks.push(m); return `\u0000${masks.length - 1}\u0001` })
  const pos = []
  for (const m of s.matchAll(/(?<![*\\])\*\*(?!\*)/g)) pos.push(m.index)
  if (!pos.length) return u
  const isSp = (c) => c === undefined || /\s/.test(c)
  const edits = []   // [start, end, replacement]
  let P = pos
  if (P.length % 2) {
    const p0 = P[0], pl = P[P.length - 1]
    const firstIsCloser = !isSp(s[p0 - 1]) && isSp(s[p0 + 2])
    const stray = firstIsCloser ? p0 : pl
    P = P.filter((p) => p !== stray)
    if (!firstIsCloser && !isSp(s[stray + 2])) {
      // opener with no closer: close at the end of its line (before trailing spaces)
      let eol = s.indexOf("\n", stray); if (eol < 0) eol = s.length
      let e = eol; while (e > stray + 2 && /\s/.test(s[e - 1])) e--
      edits.push([e, e, "**"])
    } else {
      // stray closer (or a lone `**` between spaces): drop it
      edits.push([stray, stray + 2, ""])
    }
    stats && (stats.stray = (stats.stray || 0) + 1)
  }
  for (let i = 0; i + 1 < P.length; i += 2) {
    const o = P[i], c = P[i + 1]
    const inner = s.slice(o + 2, c)
    const t = inner.trim()
    if (!t) continue
    let lead = inner.match(/^\s*/)[0], trail = inner.match(/\s*$/)[0]
    const before = s[o - 1], after = s[c + 2]
    let pre = "", post = ""
    if (lead) pre = isSp(before) ? (lead.includes("\n") ? "\n" : "") : (lead.includes("\n") ? "\n" : " ")
    else if (PUNCT.test(t[0]) && before !== undefined && !isSp(before) && !PUNCT.test(before)) pre = " "
    if (trail) post = isSp(after) || PUNCT.test(after) ? (trail.includes("\n") ? "\n" : "") : (trail.includes("\n") ? "\n" : " ")
    else if (PUNCT.test(t[t.length - 1]) && after !== undefined && !isSp(after) && !PUNCT.test(after)) post = " "
    if (!lead && !trail && !pre && !post) continue
    // a newline that moved outside must not become part of the pair
    edits.push([o, c + 2, `${pre}**${t}**${post}`])
    stats && (stats.spacing = (stats.spacing || 0) + 1)
  }
  if (!edits.length) return u
  edits.sort((a, b) => b[0] - a[0])
  for (const [a, b, r] of edits) s = s.slice(0, a) + r + s.slice(b)
  return s.replace(/\u0000(\d+)\u0001/g, (_, i) => masks[+i])
}

export function fixBoldSpacing(text, stats) {
  const lines = text.split("\n")
  const out = []
  let unit = [], fence = false, disp = false
  const flush = () => { if (unit.length) out.push(fixUnit(unit.join("\n"), stats)); unit = [] }
  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) { flush(); fence = !fence; out.push(line); continue }
    if (fence) { out.push(line); continue }
    if (/^\s*\$\$\s*$/.test(line) || (disp && /\$\$\s*$/.test(line))) { flush(); disp = !disp; out.push(line); continue }
    if (!disp && /^\s*\$\$/.test(line) && !/\$\$.*\$\$/.test(line)) { flush(); disp = true; out.push(line); continue }
    if (disp) { out.push(line); continue }
    if (!line.trim()) { flush(); out.push(line); continue }
    if (UNIT_START.test(line)) flush()
    unit.push(line)
  }
  flush()
  return out.join("\n")
}

// One-line `$$ … \tag{n} $$` inside text is parsed as INLINE math (remark-math), where
// KaTeX refuses \tag ("\tag works only in display equations"). Turn such a line into
// a display block (`$$` on their own lines). Only lines that carry \tag are touched.
export function fixInlineTag(text, stats) {
  return text.replace(/^([ \t]*)\$\$(?!\$)(.*\\tag\*?\{[^}]*\}.*?)\$\$([ \t]*[.,;]?)[ \t]*$/gm, (full, ind, body, tail) => {
    if (body.includes("$")) return full
    stats && (stats.tag = (stats.tag || 0) + 1)
    return `${ind}$$\n${ind}${body.trim()}${tail.trim() ? " " + tail.trim() : ""}\n${ind}$$`
  })
}
