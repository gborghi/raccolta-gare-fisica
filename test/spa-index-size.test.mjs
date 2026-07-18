import { test } from "node:test"; import assert from "node:assert/strict"; import fs from "node:fs"
test("desktop index ~15MB and < 25MiB", () => {
  const s = fs.statSync("public/static/contentIndex.json").size
  assert.ok(s <= 25 * 1024 * 1024, "under CF 25MiB cap, got " + s)
  assert.ok(s >= 13 * 1e6, "filled near budget (>=13MB), got " + s)  // do not undershoot
  assert.ok(s <= 16 * 1e6, "not over ~15MB budget, got " + s)
})

test("mobile index ~8MB and < desktop", () => {
  const m = fs.statSync("public/static/contentIndexMobile.json").size
  const d = fs.statSync("public/static/contentIndex.json").size
  assert.ok(m <= 9 * 1e6 && m >= 6.5 * 1e6, "near 8MB, got " + m)
  assert.ok(m < d, "mobile smaller than desktop")
})
