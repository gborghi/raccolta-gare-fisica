// Preprocess the physics "Knowledge Graph" Obsidian vault into Quartz content.
// - copies notes (.md) into ./content (frontmatter re-emitted cleanly)
// - copies non-md assets (figure PNGs in _attachments/) so embeds resolve
// - strips links to local PDFs (competition PDFs are not published)
// - emits ./quartz/static/quesiti.json (the 'tipo: quesito' subset) for /cerca
import { promises as fs } from "node:fs"
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
// Heavy, 100%-regenerable build artifacts (content copy + public output) live
// OUTSIDE Dropbox: Dropbox locks files mid-sync (rm "Device or resource busy")
// and would thrash on 20k+ files each build. Source stays in Dropbox (backed up).
const BUILD = process.env.RGF_BUILD || "C:/Users/utente/site-build"
const CONTENT = path.join(BUILD, "content")
// Generated static JSON (per-concept lists, quesiti index, keyword index) ALSO live
// outside Dropbox: preprocess rm+recreates `cl/` each run and Dropbox locks it
// (EBUSY rmdir). The deploy copies STATIC_GEN/* into public/static AFTER quartz build
// (these JSONs are fetched client-side at runtime, not needed during the build).
const STATIC_GEN = path.join(BUILD, "staticgen")
const STATIC_JSON = path.join(STATIC_GEN, "quesiti.json")
const CL_DIR = path.join(STATIC_GEN, "cl")   // per-concept paginated-list JSON
const KW_JSON = path.join(STATIC_GEN, "quesiti_kw.json") // hidden full-text keyword index (href -> keywords)

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
const SKIP_DIRS = new Set(["tmp_imgs"])
// stray root notes that pollute the Explorer sidebar with broken/empty entries
// (the faceted /cerca search covers navigation). Skipped at publish time.
const IGNORE_NOTES = new Set(["T3-Answersheet-it (4 files merged)", "_Home"])
const CONCEPT_DIRS = ["Topics", "Methods", "Skills", "Clusters"]

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

