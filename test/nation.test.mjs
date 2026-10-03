import { test } from "node:test"
import assert from "node:assert/strict"
import { nationInfo } from "../scripts/nation.mjs"

test("German national selection keeps Germany (pdf under Germania/IPhO, comp_code IPhO)", () => {
  // record as in the vault: IPhO_MC_Aufgaben__Q17
  const n = nationInfo("Germania", "IPhO", "gare di altri paesi/Germania/IPhO/IPhO_MC_Aufgaben.pdf")
  assert.deepEqual(n, { iso: "de", name: "Germany" })
})

test("IPhO paper is International", () => {
  assert.deepEqual(nationInfo("International", "IPhO", "IPhO/2019/theory/T1.pdf"), {
    iso: "",
    name: "International",
  })
  assert.deepEqual(nationInfo("International", "EuPhO", "EuPhO/2021/exp.pdf"), {
    iso: "",
    name: "International",
  })
})

test("country missing or unmapped: comp_code / pdf path decide", () => {
  assert.equal(nationInfo("", "IPhO", "").name, "International")
  assert.equal(nationInfo("", "OAF", "Argentina/x.pdf").name, "International")
  assert.equal(nationInfo("Atlantis", "EuPhO", "").name, "International")
  assert.equal(nationInfo("Atlantis", "", "gare/ipho/2010/a.pdf").name, "International")
  assert.deepEqual(nationInfo("Asia", "APhO", "APhO/2004/exp.pdf"), { iso: "", name: "Asia" })
})

test("mapped countries pass through unchanged", () => {
  assert.deepEqual(nationInfo("Italia", "OII", "Italia/OII/2019.pdf"), { iso: "it", name: "Italy" })
  assert.deepEqual(nationInfo(" Argentina ", "OAF", ""), { iso: "ar", name: "Argentina" })
})
