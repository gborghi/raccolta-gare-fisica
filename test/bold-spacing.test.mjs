import test from "node:test"
import assert from "node:assert/strict"
import { fixBoldSpacing, fixInlineTag } from "../scripts/bold-labels.mjs"

test("fixBoldSpacing: inner spaces moved out", () => {
  assert.equal(fixBoldSpacing("**(b) ** Con i valori"), "**(b)** Con i valori")
  assert.equal(fixBoldSpacing("**Dati: **x"), "**Dati:** x")
  assert.equal(fixBoldSpacing("una curva ** parabola** (apertura"), "una curva **parabola** (apertura")
  assert.equal(fixBoldSpacing("piccolo? **(4 punti) **"), "piccolo? **(4 punti)**")
  assert.equal(fixBoldSpacing("- ** B.** a una"), "- **B.** a una")
  assert.equal(fixBoldSpacing("**(b)**Con"), "**(b)** Con")
})
test("fixBoldSpacing: strays", () => {
  assert.equal(fixBoldSpacing("## Apparato sperimentale**"), "## Apparato sperimentale")
  assert.equal(fixBoldSpacing("**26. Cordoba - Block  "), "**26. Cordoba - Block**  ")
  assert.equal(fixBoldSpacing("Fray Mamerto Esquiu** "), "Fray Mamerto Esquiu ")
})
test("fixBoldSpacing: leaves good markdown and math alone", () => {
  for (const t of ["**foo** and **bar**", "**Topic:** [[A (metodo)|A]], [[B]]", "$a**b$ **x**", "***x***", "```\n** a **\n```", "**a\nb**", "$$\n x ** y\n$$"])
    assert.equal(fixBoldSpacing(t), t)
})
test("fixInlineTag", () => {
  assert.equal(fixInlineTag("$$F = ma \\tag{1}$$"), "$$\nF = ma \\tag{1}\n$$")
  assert.equal(fixInlineTag("$$x \\tag{2} .$$"), "$$\nx \\tag{2} .\n$$")
  assert.equal(fixInlineTag("$$x = 1$$"), "$$x = 1$$")
})
