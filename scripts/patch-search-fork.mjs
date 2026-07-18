#!/usr/bin/env node
// Idempotent post-restore patch for the upstream quartz-community/search plugin.
//
// .quartz/ is gitignored and is restored fresh from quartz.lock.json on every
// `npx quartz plugin restore` (a.k.a. install-plugins), so a direct edit to
// .quartz/plugins/search/src/components/scripts/search.inline.ts would vanish
// the next time plugins are restored. This script re-applies the SPA per-atom
// search edits after every restore -- run it AFTER `quartz plugin restore` and
// BEFORE `npx quartz build`.
//
// Edits applied (see task-4b-report.md for the full trace/decision writeup):
//   1. Tiered fetch: on small/coarse-pointer screens, load
//      contentIndexMobile.json instead of the desktop contentIndex.json
//      (which normally arrives via the global `fetchData`).
//   2. formatForDisplay projection: the flexsearch-hit -> display-item mapper
//      dropped the per-atom `frag` field entirely, and sourced `slug` from the
//      outer atom-id map key (which embeds "#atomId") instead of the record's
//      own clean `.slug`. Now it prefers the record's clean slug and surfaces
//      `.frag` so the href builder can use it.
//   3. Result-tile href: append the atom fragment, so a hit opens
//      prove/<stem>#<atomId> instead of just prove/<stem>.
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
  ".quartz/plugins/search/src/components/scripts/search.inline.ts",
);

const SENTINEL = "/* spa-atom-patch */";

const IMPORT_ANCHOR = `} from "@quartz-community/utils";`;

const FETCH_ANCHOR = `async function fetchContentIndex(): Promise<Record<string, Item>> {
  const data = await fetchData;
  return data as unknown as Record<string, Item>;
}`;

const FETCH_REPLACEMENT = `async function fetchContentIndex(): Promise<Record<string, Item>> {
  const small =
    matchMedia("(max-width: 800px)").matches || matchMedia("(pointer: coarse)").matches;
  if (small) {
    const bodySlug = document.body.dataset.slug || "";
    const prefix = "../".repeat((bodySlug.match(/\\//g) || []).length);
    try {
      const r = await fetch(prefix + "static/contentIndexMobile.json");
      if (r.ok) return (await r.json()) as unknown as Record<string, Item>;
    } catch {
      // fall through to the desktop index
    }
  }
  const data = await fetchData;
  return data as unknown as Record<string, Item>;
}`;

const FORMAT_ANCHOR = `function formatForDisplay(term: string, id: number): any {
  const slug = idDataMap[id];
  if (!slug || !contentData) {
    return {
      id,
      slug: "",
      title: "",
      content: "",
      tags: [],
    };
  }
  const data = contentData[slug];
  if (!data) {
    return {
      id,
      slug,
      title: "",
      content: "",
      tags: [],
    };
  }
  const parsed = parseSearchQuery(currentSearchTerm);
  return {
    id: id,
    slug: slug,
    title:
      parsed.tags.length > 0 && !parsed.query
        ? escapeHTML(data.title)
        : highlight(term, data.title || ""),
    content: highlight(term, data.content || "", true),
    tags: highlightTags(parsed.tags, data.tags),
  };
}`;

const FORMAT_REPLACEMENT = `function formatForDisplay(term: string, id: number): any {
  const slug = idDataMap[id];
  if (!slug || !contentData) {
    return {
      id,
      slug: "",
      frag: undefined,
      title: "",
      content: "",
      tags: [],
    };
  }
  const data = contentData[slug];
  if (!data) {
    return {
      id,
      slug,
      frag: undefined,
      title: "",
      content: "",
      tags: [],
    };
  }
  const parsed = parseSearchQuery(currentSearchTerm);
  return {
    id: id,
    slug: (data as any).slug || slug,
    frag: (data as any).frag,
    title:
      parsed.tags.length > 0 && !parsed.query
        ? escapeHTML(data.title)
        : highlight(term, data.title || ""),
    content: highlight(term, data.content || "", true),
    tags: highlightTags(parsed.tags, data.tags),
  };
}`;

const HREF_ANCHOR = `itemTile.href = resolveBasePath(item.slug);`;
const HREF_REPLACEMENT = `itemTile.href = resolveBasePath(item.slug) + (item.frag ? "#" + item.frag : "");`;

function fail(msg) {
  console.error(`[patch-search-fork] ${msg}`);
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
    console.log("[patch-search-fork] already patched");
    process.exit(0);
    return;
  }

  const anchors = [
    ["import block (sentinel insertion point)", IMPORT_ANCHOR],
    ["fetchContentIndex (tiered fetch target)", FETCH_ANCHOR],
    ["formatForDisplay (frag projection)", FORMAT_ANCHOR],
    ["result-tile href (fragment append)", HREF_ANCHOR],
  ];
  for (const [name, anchor] of anchors) {
    if (!src.includes(anchor)) {
      fail(
        `anchor not found: "${name}" -- upstream quartz-community/search has drifted; ` +
          `re-verify search.inline.ts by hand and update scripts/patch-search-fork.mjs.`,
      );
      return;
    }
  }

  src = src.replace(IMPORT_ANCHOR, `${IMPORT_ANCHOR}\n\n${SENTINEL}`);
  src = src.replace(FETCH_ANCHOR, FETCH_REPLACEMENT);
  src = src.replace(FORMAT_ANCHOR, FORMAT_REPLACEMENT);
  src = src.replace(HREF_ANCHOR, HREF_REPLACEMENT);

  const out = hadCRLF ? src.replace(/\n/g, "\r\n") : src;
  fs.writeFileSync(TARGET, out);
  console.log(
    "[patch-search-fork] applied: tiered mobile/desktop fetch + atom-fragment result links",
  );
}

main();
