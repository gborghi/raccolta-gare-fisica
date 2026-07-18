#!/usr/bin/env node
// Idempotent post-restore patch that repoints every "tags/<tag>" link
// emitted by upstream quartz-community plugin forks to a pre-filtered
// "/cerca#tag=<slug>" (Task 6.2, extended by Task 6.4 Part C).
//
// .quartz/ is gitignored and is restored fresh from quartz.lock.json on
// every `npx quartz plugin restore`, so direct edits to files under
// .quartz/plugins/... would vanish the next time plugins are restored.
// This script re-applies the SPA tag-link repoint after every restore --
// run it AFTER `quartz plugin restore` and BEFORE `npx quartz build`.
// Mirrors scripts/patch-search-fork.mjs / scripts/patch-graph-fork.mjs (same
// sentinel / drift-guard / CRLF-aware structure -- see those files' headers
// for the pattern).
//
// Background (Task 6.2): the native tag-page plugin is disabled in
// quartz.config.yaml (the aggregate tags/*.html pages balloon to ~12MB and
// duplicate /cerca, the real per-tag/faceted tool -- per-atom, not
// per-page). With tag-page gone, any in-site link still pointing at
// "tags/<tag>" 404s. Five render paths emit such links:
//   1. tag-list plugin (beforeBody, enabled) -- TagList.tsx, one <a> per
//      frontmatter tag.
//   2. note-properties plugin (beforeBody, enabled, "tags" is an included
//      property) -- NoteProperties.tsx's renderTagList().
//   3. folder-page plugin (enabled) -- PageList.tsx, tags shown per child
//      page in a folder listing.
//   4. obsidian-flavored-markdown plugin (enabled, parseTags defaults true)
//      -- transformer.ts rewrites inline "#tag" markdown syntax into a
//      tags/<slug> link (both the mdast "tag"-node branch and the
//      enableInHtmlEmbed regex branch; the latter is inert under this
//      site's config (enableInHtmlEmbed: false) but is patched too so the
//      drift guard covers the whole file consistently).
//   5. graph plugin (Task 5.1's atom-graph fork) -- graph.inline.ts's
//      nodeHref() falls back to the raw tag node id ("tags/<tag>") for tag
//      nodes (no content-index entry), and the click/drag handlers navigate
//      there directly -- a hard 404 with tag-page disabled (Task 6.4
//      Critical #2).
//
// Repoint target (Task 6.4 Part C): "/cerca#tag=" + encodeURIComponent(slug)
// -- NOT bare "/cerca" anymore. preprocess.mjs's buildTagMap() (Part B) now
// ships staticgen/tagmap.json, a vault-tag-slug -> cerca-facet-token map
// built by co-occurrence (the two namespaces -- raw tag slug vs facet
// display value -- still don't convert into each other by client-side
// slugify, see preprocess.mjs's buildTagMap() header). cerca.inline.ts reads
// the #tag=<slug> fragment, looks it up in tagmap.json, and pre-selects the
// matching facet chip before first render (Part C1). Each of the five sites
// below already has the raw frontmatter tag slug in scope (the loop/param
// variable feeding the old "tags/<tag>" href) -- this patch just appends the
// encoded slug as a URL fragment onto the same resolveRelative/resolveBasePath
// call used for the bare-/cerca Task 6.2 repoint. If a site's slug does not
// match tagmap.json (e.g. it was somehow computed differently), the lookup
// on the cerca side simply misses and the page degrades to the bare
// unfiltered /cerca view -- the safe Task 6.2 fallback, not a dead link.
//
// Idempotent: guarded per-file by the SENTINEL comment (no-ops on a second
// run). Drift-guarded: validates every anchor across ALL not-yet-patched
// targets BEFORE writing any of them -- if any anchor is missing, exits 1
// without touching the filesystem (no partial patch across the file set).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const QUARTZ_ROOT = path.join(__dirname, "..");

const SENTINEL = "/* spa-tag-link-patch */";

