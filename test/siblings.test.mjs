import { test } from "node:test"
import assert from "node:assert/strict"
import { addSibling, mergeSiblings, newSiblingStats, stripSelfBacklink } from "../scripts/siblings.mjs"

const id = (s) => s
const splits = (s) => [...s.matchAll(/<div class="qlang-split" data-lang="([^"]+)"><\/div>/g)].map((m) => m[1])

function collect(list) {
  const siblings = new Map()
  const stats = newSiblingStats()
  const warns = []
  for (const s of list) addSibling(siblings, s.of, s, stats, (m) => warns.push(m))
  return { siblings, stats, warns }
}

test("IPhO case: original relabelled de -> en plus an __en sibling gives zero en blocks", () => {
  const { siblings, stats, warns } = collect([
    { of: "ipho_2019__Q01", lang: "en", body: "EN_SIBLING\n", mtime: 1, rel: "prove/ipho_2019__Q01__en.md" },
  ])
  const out = mergeSiblings("ipho_2019__Q01", "NATIVE_EN", "en", siblings, id, stats, (m) => warns.push(m))
  assert.equal(out, "NATIVE_EN") // nothing left to merge -> body untouched, no switch
  assert.deepEqual(splits(out), [])
  assert.ok(!out.includes("EN_SIBLING"))
  assert.equal(stats.sameLang, 1)
  assert.equal(stats.merged, 0)
  assert.ok(warns.some((w) => w.includes("prove/ipho_2019__Q01__en.md") && w.includes("lang=en")))
})

test("same-lang sibling skipped, other languages kept in order", () => {
  const { siblings, stats } = collect([
    { of: "x__Q01", lang: "en", body: "EN\n", mtime: 1, rel: "x__Q01__en.md" },
    { of: "x__Q01", lang: "it", body: "IT\n", mtime: 1, rel: "x__Q01__it.md" },
    { of: "x__Q01", lang: "de", body: "DE\n", mtime: 1, rel: "x__Q01__de.md" },
  ])
  const out = mergeSiblings("x__Q01", "NATIVE", "EN", siblings, id, stats, () => {})
  assert.ok(out.startsWith('<div class="qlang-switch" data-default="en"></div>'))
  assert.deepEqual(splits(out), ["it", "de"])
  assert.equal(stats.sameLang, 1)
  assert.equal(stats.merged, 2)
})

test("duplicate lang: newest mtime kept regardless of read order, with WARN", () => {
  for (const order of [
    [0, 1],
    [1, 0],
  ]) {
    const all = [
      { of: "y__Q02", lang: "it", body: "IT_OLD\n", mtime: 100, rel: "y__Q02__it.md" },
      { of: "y__Q02", lang: "it", body: "IT_NEW\n", mtime: 200, rel: "old/y__Q02__it.md" },
    ]
    const { siblings, stats, warns } = collect(order.map((i) => all[i]))
    const out = mergeSiblings("y__Q02", "NATIVE", "es", siblings, id, stats, () => {})
    assert.deepEqual(splits(out), ["it"])
    assert.ok(out.includes("IT_NEW") && !out.includes("IT_OLD"))
    assert.equal(stats.dupes, 1)
    assert.ok(warns.some((w) => w.includes("duplicate it") && w.includes("kept old/y__Q02__it.md")))
  }
})

test("sibling with no lang is skipped with WARN", () => {
  const { siblings, stats, warns } = collect([
    { of: "z__Q03", lang: "", body: "NOLANG\n", mtime: 1, rel: "z__Q03__xx.md" },
    { of: "z__Q03", lang: "en", body: "EN\n", mtime: 1, rel: "z__Q03__en.md" },
  ])
  const out = mergeSiblings("z__Q03", "NATIVE", "it", siblings, id, stats, () => {})
  assert.deepEqual(splits(out), ["en"])
  assert.ok(!out.includes("NOLANG"))
  assert.equal(stats.noLang, 1)
  assert.ok(warns.some((w) => w.includes("z__Q03__xx.md") && w.includes("no lang")))
})

test("stats=null (SPA pass): same output, no counts, no WARN", () => {
  const { siblings } = collect([{ of: "w__Q04", lang: "en", body: "EN\n", mtime: 1, rel: "w__Q04__en.md" }])
  const warns = []
  const out = mergeSiblings("w__Q04", "NATIVE", "en", siblings, id, null, (m) => warns.push(m))
  assert.equal(out, "NATIVE")
  assert.deepEqual(warns, [])
})

test("translated H1 and trailing backlink still stripped", () => {
  const { siblings } = collect([
    { of: "v__Q05", lang: "en", body: "# Title EN\nBody EN\n[[v__Q05]]\n", mtime: 1, rel: "v__Q05__en.md" },
  ])
  const out = mergeSiblings("v__Q05", "NATIVE", "it", siblings, id, null, () => {})
  assert.ok(out.endsWith('<div class="qlang-split" data-lang="en"></div>\n\nBody EN'))
})

