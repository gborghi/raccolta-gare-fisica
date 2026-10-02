#!/usr/bin/env node
// Idempotent post-restore patch: boolean queries in the quartz-community/search fork.
//
// .quartz/ is gitignored and restored fresh from quartz.lock.json, so this re-applies
// the edit after every `npx quartz plugin restore` (run AFTER restore, BEFORE build).
// It is invoked automatically at the end of scripts/patch-search-fork.mjs when that
// script exists, and can be run on its own.
//
//   1. copies quartz/components/scripts/searchBoolean.ts (parser/evaluator, unit-tested
//      by searchBoolean.test.ts) into the fork as src/components/scripts/rgfBoolean.ts
//   2. wires it into search.inline.ts: plain queries (no AND/OR/NOT, -word, quotes or
//      parentheses) keep the ORIGINAL code path byte-for-byte; boolean queries are
//      evaluated over full per-term result sets; malformed ones fall back to a plain
//      search on the query stripped of operator syntax; a collapsible Italian syntax
//      hint is mounted under the search input.
//      v2: `campo:valore` + bare-term metadata matches (static/searchMeta.json, built by
//      scripts/make-search-meta.mjs) and cross-language synonym expansion
//      (static/sinonimi.json); plain queries append synonym-only hits AFTER the
//      original results.
//   3. if this repo has NO scripts/rebuild-forks.mjs (which recompiles patched forks),
//      recompiles the search fork itself (`npm run build` -> dist/), because
//      `npx quartz build` imports the fork's pre-compiled dist/, not src/.
//      Set RGF_SKIP_FORK_REBUILD=1 to skip.
//
// Drift-guarded: if any anchor is missing, exits 1 without writing anything.

import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO = path.join(__dirname, "..")
const FORK = path.join(REPO, ".quartz/plugins/search")
const TARGET = path.join(FORK, "src/components/scripts/search.inline.ts")
const MODULE_SRC = path.join(REPO, "quartz/components/scripts/searchBoolean.ts")
const MODULE_DST = path.join(FORK, "src/components/scripts/rgfBoolean.ts")
const SENTINEL = "/* rgf-boolean-patch v3 */"
const OLD_SENTINELS = ["/* rgf-boolean-patch */", "/* rgf-boolean-patch v2 */"]

