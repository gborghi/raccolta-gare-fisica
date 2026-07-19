// Post-build: shrink heavy assets so the site is usable on low-RAM mobile.
// Mirrors the optimization applied to the OlimpiadiMatematica site.
// NOTE (SPA re-architecture, Task 5/5.5): contentIndex.json is now owned by
//   scripts/make-search-index.mjs, which projects a size-budgeted per-atom
//   tf-idf index (desktop ~15MB / mobile ~8MB) and merges the native concept
//   pages back in. shrink_build must NOT re-truncate it -- doing so would
//   corrupt that carefully-sized structure. The old shrinkIndex() step is
//   removed; make-search-index.mjs runs BEFORE this script and is authoritative.
// Remaining job:
//   Prove/index.html (~11MB FolderPage listing all atoms): replace with a tiny
//   redirect stub, so a stray click/breadcrumb to /Prove/ no longer ships an
//   11MB document to the phone. The faceted /cerca page is the browse entry.
import { promises as fs } from "node:fs"

const PUB = process.env.PUB || "public"

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

// from /Prove/index.html, "../cerca" is the faceted search page (best browse entry)
await stubFolderPage("prove/index.html", "../cerca", "Cerca prove")
console.log("shrink_build done")
