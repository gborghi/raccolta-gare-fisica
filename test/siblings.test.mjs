import { test } from "node:test"
import assert from "node:assert/strict"
import { addSibling, mergeSiblings, newSiblingStats } from "../scripts/siblings.mjs"

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
