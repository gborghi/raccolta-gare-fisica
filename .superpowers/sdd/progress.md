# SDD progress: SPA per-prova accorpamento

Plan: docs/superpowers/plans/2026-07-18-spa-per-prova-accorpamento.md
Branch: spa-per-prova
Cadence: subagents write code+tests; controller runs heavy preprocess/build at phase gates. Dropbox stopped by user (restore next day).
Search fork: post-restore patch script scripts/patch-search-fork.mjs (upstream, not gborghi).

## Baseline (Phase 0)
- content files: ~26,956 ; prove md: 18,383 (atoms 16,888 + parents 1,490)
- public files: 27,580 ; target after collapse: <20,000 (expect ~10,700)

## Task ledger
(pending)

## Task ledger (live)
- Phase 1 (Task 1.1+1.2): container emission + qlang mergeSiblings. commits ddbd3a08..7ff6730f6. Review: SPEC ok, QUALITY approved. Fix pass 1 DONE (commit 1ed9306e2). Phase 1 COMPLETE (77b79d5e7..1ed9306e2, review clean).

### Deferred (revisit in cleanup / later phase)
- PERF: prove atoms processed twice (classic loop reads for quesiti/kw, container pass re-reads). Non-blocking; needs body-cache-by-stem to collapse. Preprocess is minutes-heavy -> address if phase-gate run is slow.
- Phase 4 MUST build atomMeta{title,tags} keyed by `prove/<stem>#<atomId>` in the container pass (atomRecords was NOT built in Phase 1; re-derivable from proveAtoms + vault). Search-index (Task 4.1) depends on it.
- Minor: redundant re-slug stemSlug=sluggify(stem) (harmless); atomId case-collision guard (negligible, frozen naming).

### Heavy-run TODO at Phase-1 gate (controller)
- run `RGF_BUILD=<scratch-or-inplace> node preprocess.mjs` then `node --test test/spa-emit.test.mjs`; assert container pages exist, ~1490 prove md, markers present, no per-atom pages.

- Phase 2 (reader client): atomRouter.inline.ts (257L, flat per-prova), qlang kept authoritative via new `atomrender` event, addCleanup() for listeners (leak fix), popover anchor id on marker. Wired via componentResources.ts (v5). commits 5655dec72..60d5fea95. Review: SPEC ok, QUALITY approved. tsc 8->8 (verified by reviewer).
  Minor (for final review): (1) body.reading-page class has no CSS consumer in physics -> add comment; (2) addCleanup?.() optional-chaining inconsistent w/ globals.d.ts + popover.inline.ts bare call; (3) atomRouter header comment omits id="qNN".
  GATE ⚠️: double-TOC overlap (.ar-toc center vs right-sidebar heading TOC on prove pages) — eyeball at Phase 7 Playwright.
  INTEGRATION NOTE for Phase 3: atomFrag currently populated in CONTAINER pass (after main loop). quesiti/kw href build is IN main loop -> must populate atomFrag in GROUPING pass (before main loop) for Task 3.1.

- Phase 3 (repoint href): atomFrag moved to grouping pass (pre-main-loop); quesiti/kw + pagedList + GLOBAL transform() wikilink rewrite -> prove/<stem>#<atomId>; pagedList.inline.ts kw lookup un-stripped. commits e437b5515..8e7b8b24c + fix 38e906b0. Review: SPEC ok, QUALITY approved after fix. Casing verified consistent (stem sluggified, atomId lowercased).
  DECISION: pre-existing #subheading on an atom-target wikilink is INTENTIONALLY dropped (fragment now selects the atom; atomRouter shows whole atom incl. that heading). Documented at both rewrite sites.
  tsc 8->6 (pre-existing dedup variance, zero new).
  INTEGRATION for Phase 4: container pass must populate atomMeta{title,tags} keyed by `prove/<stemSlug>#<atomId>`; need a keywordCounts() variant (physics keywords() at :76 dedupes via Set -> loses counts, tf-idf needs counts).

### Phase 4 split
- 4A = Tasks 4.1 (full offline index atoms_fullindex.json) + 4.2/4.3 (projection scripts make-search-index.mjs -> contentIndex.json ~15MB + contentIndexMobile.json ~8MB). Design: full index keeps ALL terms + tfidf + df/N (offline, NOT shipped); projections pick terms by global tfidf threshold to fill budget. Per-exercise (id=prove/<stem>#<atomId>), tf-idf.
- 4B = Task 4.4 (scripts/patch-search-fork.mjs idempotent post-restore patch + tiered fetch mobile/desktop + fragment href in .quartz search fork).
