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
