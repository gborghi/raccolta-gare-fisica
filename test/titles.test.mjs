// Titles and labels never render a missing year/level (`na`, `''`) nor a raw source
// file name; translation siblings drop the vault's lone `[[<translation_of>]]` line.
import test from "node:test"
import assert from "node:assert/strict"
import { fixCompTitle, dropPlaceholders, splitSourceName, sourceLabel, headLabel, deriveYear, fillYear } from "../scripts/comp-label.mjs"
import { stripLoneBacklink, mergeSiblings, newSiblingStats } from "../scripts/siblings.mjs"

test("na / '' placeholders are dropped from the title head only", () => {
  assert.equal(fixCompTitle("Russia na", "Russia", "Russia"), "Russia")
  assert.equal(fixCompTitle("OII na Nazionale Sperimentale", "OII", "Italia"), "OII Nazionale Sperimentale")
  assert.equal(fixCompTitle("Giappo na · Problema 5", "Giappo", "Giappone"), "Giappone · Problema 5")
  assert.equal(fixCompTitle("IPhO na '' · Problema 3", "IPhO", ""), "IPhO · Problema 3")
  assert.equal(fixCompTitle("I.P.O. na '  Quesito 4", "", ""), "I.P.O.  Quesito 4")
  assert.equal(fixCompTitle("Argent na allenamento — Problem 2", "Argent", "Argentina"), "Argentina allenamento — Problem 2")
  assert.equal(fixCompTitle("OBF 2011 ''", "OBF", ""), "OBF 2011")
  // body text after the head is never touched; the competition word is never dropped
  assert.equal(dropPlaceholders("OBF 2008 · Uma esfera na água"), "OBF 2008 · Uma esfera na água")
  assert.equal(dropPlaceholders("na"), "na")
  assert.equal(fixCompTitle(fixCompTitle("Russia na", "Russia", "Russia"), "Russia", "Russia"), "Russia")
})

test("source file names are split off titles", () => {
  assert.deepEqual(splitSourceName("OII 2015 2° Livello — 2liv15T Def.pdf"), { title: "OII 2015 2° Livello", source: "2liv15T Def.pdf" })
  assert.deepEqual(splitSourceName("OII 1998 1° Livello Quiz — 1lv98 (2 files merged).pdf — Problema 3"),
    { title: "OII 1998 1° Livello Quiz — Problema 3", source: "1lv98 (2 files merged).pdf" })
  assert.deepEqual(splitSourceName("IPhO 2015 — Sperimentale — E1"), { title: "IPhO 2015 — Sperimentale — E1", source: "" })
})

test("clean labels from file names, none for opaque codes", () => {
  assert.equal(sourceLabel("inbo2012-Q.pdf", { year: "2012" }), "INBO")
  assert.equal(sourceLabel("INChO2024-Question-1.pdf", { year: "2024" }), "INChO")
  assert.equal(sourceLabel("OBF2014_F1_Gabfinal_NII.pdf", { code: "OBF", year: "2014" }), "Fase 1 · Livello II · Soluzioni")
  assert.equal(sourceLabel("Prova 2fase_Nivel1a_2016.pdf", { year: "2016" }), "Fase 2 · Livello 1")
  assert.equal(sourceLabel("2023 P3-Cargas electricas resuelto.pdf", { year: "2023" }), "Problema 3 Cargas electricas · Soluzioni")
  assert.equal(sourceLabel("2009 soluciones_08_09.pdf", { year: "2009" }), "Soluzioni")
  for (const opaque of ["Naz14F def.pdf", "2liv15T Def.pdf", "1lv98 (2 files merged).pdf", "Loc95 (2 files merged).pdf", "COPOLI14Sp def.pdf"])
    assert.equal(sourceLabel(opaque, { year: "2014" }), "", opaque)
  assert.equal(headLabel("OBF 2015 Nazionale Sperimentale", "OBF2015_CadernoRespostaExpNivel1_3fase.pdf", { code: "OBF", year: "2015" }),
    "Fase 3 · Livello 1 · Foglio risposte")
  assert.equal(headLabel("IPhO-DE-R1 2015 Round 1", "46_IPhO_2015_1Rd_Aufgaben_Loesungen.pdf", { code: "IPhO", year: "2015" }), "Soluzioni")
})

test("only the exact lone [[<translation_of>]] line is dropped", () => {
  const of = "src_kangourou_2018_ecolier_finale__QE3"
  const body = `# Title\n\nText [[${of}]] inline\n\n**Answer:** 3\n  [[${of}]]  \n[[${of}|alias]]\n[[${of}#h]]\n[[other]]\n`
  const r = stripLoneBacklink(body, of)
  assert.equal(r.removed, 1)
  assert.equal(r.body, `# Title\n\nText [[${of}]] inline\n\n**Answer:** 3\n[[${of}|alias]]\n[[${of}#h]]\n[[other]]\n`)
  assert.deepEqual(stripLoneBacklink("no link", of), { body: "no link", removed: 0 })
})

test("mergeSiblings counts the dropped back-link lines", () => {
  const siblings = new Map([["X__Q01", new Map([["en", { lang: "en", body: "# T\n\n**Answer:** 4\n[[X__Q01]]\n\nMore\n", mtime: 0, rel: "X__Q01__en.md" }]])]])
  const stats = newSiblingStats()
  const out = mergeSiblings("X__Q01", "Body", "it", siblings, (s) => s, stats, () => {})
  assert.ok(!out.includes("[[X__Q01]]"))
  assert.ok(out.includes("**Answer:** 4"))
  assert.equal(stats.backlinkBlocks, 1)
  assert.equal(stats.backlinkLines, 1)
  assert.equal(stats.backlinkNew, 1)
})

test("missing OII year only from the naz<yy> source folder", () => {
  assert.equal(deriveYear("OII", "Gara individuale/nazionale/sperim/naz02spd/naz02spe.pdf"), "2002")
  assert.equal(deriveYear("OII", "Gara individuale/nazionale/teorica/Naz25-TEO/Naz25T.pdf"), "2025")
  assert.equal(deriveYear("OII", "Gara individuale/nazionale/teorica/naz2014th/Naz14F def.pdf"), "")
  assert.equal(deriveYear("Spagna", "gare di altri paesi/Spagna/RSF/P1_Lagota.pdf"), "")
  assert.equal(fillYear("OII na Nazionale Sperimentale — Problema 1", "2002"), "OII 2002 Nazionale Sperimentale — Problema 1")
  assert.equal(fillYear("OII 2015 2° Livello", "2002"), "OII 2015 2° Livello")
  assert.equal(fillYear("Russia na", ""), "Russia na")
})