// --- trailing self-backlink: only a link to the atom itself is stripped ---------------
const merge1 = (base, sib, transform = id) => {
  const { siblings } = collect([{ of: base, mtime: 1, ...sib }])
  const out = mergeSiblings(base, "NATIVE", "it", siblings, transform, null, () => {})
  return out.split(`<div class="qlang-split" data-lang="${sib.lang}"></div>\n\n`)[1]
}

test("self-backlink to the translation_of target at the end is stripped", () => {
  const b = merge1("1liv19T__Q19", {
    lang: "en",
    rel: "Prove/1liv19T__Q19__en.md",
    body: "# Question 19\n\nText of the question.\n\n[[1liv19T__Q19]]\n",
  })
  assert.equal(b, "Text of the question.")
})

test("self-backlink variants: alias, #heading, .md, folder, case, NFD, CRLF", () => {
  for (const link of [
    "[[INPhO2019-Question__Q05|versione originale]]",
    "[[INPhO2019-Question__Q05#Testo]]",
    "[[INPhO2019-Question__Q05.md]]",
    "[[Prove/INPhO2019-Question__Q05]]",
    "[[inpho2019-question__q05]]",
    "  [[INPhO2019-Question__Q05]]  \n\n",
  ]) {
    const b = merge1("INPhO2019-Question__Q05", { lang: "en", rel: "Prove/INPhO2019-Question__Q05__en.md", body: `Testo.\n\n${link}` })
    assert.equal(b, "Testo.", link)
  }
  const nfd = "Prueba_Ñandú__Q01".normalize("NFD")
  assert.equal(stripSelfBacklink(`Texto.\r\n[[${nfd}]]\r\n`, ["Prueba_Ñandú__Q01".normalize("NFC")]), "Texto.\r\n")
})

test("link to the sibling's own stem is also a self-backlink", () => {
  assert.equal(stripSelfBacklink("Text.\n[[X__Q01__en]]", ["X__Q01", "Prove/X__Q01__en.md"]), "Text.\n")
})

test("the 7 'Soluzioni' links lost before the fix are kept", () => {
  const cases = [
    ["1liv15T def__Q02", "**Answer:** **A** · [[1liv15S def|Soluzioni]]"],
    ["1liv15T def__Q36", "**Answer:** **D** · [[1liv15S def|Soluzioni]]"],
    ["2liv15T Def__Q02", "**Solution:** [[2liv15S Def|Soluzioni]]"],
    ["2liv15T Def__Q04", "**Solution:** [[2liv15S Def|Soluzioni]]"],
    ["2liv15T Def__Q09", "**Solution:** [[2liv15S Def|Soluzioni]]"],
    ["2liv14T-Def__Q09", "**Solution:** [[2liv14S-Def|Soluzioni]]"],
    ["Naz14T def__Q03", "**Solution:** [[Naz14S def|Soluzioni]]"],
  ]
  for (const [base, last] of cases) {
    const b = merge1(base, { lang: "en", rel: `Prove/${base}__en.md`, body: `Question text.\n\n${last}\n` })
    assert.ok(b.endsWith(last), `${base}: ${b}`)
  }
})

test("a trailing link to another note on its own line is kept", () => {
  for (const link of ["[[1liv15S def|Soluzioni]]", "[[1liv19T]]", "[[1liv19T__Q20]]", "[[topic_ottica|Ottica]]"]) {
    const b = merge1("1liv19T__Q19", { lang: "en", rel: "Prove/1liv19T__Q19__en.md", body: `Text.\n\n${link}` })
    assert.equal(b, `Text.\n\n${link}`, link)
  }
})

test("self-backlink not at the very end, or inline after text, is kept", () => {
  const mid = "Text.\n\n[[X__Q01]]\n\nMore text."
  assert.equal(stripSelfBacklink(mid, ["X__Q01"]), mid)
  const inline = "See the original [[X__Q01]]"
  assert.equal(stripSelfBacklink(inline, ["X__Q01"]), inline)
  const twoLinks = "Text.\n[[Other]] [[X__Q01]]"
  assert.equal(stripSelfBacklink(twoLinks, ["X__Q01"]), twoLinks)
})

test("self-backlink is stripped before transform() rewrites atom links", () => {
  // preprocess's transform() turns [[stem__Q19]] into [[prove/<slug>#q19]]
  const rewrite = (s) => s.replace(/\[\[([^\]|#]+?)__([a-z0-9]+)(\|[^\]]*)?\]\]/gi, (f, st, a, al) => `[[prove/${st.toLowerCase()}#${a.toLowerCase()}${al || ""}]]`)
  const b = merge1("1liv21T__Q26", { lang: "en", rel: "Prove/1liv21T__Q26__en.md", body: "Text, see [[1liv21T__Q25]].\n\n[[1liv21T__Q26]]" }, rewrite)
  assert.equal(b, "Text, see [[prove/1liv21t#q25]].")
})
