// Post-build: make public/404.html work under ANY base path.
// Quartz renders 404.html with root-absolute URLs taken from baseUrl ("/index.css",
// "/cerca", ...). The same file is served by GitHub Pages under /<repo>/ and by the
// Cloudflare mirror at "/", so root-absolute URLs break on GitHub (page without CSS,
// dead navbar). Fix: a tiny inline script at the top of <head> writes a <base href>
// for the current host (GitHub project site -> "/<repo>/", anything else -> "/"),
// and every root-absolute href/src becomes relative to that base. Idempotent.
import fs from "node:fs"
import path from "node:path"

const PUB = process.env.QUARTZ_OUT || process.env.RGF_PUBLIC || "public"
const f = path.join(PUB, "404.html")
if (!fs.existsSync(f)) { console.log("[fix-404] no 404.html, skipped"); process.exit(0) }
let html = fs.readFileSync(f, "utf8")
const MARK = "data-base-fix"
if (!html.includes(MARK)) {
  const script =
    `<script ${MARK}>(function(){var r=/\\.github\\.io$/.test(location.hostname)?"/"+location.pathname.split("/")[1]+"/":"/";` +
    `window.__basepath=r.replace(/\\/$/,"");document.write('<base href="'+r+'">')})()</script>`
  html = html.replace(/<head([^>]*)>/i, (m) => m + script)
  // root-absolute (not protocol-relative) href/src -> relative to <base>
  html = html.replace(/(\s(?:href|src))="\/(?!\/)/g, '$1="')
  // the home link becomes "" -> point it at the base explicitly
  html = html.replace(/(\s(?:href))=""/g, '$1="./"')
  fs.writeFileSync(f, html)
  console.log("[fix-404] 404.html now base-path independent")
} else console.log("[fix-404] already fixed")
