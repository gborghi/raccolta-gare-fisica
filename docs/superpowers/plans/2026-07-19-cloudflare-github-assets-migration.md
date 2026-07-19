# Cloudflare Pages Migration + GitHub Image-Offload Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the site to Cloudflare Pages (wrangler direct-upload), keep GitHub Pages as a mirror, and serve the ~7,724 question figures from a separate public GitHub repo (`gborghi/olifis-assets`) so both main-site deploys are ~2,600 files.

**Architecture:** One build, `baseUrl = raccolta-gare-fisica.pages.dev`. A post-build step rewrites every relative `<img src="…/_attachments/…">` to the absolute asset origin `https://gborghi.github.io/olifis-assets/_attachments/…` and strips `public/_attachments/` from the deploy tree. Images are pushed to the assets repo separately. Deploy targets: Cloudflare Pages (primary) + `gh-pages` (mirror), both lean.

**Tech Stack:** Node ESM post-build scripts, `wrangler` (devDependency, OAuth already logged in as gio.borghi@gmail.com, account `88534a293fdf2c50b43a2fecdb0b59ed`), GitHub Pages for the assets repo, existing Quartz build.

## Global Constraints

- **Asset origin (exact):** `https://gborghi.github.io/olifis-assets` (no trailing slash). Figures resolve at `<origin>/_attachments/<path>`.
- **Dev-safe:** the asset-URL rewrite runs ONLY when `RGF_ASSET_BASE` is set (deploy build); unset (local `npx quartz build --serve`) keeps relative `_attachments/` paths intact.
- **Two lean deploys, one source build:** the CF deploy and the gh-pages mirror serve the SAME rewritten+stripped `public/` (both ~2,600 files). The assets repo is the single served image source.
- **CF project name:** `raccolta-gare-fisica`. **CF baseUrl:** `raccolta-gare-fisica.pages.dev`.
- **Preserve originals:** `_attachments/` stays in the Dropbox vault + is copied into the assets repo; nothing is deleted from source.
- ASCII-only in note `.md` bodies + `.tex` (unchanged project rule). `py -3` not `python`.
- Keep the existing Phase-7 build pipeline (preprocess -> patches -> rebuild-forks -> build -> make-search-index -> shrink -> gates) intact; these tasks ADD post-build steps + change the deploy target.

---

## Task 1: Asset-URL rewrite script

**Files:**
- Create: `scripts/rewrite-asset-urls.mjs`
- Test: `test/rewrite-asset-urls.test.mjs`

**Interfaces:**
- Produces: given `RGF_ASSET_BASE` set, rewrites `public/**/*.html` `src="<rel>_attachments/<path>"` -> `src="${RGF_ASSET_BASE}/_attachments/<path>"`, then removes `public/_attachments/`. No-op if `RGF_ASSET_BASE` unset. Idempotent.

- [ ] **Step 1: Write the failing test** `test/rewrite-asset-urls.test.mjs`:

```js
import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import os from "node:os"
import { execFileSync } from "node:child_process"

test("rewrites relative _attachments img src to the asset origin + strips dir", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "rw-"))
  const pub = path.join(dir, "public")
  fs.mkdirSync(path.join(pub, "prove"), { recursive: true })
  fs.mkdirSync(path.join(pub, "_attachments", "x"), { recursive: true })
  fs.writeFileSync(path.join(pub, "_attachments", "x", "a.png"), "PNG")
  fs.writeFileSync(
    path.join(pub, "prove", "p.html"),
    `<img src="../_attachments/x/a.png" alt="f"><img src="../../_attachments/y/b.png">`,
  )
  execFileSync("node", ["scripts/rewrite-asset-urls.mjs"], {
    env: { ...process.env, RGF_ASSET_BASE: "https://gborghi.github.io/olifis-assets", RGF_PUBLIC: pub },
  })
  const html = fs.readFileSync(path.join(pub, "prove", "p.html"), "utf8")
  assert.match(html, /src="https:\/\/gborghi\.github\.io\/olifis-assets\/_attachments\/x\/a\.png"/)
  assert.match(html, /src="https:\/\/gborghi\.github\.io\/olifis-assets\/_attachments\/y\/b\.png"/)
  assert.ok(!fs.existsSync(path.join(pub, "_attachments")), "_attachments removed from deploy tree")
})

test("no-op when RGF_ASSET_BASE unset", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "rw2-"))
  const pub = path.join(dir, "public")
  fs.mkdirSync(path.join(pub, "_attachments"), { recursive: true })
  fs.writeFileSync(path.join(pub, "p.html"), `<img src="_attachments/z.png">`)
  execFileSync("node", ["scripts/rewrite-asset-urls.mjs"], { env: { ...process.env, RGF_ASSET_BASE: "", RGF_PUBLIC: pub } })
  assert.match(fs.readFileSync(path.join(pub, "p.html"), "utf8"), /src="_attachments\/z\.png"/)
  assert.ok(fs.existsSync(path.join(pub, "_attachments")), "dir kept in dev mode")
})
```