const EDITS = [
  {
    name: "import block",
    anchor: `} from "@quartz-community/utils";`,
    replacement: `} from "@quartz-community/utils";
import {
  planQuery as rgfPlanQuery,
  evaluateBoolean as rgfEvaluateBoolean,
  displayTerm as rgfDisplayTerm,
  mountSearchHelp as rgfMountHelp,
  stripBooleanSyntax as rgfStrip,
  synonymAlternatives as rgfSynAlts,
  plainSynonymIds as rgfPlainSynIds,
  loadSynonyms as rgfLoadSynonyms,
  loadSearchMeta as rgfLoadMeta,
  sitePrefix as rgfSitePrefix,
} from "./rgfBoolean";
${SENTINEL}`,
  },
  {
    name: "help hint mount",
    anchor: `searchSpace.insertBefore(ghostText, searchBar.nextSibling);`,
    replacement: `searchSpace.insertBefore(ghostText, searchBar.nextSibling);
    rgfMountHelp(searchSpace, searchBar);
    void rgfLoadSynonyms(rgfSitePrefix());`,
  },
  {
    name: "query plan",
    anchor: `const parsed = parseSearchQuery(inputValue);`,
    replacement: `const parsed = parseSearchQuery(inputValue);
      const rgfPlan = rgfPlanQuery(parsed.query);
      if (rgfPlan.mode === "fallback") parsed.query = rgfPlan.query;`,
  },
  {
    name: "engine call (skipped for boolean queries)",
    anchor: `      if (parsed.query) {
        searchResults = await index.searchAsync({`,
    replacement: `      if (rgfPlan.mode === "boolean") {
        searchResults = [];
      } else if (parsed.query) {
        searchResults = await index.searchAsync({`,
  },
  {
    name: "result id set",
    anchor: `const allIds: Set<number> = new Set(fieldPriority.flatMap((field) => getByField(field)));`,
    replacement: `const allIds: Set<number> =
        rgfPlan.mode === "boolean"
          ? new Set(await rgfBooleanIds(rgfPlan, fieldPriority))
          : new Set(fieldPriority.flatMap((field) => getByField(field)));
      // plain query: original results first, then synonym-only hits (whole word)
      if (rgfPlan.mode !== "boolean" && parsed.query && parsed.tags.length === 0) {
        try {
          for (const id of await rgfPlainSynIds(
            parsed.query,
            (t: string) => rgfSearchIds(t, fieldPriority, 50),
            rgfTextOf,
          ))
            allIds.add(id);
        } catch {}
      }`,
  },
  {
    name: "display term (onType)",
    anchor: `parsed.query || (parsed.tags.length > 0 ? parsed.tags.join(" ") : inputValue);`,
    replacement: `(rgfPlan.mode === "boolean" ? rgfPlan.highlight : parsed.query) ||
        (parsed.tags.length > 0 ? parsed.tags.join(" ") : inputValue);`,
  },
  {
    name: "highlight / stored term",
    anchor: `parsed.query || (parsed.tags.length > 0 ? parsed.tags.join(" ") : currentSearchTerm)`,
    replacement: `rgfDisplayTerm(parsed.query) || (parsed.tags.length > 0 ? parsed.tags.join(" ") : currentSearchTerm)`,
    all: true,
  },
  {
    name: "preview highlight: whole-word / prefix matches only",
    anchor: "const regex = new RegExp(combined, \"gi\");",
    replacement: "const regex = new RegExp(\"(?<![\\\\p{L}\\\\p{N}])(?:\" + combined + \")\", \"giu\");",
  },
  {
    name: "snippet highlight: whole-word / prefix matches only (test)",
    anchor: "if (tok.toLowerCase().includes(searchTok.toLowerCase())) {",
    replacement: "if (new RegExp(\"(?<![\\\\p{L}\\\\p{N}])\" + searchTok.replace(/[.*+?^${}()|[\\]\\\\]/g, \"\\\\$&\"), \"iu\").test(tok)) {",
  },
  {
    name: "snippet highlight: whole-word / prefix matches only (replace)",
    anchor: "const regex = new RegExp(searchTok.replace(/[.*+?^${}()|[\\]\\\\]/g, \"\\\\$&\"), \"gi\");",
    replacement: "const regex = new RegExp(\"(?<![\\\\p{L}\\\\p{N}])\" + searchTok.replace(/[.*+?^${}()|[\\]\\\\]/g, \"\\\\$&\"), \"giu\");",
  },
  {
    name: "evaluator context (module scope)",
    anchor: `function tokenizeTerm(term: string): string[] {`,
    replacement: `// Boolean evaluation over FULL per-term result sets (the plain path stops at 8).
async function rgfSearchIds(text: string, fieldPriority: string[], limit?: number): Promise<number[]> {
  const total = Math.max(idDataMap.length, 1);
  const res: any[] = await index.searchAsync({
    query: text,
    limit: limit ?? total,
    index: ["title", "content"],
  });
  const byField = (field: string): number[] => {
    const matched = res.filter((x: any) => x.field === field);
    return matched.length === 0 ? [] : ([...matched[0].result] as number[]);
  };
  return [...new Set(fieldPriority.flatMap((field) => byField(field)))];
}

function rgfTextOf(id: number): string {
  const slug = idDataMap[id];
  const data: any = slug && contentData ? contentData[slug] : undefined;
  return data ? (data.title || "") + " " + (data.content || "") : "";
}

// metadata ids (index slugs, "page#frag") -> engine ids
let rgfSlugIds: Map<string, number> | null = null;
function rgfToIds(slugs: string[] | null): number[] | null {
  if (slugs === null) return null;
  if (!rgfSlugIds || rgfSlugIds.size !== idDataMap.length) {
    rgfSlugIds = new Map(idDataMap.map((s, i) => [s as string, i]));
  }
  const out: number[] = [];
  for (const s of slugs) {
    const i = rgfSlugIds.get(s);
    if (i !== undefined) out.push(i);
  }
  return out;
}

async function rgfBooleanIds(plan: any, fieldPriority: string[]): Promise<number[]> {
  try {
    const prefix = rgfSitePrefix();
    await rgfLoadSynonyms(prefix);
    const meta = await rgfLoadMeta(prefix);
    return await rgfEvaluateBoolean(plan.ast, {
      searchTerms: (text: string) => rgfSearchIds(text, fieldPriority),
      textOf: rgfTextOf,
      expand: rgfSynAlts,
      metaSearch: meta ? (t: string, a: string[]) => rgfToIds(meta.matchAny(t, a)) || [] : undefined,
      fieldSearch: (f: string, v: string, a: string[]) => (meta ? rgfToIds(meta.matchField(f, v, a)) : null),
      allIds: () => idDataMap.map((_, i) => i),
      isKeywordEntry: (id: number) => {
        const slug = idDataMap[id];
        const data: any = slug && contentData ? contentData[slug] : undefined;
        return !!(data && data.frag);
      },
    });
  } catch {
    // never break the overlay: degrade to a plain search without operator syntax
    try {
      return await rgfSearchIds(rgfStrip(plan.query) || plan.query, fieldPriority);
    } catch {
      return [];
    }
  }
}

function tokenizeTerm(term: string): string[] {`,
  },
]

