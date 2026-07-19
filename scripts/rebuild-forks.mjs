// Post-patch: recompile the Quartz plugin forks whose SOURCE was edited by the
// scripts/patch-*-fork.mjs scripts.
//
// CRITICAL build-integration fact (found at the Phase-7 build gate): every fork
// package.json declares `"main": "./dist/index.js"`, so `npx quartz build`
// imports the fork's PRE-COMPILED `dist/`, NOT its `src/`. Patching the
// `src/*.inline.ts` / `src/**/*.tsx` therefore has ZERO effect on the build
// unless the fork is recompiled (`tsup`, wired as each fork's `npm run build`)
// so `dist/` picks up the patched source. Run order in the build pipeline:
//   npm run install-plugins        # restore pristine forks
//   node scripts/patch-search-fork.mjs
//   node scripts/patch-graph-fork.mjs
//   node scripts/patch-tag-links-fork.mjs
//   node scripts/rebuild-forks.mjs   # <-- THIS: recompile patched forks -> dist
//   npx quartz build
//
// Idempotent: recompiling an already-patched fork just regenerates identical
// dist. tsup resolves from the repo-root node_modules (forks have no own bin).
import { execFileSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"

// The forks touched by the three patch scripts (search=search-fork,
// graph=graph-fork + tag-node repoint, the rest = tag-links-fork's 4 render
// targets). Keep in sync with the patch scripts' target lists.
const FORKS = [
  "search",
  "graph",
  "tag-list",
  "note-properties",
  "folder-page",
  "obsidian-flavored-markdown",
]

const ROOT = process.env.RGF_BUILD || "."
const PLUGINS = path.join(ROOT, ".quartz", "plugins")

let failed = 0
for (const fork of FORKS) {
  const dir = path.join(PLUGINS, fork)
  if (!fs.existsSync(path.join(dir, "package.json"))) {
    console.error(`[rebuild-forks] MISSING fork: ${dir} -- run install-plugins first`)
    failed++
    continue
  }
  try {
    // `npm run build` == tsup per each fork's package.json; inherit stdio off,
    // capture only on failure.
    execFileSync("npm", ["run", "build"], { cwd: dir, stdio: "pipe", shell: true })
    console.log(`[rebuild-forks] recompiled ${fork}`)
  } catch (e) {
    console.error(`[rebuild-forks] FAILED ${fork}: ${e.message}`)
    if (e.stdout) console.error(String(e.stdout).slice(-800))
    failed++
  }
}
if (failed) {
  console.error(`[rebuild-forks] ${failed} fork(s) failed -- build would ship UNPATCHED forks; aborting.`)
  process.exit(1)
}
console.log(`[rebuild-forks] all ${FORKS.length} patched forks recompiled to dist/`)