- [ ] **Step 2: Run it, verify it fails** — `node --test test/rewrite-asset-urls.test.mjs` -> FAIL (script missing).

- [ ] **Step 3: Write `scripts/rewrite-asset-urls.mjs`:**

```js
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
```

- [ ] **Step 4: Run tests -> PASS.** `node --test test/rewrite-asset-urls.test.mjs`.
- [ ] **Step 5: Commit.** `feat(cf): post-build rewrite figure <img> to external asset origin + strip _attachments`.

---

## Task 2: Emit Cloudflare `_headers` + `robots.txt`

**Files:**
- Create: `scripts/emit-cf-files.mjs`
- Test: `test/emit-cf-files.test.mjs`

**Interfaces:**
- Produces: `public/_headers` (immutable-asset caching, Physics pattern) + `public/robots.txt` (allow-all + pages.dev sitemap).

- [ ] **Step 1: Write the failing test** `test/emit-cf-files.test.mjs`:

```js
import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import os from "node:os"
import { execFileSync } from "node:child_process"

test("emits _headers with immutable caching + robots.txt with sitemap", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "cf-"))
  const pub = path.join(dir, "public")
  fs.mkdirSync(pub, { recursive: true })
  execFileSync("node", ["scripts/emit-cf-files.mjs"], { env: { ...process.env, RGF_PUBLIC: pub } })
  const headers = fs.readFileSync(path.join(pub, "_headers"), "utf8")
  assert.match(headers, /\/\*\.png\r?\n\s+Cache-Control: public, max-age=604800, immutable/)
  assert.match(headers, /\/\*\.woff2/)
  const robots = fs.readFileSync(path.join(pub, "robots.txt"), "utf8")
  assert.match(robots, /User-agent: \*/)
  assert.match(robots, /Sitemap: https:\/\/raccolta-gare-fisica\.pages\.dev\/sitemap\.xml/)
})
```

- [ ] **Step 2: Run it -> FAIL.**
- [ ] **Step 3: Write `scripts/emit-cf-files.mjs`:**

```js
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
```

- [ ] **Step 4: Run tests -> PASS.**
- [ ] **Step 5: Commit.** `feat(cf): emit _headers + robots.txt for Cloudflare Pages`.

---

## Task 3: baseUrl + wrangler devDependency

**Files:**
- Modify: `quartz.config.yaml:11`
- Modify: `package.json`

- [ ] **Step 1:** Set `quartz.config.yaml:11` `baseUrl: raccolta-gare-fisica.pages.dev`.
- [ ] **Step 2:** Add `wrangler` to `package.json` devDependencies (version `^4.112.0`, matching the logged-in CLI): `npm install --save-dev wrangler@^4.112.0` (or hand-edit + `npm install`). Confirm `npx wrangler whoami` still shows `gio.borghi@gmail.com`.
- [ ] **Step 3:** Sanity: `node --check` is N/A for yaml; run `npm run check` (tsc+prettier) if it covers config, else skip. Verify the yaml parses (`node -e "require('yaml').parse(require('fs').readFileSync('quartz.config.yaml','utf8'))"`).
- [ ] **Step 4: Commit.** `chore(cf): baseUrl -> raccolta-gare-fisica.pages.dev + wrangler devDep`.

---

## Task 4: Assets-repo sync script

**Files:**
- Create: `scripts/sync-assets-repo.mjs`

**Interfaces:**
- Consumes: built `public/_attachments/**` (BEFORE Task 1 strips it) + a clone/worktree of `git@github.com:gborghi/olifis-assets` (or https).
- Produces: `_attachments/**` + `.nojekyll` + `index.html` pushed to `gborghi/olifis-assets` (branch `main`, GitHub Pages source).

- [ ] **Step 1: Write `scripts/sync-assets-repo.mjs`** (mirror + commit + push; scratchpad worktree outside Dropbox):

```js
// Push public/_attachments/** to the gborghi/olifis-assets repo (GitHub Pages).
// Mirrors the site's gh-pages deploy pattern: a throwaway clone outside Dropbox,
// rsync-like copy, commit only on change, push. First run pushes ~508MB.
import { execFileSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"

const PUB = process.env.RGF_PUBLIC || "public"
const SRC = path.join(PUB, "_attachments")
const REPO = process.env.RGF_ASSETS_REPO || "https://github.com/gborghi/olifis-assets.git"
const WORK = process.env.RGF_ASSETS_WORKDIR // REQUIRED: a path OUTSIDE Dropbox (scratchpad)
if (!fs.existsSync(SRC)) { console.error("[sync-assets] no", SRC, "-- run before rewrite-asset-urls strips it"); process.exit(1) }
if (!WORK) { console.error("[sync-assets] set RGF_ASSETS_WORKDIR to a path outside Dropbox"); process.exit(1) }
const git = (args, cwd) => execFileSync("git", args, { cwd, stdio: "inherit" })

if (!fs.existsSync(path.join(WORK, ".git"))) {
  fs.rmSync(WORK, { recursive: true, force: true })
  git(["clone", "--depth", "1", REPO, WORK])
}
git(["-C", WORK, "pull", "--ff-only"], undefined)
// mirror _attachments (delete stale, copy fresh)
fs.rmSync(path.join(WORK, "_attachments"), { recursive: true, force: true })
fs.cpSync(SRC, path.join(WORK, "_attachments"), { recursive: true })
fs.writeFileSync(path.join(WORK, ".nojekyll"), "")
fs.writeFileSync(path.join(WORK, "index.html"), "<!doctype html><title>olifis-assets</title><p>Image assets for raccolta-gare-fisica.</p>")
git(["-C", WORK, "add", "-A"], undefined)
try { git(["-C", WORK, "commit", "-q", "-m", "sync figures from raccolta-gare-fisica build"], undefined) }
catch { console.log("[sync-assets] nothing to commit"); process.exit(0) }
git(["-C", WORK, "push", "origin", "HEAD:main"], undefined)
console.log("[sync-assets] pushed _attachments to olifis-assets")
```

