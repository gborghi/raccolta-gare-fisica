// Repair link/image defects in the preprocessed content/ tree, before `quartz build`.
// Runs on the same content/ for every build (local vault build, the public repo,
// CI), so GitHub Pages and the Cloudflare mirror get the same fixes. Idempotent.
//
//  1. figure embeds whose path/case does not match the real file in content/_attachments
//     (bare `![[GPhO_2016_p1_f1.png]]`, typo `_attaccamenti/`, wrong dir case)
//     -> `![[_attachments/<dir>/<file>]]` when the basename identifies ONE real file.
//  2. extension-less placeholder images `![caption](fig1)` (OCR artefact; the real
//     embed follows on the next lines) -> the caption as italic text.
//  3. chemistry state markers parsed as links: `[H+](aq)` -> `[H+]\(aq)`.
//  4. concept wikilinks whose name contains `/` or lacks an accent the page has
//     (`[[Pipe/Tube (object)]]`, `[[Ampere's Law (metodo)]]`) -> the existing page.
//  5. "Prove collegate" list items pointing at PDFs that were never converted to a
//     page -> link to the PDF on Google Drive (scripts/pdf-drive-map.json, the same
//     "Apri PDF" mechanism used by the soluzioni pages) or plain text if unmapped.
// Prints a report; with RGF_FIX_REPORT=<file> writes the JSON list of changes.
import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from "node:fs"
import path from "node:path"

