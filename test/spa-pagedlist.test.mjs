import { test } from "node:test"; import assert from "node:assert/strict"; import fs from "node:fs"
test("paged-list atom entries are fragments", () => {
  const files = fs.readdirSync("staticgen/cl").filter((f) => f.endsWith(".json"))
  const all = files.flatMap((f) => JSON.parse(fs.readFileSync("staticgen/cl/" + f, "utf8")))
  const atoms = all.filter((r) => /^prove\//.test(r.h))
  assert.ok(atoms.length > 0)
  assert.ok(atoms.every((r) => !/__q/i.test(r.h)), "no old atom slugs")
})
