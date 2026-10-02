#!/usr/bin/env node
// Compact metadata index for the search (boolean v2): public/static/searchMeta.json
//
// Source: public/static/quesiti.json (one record per quesito, built from the item
// frontmatter / atom tags by preprocess). Output, keyed by the SAME ids as the search
// index (contentIndex.json: "page#qNN" atoms and "page" gara pages):
//   { "f": [field names], "v": [unique values], "r": { id: [valueIdx | [idx...] | -1] } }
// Every record field is kept (nation, competition, year, level, topics, methods,
// skills, ...) except the free text (summary), the flag code and the href itself.
// Gara pages (id without "#") get the page-level fields of their first quesito.
// Idempotent; never fails the build (exits 0 with a warning if quesiti.json is missing).
import fs from "node:fs"
import path from "node:path"

const PUB = process.env.QUARTZ_OUT || "public"
const SRC = path.join(PUB, "static", "quesiti.json")
const OUT = path.join(PUB, "static", "searchMeta.json")
const SKIP = new Set(["href", "summary", "flag", "kw"])
const PAGE_FIELDS = new Set([
  "country", "flag_name", "competition", "comp_code", "family", "year", "level",
  "tipo_gara", "modalita", "difficolta",
])

function main() {
  if (!fs.existsSync(SRC)) {
    console.warn(`[make-search-meta] ${SRC} missing -- searchMeta.json not written`)
    return
  }
  let data = JSON.parse(fs.readFileSync(SRC, "utf8"))
  if (!Array.isArray(data)) data = data.quesiti || Object.values(data)
  const fields = []
  for (const q of data) for (const k of Object.keys(q || {})) if (!SKIP.has(k) && !fields.includes(k)) fields.push(k)
  const values = []
  const vIdx = new Map()
  const id = (s) => {
    let i = vIdx.get(s)
    if (i === undefined) {
      i = values.length
      values.push(s)
      vIdx.set(s, i)
    }
    return i
  }
  const enc = (v) => {
    if (v == null || v === "") return -1
    if (Array.isArray(v)) {
      const a = v.filter((x) => x != null && x !== "").map((x) => id(String(x)))
      return a.length ? a : -1
    }
    return id(String(v))
  }
  const rows = {}
  const pages = {}
  for (const q of data) {
    const href = q?.href
    if (!href) continue
    rows[href] = fields.map((f) => enc(q[f]))
    const page = href.split("#")[0]
    if (page !== href && !pages[page]) pages[page] = fields.map((f) => (PAGE_FIELDS.has(f) ? enc(q[f]) : -1))
  }
  for (const [p, r] of Object.entries(pages)) if (!rows[p]) rows[p] = r
  // trim trailing -1s
  for (const k of Object.keys(rows)) {
    const r = rows[k]
    while (r.length && r[r.length - 1] === -1) r.pop()
  }
  const out = JSON.stringify({ f: fields, v: values, r: rows })
  fs.mkdirSync(path.dirname(OUT), { recursive: true })
  fs.writeFileSync(OUT, out)
  console.log(
    `[make-search-meta] searchMeta.json: ${(out.length / 1e6).toFixed(2)}MB, ${Object.keys(rows).length} ids, fields: ${fields.join(",")}`,
  )
}

try {
  main()
} catch (e) {
  console.warn(`[make-search-meta] skipped: ${e?.message || e}`)
}
