# SPA per-prova accorpamento -- design

**Date:** 2026-07-18
**Site:** `site-fisica/` (Quartz v5, `raccolta-gare-fisica`)
**Driver:** fit Cloudflare Pages free file-count cap (20,000 files) while keeping
per-atom search and tagging identical to today.

## Problem

The built site is **27,580 files** (`public/`), of which **16,888** are
per-atom pages under `prove/` (each `<stem>__q<NN>.md`). Cloudflare Pages
caps a deployment at **20,000 files** on every plan (free and paid alike on
Pages; Workers Static Assets raises it to 100k only on the paid $5/mo plan).
File sizes are already fine (largest 13.5 MB < 25 MiB cap). The blocker is
purely the file count. Bandwidth on Cloudflare is free and unmetered on all
plans, so egress is never the constraint.

## Goal

Collapse the 16,888 atom pages into **~1,490 per-prova SPA pages** (one page
per exam edition, ~11 atoms each). Result: `public/` ~27,580 -> ~10,700 files,
comfortably under 20k. Every atom stays:

- individually **searchable** (search bar resolves to the single exercise, as now),
- individually **tagged** (faceted `/cerca` filters per atom, as now),
- individually **deep-linkable** at `prove/<stem>#q<NN>`,
- a **node in the knowledge graph** (href points to the fragment).

This mirrors the proven `SPA=1` mode already shipping in the sibling project
`SubjectBrain/English/quartz-eng-lit` (per-work bundling); we adapt it to
per-prova bundling for physics.

## Hard constraint: behavioral parity

This is an **internal architecture change only**. The on-site navigation
experience MUST NOT change for a visitor. Everything a user can see or do
behaves identically to today:

- clicking an atom (from search, `/cerca`, a concept list, the graph, a
  wikilink, a breadcrumb) lands on the same content, looking the same;
- link popovers/previews of an atom still show that atom's content;
- breadcrumbs, TOC, back/forward, and URLs feel the same;
- search bar and `/cerca` return the same per-atom results as now.

The ONLY permitted change is under the hood: an atom is served as a
`prove/<stem>#q<NN>` section of a per-prova SPA page instead of its own page.
Any user-visible regression (a popover that no longer works, a search hit that
lands on the wrong spot, a broken breadcrumb) is a failure of this migration.

## Decisions (locked)

| # | Decision | Choice |
|---|----------|--------|
| 1 | Bundling granularity | **Per-prova** (1 exam = 1 SPA page) |
| 2 | Rollout | **SPA everywhere, abandon GitHub Pages** (single layout) |
| 3 | Native Quartz `tags/*.html` (the 12 MB pages) | **Drop** -- `/cerca` faceted is the real per-tag tool and stays per-atom |
| 4 | Mobile search-index switch | **Auto** by viewport / connection |
| 5 | Graph | **Keep per-atom nodes**, href -> fragment |
| 6 | Search-index size budget | **~15 MB PC / ~8 MB mobile**, tf-idf packed to FILL the budget (quality-first, do not undershoot) |
| 7 | Host / deploy | Build locally (Node heap 16 GB), `wrangler pages deploy public` (Direct Upload, bypasses CF build RAM/time limits) |

## Architecture

### 1. Per-prova page model

`preprocess.mjs` (SPA restructure, now unconditional) emits **one markdown page
per prova stem** (`prove/1994e.md`). Each atom body is concatenated behind an
inline marker:

```html
<span class="atom-split" data-atom="q01" data-tags="..."></span>
```

- Full atom text stays in the emitted HTML -> SEO, search scraping, and a
  no-JS fallback all keep working (the whole prova reads as one long page).
- A client inline script (ported/adapted from English `atomRouter` + `qlang`)
  partitions the article DOM at the markers, renders a per-atom TOC, and shows
  one atom-section at a time.
- `prove/<stem>#q<NN>` scrolls to / activates the target atom section.

### 2. Tagging per-atom (unchanged UX)

The concept/aggregator pages (objects, methods, skills, topics, clusters)
**already** list atoms via the custom `staticgen/cl/*.json` paged-list system
(`pagedList.inline.ts`), NOT via Quartz-native tag pages. The faceted `/cerca`
already uses `quesiti.json` (tags) + `quesiti_kw.json` (keywords). So per-atom
tagging is already JSON-driven and href-based.

