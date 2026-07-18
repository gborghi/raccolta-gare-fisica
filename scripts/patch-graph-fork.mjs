#!/usr/bin/env node
// Idempotent post-restore patch for the upstream quartz-community/graph plugin.
//
// .quartz/ is gitignored and is restored fresh from quartz.lock.json on every
// `npx quartz plugin restore`, so a direct edit to
// .quartz/plugins/graph/src/components/scripts/graph.inline.ts would vanish the
// next time plugins are restored. This script re-applies the SPA per-atom graph
// edit after every restore -- run it AFTER `quartz plugin restore` and BEFORE
// `npx quartz build`. Mirrors scripts/patch-search-fork.mjs (same sentinel /
// drift-guard / CRLF-aware structure -- see that file's header for the pattern).
//
// Background (Task 5.1): since Task 4.2, contentIndex.json (fetched by this
// fork as `fetchData`) is projected per-atom, keyed by
// "prove/<stem>#<atomId>" (see scripts/make-search-index.mjs). Investigation of
// @quartz-community/utils' simplifySlug (node_modules/@quartz-community/utils/
// dist/path.js) confirmed it does NOT touch "#" -- it only trims a trailing
// "/index" suffix and a leading "/". So:
//   - Node IDENTITY: unaffected. `data.set(simplifySlug(key), ...)` and the
//     `nodes`/`neighbourhood` bookkeeping already key everything by the raw
//     "#"-bearing id, and two atoms of the same prova ("...#q01" vs "...#q02")
//     stay distinct keys -- no collapsing observed, no rekeying needed.
//   - Edge endpoints: `dest = simplifySlug(outgoing[i])` -- our atoms' `links[]`
//     entries are already "prove/<stem>#<atomId>" (sibling atoms) or a clean
//     concept slug (no "#"), so `validLinks.has(dest)` matches the same
//     (unmodified) node keys. Already consistent, no patch needed here either.
//   - Nav HREF: this is the one thing that must NOT feed the "#"-bearing id
//     through resolveBasePath() as a raw path segment on principle (project's
//     Global Constraint: slugs fed to the path resolver must stay clean; carry
//     the fragment separately and append it). resolveBasePath() happens not to
//     mangle "#" today, but relying on that is exactly the fragile pattern the
//     constraint forbids -- so this patch builds the href from the
//     content-index record's own clean `.slug` (+ `.frag` when present)
//     instead, matching the search-fork fix (patch-search-fork.mjs's HREF
//     patch). For non-atom entries `.slug` equals the record's own map key (see
//     .quartz/plugins/content-index/src/emitter.ts -- `slug` is always set to
//     the page's own slug, never a separate `.frag`), so `nodeHref()` reduces
//     to the exact old `resolveBasePath(id)` call for those nodes -- behavior
//     for concept pages/tags is byte-for-byte unchanged.
//
// Idempotent: guarded by the SENTINEL comment (no-ops on a second run).
// Drift-guarded: if ANY anchor string is not found verbatim, exits 1 without
// writing anything (no partial patch) -- upstream has moved, re-verify by hand.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TARGET = path.join(
  __dirname,
  "..",
  ".quartz/plugins/graph/src/components/scripts/graph.inline.ts",
);

const SENTINEL = "/* spa-atom-graph-patch */";

const DATA_ANCHOR = `var data;
      try {
        var dataRaw = await fetchData;
        data = new Map();
        for (var key in dataRaw) {
          data.set(simplifySlug(key), dataRaw[key]);
        }
      } catch (err) {
        console.error("[Graph] Error loading data:", err);
        return function () {};
      }`;

const DATA_REPLACEMENT = `${DATA_ANCHOR}

      ${SENTINEL}
      // SPA (Task 5.1): atom nodes are keyed "prove/<stem>#<atomId>" -- build
      // the click/drag nav target from the content-index record's own clean
      // \`.slug\` (+ \`.frag\` when present), never by feeding the "#"-bearing id
      // through resolveBasePath() as a raw path segment. Entries without a
      // \`.frag\` (concept pages, tags -- no entry at all) fall back to
      // \`node.id\`, so this resolves identically to the pre-Task-5.1
      // \`resolveBasePath(id)\` call for every non-atom node.
      function nodeHref(node) {
        var entry = data.get(node.id);
        var slug = (entry && entry.slug) || node.id;
        var frag = entry && entry.frag;
        return resolveBasePath(slug) + (frag ? "#" + frag : "");
      }`;

const DRAG_HREF_ANCHOR = `var target = resolveBasePath(event.subject.id);`;
const DRAG_HREF_REPLACEMENT = `var target = nodeHref(event.subject);`;

const CLICK_HREF_ANCHOR = `var target = resolveBasePath(nodeData.simulationData.id);`;
const CLICK_HREF_REPLACEMENT = `var target = nodeHref(nodeData.simulationData);`;

function fail(msg) {
  console.error(`[patch-graph-fork] ${msg}`);
  process.exit(1);
}

function main() {
  if (!fs.existsSync(TARGET)) {
    fail(
      `target not found: ${TARGET} (run "npx quartz plugin restore" / install-plugins first)`,
    );
    return;
  }

  const raw = fs.readFileSync(TARGET, "utf8");
  // The restored fork ships with CRLF line endings; normalize to LF for anchor
  // matching/replacement, then restore CRLF on write so the diff stays clean.
  const hadCRLF = raw.includes("\r\n");
  let src = hadCRLF ? raw.replace(/\r\n/g, "\n") : raw;

  if (src.includes(SENTINEL)) {
    console.log("[patch-graph-fork] already patched");
    process.exit(0);
    return;
  }

  const anchors = [
    ["data-loading block (nodeHref insertion point)", DATA_ANCHOR],
    ["drag-nav href (fragment-aware target)", DRAG_HREF_ANCHOR],
    ["click-nav href (fragment-aware target)", CLICK_HREF_ANCHOR],
  ];
  for (const [name, anchor] of anchors) {
    if (!src.includes(anchor)) {
      fail(
        `anchor not found: "${name}" -- upstream quartz-community/graph has drifted; ` +
          `re-verify graph.inline.ts by hand and update scripts/patch-graph-fork.mjs.`,
      );
      return;
    }
  }

  src = src.replace(DATA_ANCHOR, DATA_REPLACEMENT);
  src = src.replace(DRAG_HREF_ANCHOR, DRAG_HREF_REPLACEMENT);
  src = src.replace(CLICK_HREF_ANCHOR, CLICK_HREF_REPLACEMENT);

  const out = hadCRLF ? src.replace(/\n/g, "\r\n") : src;
  fs.writeFileSync(TARGET, out);
  console.log(
    "[patch-graph-fork] applied: fragment-aware node nav (prove/<stem>#<atomId>)",
  );
}

main();
