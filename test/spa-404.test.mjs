import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"

// Task 6.1: pre-atomization deep links (old per-atom pages
// "prove/<stem>__<atomId>") must redirect client-side to the fragment
// section "prove/<stem>#<atomId>" on the SPA reader page. content/404.md is
// emitted by preprocess.mjs (ported from the English site's 404 block,
// quartz-eng-lit:1498-1511, reshaped for the physics prove/ path).
test("404 rewrites old atom urls to fragments", () => {
  const s = fs.readFileSync("content/404.md", "utf8")
  assert.match(s, /prove/)
  assert.match(s, /location\.replace/)
  // physics atom-URL regex: strips trailing /index.html or /, then matches
  // ".../prove/<stem>__<atomId>" (case-insensitive atomId).
  assert.match(s, /\\\/prove\\\/\(\[\^\/\]\+\?\)__\(\[a-z0-9\]\+\)\$\/i/)
  // rewrite target carries the fragment form (prove/<stem>#<atomId>)
  assert.match(s, /"\/prove\/"\+m\[2\]\+"#"\+m\[3\]/)
})
