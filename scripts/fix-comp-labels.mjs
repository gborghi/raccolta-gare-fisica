// Build step (scripts/build-pages.sh, after fix-content-links): show full competition
// names in prova titles. Rewrites, in the committed content/ tree,
//   - the frontmatter `title:` of each page tagged comp/<code> + paese/<country>
//   - the data-title="" of each atom marker (from that marker's own data-tags)
//   - the atom titles of staticgen/atoms_fullindex.json (search results; read by
//     scripts/make-search-index.mjs after the Quartz build)
// using fixCompTitle() (scripts/comp-label.mjs): "Svizze 2011" -> "Svizzera 2011",
// "OBF 2011 ''" -> "OBF 2011". Idempotent; content/ in git is not touched by CI.
// preprocess.mjs applies the same rule, so regenerated content is already fixed.
import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from "node:fs"
import path from "node:path"
import { fixCompTitle, compFromTags } from "./comp-label.mjs"

const ROOT = process.env.RGF_BUILD || "."
const CONTENT = path.join(ROOT, "content")

const unesc = (s) => s.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

export function fixFile(text) {
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  let out = text, titles = 0, atoms = 0
  if (fm) {
    const tags = [...fm[1].matchAll(/^\s*-\s*['"]?([^'"\r\n]+?)['"]?\s*$/gm)].map((m) => m[1])
    let { code, country } = compFromTags(tags)
    // classic pages carry comp_code/country fields instead of tags
    if (!code) {
      const field = (k) => ((fm[1].match(new RegExp("^" + k + ":[ \\t]*(.*)$", "m")) || [, ""])[1]).trim().replace(/^(['"])(.*)\1$/, "$2")
      code = field("comp_code"); country = country || field("country")
    }
    // prova parents without comp/paese tags: use the first atom marker's tags
    if (!code) {
      const m = text.match(/data-title="[^"]*" data-tags="([^"]*)"/)
      if (m) ({ code, country } = compFromTags(unesc(m[1])))
    }
    const head = fm[1].replace(/^title:[ \t]*(.*)$/m, (line, v) => {
      const q = /^(['"])(.*)\1$/.exec(v)
      const inner = q ? q[2] : v
      const fixed = fixCompTitle(inner, code, country)
      if (fixed === inner) return line
      titles++
      // a plain scalar that would need quoting after the edit is not expected (the
      // fix only swaps a word and drops a trailing ''), keep the original style
      return "title: " + (q ? q[1] + fixed + q[1] : fixed)
    })
    out = text.slice(0, fm.index) + fm[0].replace(fm[1], () => head) + text.slice(fm.index + fm[0].length)
  }
  out = out.replace(/data-title="([^"]*)" data-tags="([^"]*)"/g, (all, t, tg) => {
    const { code, country } = compFromTags(unesc(tg))
    const raw = unesc(t)
    const fixed = fixCompTitle(raw, code, country)
    if (fixed === raw) return all
    atoms++
    return `data-title="${esc(fixed)}" data-tags="${tg}"`
  })
  return { out, titles, atoms }
}

/** Fix atom titles in the offline search index ({atoms: {id: {title, tags}}}) in place. */
export function fixIndex(full) {
  let n = 0
  for (const rec of Object.values(full.atoms || {})) {
    const { code, country } = compFromTags(rec.tags || [])
    const fixed = fixCompTitle(rec.title, code, country)
    if (fixed !== rec.title) { rec.title = fixed; n++ }
  }
  return n
}

function walk(d, acc) {
  for (const e of readdirSync(d)) {
    const p = path.join(d, e)
    if (statSync(p).isDirectory()) { if (e !== "_attachments") walk(p, acc) }
    else if (e.endsWith(".md")) acc.push(p)
  }
  return acc
}

if (import.meta.url === `file://${process.argv[1]}`) {
  let files = 0, titles = 0, atoms = 0
  for (const p of walk(CONTENT, [])) {
    const text = readFileSync(p, "utf8")
    const r = fixFile(text)
    if (r.out !== text) { writeFileSync(p, r.out); files++; titles += r.titles; atoms += r.atoms }
  }
  let idx = 0
  const IDX = path.join(ROOT, "staticgen", "atoms_fullindex.json")
  if (existsSync(IDX)) {
    const full = JSON.parse(readFileSync(IDX, "utf8"))
    idx = fixIndex(full)
    if (idx) writeFileSync(IDX, JSON.stringify(full))
  }
  console.log(`fix-comp-labels: ${files} files, ${titles} titles, ${atoms} atom titles, ${idx} search-index titles`)
}
