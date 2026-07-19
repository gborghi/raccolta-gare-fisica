// Post-build: point every figure <img> at the external asset origin, then drop
// public/_attachments from the deploy tree. Runs only when RGF_ASSET_BASE is set
// (deploy build); a local `quartz build --serve` (unset) keeps relative paths.
import fs from "node:fs"
import path from "node:path"

const BASE = process.env.RGF_ASSET_BASE || ""
const PUB = process.env.RGF_PUBLIC || "public"
if (!BASE) { console.log("[rewrite-asset-urls] RGF_ASSET_BASE unset -- dev mode, no rewrite"); process.exit(0) }

// src="<any relative prefix>_attachments/<path>" -> src="<BASE>/_attachments/<path>"
const RE = /(src=")[^"]*?_attachments\/([^"]+)(")/g
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p)
    else if (e.name.endsWith(".html")) {
      const src = fs.readFileSync(p, "utf8")
      const out = src.replace(RE, (_m, a, rest, b) => `${a}${BASE}/_attachments/${rest}${b}`)
      if (out !== src) fs.writeFileSync(p, out)
    }
  }
}
walk(PUB)
fs.rmSync(path.join(PUB, "_attachments"), { recursive: true, force: true })
console.log(`[rewrite-asset-urls] rewrote _attachments -> ${BASE}, stripped ${PUB}/_attachments`)
