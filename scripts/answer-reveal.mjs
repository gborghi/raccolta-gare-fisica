// answer-reveal.mjs -- turn every quesito's "**Risposta:** X" / "**Answer:** X" footer line in
// content/ into a closed <details class="q-answer"> (click to reveal), with the button text in
// the language of the block (qlang-switch default / qlang-split data-lang). A translated sibling
// block without its own answer line inherits the mother's answer. Idempotent: transformed
// lines no longer match, and blocks already holding a q-answer are left alone.
// Lines that are notes, not answers ("vedi la soluzione ufficiale", "dimostrazione -- ...",
// "risposta aperta", BPhO mark-scheme notes...) stay as they are.
// Usage: node scripts/answer-reveal.mjs [contentDir=content]
import fs from "node:fs"
import path from "node:path"

const ROOT = path.resolve(process.argv[2] || "content")
const LABELS = {
  it: "Mostra risposta", en: "Show answer", fr: "Afficher la réponse", es: "Mostrar respuesta",
  pt: "Mostrar resposta", de: "Antwort anzeigen", nl: "Toon antwoord", ru: "Показать ответ",
  uk: "Показати відповідь", pl: "Pokaż odpowiedź", ro: "Arată răspunsul", hu: "Válasz mutatása",
  cs: "Zobrazit odpověď", sk: "Zobraziť odpoveď", et: "Näita vastust", ca: "Mostra la resposta",
  ja: "答えを表示", zh: "显示答案", ko: "정답 보기", tr: "Cevabı göster", el: "Εμφάνιση απάντησης",
  sv: "Visa svar", da: "Vis svar", no: "Vis svar", fi: "Näytä vastaus", hr: "Prikaži odgovor",
  sl: "Pokaži odgovor", sr: "Прикажи одговор", bg: "Покажи отговора", lt: "Rodyti atsakymą",
  lv: "Rādīt atbildi", vi: "Hiện đáp án", id: "Tampilkan jawaban", fa: "نمایش پاسخ", ar: "إظهار الإجابة",
}
const ANS_RE =
  /^\*\*(Risposta|Answer|Réponse|Respuesta|Resposta|Antwort|Antwoord|Ответ|Відповідь|Odpowiedź|Răspuns|Válasz|Odpověď|Vastus|答案|解答|Cevap|Svar)\s*:\*\*[ \t]*(.+?)\s*$/
const NOTE_RE =
  /(soluzione ufficiale|official solution|solution officielle|solución oficial|vedi|vedere|see the|ritrascriv|schema ufficiale|mark scheme|nessuna soluzione|no official|dimostrazione|^proof|risposta aperta|open answer|corrigé|griglia|grid|figura|figure|non disponibile|not available|^n\/?d$|^[-—–?]+$|^\.\.\.$)/i

const label = (lang) => LABELS[(lang || "it").toLowerCase().slice(0, 2)] || LABELS.en

// "**B** · [Soluzioni (PDF)](url)" -> { value: "B", rest: "[Soluzioni (PDF)](url)" }
function parseValue(v) {
  let value = v, rest = ""
  const m = v.match(/^\*\*(.+?)\*\*\s*(?:[·•|—–-]\s*)?(.*)$/)
  if (m) { value = m[1].trim(); rest = m[2].trim() }
  else {
    const k = v.search(/\s+[·•]\s+\[/)
    if (k > 0) { rest = v.slice(k).replace(/^\s+[·•]\s+/, ""); value = v.slice(0, k).trim() }
  }
  if (!value || (NOTE_RE.test(value) && !value.includes("$"))) return null
  return { value, rest }
}
const block = (value, lang) =>
  `<details class="q-answer">\n<summary>${label(lang)}</summary>\n\n**${value}**\n\n</details>`

const FM_LANG = /^lang:\s*["']?([a-z]{2})/m
const SWITCH = /<div class="qlang-switch" data-default="([a-zA-Z-]+)"/
const SPLIT = /<div class="qlang-split" data-lang="([a-zA-Z-]+)"/
const ATOM = /<span class="atom-split" /

export function transform(text) {
  if (!/\*\*(?:[^*\n]{2,20}):\*\*/.test(text) && !text.includes("q-answer")) return { text, n: 0, inh: 0 }
  let fmEnd = 0
  if (text.startsWith("---")) { const e = text.indexOf("\n---", 3); if (e > 0) fmEnd = text.indexOf("\n", e + 4) + 1 || text.length }
  const fm = text.slice(0, fmEnd)
  const pageLang = (fm.match(FM_LANG) || [, "it"])[1]
  const lines = text.slice(fmEnd).split("\n")
  // segment into atoms -> blocks (mother block + qlang-split sibling blocks)
  const atoms = [] // [{blocks:[{lang, lines:[]}]}]
  let atom = { blocks: [{ lang: pageLang, lines: [], split: false }] }
  atoms.push(atom)
  let def = pageLang
  for (const ln of lines) {
    if (ATOM.test(ln)) { atom = { blocks: [{ lang: pageLang, lines: [], split: false }] }; atoms.push(atom); def = pageLang }
    let m
    if ((m = ln.match(SWITCH))) { def = m[1]; atom.blocks[0].lang = def }
    if ((m = ln.match(SPLIT))) { atom.blocks.push({ lang: m[1], lines: [], split: true }) }
    atom.blocks[atom.blocks.length - 1].lines.push(ln)
  }
  let n = 0, inh = 0
  for (const a of atoms) {
    let mother = null
    for (const b of a.blocks) {
      let has = b.lines.some((l) => l.includes('class="q-answer"'))
      for (let i = 0; i < b.lines.length; i++) {
        const m = b.lines[i].match(ANS_RE)
        if (!m) continue
        const p = parseValue(m[2])
        if (!p) continue
        b.lines[i] = "\n" + block(p.value, b.lang) + "\n" + (p.rest ? `\n${p.rest}\n` : "")
        if (!mother) mother = p.value
        has = true; n++
      }
      b.has = has
      if (!b.split && !mother) {
        const j = b.lines.findIndex((l) => l.includes('class="q-answer"'))
        if (j >= 0) { const v = b.lines.slice(j, j + 6).join("\n").match(/\n\*\*(.+)\*\*\n/); if (v) mother = v[1] }
      }
    }
    if (!mother) continue
    for (const b of a.blocks) {
      if (!b.split || b.has) continue
      let k = b.lines.length
      while (k > 0 && b.lines[k - 1].trim() === "") k--
      b.lines.splice(k, 0, "", block(mother, b.lang))
      inh++
    }
  }
  const out = fm + atoms.flatMap((a) => a.blocks.flatMap((b) => b.lines)).join("\n")
  return { text: out, n, inh }
}

function* walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (e.name.startsWith(".") || e.name === "_attachments") continue
    const p = path.join(d, e.name)
    if (e.isDirectory()) yield* walk(p)
    else if (e.name.endsWith(".md")) yield p
  }
}

if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith("answer-reveal.mjs")) {
  let files = 0, changed = 0, N = 0, I = 0
  for (const f of walk(ROOT)) {
    files++
    const src = fs.readFileSync(f, "utf8")
    const { text, n, inh } = transform(src)
    if (text !== src) { fs.writeFileSync(f, text); changed++; N += n; I += inh }
  }
  console.log(`answer-reveal: ${files} files, ${changed} changed, ${N} answers hidden, ${I} inherited by siblings`)
}
