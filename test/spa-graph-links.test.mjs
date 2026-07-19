import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"

// Task 5.1: preprocess.mjs's atomLinks() captures each atom's outbound wikilink
// targets (concepts + sibling atoms) into a `links` field on its
// atoms_fullindex.json record, alongside (but separate from) its tf-idf `terms`.
// These artifacts only exist after `node preprocess.mjs` has been run locally
// (CADENCE forbids running it as part of this task) -- skip if absent, same
// pattern as test/spa-emit.test.mjs's content/prove guard.
const FULLINDEX = "staticgen/atoms_fullindex.json"
const fullIndexAvailable = fs.existsSync(FULLINDEX)

test(
  "atoms_fullindex.json: per-atom links captured, capped, deduped, never in terms",
  { skip: !fullIndexAvailable && `${FULLINDEX} not built -- run preprocess.mjs first` },
  () => {
    const m = JSON.parse(fs.readFileSync(FULLINDEX, "utf8"))
    const vals = Object.values(m.atoms)
    assert.ok(vals.length > 0, "has atom entries")
    assert.ok(vals.every((v) => Array.isArray(v.links)), "every atom has a links[] field")
    assert.ok(vals.every((v) => v.links.length <= 20), "links capped at 20")
    assert.ok(
      vals.every((v) => new Set(v.links).size === v.links.length),
      "links deduped (no repeats within one atom)",
    )
    // at least some atoms actually have outbound links (topic/method/skill/objects
    // meta lines are near-universal on classified quesiti)
    assert.ok(vals.some((v) => v.links.length > 0), "at least one atom has links")
    // links are graph ids ("prove/<stem>#<atomid>" or "topics/xxx"-style slugs),
    // never wikilink-stripped free text -- and must never leak into tf-idf terms
    // (keywordCounts() runs on a body that already strips whole [[...]] wikilinks,
    // so a term containing "/" or "#" would mean a link-shaped string slipped in).
    assert.ok(
      vals.every((v) => v.terms.every(([t]) => !/[/#]/.test(t))),
      "no link-shaped string appears among an atom's terms",
    )
    // a sibling-atom link is itself a valid atom id in the SAME index (topology
    // parity: an edge must land on a real node)
    const ids = new Set(Object.keys(m.atoms))
    const siblingLinks = vals.flatMap((v) => v.links).filter((l) => l.includes("#"))
    assert.ok(siblingLinks.length > 0, "at least one sibling-atom link exists")
    assert.ok(
      siblingLinks.every((l) => ids.has(l)),
      "every sibling-atom link resolves to a real atom id in the index",
    )
  },
)

const DESKTOP = "public/static/contentIndex.json"
const MOBILE = "public/static/contentIndexMobile.json"
// contentIndex.json is ALSO the filename Quartz's own content-index plugin emits
// natively (per-page, no `.frag`) -- distinguish our SPA per-atom projection
// (scripts/make-search-index.mjs, Task 4.2/5.1) from a stale native/classic build
// by checking the shape, not just presence, of the file.
function isSpaProjected(p) {
  if (!fs.existsSync(p)) return false
  try {
    const idx = JSON.parse(fs.readFileSync(p, "utf8"))
    return Object.values(idx).some((v) => v && typeof v.frag === "string")
  } catch { return false }
}
const projectedAvailable = isSpaProjected(DESKTOP) && fs.existsSync(MOBILE)

test(
  "shipped contentIndex (desktop + mobile): links carried through the tf-idf projection",
  {
    skip:
      !projectedAvailable &&
      `${DESKTOP}/${MOBILE} not built as the SPA per-atom projection -- run preprocess.mjs + scripts/make-search-index.mjs first`,
  },
  () => {
    for (const p of [DESKTOP, MOBILE]) {
      const idx = JSON.parse(fs.readFileSync(p, "utf8"))
      const entries = Object.entries(idx)
      // Post-Task-5.5 the shipped index MERGES native concept pages (key = clean
      // slug, no "#", no frag) with per-atom entries (key = "prove/<stem>#<atomid>").
      const atoms = entries.filter(([id]) => id.includes("#"))
      const concepts = entries.filter(([id]) => !id.includes("#"))
      assert.ok(atoms.length > 0, `${p}: has per-atom entries`)
      // atom id keys are "prove/<stem>#<atomid>"; slug/frag stay a clean split (Global
      // Constraint: slugs fed to the graph/search path resolver must stay clean).
      assert.ok(
        atoms.every(([id, v]) => !v.slug.includes("#") && id === `${v.slug}#${v.frag}`),
        `${p}: atom id key == slug + "#" + frag, slug itself carries no "#"`,
      )
      // native concept entries carry the clean slug and no fragment.
      assert.ok(
        concepts.every(([, v]) => !v.frag && !String(v.slug).includes("#")),
        `${p}: concept entries carry no fragment`,
      )
      // graph edges: DESKTOP atoms ship links (the graph reads contentIndex.json
      // via fetchData on every device); MOBILE atoms DROP links (search-only tier,
      // freeing the 8MB budget for tf-idf terms -- see scripts/make-search-index.mjs).
      if (p === MOBILE) {
        assert.ok(atoms.every(([, v]) => !("links" in v)), `${p}: mobile atoms drop links`)
      } else {
        assert.ok(
          atoms.every(([, v]) => Array.isArray(v.links) && v.links.length <= 20),
          `${p}: desktop atoms have links[] capped at 20`,
        )
        assert.ok(atoms.some(([, v]) => v.links.length > 0), `${p}: at least one desktop atom has links`)
      }
    }
  },
)
