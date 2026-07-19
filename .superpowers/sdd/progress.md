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

- Phase 4A (search index): keywordCounts() variant, atomMeta/counts in container pass, atoms_fullindex.json {N,df,atoms} offline; scripts/make-search-index.mjs projects contentIndex.json(15MB)+contentIndexMobile.json(8MB) by global tfidf threshold binary-search. commits fbe29214c..77f9a63ef + fix d8129559. Review: SPEC ok, QUALITY approved after fix (RGF_BUILD paths, mkdir guard, serialize-once, maxScore -Infinity). Threshold direction verified via synthetic fixture running real script.
  GATE ⚠️: real desktop size must land 13-16MB; if <13MB the 300-terms/atom cap in Task 4.1 is starving fill -> raise cap. mobile 6.5-9MB & < desktop.
- Phase 4B = Task 4.4 (search fork patch) NEXT.

- Phase 4B (Task 4.4 search fork patch): scripts/patch-search-fork.mjs (idempotent, CRLF-aware, 4-anchor drift-guard). Edits: tiered mobile/desktop fetch; fragment href at :324; THIRD edit formatForDisplay (was slug=id-with-#, no frag -> would break path; now slug=data.slug clean, frag=data.frag, all 3 branches). 857 (encrypted-pages) + 116 (preview-fetch) traced + left. commit 0f56eed4a..9a6a2ecd0. Review: SPEC ok, QUALITY approved.
  GATE ⚠️ (Important, non-blocking, needs Playwright): itemTile.id = item.slug now = CLEAN slug -> two atoms of same prova share a DOM id (invalid HTML, NO functional break confirmed). CAUTION: itemTile.id ALSO feeds updatePreview->fetchContent as the preview slug, so reviewer's "use numeric id" fix would BREAK preview. Correct fix = decouple: add itemTile.dataset.slug=clean-slug, updatePreview reads dataset.slug||id, set itemTile.id to unique (atom-id key). Apply in patch-search-fork.mjs + Playwright-verify preview at Phase 7 gate.
  Phase 7 wiring: run `node scripts/patch-search-fork.mjs` AFTER plugin restore, BEFORE quartz build.

- Phase 5 (graph per-atom): preprocess atomLinks() (post-transform wikilinks -> concept slugs + sibling-atom frag ids, dedup/cap20, no term pollution); projection carries links; scripts/patch-graph-fork.mjs (idempotent, nodeHref from clean slug+frag, drag :551 + click :569). simplifySlug verified # safe. commits e0ee75971..88ef6b124. Review: SPEC ok, QUALITY approved (2 Minor harmless).
  GATE ⚠️: (1) runtime graph render/click/scroll Playwright; (2) global graph already capped ~50 concept nodes (custom code) -> per-atom mainly in LOCAL ego-graph; (3) "current node" highlight can't match atom (slug-from-URL ignores hash) — pre-existing, ticket if desired; (4) size re-verify after merge.
- Phase 5.5 ADDED (gap from Phase 5): make-search-index.mjs OVERWRITES contentIndex -> concept/soluzioni pages dropped from shipped index = search regression + missing graph concept nodes/edges. Fix = MERGE native non-container entries + atom entries. NEXT.

- Phase 5.5 (index merge): make-search-index.mjs reads native contentIndex BEFORE overwrite, keeps concepts/soluzioni/home/cerca (snippet 300, no frag), drops prove containers, atomBudget=budget-keptNativeSize, merges (disjoint keys). Fixture-smoke verified (concepts kept, containers dropped, oversized-native guard fires). commit 76fbac75. Reviewed by controller (focused diff + fixture). Complete.
  GATE ⚠️: real merged sizes <=15/8MB; concept search hits + atom->concept edges render (Playwright).
- Phase 6 = 6.1 (404 redirect old atom URLs) + 6.2 (disable native tag-page plugin + repoint tag-list links -> /cerca pre-filtered) + 6.3 (parity audit, gate). NEXT.

Task 6 (6.1 404 + 6.2 tag-page disable): commits c0998cb74, 9eb4d255d. Review found 2 CRITICAL: (#1) 404 redirect clobbered by NotFoundPageType -> never ships; (#2) graph tag-nodes = 5th tags/<x> emitter -> hard 404 with tag-page off. 6.3 parity audit deferred to Phase 7 live gate.
User decision: tag-click must PRE-FILTER /cerca (true parity), not bare /cerca.
Task 6.4 (BASE 9eb4d255d): dispatched (sonnet, agent a71dde4c3d5ffe936). Fixes both Criticals + implements tagmap.json + cerca #tag= pre-select + repoint all 5 tag emitters (4 text links + graph nodes) to /cerca#tag=<slug>. Phase 7 cp step updated to copy tagmap.json.

Task 6.4: complete (commits 35f304e2b, 48008e250, 9677e7cb4; review clean — Spec ✅ + Quality Approved). Fixed both Phase-6 Criticals (404 in-repo component; graph tag-node repoint) + true tag-parity pre-filter. Minors (non-blocking, for final review): redundant applyHashTag call on nav (idempotent); one ° in a preprocess.mjs comment (out of ASCII-body scope). Phase 6 COMPLETE.

Phase 7 build gate IN PROGRESS:
- Dropbox: content/_attachments (8131 assets) locked rm each run; flag-ignore lost the race -> user authorized closing Dropbox (stopped, 0 proc). RESTART Dropbox after deploy.
- preprocess OK: 1939 md, 16888 quesiti, kw 8.3MB, full tf-idf 38.8MB offline. tagmap 210 slugs.
- Follow-up commit 3b85b7357: buildTagMap majority-vote (0 contested on real vault; was 44 last-write-wins collisions). Flag for final review.
- quartz build: running (bg bnoibmuxs, 16GB heap).
- NEXT after build: copy staticgen (incl tagmap.json) -> public/static; make-search-index; shrink_build; .nojekyll; index-size gate; file-count <20k gate; per-file <25M gate; commit content+staticgen; deploy gh-pages via worktree; live Playwright parity audit.

DEPLOY DONE (gh-pages e087c7954..d1837e024, commit d1837e024): 10378 files (17205 deletions = old atom pages collapsed). Live at https://gborghi.github.io/raccolta-gare-fisica/.
Build-gate commits: 3b85b7357 (majority-vote tagmap), 6181291fc (mobile drops links + make-search-index re-runnable + shrink_build no-contentIndex).
Gates PASS: 10378<20k files, no file>25M, desktop 15.0MB, mobile 7.98MB, index-size tests 3/3.
Dropbox: STILL STOPPED — remind user to restart after audit.
NEXT: live Playwright parity audit (Task 7.3), then commit content/staticgen bulk, then final whole-branch review + finishing-a-development-branch.

BUILD-GATE AUDIT (v1 deploy d1837e024) found:
- CRITICAL: fork patches (search/graph/tag-links) never reached build -- forks main=dist/index.js, quartz build imports compiled dist/ not patched src/. Tag links stayed tags/<x> (404), no mobile tier. FIX: scripts/rebuild-forks.mjs (tsup recompile), commit 7e257e366. Wired into plan Phase 7.
- CRITICAL: tagmap keys mixed-case (paese/Canada) but Quartz tag hrefs lowercase (paese/canada) -> 84 keys never matched -> no pre-select. FIX: buildTagMap lowercases keys (preprocess.mjs). 210 slugs, 0 mixed-case now.
- Reader (atomRouter) VERIFIED WORKING live: TOC/hash/prev-next/crumb all correct (1994e cold-load fail was one-off artifact).
- Build OOM-killed x2 in background (16GB heap + browser + 8.5GB orphan on 32GB box). FIX: close browser, kill orphans, heap 12288. build4 exit 0.
DEPLOY v2 (62bc73dc0): recompiled forks + lowercase tagmap. Gates PASS (10378 files, desktop 15MB, mobile 8MB). Awaiting GH Pages propagation -> re-audit.

DEPLOY v2 LIVE + AUDIT PASS (62bc73dc0 + tagmap fix 52355ba27):
- Reader SPA: mounted, 23 TOC, hash deep-link, prev/next, crumb -- OK
- Search: per-atom #frag results + concept pages (merge) -- OK ("energy"=8 hits)
- Tag pre-filter: /cerca#tag=cluster/meccanica -> Area:Meccanica pre-selected, 8311 filtered, per-atom rows -- OK
- 404 redirect: prove/1994e__q03 -> #q03, reader lands on q03 -- OK
- Mobile index: 200, 17344 entries, no links -- OK
- Graph: atom nodes w/ slug/frag, atom->concept edges -- OK
- Zero old tags/ hrefs
Dropbox restarted. REMAINING: commit content/staticgen bulk (optional), final whole-branch review, finishing-a-development-branch.

FINAL REVIEW (opus): READY TO MERGE, 0 Critical. Fixes applied (commit 7d0d87121): qlang per-atom re-scope (Important #1), cerca defensive lowercase (Minor). Deferred/documented: search hover-preview shows container not atom (Important #2, non-breaking); latent frozen-naming guards; test-guard uniformity.
DEPLOY v3 (c9cb8d2c6): qlang fix + cerca. Gates PASS (10378, 15/8MB). Awaiting propagation.
NEXT: complete site audit (user request) -> merge branch spa-per-prova -> main (finishing-a-development-branch).

FULL-SITE AUDIT (v3) found CRITICAL: concept-page paged-list atom links doubled 'prove/prove/<stem>#..' -> 404 on EVERY concept->quesito click (117843 links). Cause: extractConceptList runs post-transform() so wikilinks already `prove/<stem>#atomId`; dir==null branch prepended another prove/. Fix (commit): hbase uses tslug as-is when it starts with prove/. cl regenerated: 0 double-prove. DEPLOY v4 (79d45fbfe): cl-only copy, no rebuild. Awaiting propagation -> resume audit.
Dropbox STOPPED again (preprocess needed it) -- restart at end.
