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
