// Bilingual translation siblings: collection + merge, shared by preprocess.mjs (classic
// per-file loop and SPA container-emission pass). Kept in its own module so the skip
// rules are unit-tested (test/siblings.test.mjs) without running preprocess on a vault.
//
// Skip rules (same as raccolta-gare-mate's preprocess):
//  - sibling with no lang                      -> skipped, WARN (addSibling)
//  - two siblings with the same lang           -> newest mtime kept, WARN (addSibling)
//    (equal mtime -> lexicographically last path, deterministic)
//  - sibling whose lang === the native lang    -> skipped, WARN naming the file (mergeSiblings)
//    e.g. an IPhO original relabelled de -> en plus an __en sibling: zero en blocks.

export const newSiblingStats = () => ({ merged: 0, sameLang: 0, dupes: 0, noLang: 0 })

const normLang = (l) =>
  String(l ?? "")
    .trim()
    .replace(/^["']|["']$/g, "")
    .trim()
    .toLowerCase()

// siblings: Map(default-stem -> Map(lang -> {lang, body, mtime, rel}))
export function addSibling(siblings, of, sib, stats, warn = console.warn) {
  const lang = normLang(sib.lang)
  if (!lang) {
    if (stats) stats.noLang++
    warn(`WARN: translation sibling ${sib.rel} has no lang; skipped`)
    return false
  }
  if (!siblings.has(of)) siblings.set(of, new Map())
  const byLang = siblings.get(of)
  const cur = { ...sib, lang, mtime: Number(sib.mtime) || 0 }
  const prev = byLang.get(lang)
  if (prev) {
    if (stats) stats.dupes++
    const keepCur =
      cur.mtime > prev.mtime || (cur.mtime === prev.mtime && String(cur.rel) > String(prev.rel))
    const [kept, dropped] = keepCur ? [cur, prev] : [prev, cur]
    warn(`WARN: duplicate ${lang} sibling for ${of}: kept ${kept.rel} (newest), dropped ${dropped.rel}`)
    if (!keepCur) return false
  }
  byLang.set(lang, cur)
  return true
}

// Emits one <div class="qlang-switch" data-default="<native>"> then the native body,
// and per kept sibling a <div class="qlang-split" data-lang="<l>"> + its body. The
// client qlang.inline.ts partitions these blocks and toggles by flag. Title/H1 stays
// native (frontmatter), so each sibling's translated H1 + trailing mutual backlink is
// stripped. Pass `stats` from exactly ONE call site per quesito (the classic loop) so
// counts/WARNs are not doubled by the SPA pass; pass null elsewhere.
const ORDER = { it: 0, en: 1, es: 2, pt: 3, de: 4, fr: 5 }
export function mergeSiblings(base, body, nativeLang, siblings, transform, stats = null, warn = console.warn) {
  const byLang = siblings.get(base)
  if (!byLang || !byLang.size) return body
  const native = normLang(nativeLang) || "it"
  const sibs = []
  for (const s of byLang.values()) {
    if (s.lang === native) {
      if (stats) {
        stats.sameLang++
        warn(`WARN: translation sibling ${s.rel} has lang=${s.lang} = native lang of ${base}; skipped`)
      }
      continue
    }
    sibs.push(s)
  }
  if (!sibs.length) return body
  sibs.sort((a, b) => (ORDER[a.lang] ?? 9) - (ORDER[b.lang] ?? 9) || a.lang.localeCompare(b.lang))
  let merged = `<div class="qlang-switch" data-default="${native}"></div>\n\n` + body
  for (const s of sibs) {
    const b = transform(s.body)
      .replace(/^\s*#\s+.+?(?:\r?\n|$)/m, "") // drop translated H1 (title comes from frontmatter)
      .replace(/\n?\[\[[^\]]*\]\]\s*$/, "") // drop trailing mutual backlink to default
    merged += `\n\n<div class="qlang-split" data-lang="${s.lang}"></div>\n\n` + b.trim()
  }
  if (stats) stats.merged += sibs.length
  return merged
}
