// Concept-list rows (staticgen/cl/*.json) get their Stato/Livello/Anno columns from the
// per-note maps built in preprocess (stemFlag/stemCountry/stemLevel/stemYear), keyed by the
// vault basename ("INJSO2017 Question__Q05"). extractConceptList runs on POST-transform
// content, where atom links are already `[[prove/injso2017-question#q05]]`, so the raw
// basename lookup misses almost every row (country/flag/year empty -> globe). Resolve via a
// slug index as well: "<container-slug>__<atomid>" (the atom's own metadata, same as
// quesiti.json), then "<container-slug>" (parent note, else first atom with a value).

const cache = new WeakMap()

export function slugIndex(map, slug) {
  let idx = cache.get(map)
  if (idx) return idx
  idx = Object.create(null)
  const keys = Object.keys(map)
  const isAtom = (k) => /__[a-z0-9]+$/i.test(k)
  // parents first, so a container slug prefers its own note over an atom's value
  for (const k of [...keys.filter((k) => !isAtom(k)), ...keys.filter(isAtom)]) {
    const v = map[k]
    if (!v) continue
    const s = slug(k)
    if (!(s in idx)) idx[s] = v
    const c = s.replace(/__[a-z0-9]+$/i, "")
    if (c !== s && !(c in idx)) idx[c] = v
  }
  cache.set(map, idx)
  return idx
}

// target: wikilink target as written in the (post-transform) list item; h: the row href
// ("prove/<stem>#<atomId>" or a concept path).
export function lookupStem(map, target, h = "", slug = (s) => s.toLowerCase()) {
  if (!map || !target) return ""
  const idx = slugIndex(map, slug)
  // the row's own atom first (same source as quesiti.json), then the container/parent
  const m = String(h).match(/^prove\/([^#]+)#([a-z0-9]+)$/i)
  const atomKey = m ? `${m[1]}__${m[2]}`.toLowerCase() : ""
  if (atomKey && atomKey in idx) return idx[atomKey]
  const own = (k) => k && Object.prototype.hasOwnProperty.call(map, k) && map[k]
  if (own(target)) return map[target]
  const base = String(target).split("/").pop()
  if (own(base)) return map[base]
  const noAtom = base.replace(/__[a-z0-9]+$/i, "")
  if (own(noAtom)) return map[noAtom]
  const cands = []
  if (m) cands.push(m[1].toLowerCase())
  const sb = slug(base)
  cands.push(sb, sb.replace(/__[a-z0-9]+$/i, ""))
  for (const c of cands) if (c in idx) return idx[c]
  return ""
}
