import test from "node:test"
import assert from "node:assert/strict"
import { fixOptionBold } from "../scripts/bold-labels.mjs"

test("fixOptionBold: option labels A–E", () => {
  assert.equal(fixOptionBold("- **A ** its speed"), "- **A** its speed")
  assert.equal(fixOptionBold("**(E) **Foo"), "**(E)** Foo")
  assert.equal(fixOptionBold("x **C. ** y\n**D) **"), "x **C.** y\n**D)**")
  const s = {}
  fixOptionBold("**A ** a\n**B ** b", s)
  assert.equal(s.fixed, 2)
})
test("fixOptionBold: leaves everything else alone", () => {
  for (const t of ["**(a) ** x", "**Dati: ** x", "**foo** and **bar**", "**x** D **y**", "**F ** x", "**AB ** x", "**B.** ok"])
    assert.equal(fixOptionBold(t), t)
})
