import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
test("quesiti + kw hrefs are fragments", () => {
  const q = JSON.parse(fs.readFileSync("staticgen/quesiti.json", "utf8"))
  assert.ok(q.every((x) => !/__q/i.test(x.href)), "no old atom slugs in quesiti")
  assert.ok(q.some((x) => /prove\/.+#q/i.test(x.href)), "fragments present")
  const kw = JSON.parse(fs.readFileSync("staticgen/quesiti_kw.json", "utf8"))
  assert.ok(Object.keys(kw).some((k) => k.includes("#")), "kw keyed by fragment")
})