function fail(msg) {
  console.error(`[patch-search-boolean] ${msg}`)
  process.exit(1)
}

function distHasPatch() {
  const dist = path.join(FORK, "dist/index.js")
  return fs.existsSync(dist) && fs.readFileSync(dist, "utf8").includes("rgf-boolean-v3")
}

function rebuildIfNeeded() {
  if (process.env.RGF_SKIP_FORK_REBUILD === "1") return
  if (fs.existsSync(path.join(REPO, "scripts/rebuild-forks.mjs"))) {
    console.log("[patch-search-boolean] fork recompile left to scripts/rebuild-forks.mjs")
    return
  }
  execFileSync("npm", ["run", "build"], { cwd: FORK, stdio: "pipe", shell: true })
  console.log("[patch-search-boolean] recompiled search fork (dist/)")
}

function main() {
  if (!fs.existsSync(TARGET))
    fail(`target not found: ${TARGET} (run "npx quartz plugin restore" first)`)
  if (!fs.existsSync(MODULE_SRC)) fail(`module not found: ${MODULE_SRC}`)

  // keep the copied module in sync on every run (cheap, idempotent)
  fs.copyFileSync(MODULE_SRC, MODULE_DST)

  const raw = fs.readFileSync(TARGET, "utf8")
  const hadCRLF = raw.includes("\r\n")
  let src = hadCRLF ? raw.replace(/\r\n/g, "\n") : raw

  if (!src.includes(SENTINEL) && OLD_SENTINELS.some((o) => src.includes(o)))
    fail("search fork carries an older patch: run \"npx quartz plugin restore\" (fresh fork) and re-run")
  if (src.includes(SENTINEL)) {
    console.log("[patch-search-boolean] already patched")
    // re-runs are no-ops; recompile only if dist/ somehow lacks the patch
    if (!distHasPatch()) rebuildIfNeeded()
    return
  }
  for (const e of EDITS) {
    if (!src.includes(e.anchor)) {
      fail(
        `anchor not found: "${e.name}" -- upstream search.inline.ts drifted; update this script.`,
      )
    }
  }
  for (const e of EDITS) {
    src = e.all ? src.split(e.anchor).join(e.replacement) : src.replace(e.anchor, () => e.replacement) // fn: no "$&" expansion
  }
  fs.writeFileSync(TARGET, hadCRLF ? src.replace(/\n/g, "\r\n") : src)
  console.log(
    '[patch-search-boolean] applied: AND/OR/NOT, -word, "phrase", ( ), campo:valore, metadata, synonyms + help hint',
  )
  rebuildIfNeeded()
}

main()
