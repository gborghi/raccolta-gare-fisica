// Unicode normalisation of vault paths. The vault mixes NFC and NFD file names
// (e.g. prova-nãviel*-obf-2015-fase2* written as "a" + U+0303 by macOS/Dropbox), while
// frontmatter (translation_of), wikilinks and the committed content/ use NFC. Every
// path/stem preprocess uses as a KEY or an OUTPUT NAME is normalised to NFC, so sibling
// matching and emitted file names don't depend on how the OS stored the name; the
// on-disk name is kept only to read the file.

export const nfc = (s) => (typeof s === "string" ? s.normalize("NFC") : s)

// rels: vault-relative paths as returned by readdir (any normalisation form).
// Returns { rels: NFC paths (same order, collisions dropped), real: Map(NFC -> on-disk) }.
export function nfcIndex(rels, warn = console.warn) {
  const real = new Map()
  const out = []
  for (const r of rels) {
    const n = nfc(r)
    if (real.has(n)) {
      if (real.get(n) !== r) warn(`WARN: ${JSON.stringify(r)} and ${JSON.stringify(real.get(n))} are the same name after NFC; kept the first`)
      continue
    }
    real.set(n, r)
    out.push(n)
  }
  return { rels: out, real }
}
