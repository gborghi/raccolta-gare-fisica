# Cloudflare Pages Migration + GitHub Image-Offload -- Design

**Status:** design (awaiting user review) -- 2026-07-19

## Goal

Migrate the published site from GitHub Pages to **Cloudflare Pages** (direct-upload via `wrangler`, the mechanism proven in `SubjectBrain/Physics`), keep **GitHub Pages as a mirror**, and **offload the ~7,724 image assets to a separate GitHub repository** served (free, no payment card) via GitHub Pages' Fastly CDN. Both main-site deploys drop from ~10,378 to **~2,600 files**.

## Context

- Main site currently on GitHub Pages at `gborghi.github.io/raccolta-gare-fisica`, **10,378 files** (the SPA-per-prova collapse already brought it under Cloudflare Pages' 20,000-file cap).
- `_attachments/` = **7,724 PNGs, 508 MB** -- question figures; they dominate the file count (~2,600 non-image files otherwise).
- User picked **GitHub-based image hosting over Cloudflare R2** to avoid R2's card-on-file requirement and the Pages-Functions 100k/day per-request ceiling. Trade-off accepted: images live on a separate GitHub origin.
- Reference for the CF deploy mechanics: `SubjectBrain/Physics/quartz-site` -- CF Pages via `wrangler pages deploy`, `_headers` immutable-asset caching, `robots.txt`, NOT git-integrated (local build hydrates the Dropbox vault + runs preprocess). Physics does not offload images (its corpus fits without it); we add the image repo for asset separation + headroom.

## Architecture

**One build; images referenced by absolute external URL; two main-site deploy targets + one assets repo.**

- `baseUrl` = `raccolta-gare-fisica.pages.dev` (Cloudflare is primary; the gh-pages mirror serves the same build, its canonical URLs pointing at the primary -- correct for a mirror). Internal links are relative and `baseUrl`-agnostic, so one build serves both hosts.
- **Image assets repo** `gborghi/olifis-assets`: holds `_attachments/**` (508 MB, 7,724 files -- within GitHub's ~1 GB soft repo limit). Published via **GitHub Pages** -> `https://gborghi.github.io/olifis-assets/_attachments/...` (Fastly-CDN-backed, cached, free, no card). Optional later overlay: jsDelivr (`cdn.jsdelivr.net/gh/gborghi/olifis-assets@<sha>/...`) for a second global CDN -- not required for v1.
- **Build rewrite:** every `<img src="...(_attachments)/...">` in the built HTML is rewritten to the absolute asset base `https://gborghi.github.io/olifis-assets/_attachments/...`. `_attachments/` is then EXCLUDED from both main-site deploys -> ~2,600 files each.
- **Cloudflare Pages** project `raccolta-gare-fisica`, direct-upload:
  `npx wrangler pages deploy public --project-name raccolta-gare-fisica --branch main`.
- **GitHub Pages mirror**: existing worktree push to `origin/gh-pages`, same lean `public/` (images external).

Every main-site page loads figures from the external asset origin; the asset repo is the single source of served images. Originals are preserved (in the asset repo + the Dropbox vault; nothing deleted).

## Components

1. **Asset base config.** A single constant `ASSET_BASE = "https://gborghi.github.io/olifis-assets"` (empty string = local/relative, for `npx quartz build --serve` dev). Read from an env var (`RGF_ASSET_BASE`) so dev builds keep relative `_attachments/` paths and only the deploy build rewrites to the external URL.

2. **Assets repo** `gborghi/olifis-assets`.
   - Structure: `_attachments/**` at the repo root (mirrors the site path), plus a `.nojekyll` file (so `_`-prefixed dirs are served) and an `index.html` stub.
   - GitHub Pages enabled (deploy from `main` or a `gh-pages` branch). Served at `gborghi.github.io/olifis-assets/`.
   - Populated + updated by a sync script (component 4).

3. **Build img-src rewrite** (post-build step in the pipeline). Rewrite `src="<any-prefix>_attachments/<path>"` -> `src="${ASSET_BASE}/_attachments/<path>"` across `public/**/*.html`. Guard: only when `RGF_ASSET_BASE` is set (deploy build), skipped for local dev. Also rewrite any `srcset`/`<a href>` to the same figures if present. Then delete `public/_attachments/` from the deploy tree.

4. **Assets sync script** `scripts/sync-assets-repo.mjs` (or documented git commands): mirror the freshly-built `public/_attachments/**` (before it is stripped) into a checkout/worktree of `gborghi/olifis-assets`, commit only changed/new files, push. Incremental on later runs (rsync-like: add new figures, keep existing). First run pushes all 508 MB; subsequent runs push deltas only. Uses a git worktree OUTSIDE Dropbox (scratchpad), same pattern as the site's gh-pages deploy.

5. **CF tooling + deploy artifacts** (from Physics):
   - Add `wrangler` devDependency; `npx wrangler login` once per machine (USER, interactive). Create the Pages project `raccolta-gare-fisica` (auto on first deploy, or dashboard).
   - Post-build emit `public/_headers` (for each of `js css woff2 svg png jpg jpeg webp avif`: `"/*.<ext>\n  Cache-Control: public, max-age=604800, immutable"`).
   - Post-build emit `public/robots.txt`: `User-agent: *` / `Allow: /` / `Sitemap: https://raccolta-gare-fisica.pages.dev/sitemap.xml`.

6. **Deploy flow** (one build -> three pushes):
   - `node scripts/sync-assets-repo.mjs` -> push `_attachments` to `gborghi/olifis-assets` (before stripping).
   - rewrite img-src + strip `public/_attachments/`.
   - **Cloudflare**: `npx wrangler pages deploy public --project-name raccolta-gare-fisica --branch main`.
   - **gh-pages mirror**: worktree push of the same lean `public/` -> `origin/gh-pages` (existing pattern).

7. **baseUrl.** Set `quartz.config.yaml` `baseUrl: raccolta-gare-fisica.pages.dev`. Verify the 404-redirect (`404.tsx`, prefix captured from `location.pathname` -> baseUrl-agnostic), cerca/tag relative hrefs, and the search-prefix computation (relative depth from `document.body.dataset.slug`) all still resolve at the site root.

## Caveats (surfaced)

- **GitHub Pages soft limits** on the assets repo: ~1 GB repo (508 MB -- fine), 100 GB/month bandwidth soft (a didactic archive is far below). If ever a concern, add jsDelivr in front (component 2 note) -- still free, no card.
- **Cross-origin images**: `<img>` from a different origin needs no CORS (images load cross-origin freely). Direct image URLs remain shareable/hotlinkable (acceptable for an educational archive; same as today).
- **Two image copies to keep in sync**: the asset repo + the Dropbox vault. The sync script (component 4) is the single writer to the asset repo; the vault stays the source of truth.
- No Cloudflare R2, no payment card, no Pages Functions, no per-request ceiling.

## Testing / acceptance

- **CF live smoke** (Playwright, against `raccolta-gare-fisica.pages.dev`): pages render; figures load from `gborghi.github.io/olifis-assets/_attachments/...` (200); homepage/concept/reader/cerca/tag/404/graph behave as in the gh-pages audit; CF deploy file count < 20,000 (expect ~2,600); zero `/_attachments/` requests resolve to the main origin (all go external).
- **gh-pages mirror**: same lean build serves, figures load from the external asset origin.
- **Assets repo**: object count == local `_attachments` count; a random key sample returns 200 with `image/png` from `gborghi.github.io/olifis-assets/...`.
- **Local dev** (`RGF_ASSET_BASE` unset): figures still load from relative `_attachments/` (rewrite skipped), so `npx quartz build --serve` keeps working.

## Out of scope (separate spec)

- **Spec 2 -- TikZ figure pipeline**: replicate Physics's `tools/render-circuits.mjs` (build-time circuitikz -> SVG) + TikZJax client-side for other ` ```tikz ` blocks, then AI-author + fidelity-verify ` ```tikz ` blocks for the ~49% clean-line-art figures (~3,800 candidates), gradually. Originals kept as fallback. A TikZ-reproduced figure becomes inline SVG in the atom -> also removes it from the asset repo.
