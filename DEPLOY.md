# Deploy runbook -- raccolta-gare-fisica

Primary host: **Cloudflare Pages** -> https://raccolta-gare-fisica.pages.dev/ (project `raccolta-gare-fisica`, wrangler direct-upload, NOT git-integrated).
Mirror: **GitHub Pages** -> `gborghi.github.io/raccolta-gare-fisica` (branch `gh-pages`).
Images: **`gborghi/olifis-assets`** (GitHub Pages) -> `gborghi.github.io/olifis-assets/_attachments/...` (offloaded so the main deploys stay ~2,600 files, under the CF 20k cap).

`baseUrl` in `quartz.config.yaml` = `raccolta-gare-fisica.pages.dev`. Auth: `npx wrangler login` (once, gio.borghi@gmail.com) + `gh auth`/git creds for the repos.

## Full deploy (from `site-fisica/`)

```bash
# 0. STOP Dropbox (preprocess/quartz-build rm content/ + public/ -> Dropbox EBUSY locks otherwise).
#    (PowerShell) Get-Process Dropbox | Stop-Process -Force ; then clear content/ + public/ if a prior run left them.

# 1. Regenerate content (ONLY if the vault changed; deterministic + baseUrl-independent, so skippable if content/ is current):
NODE_OPTIONS=--max-old-space-size=12288 node preprocess.mjs

# 2. Fork prep (patched plugin forks; forks live in gitignored .quartz/, patches must be recompiled into dist/):
npm run install-plugins            # only if .quartz/ forks are missing
node scripts/patch-search-fork.mjs
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
