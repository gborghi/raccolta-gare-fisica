import { test } from "node:test"; import assert from "node:assert/strict"; import fs from "node:fs"
test("atoms_fullindex.json: full per-atom terms + corpus stats", () => {
  const m = JSON.parse(fs.readFileSync("staticgen/atoms_fullindex.json", "utf8"))
  assert.ok(m.N > 10000, "corpus size N present")
  assert.ok(m.df && typeof m.df === "object", "df map present")
  const vals = Object.values(m.atoms)
  assert.ok(vals.length > 10000, "has per-atom entries")
  assert.ok(vals.every((v) => !v.slug.includes("#")), "slug is a clean path")
  assert.ok(vals.every((v) => v.frag && Array.isArray(v.terms)), "frag + terms[] present")
  // terms are [term, score] pairs sorted desc
  const t = vals.find((v) => v.terms.length >= 2).terms
  assert.ok(Array.isArray(t[0]) && t[0].length === 2, "term entries are [term, score]")
  assert.ok(t[0][1] >= t[1][1], "terms sorted by score desc")
})
