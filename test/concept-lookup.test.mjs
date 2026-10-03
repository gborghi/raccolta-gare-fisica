import { test } from "node:test"
import assert from "node:assert/strict"
import { lookupStem } from "../scripts/concept-lookup.mjs"

const slug = (s) => s.replace(/\s/g, "-").toLowerCase()

test("post-transform prove/<slug>#<atom> target resolves to the atom's metadata", () => {
  const flag = { "INJSO2017 Question": "", "INJSO2017 Question__Q05": "in" }
  assert.equal(lookupStem(flag, "prove/injso2017-question", "prove/injso2017-question#q05", slug), "in")
})

test("atom metadata wins over the parent note (IZhO atom under a Russia parent)", () => {
  const country = { "problems-en": "Russia", "problems-en__Q01": "Kazakhstan" }
  assert.equal(lookupStem(country, "prove/problems-en", "prove/problems-en#q01", slug), "Kazakhstan")
})

test("German selection atom keeps Germany/de; container falls back to parent then first atom", () => {
  const flag = { "IPhO_2026_Eisbohrkern_Graph": "de", "IPhO_2026_Eisbohrkern_Graph__Q01": "de", "X__Q01": "us" }
  assert.equal(lookupStem(flag, "prove/ipho_2026_eisbohrkern_graph", "prove/ipho_2026_eisbohrkern_graph#q01", slug), "de")
  assert.equal(lookupStem(flag, "prove/x", "prove/x#q09", slug), "us")
})

test("concept targets and unknowns", () => {
  const m = { "Fluid Mechanics": "it" }
  assert.equal(lookupStem(m, "Fluid Mechanics", "topics/fluid-mechanics", slug), "it")
  assert.equal(lookupStem(m, "prove/nope", "prove/nope#q01", slug), "")
  assert.equal(lookupStem(null, "x", "", slug), "")
})
