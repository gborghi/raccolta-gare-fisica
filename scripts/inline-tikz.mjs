// Inline TikZ SVG reproductions into an already-preprocessed content/ tree.
// Same rule as preprocess.mjs injectFigSvg(): `![[...<name>.png]]` -> inline
// <figure class="tikz-fig"><svg/></figure> when tikz-svg/<name>.svg exists (name
// lowercased). Lets a build that starts from the published content/ (CI, or the
// raccolta-gare-fisica repo) produce the same pages as the local vault build.
// Idempotent: once inlined, the embed is gone, so a second run is a no-op.
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from "node:fs"
import path from "node:path"

const ROOT = process.env.RGF_BUILD || "."
const svgDir = path.join(ROOT, "tikz-svg")
const contentDir = path.join(ROOT, "content")
const SVG = new Map()
if (existsSync(svgDir)) {
  for (const f of readdirSync(svgDir).filter((x) => x.endsWith(".svg"))) {
    const svg = readFileSync(path.join(svgDir, f), "utf8")
      .replace(/<\?xml[^>]*\?>\s*/i, "").replace(/<!DOCTYPE[^>]*>\s*/i, "").trim()
    SVG.set(f.replace(/\.svg$/, "").toLowerCase(), svg)
  }
}
let files = 0, figs = 0
function walk(d) {
  for (const e of readdirSync(d)) {
    const p = path.join(d, e)
    if (statSync(p).isDirectory()) { if (e !== "_attachments") walk(p); continue }
    if (!e.endsWith(".md")) continue
    const src = readFileSync(p, "utf8")
    let n = 0
    const out = src.replace(/!\[\[(?:[^\]]*\/)?([^\]/]+?)\.png\]\]/gi, (full, name) => {
      const svg = SVG.get(name.toLowerCase())
      if (!svg) return full
      n++
      return `\n\n<figure class="tikz-fig">\n${svg}\n</figure>\n\n`
    })
    if (n) { writeFileSync(p, out); files++; figs += n }
  }
}
if (SVG.size && existsSync(contentDir)) walk(contentDir)
console.log(`inline-tikz: ${SVG.size} sidecars, ${figs} embeds inlined in ${files} files`)
