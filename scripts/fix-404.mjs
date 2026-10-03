// Post-build: make public/404.html work under ANY base path.
// Quartz renders 404.html with root-absolute URLs taken from baseUrl ("/index.css",
// "/cerca", ...). The same file is served by GitHub Pages under /<repo>/ and by the
// Cloudflare mirror at "/", so root-absolute URLs break on GitHub (page without CSS,
// dead navbar). Fix: a tiny inline script at the top of <head> adds a <base href>
// for the current host (GitHub project site -> "/<repo>/", anything else -> "/"),
// and every root-absolute href/src becomes relative to that base. Idempotent.
//
// The same script also folds trailing slashes: GitHub Pages serves "x.html" for "/x"
// but answers 404 for "/x/" (Cloudflare 308-redirects it instead). When this 404 page
// is reached on a path ending in "/" that is not the site root, it location.replace()s
// to the same path without the trailing slash(es), keeping ?query and #hash. A page
// that really does not exist simply 404s again without the slash: no redirect loop.
//
// The <base> element is created through the DOM. It used to be emitted with
// document.write('<base href="'+r+'">'), and that string literal looked like a real
// href="'+r+'" link to crawlers and link checkers (a dead "+r+" URL).
import fs from "node:fs"
import path from "node:path"

const PUB = process.env.QUARTZ_OUT || process.env.RGF_PUBLIC || "public"
const f = path.join(PUB, "404.html")
if (!fs.existsSync(f)) { console.log("[fix-404] no 404.html, skipped"); process.exit(0) }
let html = fs.readFileSync(f, "utf8")
const MARK = "data-base-fix"
if (!html.includes(MARK)) {
  const script =
    `<script ${MARK}>(function(){var l=location,p=l.pathname,` +
    `r=/\\.github\\.io$/.test(l.hostname)?"/"+p.split("/")[1]+"/":"/";` +
    `if(p.length>r.length&&p.charAt(p.length-1)==="/"){l.replace(p.replace(/\\/+$/,"")+l.search+l.hash)}` +
    `window.__basepath=r.replace(/\\/$/,"");` +
    `var b=document.createElement("base");b.setAttribute("href",r);` +
    `(document.head||document.documentElement).appendChild(b)})()</script>`
  html = html.replace(/<head([^>]*)>/i, (m) => m + script)
  // root-absolute (not protocol-relative) href/src -> relative to <base>
  html = html.replace(/(\s(?:href|src))="\/(?!\/)/g, '$1="')
  // the home link becomes "" -> point it at the base explicitly
  html = html.replace(/(\s(?:href))=""/g, '$1="./"')
  if (html.includes("+r+")) throw new Error("[fix-404] unexpanded '+r+' left in 404.html")
  fs.writeFileSync(f, html)
  console.log("[fix-404] 404.html now base-path independent (+ trailing-slash redirect)")
} else console.log("[fix-404] already fixed")
