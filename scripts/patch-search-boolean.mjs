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
//      v4: visible result count (".rgf-search-count[data-search-count]", the full total,
//      not just the 8 shown; "almeno N" on the truncated mobile index); the side preview
//      of a per-quesito hit shows THAT quesito (atom), not the whole gara page scrolled to
//      the first match; stale async results can no longer overwrite newer ones; the
//      search UI is wired before the index loads (typing waits for it) and
//      <html data-search-ready="1"> is set once the index is ready; the index is filled
//      with chunked synchronous adds (faster than one addAsync per document).
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
const SENTINEL = "/* rgf-boolean-patch v4 */"
const OLD_SENTINELS = ["/* rgf-boolean-patch */", "/* rgf-boolean-patch v2 */", "/* rgf-boolean-patch v3 */"]

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
  mountResultCount as rgfMountCount,
  showResultCount as rgfShowCount,
  previewTargetOf as rgfPreviewTarget,
  isolateAtom as rgfIsolateAtom,
} from "./rgfBoolean";
${SENTINEL}`,
  },
  {
    name: "help hint mount",
    anchor: `searchSpace.insertBefore(ghostText, searchBar.nextSibling);`,
    replacement: `searchSpace.insertBefore(ghostText, searchBar.nextSibling);
    rgfMountHelp(searchSpace, searchBar);
    const rgfCountEl = rgfMountCount(searchSpace, searchBar);
    void rgfLoadSynonyms(rgfSitePrefix());`,
  },
  {
    name: "onType: sequence number (stale async results are dropped)",
    anchor: `    const onType = async (e: Event) => {
      const inputValue = (e.target as HTMLInputElement).value;
      currentSearchTerm = inputValue;
`,
    replacement: `    const onType = async (e: Event) => {
      const inputValue = (e.target as HTMLInputElement).value;
      currentSearchTerm = inputValue;
      const rgfSeq = ++rgfTypeSeq;
`,
  },
  {
    name: "onType: empty query clears the count; wait for the index (UI is live before it)",
    anchor: `      if (!hasContent) {
        removeAllChildren(results);
        if (preview) removeAllChildren(preview);
        currentHover = null;
        return;
      }
`,
    replacement: `      if (!hasContent) {
        removeAllChildren(results);
        if (preview) removeAllChildren(preview);
        currentHover = null;
        rgfShowCount(rgfCountEl, null, "");
        return;
      }
      if (!indexInitialized) {
        rgfShowCount(rgfCountEl, null, inputValue, { loading: true });
        try {
          await initIndex();
        } catch {}
        if (rgfSeq !== rgfTypeSeq) return;
        if (!indexInitialized) {
          rgfShowCount(rgfCountEl, null, "");
          return;
        }
      }
`,
  },
  {
    name: "onType: total count + drop stale results",
    anchor: `      await displayResults(finalResults.slice(0, numSearchResults));
`,
    replacement: `      // visible total: boolean / tag queries already hold the full id set; a plain query
      // only fetched the first results -> count the full engine set (+ synonym-only hits)
      let rgfTotal = filteredIds.length;
      if (rgfPlan.mode !== "boolean" && parsed.query && parsed.tags.length === 0) {
        try {
          const rgfAll = new Set<number>(filteredIds);
          for (const id of await rgfSearchIds(parsed.query, fieldPriority)) rgfAll.add(id);
          for (const id of await rgfPlainSynIds(
            parsed.query,
            (t: string) => rgfSearchIds(t, fieldPriority),
            rgfTextOf,
          ))
            rgfAll.add(id);
          rgfTotal = rgfAll.size;
        } catch {}
      }
      if (rgfSeq !== rgfTypeSeq) return; // a newer keystroke already owns the panel
      rgfShowCount(rgfCountEl, rgfTotal, inputValue, { capped: rgfIndexTier === "mobile" });
      await displayResults(finalResults.slice(0, numSearchResults));
`,
  },
  {
    name: "hideSearch clears the count",
    anchor: `      searchBar.value = "";
      removeAllChildren(results!);
`,
    replacement: `      searchBar.value = "";
      rgfTypeSeq++;
      rgfShowCount(rgfCountEl, null, "");
      removeAllChildren(results!);
`,
  },
  {
    name: "preview: the focused card's own quesito (atom), stable data-preview-slug",
    anchor: `      const slug = el.id;
      const token = ++previewToken;
      const contents = await fetchContent(slug);
      if (token !== previewToken) return;
      const term = highlightTerm();
      const previewInner = document.createElement("div");
      previewInner.className = "preview-inner";
      for (const contentEl of contents) {
        const cloned = contentEl.cloneNode(true) as HTMLElement;
        if (term.trim() !== "") {
          cloned.innerHTML = highlightHTML(term, cloned);
        }
        previewInner.appendChild(cloned);
      }
      preview.appendChild(previewInner);
`,
    replacement: `      // card id = index key ("page#q12") or clean slug + "#atom" in the href
      const rgfTarget = rgfPreviewTarget(el.id, el.getAttribute("href"));
      const rgfKey = rgfTarget.page + (rgfTarget.frag ? "#" + rgfTarget.frag : "");
      const slug = rgfTarget.page;
      const token = ++previewToken;
      const contents = await fetchContent(slug);
      if (token !== previewToken) return;
      const term = highlightTerm();
      const previewInner = document.createElement("div");
      previewInner.className = "preview-inner";
      previewInner.setAttribute("data-preview-slug", rgfKey);
      for (const contentEl of contents) {
        const cloned = contentEl.cloneNode(true) as HTMLElement;
        // per-quesito hit: show only that atom (the reader shows one atom at a time),
        // so the preview and its highlight scroll can't land on another quesito
        if (rgfTarget.frag) rgfIsolateAtom(cloned as any, rgfTarget.frag);
        if (term.trim() !== "") {
          cloned.innerHTML = highlightHTML(term, cloned);
        }
        previewInner.appendChild(cloned);
      }
      preview.appendChild(previewInner);
      preview.setAttribute("data-preview-slug", rgfKey);
`,
  },
  {
    name: "fillDocument: chunked synchronous adds",
    anchor: `    promises.push(
      index.addAsync(id, {
        id: id,
        slug: slug,
        title: fileData.title || "",
        content: fileData.content || "",
        tags: fileData.tags || [],
      }),
    );
    id++;
`,
    replacement: `    // v4: synchronous adds, yielding every 250 documents (same index, same order;
    // ~30% faster than one addAsync per document, and the page stays responsive)
    index.add(id, {
      id: id,
      slug: slug,
      title: fileData.title || "",
      content: fileData.content || "",
      tags: fileData.tags || [],
    });
    id++;
    if (id % 250 === 0) await rgfYield();
`,
  },
  {
    name: "initIndex: one shared load, ready signal",
    anchor: `async function initIndex() {
  if (indexInitialized) return;
  contentData = await fetchContentIndex();
  await fillDocument();
  indexInitialized = true;
}
`,
    replacement: `let rgfIndexPromise: Promise<void> | null = null;
function initIndex(): Promise<void> {
  if (indexInitialized) return Promise.resolve();
  if (!rgfIndexPromise) {
    rgfSetReady("0");
    rgfIndexPromise = (async () => {
      contentData = await fetchContentIndex();
      // tier chosen by the (optional) device-tiered fetch: "mobile" = truncated index
      rgfIndexTier = document.documentElement.dataset.searchIndex === "mobile" ? "mobile" : "full";
      await fillDocument();
      indexInitialized = true;
    })();
    rgfIndexPromise.catch(() => {
      rgfIndexPromise = null;
      rgfSetReady("error");
    });
  }
  return rgfIndexPromise;
}
`,
  },
  {
    name: "handleNavOrRender: UI first, index in the background, then ready signal",
    anchor: `async function handleNavOrRender() {
  runCleanups();
  await initIndex();
  await setupSearch();
  scrollToSearchTerm();
}
`,
    replacement: `async function handleNavOrRender() {
  runCleanups();
  const rgfReady = initIndex(); // fetch + fill in the background
  await setupSearch(); // search button / Ctrl+K / typing work right away
  scrollToSearchTerm();
  try {
    await rgfReady;
  } catch {
    return;
  }
  rgfSetReady("1");
}
`,
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
    replacement: `// v4 state: keystroke sequence, index tier, readiness signal for testers/automation.
let rgfTypeSeq = 0;
let rgfIndexTier: "full" | "mobile" = "full";
function rgfSetReady(state: string) {
  try {
    const de = document.documentElement;
    de.dataset.searchReady = state;
    if (state === "1") {
      de.dataset.searchIndex = rgfIndexTier;
      document.dispatchEvent(new CustomEvent("rgf-search-ready", { detail: { tier: rgfIndexTier } }));
    }
  } catch {}
}
function rgfYield(): Promise<void> {
  // MessageChannel: not throttled in background tabs like nested setTimeout
  return new Promise((resolve) => {
    try {
      const ch = new MessageChannel();
      ch.port1.onmessage = () => resolve();
      ch.port2.postMessage(0);
    } catch {
      setTimeout(resolve, 0);
    }
  });
}

// Boolean evaluation over FULL per-term result sets (the plain path stops at 8).
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
  return fs.existsSync(dist) && fs.readFileSync(dist, "utf8").includes("rgf-boolean-v4")
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
    '[patch-search-boolean] applied: AND/OR/NOT, -word, "phrase", ( ), campo:valore, metadata, synonyms + help hint, count, atom preview, ready signal',
  )
  rebuildIfNeeded()
}

main()
