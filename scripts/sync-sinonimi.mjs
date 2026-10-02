#!/usr/bin/env node
// Refresh the committed synonym dictionary quartz/static/sinonimi.json (served as
// static/sinonimi.json; used by the boolean search for cross-language expansion).
//
// Source (first that exists): $RGF_SINONIMI, /workspace/gare-align/dizionario-sinonimi.json.
// In CI neither exists and the committed copy is used as is (no-op). Validates the
// format [{tipo, termini[]}] and writes it compactly; never fails the build.
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const REPO = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const DST = path.join(REPO, "quartz/static/sinonimi.json")
const CANDIDATES = [process.env.RGF_SINONIMI, "/workspace/gare-align/dizionario-sinonimi.json"].filter(Boolean)

try {
  const src = CANDIDATES.find((p) => fs.existsSync(p))
  if (!src) {
    console.log("[sync-sinonimi] no external dictionary; using committed quartz/static/sinonimi.json")
  } else {
    const data = JSON.parse(fs.readFileSync(src, "utf8"))
    if (!Array.isArray(data) || !data.every((g) => g && Array.isArray(g.termini)))
      throw new Error(`${src}: expected [{tipo, termini[]}]`)
    const groups = data
      .map((g) => ({ tipo: g.tipo || "altro", termini: g.termini.filter((t) => typeof t === "string" && t.trim()) }))
      .filter((g) => g.termini.length > 1)
    const out = JSON.stringify(groups)
    const prev = fs.existsSync(DST) ? fs.readFileSync(DST, "utf8") : ""
    if (prev !== out) {
      fs.writeFileSync(DST, out)
      console.log(`[sync-sinonimi] updated from ${src}: ${groups.length} groups`)
    } else console.log("[sync-sinonimi] up to date")
  }
} catch (e) {
  console.warn(`[sync-sinonimi] skipped: ${e?.message || e}`)
}
