# Deploy runbook -- raccolta-gare-fisica

Reference host: **GitHub Pages** -> https://gborghi.github.io/raccolta-gare-fisica/ (branch `gh-pages`, produced by `scripts/build-pages.sh` in a checkout of THIS repo).
Mirror: **Cloudflare Pages** -> https://raccolta-gare-fisica.pages.dev/ (project `raccolta-gare-fisica`, wrangler direct-upload from `gborghi/site-fisica` CI), a byte-exact copy of `gh-pages`: see "Single build + mirror flow" at the end.
Images: **`gborghi/olifis-assets`** (GitHub Pages) -> `gborghi.github.io/olifis-assets/_attachments/...` (offloaded so the main deploys stay ~2,600 files, under the CF 20k cap).

`baseUrl` in `quartz.config.yaml` = `raccolta-gare-fisica.pages.dev`. Auth: `npx wrangler login` (once, gio.borghi@gmail.com) + `gh auth`/git creds for the repos.

## Full deploy (from `site-fisica/`)

```bash
# 0. STOP Dropbox (preprocess/quartz-build rm content/ + public/ -> Dropbox EBUSY locks otherwise).
#    (PowerShell) Get-Process Dropbox | Stop-Process -Force ; then clear content/ + public/ if a prior run left them.

# 1a. Render TikZ figure reproductions (Spec 2 pilot): tikz/*.tex -> tikz-svg/*.svg (hash-cached, needs TeX Live).
node scripts/render-tikz.mjs

# 1b. Regenerate content (ONLY if the vault changed; deterministic + baseUrl-independent, so skippable if content/ is current).
#     preprocess inlines tikz-svg/<name>.svg for any embedded figure that has a sidecar (else the PNG):
NODE_OPTIONS=--max-old-space-size=12288 node preprocess.mjs

# 2. Fork prep (patched plugin forks; forks live in gitignored .quartz/, patches must be recompiled into dist/):
npm run install-plugins            # only if .quartz/ forks are missing
node scripts/patch-search-fork.mjs        # also runs scripts/patch-search-boolean.mjs (ricerca booleana: AND/OR/NOT, -parola, "frase", parentesi)
# Ricerca v2 (metadati + sinonimi), nessun passo CI extra:
#  - campo:valore (nazione:Japan, anno:2019, gara:..., argomento:...) e parole nude che
#    cercano anche nei metadati: static/searchMeta.json, generato da
#    scripts/make-search-meta.mjs (chiamato da shrink_build.mjs) da static/quesiti.json.
#  - sinonimi multilingua: quartz/static/sinonimi.json (committato). Per aggiornarlo dal
#    dizionario di lavoro: node scripts/sync-sinonimi.mjs   (poi commit)
#  - vale anche per le caselle di ricerca nelle pagine (elenchi di concetti/aree/argomenti,
#    /cerca): quartz/components/scripts/searchBoolean.ts (test: searchBoolean.test.ts)
node scripts/patch-graph-fork.mjs
node scripts/patch-tag-links-fork.mjs
node scripts/rebuild-forks.mjs     # CRITICAL: forks main=dist/index.js -> recompile patched src -> dist

# 3. Build:
NODE_OPTIONS=--max-old-space-size=12288 npx quartz build

# 4. Post-build (search index + shrink + gates):
cp -r staticgen/cl public/static/ && cp staticgen/quesiti.json staticgen/quesiti_kw.json staticgen/tagmap.json public/static/
node scripts/make-search-index.mjs         # desktop contentIndex.json ~15MB + mobile contentIndexMobile.json ~8MB
node shrink_build.mjs                        # prove/index.html FolderPage stub
: > public/.nojekyll
node --test test/spa-index-size.test.mjs test/spa-index-merge.test.mjs   # size gate

# 5. Push figures to the assets repo (BEFORE stripping _attachments):
RGF_PUBLIC=public RGF_ASSETS_WORKDIR="<a path OUTSIDE Dropbox, e.g. E:/giovanni/olifis-assets-wt>" node scripts/sync-assets-repo.mjs

# 6. Rewrite figure <img> to the external origin + strip _attachments + emit CF files:
RGF_ASSET_BASE="https://gborghi.github.io/olifis-assets" node scripts/rewrite-asset-urls.mjs
node scripts/emit-cf-files.mjs               # _headers (immutable caching) + robots.txt

# 7. Gates:
find public -type f | wc -l                  # MUST be < 20000 (~2,656)
find public -type f -size +25M               # MUST be empty

# 8. Deploy Cloudflare Pages (primary):
npx wrangler pages deploy public --project-name raccolta-gare-fisica --branch main

# 9. Deploy gh-pages mirror (worktree push of the SAME lean public/, preserve CNAME):
GHP="<path outside Dropbox>"; git worktree add --no-checkout "$GHP" gh-pages
cp -a public/. "$GHP"/ ; git show gh-pages:CNAME > "$GHP/CNAME"
git -C "$GHP" add -A && git -C "$GHP" commit -m "Deploy" && git -C "$GHP" push origin gh-pages
git worktree remove --force "$GHP" ; git worktree prune

# 10. RESTART Dropbox.
```

