// Post-preprocess: project the shipped search indices from the full offline index
// (staticgen/atoms_fullindex.json, written by preprocess.mjs -- Task 4.1).
// Desktop ~15MB, mobile ~8MB. Selection = global tf-idf threshold, binary-searched
// to FILL each budget (undershooting degrades recall). Re-runnable without
// re-parsing the vault -- only reads/re-thresholds the full index.
import fs from "fs"
import path from "path"

// Honor RGF_BUILD (build artifacts may live outside the repo, see preprocess.mjs) --
// must match preprocess.mjs's STATIC_GEN = path.join(RGF_BUILD || ROOT, "staticgen").
const BUILD = process.env.RGF_BUILD || "."
const full = JSON.parse(fs.readFileSync(path.join(BUILD, "staticgen", "atoms_fullindex.json"), "utf8"))
const entries = Object.entries(full.atoms)

// term scores span (0, maxScore]. Avoid Math.max(...bigArray) -- with 10k+ atoms
// x up to 300 terms/atom the spread can overflow the call stack.
let maxScore = -Infinity
for (const [, v] of entries) for (const [, s] of v.terms) if (s > maxScore) maxScore = s

function project(threshold) {
  const out = {}
  for (const [id, v] of entries) {
    const content = v.terms.filter(([, s]) => s >= threshold).map(([t]) => t).join(" ")
    out[id] = { slug: v.slug, frag: v.frag, title: v.title, tags: v.tags, content, links: [] }
  }
  return out
}

// Binary-search the tf-idf threshold T to fill `budget` bytes: keep every term
// with score >= T. LOWER T keeps MORE terms -> LARGER file; HIGHER T keeps FEWER
// terms -> SMALLER file. We want the lowest T that still fits the budget (fill as
// much as possible, never exceed it).
function build(budget, outPath, label) {
  const zero = project(0)
  const zeroStr = JSON.stringify(zero)
  const zeroSize = Buffer.byteLength(zeroStr)
  let best, bestStr
  if (zeroSize <= budget) {
    // Even keeping ALL terms (threshold 0) fits the budget -- ship everything.
    // (Binary search alone would only asymptotically approach T=0 and always
    // leave a thin sliver of near-zero-score terms out; this guard fills fully.)
    best = zero
    bestStr = zeroStr
  } else {
    let lo = 0, hi = maxScore
    best = project(hi)   // T=hi -> fewest terms -> smallest file: safe starting floor, always <= budget
    bestStr = JSON.stringify(best)
    for (let i = 0; i < 24; i++) {
      const mid = (lo + hi) / 2
      const cand = project(mid)
      const candStr = JSON.stringify(cand)
      const size = Buffer.byteLength(candStr)
      // size>budget -> T too low (too many terms) -> raise the floor (shrink toward hi).
      // size<=budget -> T fits -> record as best, then try an even lower T (more fill).
      if (size > budget) lo = mid
      else { hi = mid; best = cand; bestStr = candStr }
    }
  }
  const bestSize = Buffer.byteLength(bestStr)
  if (bestSize > budget) {
    // Should be unreachable (best is only ever assigned from a <=budget candidate,
    // or from the T=hi floor / the zero-fits-budget branch) -- fail loudly rather
    // than silently ship an over-budget file.
    throw new Error(`${label}: best candidate ${bestSize} bytes exceeds budget ${budget} bytes`)
  }
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, bestStr)
  console.log(label, (bestSize / 1e6).toFixed(1), "MB")
}

build(15e6, "public/static/contentIndex.json", "desktop index")
build(8e6, "public/static/contentIndexMobile.json", "mobile index")  // Task 4.3
