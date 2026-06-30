// Post-build: shrink heavy assets so the site is usable on low-RAM mobile.
// Mirrors the optimization applied to the OlimpiadiMatematica site.
// 1) contentIndex.json (~28MB): truncate each `content` field to a short snippet
//    (search still matches titles + lead text). `links` are KEPT because the
//    on-demand graph uses them.
// 2) Prove/index.html (~11MB FolderPage listing all atoms): replace with a tiny
//    redirect stub, so a stray click/breadcrumb to /Prove/ no longer ships an
//    11MB document to the phone. The faceted /cerca page is the browse entry.
import { promises as fs } from "node:fs"

const PUB = process.env.PUB || "public"
const SNIPPET = 150

async function shrinkIndex() {
  const p = `${PUB}/static/contentIndex.json`
  let before, idx
  try {
    const raw = await fs.readFile(p, "utf8")
    before = raw.length
    idx = JSON.parse(raw)
  } catch (e) { console.log("contentIndex: skip -", e.message); return }
  for (const k of Object.keys(idx)) {
    const e = idx[k]
    if (e && typeof e === "object") {
      if (typeof e.content === "string" && e.content.length > SNIPPET) {
        e.content = e.content.slice(0, SNIPPET)
      }
    }
  }
  const out = JSON.stringify(idx)
  await fs.writeFile(p, out)
  console.log(`contentIndex.json: ${(before / 1e6).toFixed(1)}MB -> ${(out.length / 1e6).toFixed(1)}MB`)
}

async function stubFolderPage(rel, redirectTo, label) {
  const p = `${PUB}/${rel}`
  let sz = 0
  try { sz = (await fs.stat(p)).size } catch { console.log(`${rel}: not found, skip`); return }
  const html = `<!DOCTYPE html><html lang="it"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="refresh" content="0; url=${redirectTo}">
<link rel="canonical" href="${redirectTo}">
<title>${label}</title></head>
<body style="font-family:system-ui,sans-serif;padding:2rem">
<p>Elenco completo troppo grande per il browser mobile. Reindirizzamento a <a href="${redirectTo}">${label}</a>…</p>
</body></html>`
  await fs.writeFile(p, html)
  console.log(`${rel}: ${(sz / 1e6).toFixed(1)}MB -> stub redirect (${redirectTo})`)
}

await shrinkIndex()
// from /Prove/index.html, "../cerca" is the faceted search page (best browse entry)
await stubFolderPage("prove/index.html", "../cerca", "Cerca prove")
console.log("shrink_build done")