**Change:** repoint every atom href from `/prove/<stem>__q<NN>/` to
`/prove/<stem>#q<NN>` in the JSON generation (paged lists, quesiti index,
keyword index). Each atom keeps its full tag set; `/cerca` filters exactly as
today. Native `tags/*.html` are dropped (decision #3).

### 3. Search bar index (new size budget)

The top search bar needs a per-atom index (atoms are no longer pages, so the
default page-derived index would miss them). Build a **dedicated per-atom
search index** with fragment hrefs, tf-idf packed, in **two tiers**:

- `search-index.json` (PC): filled to **~15 MB**. Per atom: title + tags +
  the top-K terms by tf*idf + fragment href.
- `search-index.mobile.json`: filled to **~8 MB**. Same shape, higher tf-idf
  threshold / smaller K so the file lands near 8 MB.

**Packing rule:** compute idf across all ~16,888 atoms; per atom keep terms in
descending tf*idf order; grow K until the global file size reaches the budget.
Drop stopwords and very-high-df terms first. **Fill the budget** -- the index
should land close to 15 MB / 8 MB, not far under, or recall degrades.

**Tier selection:** client picks the mobile tier on narrow viewport or slow
connection (`navigator.connection`), else the PC tier; flexsearch loads the
chosen file. Both tiers are < 25 MiB so both satisfy the CF per-file cap.

### 4. Deep-link / redirect compatibility

Old per-atom URLs (`/prove/<stem>__q<NN>/`) no longer exist as pages. A single
`404.md` carries a client rewrite: any `…/prove/<stem>__q<NN>/` path ->
`…/prove/<stem>#q<NN>`. Preserves bookmarks, external links, and search-engine
results. Internal wikilinks atom->atom are repointed to fragments during
preprocess (adapt English `slugToFrag`).

### 5. Graph

Atoms stay graph nodes (decision #5). The `gborghi/graph` fork consumes a nodes
index; inject the fragment href per atom node so a click lands on
`prove/<stem>#q<NN>`. Node/edge topology is otherwise unchanged.

### 6. Build & deploy

- Build locally: `NODE_OPTIONS="--max-old-space-size=16384" npx quartz build`
  (16 GB heap required; CF's build container cannot supply this, and the build
  runs 15-35 min > CF's ~20 min build wall -- so CF git-integration build is
  out).
- Post-build: existing `staticgen` copy step + `shrink_build.mjs` + tf-idf
  index generation run in / after preprocess.
- Deploy via **Direct Upload**: `wrangler pages deploy public`. Direct Upload
  still enforces the 20k file cap, which the accorpamento clears (~10,700).
- GitHub Pages is abandoned (decision #2); the `gh-pages` publish flow is
  retired.

## Components (isolation view)

| Unit | Responsibility | Depends on |
|------|----------------|------------|
| `preprocess.mjs` SPA restructure | emit per-prova pages w/ atom-split markers; repoint hrefs (paged lists, quesiti, kw, wikilinks) to fragments | vault `prove/`, frozen atom naming `<stem>__q<NN>` |
| tf-idf search-index builder | emit `search-index.json` (~15 MB) + `.mobile.json` (~8 MB), packed to budget | atom bodies, global idf |
| `atomRouter` inline (adapt from English) | DOM-partition prova page into atom sections; TOC; fragment activation | atom-split markers |
| search tier selector (client) | choose PC vs mobile index by viewport/connection; feed flexsearch | two index files |
| `404.md` rewrite | old atom URL -> fragment | url shape |
| graph nodes builder | per-atom node href -> fragment | `gborghi/graph` fork |

## Out of scope

- No changes to the Obsidian vault (source of truth) -- accorpamento is a
  build-time transform only.
- No content re-classification; tags/atoms stay as authored.
- No move to Workers Static Assets or R2 (not needed once under 20k on Pages).

## Success criteria

1. `public/` < 20,000 files after build.
2. Both search-index tiers exist, each near its budget (~15 MB / ~8 MB) and < 25 MiB.
3. Search bar returns per-atom hits that open the exact exercise (`#q<NN>`).
4. `/cerca` faceted filtering behaves identically to today, per atom.
5. Every atom deep-linkable and reachable from the graph via fragment href.
6. Old per-atom URLs redirect to their fragment.
7. `wrangler pages deploy public` succeeds (no file-count rejection).
8. **Behavioral parity**: a side-by-side click-through (search hit, `/cerca`
   filter, concept list, graph node, wikilink, popover, breadcrumb) is
   indistinguishable from the current site to a visitor.
