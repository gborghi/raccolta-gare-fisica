import test, { describe } from "node:test"
import assert from "node:assert"
import { compLabel } from "./compLabel"
// @ts-ignore -- plain .mjs build scripts (no type declarations)
import * as mjs from "../../../scripts/comp-label.mjs"
// @ts-ignore
import { fixFile, fixIndex } from "../../../scripts/fix-comp-labels.mjs"

const CUT: [string, string, string][] = [
  ["Svizze", "Svizzera", "Svizzera"],
  ["Argent", "Argentina", "Argentina"],
  ["Brasil", "Brasile", "Brasile"],
  ["Colomb", "Colombia", "Colombia"],
  ["Giappo", "Giappone", "Giappone"],
  ["Austra", "Australia", "Australia"],
  ["Nordic", "Nordic-Baltic", "Nordic-Baltic"],
  ["iberoa", "iberoamericana", "Iberoamericana"],
]
const KEEP: [string, string][] = [
  ["IPhO", "International"], ["OBF", "Brasile"], ["India", "India"], ["Spagna", "Spagna"],
  ["Canada", "Canada"], ["Russia", "Russia"], ["CAP-HS", "Canada"], ["PLANCKS", "International"],
  ["Brazil", "Brazil"], ["", "Svizzera"], ["Svizze", ""],
]

describe("compLabel (client + build script agree)", () => {
  for (const [c, n, full] of CUT) {
    test(`${c} -> ${full}`, () => {
      assert.strictEqual(compLabel(c, n), full)
      assert.strictEqual(mjs.compLabel(c, n), full)
    })
  }
  for (const [c, n] of KEEP) {
    test(`keeps ${c || "(empty)"} / ${n || "(empty)"}`, () => {
      assert.strictEqual(compLabel(c, n), c)
      assert.strictEqual(mjs.compLabel(c, n), c)
    })
  }
})

describe("fixCompTitle", () => {
  const f = mjs.fixCompTitle
  test("prova title", () => assert.strictEqual(f("Svizze 2011", "Svizze", "Svizzera"), "Svizzera 2011"))
  test("atom title", () =>
    assert.strictEqual(f("Svizze 2011 — Quesito 1", "Svizze", "Svizzera"), "Svizzera 2011 — Quesito 1"))
  test("empty-level placeholder dropped", () => {
    assert.strictEqual(f("OBF 2011 ''", "OBF", "Brasile"), "OBF 2011")
    assert.strictEqual(f("Argent 2012 '' — Quesito 3", "Argent", "Argentina"), "Argentina 2012 — Quesito 3")
  })
  test("idempotent", () => assert.strictEqual(f("Svizzera 2011", "Svizze", "Svizzera"), "Svizzera 2011"))
  test("only a leading whole word", () => {
    assert.strictEqual(f("Brasileiro 2011", "Brasil", "Brasile"), "Brasileiro 2011")
    assert.strictEqual(f("IPhO 2011", "IPhO", "International"), "IPhO 2011")
  })
})

describe("fix-comp-labels build step", () => {
  const page = [
    "---",
    "title: Svizze 2011",
    "tipo: prova",
    "tags:",
    "  - kg/prova",
    "  - paese/Svizzera",
    "  - comp/Svizze",
    "---",
    '<span class="atom-split" id="q01" data-atom="q01" data-title="Svizze 2011 — Quesito 1" data-tags="kg/prova,paese/Svizzera,comp/Svizze,object/disk"></span>',
    "Body mentions Svizze 2011 and stays as is.",
    "",
  ].join("\n")
  test("title + atom markers fixed, body untouched, idempotent", () => {
    const r = fixFile(page)
    assert.match(r.out, /^title: Svizzera 2011$/m)
    assert.match(r.out, /data-title="Svizzera 2011 — Quesito 1" data-tags="kg\/prova,paese\/Svizzera,comp\/Svizze/)
    assert.match(r.out, /Body mentions Svizze 2011 and stays as is\./)
    assert.match(r.out, /- comp\/Svizze$/m)
    assert.deepStrictEqual([r.titles, r.atoms], [1, 1])
    assert.strictEqual(fixFile(r.out).out, r.out)
  })
  test("pages of real codes untouched", () => {
    const p = page.replace(/Svizze/g, "IPhO").replace(/Svizzera/g, "International")
    assert.strictEqual(fixFile(p).out, p)
  })
  test("classic page with comp_code/country fields", () => {
    const p = "---\ntipo: prova\ncomp_code: Brasil\ncountry: Brasile\ntags:\n  - kg/prova\ntitle: Brasil 2017 — ProvaExpFinal2017.pdf\n---\nbody\n"
    assert.match(fixFile(p).out, /^title: Brasile 2017 — ProvaExpFinal2017\.pdf$/m)
  })
  test("parent without tags uses the first atom marker", () => {
    const p = '---\ntitle: Argent 2012\ntipo: prova\ntags:\n  - kg/prova\n---\n<span class="atom-split" id="q01" data-title="Argent 2012 — Quesito 1" data-tags="kg/prova,paese/Argentina,comp/Argent"></span>\n'
    const r = fixFile(p)
    assert.match(r.out, /^title: Argentina 2012$/m)
    assert.match(r.out, /data-title="Argentina 2012 — Quesito 1"/)
  })
  test("search index titles", () => {
    const full = { atoms: {
      a: { title: "Svizze 2011 — Quesito 1", tags: ["paese/Svizzera", "comp/Svizze"] },
      b: { title: "IPhO 2011 — Quesito 1", tags: ["paese/International", "comp/IPhO"] },
    } }
    assert.strictEqual(fixIndex(full), 1)
    assert.strictEqual(full.atoms.a.title, "Svizzera 2011 — Quesito 1")
    assert.strictEqual(full.atoms.b.title, "IPhO 2011 — Quesito 1")
  })
})
