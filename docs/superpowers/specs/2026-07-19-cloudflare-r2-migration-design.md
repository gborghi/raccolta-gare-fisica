# Cloudflare Pages + R2 Image-Offload Migration -- Design

**Status:** design (awaiting user review) -- 2026-07-19

## Goal

Migrate the published site from GitHub Pages to **Cloudflare Pages** (direct-upload via `wrangler`, the same mechanism proven in `SubjectBrain/Physics`), **offload the ~7,724 image assets to Cloudflare R2** served same-origin through a Pages Function, and **keep GitHub Pages as a mirror**.

## Context

- Site currently on GitHub Pages at `gborghi.github.io/raccolta-gare-fisica`, **10,378 files** (the SPA-per-prova collapse already brought it under Cloudflare Pages' 20,000-file cap).
- `public/_attachments/` = **7,724 PNGs, 508 MB** -- question figures. They dominate the file count (2,600 non-image files otherwise).
- The user has a Cloudflare account, **free subdomains only** (no custom domain). R2 requires a payment method on file (accepted; not charged within free limits: 10 GB storage, 10 M Class-B reads/mo, unlimited egress).
- Reference implementation: `SubjectBrain/Physics/quartz-site` -- CF Pages via `wrangler pages deploy`, `_headers` immutable-asset caching, `robots.txt`, Cloudflare Web Analytics, NOT git-integrated (local build hydrates the Dropbox vault + runs preprocess). Physics does NOT use R2 (its corpus fits without it); we add R2 for asset separation + headroom.

## Architecture

**One build, two deploy targets.** `baseUrl` = `raccolta-gare-fisica.pages.dev` (Cloudflare is primary; the gh-pages mirror serves the same build and its canonical URLs point at the primary, which is correct SEO for a mirror). Internal links are relative and `baseUrl`-agnostic, so a single build serves both hosts. The ONLY per-target difference is image handling.

- **Cloudflare Pages** project `raccolta-gare-fisica`, direct-upload:
  `npx wrangler pages deploy public --project-name raccolta-gare-fisica --branch main`.
  Deploys `public/` **without** `_attachments/` (~2,600 files) plus a `functions/` dir.
- **Cloudflare R2** bucket `olifis-assets` holds `_attachments/**` (508 MB « 10 GB free). Bound to the Pages project as the binding `ASSETS`.
- **Pages Function** `functions/_attachments/[[path]].js` serves objects from the `ASSETS` R2 binding, **same-origin** at `/_attachments/*`, with a long immutable `Cache-Control`. This avoids the `*.r2.dev` public-URL rate limits (r2.dev is dev-only, throttled) and needs no CORS or `<img>`-src rewrite -- the markup keeps `src="/_attachments/..."` and the Function catches the path (static assets take precedence; `_attachments/` is absent from the static deploy, so requests fall through to the Function).
- **GitHub Pages mirror** keeps the FULL `public/` (with `_attachments/` inline) exactly as today (worktree push to `gh-pages`). Images load inline there; no R2 involved.

## Components

1. **Tooling.** Add `wrangler` as a devDependency in `site-fisica/package.json`. `npx wrangler login` once per machine (interactive -- USER runs it). Create the Pages project `raccolta-gare-fisica` (first deploy auto-creates it, or via dashboard).

2. **R2 bucket + binding.** Create bucket `olifis-assets` (`npx wrangler r2 bucket create olifis-assets`, needs the card-on-file enabled). Bind it to the Pages project as `ASSETS` -- via the Pages project settings (dashboard: Settings -> Functions -> R2 bindings) or `wrangler.toml` `[[r2_buckets]] binding = "ASSETS", bucket_name = "olifis-assets"`.

3. **Pages Function** `functions/_attachments/[[path]].js`:
   ```js
   export async function onRequestGet({ params, env }) {
     const key = "_attachments/" + (Array.isArray(params.path) ? params.path.join("/") : params.path)
     const obj = await env.ASSETS.get(key)
     if (!obj) return new Response("Not found", { status: 404 })
     const h = new Headers()
     obj.writeHttpMetadata(h)               // content-type from R2 object metadata
     h.set("etag", obj.httpEtag)
     h.set("Cache-Control", "public, max-age=604800, immutable")
     return new Response(obj.body, { headers: h })
   }
   ```
   Upload MUST set each object's content-type (`image/png`) so `writeHttpMetadata` returns it (the upload step handles this).

4. **R2 upload script** `scripts/r2-sync-assets.mjs` (or documented rclone command). Bulk-upload `public/_attachments/**` -> R2 bucket `olifis-assets` with `Content-Type: image/png`, then incremental (only new/changed) on later runs. Options: `rclone` (S3-compatible, fast bulk -- configure an R2 S3 endpoint + token) OR a `wrangler r2 object put` loop (slower for 7,724 objects). rclone recommended for the initial 508 MB bulk. The bucket IS the preserved original set (nothing deleted; `_attachments/` also stays in the vault + gh-pages).

5. **Build-pipeline changes** (post-build, after the existing Phase-7 pipeline):
   - Emit `public/_headers` (Physics pattern): for each of `js css woff2 svg png jpg jpeg webp avif` a block `"/*.<ext>\n  Cache-Control: public, max-age=604800, immutable"`.
   - Emit `public/robots.txt`: `User-agent: *` / `Allow: /` / `Sitemap: https://raccolta-gare-fisica.pages.dev/sitemap.xml`.
   - Add `functions/_attachments/[[path]].js` to the repo (committed; wrangler uploads `functions/` with the deploy).
   - For the CF deploy ONLY: produce a lean tree = `public/` minus `_attachments/` (e.g. copy to `public-cf/` excluding `_attachments`, or `wrangler pages deploy` a path that excludes it). gh-pages keeps full `public/`.

6. **Deploy flow** (two targets, from the single build):
   - **gh-pages** (mirror): existing worktree push of full `public/` -> `origin/gh-pages` (unchanged).
   - **Cloudflare**: `node scripts/r2-sync-assets.mjs` (upload/refresh `_attachments` to R2) -> `npx wrangler pages deploy <lean-public> --project-name raccolta-gare-fisica --branch main`.

7. **baseUrl.** Set `quartz.config.yaml` `baseUrl: raccolta-gare-fisica.pages.dev`. Rebuild. Verify the 404-redirect (`quartz/components/pages/404.tsx`, prefix captured from `location.pathname` -> baseUrl-agnostic), cerca/tag relative hrefs, and search prefix computation all still resolve at the root path (they use relative depth from `document.body.dataset.slug`, so they do).

## Caveats (surfaced to the user)

- **R2 needs a card on file** to enable (accepted). Free within limits; unlimited egress.
- **Pages Functions free tier = 100,000 requests/day.** Each image load = 1 Function invocation. Fine for a didactic archive; a hard ceiling only under high sustained traffic. (R2 Class-B reads 10 M/mo free are the other meter.) If ever exceeded, the fallback is a custom domain on R2 (needs a domain on CF) or serving popular images statically.
- `*.r2.dev` is deliberately NOT used (throttled). Same-origin Function is the chosen path.
- No build-time TeX Live needed for THIS spec (TikZ is Spec 2); the Physics `render-circuits.mjs` step is out of scope here.

## Testing / acceptance

- **CF live smoke** (Playwright, against `raccolta-gare-fisica.pages.dev`): images load (`/_attachments/...` -> 200 via the Function from R2, correct content-type); homepage/concept/reader/cerca/tag/404/graph all behave as in the gh-pages audit; CF deploy file count < 20,000 (expect ~2,600).
- **gh-pages mirror** still serves images inline (unchanged).
- **R2**: bucket object count == local `_attachments` count; a random sample of keys returns 200 with `image/png`.

## Out of scope (separate spec)

- **Spec 2 -- TikZ figure pipeline**: replicate Physics's `tools/render-circuits.mjs` (build-time circuitikz -> SVG) + TikZJax client-side for other ` ```tikz ` blocks, then AI-author + fidelity-verify ` ```tikz ` blocks for the ~49% clean-line-art figures (~3,800 candidates), gradually. Originals kept as fallback.
