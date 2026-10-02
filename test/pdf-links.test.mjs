import { test } from "node:test"
import assert from "node:assert/strict"
import { stripLocalPdfLinks } from "../scripts/pdf-links.mjs"

test("local vault PDF links are stripped to their label", () => {
  assert.equal(stripLocalPdfLinks("**Fonte:** [Testo](../../gare/a.pdf#page=3)"), "**Fonte:** Testo")
  assert.equal(stripLocalPdfLinks("[Testo (PDF)](<../../gare/a b/c.pdf#page=2>)"), "Testo (PDF)")
})

test("https PDF links are kept", () => {
  const s = "**Fonte:** [GPhO 2016](https://example.org/gpho/2016/problems.pdf)"
  assert.equal(stripLocalPdfLinks(s), s)
  const h = "[GPhO](HTTP://example.org/x.PDF)"
  assert.equal(stripLocalPdfLinks(h), h)
})

test("angle-bracket <https...pdf> links are kept", () => {
  const s = "**Fonte:** [GPhO 2016](<https://example.org/gpho 2016/problems.pdf>)"
  assert.equal(stripLocalPdfLinks(s), s)
})

test("mixed line: only the local link is stripped", () => {
  assert.equal(
    stripLocalPdfLinks("[a](x/y.pdf) · [b](https://e.org/z.pdf)"),
    "a · [b](https://e.org/z.pdf)",
  )
})
