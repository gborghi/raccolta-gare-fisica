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
