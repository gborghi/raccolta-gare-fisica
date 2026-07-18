// Post-preprocess: project the shipped search+graph indices from the full offline
// index (staticgen/atoms_fullindex.json, written by preprocess.mjs -- Task 4.1),
// MERGED with the Quartz-native contentIndex.json (written by `npx quartz build`'s
// ContentIndex emitter -- Task 5.5).
//
// Why merge, not overwrite: the native index has ONE entry per real page --
// concept pages (topics/methods/objects/clusters/skills), soluzioni, home, cerca,
// tag pages, and `prove/<stem>` CONTAINER pages -- schema
// {slug, filePath, title, links, tags, content}, NO atom entries. If this script
// just fs.writeFileSync's the atom projection over that file (the old behavior),
// every concept/soluzioni page drops out of search (parity regression) and the
// graph loses concept nodes (atom->concept edges fail validLinks.has(dest)).
// So: read the native file FIRST (before it's overwritten), keep every entry
// except `prove/<stem>` containers (atoms replace those), truncate kept content
// to a snippet, and merge with the atom projection. Atom ids contain "#"
// (prove/<stem>#atomId); native keys never do -- no collision.
//
// Desktop ~15MB, mobile ~8MB, TOTAL (native-kept + atoms) must fit. Atom
// selection = global tf-idf threshold, binary-searched to FILL the remaining
// budget after native-kept is subtracted (undershooting degrades recall).
// Re-runnable without re-parsing the vault -- only reads/re-thresholds the full
// index and re-reads the native file.
//
// `links` (Task 5.1 -- per-atom graph edges, captured by preprocess.mjs's
// atomLinks()) is carried through UNCHANGED by threshold: it's not part of the
// tf-idf selection, just copied per atom (already deduped + capped at 20 in the
// full index; re-capped here defensively). Both tiers ship it -- the graph fork
// (.quartz/plugins/graph, patched by scripts/patch-graph-fork.mjs) reads this
// same contentIndex.json for both desktop and mobile.
import fs from "fs"
import path from "path"

// Honor RGF_BUILD (build artifacts may live outside the repo, see preprocess.mjs) --
// must match preprocess.mjs's STATIC_GEN = path.join(RGF_BUILD || ROOT, "staticgen").
const BUILD = process.env.RGF_BUILD || "."
const full = JSON.parse(fs.readFileSync(path.join(BUILD, "staticgen", "atoms_fullindex.json"), "utf8"))
const entries = Object.entries(full.atoms)

// --- Task 5.5: read + partition the native index BEFORE it gets overwritten ---
const DESKTOP_PATH = "public/static/contentIndex.json"
const nativeRaw = fs.existsSync(DESKTOP_PATH) ? JSON.parse(fs.readFileSync(DESKTOP_PATH, "utf8")) : {}
// Defensively unwrap: some Quartz versions wrap the map as {content: {...}}.
// This build's ContentIndex emitter writes a flat {slug: {...}} map (verified
// against .quartz/plugins/content-index/dist/index.js), but guard anyway.
const nativeMap = nativeRaw.content && !nativeRaw.content.slug ? nativeRaw.content : nativeRaw

