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
  const markers = [...html.matchAll(/<span class="atom-split" data-atom="/g)].length
  assert.ok(markers >= 5, "has atom markers, got " + markers)
  // no per-atom page emitted
  assert.ok(!fs.existsSync(path.join(C, stem + "__q01.md")), "no per-atom page")
  // atom body text is present (searchable/no-JS readable)
  assert.match(html, /data-atom="q01"/)
})
