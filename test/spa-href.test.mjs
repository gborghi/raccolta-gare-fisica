import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import { execSync } from "node:child_process"
test("quesiti + kw hrefs are fragments", () => {
  const q = JSON.parse(fs.readFileSync("staticgen/quesiti.json", "utf8"))
  assert.ok(q.every((x) => !/__q/i.test(x.href)), "no old atom slugs in quesiti")
  assert.ok(q.some((x) => /prove\/.+#q/i.test(x.href)), "fragments present")
  const kw = JSON.parse(fs.readFileSync("staticgen/quesiti_kw.json", "utf8"))
  assert.ok(Object.keys(kw).some((k) => k.includes("#")), "kw keyed by fragment")
})

test("no dangling __q links inside emitted prove pages", () => {
  const out = execSync('grep -rEl "__q[0-9]" content/prove || true').toString().trim()
  assert.equal(out, "", "found pages with old atom links:\n" + out)
})
