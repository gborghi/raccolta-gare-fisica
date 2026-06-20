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
const CONTENT = path.join(ROOT, "content")
const STATIC_JSON = path.join(ROOT, "quartz", "static", "quesiti.json")
const SKIP_DIRS = new Set(["tmp_imgs"])

function sluggify(s) {
  return s.split("/").map((seg) =>
    seg.replace(/\s/g, "-").replace(/&/g, "-and-").replace(/%/g, "-percent").replace(/\?/g, "").replace(/#/g, "")
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
  const files = await walk(VAULT)
  const quesiti = []
  let mdWritten = 0, assetsCopied = 0
  for (const rel of files) {
    const src = path.join(VAULT, rel)
    const dest = path.join(CONTENT, rel)
    await fs.mkdir(path.dirname(dest), { recursive: true })
    if (!rel.endsWith(".md")) {
      await fs.copyFile(src, dest); assetsCopied++; continue
    }
    const raw = await fs.readFile(src, "utf8")
    const { data, content } = parseFrontmatter(raw)
    await fs.writeFile(dest, matter.stringify(transform(content), data))
    mdWritten++
    if (data.tipo === "quesito") {
      const tags = Array.isArray(data.tags) ? data.tags : []
      const cluster = data.cluster ? String(data.cluster) : ""
      const ans = content.match(/^\*\*Risposta:\*\*\s*\*\*\s*([A-E])\s*\*\*/m)
      quesiti.push({
        href: slugFromRel(rel),
        competition: data.competition ?? "",
        comp_code: data.comp_code ?? "",
        quesito: data.quesito ?? "",
        summary: summarize(content),
        answer: ans ? ans[1] : "",
        topics: metaLinks(content, "Topic"),
        methods: metaLinks(content, "Metodi"),
        skills: metaLinks(content, "Competenze"),
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

  const home = `---
title: Raccolta Gare di Fisica
---

Archivio di gare di fisica — Olimpiadi Italiane della Fisica (1° e 2° livello, Gara Nazionale), Gara a Squadre, IPhO/EuPhO e olimpiadi di altri paesi (India e oltre) — con testo, figure, risposta/soluzione e classificazione per **argomento**, **metodo** e **abilità**.

## Esplora

- **Aree** (macro-argomenti): [[Meccanica]] · [[Elettromagnetismo]] · [[Termodinamica]] · [[Ottica]] · [[Onde e Oscillazioni]] · [[Fluidi]] · [[Gravitazione e Astrofisica]] · [[Fisica Moderna]] — cartella *Clusters*
- **Argomenti**: cartella *Topics* · **Metodi risolutivi**: cartella *Methods* · **Abilità**: cartella *Skills*
- **Prove**: cartella *Prove* (ogni gara, atomizzata in quesiti)

Usa la **[ricerca per più tag](cerca)** per filtrare i ${quesiti.length} quesiti classificati combinando gara, anno, livello, difficoltà, area, argomento, metodo e abilità. In alternativa: ricerca testuale (in alto) o il **grafo** della conoscenza. Ogni elenco nelle pagine-concetto è navigabile via wikilink.
`
  await fs.writeFile(path.join(CONTENT, "index.md"), home)

  const cerca = `---
title: Ricerca per più tag
---

Seleziona uno o più tag per filtrare i ${quesiti.length} quesiti classificati. Usa l'interruttore **TUTTI / QUALSIASI** per richiedere tutti i tag (intersezione) o almeno uno (unione).

<div id="cerca"></div>
`
  await fs.writeFile(path.join(CONTENT, "cerca.md"), cerca)

  console.log(`md written ${mdWritten}, assets copied ${assetsCopied}, indexed ${quesiti.length} quesiti`)
}
main()
