import { test } from "node:test"; import assert from "node:assert/strict"; import fs from "node:fs"
const P = "public/static/contentIndex.json"
const has = fs.existsSync(P)
test("shipped index keeps concept pages AND atom entries", { skip: !has && "index not built" }, () => {
  const idx = JSON.parse(fs.readFileSync(P, "utf8"))
  const keys = Object.keys(idx)
  assert.ok(keys.some((k) => /#/.test(k)), "has atom fragment entries")
  assert.ok(keys.some((k) => /^(topics|methods|objects|clusters|skills)\//.test(k)), "has concept pages")
  assert.ok(!keys.some((k) => /^prove\/[^#]+$/.test(k)), "prove CONTAINER pages dropped (atoms replace them)")
})