- [ ] **Step 2:** `node --check scripts/sync-assets-repo.mjs` -> exit 0.
- [ ] **Step 3: Commit.** `feat(cf): sync-assets-repo script (push figures to olifis-assets)`.

---

## Task 5: Enable GitHub Pages on the assets repo + first image push

**Files:** none in-repo (external setup + one script run).

- [ ] **Step 1: Enable GitHub Pages** on `gborghi/olifis-assets` from branch `main` / root. Via `gh` CLI:
  `gh api -X POST repos/gborghi/olifis-assets/pages -f "source[branch]=main" -f "source[path]=/"` (or the repo Settings -> Pages UI). It serves at `https://gborghi.github.io/olifis-assets/`.
- [ ] **Step 2: First image push.** After a full build produces `public/_attachments/`, run:
  `RGF_PUBLIC=public RGF_ASSETS_WORKDIR="$SCRATCH/olifis-assets-wt" node scripts/sync-assets-repo.mjs` (pushes ~508 MB; may take minutes).
- [ ] **Step 3: Verify serving.** `curl -sI https://gborghi.github.io/olifis-assets/_attachments/1994e/1994e_p1_f1.png` -> `200` + `content-type: image/png` (allow a couple minutes for Pages to build).

---

## Task 6: Full build + dual deploy + live audit (controller gate)

**Files:** none (orchestration). This runs the whole pipeline with the new steps.

**Deploy order (from `site-fisica/`, Dropbox stopped for preprocess):**

- [ ] **Step 1: Build** (existing Phase-7 pipeline): install-plugins -> patch forks -> rebuild-forks -> `RGF... node preprocess.mjs` -> `npx quartz build` -> copy staticgen -> `node scripts/make-search-index.mjs` -> `node shrink_build.mjs` -> gates. Produces full `public/` WITH `_attachments/`. baseUrl now pages.dev.
- [ ] **Step 2: Push images** (before stripping): `RGF_ASSETS_WORKDIR=… node scripts/sync-assets-repo.mjs`.
- [ ] **Step 3: Rewrite + strip + CF files:**
  `RGF_ASSET_BASE="https://gborghi.github.io/olifis-assets" node scripts/rewrite-asset-urls.mjs && node scripts/emit-cf-files.mjs`.
- [ ] **Step 4: File-count gate:** `find public -type f | wc -l` -> expect ~2,600, MUST be < 20,000; `find public -name '_attachments' -type d` -> empty.
- [ ] **Step 5: Deploy Cloudflare Pages:** `npx wrangler pages deploy public --project-name raccolta-gare-fisica --branch main`. Records a `*.pages.dev` URL.
- [ ] **Step 6: Deploy gh-pages mirror:** existing worktree push of the same lean `public/` -> `origin/gh-pages`.
- [ ] **Step 7: Live audit (Playwright)** against `https://raccolta-gare-fisica.pages.dev`: figures load from `gborghi.github.io/olifis-assets/...` (200); reader/search/cerca/tag/404/graph behave as the prior gh-pages audit; NO `/_attachments/` requests hit the main origin; file count < 20k. Repeat a spot-check on the gh-pages mirror.
- [ ] **Step 8:** Update the deploy runbook in `raccolte gare di Fisica/.remember/remember.md` (authoritative deploy rule) with the new CF + assets-repo flow.

---

## Self-review (spec coverage)

- CF Pages migration (wrangler direct-upload, _headers, robots.txt, baseUrl): Tasks 2,3,6. Covered.
- GitHub image offload (public repo, Pages, img-src rewrite, strip, sync): Tasks 1,4,5,6. Covered.
- gh-pages mirror kept: Task 6 Step 6. Covered.
- Dev-safe (relative in local dev): Task 1 (RGF_ASSET_BASE guard). Covered.
- Originals preserved: assets repo + vault; nothing deleted. Covered.
- Out of scope: TikZ (Spec 2). Correct.
