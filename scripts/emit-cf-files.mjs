// Post-build: Cloudflare Pages _headers (immutable-asset caching) + robots.txt.
import fs from "node:fs"
import path from "node:path"

const PUB = process.env.RGF_PUBLIC || "public"
const EXTS = ["js", "css", "woff2", "svg", "png", "jpg", "jpeg", "webp", "avif"]
const headers = EXTS.map((e) => `/*.${e}\n  Cache-Control: public, max-age=604800, immutable`).join("\n")
fs.writeFileSync(path.join(PUB, "_headers"), headers + "\n")
const robots = ["User-agent: *", "Allow: /", "", "Sitemap: https://raccolta-gare-fisica.pages.dev/sitemap.xml"].join("\n")
fs.writeFileSync(path.join(PUB, "robots.txt"), robots + "\n")
console.log("[emit-cf-files] wrote _headers + robots.txt")