## Notes / gotchas

- **Dropbox must be stopped** for steps 1+3 (they `rm` content/ + public/, which Dropbox locks -> EBUSY). Flagging `public/`/`content/` Dropbox-ignored does NOT win the race once Dropbox is already syncing existing files. Restart Dropbox at step 10.
- **`rebuild-forks.mjs` is mandatory** after patching -- the forks build from `dist/`, not `src/`.
- **Local dev** (`npx quartz build --serve`): do NOT set `RGF_ASSET_BASE` -> figures stay at relative `_attachments/` (the build copies them into `public/` locally).
- **New figures**: re-run step 5 (incremental push to olifis-assets) as part of any deploy that added figures.
- `wrangler pages project create raccolta-gare-fisica --production-branch main` is only needed once (already done).

## Single build + mirror flow (GitHub = reference, Cloudflare = mirror) -- since 2026-10-02

1. **`content/` of THIS repo is the source of truth** (since 2026-10-02: content PRs #6, #7, #8 fixed
   KaTeX, texts, figures and Fonte links directly here). Build ONLY from the committed `content/`.
   **Do NOT rerun `preprocess.mjs`** from the Dropbox vault: it would regenerate `content/` and wipe those
   fixes (and strip `.pdf` Fonte links). OPEN ITEM for Giovanni: back-sync the vault from `content/`
   before preprocess is ever used again. New content arrives as PRs to `main` of this repo
   (page dates = git dates of these commits, so the build must run in a checkout of THIS repo).
2. In the checkout: `QUARTZ_CONCURRENCY=1 PUBLISH=1 scripts/build-pages.sh` (concurrency 1 on <16 GB RAM).
   It runs `inline-tikz.mjs` (TikZ sidecars -> inline SVG, same rule as preprocess),
   `fix-content-links.mjs` (figure paths incl. `content/prove/_attachments`, concept links,
   unconverted PDFs -> Google Drive via `scripts/pdf-drive-map.json`), the fork patches, `quartz build`,
   search index, `shrink_build`, `fix-404.mjs`; then (PUBLISH=1) syncs figures ADD-only to
   `olifis-assets`, rewrites figure URLs to `gborghi.github.io/olifis-assets`, writes `_headers`/`robots.txt`
   and pushes `public/` to `gh-pages` as a new fast-forward commit (CNAME kept, never `--force`).
   Content edits made by the two scripts are build-time only: do NOT commit them.
3. Cloudflare: run (or push to) `site-fisica` -> workflow `Deploy`. Its last step
   `node scripts/emit-cf-files.mjs` runs in mirror mode in CI: `scripts/mirror-from-github.mjs` clones
   `gh-pages` and REPLACES `public/` with it (CNAME dropped, `_headers` added). `CF_MIRROR=0` = old behaviour.
4. Navbar, logo and `body[data-basepath]` are relative to the page (`Navbar.tsx`, `renderPage.tsx`,
   `spa.inline.ts`), so the same bytes work under `/` and `/raccolta-gare-fisica/`.
