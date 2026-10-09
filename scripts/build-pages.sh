#!/usr/bin/env bash
# THE single build of raccolta-gare-fisica. Its public/ is published to gh-pages
# (GitHub Pages = reference); Cloudflare Pages mirrors gh-pages byte-for-byte
# (site-fisica CI -> scripts/emit-cf-files.mjs mirror mode). Run from a checkout of
# gborghi/raccolta-gare-fisica (content/ tracked in git -> page dates = git dates).
#   scripts/build-pages.sh            # build into public/
#   PUBLISH=1 scripts/build-pages.sh  # + push figures to olifis-assets and public/ to gh-pages
set -euo pipefail
cd "$(dirname "$0")/.."
export NODE_OPTIONS="${NODE_OPTIONS:---max-old-space-size=12288}"
CONC="${QUARTZ_CONCURRENCY:-}"            # set 1 on machines with <16 GB RAM

node scripts/inline-tikz.mjs               # tikz-svg/*.svg -> inline figures (same rule as preprocess)
node scripts/fix-content-links.mjs         # figure paths, concept links, PDF -> Drive, ...
node scripts/fix-comp-labels.mjs           # full competition names in prova titles ("Svizze" -> "Svizzera")
[ -d .quartz/plugins ] || npx quartz plugin restore
node scripts/patch-search-fork.mjs
node scripts/patch-graph-fork.mjs
node scripts/patch-tag-links-fork.mjs
node scripts/rebuild-forks.mjs
npx quartz build ${CONC:+--concurrency $CONC}

mkdir -p public/static
cp -r staticgen/cl public/static/
cp staticgen/quesiti.json staticgen/quesiti_kw.json staticgen/tagmap.json public/static/
node scripts/make-search-index.mjs
node shrink_build.mjs
: > public/.nojekyll
node scripts/fix-404.mjs

if [ "${PUBLISH:-0}" = 1 ]; then
  # figures -> olifis-assets (ADD/UPDATE only, never deletes), BEFORE they are stripped
  W="${RGF_ASSETS_WORKDIR:-$(mktemp -d)/olifis-assets}"
  [ -d "$W/.git" ] || git clone --depth 1 https://github.com/gborghi/olifis-assets.git "$W"
  git -C "$W" pull --ff-only
  # fresh clone: the workflow's "git identity" step only configured the main checkout
  git -C "$W" config user.name "github-actions[bot]"
  git -C "$W" config user.email "41898282+github-actions[bot]@users.noreply.github.com"
  mkdir -p "$W/_attachments" && cp -a public/_attachments/. "$W/_attachments/"
  # prove figures co-located in content/prove/_attachments: same olifis URL after rewrite-asset-urls;
  # never overwrite a content/_attachments file of the same name (cp -n)
  [ -d public/prove/_attachments ] && cp -an public/prove/_attachments/. "$W/_attachments/"
  git -C "$W" add -A _attachments
  git -C "$W" diff --cached --quiet || { git -C "$W" commit -qm "sync figures from raccolta-gare-fisica build"; git -C "$W" push origin HEAD:main; }
fi
RGF_ASSET_BASE="https://gborghi.github.io/olifis-assets" node scripts/rewrite-asset-urls.mjs
CF_MIRROR=0 node scripts/emit-cf-files.mjs   # _headers + robots.txt
HOST=github node scripts/host-urls.mjs       # sitemap/robots/RSS -> GitHub base URL (mirror flips them back)
# Quartz emits public/CNAME from baseUrl (pages.dev): never publish it, or GitHub Pages
# redirects gborghi.github.io/raccolta-gare-fisica/ to pages.dev (published URLs never change).
rm -f public/CNAME
test "$(find public -type f | wc -l)" -lt 20000
test -z "$(find public -type f -size +25M)"

if [ "${PUBLISH:-0}" = 1 ]; then
  G="$(mktemp -d)/gh-pages"
  git fetch origin gh-pages
  git worktree add "$G" origin/gh-pages --detach
  git -C "$G" rm -rq --cached . ; find "$G" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
  cp -a public/. "$G"/
  git -C "$G" add -A
  git -C "$G" commit -qm "Deploy $(git rev-parse --short HEAD) (single build: GitHub Pages + Cloudflare mirror)"
  git -C "$G" push origin HEAD:gh-pages       # fast-forward only, never --force
  git worktree remove --force "$G"
  echo "gh-pages pushed; now run the site-fisica 'Deploy' workflow (Cloudflare mirror)."
fi
