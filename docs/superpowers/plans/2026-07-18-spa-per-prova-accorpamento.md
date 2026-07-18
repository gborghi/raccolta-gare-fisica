# SPA per-prova accorpamento -- Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Collapse the ~16,888 per-atom `prove/` pages into ~1,490 per-prova single-page-application pages so the built site drops under Cloudflare Pages' 20,000-file cap, while every atom stays individually searchable, tagged, deep-linkable, and graph-visible -- with the on-site navigation experience unchanged.

**Architecture:** `preprocess.mjs` emits one `prove/<stem>.md` container per exam, each atom body concatenated behind an inline `<span class="atom-split" data-atom="qNN" ...>` marker inside a `<div class="atom-reader">` mount. A ported client script (`atomRouter.inline.ts`) partitions that page's DOM into atom sections and shows one at a time, driven by `location.hash`. Every atom href across the build (quesiti index, keyword index, paged-list JSON, wikilinks, search index, graph nodes) is repointed from `prove/<stem>__qNN` to the fragment `prove/<stem>#qNN`. A per-atom search index (desktop ~15 MB / mobile ~8 MB, tf-idf packed) and per-atom graph nodes are produced so the search bar and graph keep per-atom granularity.

**Tech Stack:** Node ESM (`preprocess.mjs`, post-build `.mjs` scripts), Quartz v5 community plugins in gitignored `.quartz/` (restored from `quartz.lock.json`), forked plugins `.quartz/plugins/{search,graph,content-index}`, TypeScript `*.inline.ts` client scripts, FlexSearch, `wrangler pages deploy` for Cloudflare.

## Global Constraints

- **Behavioral parity is a hard gate.** No user-visible change: search hits, `/cerca` filters, concept lists, graph nodes, wikilinks, popovers, breadcrumbs must behave and look exactly as today. The only permitted change is that an atom is served as a `prove/<stem>#qNN` section instead of its own page.
- **Search-index size budget:** desktop index ~15 MB (FILL it -- do not undershoot or recall degrades), mobile index ~8 MB. Both < 25 MiB (CF per-file cap).
- **Atom naming is frozen** in the vault: `<stem>__<atomId>.md` (typically `<stem>__q01`). Container stem = the same file without `__...`. `atomId` = the substring after `<stem>__`. Fragment URL = `prove/<stem>#<atomId>`.
- **Slugs fed to Quartz's search/graph path resolver must stay clean paths** (no `#`). Carry the fragment in a separate `frag` field; build the href as `slug + (frag ? "#" + frag : "")`.
- **`preprocess.mjs` runs LOCALLY**, not in CI: raise Node heap (`NODE_OPTIONS=--max-old-space-size=16384`), stop Dropbox first (content/ lock), then commit the regenerated `content/` + `quartz/static/` + `staticgen`.
- **ASCII only** in emitted note bodies and `.tex`; use LaTeX/HTML escapes for accents.
- **Do not run pipeline subagents concurrently with a Quartz build** (Dropbox I/O contention).
- **Single layout:** SPA is unconditional (GitHub Pages abandoned). No `SPA=1` gate -- the transform always runs. (English keeps a flag; physics does not need the classic fallback.)

---

## Scope note

This is a large migration touching several subsystems, but they all hinge on one shared invention -- the `prove/<stem>#<atomId>` fragment scheme -- so splitting into independent plans would create worse cross-plan coupling than phases. Kept as ONE plan with 7 phases; each phase ends in an independently testable, shippable-in-principle slice. Recommended execution: subagent-driven, review between phases.

## File map

**Modified**
- `preprocess.mjs` -- add per-prova grouping + container emission (skip per-atom page emit); repoint quesiti/kw/paged-list hrefs to fragments; emit per-atom search-index source + graph-node source; emit SPA `404.md`.
- `quartz/components/scripts/pagedList.inline.ts:170` -- stop stripping `#...` from the kw-index key.
- `.quartz/plugins/search/src/components/scripts/search.inline.ts:811` -- tiered fetch (desktop vs mobile index) + fragment-aware href.
- `.quartz/plugins/graph/src/components/scripts/graph.inline.ts` -- fragment-aware node href.
- `quartz.config.yaml` -- disable native `tag-page` plugin.
- `shrink_build.mjs` -- drop/adjust the `prove/index.html` stub (listing is small now); leave contentIndex handling to the new search-index script.