5. Verify with `check.py` (gare-mirror).

## Lingue dei quesiti

Convenzione (già in uso; modello: `content/prove/cuadernillo_2019.md`, atomo `q02` nella raccolta di fisica).
Obiettivo: ogni quesito in **lingua originale + italiano + inglese**, tutto **nello stesso file**, dentro lo stesso
atomo (niente file separati per lingua, niente campi nel frontmatter):

```markdown
<span class="atom-split" id="q02" data-atom="q02" ...></span>
<div class="qlang-switch" data-default="es"></div>      <!-- data-default = codice della lingua ORIGINALE -->

**Titolo originale**
Testo originale ...

**Topic:** [[...]]
**Metodi:** ... / **Competenze:** ... / **Objects:** ...
**Fonte:** [Testo (PDF) — p.116](https://drive.google.com/file/d/.../view)

<div class="qlang-split" data-lang="it"></div>          <!-- div vuoto, poi la versione italiana -->

**Titolo in italiano**
Testo in italiano ...

<div class="qlang-split" data-lang="en"></div>          <!-- div vuoto, poi la versione inglese -->

**Title in English**
Text in English ...
```

- Se l'originale è già italiano o inglese, quel blocco `qlang-split` si omette (l'originale fa da versione in quella lingua).
- Figure, Topic/Fonte e link restano nel blocco originale; nelle traduzioni si ripetono solo le figure citate nel testo.
- Le traduzioni arrivano come PR di contenuto (branch `kepler/traduzioni-gare-N`) e passano dalla stessa build unica:
  tutti i blocchi `qlang` stanno nella stessa pagina, quindi la ricerca full-text di Quartz (inclusa quella booleana)
  e l'indice per quesito li indicizzano tutti; lo switch lingua è solo lato client e non cambia i file pubblicati,
  quindi GitHub Pages e il mirror Cloudflare restano identici byte per byte.

## Immagini e limiti Cloudflare (20.000 file / 25 MiB per file)

Cloudflare deve essere identico a GitHub Pages: nessuna immagine può essere esclusa o trasformata in link.
Stato al 2026-10-02: nessun file supera i limiti (fisica ~2,7k file, mate ~5,4k, file max ~11 MB), quindi tutte
le figure sono servite così:
- **fisica**: `<img>` verso `https://gborghi.github.io/olifis-assets/_attachments/...` (stesso URL assoluto su
  entrambi gli host; `build-pages.sh` sincronizza in add-only anche `content/prove/_attachments`);
  figure TikZ → SVG inline nella pagina (`scripts/inline-tikz.mjs`).
- **mate**: file nel sito (`_attachments/`), copiati byte per byte sul mirror tramite `mirror-manifest.json`.
- Elenco per figura: `/workspace/gare-align/figure-methods.csv` (riepilogo `figure-methods.md`).

Se in futuro una figura superasse i limiti, deve restare un `<img>` identico, in quest'ordine di preferenza:
1. **jsDelivr** dal repo pubblico, fissato a un commit/tag: `https://cdn.jsdelivr.net/gh/gborghi/<repo>@<commit>/<path>`
   (max 50 MB/file); va aggiunto `https://cdn.jsdelivr.net` a `img-src` in `_headers` (emit-cf-files).
2. **Google Drive** (cartella `olimpiadifisica`, sottocartella dedicata, condivisione pubblica):
   `https://lh3.googleusercontent.com/d/<ID>` o `https://drive.google.com/thumbnail?id=<ID>&sz=w2000`
   (non `uc?export=view`); aggiungere il dominio a `img-src`.
3. Cloudflare R2 solo come ultima scelta.
Annotare qui ogni figura che usa uno di questi meccanismi.


**Regola concordata (Kepler/Plato, 2026-10-02):** finché Kepler non conferma che le PR di contenuto (#6, #8 della
fisica) e le traduzioni sono nel vault Dropbox con diff zero, **nessuna build o deploy può eseguire `preprocess.mjs`**:
si costruisce solo dal `content/` committato (i workflow CI non lo chiamano).
