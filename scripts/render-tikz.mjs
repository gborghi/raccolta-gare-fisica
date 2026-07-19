// Build step (runs BEFORE preprocess.mjs): render each TikZ sidecar
// tikz/<basename>.tex -> tikz-svg/<basename>.svg via latex -> dvi -> dvisvgm.
//
// The sidecar file contains ONLY the picture (`\begin{tikzpicture}...
// \end{tikzpicture}`); this script wraps it in a fixed standalone preamble.
// Hash-cached: a figure re-renders only when its .tex changed (sha in
// tikz-svg/.hashes.json). Uses the NATIVE dvi path (dvisvgm --pdf is broken by
// Ghostscript >= 10.01). If TeX Live is absent, skips with a warning (the
// preprocess hook then falls back to the original PNG).
import fs from "node:fs"
import path from "node:path"
import crypto from "node:crypto"
import os from "node:os"
import { execFileSync } from "node:child_process"

const ROOT = process.env.RGF_BUILD || "."
const SRC = path.join(ROOT, "tikz")
const OUT = path.join(ROOT, "tikz-svg")
const HASHES = path.join(OUT, ".hashes.json")

const PREAMBLE = String.raw`\documentclass[border=4pt]{standalone}
\usepackage{tikz}
\usepackage{amsmath}
\usepackage[siunitx,europeanresistors,americaninductors]{circuitikz}
\usetikzlibrary{arrows.meta,calc,angles,quotes,patterns,decorations.pathmorphing,positioning}
\begin{document}
`
const POSTAMBLE = "\n\\end{document}\n"

function have(cmd) { try { execFileSync(cmd, ["--version"], { stdio: "ignore" }); return true } catch { return false } }
if (!have("latex") || !have("dvisvgm")) {
  console.warn("[render-tikz] latex/dvisvgm not on PATH -- skipping (figures fall back to PNG)")
  process.exit(0)
}
if (!fs.existsSync(SRC)) { console.log("[render-tikz] no tikz/ dir -- nothing to render"); process.exit(0) }
fs.mkdirSync(OUT, { recursive: true })
const hashes = fs.existsSync(HASHES) ? JSON.parse(fs.readFileSync(HASHES, "utf8")) : {}

const files = fs.readdirSync(SRC).filter((f) => f.endsWith(".tex"))
let rendered = 0, cached = 0, failed = 0
for (const f of files) {
  const base = f.replace(/\.tex$/, "")
  const texPath = path.join(SRC, f)
  const body = fs.readFileSync(texPath, "utf8")
  const sha = crypto.createHash("sha1").update(body).digest("hex")
  const svgPath = path.join(OUT, base + ".svg")
  if (hashes[base] === sha && fs.existsSync(svgPath)) { cached++; continue }

  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "tikz-"))
  try {
    fs.writeFileSync(path.join(tmp, "f.tex"), PREAMBLE + body + POSTAMBLE)
    execFileSync("latex", ["-interaction=nonstopmode", "-halt-on-error", "f.tex"], { cwd: tmp, stdio: "pipe" })
    execFileSync("dvisvgm", ["--no-fonts", "--exact", "f.dvi", "-o", "f.svg"], { cwd: tmp, stdio: "pipe" })
    fs.copyFileSync(path.join(tmp, "f.svg"), svgPath)
    hashes[base] = sha
    rendered++
    console.log(`[render-tikz] rendered ${base}.svg`)
  } catch (e) {
    failed++
    const log = (() => { try { return fs.readFileSync(path.join(tmp, "f.log"), "utf8").split("\n").filter((l) => l.startsWith("!")).slice(0, 3).join(" | ") } catch { return e.message } })()
    console.error(`[render-tikz] FAILED ${base}: ${log}`)
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true })
  }
}
fs.writeFileSync(HASHES, JSON.stringify(hashes, null, 0))
console.log(`[render-tikz] ${rendered} rendered, ${cached} cached, ${failed} failed (${files.length} sidecar figures)`)
if (failed) process.exit(1)
