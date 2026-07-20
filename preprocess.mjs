// Preprocess the physics "Knowledge Graph" Obsidian vault into Quartz content.
// - copies notes (.md) into ./content (frontmatter re-emitted cleanly)
// - copies non-md assets (figure PNGs in _attachments/) so embeds resolve
// - strips links to local PDFs (competition PDFs are not published)
// - emits ./quartz/static/quesiti.json (the 'tipo: quesito' subset) for /cerca
import { promises as fs } from "node:fs"
import { readdirSync, readFileSync, existsSync } from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const NUL = String.fromCharCode(0)

// Lenient flat-frontmatter parser (some values carry stray quotes/NUL/apostrophes
// that break strict YAML). Re-emitted as clean YAML by matter.stringify on write.
function parseFrontmatter(raw) {
  raw = raw.split(NUL).join("")
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!m) return { data: {}, content: raw }
  const data = {}
  const lines = m[1].split(/\r?\n/)
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const kv = line.match(/^(\w[\w.-]*):\s?(.*)$/)
    if (!kv) continue
    const key = kv[1]
    let v = kv[2].trim()
    if (v === "") {
      // possible YAML block list: subsequent "  - item" lines
      const items = []
      let j = i + 1
      while (j < lines.length && /^\s*-\s+/.test(lines[j])) {
        items.push(lines[j].replace(/^\s*-\s+/, "").trim().replace(/^["']|["']$/g, ""))
        j++
      }
      if (items.length) { data[key] = items; i = j - 1; continue }
      data[key] = ""
    } else if (v.startsWith("[") && v.endsWith("]")) {
      data[key] = v.slice(1, -1).split(",").map((x) => x.trim().replace(/^["']|["']$/g, "")).filter(Boolean)
    } else {
      if ((v.startsWith('"') && v.endsWith('"') && v.length > 1) ||
          (v.startsWith("'") && v.endsWith("'") && v.length > 1)) v = v.slice(1, -1)
      data[key] = v
    }
  }
  return { data, content: m[2] }
}

const VAULT = "E:/giovanni/Dropbox/insegnamento/Wiligelmo/OlimpiadiFisica/raccolte gare di Fisica/Knowledge Graph"
const ROOT = path.resolve(".")
// Build artifacts live INSIDE the site repo (in Dropbox, sibling of the vault —
// mirrors OlimpiadiMatematica/garaMate-pages). content/, staticgen/ and public/
// are heavy + 100%-regenerable, so they're marked Dropbox-ignored (NTFS ADS
// `com.dropbox.ignored`) to stop Dropbox syncing/locking 20k+ files each build.
const BUILD = process.env.RGF_BUILD || ROOT
const CONTENT = path.join(BUILD, "content")
// Generated static JSON (per-concept lists, quesiti index, keyword index) ALSO live
// outside Dropbox: preprocess rm+recreates `cl/` each run and Dropbox locks it
// (EBUSY rmdir). The deploy copies STATIC_GEN/* into public/static AFTER quartz build
// (these JSONs are fetched client-side at runtime, not needed during the build).
const STATIC_GEN = path.join(BUILD, "staticgen")
const STATIC_JSON = path.join(STATIC_GEN, "quesiti.json")
const CL_DIR = path.join(STATIC_GEN, "cl")   // per-concept paginated-list JSON
const KW_JSON = path.join(STATIC_GEN, "quesiti_kw.json") // hidden full-text keyword index (href -> keywords)
const TAGMAP_JSON = path.join(STATIC_GEN, "tagmap.json") // SPA (Task 6.4): vault tag slug -> cerca facet token

// --- Hidden full-text keyword index --------------------------------------------
// For each atom we extract the meaningful words of its statement so the concept-
// table search can offer a "search full content" mode without shipping whole
// notes. Stopwords (it/en/pt/fr) + domain boilerplate removed; deduped, space-
// joined keyword string per atom href. Lazy-loaded client-side, never shown.
const STOPWORDS = new Set((
  "ad ai al alla alle allo agli anche ancora avere aveva avevano che chi ci coi col come con cosa cui da dai dal dalla dalle dallo degli dei del della delle dello di dove due ecco ed era erano essere fa fare fino fra gli ha hai hanno ho il in io la le lei li lo loro ma me mentre mi mia mie miei mio ne negli nei nel nella nelle nello no noi non nostra nostre nostri nostro o od ogni ognuno oppure per perche perché piu più po poi puo può qual quale quali quando quanta quante quanti quanto quasi quel quella quelle quelli quello questa queste questi questo qui se sei senza si sia siamo siete solo sono sopra sotto sta stata state stati stato su sua sue sui sul sulla sulle sullo suo suoi tra tre tu tua tue tuo tuoi tutta tutte tutti tutto un una uno vi voi " +
  "a об an and are as at be been but by can did do does each for from had has have he her here him his how i if in into is it its no not of on one or our so that the their them then there these they this to too two up was we were what when where which who will with you your " +
  "as os um uma para com que dos das nao não por mais como ou se da de do em no na os un une le la les des du dans et est il elle pour qui que pas sur au aux ce " +
  "apri pdf fonte sorgente risposta topic argomento area abilita abilità metodo metodi skill competenze quesito problema gara testo soluzione soluzioni objects pag pagina prove prova figura figure"
).split(/\s+/).filter(Boolean))

function keywords(content) {
  // keep only the statement: drop the metadata footer (Topic/Metodi/Competenze/Objects/Fonte/Risposta/Soluzione…)
  const body = content.split(/\n\*\*(?:Topic|Metodi|Competenze|Objects|Fonte|Risposta|Soluzione)/)[0]
  const cleaned = body
    .replace(/<!--fig:start-->[\s\S]*?<!--fig:end-->/g, " ")
    .replace(/\[\[[^\]]*\]\]/g, " ")           // wikilinks
    .replace(/\[[^\]]*\]\([^)]*\)/g, " ")       // md links
    .replace(/[`*_>#|]/g, " ")                  // md syntax
    .toLowerCase()
    .replace(/[^a-zà-ÿ\s]/g, " ")               // letters only (drop digits/punct/symbols)
  const seen = new Set()
  for (const w of cleaned.split(/\s+/)) {
    if (w.length < 3 || STOPWORDS.has(w)) continue
    seen.add(w)
  }
  return [...seen].join(" ")
}

// Sibling of keywords() for the SPA full tf-idf index (Task 4.1): same body-slice
// (drop the metadata footer), same cleaning, same STOPWORDS -- but returns a
// Map<term, count> instead of a deduped string, since tf-idf needs term frequency.
function keywordCounts(content) {
  const body = content.split(/\n\*\*(?:Topic|Metodi|Competenze|Objects|Fonte|Risposta|Soluzione)/)[0]
  const cleaned = body
    .replace(/<!--fig:start-->[\s\S]*?<!--fig:end-->/g, " ")
    .replace(/\[\[[^\]]*\]\]/g, " ")           // wikilinks
    .replace(/\[[^\]]*\]\([^)]*\)/g, " ")       // md links
    .replace(/[`*_>#|]/g, " ")                  // md syntax
    .toLowerCase()
    .replace(/[^a-zà-ÿ\s]/g, " ")               // letters only (drop digits/punct/symbols)
  const counts = new Map()
  for (const w of cleaned.split(/\s+/)) {
    if (w.length < 3 || STOPWORDS.has(w)) continue
    counts.set(w, (counts.get(w) || 0) + 1)
  }
  return counts
}
const SKIP_DIRS = new Set(["tmp_imgs"])
// stray root notes that pollute the Explorer sidebar with broken/empty entries
// (the faceted /cerca search covers navigation). Skipped at publish time.
const IGNORE_NOTES = new Set(["T3-Answersheet-it (4 files merged)", "_Home"])
const CONCEPT_DIRS = ["Topics", "Methods", "Skills", "Clusters", "Objects"]

// country -> flag emoji; IPhO/EuPhO/International -> globe
const FLAGS = {
  Italia: "🇮🇹", India: "🇮🇳", Brasile: "🇧🇷", Brasil: "🇧🇷", Spagna: "🇪🇸", Spain: "🇪🇸",
  Russia: "🇷🇺", Argentina: "🇦🇷", UK: "🇬🇧", Germania: "🇩🇪", Germany: "🇩🇪", Deutschland: "🇩🇪",
  USA: "🇺🇸", Canada: "🇨🇦", Svizzera: "🇨🇭", Australia: "🇦🇺", Kazakhstan: "🇰🇿", Colombia: "🇨🇴",
  Indonesia: "🇮🇩", Portogallo: "🇵🇹", Giappone: "🇯🇵",
}
function flagFor(country, comp, pdf) {
  const p = (pdf || "").toLowerCase()
  if (/\/ipho\/|\/eupho\//.test(p) || comp === "IPhO" || comp === "EuPhO" || /^intern/i.test(country || ""))
    return "🌍"
  return FLAGS[country] || "🌍"
}

// country (Italian/variant name as stored) -> { ISO-3166-1 alpha-2 (lowercase, for
// flagcdn), English name (tooltip) }. Windows can't render flag EMOJI (🇮🇹 shows as
// "IT"), so the tables use flagcdn images instead. International/multi-country comps
// have no single flag -> iso "" -> globe.
const COUNTRY = {
  Italia: ["it", "Italy"], Brasile: ["br", "Brazil"], Brasil: ["br", "Brazil"],
  India: ["in", "India"], Singapore: ["sg", "Singapore"], Canada: ["ca", "Canada"],
  USA: ["us", "United States"], Russia: ["ru", "Russia"], Spagna: ["es", "Spain"],
  Spain: ["es", "Spain"], UK: ["gb", "United Kingdom"], Germania: ["de", "Germany"],
  Germany: ["de", "Germany"], Deutschland: ["de", "Germany"], Argentina: ["ar", "Argentina"],
  Svizzera: ["ch", "Switzerland"], Australia: ["au", "Australia"], Colombia: ["co", "Colombia"],
  Giappone: ["jp", "Japan"], Kazakhstan: ["kz", "Kazakhstan"], Indonesia: ["id", "Indonesia"],
  Portogallo: ["pt", "Portugal"], "Hong Kong": ["hk", "Hong Kong"],
}
// -> { iso, name }. iso "" means render the globe (international / multi-country / unmapped).
function nationInfo(country, comp, pdf) {
  const p = (pdf || "").toLowerCase()
  const intl = /\/ipho\/|\/eupho\//.test(p) || comp === "IPhO" || comp === "EuPhO" || /^intern/i.test(country || "")
  const e = COUNTRY[country]
  if (e && !intl) return { iso: e[0], name: e[1] }
  return { iso: "", name: intl ? "International" : (country || "International") }
}

function sluggify(s) {
  // v5: OFM resolves wikilinks to LOWERCASE hrefs while pages emit at their file
  // path — lowercase here so emitted filenames + every computed href agree (the
  // site's `__QNN` uppercase atoms would otherwise 404 all internal links/graph).
  return s.split("/").map((seg) =>
    seg.replace(/\s/g, "-").replace(/&/g, "-and-").replace(/%/g, "-percent").replace(/\?/g, "").replace(/#/g, "").toLowerCase()
  ).join("/").replace(/\/$/, "")
}
function slugFromRel(rel) {
  return sluggify(rel.replace(/\.md$/, "").split(path.sep).join("/"))
}

// HTML-attribute escape (SPA: atom-split marker attrs -- title/tags come from
// vault frontmatter, which is ASCII-only per project convention, but escape
// defensively so a stray & " < > never breaks the marker's HTML).
function esc(s) {
  return String(s ?? "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

// Pull wikilink targets from a "**Label:** [[A]], [[B (metodo)|alias]]" meta line.
function metaLinks(content, label) {
  const re = new RegExp("^\\*\\*" + label + ":\\*\\*(.*)$", "m")
  const m = content.match(re)
  if (!m) return []
  return [...m[1].matchAll(/\[\[([^\]|#]+?)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/g)].map((x) => x[1].trim())
}

// SPA (Task 5.1): per-atom outbound graph links, so the collapsed atom (a
// fragment section, not its own page) still contributes edges to the knowledge
// graph like it did as a standalone page. Scans an atom's POST-transform() body
// (so atom-target wikilinks are already rewritten to "prove/<stem>#<atomid>"
// fragment form -- see transform() above) for every remaining [[wikilink]]:
// concept/topic/method/skill/objects meta-line targets AND any sibling-atom
// fragment links, resolving concept targets through the same noteFolder lookup
// extractConceptList() uses. PDF/figure embeds are skipped (not graph nodes).
// Deduped, capped at MAX_ATOM_LINKS -- this is graph topology ONLY, never fed
// into keywordCounts()/tf-idf terms (which run on a separately-cleaned body that
// already strips all [[...]] wikilinks wholesale).
const MAX_ATOM_LINKS = 20
const LINK_WIKILINK_RE = /\[\[([^\]|#]+)(#[^\]|]*)?(?:\|[^\]]*)?\]\]/g
function atomLinks(body, noteFolder) {
  const out = []
  const seen = new Set()
  for (const m of body.matchAll(LINK_WIKILINK_RE)) {
    const target = m[1].trim()
    if (!target) continue
    let id
    if (target.startsWith("prove/") && m[2]) {
      // already-rewritten sibling-atom link: "prove/<stem>" + "#<atomid>"
      id = target + m[2]
    } else {
      if (/\.(pdf|png|jpe?g|gif|svg|webp)$/i.test(target)) continue  // asset embed, not a graph node
      const tslug = sluggify(target)
      const dir = noteFolder.get(tslug)
      if (dir == null) continue   // unresolved target -- skip (no dangling graph nodes)
      id = dir ? dir + "/" + tslug : tslug
    }
    if (seen.has(id)) continue
    seen.add(id)
    out.push(id)
    if (out.length >= MAX_ATOM_LINKS) break
  }
  return out
}

function summarize(content) {
  let body = content
    .replace(/^#\s+.*$/m, "")                          // drop first H1
    .replace(/<!--fig:start-->[\s\S]*?<!--fig:end-->/g, "")
  for (let line of body.split(/\r?\n/)) {
    line = line.trim()
    if (!line) continue
    if (/^(#{1,6}\s|>\s|!\[\[|\*\*(Topic|Metodi|Competenze|Fonte|Risposta|Soluzione):|<!--|\||---)/.test(line)) continue
    if (/^!\[\[/.test(line)) continue
    // strip a leading "1." / "Q1" / "(a)" enumerator and bold markers
    line = line.replace(/^\s*(?:Q?\d+[.)]|\([a-z]\))\s*/i, "").replace(/\*\*/g, "")
    line = line.replace(/\s+/g, " ").trim()
    if (line.length >= 8) return line.slice(0, 160).trim()
  }
  return ""
}

// GitHub-slugger-ish heading anchor (matches Quartz's heading ids closely enough):
// lowercase, drop punctuation except spaces/hyphens, spaces -> '-' (no collapsing).
function anchorSlug(s) {
  return s.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s/g, "-")
}

// Extract the bullet-list of a concept note into structured items and replace it
// with a lightweight placeholder div. Returns { newContent, items } or null.
// Concept lists are big (a Skill can have 6000+) — moving them to JSON + client
// pagination keeps the page HTML tiny and fast to load.
function extractConceptList(content, stemFlag, noteFolder, stemCountry, stemLevel, stemYear) {
  const lines = content.split(/\r?\n/)
  const firstBullet = lines.findIndex((l) => /^- \[\[/.test(l))
  if (firstBullet < 0) return null
  // keep through the nearest preceding "## " heading (the section title)
  let head = firstBullet
  for (let k = firstBullet - 1; k >= 0; k--) {
    if (lines[k].startsWith("## ")) { head = k; break }
    if (lines[k].startsWith("# ")) { head = k + 1; break }
  }
  const items = []
  const RE = /^- \[\[([^\]|#]+)(#[^\]|]*)?(?:\|([^\]]*))?\]\]\s*(?:[—-]\s*(.*))?$/
  for (let k = head; k < lines.length; k++) {
    const m = lines[k].match(RE)
    if (!m) continue
    const target = m[1].trim()
    const anchor = m[2] ? "#" + anchorSlug(m[2].slice(1)) : ""
    // Resolve the link target to its real folder (Prove atoms, but also Topics/
    // Methods/Skills/Clusters notes listed at the top of cluster pages). Falling
    // back to Prove/ keeps old behavior if a target isn't in the note index.
    const tslug = sluggify(target)
    const dir = (noteFolder && noteFolder.get(tslug))
    // extractConceptList runs on POST-transform() content, so atom wikilinks are
    // already rewritten to `[[prove/<stem>#<atomId>]]` -- target=`prove/<stem>`,
    // tslug already carries the "prove/" segment. Prepending "prove/" again (the
    // dir==null branch) doubles it to "prove/prove/<stem>#..." and 404s. If tslug
    // already starts with "prove/", it IS the container path -- use as-is.
    const hbase = tslug.startsWith("prove/")
      ? tslug
      : dir != null ? (dir ? dir + "/" + tslug : tslug) : "prove/" + tslug
    // SPA: atom targets (<stem>__<atomId>) no longer have their own page -- rewrite
    // to the fragment section prove/<stem>#<atomId> on the container reader page.
    // Computed locally (not from atomFrag) because extractConceptList runs during
    // the main file loop, before the container pass builds proveAtoms' fragments.
    let h = hbase + anchor
    const am = tslug.match(/^(.*)__([a-z0-9]+)$/i)
    // Any pre-existing "anchor" (#subheading) on an atom-target link is intentionally
    // dropped here: the fragment is repurposed to select the atom itself, so a second
    // "#" is impossible. The atomRouter renders the whole atom (subheading content
    // included), so landing on prove/<stem>#<atomId> still surfaces the target text.
    // am[1] is sluggify(target) minus the __atomId; the target often already
    // carries a "prove/" path segment (e.g. "prove/injso2017-question__q05"),
    // so take only its LAST segment as the container stem -- else the href
    // doubles to "prove/prove/<stem>#..." and 404s. Container pages emit at
    // prove/<stem-basename>, matching atomFrag's `prove/${stem}#${atomId}`.
    if (am && (dir === "prove" || dir == null)) h = `prove/${am[1].split("/").pop()}#${am[2]}`
    items.push({
      h,
      l: (m[3] || target).trim(),
      s: (m[4] || "").trim(),
      f: (stemFlag && stemFlag[target]) || "",   // ISO-2 for flagcdn; "" -> globe
      c: (stemCountry && stemCountry[target]) || "",
      lv: (stemLevel && stemLevel[target]) || "",
      y: (stemYear && stemYear[target]) || "",
    })
  }
  if (!items.length) return null
  const kept = lines.slice(0, head + 1).join("\n").replace(/\n+$/, "")
  const newContent = kept + "\n\n<div class=\"paged-list\" data-src=\"__SRC__\" data-count=\"" + items.length + "\"></div>\n"
  return { newContent, items }
}

// SPA (Spec 2 -- TikZ pilot): build-time TikZ reproductions. scripts/render-tikz.mjs
// renders tikz/<basename>.tex -> tikz-svg/<basename>.svg BEFORE this runs. Keyed by
// the LOWERCASED figure basename (vault uses mixed case like 1liv23T_p5_f8; the site
// path is lowercased). When an atom body embeds a figure that has a sidecar SVG, the
// embed is replaced by the inline SVG (crisp/scalable, no PNG request); the original
// PNG is untouched (still in the vault + olifis-assets, shown for every non-sidecar figure).
const SVG_FIGS = new Map()
try {
  const svgDir = path.join(process.env.RGF_BUILD || ROOT, "tikz-svg")
  if (existsSync(svgDir)) {
    for (const f of readdirSync(svgDir).filter((x) => x.endsWith(".svg"))) {
      // strip the XML prolog / DOCTYPE so the SVG inlines cleanly into markdown-passed HTML
      const svg = readFileSync(path.join(svgDir, f), "utf8").replace(/<\?xml[^>]*\?>\s*/i, "").replace(/<!DOCTYPE[^>]*>\s*/i, "").trim()
      SVG_FIGS.set(f.replace(/\.svg$/, "").toLowerCase(), svg)
    }
  }
} catch { /* no tikz-svg -- all figures stay PNG */ }

// Replace `![[_attachments/<dir>/<name>.png]]` embeds with the inline TikZ SVG when a
// sidecar reproduction exists for <name> (lowercased). No-op when SVG_FIGS is empty.
function injectFigSvg(content) {
  if (!SVG_FIGS.size) return content
  // Match both `![[_attachments/<dir>/<name>.png]]` and the bare `![[<name>.png]]`
  // Obsidian embed form (some atoms use one, some the other; case varies e.g.
  // SJPO_2010_...). Capture the basename, lowercase it for the sidecar lookup.
  return content.replace(/!\[\[(?:[^\]]*\/)?([^\]/]+?)\.png\]\]/gi, (full, name) => {
    const svg = SVG_FIGS.get(name.toLowerCase())
    return svg ? `\n\n<figure class="tikz-fig">\n${svg}\n</figure>\n\n` : full
  })
}

function transform(content) {
  // strip PDF links (kept as plain text label)
  content = content.replace(/\[([^\]]*)\]\(<[^>]*\.pdf[^>]*>\)/gi, "$1")
  content = content.replace(/\[([^\]]*)\]\([^)\s]*\.pdf[^)]*\)/gi, "$1")
  // turn **Fonte/Risposta/Soluzione** PDF wikilinks into plain text (no public PDFs)
  content = content.replace(/\[\[[^\]]*\.pdf(?:#[^\]|]*)?(?:\|([^\]]*))?\]\]/gi, (full, alias) => alias || "")
  content = content.replace(/ ·\s*$/gm, "")
  // SPA: atom-target wikilinks ([[<stem>__<atomId>...]]) no longer resolve to
  // their own page -- repoint to the fragment section prove/<stem>#<atomId> on
  // the container reader page. Applied globally here (transform() runs for every
  // page's body) so cross-references from soluzioni pages and concept-page prose
  // are covered too, not just links inside prove atom bodies. "__" in a wikilink
  // basename is reserved for the frozen atom-naming convention, so this never
  // matches concept/topic/method/skill wikilinks (which don't contain "__").
  // _h below (any pre-existing "#subheading" on the atom-target link) is captured
  // but intentionally dropped: the fragment now selects the atom itself, so a
  // second "#" is impossible. The atomRouter renders the whole atom (subheading
  // content included), so landing on the atom section still surfaces that text.
  content = content.replace(
    /\[\[([^\]|#]+?)__([a-z0-9]+)((?:#[^\]|]*)?)(\|[^\]]*)?\]\]/gi,
    (full, st, aid, _h, alias) => `[[prove/${sluggify(st)}#${aid.toLowerCase()}${alias || ""}]]`
  )
  content = injectFigSvg(content)
  return content
}

// Bilingual: merge hidden translation siblings into a body. Emits one
// <div class="qlang-switch" data-default="<native>"> then the native body,
// and per sibling a <div class="qlang-split" data-lang="<l>"> + its body. The
// client qlang.inline.ts partitions these blocks and toggles by flag. Title/H1
// stays native (frontmatter), so each sibling's translated H1 + trailing mutual
// backlink is stripped. Shared by the classic per-file loop and the SPA
// container-emission pass (atoms keep their qlang blocks inside the reader).
function mergeSiblings(base, body, nativeLang, siblings, transform) {
  if (!siblings.has(base)) return body
  const ORDER = { it: 0, en: 1, es: 2, pt: 3, de: 4, fr: 5 }
  const sibs = [...siblings.get(base)].sort((a, b) => (ORDER[a.lang] ?? 9) - (ORDER[b.lang] ?? 9))
  let merged = `<div class="qlang-switch" data-default="${nativeLang}"></div>\n\n` + body
  for (const s of sibs) {
    const b = transform(s.body)
      .replace(/^\s*#\s+.+?(?:\r?\n|$)/m, "")        // drop translated H1 (title comes from frontmatter)
      .replace(/\n?\[\[[^\]]*\]\]\s*$/, "")           // drop trailing mutual backlink to default
    merged += `\n\n<div class="qlang-split" data-lang="${s.lang}"></div>\n\n` + b.trim()
  }
  return merged
}

async function walk(dir, base = dir, out = []) {
  for (const ent of await fs.readdir(dir, { withFileTypes: true })) {
    if (ent.isDirectory()) {
      if (SKIP_DIRS.has(ent.name)) continue
      await walk(path.join(dir, ent.name), base, out)
    } else {
      out.push(path.relative(base, path.join(dir, ent.name)))
    }
  }
  return out
}

function tagVal(tags, prefix) {
  const t = (tags || []).find((x) => typeof x === "string" && x.startsWith(prefix))
  return t ? t.slice(prefix.length) : ""
}

// SPA (Task 6.4, Part B): vault tag slug -> cerca facet token map.
// The frontmatter tag slug (what on-page tag chips render as tags/<slug>) is
// the vault's OWN slug and can NOT be re-derived by re-slugifying the facet's
// display value client-side (verified: topic/oscillations-e-waves vs display
// "Oscillations & Waves"; livello/1-livello vs value "1° Livello"). So the
// map is built here, by co-occurrence, once per atom, from data already
// computed for the quesiti.json push.
//
// Prefix -> facet mapping (verified corpus facts -- the vault's frontmatter
// tag prefixes are EXACTLY: kg, graph, object, topic, paese, nazione, comp,
// cluster, argomento, difficolta, tipo-gara, livello, anno, multidisciplina):
//   topic/, object/     MULTI   -- zip with topics/objects display array by index
//   paese/, nazione/    SCALAR  -- country
//   comp/               SCALAR  -- comp_code
//   cluster/, argomento/ SCALAR -- cluster
//   livello/            SCALAR  -- level
//   anno/               SCALAR  -- year
//   difficolta/         DIRECT  -- suffix IS the value
//   tipo-gara/          DIRECT  -- suffix IS the value
//   kg/, graph/, multidisciplina/, any other -- OMIT (no facet)
// methods/skills have NO frontmatter tag prefix in this vault (they live only
// in **Metodi:**/**Competenze:** lines), so they need no slug mapping.
const TAGMAP_MULTI = { "topic/": "topics", "object/": "objects" }
const TAGMAP_SCALAR = {
  "paese/": "country", "nazione/": "country", "comp/": "comp_code",
  "cluster/": "cluster", "argomento/": "cluster", "livello/": "level", "anno/": "year",
}
const TAGMAP_DIRECT = { "difficolta/": "difficolta", "tipo-gara/": "tipo_gara" }
const TAGMAP_KNOWN_PREFIXES = [
  ...Object.keys(TAGMAP_MULTI), ...Object.keys(TAGMAP_SCALAR), ...Object.keys(TAGMAP_DIRECT),
  "kg/", "graph/", "multidisciplina/",
]

// Accumulates per-slug candidate-token VOTES (slug -> Map<token,count>) for one
// atom's tags, using the same facet values just computed for the quesiti.json
// push. Voting (not last-write-wins) makes the map robust to the small fraction
// of atoms whose MULTI zip mispairs: the correct token, appearing in the
// majority of atoms carrying the slug, wins in finalizeTagMap().
// `facets` = { topics, objects, country, comp_code, cluster, level, year }
// (topics/objects are the metaLinks() display arrays; the rest are the
// scalar strings, already stringified/defaulted as pushed into quesiti).
// `counters` = { skippedMulti, collisions, unmapped } accumulated across atoms.
function buildTagMap(tagVotes, tags, facets, counters) {
  const set = (slugRaw, token) => {
    // Key by the LOWERCASED slug: Quartz renders tag hrefs lowercased (a
    // frontmatter tag `paese/Canada` links to `.../cerca#tag=paese%2Fcanada`),
    // so cerca.inline.ts looks up the lowercased slug. Keying the map on the raw
    // mixed-case frontmatter tag would miss on the ~84 mixed-case tags
    // (country/comp/cluster values like Canada, Meccanica) -> no pre-select.
    const slug = slugRaw.toLowerCase()
    let votes = tagVotes[slug]
    if (!votes) { votes = tagVotes[slug] = new Map() }
    else if (!votes.has(token)) counters.collisions++   // slug saw a 2nd distinct candidate
    votes.set(token, (votes.get(token) || 0) + 1)
  }

  for (const [prefix, facetKey] of Object.entries(TAGMAP_MULTI)) {
    const matchTags = tags.filter((t) => typeof t === "string" && t.startsWith(prefix))
    if (!matchTags.length) continue
    const display = facets[facetKey] || []
    if (matchTags.length !== display.length) { counters.skippedMulti++; continue }  // zip guard: never guess pairing
    for (let i = 0; i < matchTags.length; i++) set(matchTags[i], `${facetKey}::${display[i]}`)
  }

  for (const [prefix, facetKey] of Object.entries(TAGMAP_SCALAR)) {
    const t = tags.find((x) => typeof x === "string" && x.startsWith(prefix))
    if (!t) continue
    const val = facets[facetKey]
    if (val === undefined || val === null || val === "") continue  // scalar-empty guard
    set(t, `${facetKey}::${val}`)
  }

  for (const [prefix, facetKey] of Object.entries(TAGMAP_DIRECT)) {
    const t = tags.find((x) => typeof x === "string" && x.startsWith(prefix))
    if (!t) continue
    const suffix = t.slice(prefix.length)
    if (!suffix) continue
    set(t, `${facetKey}::${suffix}`)
  }

  for (const t of tags) {
    if (typeof t !== "string" || !t.includes("/")) continue
    if (!TAGMAP_KNOWN_PREFIXES.some((p) => t.startsWith(p))) counters.unmapped++
  }
}

// Mark a dir Dropbox-ignored via its NTFS alternate-data-stream (same as
// `Set-Content -Stream com.dropbox.ignored`). content/ + staticgen/ are rm+recreated
// each run, so the flag must be re-written in-code or Dropbox re-syncs 20k+ files.
async function dropboxIgnore(dir) {
  try { await fs.writeFile(dir + ":com.dropbox.ignored", "1") } catch { /* non-NTFS / no perms */ }
}

async function main() {
  await fs.rm(CONTENT, { recursive: true, force: true })
  await fs.mkdir(CONTENT, { recursive: true })
  await dropboxIgnore(CONTENT)
  await fs.rm(CL_DIR, { recursive: true, force: true })
  await fs.mkdir(CL_DIR, { recursive: true })
  await dropboxIgnore(STATIC_GEN)
  // concept decorative icons: { note basename -> svg filename } in quartz/static/concept-icons/
  let ICON_MANIFEST = {}
  try {
    ICON_MANIFEST = JSON.parse(await fs.readFile(path.join(ROOT, "quartz", "static", "concept-icons", "manifest.json"), "utf8"))
  } catch { /* no icons yet */ }
  const files = await walk(VAULT)
  // pre-pass: stem (basename w/o .md) -> flag, so concept-list items (which link by
  // stem) can show the right flag without re-reading the target note.
  const stemFlag = {}      // stem -> ISO-2 code for flagcdn ("" = globe)
  const stemCountry = {}   // stem -> English country name (tooltip on the flag column)
  const stemLevel = {}     // stem -> competition level (from `livello/<x>` tag, fallback frontmatter level)
  const stemYear = {}      // stem -> competition year (frontmatter `year`)
  // Bilingual: default-stem -> [{lang, body}] hidden `secondary` translation siblings
  // (emitted by graphify-out/emit_siblings.py). Merged into their default quesito
  // page below; never emitted as their own page / indexed / graphed.
  const siblings = new Map()
  // Foreign provas often lack a livello tag AND an explicit `level`. Deduce the
  // competition level/round from the source pdf path + filename (folders encode
  // the round: UK/round1, Argentina/pruebas-nacionales, Russia/izho.kz, etc.) so
  // the Livello column is NEVER empty. Vocab stays in the existing set
  // (internazionale / nazionale / qualifica / locale / allenamento).
  const deriveLevel = (pdf, stem, cc) => {
    const p = ((pdf || "") + " " + (stem || "")).toLowerCase()
    cc = (cc || "").toLowerCase()
    if (/izho|zhautykov|ibero|nordic-baltic|nbpho/.test(p)) return "internazionale"
    const mg = p.match(/rund[e]?\s*([1-4])/)
    if (mg) return mg[1] === "1" || mg[1] === "2" ? "qualifica" : "nazionale"
    if (/germania\/ipho|\/ipho_/.test(p)) return "internazionale"
    if (/round1|\/r1[\/_]|_r1_|round_1/.test(p)) return "qualifica"
    if (/round2|\/r2[\/_]|_r2_|round_2/.test(p)) return "nazionale"
    if (/pruebas-nacional/.test(p)) return "nazionale"
    if (/pruebas-local/.test(p)) return "locale"
    if (/preparatori|actividades/.test(p)) return "allenamento"
    if (/\/rsf/.test(p)) return "nazionale"
    if (/locali|saragozza|samanca|cordoba|cantabria|jaen|leon|oaf|cuest|prueba|primera|segunda/.test(p)) return "locale"
    if (/f-?ma|fnet_ma|f=ma|webassign|exam1|quarter|qtr/.test(p)) return "qualifica"
    if (/semi|usapho|\bpoe\b|olympiad_\d{4}/.test(p)) return "nazionale"
    if (/fase\s*_?1|fase1|_n1/.test(p)) return "qualifica"
    if (/obf|brasil|fase/.test(p) || cc === "obf" || cc === "brasil") return "nazionale"
    if (/svizzera/.test(p)) return "nazionale"
    if (/canada/.test(p) || cc === "cap") return "nazionale"
    if (/nqe/.test(p)) return "qualifica"
    if (/asoe|australia/.test(p)) return "nazionale"
    if (/rupho|estonianproblems|russia/.test(p)) return "nazionale"
    if (/basic to advanced|libro|book|giappo/.test(p)) return "allenamento"
    if (/anacleto/.test(p)) return "nazionale"
    if (/colombia|india/.test(p)) return "nazionale"
    return "nazionale"
  }
  for (const rel of files) {
    if (!rel.endsWith(".md")) continue
    const raw = await fs.readFile(path.join(VAULT, rel), "utf8")
    const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
    if (!fm) continue
    const g = (k) => (fm[1].match(new RegExp("^" + k + ":\\s*(.+)$", "m")) || [, ""])[1].trim().replace(/^["']|["']$/g, "")
    const stem = path.basename(rel, ".md")
    // stash secondary translation siblings by their default's stem, then skip
    const tipoM = fm[1].match(/^tipo:\s*(.+)$/m)
    if (tipoM && tipoM[1].trim() === "quesito-translation") {
      const of = (fm[1].match(/^translation_of:\s*(.+)$/m) || [, ""])[1].trim()
      const lang = (fm[1].match(/^lang:\s*(.+)$/m) || [, ""])[1].trim()
      if (of && lang) {
        const body = raw.slice(fm[0].length).replace(/^\r?\n/, "")
        if (!siblings.has(of)) siblings.set(of, [])
        siblings.get(of).push({ lang, body })
      }
      continue
    }
    const n = nationInfo(g("country"), g("comp_code"), g("pdf"))
    stemFlag[stem] = n.iso
    stemCountry[stem] = n.name
    // Match only the `- livello/<x>` TAG line (anchored to list-item start), NOT
    // the `livello/` that occurs inside the pdf path `.../1livello/<year>/...`.
    const lvTag = (fm[1].match(/(?:^|\n)\s*-\s*livello\/([^\s'"]+)/) || [, ""])[1].replace(/-/g, " ").trim()
    let lv = lvTag || g("level")
    if (!lv || lv === "''" || lv.toLowerCase() === "na") lv = deriveLevel(g("pdf"), stem, g("comp_code"))
    stemLevel[stem] = lv
    const yr = g("year")
    stemYear[stem] = /^\d{4}$/.test(yr) ? yr : ""
  }
  // basename-slug -> folder-slug, so concept-list wikilinks resolve to the right
  // folder (Prove atoms vs Topics/Methods/Skills/Clusters notes). Mirrors Quartz's
  // "shortest" link resolution by last path segment.
  const noteFolder = new Map()
  for (const rel of files) {
    if (!rel.endsWith(".md")) continue
    const parts = rel.replace(/\.md$/, "").split(path.sep)
    const base = sluggify(parts[parts.length - 1])
    const dir = parts.slice(0, -1).map((p) => sluggify(p)).join("/")
    if (!noteFolder.has(base)) noteFolder.set(base, dir)
  }
  const quesiti = []
  const kwIndex = {}
  const tagmap = {}     // SPA (Task 6.4): final vault tag slug -> cerca facet token
  const tagVotes = {}   // slug -> Map<token,count>, reduced to tagmap by majority below
  const tagmapCounters = { skippedMulti: 0, collisions: 0, unmapped: 0 }
  let mdWritten = 0, assetsCopied = 0, clIdx = 0, pagedLists = 0
  const SIB_RE = /__(?:it|en|es|pt|de|fr)$/   // secondary translation sibling stems

  // --- SPA: group Prove atoms by stem so we emit ONE reader page per exam ---
  // Keyed by SLUG (not raw basename): vault stems are inconsistently cased
  // (e.g. "1LV06t", "1liv15T def") while atomIds carry their own uppercase
  // ("Q01"), so the classic-loop skip-guard below (`proveAtoms.has(sluggify(b))`)
  // and the container pass's parent lookup (`proveParents.get(stemSlug)`) only
  // agree if both maps are keyed by the same normalized slug.
  const proveAtoms = new Map()   // stem-slug -> [{ rel, base, atomId }]
  const proveParents = new Map() // stem-slug -> rel of the <stem>.md parent (if any)
  // old atom slug (prove/<stem>__qnn) -> prove/<stem>#<atomId>. Populated HERE (in
  // the grouping pass) rather than in the container-emission pass below, because
  // the main file loop -- which needs it to rewrite quesiti/kw hrefs (Task 3.1) --
  // runs BEFORE the container pass. This loop already has stem/base/atomId per atom.
  const atomFrag = new Map()
  for (const rel of files) {
    if (!rel.endsWith(".md")) continue
    if (rel.split(path.sep)[0].toLowerCase() !== "prove") continue
    const base = path.basename(rel, ".md")
    if (SIB_RE.test(base)) continue   // translation sibling, not its own atom -- merged via mergeSiblings
    const usc = base.indexOf("__")
    if (usc < 0) { proveParents.set(sluggify(base), rel); continue }
    const stem = sluggify(base.slice(0, usc))
    const atomId = base.slice(usc + 2).toLowerCase()          // e.g. "q01"
    if (!proveAtoms.has(stem)) proveAtoms.set(stem, [])
    proveAtoms.get(stem).push({ rel, base, atomId })
    atomFrag.set(`prove/${sluggify(base)}`, `prove/${stem}#${atomId}`)
  }
  for (const list of proveAtoms.values())
    list.sort((a, b) => a.atomId.localeCompare(b.atomId, "en", { numeric: true }))

  for (const rel of files) {
    if (rel.endsWith(".md") && IGNORE_NOTES.has(path.basename(rel, ".md"))) continue
    if (rel.endsWith(".md") && SIB_RE.test(path.basename(rel, ".md"))) continue  // merged into its default below
    let skipProvePage = false
    if (rel.endsWith(".md") && rel.split(path.sep)[0].toLowerCase() === "prove") {
      const b = path.basename(rel, ".md")
      if (b.includes("__") || proveAtoms.has(sluggify(b))) {
        skipProvePage = true  // prove atom OR a parent stem that has atoms -> emitted by container pass
      }
    }
    const src = path.join(VAULT, rel)
    // v5: emit at the lowercase slug path so pages match OFM's lowercase wikilink
    // hrefs (applies to both .md notes and _attachments assets).
    const dest = path.join(CONTENT, sluggify(rel.split(path.sep).join("/")))
    await fs.mkdir(path.dirname(dest), { recursive: true })
    if (!rel.endsWith(".md")) {
      await fs.copyFile(src, dest); assetsCopied++; continue
    }
    const raw = await fs.readFile(src, "utf8")
    let { data, content } = parseFrontmatter(raw)
    // Quesito/prova notes lack a `title`; Quartz would fall back to the raw slug
    // (e.g. "inpho2010-Q__Q03"). Derive a readable title from the first H1, AND strip
    // that H1 line from the body — Quartz's ArticleTitle already renders `title`, so a
    // leading body `# heading` would print the title a second time on every page.
    {
      const h1 = content.match(/^#\s+(.+?)\s*$/m)
      if (h1) {
        if (!data.title) data.title = h1[1].trim()
        content = content.replace(/^#\s+.+?[ \t]*(\r?\n|$)/m, "")
      }
    }
    let outContent = transform(content)
    // Big concept lists -> JSON + client pagination (tiny page HTML).
    const topDir = rel.split(path.sep)[0]
    if (CONCEPT_DIRS.includes(topDir)) {
      // decorative concept icon (sober vector) at the top of the page, if one exists
      const iconFile = ICON_MANIFEST[path.basename(rel, ".md")]
      if (iconFile) outContent = `<img class="concept-icon" src="../static/concept-icons/${iconFile}" alt="" loading="lazy">\n\n` + outContent
      const ex = extractConceptList(outContent, stemFlag, noteFolder, stemCountry, stemLevel, stemYear)
      if (ex) {
        const srcRel = "cl/" + clIdx + ".json"
        await fs.writeFile(path.join(CL_DIR, clIdx + ".json"), JSON.stringify(ex.items))
        outContent = ex.newContent.replace("__SRC__", srcRel)
        clIdx++; pagedLists++
      }
    }
    // Bilingual: merge hidden translation siblings into this default quesito page
    // (see mergeSiblings() above -- shared with the SPA container-emission pass).
    if (data.tipo === "quesito") {
      outContent = mergeSiblings(path.basename(rel, ".md"), outContent, data.lang || "it", siblings, transform)
    }
    // SPA: prove atoms + prove parents-with-atoms are emitted by the container
    // pass below (one reader page per stem) -- skip their classic per-file page.
    if (!skipProvePage) {
      await fs.writeFile(dest, matter.stringify(outContent, data))
      mdWritten++
    }
    if (data.tipo === "quesito") {
      const tags = Array.isArray(data.tags) ? data.tags : []
      const cluster = data.cluster ? String(data.cluster) : ""
      const ans = content.match(/^\*\*Risposta:\*\*\s*\*\*\s*([A-E])\s*\*\*/m)
      // SPA: repoint atom pages (old prove/<stem>__qnn slug) to their fragment
      // section prove/<stem>#<atomId> -- the atom no longer has its own page.
      const oldSlug = slugFromRel(rel)
      const href = atomFrag.get(oldSlug) || oldSlug
      const kw = keywords(content)
      if (kw) kwIndex[href] = kw
      const nat = nationInfo(data.country, data.comp_code, data.pdf)
      // Captured once, reused for BOTH the quesiti.json push AND the tagmap
      // (Task 6.4, Part B) -- avoids re-running metaLinks()/tagVal() twice.
      const topicsV = metaLinks(content, "Topic")
      const objectsV = metaLinks(content, "Objects")
      const levelV = data.level ? String(data.level) : ""
      const difficoltaV = tagVal(tags, "difficolta/")
      const tipoGaraV = tagVal(tags, "tipo-gara/")
      const yearV = data.year ?? ""
      const countryV = data.country ?? ""
      const compCodeV = data.comp_code ?? ""
      quesiti.push({
        href,
        flag: nat.iso,           // ISO-2 for flagcdn ("" -> globe)
        flag_name: nat.name,     // English country name (flag tooltip)
        competition: data.competition ?? "",
        comp_code: compCodeV,
        quesito: data.quesito ?? "",
        summary: summarize(content),
        answer: ans ? ans[1] : "",
        topics: topicsV,
        methods: metaLinks(content, "Metodi"),
        skills: metaLinks(content, "Competenze"),
        objects: objectsV,
        cluster: cluster ? [cluster] : [],
        level: levelV,
        difficolta: difficoltaV,
        tipo_gara: tipoGaraV,
        year: yearV,
        country: countryV,
      })
      buildTagMap(tagVotes, tags, {
        topics: topicsV, objects: objectsV, country: countryV,
        comp_code: compCodeV, cluster, level: levelV, year: yearV,
      }, tagmapCounters)
    }
  }

  // --- SPA: full offline tf-idf search index (Task 4.1) -- per-atom title/tags
  // meta and term counts, accumulated during the container pass below, then
  // reduced to tf-idf terms + corpus stats and written to
  // staticgen/atoms_fullindex.json (kept OFFLINE, never shipped to public/;
  // scripts/make-search-index.mjs projects the shipped desktop/mobile subsets
  // from it).
  const atomMeta = new Map()   // id ("prove/<stem>#<atomId>") -> { title, tags }
  const counts = {}            // id -> Map<term, count> (this atom's TEXT body)

  // --- SPA: emit one reader page per prove stem ---
  for (const [stem, atoms] of proveAtoms) {
    const stemSlug = sluggify(stem)
    // parent frontmatter (title/tags) from <stem>.md if present, else derive
    let title = stem, ptags = ["graph/prova"]
    const parentRel = proveParents.get(stemSlug)
    if (parentRel) {
      const praw = await fs.readFile(path.join(VAULT, parentRel), "utf8")
      const pf = parseFrontmatter(praw)
      if (pf.data.title) title = pf.data.title
      const h1 = pf.content.match(/^#\s+(.+?)\s*$/m)
      if (!pf.data.title && h1) title = h1[1].trim()
      if (Array.isArray(pf.data.tags)) ptags = pf.data.tags
    }
    const blocks = []
    for (const a of atoms) {
      const raw = await fs.readFile(path.join(VAULT, a.rel), "utf8")
      const pf = parseFrontmatter(raw)
      // atom title: frontmatter title, else atom body's own H1 (captured before
      // it's stripped below), else fall back to the raw atomId.
      const bodyH1 = pf.content.match(/^#\s+(.+?)\s*$/m)
      const atomTitle = pf.data.title || (bodyH1 ? bodyH1[1].trim() : a.atomId)
      let body = pf.content.replace(/^#\s+.+?[ \t]*(\r?\n|$)/m, "")   // drop leading H1 (title rendered by marker)
      const bodyForIndex = body   // TEXT body (pre-transform), for keywordCounts -- NOT the emitted HTML
      body = transform(body)
      // SPA (Task 5.1): capture this atom's own outbound graph links from its
      // post-transform body -- BEFORE mergeSiblings folds in translation-sibling
      // blocks, so links stay scoped to this atom's own (native-language)
      // content, not a translated duplicate of the same targets.
      const links = atomLinks(body, noteFolder)
      body = mergeSiblings(a.base, body, pf.data.lang || "it", siblings, transform)
      const atags = Array.isArray(pf.data.tags) ? pf.data.tags : []
      // atomFrag is populated in the grouping pass above (needed there before the
      // main file loop runs); this pass just consumes the same value implicitly
      // via stemSlug/a.atomId below.
      const id = `prove/${stemSlug}#${a.atomId}`
      atomMeta.set(id, { title: atomTitle, tags: atags, links })
      counts[id] = keywordCounts(bodyForIndex)
      // id= gives the marker a static scroll-anchor: hover-popovers (and no-JS
      // direct links) resolve prove/<stem>#qNN against the raw server-rendered
      // HTML, before atomRouter.inline.ts has detached/reinserted anything.
      blocks.push(
        `\n\n<span class="atom-split" id="${esc(a.atomId)}" data-atom="${esc(a.atomId)}" ` +
        `data-title="${esc(atomTitle)}" data-tags="${esc(atags.join(","))}"></span>\n\n` +
        body.trim()
      )
    }
    const mount = `<div class="atom-reader" data-prova="${esc(stemSlug)}"></div>\n`
    const data = { title, tipo: "prova", tags: ptags }
    const body = mount + "\n\n" + blocks.join("\n\n")
    const dest = path.join(CONTENT, "prove", `${stemSlug}.md`)
    await fs.mkdir(path.dirname(dest), { recursive: true })
    await fs.writeFile(dest, matter.stringify(body, data))
    mdWritten++
  }

  await fs.mkdir(path.dirname(STATIC_JSON), { recursive: true })
  await fs.writeFile(STATIC_JSON, JSON.stringify(quesiti))
  await fs.writeFile(KW_JSON, JSON.stringify(kwIndex))
  console.log(`keyword index: ${Object.keys(kwIndex).length} atoms, ${(JSON.stringify(kwIndex).length / 1e6).toFixed(1)}MB`)
  // SPA (Task 6.4): reduce per-slug candidate votes to the majority winner.
  // Robust to the small fraction of MULTI-zip mispairings -- the correct token,
  // carried by most atoms with the slug, outvotes the noise. Tie -> highest-count
  // first seen (Map preserves insertion order). `contested` = slugs where the
  // winner did NOT have a strict majority (>50%) -- a data-quality signal.
  let contested = 0
  for (const [slug, votes] of Object.entries(tagVotes)) {
    let best = null, bestN = -1, total = 0
    for (const [token, n] of votes) { total += n; if (n > bestN) { bestN = n; best = token } }
    tagmap[slug] = best
    if (bestN * 2 <= total) contested++
  }
  await fs.writeFile(TAGMAP_JSON, JSON.stringify(tagmap))
  console.log(
    `tagmap: ${Object.keys(tagmap).length} slugs, ` +
    `${tagmapCounters.skippedMulti} skipped-multi-family atoms, ` +
    `${tagmapCounters.collisions} multi-candidate slugs, ${contested} contested (no strict majority), ` +
    `${tagmapCounters.unmapped} unmapped-prefix occurrences`
  )

  // --- SPA: reduce accumulated per-atom term counts to the FULL offline tf-idf
  // index (Task 4.1). Kept OUT of public/ -- scripts/make-search-index.mjs reads
  // this to project the shipped desktop/mobile indices at any size budget without
  // re-parsing the vault.
  {
    const N = Object.keys(counts).length
    const df = {}
    for (const c of Object.values(counts)) for (const t of c.keys()) df[t] = (df[t] || 0) + 1
    const atoms = {}
    for (const [id, c] of Object.entries(counts)) {
      const [slug, frag] = id.split("#")
      const rec = atomMeta.get(id) || {}
      const terms = [...c.entries()]
        .map(([t, tf]) => [t, tf * Math.log(N / df[t])])
        .sort((a, b) => b[1] - a[1])
        .slice(0, 300)                       // high safety cap; NOT the shipped size
      atoms[id] = { slug, frag, title: rec.title || frag, tags: rec.tags || [], links: rec.links || [], terms }
    }
    const fullIndexPath = path.join(STATIC_GEN, "atoms_fullindex.json")
    const json = JSON.stringify({ N, df, atoms })
    await fs.writeFile(fullIndexPath, json)
    console.log(`full tf-idf index: ${N} atoms, ${(Buffer.byteLength(json) / 1e6).toFixed(1)}MB (offline only, not shipped)`)
  }

  const nProve = proveAtoms.size
  const AREAS = [
    ["meccanica", "Meccanica", "cinematica, dinamica, urti"],
    ["elettromagnetismo", "Elettromagnetismo", "campi, circuiti, induzione"],
    ["termodinamica", "Termodinamica", "gas, calore, cicli"],
    ["ottica", "Ottica", "lenti, raggi, interferenza"],
    ["onde-e-oscillazioni", "Onde e Oscillazioni", "moti armonici, onde"],
    ["fluidi", "Fluidi", "statica e dinamica dei fluidi"],
    ["gravitazione-e-astrofisica", "Gravitazione e Astrofisica", "orbite, campi, astrofisica"],
    ["fisica-moderna", "Fisica Moderna", "quanti, relatività, nucleare"],
  ]
  const areaCards = AREAS.map(([slug, name, desc]) =>
    `<a class="home-area" href="clusters/${slug}"><img src="static/area-icons/${slug}.webp" alt="" loading="lazy" width="400" height="400"><div class="home-area-n">${name}</div><div class="home-area-m">${desc}</div></a>`
  ).join("\n")
  const home = `---
title: Raccolta Gare di Fisica
---

<section class="home-hero">
<div class="home-hero-main">
<p class="home-eyebrow">Archivio didattico &middot; senza scopo di lucro</p>
<h1 class="home-title">Raccolta Gare di Fisica</h1>
<p class="home-lede">Olimpiadi Italiane della Fisica, Gara a Squadre, IPhO/EuPhO e olimpiadi di molti altri paesi &mdash; ogni gara <b>atomizzata in quesiti</b>, con testo, figure, soluzione e classificazione per <b>argomento</b>, <b>metodo</b> e <b>abilità</b>.</p>
<a class="home-searchcta" href="cerca">
<span class="home-searchcta-ic">&#9906;</span>
<span class="home-searchcta-ph">Cerca per gara, anno, livello, area, metodo&hellip;</span>
<span class="home-searchcta-go">Ricerca multi-tag</span>
</a>
</div>
<div class="home-stats">
<div class="home-stat home-stat--accent"><div class="home-stat-n">${quesiti.length}</div><div class="home-stat-l">quesiti classificati</div></div>
<div class="home-stat"><div class="home-stat-n">${nProve}</div><div class="home-stat-l">prove atomizzate</div></div>
<div class="home-stat"><div class="home-stat-n">8</div><div class="home-stat-l">aree tematiche</div></div>
<div class="home-stat"><div class="home-stat-n">40+</div><div class="home-stat-l">enti e paesi</div></div>
</div>
</section>

<section class="home-section">
<div class="home-section-head"><h2>Aree tematiche</h2><a href="clusters/">tutti i cluster &rarr;</a></div>
<div class="home-areas">
${areaCards}
</div>
</section>

<section class="home-section">
<div class="home-section-head"><h2>Modi di esplorare</h2></div>
<div class="home-modes">
<a class="home-mode home-mode--graph" href="cerca"><div class="home-mode-k">Ricerca</div><div class="home-mode-t">Ricerca per più tag</div><div class="home-mode-d">Filtra i ${quesiti.length} quesiti combinando gara, anno, livello, difficoltà, area, argomento, metodo e abilità.</div></a>
<a class="home-mode" href="topics"><div class="home-mode-k">Concetti</div><div class="home-mode-t">Argomenti</div><div class="home-mode-d">Naviga per argomento fisico specifico, dal generale al particolare.</div></a>
<a class="home-mode" href="methods"><div class="home-mode-k">Concetti</div><div class="home-mode-t">Metodi risolutivi</div><div class="home-mode-d">Le tecniche e le strategie ricorrenti per risolvere i problemi.</div></a>
<a class="home-mode" href="skills"><div class="home-mode-k">Concetti</div><div class="home-mode-t">Abilità</div><div class="home-mode-d">Le competenze allenate da ciascun quesito.</div></a>
<a class="home-mode" href="objects"><div class="home-mode-k">Concetti</div><div class="home-mode-t">Oggetti</div><div class="home-mode-d">Gli oggetti fisici ricorrenti nei problemi: corpi, dispositivi, strumenti.</div></a>
<a class="home-mode" href="prove"><div class="home-mode-k">Fonti</div><div class="home-mode-t">Prove</div><div class="home-mode-d">Sfoglia le ${nProve} prove, ciascuna atomizzata nei suoi quesiti.</div></a>
</div>
</section>

<details class="home-credits">
<summary>Crediti e fonti</summary>

I testi delle prove sono proprietà dei rispettivi **enti organizzatori**, qui citati come fonte. Questo è un archivio **didattico, senza scopo di lucro**: i quesiti sono raccolti, tradotti e classificati a fini di studio. Per segnalazioni o richieste di rimozione: [gio.borghi@gmail.com](mailto:gio.borghi@gmail.com).

**Italia.** Le *Olimpiadi Italiane della Fisica* (Gara di 1° e 2° livello, Gara Nazionale), la *Gara a Squadre di Fisica* e i *Giochi di Anacleto* sono organizzati dall'**[AIF – Associazione per l'Insegnamento della Fisica](https://www.aif.it/)** per conto del Ministero dell'Istruzione e del Merito — sito delle olimpiadi: [olifis.it](https://www.olifis.it/), Giochi di Anacleto: [giochidianacleto.it](https://www.giochidianacleto.it/). Tutti i testi delle gare italiane sono dell'AIF.

**Competizioni internazionali.** [IPhO – International Physics Olympiad](https://www.ipho-official.org/); [EuPhO – European Physics Olympiad](https://eupho.ee/); APhO – Asian Physics Olympiad; [PLANCKS](https://plancks.org/) (IAPS – International Association of Physics Students); OPhO – Online Physics Olympiad; WoPhO – World Physics Olympiad.

**Altri paesi (enti organizzatori).** Brasile — *OBF*, [SBF – Sociedade Brasileira de Física](https://www.sbfisica.org.br/); India — *NSEP/INPhO/INJSO*, [IAPT](https://www.iapt.org.in/) e [HBCSE–TIFR](https://olympiads.hbcse.tifr.res.in/); USA — *USAPhO / F=ma*, [AAPT – American Association of Physics Teachers](https://www.aapt.org/); Regno Unito — [BPhO – British Physics Olympiad](https://www.bpho.org.uk/); Canada — [CAP – Canadian Association of Physicists](https://www.cap.ca/); Russia — *Всероссийская олимпиада школьников* (Russian Physics Olympiad); Spagna — *Olimpiada Española de Física*, [RSEF – Real Sociedad Española de Física](https://rsef.es/); Germania — *Auswahlwettbewerb zur IPhO*, IPN Kiel / [DPG](https://www.dpg-physik.de/); Argentina — *Olimpíada Argentina de Física* (OAF); Svizzera — [Swiss Physics Olympiad](https://physics.olympiad.ch/); Australia — *Australian Physics Olympiad*, [Australian Science Innovations](https://www.asi.edu.au/); Giappone — *Japan Physics Olympiad* (JPhO); Singapore — *Singapore Physics Olympiad*, Institute of Physics Singapore; Hong Kong — *Hong Kong Physics Olympiad*; Colombia — *Olimpiadas Colombianas de Física*; Nordic-Baltic — *NBPhO*; Iberoamericana — *Olimpiada Iberoamericana de Física* (OIbF); Kazakhstan — *International Zhautykov Olympiad* (IZhO).

Se un ente desidera una citazione diversa o la rimozione dei propri materiali, lo aggiorneremo o rimuoveremo prontamente.

</details>
`
  await fs.writeFile(path.join(CONTENT, "index.md"), home)

  const cerca = `---
title: Ricerca per più tag
---

Seleziona uno o più tag per filtrare i ${quesiti.length} quesiti classificati. L'interruttore sceglie come combinarli: **AND tra categorie** (OR nella stessa categoria, AND tra categorie diverse - es. due anni si sommano, un argomento le interseca) oppure **OR** (qualsiasi tag selezionato, unione).

<div id="cerca"></div>
`
  await fs.writeFile(path.join(CONTENT, "cerca.md"), cerca)

  console.log(`md written ${mdWritten}, assets copied ${assetsCopied}, indexed ${quesiti.length} quesiti, paginated ${pagedLists} concept lists`)
}
main()