const ROOT = process.env.RGF_BUILD || "."
const CONTENT = path.join(ROOT, "content")
const ATT = path.join(CONTENT, "_attachments")
const slug = (s) => s.split("/").map((seg) =>
  seg.replace(/\s/g, "-").replace(/&/g, "-and-").replace(/%/g, "-percent").replace(/\?/g, "").replace(/#/g, "").toLowerCase()
).join("/").replace(/\/$/, "")
const fold = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()

const mdFiles = [], attFiles = new Set(), attByBase = new Map(), proveAttByBase = new Map()
;(function walk(d, rel) {
  for (const e of readdirSync(d)) {
    const p = path.join(d, e), r = rel ? rel + "/" + e : e
    if (statSync(p).isDirectory()) { walk(p, r); continue }
    if (r.startsWith("_attachments/")) {
      attFiles.add(r)
      const b = e.toLowerCase()
      if (!attByBase.has(b)) attByBase.set(b, [])
      attByBase.get(b).push(r)
    } else if (r.startsWith("prove/_attachments/")) {
      // co-located copies of the prove figures: used only when content/_attachments
      // has no file with that name (same URL on olifis-assets after rewrite-asset-urls)
      attFiles.add(r)
      const b = e.toLowerCase()
      if (!proveAttByBase.has(b)) proveAttByBase.set(b, [])
      proveAttByBase.get(b).push(r)
    } else if (e.endsWith(".md")) mdFiles.push(r)
  }
})(CONTENT, "")
const pagePaths = new Set(mdFiles.map((r) => r.replace(/\.md$/, "")))
const pageByBase = new Map(), pageByFold = new Map()
for (const p of pagePaths) {
  const b = p.split("/").pop()
  if (!pageByBase.has(b)) pageByBase.set(b, []); pageByBase.get(b).push(p)
  const f = fold(b)
  if (!pageByFold.has(f)) pageByFold.set(f, []); pageByFold.get(f).push(p)
}
const driveMapFile = path.join(ROOT, "scripts", "pdf-drive-map.json")
const driveMap = existsSync(driveMapFile) ? JSON.parse(readFileSync(driveMapFile, "utf8")) : {}

const changes = []
const uniqueAtt = (name) => {
  const hits = attByBase.get(name.toLowerCase()) || []
  if (hits.length) return hits.length === 1 ? hits[0] : null
  const ph = proveAttByBase.get(name.toLowerCase()) || []
  return ph.length === 1 ? ph[0] : null
}
const attExists = (p) => attFiles.has(slug(p))

for (const rel of mdFiles) {
  const fp = path.join(CONTENT, rel)
  const src = readFileSync(fp, "utf8")
  let out = src
  const log = (kind, from, to) => changes.push({ page: rel, kind, from, to })

  // 1a. wikilink figure embeds
  out = out.replace(/!\[\[([^\]|]+?\.(?:png|jpe?g|gif|svg|webp))(\|[^\]]*)?\]\]/gi, (full, target, alias = "") => {
    const t = target.trim()
    const hasDir = t.includes("/")
    const ok = hasDir ? attExists(t.replace(/^\.?\//, "")) : (t === t.toLowerCase() && (attByBase.has(t) || proveAttByBase.has(t)))
    if (ok) return full
    const real = uniqueAtt(t.split("/").pop())
    if (!real) return full
    const rep = `![[${real}${alias}]]`
    log("figure-embed", full, rep); return rep
  })
  // 1b. markdown figure images with a wrong relative path (e.g. `_attaccamenti/`)
  out = out.replace(/!\[([^\]]*)\]\(([^)\s]+?\.(?:png|jpe?g|gif|svg|webp))\)/gi, (full, alt, target) => {
    if (/^(https?:|data:)/i.test(target)) return full
    const t = decodeURI(target).replace(/^(\.\.\/)+|^\.\//, "")
    if (attExists(t)) return full
    const real = uniqueAtt(t.split("/").pop())
    if (!real) return full
    const rep = `![[${real}${alt ? "|" + alt.replace(/[\]|]/g, " ") : ""}]]`
    log("figure-path", full, rep); return rep
  })
  // 2. extension-less placeholder images -> caption text
  out = out.replace(/!\[([^\]]+)\]\(([A-Za-z0-9_-]+)\)/g, (full, alt, target) => {
    if (pagePaths.has(target) || pageByBase.has(slug(target))) return full
    const rep = `*${alt.trim()}*`
    log("placeholder-image", full, rep); return rep
  })
  // 3. chemistry state markers
  out = out.replace(/(?<!!)\]\((aq|g|s|l|dissolved)\)/g, (full, st) => { log("chem-state", full, `]\\(${st})`); return `]\\(${st})` })
  // 4 + 5. wikilinks that do not resolve
  out = out.replace(/(?<!!)\[\[([^\]|#]+?)(#[^\]|]*)?(\|[^\]]*)?\]\]/g, (full, target, frag = "", alias = "") => {
    const t = target.trim()
    const s = slug(t)
    if (pagePaths.has(s) || (!t.includes("/") && pageByBase.has(s))) return full
    if (t.includes("/") && pageByBase.has(s.split("/").pop())) return full  // path form, basename resolves
    // 4. concept page reachable by '/'->'-' or by accent folding
    const cands = new Set()
    for (const p of pageByBase.get(slug(t.replace(/\//g, "-"))) || []) cands.add(p)
    for (const p of pageByFold.get(fold(slug(t.replace(/\//g, "-")))) || []) cands.add(p)
    if (cands.size === 1) {
      const p = [...cands][0]
      const rep = `[[${p}${frag}${alias || "|" + t}]]`
      log("wikilink-concept", full, rep); return rep
    }
    return full
  })
  // 5. unconverted PDFs in "Prove collegate" lists (soluzioni pages)
  out = out.replace(/^(\s*-\s*)\[\[([^\]|#]+?)\]\]\s*$/gm, (full, lead, target) => {
    const t = target.trim(), s = slug(t)
    if (pagePaths.has(s) || pageByBase.has(s)) return full
    const d = driveMap[t] || driveMap[t + ".pdf"]
    const rep = d ? `${lead}[${t}.pdf](https://drive.google.com/file/d/${d}/view) (PDF)` : `${lead}${t}.pdf (PDF non convertito)`
    log(d ? "pdf-drive" : "pdf-plain", full.trim(), rep.trim()); return rep
  })
  if (out !== src) writeFileSync(fp, out)
}
const by = {}
for (const c of changes) by[c.kind] = (by[c.kind] || 0) + 1
console.log("fix-content-links:", JSON.stringify(by), "in", new Set(changes.map((c) => c.page)).size, "pages")
if (process.env.RGF_FIX_REPORT) writeFileSync(process.env.RGF_FIX_REPORT, JSON.stringify(changes, null, 1))