const PROVE_CONTAINER = /^prove\/[^#]+$/
const keptNative = {}
for (const [key, it] of Object.entries(nativeMap)) {
  if (PROVE_CONTAINER.test(key)) continue // dropped -- atoms replace these
  keptNative[key] = {
    slug: it.slug ?? key,
    title: it.title,
    tags: it.tags || [],
    links: (it.links || []).slice(0, 20),
    content: (it.content || "").slice(0, 300),
  }
}
const keptNativeStr = JSON.stringify(keptNative)
const keptNativeSize = Buffer.byteLength(keptNativeStr)

// term scores span (0, maxScore]. Avoid Math.max(...bigArray) -- with 10k+ atoms
// x up to 300 terms/atom the spread can overflow the call stack.
let maxScore = -Infinity
for (const [, v] of entries) for (const [, s] of v.terms) if (s > maxScore) maxScore = s

function project(threshold) {
  const out = {}
  for (const [id, v] of entries) {
    const content = v.terms.filter(([, s]) => s >= threshold).map(([t]) => t).join(" ")
    out[id] = { slug: v.slug, frag: v.frag, title: v.title, tags: v.tags, content, links: (v.links || []).slice(0, 20) }
  }
  return out
}

// Binary-search the tf-idf threshold T to fill the atom budget (total budget
// minus the native-kept slice) T bytes: keep every term with score >= T. LOWER T
// keeps MORE terms -> LARGER file; HIGHER T keeps FEWER terms -> SMALLER file. We
// want the lowest T that still fits the atom budget (fill as much as possible,
// never exceed it).
function build(budget, outPath, label) {
  if (keptNativeSize > budget) {
    // Should not happen -- concept pages are small post-preprocess (truncated to
    // 300-char snippets) -- but guard loudly rather than silently shipping an
    // over-budget file or silently dropping native entries.
    console.error(
      `${label}: kept native entries alone (${keptNativeSize} bytes) exceed budget ${budget} bytes`,
    )
    throw new Error(`${label}: native-kept size ${keptNativeSize} exceeds budget ${budget}`)
  }
  const atomBudget = budget - keptNativeSize

  const zero = project(0)
  const zeroStr = JSON.stringify(zero)
  const zeroSize = Buffer.byteLength(zeroStr)
  let best, bestStr
  if (zeroSize <= atomBudget) {
    // Even keeping ALL terms (threshold 0) fits the atom budget -- ship everything.
    // (Binary search alone would only asymptotically approach T=0 and always
    // leave a thin sliver of near-zero-score terms out; this guard fills fully.)
    best = zero
    bestStr = zeroStr
  } else {
    let lo = 0, hi = maxScore
    best = project(hi)   // T=hi -> fewest terms -> smallest file: safe starting floor, always <= atomBudget
    bestStr = JSON.stringify(best)
    for (let i = 0; i < 24; i++) {
      const mid = (lo + hi) / 2
      const cand = project(mid)
      const candStr = JSON.stringify(cand)
      const size = Buffer.byteLength(candStr)
      // size>atomBudget -> T too low (too many terms) -> raise the floor (shrink toward hi).
      // size<=atomBudget -> T fits -> record as best, then try an even lower T (more fill).
      if (size > atomBudget) lo = mid
      else { hi = mid; best = cand; bestStr = candStr }
    }
  }
  const atomSize = Buffer.byteLength(bestStr)
  if (atomSize > atomBudget) {
    // Should be unreachable (best is only ever assigned from a <=atomBudget
    // candidate, or from the T=hi floor / the zero-fits-budget branch) -- fail
    // loudly rather than silently ship an over-budget file.
    throw new Error(`${label}: best atom candidate ${atomSize} bytes exceeds atom budget ${atomBudget} bytes`)
  }

  // Merge native-kept (bare slugs, no "#") with atom entries (ids contain "#") --
  // disjoint key spaces, no collision.
  const merged = { ...keptNative, ...best }
  const mergedStr = JSON.stringify(merged)
  const mergedSize = Buffer.byteLength(mergedStr)
  if (mergedSize > budget) {
    throw new Error(`${label}: merged total ${mergedSize} bytes exceeds budget ${budget} bytes`)
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, mergedStr)
  console.log(
    label,
    (mergedSize / 1e6).toFixed(1),
    "MB",
    `(native-kept ${(keptNativeSize / 1e6).toFixed(2)} MB + atoms ${(atomSize / 1e6).toFixed(2)} MB)`,
  )
}

build(15e6, DESKTOP_PATH, "desktop index")
build(8e6, "public/static/contentIndexMobile.json", "mobile index")  // Task 4.3