**Created**
- `quartz/components/scripts/atomRouter.inline.ts` -- ported+adapted DOM partition/reader.
- `quartz/components/AtomReader.tsx` (+ register) -- component that ships `atomRouter.inline.ts` and its CSS. (Or attach the script to an existing always-present component; see Task 2.1.)
- `scripts/make-search-index.mjs` -- post-build: build desktop per-atom `contentIndex.json` (tf-idf packed ~15 MB) from the preprocess source.
- `scripts/make-mobile-index.mjs` -- post-build: derive `contentIndexMobile.json` (~8 MB) from the desktop index (port of English's).
- `docs/superpowers/specs/2026-07-18-spa-per-prova-accorpamento-design.md` -- the approved spec (already written).

**Reference (read, do not modify)**
- English `SubjectBrain/English/quartz-eng-lit/preprocess.mjs:501-718,1498-1511` (emission, slugToFrag, 404), `quartz/components/scripts/atomRouter.inline.ts:1-381` (client), `scripts/make-mobile-index.mjs`, `preprocess.mjs:247,266` (`keywordCounts`, `topTfIdf`).

---

## Phase 0 -- Setup & safety net

### Task 0.1: Isolated worktree + baseline capture

**Files:**
- Create: (worktree) via `superpowers:using-git-worktrees`

- [ ] **Step 1: Create the worktree** (outside Dropbox, per build gotchas). Use the using-git-worktrees skill; branch `spa-per-prova`.

- [ ] **Step 2: Capture baseline counts** so parity is checkable later.

Run (from `site-fisica/`):
```bash
find content -type f | wc -l            # expect ~26,956
node -e "const q=require('./staticgen/quesiti.json');console.log('quesiti',q.length)"
```
Record the numbers in the phase notes. Expected: content ~26,956; quesiti ~16,888.

- [ ] **Step 3: Snapshot 5 reference atoms for parity checks.** Pick 5 atoms spanning nations/years, e.g. `1994e__q01`, and record their current URL `prove/1994e__q01/` and their tag membership (grep `staticgen/quesiti.json` for the href). These become the Phase 6 parity fixtures.

- [ ] **Step 4: Commit the plan + spec.**
```bash
git add docs/superpowers/plans docs/superpowers/specs
git commit -m "docs: SPA per-prova migration plan + spec"
```

---

## Phase 1 -- Per-prova container emission (preprocess)

Deliverable: `node preprocess.mjs` emits one `content/prove/<stem>.md` per exam containing all its atoms behind `atom-split` markers, and emits NO per-atom `prove/<stem>__qNN.md`. `/cerca` still works because we keep quesiti hrefs pointing at atoms for now (repointed in Phase 3).

### Task 1.1: Group prove atoms by stem; emit container pages

**Files:**
- Modify: `preprocess.mjs` main loop `358-447` (skip per-atom prove emit), and add a grouping helper + a container-emission block.

**Interfaces:**
- Produces: `content/prove/<stem>.md` with frontmatter `title`, `tipo: prova`, the prova's own tags; body = `<div class="atom-reader" data-prova="<stem>"></div>` then, per atom in numeric order, a block:
  ```
  <span class="atom-split" data-atom="<atomId>" data-title="<atom title>" data-tags="<tag1,tag2>"></span>

  <atom body markdown, incl. its qlang-switch/qlang-split blocks unchanged>
  ```
- Produces (in-memory, consumed by Phase 3/4/5): `atomFrag: Map<oldAtomHref, "prove/<stem>#<atomId>">` and `atomRecords: Array<{stem, atomId, title, tags, body, links}>`.
- `atomIdOf(stem, base)` -> `base.slice(stem.length + 2)` (strip `<stem>__`).

- [ ] **Step 1: Write the failing test.** Create `test/spa-emit.test.mjs`:
```js
import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"

const C = "content/prove"
test("one container page per stem, atoms as markers, no per-atom pages", () => {
  const stem = "1994e"
  const page = path.join(C, stem + ".md")
  assert.ok(fs.existsSync(page), "container page exists")
  const html = fs.readFileSync(page, "utf8")
  assert.match(html, /<div class="atom-reader" data-prova="1994e">/)
  const markers = [...html.matchAll(/<span class="atom-split" data-atom="/g)].length
  assert.ok(markers >= 5, "has atom markers, got " + markers)
  // no per-atom page emitted
  assert.ok(!fs.existsSync(path.join(C, stem + "__q01.md")), "no per-atom page")
  // atom body text is present (searchable/no-JS readable)
  assert.match(html, /data-atom="q01"/)
})
```

- [ ] **Step 2: Run it, verify it fails** (`node --test test/spa-emit.test.mjs`) with the container page missing. (Requires a prior `node preprocess.mjs` run; on first run it fails because emission isn't implemented.)

- [ ] **Step 3: Implement grouping + emission in `preprocess.mjs`.**

Before the main file loop (near line 354, after `noteFolder` is built), add a grouping pass:
```js
// --- SPA: group Prove atoms by stem so we emit ONE reader page per exam ---
const proveAtoms = new Map()   // stem -> [{ rel, base, atomId }]
const proveParents = new Map() // stem -> rel of the <stem>.md parent (if any)
const PROVE_ATOM_RE = /__[a-z]/i
for (const rel of files) {
  if (!rel.endsWith(".md")) continue
  if (rel.split(path.sep)[0].toLowerCase() !== "prove") continue
  const base = path.basename(rel, ".md")
  const usc = base.indexOf("__")
  if (usc < 0) { proveParents.set(sluggify(base), rel); continue }
  const stem = base.slice(0, usc)
  const atomId = base.slice(usc + 2)          // e.g. "q01"
  if (!proveAtoms.has(stem)) proveAtoms.set(stem, [])
  proveAtoms.get(stem).push({ rel, base, atomId })
}
for (const list of proveAtoms.values())
  list.sort((a, b) => a.atomId.localeCompare(b.atomId, "en", { numeric: true }))
const atomFrag = new Map()  // old atom slug (prove/<stem>__qnn) -> prove/<stem>#<atomId>
```

In the main loop, SKIP prove atoms and prove parents from the classic per-file emit (they are handled by the container pass). Right after line 359-360's guards add:
```js
if (rel.split(path.sep)[0].toLowerCase() === "prove") {
  const b = path.basename(rel, ".md")
  if (b.includes("__") || proveAtoms.has(sluggify(b))) {
    // prove atom OR a parent stem that has atoms -> emitted by container pass
    // still fall through to build quesiti/kw below, but DO NOT write a page.
  }
}
```
(Keep the quesiti/kw block at 418-446 running for atoms so `/cerca` data is unaffected in Phase 1; only the page `fs.writeFile(dest, ...)` at line 416 must be skipped for prove atoms. Wrap line 416 so prove atoms/parents don't emit a page.)

After the main loop (after line 447), add the container-emission pass:
```js
// --- SPA: emit one reader page per prove stem ---
const num = (s) => s.replace(/\.md$/, "")
for (const [stem, atoms] of proveAtoms) {
  const stemSlug = sluggify(stem)
  // parent frontmatter (title/tags) from <stem>.md if present, else derive
  let title = stem, ptags = ["graph/prova"]
  const parentRel = proveParents.get(stemSlug)
  if (parentRel) {
    const praw = await fs.readFile(path.join(VAULT, parentRel), "utf8")
    const pf = parseFrontmatter(praw)
    if (pf.data.title) title = pf.data.title
    const h1 = pf.content.match(/^#\s+(.+?)\s*$/m)
    if (!pf.data.title && h1) title = h1[1].trim()
    if (Array.isArray(pf.data.tags)) ptags = pf.data.tags
  }
  const blocks = []
  for (const a of atoms) {
    const raw = await fs.readFile(path.join(VAULT, a.rel), "utf8")
    const pf = parseFrontmatter(raw)
    let body = pf.content.replace(/^#\s+.+?[ \t]*(\r?\n|$)/m, "")   // drop leading H1 (title rendered by marker)
    body = transform(body)
    const atags = Array.isArray(pf.data.tags) ? pf.data.tags : []
    const atomTitle = pf.data.title || a.atomId
    const frag = `${stemSlug}#${a.atomId}`
    atomFrag.set(`prove/${sluggify(a.base)}`, `prove/${frag}`)
    blocks.push(
      `\n\n<span class="atom-split" data-atom="${esc(a.atomId)}" ` +
      `data-title="${esc(atomTitle)}" data-tags="${esc(atags.join(","))}"></span>\n\n` +
      body.trim()
    )
  }
  const fm = `---\ntitle: ${JSON.stringify(title)}\ntipo: prova\ntags:\n` +
    ptags.map((t) => `  - ${t}`).join("\n") + `\n---\n\n`
  const mount = `<div class="atom-reader" data-prova="${esc(stemSlug)}"></div>\n`
  const dest = path.join(CONTENT, "prove", `${stemSlug}.md`)
  await fs.mkdir(path.dirname(dest), { recursive: true })
  await fs.writeFile(dest, fm + mount + blocks.join("\n\n"))
  mdWritten++
}
```
Add an `esc()` helper if one does not exist (HTML-attr escape: `&`,`"`,`<`,`>`). Confirm `parseFrontmatter` and `transform` are in scope (they are: `transform` at `preprocess.mjs:222`).

- [ ] **Step 4: Run preprocess, then the test.**
```bash
NODE_OPTIONS=--max-old-space-size=16384 node preprocess.mjs
node --test test/spa-emit.test.mjs
```
Expected: PASS.

- [ ] **Step 5: Sanity-count the collapse.**
```bash
find content/prove -name '*.md' | wc -l    # expect ~1,490, not ~18,378
```

- [ ] **Step 6: Commit.**
```bash
git add preprocess.mjs test/spa-emit.test.mjs
git commit -m "feat(spa): emit one reader page per prove stem with atom-split markers"
```

### Task 1.2: Preserve intra-atom qlang blocks

**Files:**
- Modify: `preprocess.mjs` container pass (Task 1.1) -- verify sibling-translation merge still runs per atom.

**Interfaces:**
- Consumes: `siblings` map (built earlier at `preprocess.mjs:402`).
- Produces: each atom block may contain `<div class="qlang-switch" data-default>` + `<div class="qlang-split" data-lang>` sub-blocks, unchanged, so the existing per-atom EN/IT toggle keeps working inside the reader.

- [ ] **Step 1: Write the failing test.** Extend `test/spa-emit.test.mjs`: pick a stem known to have a translated atom sibling; assert the container page contains `qlang-split` inside that atom's block.
```js
test("bilingual atom keeps qlang markers inside the reader page", () => {
  // choose a stem with a translated sibling (record one in Phase 0)
  const html = fs.readFileSync("content/prove/<STEM_WITH_SIB>.md", "utf8")
  assert.match(html, /qlang-split/)
})
```

- [ ] **Step 2: Run, verify it fails** if the container pass reads only the default body.

- [ ] **Step 3: Implement** -- to avoid duplicating the merge logic, FACTOR the existing sibling-merge (`preprocess.mjs:402-414`) into a shared helper and call it from BOTH the classic loop and the container pass:
```js
// hoist near transform(): returns body with qlang blocks appended, or body unchanged
function mergeSiblings(base, body, nativeLang, siblings, transform) {
  if (!siblings.has(base)) return body
  const ORDER = { it: 0, en: 1, es: 2, pt: 3, de: 4, fr: 5 }
  const sibs = [...siblings.get(base)].sort((a, b) => (ORDER[a.lang] ?? 9) - (ORDER[b.lang] ?? 9))
  let merged = `<div class="qlang-switch" data-default="${nativeLang}"></div>\n\n` + body
  for (const s of sibs) {
    const b = transform(s.body)
      .replace(/^\s*#\s+.+?(?:\r?\n|$)/m, "")
      .replace(/\n?\[\[[^\]]*\]\]\s*$/, "")
    merged += `\n\n<div class="qlang-split" data-lang="${s.lang}"></div>\n\n` + b.trim()
  }
  return merged
}
```
Replace lines 402-414 with a call to `mergeSiblings(...)`, and call the same helper in the container pass per atom (keyed on `a.base`, native lang from the atom's `data.lang || "it"`).

- [ ] **Step 4: Run test, verify PASS.**

- [ ] **Step 5: Commit.**
```bash
git add preprocess.mjs test/spa-emit.test.mjs
git commit -m "feat(spa): keep per-atom qlang blocks inside reader pages"
```

---

## Phase 2 -- The reader client (atomRouter)

Deliverable: visiting `prove/<stem>` shows one atom at a time with a TOC + prev/next; `prove/<stem>#qNN` opens directly on that atom; no-JS still renders the full page.

### Task 2.1: Port and adapt atomRouter.inline.ts

**Files:**
- Create: `quartz/components/scripts/atomRouter.inline.ts` (adapt from English `quartz/components/scripts/atomRouter.inline.ts:1-381`).
- Create/modify: a Quartz component that emits the script on every content page (e.g. `quartz/components/AtomReader.tsx`), registered in the layout so `.atom-reader` pages load it. Follow the existing pattern of `quartz/components/` scripts (e.g. how `pagedList.inline.ts` is attached to its component).

**Interfaces:**
- Consumes: the emitted DOM -- `div.atom-reader[data-prova]` mount + top-level `span.atom-split[data-atom,data-title,data-tags]` markers (and nested `qlang-split`).
- Produces: client behavior only (no exported symbols).

- [ ] **Step 1: Copy the English file** to `quartz/components/scripts/atomRouter.inline.ts`.

- [ ] **Step 2: Apply these adaptations** (English is per-work/chapter-nested; physics is flat per-prova):
  - Mount selector: `div.atom-reader` (already matches). Read `data-prova` instead of `data-work`/`data-author`/`data-workhref`; drop author/workhref usage.
  - `atomId` scheme: physics ids are flat (`q01`), no `--` chapter nesting. In `go(id)` remove the chapter-fallback branch (`order.find(o => o.startsWith(id + "--"))`) OR keep it harmless (flat ids never contain `--`).
  - Remove the related-cards shard fetch (`relatedIndex`, `chapter_related/*`) unless Phase 5 adds a physics equivalent -- delete those blocks for now.
  - Keep the DOM `partition()` at `.atom-split`/`.qlang-split` markers verbatim (physics uses the same markers, incl. qlang).
  - Keep hash activation (`go(current())`), TOC build, prev/next, arrow keys, and the `a[href^="#"]` click delegation verbatim.
  - `body.reading-page` toggle: keep; add matching minimal CSS (copy the reader CSS from English `quartz/styles` if present, else style `.atom-reader`, `.atom-toc`, `.atom-pane`).

- [ ] **Step 3: Register the component** so the script ships on content pages. Verify by building one page and grepping the output for `atom-reader` wiring.

- [ ] **Step 4: Manual/Playwright verification.** Build (Phase 7 command) or `npx quartz build --serve`, open `prove/1994e`, assert: exactly one atom visible, TOC lists all atoms, clicking TOC item N shows atom N and sets `#qNN`, direct load of `prove/1994e#q03` opens on q03, browser back/forward moves between atoms. Use the Playwright MCP (`.playwright-mcp/`).

- [ ] **Step 5: No-JS check.** Load the page with JS disabled: the full concatenated text of all atoms must be visible (parity/SEO fallback).

- [ ] **Step 6: Commit.**
```bash
git add quartz/components/scripts/atomRouter.inline.ts quartz/components/AtomReader.tsx quartz/components/index.ts quartz.layout.ts quartz/styles
git commit -m "feat(spa): atomRouter reader client (port from English, flat per-prova)"
```

### Task 2.2: Popover parity for fragment links

**Files:**
- Modify: `quartz/components/scripts/popover.inline.ts` (only if popovers break on fragment targets).

**Interfaces:**
- Consumes: links of the form `prove/<stem>#<atomId>`.
- Produces: a hover popover that shows the target atom's content (parity with today's per-atom popover).

- [ ] **Step 1: Verify current behavior.** Hover a repointed atom link (after Phase 3) and observe the popover. Quartz popovers fetch the target page and, when the URL has a hash, scroll the preview to `#<id>`. The atom sections are detached by atomRouter at runtime, so the fetched static HTML still contains the full text and an anchor is needed.

- [ ] **Step 2: If the popover shows the whole prova instead of the atom**, add an `id="<atomId>"` to each `atom-split` marker span in `preprocess.mjs` (so the static HTML has a scroll anchor) and confirm the popover scrolls to it. Add a test fixture asserting `id="q01"` exists on the marker.

- [ ] **Step 3: Commit** (only if changed).
```bash
git add preprocess.mjs quartz/components/scripts/popover.inline.ts
git commit -m "fix(spa): popover scrolls to atom anchor within reader page"
```

---

## Phase 3 -- Repoint atom hrefs to fragments (tagging parity)

Deliverable: `/cerca`, the concept paged-lists, and internal wikilinks all link to `prove/<stem>#<atomId>`; per-atom keyword lookup still matches.

### Task 3.1: Repoint quesiti + keyword index hrefs

**Files:**
- Modify: `preprocess.mjs:422-424` (quesiti `href` + `kwIndex` key).

**Interfaces:**
- Consumes: `atomFrag` map (Task 1.1).
- Produces: `quesiti[].href` and `kwIndex` keys now equal `prove/<stem>#<atomId>`.

- [ ] **Step 1: Write the failing test.** `test/spa-href.test.mjs`:
```js
import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
test("quesiti + kw hrefs are fragments", () => {
  const q = JSON.parse(fs.readFileSync("staticgen/quesiti.json", "utf8"))
  assert.ok(q.every((x) => !/__q/i.test(x.href)), "no old atom slugs in quesiti")
  assert.ok(q.some((x) => /prove\/.+#q/i.test(x.href)), "fragments present")
  const kw = JSON.parse(fs.readFileSync("staticgen/quesiti_kw.json", "utf8"))
  assert.ok(Object.keys(kw).some((k) => k.includes("#")), "kw keyed by fragment")
})
```

- [ ] **Step 2: Run, verify it fails.**

- [ ] **Step 3: Implement.** At `preprocess.mjs:422`, replace `const href = slugFromRel(rel)` with a fragment lookup:
```js
const oldSlug = slugFromRel(rel)                       // prove/<stem>__qnn
const href = atomFrag.get(oldSlug) || oldSlug          // prove/<stem>#<atomId>
```
`kwIndex[href] = kw` at line 424 then keys by the fragment automatically.

- [ ] **Step 4: Run test, verify PASS.**

- [ ] **Step 5: Commit.**
```bash
git add preprocess.mjs test/spa-href.test.mjs
git commit -m "feat(spa): quesiti + keyword index use fragment hrefs"
```

### Task 3.2: Repoint concept paged-list hrefs + fix kw anchor-strip

**Files:**
- Modify: `preprocess.mjs:205-207` (paged-list entry `h`).
- Modify: `quartz/components/scripts/pagedList.inline.ts:170` (kw lookup).

**Interfaces:**
- Consumes: `atomFrag`.
- Produces: `cl/*.json` entries whose `h` is `prove/<stem>#<atomId>` for atom targets.

- [ ] **Step 1: Write the failing test.** `test/spa-pagedlist.test.mjs`:
```js
import { test } from "node:test"; import assert from "node:assert/strict"; import fs from "node:fs"
test("paged-list atom entries are fragments", () => {
  const files = fs.readdirSync("staticgen/cl").filter((f) => f.endsWith(".json"))
  const all = files.flatMap((f) => JSON.parse(fs.readFileSync("staticgen/cl/" + f, "utf8")))
  const atoms = all.filter((r) => /^prove\//.test(r.h))
  assert.ok(atoms.length > 0)
  assert.ok(atoms.every((r) => !/__q/i.test(r.h)), "no old atom slugs")
})
```

- [ ] **Step 2: Run, verify it fails.**

- [ ] **Step 3: Implement.** In `extractConceptList` at `preprocess.mjs:205-207`, after computing `hbase`, map atom targets to fragments. Because `extractConceptList` runs during the main loop (before the container pass builds `atomFrag`), compute the fragment locally from the target instead:
```js
// atom targets look like <stem>__<atomId>; rewrite to prove/<stem>#<atomId>
let h = hbase + anchor
const am = tslug.match(/^(.*)__([a-z0-9]+)$/i)
if (am && (dir === "prove" || dir == null)) h = `prove/${am[1]}#${am[2]}`
items.push({ h, l: ..., s: ..., ... })
```
(Keep the rest of the item shape unchanged.)

In `pagedList.inline.ts:170`, the kw key is now the full fragment, so STOP stripping the anchor:
```js
// before: kwCache?.[r.h.replace(/#.*$/, "")]
const kwHit = kwCache?.[r.h]
```

- [ ] **Step 4: Run test, verify PASS**, and rebuild to confirm the kw "search full content" mode on a concept page still highlights per-atom.

- [ ] **Step 5: Commit.**
```bash
git add preprocess.mjs quartz/components/scripts/pagedList.inline.ts test/spa-pagedlist.test.mjs
git commit -m "feat(spa): concept paged-lists link to atom fragments; kw lookup keyed by fragment"
```

### Task 3.3: Repoint internal wikilinks between atoms

**Files:**
- Modify: `preprocess.mjs` `transform()` (or a post-pass) to rewrite `prove/<stem>__<atomId>` link targets that Quartz's crawl-links would resolve to now-absent atom pages.

**Interfaces:**
- Consumes: `atomFrag`.
- Produces: atom-to-atom links inside emitted bodies point to `prove/<stem>#<atomId>`.

- [ ] **Step 1: Write the failing test.** Grep an emitted container page for any wikilink ending `__q\d`. Assert none remain (all rewritten to `#q..`). ESM `.mjs` -- use `import`, not `require`:
```js
import { test } from "node:test"
import assert from "node:assert/strict"
import { execSync } from "node:child_process"
test("no dangling __q links inside emitted prove pages", () => {
  const out = execSync('grep -rEl "__q[0-9]" content/prove || true').toString().trim()
  assert.equal(out, "", "found pages with old atom links:\n" + out)
})
```

- [ ] **Step 2: Run, verify it fails** (some atom bodies cross-reference sibling atoms).

- [ ] **Step 3: Implement.** In the container pass, after `body = transform(body)`, rewrite wikilinks whose target basename contains `__` to a fragment:
```js
body = body.replace(/\[\[([^\]|#]+?)__([a-z0-9]+)((?:#[^\]|]*)?)(\|[^\]]*)?\]\]/gi,
  (full, st, aid, _h, alias) => `[[prove/${sluggify(st)}#${aid.toLowerCase()}${alias || ""}]]`)
```
Verify this survives Quartz's OFM wikilink resolution (a `path#frag` wikilink renders as `<a href=".../path#frag">`).

- [ ] **Step 4: Run test, verify PASS.**

- [ ] **Step 5: Commit.**
```bash
git add preprocess.mjs test/spa-href.test.mjs
git commit -m "feat(spa): rewrite atom-to-atom wikilinks to fragments"
```

---

## Phase 4 -- Per-atom search bar (tf-idf, full-index + projections)

Deliverable: the top search bar returns per-atom hits that open `prove/<stem>#<atomId>`; the shipped desktop index is ~15 MB, the shipped mobile index ~8 MB, both < 25 MiB. Both are size-driven **projections** of a rich **full index** that is generated once and kept OUT of the website.

**Design (locked with the user):** preprocess builds ONE full offline index carrying, per atom, ALL its terms with their tf-idf scores plus corpus stats (`df`, `N`). That file is never deployed. Two projection scripts read the full index and, each run, select as many top-ranking terms as fit the target size, writing the shipped desktop/mobile indices. Re-tuning a shipped size therefore never re-parses the vault -- it only re-projects from the full index.

### Task 4.1: Emit the FULL offline search index from preprocess

**Files:**
- Modify: `preprocess.mjs` -- after the container pass, write `staticgen/atoms_fullindex.json`. NOT shipped: `staticgen/` is not auto-copied to `public/`; only named files are (Phase 7 copies `cl/`, `quesiti.json`, `quesiti_kw.json` -- NOT the full index).
- Reference: English `keywordCounts` (`preprocess.mjs:247`) and `topTfIdf` (`preprocess.mjs:266`).

**Interfaces:**
- Produces: `staticgen/atoms_fullindex.json` =
  `{ N: <atom count>, df: { <term>: <doc-freq> }, atoms: { <id>: { slug, frag, title, tags, terms: [[term, tfidf], ...] } } }`
  where `id = "prove/<stem>#<atomId>"`, `slug = "prove/<stem>"` (clean path, no `#`), `frag = "<atomId>"`, and `terms` is ALL of the atom's terms sorted by tf-idf descending. Carries `df`/`N` so a projection can recompute or threshold at any budget without the vault.
- Produces (in-memory, consumed here): `atomMeta: Map<id, {title, tags}>` populated in the container pass.

- [ ] **Step 1: Write the failing test.** `test/spa-search-source.test.mjs`:
```js
import { test } from "node:test"; import assert from "node:assert/strict"; import fs from "node:fs"
test("atoms_fullindex.json: full per-atom terms + corpus stats", () => {
  const m = JSON.parse(fs.readFileSync("staticgen/atoms_fullindex.json", "utf8"))
  assert.ok(m.N > 10000, "corpus size N present")
  assert.ok(m.df && typeof m.df === "object", "df map present")
  const vals = Object.values(m.atoms)
  assert.ok(vals.length > 10000, "has per-atom entries")
  assert.ok(vals.every((v) => !v.slug.includes("#")), "slug is a clean path")
  assert.ok(vals.every((v) => v.frag && Array.isArray(v.terms)), "frag + terms[] present")
  // terms are [term, score] pairs sorted desc
  const t = vals.find((v) => v.terms.length >= 2).terms
  assert.ok(Array.isArray(t[0]) && t[0].length === 2, "term entries are [term, score]")
  assert.ok(t[0][1] >= t[1][1], "terms sorted by score desc")
})
```

- [ ] **Step 2: Run, verify it fails.**

- [ ] **Step 3: Implement.** Port `keywordCounts` (term -> count within an atom body, using the existing physics `STOPWORDS` at `preprocess.mjs:69`). In the container pass, accumulate `counts[id] = keywordCounts(body)` and `atomMeta.set(id, {title, tags})`. After the pass compute the full index (keep ALL terms, do not truncate to a small N -- an optional high safety cap like 300 terms/atom is fine to bound pathological atoms):
```js
const N = Object.keys(counts).length
const df = {}
for (const c of Object.values(counts)) for (const t of c.keys()) df[t] = (df[t] || 0) + 1
const atoms = {}
for (const [id, c] of Object.entries(counts)) {
  const [slug, frag] = id.split("#")
  const rec = atomMeta.get(id) || {}
  const terms = [...c.entries()]
    .map(([t, tf]) => [t, tf * Math.log(N / df[t])])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 300)                       // high safety cap; NOT the shipped size
  atoms[id] = { slug, frag, title: rec.title || frag, tags: rec.tags || [], terms }
}
await fs.writeFile(path.join(STATIC_GEN, "atoms_fullindex.json"), JSON.stringify({ N, df, atoms }))
```

- [ ] **Step 4: (controller, phase gate) Run preprocess + test, verify PASS.**

- [ ] **Step 5: Commit.**
```bash
git add preprocess.mjs test/spa-search-source.test.mjs
git commit -m "feat(spa): emit full offline tf-idf search index (atoms_fullindex.json)"
```

### Task 4.2: Project the shipped desktop index (~15 MB) from the full index

**Files:**
- Create: `scripts/make-search-index.mjs` -- a single script that emits BOTH shipped tiers (desktop here; the mobile budget is Task 4.3, same script, second output).

**Interfaces:**
- Consumes: `staticgen/atoms_fullindex.json`.
- Produces: `public/static/contentIndex.json` = map `id -> { slug, frag, title, tags, content, links }` where `content` is the space-joined subset of the atom's terms selected to FILL ~15 MB. Selection is a **global tf-idf threshold**: keep every term with score >= T; binary-search T so the whole file lands near the budget. Lower T -> more terms -> bigger file. This keeps the most informative terms corpus-wide and gives variable terms/atom (a term-rich atom keeps more). Re-runnable anytime without preprocess.

- [ ] **Step 1: Write the failing test.** `test/spa-index-size.test.mjs`:
```js
import { test } from "node:test"; import assert from "node:assert/strict"; import fs from "node:fs"
test("desktop index ~15MB and < 25MiB", () => {
  const s = fs.statSync("public/static/contentIndex.json").size
  assert.ok(s <= 25 * 1024 * 1024, "under CF 25MiB cap, got " + s)
  assert.ok(s >= 13 * 1e6, "filled near budget (>=13MB), got " + s)  // do not undershoot
  assert.ok(s <= 16 * 1e6, "not over ~15MB budget, got " + s)
})
```

- [ ] **Step 2: Run, verify it fails** (script not written).

- [ ] **Step 3: Implement `scripts/make-search-index.mjs`.**
```js
// Post-preprocess: project the shipped search indices from the full offline index.
// Desktop ~15MB, mobile ~8MB. Selection = global tf-idf threshold, binary-searched
// to fill each budget. Re-runnable without re-parsing the vault.
import fs from "fs"
const full = JSON.parse(fs.readFileSync("staticgen/atoms_fullindex.json", "utf8"))
const entries = Object.entries(full.atoms)

function project(threshold) {
  const out = {}
  for (const [id, v] of entries) {
    const content = v.terms.filter(([, s]) => s >= threshold).map(([t]) => t).join(" ")
    out[id] = { slug: v.slug, frag: v.frag, title: v.title, tags: v.tags, content, links: [] }
  }
  return out
}
// term scores span (0, maxScore]; binary-search the threshold to hit the byte budget.
function build(budget, outPath, label) {
  let lo = 0, hi = Math.max(...entries.flatMap(([, v]) => v.terms.map(([, s]) => s)), 1)
  let best = project(hi)                       // hi threshold -> fewest terms -> smallest
  for (let i = 0; i < 24; i++) {
    const mid = (lo + hi) / 2
    const cand = project(mid)
    const size = Buffer.byteLength(JSON.stringify(cand))
    if (size > budget) lo = mid; else { hi = mid; best = cand }  // lower threshold grows file
  }
  fs.writeFileSync(outPath, JSON.stringify(best))
  console.log(label, (Buffer.byteLength(JSON.stringify(best)) / 1e6).toFixed(1), "MB")
}
build(15e6, "public/static/contentIndex.json", "desktop index")
build(8e6, "public/static/contentIndexMobile.json", "mobile index")   // Task 4.3
```
(Note: lower threshold -> MORE terms kept -> larger file, so the search direction is `size>budget ? raise floor : lower floor`. Verify the direction against a real run at the gate; adjust the 24-iteration bound if convergence is loose.)

- [ ] **Step 4: (controller, phase gate) Run `node scripts/make-search-index.mjs` after preprocess; run the test, verify PASS.**

- [ ] **Step 5: Commit.**
```bash
git add scripts/make-search-index.mjs test/spa-index-size.test.mjs
git commit -m "feat(spa): project shipped desktop search index (~15MB) from full index"
```

### Task 4.3: Project the shipped mobile index (~8 MB)

**Files:**
- Modify: `scripts/make-search-index.mjs` -- the second `build(8e6, ...)` call above already emits `public/static/contentIndexMobile.json`. This task just adds the mobile size test + verifies both tiers.

**Interfaces:**
- Consumes: `staticgen/atoms_fullindex.json` (same source as desktop -- NOT derived from the desktop file, so mobile keeps independent, correctly-thresholded terms).
- Produces: `public/static/contentIndexMobile.json` ~8 MB.

- [ ] **Step 1: Write the failing test** (append to `test/spa-index-size.test.mjs`):
```js
test("mobile index ~8MB and < desktop", () => {
  const m = fs.statSync("public/static/contentIndexMobile.json").size
  const d = fs.statSync("public/static/contentIndex.json").size
  assert.ok(m <= 9 * 1e6 && m >= 6.5 * 1e6, "near 8MB, got " + m)
  assert.ok(m < d, "mobile smaller than desktop")
})
```

- [ ] **Step 2: Run, verify it fails** (mobile file not yet produced / test absent).

- [ ] **Step 3: Implement** -- confirm the `build(8e6, "public/static/contentIndexMobile.json", "mobile index")` call from Task 4.2 exists and is projected from the SAME `atoms_fullindex.json` (not from the desktop output). No new script.

- [ ] **Step 4: (controller, phase gate) Run + test, verify PASS.**

- [ ] **Step 5: Commit.**
```bash
git add scripts/make-search-index.mjs test/spa-index-size.test.mjs
git commit -m "feat(spa): project shipped mobile search index (~8MB) from full index"
```

### Task 4.4: Patch the search fork -- tiered fetch + fragment href

**Files:**
- Modify: `.quartz/plugins/search/src/components/scripts/search.inline.ts:811` (and the result-href builder, ~`:324`).

> DECISION: the search plugin is upstream `quartz-community/search` (not a gborghi fork), and `.quartz/` is gitignored (restored from `quartz.lock.json`). We do NOT create a new fork. Instead a **post-restore idempotent patch script** `scripts/patch-search-fork.mjs` re-applies the two edits to `.quartz/plugins/search/src/components/scripts/search.inline.ts` after every `quartz plugin restore`, run in the build pipeline BEFORE `npx quartz build`. The script must be idempotent (detect an already-applied marker and no-op) and fail loudly if the anchor lines it patches have moved (guard against silent upstream drift).

**Interfaces:**
- Consumes: `contentIndex.json` / `contentIndexMobile.json` entries with `{slug, frag, ...}`.
- Produces: result links `resolveBasePath(slug) + (frag ? "#" + frag : "")`.

The two edits below are the PAYLOAD; they are delivered by an idempotent
`scripts/patch-search-fork.mjs` (Step 0) so they survive `quartz plugin
restore`. During development you may edit `.quartz/...` directly to iterate,
but the committed deliverable is the patch script + a build-pipeline call to it.

- [ ] **Step 0: Write `scripts/patch-search-fork.mjs`.** It reads `.quartz/plugins/search/src/components/scripts/search.inline.ts`, checks for a sentinel comment `/* spa-atom-patch */`; if present, no-op; else applies the two string replacements below (anchored on the exact `const data = await fetchData;` line and the `resolveBasePath(item.slug)` href line), inserts the sentinel, and writes the file back. If either anchor is not found, `process.exit(1)` with a clear message (upstream drift guard).

- [ ] **Step 1: Tiered fetch (the first replacement the script applies).** Replace `const data = await fetchData;` at line 811 with the English pattern:
```ts
async function fetchIndex() {
  const small = matchMedia("(max-width: 800px)").matches || matchMedia("(pointer: coarse)").matches
  if (small) {
    const slug = document.body.dataset.slug || ""
    const prefix = "../".repeat((slug.match(/\//g) || []).length)
    const r = await fetch(prefix + "static/contentIndexMobile.json")
    if (r.ok) return await r.json()
  }
  return await fetchData
}
const data = await fetchIndex()
```

- [ ] **Step 2: Fragment-aware href.** Where a result link is built from `item.slug` (~line 324, `resolveBasePath(item.slug)`), append the fragment:
```ts
const href = resolveBasePath(item.slug) + (item.frag ? "#" + item.frag : "")
```

- [ ] **Step 3: Verify** (Playwright): type a term unique to one atom; the top hit's link resolves to `prove/<stem>#<atomId>`; clicking lands on that atom in the reader. On a narrow viewport, confirm `contentIndexMobile.json` is the fetched file (Network panel) and results still resolve per-atom.

- [ ] **Step 4: Commit** (fork patch + any build-script re-apply).
```bash
git add .quartz/plugins/search quartz.lock.json scripts
git commit -m "feat(spa): search bar tiered index fetch + per-atom fragment links"
```

---

## Phase 5 -- Graph per-atom nodes

Deliverable: the knowledge graph shows a node per atom; clicking it opens `prove/<stem>#<atomId>`. Topology (links between atoms/concepts) matches today.

### Task 5.1: Include per-atom nodes with fragment hrefs in the graph data

**Files:**
- Modify: `preprocess.mjs` -- add `links` per atom into `atoms_search.json` (or a dedicated `atoms_graph.json`) so nodes carry edges.
- Modify: `.quartz/plugins/graph/src/components/scripts/graph.inline.ts` -- build node href as `slug + (frag ? "#" + frag : "")`; source nodes from the per-atom index.

**Interfaces:**
- Consumes: per-atom `{id, slug, frag, links}` where `links` = the atom's outbound wikilink targets (concepts + sibling atoms), already fragment-formed.
- Produces: graph nodes keyed by `id`, href fragment-aware.

- [ ] **Step 1: Capture atom links in preprocess.** In the container pass, extract each atom body's `[[...]]` targets (reuse `metaLinks`/a wikilink regex), map atom targets through the same fragment rewrite, and store `links` on the atom record; include `links` in `atoms_search.json` (Task 4.1) or a sibling `atoms_graph.json`.

- [ ] **Step 2: Feed the graph.** The graph reads `fetchData` (contentIndex). Since Task 4.2 now writes contentIndex as the per-atom map WITH `links`, the graph gets per-atom nodes for free IF `graph.inline.ts` keys nodes by the map key (`id`) and builds hrefs via `slug + '#' + frag`. Patch `graph.inline.ts` node-href construction accordingly (locate the `simplifySlug`/href step, ~`graph.inline.ts:90-91,123`).

- [ ] **Step 3: Verify** (Playwright): open the global graph, confirm atom-count-scale nodes exist, hover shows atom title, click opens the correct fragment. Confirm concept<->atom edges match a spot-checked atom's tags.

- [ ] **Step 4: Guard graph payload size.** The graph also parses contentIndex; ensure the `links[]` per atom is capped (e.g. 20, like English) so the desktop index stays within the 15 MB budget after adding links. Re-run Task 4.2's size test.

- [ ] **Step 5: Commit.**
```bash
git add preprocess.mjs .quartz/plugins/graph quartz.lock.json
git commit -m "feat(spa): per-atom graph nodes with fragment hrefs"
```

---

## Phase 5.5 -- Merge real pages into the shipped index (search + graph parity)

**Why (gap found during Phase 5):** `scripts/make-search-index.mjs` currently OVERWRITES `public/static/contentIndex.json` with atom entries ONLY. That drops every real Quartz page (concept pages: topics/methods/objects/clusters/skills; soluzioni; home; cerca) from the shipped index. Consequences: (1) concept + soluzioni pages become UN-searchable in the top bar -- a behavioral-parity regression; (2) the graph loses concept nodes, so atom->concept edges (`validLinks.has(dest)` on a concept slug) never render. The fix: MERGE, don't replace.

### Task 5.5: Merge native page entries + atom entries in the projection

**Files:**
- Modify: `scripts/make-search-index.mjs` -- read the Quartz-native `contentIndex.json` (written by `npx quartz build`) BEFORE overwriting; merge.

**Interfaces:**
- Consumes: the build-generated `public/static/contentIndex.json` (native schema `{slug, title, content, tags, links, filePath}`, all real pages, NO atom entries) + `staticgen/atoms_fullindex.json`.
- Produces: the merged shipped `contentIndex.json` (+ mobile) = native NON-container entries (concepts/soluzioni/home/cerca) with content truncated to a snippet, PLUS the atom projected entries, with the tf-idf threshold filling only the ATOM terms into the remaining budget.

- [ ] **Step 1: Write the failing test** `test/spa-index-merge.test.mjs`:
```js
import { test } from "node:test"; import assert from "node:assert/strict"; import fs from "node:fs"
const P = "public/static/contentIndex.json"
const has = fs.existsSync(P)
test("shipped index keeps concept pages AND atom entries", { skip: !has && "index not built" }, () => {
  const idx = JSON.parse(fs.readFileSync(P, "utf8"))
  const keys = Object.keys(idx)
  assert.ok(keys.some((k) => /#/.test(k)), "has atom fragment entries")
  assert.ok(keys.some((k) => /^(topics|methods|objects|clusters|skills)\//.test(k)), "has concept pages")
  assert.ok(!keys.some((k) => /^prove\/[^#]+$/.test(k)), "prove CONTAINER pages dropped (atoms replace them)")
})
```

- [ ] **Step 2: Run, verify it fails** (current script drops concepts).

- [ ] **Step 3: Implement the merge in `make-search-index.mjs`.**
  - Read the native index (if present): `const native = fs.existsSync(P) ? JSON.parse(fs.readFileSync(P)) : {}`. It is the file the script is about to overwrite -- read it FIRST at the top.
  - Keep native entries whose key is NOT a `prove/<stem>` container (drop `^prove/[^#]+$` -- atoms replace them; keep everything else: concepts, soluzioni, home, cerca, tag pages if any). Truncate each kept entry's `content` to a snippet (e.g. 300 chars) to bound budget; keep its `title`/`tags`/`links`; leave `slug`=its key, no `frag`.
  - Build the atom projection as today (threshold fill), but size the budget as `budget - byteSize(keptNativeEntries)` so the TOTAL merged file lands under 15 MB / 8 MB. Merge the two maps and write.
  - Non-container native entries keep their native shape -> search href + graph nodeHref treat them (no `.frag`) exactly as today = parity.

- [ ] **Step 4: (controller, gate) Run build -> `node scripts/make-search-index.mjs`; run this test + `test/spa-index-size.test.mjs` (still <=15/8 MB after merge).**

- [ ] **Step 5: Commit.**
```bash
git add scripts/make-search-index.mjs test/spa-index-merge.test.mjs
git commit -m "feat(spa): merge concept/soluzioni pages + atom entries in shipped index"
```

**Note (graph scope, found in Phase 5):** the GLOBAL graph is already deliberately capped to ~50 concept-only nodes by existing custom code; per-atom nodes matter mainly in the LOCAL ego-graph opened from an atom. The "current node" highlight also cannot match an atom (slug-from-URL ignores the hash) -- both are pre-existing consequences of the collapse, tracked as Phase 7 gate items, not blockers.

---

## Phase 6 -- Redirects, native tag pages, parity audit

Deliverable: old per-atom URLs redirect to fragments; native `tags/*.html` are gone; a click-through audit confirms parity.

### Task 6.1: SPA 404 redirect for old atom URLs

**Files:**
- Modify: `preprocess.mjs` -- emit `content/404.md` (port English `preprocess.mjs:1498-1511`, physics path shape).

**Interfaces:**
- Produces: `content/404.md` whose inline script rewrites `.../prove/<stem>__<atomId>/` -> `.../prove/<stem>#<atomId>`.

- [ ] **Step 1: Write the failing test.** Assert `content/404.md` exists and contains a rewrite matching `prove/` + `__`.
```js
test("404 rewrites old atom urls to fragments", () => {
  const s = fs.readFileSync("content/404.md", "utf8")
  assert.match(s, /prove/)
  assert.match(s, /location\.replace/)
})
```

- [ ] **Step 2: Run, verify it fails.**

- [ ] **Step 3: Implement.** Adapt the English 404 block; the physics match/rewrite:
```js
const notFound =
  `---\ntitle: "Pagina non trovata"\n---\n\n` +
  `<div class="nf-msg"><p><strong>Pagina non trovata.</strong> Reindirizzamento...</p>\n` +
  `<p><a href="/">Home</a></p></div>\n\n` +
  `<script>\n(function(){\n` +
  `  var p=decodeURIComponent(location.pathname).replace(/\\/index\\.html$/,"").replace(/\\/$/,"");\n` +
  `  var m=p.match(/^(.*)\\/prove\\/([^/]+?)__([a-z0-9]+)$/i);\n` +
  `  if(m){ location.replace(m[1]+"/prove/"+m[2]+"#"+m[3]); }\n` +
  `})();\n</script>\n`
await fs.writeFile(path.join(CONTENT, "404.md"), notFound)
```

- [ ] **Step 4: Run test, verify PASS**; after a build, manually hit an old URL and confirm redirect.

- [ ] **Step 5: Commit.**
```bash
git add preprocess.mjs test/spa-404.test.mjs
git commit -m "feat(spa): 404 redirect old atom URLs to fragments"
```

### Task 6.2: Disable native Quartz tag pages

**Files:**
- Modify: `quartz.config.yaml:116` (`github:quartz-community/tag-page` -> `enabled: false`).

- [ ] **Step 1: Set `enabled: false`** on the `tag-page` plugin.

- [ ] **Step 2: Verify** after a build that `public/tags/*.html` aggregate monsters are gone and `/cerca` (the real per-tag tool) still filters per atom. Confirm no in-site link relied on `tags/<x>.html` (breadcrumbs/tag-list components may link there -- if so, repoint them to `/cerca?tag=` or accept the tag-list rendering without a dead link).

- [ ] **Step 3: Commit.**
```bash
git add quartz.config.yaml
git commit -m "feat(spa): drop native tag pages (cerca is the per-tag tool)"
```

### Task 6.3: Behavioral-parity audit (fixtures from Phase 0)

**Files:** none (verification task).

- [ ] **Step 1:** For each of the 5 Phase-0 fixture atoms, exercise every entry path and confirm it lands on the same atom content: (a) search bar, (b) `/cerca` filter by one of its tags, (c) its concept paged-list on an object/method/skill/topic/cluster page, (d) graph node, (e) a wikilink from a sibling atom, (f) hover popover, (g) old URL redirect.

- [ ] **Step 2:** Record pass/fail per path in the phase notes. Any regression blocks Phase 7.

- [ ] **Step 3: Commit the audit notes.**
```bash
git add docs/superpowers/plans
git commit -m "test(spa): behavioral parity audit notes"
```

---

## Phase 7 -- Build, size gate, Cloudflare deploy

Deliverable: a full local build under 20,000 files, deployed to Cloudflare Pages via Direct Upload.

### Task 7.1: Full build + post-build pipeline + file-count gate

**Files:**
- Modify: `shrink_build.mjs:53` -- the `prove/index.html` FolderPage is small now (one row per stem); drop or simplify the stub. Keep any other shrink steps.
- Reference: build ops memory (heap 16 GB, Dropbox-ignore `public/`).

- [ ] **Step 1: Stop Dropbox** (Windows content/ lock): `Get-Process Dropbox | Stop-Process -Force`.

- [ ] **Step 2: Regenerate content + static:**
```bash
NODE_OPTIONS=--max-old-space-size=16384 node preprocess.mjs
```

- [ ] **Step 3: Build Quartz:**
```bash
NODE_OPTIONS=--max-old-space-size=16384 npx quartz build
```

- [ ] **Step 4: Post-build pipeline (order matters):**
```bash
cp -r staticgen/cl public/static/ && cp staticgen/quesiti.json staticgen/quesiti_kw.json public/static/
node scripts/make-search-index.mjs     # desktop contentIndex.json ~15MB (per-atom)
node scripts/make-mobile-index.mjs      # contentIndexMobile.json ~8MB
node shrink_build.mjs                    # remaining shrink steps (NOT contentIndex now)
: > public/.nojekyll
```
(Ensure `shrink_build.mjs` no longer truncates/overwrites the new per-atom `contentIndex.json`; the search-index script is now the authority for that file.)

- [ ] **Step 5: File-count gate.**
```bash
find public -type f | wc -l     # MUST be < 20000 (expect ~10,700)
```
Assert < 20,000. If not, investigate which dir still explodes (`find public -type d -printf '' ; for d in public/*; do echo "$(find "$d" -type f|wc -l) $d"; done | sort -rn | head`).

- [ ] **Step 6: Per-file size gate.**
```bash
find public -type f -size +25M     # MUST be empty (CF 25MiB cap)
```

- [ ] **Step 7: Restart Dropbox.** Commit the regenerated build inputs.
```bash
git add content staticgen quartz/static shrink_build.mjs
git commit -m "build(spa): regenerate content + per-atom indices for CF deploy"
```

### Task 7.2: Cloudflare Pages Direct Upload

**Files:**
- Create: `wrangler` config / project (or use the dashboard-created project).

**Interfaces:**
- Consumes: `public/`.
- Produces: a live Cloudflare Pages deployment.

- [ ] **Step 1: Confirm auth.** `npx wrangler whoami` (the user runs `! npx wrangler login` if needed -- interactive).

- [ ] **Step 2: Deploy.**
```bash
npx wrangler pages deploy public --project-name=raccolta-gare-fisica
```
Expected: upload succeeds (no file-count rejection), a `*.pages.dev` URL is returned.

- [ ] **Step 3: Update `baseUrl`.** Set `quartz.config.yaml:11` `baseUrl` to the pages.dev host (or the chosen custom domain), rebuild (Task 7.1), redeploy. (Root-domain now, not the GH `raccolta-gare-fisica` subpath.)

- [ ] **Step 4: Smoke test the live site.** Repeat the Phase 6.3 audit against the deployed URL: search -> atom, `/cerca` -> atom, graph -> atom, old URL -> redirect, mobile viewport -> mobile index. 

- [ ] **Step 5: Commit config.**
```bash
git add quartz.config.yaml
git commit -m "chore(spa): point baseUrl at Cloudflare Pages"
```

---

## Self-review (spec coverage)

- Spec s1 (per-prova pages, <20k files): Phase 1 + Phase 7 size gate. Covered.
- Spec s2 (per-atom search, resolves to exercise): Phase 4. Covered.
- Spec s3 (per-atom tagging identical): Phase 3. Covered.
- Spec s4 (deep-link fragments): Phase 1 (frag scheme) + Phase 2 (hash activation). Covered.
- Spec s5 (per-atom graph nodes): Phase 5. Covered.
- Spec s6 (old URL redirect): Phase 6.1. Covered.
- Spec s7 (wrangler deploy): Phase 7.2. Covered.
- Spec s8 (behavioral parity): Phase 6.3 audit + no-JS check (2.1) + popover (2.2). Covered.
- Search-index budget (~15/~8 MB, tf-idf, fill budget): Phase 4.2/4.3 size tests. Covered.
- Drop native tag pages: Phase 6.2. Covered.

**Known risks / verify-first items (call out at execution):**
1. Fork patches live in gitignored `.quartz/` restored from `quartz.lock.json` -- confirm the `gborghi/*` fork-maintenance flow (Tasks 4.4, 5.1) before editing, or patches vanish on `quartz plugin restore`.
2. Quartz OFM/crawl-links handling of `path#frag` wikilinks (Task 3.3) -- verify a fragment wikilink renders as expected before mass-applying.
3. `contentIndex.json` is consumed by search AND graph AND popovers -- Task 4.2 makes it per-atom; confirm popovers (which fetch page HTML, not the index) are unaffected, and that the graph's expectations of the index shape are met (Task 5.1).
4. Search index resolves per-exercise (`id = prove/<stem>#<atomId>`, clean `slug` + `frag`) and is tf-idf-ranked. The shipped tiers are threshold projections of `atoms_fullindex.json` (which keeps ALL terms + `df`/`N`), so 15 MB headroom is guaranteed; verify the threshold binary-search direction against a real run at the Phase 4 gate (lower threshold must GROW the file).
