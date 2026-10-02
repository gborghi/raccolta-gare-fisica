// Cloudflare Pages files. GitHub Pages (branch gh-pages of gborghi/raccolta-gare-fisica)
// is the reference: in CI (or with CF_MIRROR=1) public/ is REPLACED by an exact copy of
// gh-pages (scripts/mirror-from-github.mjs; CNAME dropped), then only the Cloudflare
// config file _headers is (re)written -- byte-identical to the one already in gh-pages.
// In the single local build (scripts/build-pages.sh, CF_MIRROR=0) it writes _headers +
// robots.txt into public/ before that public/ is pushed to gh-pages.
import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"

const PUB = process.env.RGF_PUBLIC || "public"
const mirror = process.env.CF_MIRROR ? process.env.CF_MIRROR === "1" : !!process.env.CI
if (mirror) {
  execFileSync(process.execPath, ["scripts/mirror-from-github.mjs"], {
    stdio: "inherit",
    env: { ...process.env, MIRROR_SOURCE: process.env.MIRROR_SOURCE || "git:https://github.com/gborghi/raccolta-gare-fisica.git#gh-pages" },
  })
  // sitemap/robots/RSS advertise the Cloudflare base URL on Cloudflare (all else byte-identical)
  execFileSync(process.execPath, ["scripts/host-urls.mjs"], { stdio: "inherit", env: { ...process.env, HOST: "cloudflare", QUARTZ_OUT: PUB } })
}
const EXTS = ["js", "css", "woff2", "svg", "png", "jpg", "jpeg", "webp", "avif"]
const headers = [
  "/*",
  "  X-Content-Type-Options: nosniff",
  "  Referrer-Policy: strict-origin-when-cross-origin",
  "  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://gc.zgo.at; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net data:; img-src 'self' data: blob: https://gborghi.github.io https://flagcdn.com; connect-src 'self' https://cdn.jsdelivr.net https://gc.zgo.at; frame-src https://drive.google.com https://docs.google.com; object-src 'none'; base-uri 'self'",
  ...EXTS.map((e) => `/*.${e}\n  Cache-Control: public, max-age=604800, immutable`),
].join("\n")
fs.writeFileSync(path.join(PUB, "_headers"), headers + "\n")
if (!mirror) {
  const robots = ["User-agent: *", "Allow: /", "", "Sitemap: https://raccolta-gare-fisica.pages.dev/sitemap.xml"].join("\n")
  fs.writeFileSync(path.join(PUB, "robots.txt"), robots + "\n")
}
console.log(`[emit-cf-files] ${mirror ? "mirrored gh-pages + " : ""}_headers${mirror ? "" : " + robots.txt"} written`)