// Pull wikilink targets from a "**Label:** [[A]], [[B (metodo)|alias]]" meta line.
function metaLinks(content, label) {
  const re = new RegExp("^\\*\\*" + label + ":\\*\\*(.*)$", "m")
  const m = content.match(re)
  if (!m) return []
  return [...m[1].matchAll(/\[\[([^\]|#]+?)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/g)].map((x) => x[1].trim())
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
    const hbase = dir != null ? (dir ? dir + "/" + tslug : tslug) : "prove/" + tslug
    items.push({
      h: hbase + anchor,
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

function transform(content) {
  // strip PDF links (kept as plain text label)
  content = content.replace(/\[([^\]]*)\]\(<[^>]*\.pdf[^>]*>\)/gi, "$1")
  content = content.replace(/\[([^\]]*)\]\([^)\s]*\.pdf[^)]*\)/gi, "$1")
  // turn **Fonte/Risposta/Soluzione** PDF wikilinks into plain text (no public PDFs)
  content = content.replace(/\[\[[^\]]*\.pdf(?:#[^\]|]*)?(?:\|([^\]]*))?\]\]/gi, (full, alias) => alias || "")
  content = content.replace(/ ·\s*$/gm, "")
  return content
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

async function main() {
  await fs.rm(CONTENT, { recursive: true, force: true })
  await fs.mkdir(CONTENT, { recursive: true })
  await fs.rm(CL_DIR, { recursive: true, force: true })
  await fs.mkdir(CL_DIR, { recursive: true })
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
    const n = nationInfo(g("country"), g("comp_code"), g("pdf"))
    const stem = path.basename(rel, ".md")
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
  let mdWritten = 0, assetsCopied = 0, clIdx = 0, pagedLists = 0
  for (const rel of files) {
    if (rel.endsWith(".md") && IGNORE_NOTES.has(path.basename(rel, ".md"))) continue
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
    await fs.writeFile(dest, matter.stringify(outContent, data))
    mdWritten++
    if (data.tipo === "quesito") {
      const tags = Array.isArray(data.tags) ? data.tags : []
      const cluster = data.cluster ? String(data.cluster) : ""
      const ans = content.match(/^\*\*Risposta:\*\*\s*\*\*\s*([A-E])\s*\*\*/m)
      const href = slugFromRel(rel)
      const kw = keywords(content)
      if (kw) kwIndex[href] = kw
      const nat = nationInfo(data.country, data.comp_code, data.pdf)
      quesiti.push({
        href,
        flag: nat.iso,           // ISO-2 for flagcdn ("" -> globe)
        flag_name: nat.name,     // English country name (flag tooltip)
        competition: data.competition ?? "",
        comp_code: data.comp_code ?? "",
        quesito: data.quesito ?? "",
        summary: summarize(content),
        answer: ans ? ans[1] : "",
        topics: metaLinks(content, "Topic"),
        methods: metaLinks(content, "Metodi"),
        skills: metaLinks(content, "Competenze"),
        objects: metaLinks(content, "Objects"),
        cluster: cluster ? [cluster] : [],
        level: data.level ? String(data.level) : "",
        difficolta: tagVal(tags, "difficolta/"),
        tipo_gara: tagVal(tags, "tipo-gara/"),
        year: data.year ?? "",
        country: data.country ?? "",
      })
    }
  }
  await fs.mkdir(path.dirname(STATIC_JSON), { recursive: true })
  await fs.writeFile(STATIC_JSON, JSON.stringify(quesiti))
  await fs.writeFile(KW_JSON, JSON.stringify(kwIndex))
  console.log(`keyword index: ${Object.keys(kwIndex).length} atoms, ${(JSON.stringify(kwIndex).length / 1e6).toFixed(1)}MB`)

  const home = `---
title: Raccolta Gare di Fisica
---

Archivio di gare di fisica — Olimpiadi Italiane della Fisica (1° e 2° livello, Gara Nazionale), Gara a Squadre, IPhO/EuPhO e olimpiadi di altri paesi (India e oltre) — con testo, figure, risposta/soluzione e classificazione per **argomento**, **metodo** e **abilità**.

## Esplora

- **Aree** (macro-argomenti): [[Meccanica]] · [[Elettromagnetismo]] · [[Termodinamica]] · [[Ottica]] · [[Onde e Oscillazioni]] · [[Fluidi]] · [[Gravitazione e Astrofisica]] · [[Fisica Moderna]] — cartella *Clusters*
- **Argomenti**: cartella *Topics* · **Metodi risolutivi**: cartella *Methods* · **Abilità**: cartella *Skills*
- **Prove**: cartella *Prove* (ogni gara, atomizzata in quesiti)

Usa la **[ricerca per più tag](cerca)** per filtrare i ${quesiti.length} quesiti classificati combinando gara, anno, livello, difficoltà, area, argomento, metodo e abilità. In alternativa: ricerca testuale (in alto) o il **grafo** della conoscenza. Ogni elenco nelle pagine-concetto è navigabile via wikilink.

## Crediti e fonti

I testi delle prove sono proprietà dei rispettivi **enti organizzatori**, qui citati come fonte. Questo è un archivio **didattico, senza scopo di lucro**: i quesiti sono raccolti, tradotti e classificati a fini di studio. Per segnalazioni o richieste di rimozione: [gio.borghi@gmail.com](mailto:gio.borghi@gmail.com).

**Italia.** Le *Olimpiadi Italiane della Fisica* (Gara di 1° e 2° livello, Gara Nazionale), la *Gara a Squadre di Fisica* e i *Giochi di Anacleto* sono organizzati dall'**[AIF – Associazione per l'Insegnamento della Fisica](https://www.aif.it/)** per conto del Ministero dell'Istruzione e del Merito — sito delle olimpiadi: [olifis.it](https://www.olifis.it/), Giochi di Anacleto: [giochidianacleto.it](https://www.giochidianacleto.it/). Tutti i testi delle gare italiane sono dell'AIF.

**Competizioni internazionali.** [IPhO – International Physics Olympiad](https://www.ipho-official.org/); [EuPhO – European Physics Olympiad](https://eupho.ee/); APhO – Asian Physics Olympiad; [PLANCKS](https://plancks.org/) (IAPS – International Association of Physics Students); OPhO – Online Physics Olympiad; WoPhO – World Physics Olympiad.

**Altri paesi (enti organizzatori).** Brasile — *OBF*, [SBF – Sociedade Brasileira de Física](https://www.sbfisica.org.br/); India — *NSEP/INPhO/INJSO*, [IAPT](https://www.iapt.org.in/) e [HBCSE–TIFR](https://olympiads.hbcse.tifr.res.in/); USA — *USAPhO / F=ma*, [AAPT – American Association of Physics Teachers](https://www.aapt.org/); Regno Unito — [BPhO – British Physics Olympiad](https://www.bpho.org.uk/); Canada — [CAP – Canadian Association of Physicists](https://www.cap.ca/); Russia — *Всероссийская олимпиада школьников* (Russian Physics Olympiad); Spagna — *Olimpiada Española de Física*, [RSEF – Real Sociedad Española de Física](https://rsef.es/); Germania — *Auswahlwettbewerb zur IPhO*, IPN Kiel / [DPG](https://www.dpg-physik.de/); Argentina — *Olimpíada Argentina de Física* (OAF); Svizzera — [Swiss Physics Olympiad](https://physics.olympiad.ch/); Australia — *Australian Physics Olympiad*, [Australian Science Innovations](https://www.asi.edu.au/); Giappone — *Japan Physics Olympiad* (JPhO); Singapore — *Singapore Physics Olympiad*, Institute of Physics Singapore; Hong Kong — *Hong Kong Physics Olympiad*; Colombia — *Olimpiadas Colombianas de Física*; Nordic-Baltic — *NBPhO*; Iberoamericana — *Olimpiada Iberoamericana de Física* (OIbF); Kazakhstan — *International Zhautykov Olympiad* (IZhO).

Se un ente desidera una citazione diversa o la rimozione dei propri materiali, lo aggiorneremo o rimuoveremo prontamente.
`
  await fs.writeFile(path.join(CONTENT, "index.md"), home)

  const cerca = `---
title: Ricerca per più tag
---

Seleziona uno o più tag per filtrare i ${quesiti.length} quesiti classificati. Usa l'interruttore **TUTTI / QUALSIASI** per richiedere tutti i tag (intersezione) o almeno uno (unione).

<div id="cerca"></div>
`
  await fs.writeFile(path.join(CONTENT, "cerca.md"), cerca)

  console.log(`md written ${mdWritten}, assets copied ${assetsCopied}, indexed ${quesiti.length} quesiti, paginated ${pagedLists} concept lists`)
}
main()
