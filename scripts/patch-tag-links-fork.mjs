#!/usr/bin/env node
// Idempotent post-restore patch that repoints every "tags/<tag>" link
// emitted by upstream quartz-community plugin forks to "/cerca" (Task 6.2).
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
// "tags/<tag>" 404s. Four render paths emit such links:
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
//
// Repoint target: bare "/cerca" (NOT a pre-selected "/cerca?tag=..."). The
// physics quesiti.json facets (topics/methods/skills/objects/cluster) are
// keyed by their DISPLAY name (e.g. "Conservation of Energy", built from
// the vault's **Topic:**/**Metodi:**/... wikilink text -- see metaLinks()
// in preprocess.mjs), while a rendered tag string is the raw Obsidian vault
// tag slug (e.g. "topic/conservation-of-energy", "argomento/meccanica" --
// see the tags: frontmatter block on any content/prove/*.md atom). These
// are two different namespaces with no shipped slug->display-name map on
// the client, so a tag string cannot be reliably turned into a
// "<facetKey>::<value>" cerca token without guessing (some tag families,
// e.g. difficolta/tipo-gara, DO map 1:1 via tagVal(); others, e.g.
// topic/argomento/object, do not -- cerca's facet values are the
// human-readable wikilink text, not the tag slug). Per the phase brief,
// wiring a pre-select into cerca's filter state is not something to guess
// at statically -- bare /cerca (tags stay clickable, open the faceted
// search tool, user picks the tag) is the verifiable, correct-by-inspection
// choice. Flagged as reduced parity in the phase report.
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
      `${SENTINEL}\n          // Task 6.2: native tag pages disabled -- /cerca is the per-tag tool.\n          const linkDest = resolveRelative(fileData.slug as string, "cerca");`,
  },
  {
    name: "note-properties NoteProperties.tsx",
    file: ".quartz/plugins/note-properties/src/components/NoteProperties.tsx",
    anchor: "const href = resolveRelative(ctx.slug, `tags/${tag}`);",
    replacement:
      `${SENTINEL}\n    // Task 6.2: native tag pages disabled -- /cerca is the per-tag tool.\n    const href = resolveRelative(ctx.slug, "cerca");`,
  },
  {
    name: "folder-page PageList.tsx",
    file: ".quartz/plugins/folder-page/src/components/PageList.tsx",
    anchor:
      `href={resolveRelative(\n                        fileSlug ?? ("" as FullSlug),\n                        \`tags/\${tag}\` as unknown as FullSlug,\n                      )}`,
    replacement:
      `${SENTINEL}\n                      href={resolveRelative(\n                        fileSlug ?? ("" as FullSlug),\n                        "cerca" as unknown as FullSlug,\n                      )}`,
  },
  {
    name: "obsidian-flavored-markdown transformer.ts (mdast tag node)",
    file: ".quartz/plugins/obsidian-flavored-markdown/src/transformer.ts",
    anchor: "url: base + `/tags/${tag}`,",
    replacement: `${SENTINEL} url: base + "/cerca",`,
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
      ' return `<a href="${base}/cerca" class="tag-link">${slug}</a>`;',
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
