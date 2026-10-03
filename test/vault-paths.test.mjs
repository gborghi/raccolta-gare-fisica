import { test } from "node:test"
import assert from "node:assert/strict"
import { nfc, nfcIndex } from "../scripts/vault-paths.mjs"
import { addSibling, mergeSiblings, newSiblingStats } from "../scripts/siblings.mjs"

// "prova-nãviel1-obf-2015-fase2" as stored by macOS/Dropbox (NFD: a + U+0303) vs NFC (U+00E3)
const NFD = "prova-na\u0303viel1-obf-2015-fase2"
const NFC = "prova-n\u00e3viel1-obf-2015-fase2"

test("nfc folds NFD names to NFC and leaves NFC/ASCII untouched", () => {
  assert.notEqual(NFD, NFC)
  assert.equal(nfc(NFD), NFC)
  assert.equal(nfc(NFC), NFC)
  assert.equal(nfc("ipho_2019__Q01"), "ipho_2019__Q01")
  assert.equal(nfc(undefined), undefined)
})

test("nfcIndex returns NFC rels and maps them back to the on-disk name", () => {
  const disk = [`Prove/${NFD}__Q01.md`, `Prove/${NFC}__Q01__it.md`, "Prove/x__Q01.md"]
  const { rels, real } = nfcIndex(disk, () => {})
  assert.deepEqual(rels, [`Prove/${NFC}__Q01.md`, `Prove/${NFC}__Q01__it.md`, "Prove/x__Q01.md"])
  assert.equal(real.get(`Prove/${NFC}__Q01.md`), `Prove/${NFD}__Q01.md`) // read from the real file
  assert.equal(real.get("Prove/x__Q01.md"), "Prove/x__Q01.md")
})

test("nfcIndex drops a second file that collides after NFC, with a WARN", () => {
  const warns = []
  const { rels } = nfcIndex([`Prove/${NFC}.md`, `Prove/${NFD}.md`], (m) => warns.push(m))
  assert.deepEqual(rels, [`Prove/${NFC}.md`])
  assert.equal(warns.length, 1)
})

test("NFD atom keeps its NFC translation sibling (and vice versa)", () => {
  for (const [atom, of] of [[NFD, NFC], [NFC, NFD], [NFD, NFD]]) {
    const siblings = new Map()
    const stats = newSiblingStats()
    addSibling(siblings, `${of}__Q01`, { lang: "it", body: "IT\n", mtime: 1, rel: `Prove/${of}__Q01__it.md` }, stats, () => {})
    const out = mergeSiblings(`${atom}__Q01`, "NATIVE", "pt", siblings, (s) => s, stats, () => {})
    assert.ok(out.startsWith('<div class="qlang-switch" data-default="pt"></div>'), JSON.stringify([atom, of]))
    assert.ok(out.includes('<div class="qlang-split" data-lang="it"></div>'))
    assert.ok(out.includes("IT"))
    assert.equal(stats.merged, 1)
  }
})
