// Titles and labels never render a missing year/level (`na`, `''`) nor a raw source
// file name; translation siblings drop the vault's lone `[[<translation_of>]]` line.
import test from "node:test"
import assert from "node:assert/strict"
import { fixCompTitle, dropPlaceholders, splitSourceName, sourceLabel, headLabel, deriveYear, fillYear, addLabel, insertLabel, solLabel, solFolderHead, alignCompWord, fixCompTitleNoAlign } from "../scripts/comp-label.mjs"
import { stripLoneBacklink, mergeSiblings, newSiblingStats } from "../scripts/siblings.mjs"

test("na / '' placeholders are dropped from the title head only", () => {
  assert.equal(fixCompTitle("Russia na", "Russia", "Russia"), "Russia")
  assert.equal(fixCompTitle("OII na Nazionale Sperimentale", "OII", "Italia"), "OII Nazionale Sperimentale")
  assert.equal(fixCompTitle("Giappo na · Problema 5", "Giappo", "Giappone"), "Giappone · Problema 5")
  assert.equal(fixCompTitle("IPhO na '' · Problema 3", "IPhO", ""), "IPhO · Problema 3")
  assert.equal(fixCompTitle("I.P.O. na '  Quesito 4", "", ""), "I.P.O. — Quesito 4")
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

test("stale country head rebuilt from the note's own frontmatter (never from the pdf path)", () => {
  assert.equal(fixCompTitle("Russia na — Quesito 1", "IZhO", "Kazakhstan", 2014), "IZhO 2014 — Quesito 1")
  assert.equal(fixCompTitle("Russia na · Problema 3", "IZhO", "Kazakhstan", "2014"), "IZhO 2014 · Problema 3")
  assert.equal(fixCompTitle("Russia 2019 — Quesito 1", "Romania", "Romania", "2019"), "Romania 2019 — Quesito 1")
  assert.equal(fixCompTitle("Russia", "Russia", "Estonia", "na"), "Estonia")
  assert.equal(fixCompTitle("Russia na", "Russia", "Russia", "na"), "Russia")
  assert.equal(fixCompTitle("OII 2003 · Problema 1", "IPhO", "International", "2003"), "OII 2003 · Problema 1")
  assert.equal(fixCompTitle("Spagna 2021 — Quesito 1", "Spagna", "Spain", "2021"), "Spagna 2021 — Quesito 1")
})

test("double-space separator before Quesito/Problema becomes an em dash", () => {
  assert.equal(fixCompTitle("Spagna 2021  Quesito 1", "Spagna", "Spagna", "2021"), "Spagna 2021 — Quesito 1")
  assert.equal(fixCompTitle("Argent 2019 Locale  Quesito 3", "Argent", "Argentina", "2019"), "Argentina 2019 Locale — Quesito 3")
  assert.equal(fixCompTitle("Soluzioni — fogli risposte bis  SPE19.pdf", "", ""), "Soluzioni — fogli risposte bis  SPE19.pdf")
})

test("etichetta: one format, after the head, before the quesito part, never twice", () => {
  assert.equal(addLabel("OII 2014 Nazionale Teorica", "Foglio risposte"), "OII 2014 Nazionale Teorica · Foglio risposte")
  assert.equal(addLabel("Spagna — Quesito 1", "La gota"), "Spagna · La gota — Quesito 1")
  assert.equal(addLabel("Spagna 2019 — Quesito 1", "Prova 1 · La goccia"), "Spagna 2019 · Prova 1 · La goccia — Quesito 1")
  assert.equal(addLabel("OBF 2006 · Fase 3 · Soluzioni", "Fase 3"), "OBF 2006 · Fase 3 · Soluzioni")
  assert.equal(addLabel("IPhO 2015", ""), "IPhO 2015")
})

test("etichetta in concept-list Gara labels", () => {
  assert.equal(insertLabel("OII 2014 Nazionale · Problema 3", "Foglio risposte"), "OII 2014 Nazionale · Foglio risposte · Problema 3")
  assert.equal(insertLabel("Spagna — Quesito 2", "Prova 1 · La goccia"), "Spagna · Prova 1 · La goccia — Quesito 2")
  assert.equal(insertLabel("Argentina 2018", "Quaderno"), "Argentina 2018 · Quaderno")
  assert.equal(insertLabel("Argentina 2018 · Quaderno", "quaderno"), "Argentina 2018 · Quaderno")
})

test("fillYear only takes a real 4-digit year", () => {
  assert.equal(fillYear("Spagna na — Quesito 1", "2019"), "Spagna 2019 — Quesito 1")
  assert.equal(fillYear("Spagna na — Quesito 1", "na"), "Spagna na — Quesito 1")
  assert.equal(fillYear("Spagna na", "''"), "Spagna na")
})

test("soluzioni: label from the file name with a fixed vocabulary, never the raw name", () => {
  assert.equal(solLabel("E1-S_Experiment_1_Solution", "IPhO 2016"), "Sperimentale 1")
  assert.equal(solLabel("solutions-experiment-E2", "IPhO 2024"), "Sperimentale 2")
  assert.equal(solLabel("T1_solution_marking_scheme", "IPhO 2016"), "Teorica 1 · Griglia di valutazione")
  assert.equal(solLabel("2018 Fma-2018-A-Solutions", "F=ma 2018"), "Esame A")
  assert.equal(solLabel("2008-asoe-physics-exam-a-answers", "ASOE 2008"), "Esame A")
  assert.equal(solLabel("IOQA2022-PartII-Solutions-20220503", "IOQA 2022 (Part II)"), "")
  assert.equal(solLabel("NSEC_2025_AnswerKey", "India 2025"), "NSEC · Chiave delle risposte")
  assert.equal(solLabel("2020 NBPhO-2020-solutions-grading", "Nordic-Baltic 2020"), "")
  assert.equal(solLabel("Naz21T-fogliorispostecompilato", "OII 2021 Nazionale Teorica"), "Foglio risposte · Compilato")
  assert.equal(solLabel("1liv15S def", "OII 2015 1° Livello"), "")
  assert.equal(solLabel("Solution_Heat", "IPhO 2019"), "Heat")
})

test("soluzioni without a linked prova: competition from the PDF folder", () => {
  assert.equal(solFolderHead("gare di altri paesi/Svizzera/Nazionale/final_2017_solutions/x/Martian_solution.pdf"), "Svizzera 2017")
  assert.equal(solFolderHead("Gara individuale/ipho/sperimentale/int16sit/__MACOSX/._E1.pdf"), "IPhO 2016")
  assert.equal(solFolderHead("Gara individuale/nazionale/sperim/naz19spe/fogli.pdf"), "OII 2019 Nazionale Sperimentale")
  assert.equal(solFolderHead("altro/x.pdf"), "")
})

test("concept-list alias with a stale competition code follows the note's own comp_code + H1", () => {
  const codes = new Set(["BPhO", "Nordic", "OII", "IPhO"])
  assert.equal(alignCompWord("BPhO 2024 · Problema 1", "Nordic", "Nordic-Baltic", "Nordic", codes), "Nordic-Baltic 2024 · Problema 1")
  assert.equal(alignCompWord("OII 2003 · Problema 1", "IPhO", "International", "OII", codes), "OII 2003 · Problema 1")
  assert.equal(alignCompWord("BPhO 2010", "BPhO", "United Kingdom", "BPhO", codes), "BPhO 2010")
  assert.equal(alignCompWord("OII 2016 Teorica · Problema 02", "IPhO", "International", "IPhO", codes), "OII 2016 Teorica · Problema 02")
  assert.equal(alignCompWord("Spagna 2019 — Quesito 1", "Spagna", "Spain", "Spagna", codes), "Spagna 2019 — Quesito 1")
})

test("build-time pass never re-aligns a head from stale tags (Romania 2019 stays)", () => {
  assert.equal(fixCompTitleNoAlign("Romania 2019", "Russia", "Russia"), "Romania 2019")
  assert.equal(fixCompTitleNoAlign("Estonia 2018 · 200 problemi · 2012–2018", "Russia", "Russia"), "Estonia 2018 · 200 problemi · 2012–2018")
  assert.equal(fixCompTitleNoAlign("Svizze 2011", "Svizze", "Svizzera"), "Svizzera 2011")
  assert.equal(fixCompTitleNoAlign("OBF 2011 ''", "OBF", "Brasile"), "OBF 2011")
})
