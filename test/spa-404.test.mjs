import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"

// Task 6.1 / 6.4 (Critical #1): pre-atomization deep links (old per-atom
// pages "prove/<stem>__<atomId>") must redirect client-side to the fragment
// section "prove/<stem>#<atomId>" on the SPA reader page. The redirect used
// to be emitted as content/404.md by preprocess.mjs, but that write was
// clobbered at build time by NotFoundPageType re-emitting the same "404"
// slug from the NotFound component -- so it never shipped. The redirect now
// lives directly in quartz/components/pages/404.tsx, the component that
// actually wins the write.
test("404 rewrites old atom urls to fragments", () => {
  const s = fs.readFileSync("quartz/components/pages/404.tsx", "utf8")
  assert.match(s, /prove/)
  assert.match(s, /location\.replace/)
  assert.match(s, /\.toLowerCase\(\)/)
  // physics atom-URL regex: strips trailing /index.html or /, then matches
  // ".../prove/<stem>__<atomId>" (case-insensitive atomId). The redirect
  // lives inside a JS template literal, so backslashes are doubled in the
  // raw source (they collapse to single backslashes at runtime) -- use
  // String.raw so the expected literal matches the on-disk bytes exactly.
  assert.ok(
    s.includes(String.raw`p.match(/^(.*)\\/prove\\/([^/]+?)__([a-z0-9]+)$/i)`),
    "atom-URL redirect regex not found in 404.tsx",
  )
  // rewrite target carries the fragment form (prove/<stem>#<atomId>)
  assert.ok(
    s.includes('"/prove/"+m[2]+"#"+m[3]'),
    "rewrite target (prove/<stem>#<atomId>) not found in 404.tsx",
  )
})
