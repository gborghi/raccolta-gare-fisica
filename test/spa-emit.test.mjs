import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"

const C = "content/prove"

test("one container page per stem, atoms as markers, no per-atom pages", () => {
  const stem = "1994e"
  const page = path.join(C, stem + ".md")
  assert.ok(fs.existsSync(page), "container page exists")
  const html = fs.readFileSync(page, "utf8")
  assert.match(html, /<div class="atom-reader" data-prova="1994e">/)
  // marker carries a static id= scroll-anchor before data-atom (Task 2 popover anchor)
  const markers = [...html.matchAll(/<span class="atom-split"[^>]*\bdata-atom="/g)].length
  assert.ok(markers >= 5, "has atom markers, got " + markers)
  // no per-atom page emitted
  assert.ok(!fs.existsSync(path.join(C, stem + "__q01.md")), "no per-atom page")
  // atom body text is present (searchable/no-JS readable)
  assert.match(html, /data-atom="q01"/)
})

// Bilingual sibling used for the qlang test below: found by scanning the vault
// Prove/ folder for `<stem>__q<NN>__(it|en|es|pt|de|fr).md` secondary-translation
// siblings (SIB_RE in preprocess.mjs). Confirmed: Prove/1994e__Q01__it.md is a
// `tipo: quesito-translation` of Prove/1994e__Q01.md (native lang "en"). Same
// stem as the test above.
test("bilingual atom keeps qlang markers scoped to its own atom block", () => {
  const stem = "1994e"
  const page = path.join(C, stem + ".md")
  const html = fs.readFileSync(page, "utf8")
  const q01 = html.indexOf('data-atom="q01"')
  assert.ok(q01 >= 0, "q01 marker present")
  const nextAtom = html.indexOf('class="atom-split"', q01 + 1)
  const block = nextAtom >= 0 ? html.slice(q01, nextAtom) : html.slice(q01)
  assert.match(block, /qlang-split/, "qlang block belongs to q01's atom block, not just somewhere on the page")
})

// Task 2.2 (popover parity): each atom-split marker needs a static id= so a
// fragment link (prove/<stem>#qNN) has a scroll-anchor in the raw server-rendered
// HTML -- quartz's popover.inline.ts fetches that HTML directly and scrolls its
// preview to `#popover-internal-<hash>`, independent of atomRouter.inline.ts
// (which only runs client-side, after the popover's own fetch).
test("atom-split marker carries a static id= scroll-anchor for popovers", () => {
  const stem = "1994e"
  const page = path.join(C, stem + ".md")
  const html = fs.readFileSync(page, "utf8")
  assert.match(
    html,
    /<span class="atom-split" id="q01" data-atom="q01"/,
    "atom-split marker for q01 has id=\"q01\"",
  )
})
