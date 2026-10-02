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
const SENTINEL = "/* rgf-boolean-patch */"

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
} from "./rgfBoolean";
${SENTINEL}`,
  },
  {
    name: "help hint mount",
    anchor: `searchSpace.insertBefore(ghostText, searchBar.nextSibling);`,
    replacement: `searchSpace.insertBefore(ghostText, searchBar.nextSibling);
    rgfMountHelp(searchSpace, searchBar);`,
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
          : new Set(fieldPriority.flatMap((field) => getByField(field)));`,
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
    name: "evaluator context (module scope)",
    anchor: `function tokenizeTerm(term: string): string[] {`,
    replacement: `// Boolean evaluation over FULL per-term result sets (the plain path stops at 8).
async function rgfSearchIds(text: string, fieldPriority: string[]): Promise<number[]> {
  const total = Math.max(idDataMap.length, 1);
  const res: any[] = await index.searchAsync({
    query: text,
    limit: total,
    index: ["title", "content"],
  });
  const byField = (field: string): number[] => {
    const matched = res.filter((x: any) => x.field === field);
    return matched.length === 0 ? [] : ([...matched[0].result] as number[]);
  };
  return [...new Set(fieldPriority.flatMap((field) => byField(field)))];
}

async function rgfBooleanIds(plan: any, fieldPriority: string[]): Promise<number[]> {
  try {
    return await rgfEvaluateBoolean(plan.ast, {
      searchTerms: (text: string) => rgfSearchIds(text, fieldPriority),
      textOf: (id: number) => {
        const slug = idDataMap[id];
        const data = slug && contentData ? contentData[slug] : undefined;
        return data ? (data.title || "") + " " + (data.content || "") : "";
      },
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
  return fs.existsSync(dist) && fs.readFileSync(dist, "utf8").includes("rgf-search-help")
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
    src = e.all ? src.split(e.anchor).join(e.replacement) : src.replace(e.anchor, e.replacement)
  }
  fs.writeFileSync(TARGET, hadCRLF ? src.replace(/\n/g, "\r\n") : src)
  console.log('[patch-search-boolean] applied: AND/OR/NOT, -word, "phrase", ( ) + help hint')
  rebuildIfNeeded()
}

main()