const TARGETS = [
  {
    name: "tag-list TagList.tsx",
    file: ".quartz/plugins/tag-list/src/components/TagList.tsx",
    anchor:
      'const linkDest = resolveRelative(fileData.slug as string, `tags/${tag}`);',
    replacement:
      `${SENTINEL}\n          // Task 6.4: pre-select this tag on /cerca (falls back to the bare\n          // Task 6.2 /cerca view if tagmap.json has no entry for it).\n          const linkDest = resolveRelative(fileData.slug as string, "cerca") + "#tag=" + encodeURIComponent(tag);`,
  },
  {
    name: "note-properties NoteProperties.tsx",
    file: ".quartz/plugins/note-properties/src/components/NoteProperties.tsx",
    anchor: "const href = resolveRelative(ctx.slug, `tags/${tag}`);",
    replacement:
      `${SENTINEL}\n    // Task 6.4: pre-select this tag on /cerca (falls back to the bare\n    // Task 6.2 /cerca view if tagmap.json has no entry for it).\n    const href = resolveRelative(ctx.slug, "cerca") + "#tag=" + encodeURIComponent(tag);`,
  },
  {
    name: "folder-page PageList.tsx",
    file: ".quartz/plugins/folder-page/src/components/PageList.tsx",
    anchor:
      `href={resolveRelative(\n                        fileSlug ?? ("" as FullSlug),\n                        \`tags/\${tag}\` as unknown as FullSlug,\n                      )}`,
    replacement:
      `${SENTINEL}\n                      href={\n                        resolveRelative(\n                          fileSlug ?? ("" as FullSlug),\n                          "cerca" as unknown as FullSlug,\n                        ) + "#tag=" + encodeURIComponent(tag)\n                      }`,
  },
  {
    name: "obsidian-flavored-markdown transformer.ts (mdast tag node)",
    file: ".quartz/plugins/obsidian-flavored-markdown/src/transformer.ts",
    anchor: "url: base + `/tags/${tag}`,",
    replacement: `${SENTINEL} url: base + "/cerca#tag=" + encodeURIComponent(tag),`,
  },
  {
    name: "obsidian-flavored-markdown transformer.ts (inline #tag regex, enableInHtmlEmbed)",
    file: ".quartz/plugins/obsidian-flavored-markdown/src/transformer.ts",
    anchor:
      'return `<a href="${base}/tags/${slug}" class="tag-link">${slug}</a>`;',
    // Built with string concatenation (not a template literal) so the
    // ${base}/${slug} below stay LITERAL characters -- they are the source
    // file's own template-literal placeholders, interpolated by that file
    // at its own runtime, not by this patch script.
    replacement:
      SENTINEL +
      ' return `<a href="${base}/cerca#tag=${encodeURIComponent(slug)}" class="tag-link">${slug}</a>`;',
  },
  {
    name: "graph.inline.ts nodeHref (tag nodes, Critical #2)",
    file: ".quartz/plugins/graph/src/components/scripts/graph.inline.ts",
    anchor:
      '        return resolveBasePath(slug) + (frag ? "#" + frag : "");',
    // Tag nodes have no content-index `data` entry, so nodeHref()'s `slug`
    // falls back to the raw node id, which for a tag node is
    // simplifySlug("tags/" + tag) -- i.e. "tags/<the-same-frontmatter-slug>"
    // (verified: simplifySlug only normalizes the "tags/" prefix segment, it
    // does not touch the tag's own internal "/"-separated slug). Route those
    // through the same /cerca#tag= pre-select as every other tag-link
    // emitter, base-url-aware via the fork's own resolveBasePath().
    replacement:
      `        ${SENTINEL}\n        if (slug.indexOf("tags/") === 0) {\n          return resolveBasePath("cerca") + "#tag=" + encodeURIComponent(slug.slice(5));\n        }\n        return resolveBasePath(slug) + (frag ? "#" + frag : "");`,
  },
];

function fail(msg) {
  console.error(`[patch-tag-links-fork] ${msg}`);
  process.exit(1);
}

function loadTarget(spec) {
  const abs = path.join(QUARTZ_ROOT, spec.file);
  if (!fs.existsSync(abs)) {
    fail(
      `target not found: ${abs} (run "npx quartz plugin restore" / install-plugins first)`,
    );
  }
  const raw = fs.readFileSync(abs, "utf8");
  const hadCRLF = raw.includes("\r\n");
  const src = hadCRLF ? raw.replace(/\r\n/g, "\n") : raw;
  return { abs, hadCRLF, src };
}

function main() {
  // Multiple TARGETS entries can share the same file (transformer.ts has two
  // patch sites) -- group by absolute path so sentinel/anchor checks and the
  // final write operate on one in-memory copy per file.
  const byFile = new Map(); // abs -> { hadCRLF, src, specs: [] }
  for (const spec of TARGETS) {
    const loaded = loadTarget(spec);
    let entry = byFile.get(loaded.abs);
    if (!entry) {
      entry = { hadCRLF: loaded.hadCRLF, src: loaded.src, specs: [] };
      byFile.set(loaded.abs, entry);
    }
    entry.specs.push(spec);
  }

  // Pass 1: validate. Skip files that already carry the sentinel (idempotent
  // no-op). For files not yet patched, every anchor must be present verbatim
  // -- if any is missing, exit 1 without writing anything.
  let anyToPatch = false;
  for (const [abs, entry] of byFile) {
    if (entry.src.includes(SENTINEL)) {
      entry.alreadyPatched = true;
      continue;
    }
    anyToPatch = true;
    for (const spec of entry.specs) {
      if (!entry.src.includes(spec.anchor)) {
        fail(
          `anchor not found: "${spec.name}" in ${path.relative(QUARTZ_ROOT, abs)} -- ` +
            `upstream has drifted; re-verify by hand and update scripts/patch-tag-links-fork.mjs.`,
        );
      }
    }
  }

  if (!anyToPatch) {
    console.log("[patch-tag-links-fork] already patched (all targets)");
    process.exit(0);
  }

  // Pass 2: apply + write (only files that were not already patched).
  for (const [abs, entry] of byFile) {
    if (entry.alreadyPatched) continue;
    let src = entry.src;
    for (const spec of entry.specs) {
      src = src.replace(spec.anchor, spec.replacement);
    }
    const out = entry.hadCRLF ? src.replace(/\n/g, "\r\n") : src;
    fs.writeFileSync(abs, out);
    console.log(
      `[patch-tag-links-fork] applied: ${path.relative(QUARTZ_ROOT, abs)}`,
    );
  }
  console.log(
    "[patch-tag-links-fork] applied: tag links repointed to /cerca (native tag pages disabled)",
  );
}

main();
