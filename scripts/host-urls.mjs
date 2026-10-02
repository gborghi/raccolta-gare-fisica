// Host-specific absolute URLs in the few files crawlers read (sitemap.xml, robots.txt,
// RSS index.xml): each host must advertise ITS OWN base URL. Everything else is
// byte-identical on GitHub Pages and the Cloudflare mirror.
//   HOST=github     node scripts/host-urls.mjs   (build-pages.sh, before publishing gh-pages)
//   HOST=cloudflare node scripts/host-urls.mjs   (emit-cf-files.mjs, after mirroring)
import fs from "node:fs"
import path from "node:path"
const PUB = process.env.QUARTZ_OUT || "public"
const CF = process.env.CF_BASE || "https://raccolta-gare-fisica.pages.dev"
const GH = process.env.GH_BASE || "https://gborghi.github.io/raccolta-gare-fisica"
const [from, to] = process.env.HOST === "cloudflare" ? [GH, CF] : [CF, GH]
let n = 0
for (const f of ["sitemap.xml", "robots.txt", "index.xml"]) {
  const p = path.join(PUB, f)
  if (!fs.existsSync(p)) continue
  const s = fs.readFileSync(p, "utf8")
  const t = s.split(from).join(to)
  if (t !== s) { fs.writeFileSync(p, t); n++ }
}
console.log(`[host-urls] ${n} file(s) -> ${to}`)
