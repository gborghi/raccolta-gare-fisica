// Competition labels for display.
//
// Some vault notes carry a comp_code that is just the country name cut to 6
// characters (comp_code "Svizze" with country "Svizzera"; likewise Argent, Brasil,
// Colomb, Giappo, Austra, Nordic for Nordic-Baltic, iberoa for iberoamericana).
// The prova H1 is built from it ("# Svizze 2011"), so titles, search results and the
// /prove/ listing showed the cut name. Real codes (IPhO, OBF, OII, India, Spagna, ...)
// are never a strict 6-character prefix of their country, so they are left alone.
// Mirror for the client (cerca facet chips): quartz/components/scripts/compLabel.ts.

/** Full display label for a comp_code ("Svizze", "Svizzera" -> "Svizzera"). */
export function compLabel(code, country) {
  const c = String(code ?? "").trim()
  const n = String(country ?? "").trim()
  if (c.length !== 6 || n.length <= 6) return c
  if (!n.toLowerCase().startsWith(c.toLowerCase())) return c
  return n.charAt(0).toUpperCase() + n.slice(1)
}

/**
 * The old rule alone (kept for preprocess's "did the parent know its comp_code?" test):
 * truncated comp_code -> full label, and the trailing empty-level placeholder `''`.
 */
export function fixCompCode(title, code, country) {
  let t = String(title ?? "")
  const c = String(code ?? "").trim()
  const full = compLabel(c, country)
  if (c && full !== c) {
    if (t === c) t = full
    else if (t.startsWith(c + " ")) t = full + t.slice(c.length)
  }
  return t.replace(/ ''(?= —|\s*$)/, "")
}

// Placeholders the vault writes for a missing year or level in the "<comp> <year>
// <level>" head of an H1 / concept-list alias: `na` (year: na, level: na) and the empty
// YAML scalar `''` (also a stray lone `'`). "Russia na" -> "Russia", "OII na Nazionale
// Sperimentale" -> "OII Nazionale Sperimentale", "IPhO na '' · Problema 3" -> "IPhO ·
// Problema 3". Only the head is touched: the text before the first " — ", " · " or
// double space (the separators the vault uses before "Quesito N"/"Problema N"/file
// names), and never its first word (the competition). Body text is never touched.
const HEAD_END = / — | · | {2}/
const PLACEHOLDER = new Set(["na", "''", "'"])
export function dropPlaceholders(title) {
  const t = String(title ?? "")
  const m = HEAD_END.exec(t)
  const cut = m ? m.index : t.length
  const words = t.slice(0, cut).split(" ")
  if (words.length < 2) return t
  const kept = [words[0], ...words.slice(1).filter((w) => !PLACEHOLDER.has(w))]
  if (kept.length === words.length) return t
  return kept.join(" ").replace(/\s+$/, "") + t.slice(cut)
}

/**
 * Repair a prova/atom title or a concept-list label: a leading truncated comp_code
 * becomes the full label ("Svizze 2011 — Quesito 1" -> "Svizzera 2011 — Quesito 1"),
 * and a missing year/level is omitted, never rendered: `na` and `''` placeholders are
 * dropped from the head ("Russia na" -> "Russia", "OBF 2011 ''" -> "OBF 2011").
 * Idempotent.
 */
export function fixCompTitle(title, code, country) {
  return dropPlaceholders(fixCompCode(title, code, country))
}

/** comp/<code> and paese/<country> from a tag list (array or comma string). */
export function compFromTags(tags) {
  const list = Array.isArray(tags) ? tags : String(tags ?? "").split(",")
  let code = "", country = ""
  for (const raw of list) {
    const t = String(raw).trim()
    if (!code && t.startsWith("comp/")) code = t.slice(5)
    else if (!country && t.startsWith("paese/")) country = t.slice(6)
  }
  return { code, country }
}

// ---------------------------------------------------------------------------
// Source file names in titles. Many vault H1s end with the PDF they were cut from
// ("OII 2015 2° Livello — 2liv15T Def.pdf", "OII 1998 1° Livello Quiz — 1lv98 (2
// files merged).pdf", "India 2012 — inbo2012-Q.pdf"). A title never shows a raw file
// name: the segment goes, and when the remaining "<comp> <year> <level>" head is shared
// with another prova a clean human label derived from the file name is added instead
// ("India 2012 — INBO", "OBF 2014 — Fase 1 · Livello II · Soluzioni"). Opaque codes
// that cannot be read reliably ("Naz14F") give no label. Page paths/slugs never change.

const SRC_SEG = /\.pdf\s*$|\(\d+ files merged\)/i
/** Is this " — "-separated title segment a raw source file name? */
export const isSourceSegment = (seg) => SRC_SEG.test(String(seg ?? ""))

/** Title without its source-file segment(s); returns { title, source } (source "" if none). */
export function splitSourceName(title) {
  const parts = String(title ?? "").split(" — ")
  if (parts.length < 2) return { title: String(title ?? ""), source: "" }
  const keep = [parts[0]], src = []
  for (const p of parts.slice(1)) (isSourceSegment(p) ? src : keep).push(p)
  return { title: keep.join(" — "), source: src.join(" ") }
}

const ACR = ["INChO", "INBO", "IOQB", "IOQC", "NSEB", "NSEC", "NBPhO", "IPhO", "OIF", "CAP", "OBF"]
const DROP = new Set(["pdf", "def", "final", "web", "en", "eng", "q", "question", "questions", "paper", "prova",
  "aufgaben", "exam", "with", "a", "b", "v", "rev", "revised", "obf", "nbpho", "ipho", "cap", "the", "of", "and", "e"])
const SOL = new Set(["gab", "gabfinal", "gabarito", "sol", "soluciones", "solucioness", "solution", "solutions",
  "loesungen", "resuelto", "resuelta", "resueltos", "answers", "answer", "risposte"])
const ROMAN = /^(?:i{1,3}|iv|v)$/i

/**
 * Clean human label from a source file name, or "" when nothing readable is left.
 * meta: { code, year } -- tokens repeating the competition or year are dropped.
 */
export function sourceLabel(source, meta = {}) {
  let s = String(source ?? "")
    .replace(/\s*\(\d+ files merged\)/gi, " ")
    .replace(/\.pdf\s*$/i, "")
    .replace(/NÃviel|Niel/g, "Nivel")
    .replace(/\bcon soluciones\b/gi, "soluciones")
    .replace(/caderno[_ ]A4/gi, "caderno")
    .replace(/Final/g, " Final ")
    .replace(/(^|[_\s-])(I{1,3})a(?=[_\s-]|$)/g, "$1$2")
  // keep known acronyms whole before splitting camelCase / letter-digit runs
  const keepAcr = []
  for (const a of ACR) s = s.replace(new RegExp(a, "gi"), () => ` \u0001${keepAcr.push(a) - 1}\u0001 `)
  s = s.replace(/[_\-]+/g, " ")
    .replace(/([a-zà-ú])([A-Z])/g, "$1 $2")
    .replace(/([A-Za-zà-ú])(\d)/g, "$1 $2")
    .replace(/(\d)([A-Za-zà-ú])/g, "$1 $2")
  const toks = s.split(/\s+/).filter(Boolean).map((t) => t.replace(/\u0001(\d+)\u0001/, (_, i) => keepAcr[i]))
  const year = String(meta.year ?? "").trim()
  const code = String(meta.code ?? "").trim().toLowerCase()
  const out = []
  let fase = "", livello = "", round = "", sol = false
  for (let i = 0; i < toks.length; i++) {
    const t = toks[i], l = t.toLowerCase(), next = toks[i + 1] ?? ""
    const num = /^\d+$/.test(next) || ROMAN.test(next) ? next : ""
    const yy = year ? Number(year.slice(2)) : NaN
    if (/^\d{4}$/.test(t) || (/^\d{2}$/.test(t) && (Number(t) === yy || Number(t) === yy - 1))) continue  // year, school year "08_09"
    if (t === "0" || ((l === "v" || l === "question" || l === "questions") && /^\d+$/.test(next))) { i++; continue }  // "_v2", "_0", "Question-1"
    if (l === code) continue
    if (/^\d+$/.test(t) && /^fase$/i.test(next)) { fase = t; i++; continue }                 // "2fase", "1aFase"
    if (/^\d+$/.test(t) && /^a$/i.test(next) && /^fase$/i.test(toks[i + 2] ?? "")) { fase = t; i += 2; continue }
    if (/^\d+$/.test(t) && /^rd$/i.test(next)) { round = t; i++; continue }                  // German "1Rd"
    if ((l === "fase" || l === "f") && num) { fase = num; i++; continue }
    if (["nivel", "niv", "n"].includes(l) && num) { livello = (num.length > 4 && year && num.endsWith(year) ? num.slice(0, -4) : num).toUpperCase(); i++; if (/^a$/i.test(toks[i + 1] ?? "")) i++; continue }
    if (/^n(i{1,3})$/i.test(t)) { livello = t.slice(1).toUpperCase(); continue }              // "NII", "NIII"
    if (l === "njr") { livello = "Junior"; continue }
    if (SOL.has(l)) { sol = true; continue }
    if (l === "caderno" && /^resposta$/i.test(next)) { out.push("Foglio risposte"); i++; continue }
    if (l === "exp" || (l === "experimental" && t !== l)) { out.push("Sperimentale"); continue }
    if (["teo", "teoria", "theory"].includes(l)) { out.push("Teorica"); continue }
    if (l === "part" || l === "parte") { out.push("Parte"); continue }
    if (l === "p" && /^\d+$/.test(next)) { out.push("Problema " + next); i++; continue }       // "P3-Cargas"
    if (l === "p" && /^experimental$/i.test(next)) { out.push("Problema sperimentale"); i++; continue }
    if (/^lugar$/i.test(next) && /^\d+$/.test(t)) { out.push(t + "° posto"); i++; continue }
    if (/^v\d+$/i.test(t) || /^final\d*$/i.test(t)) continue
    if (DROP.has(l)) continue
    if (ROMAN.test(t) && livello && !out.length) continue                                     // "NIVEL II … 2017 I"
    if (/^\d+$/.test(t) && /^ipho$/i.test(next)) continue                                     // "48_IPhO" edition number
    out.push(t)
  }
  const head = []
  if (fase) head.push("Fase " + fase)
  if (livello) head.push("Livello " + livello)
  if (round) head.push("Round " + round)
  // readable words only: short tokens must be known words/acronyms, digits only after a
  // word they number ("Problema 3", "Teorica 2"); codes like "Naz14F", "2lv98", "Loc95",
  // "COPOLI14Sp", "est-fin" give no label at all rather than a garbled one
  const OK_SHORT = new Set(["con", "y", "de", "del", "la", "el", "los", "las", "OIF", "INBO", "IOQB", "IOQC",
    "NSEB", "NSEC", "I", "II", "III", "IV", "V"])
  const NUMBERED = new Set(["Problema", "Teorica", "Sperimentale", "Juegos", "Parte", "Prova"])
  for (let i = 0; i < out.length; i++) {
    const w = out[i]
    if (w.includes(" ") || w === "INChO") continue
    if (/^\d+°? ?(posto)?$/.test(w)) { if (![...NUMBERED].some((n) => n.toLowerCase() === String(out[i - 1] ?? "").toLowerCase()) && !/posto/.test(w)) return ""; continue }
    if (/[A-Z][a-z]+[A-Z]/.test(w) || /\d/.test(w)) return ""
    if (w.length <= 3 && !OK_SHORT.has(w)) return ""
  }
  const words = out.join(" ").replace(/\s+/g, " ").trim()
  const parts = [...head, ...(words ? [words.charAt(0).toUpperCase() + words.slice(1)] : [])]
  if (sol) parts.push("Soluzioni")
  return parts.join(" · ")
}

/** sourceLabel minus the parts the title head already says ("Round 1" in "IPhO-DE 2015 Round 1"). */
export function headLabel(head, source, meta = {}) {
  const h = String(head ?? "").toLowerCase()
  return sourceLabel(source, meta)
    .split(" · ")
    .filter((p) => p && !h.includes(p.toLowerCase()))
    // "Foglio risposte Sperimentale" under "OBF 2015 Nazionale Sperimentale" -> "Foglio risposte"
    .map((p) => p.split(" ").filter((w, i, ws) => !(ws.length > 1 && /^(Sperimentale|Teorica)$/.test(w) && h.includes(w.toLowerCase()))).join(" "))
    .join(" · ")
}

// ---------------------------------------------------------------------------
// Missing year. The OII national papers of the "naz*spe" series carry `year: na`, but
// their source path names the year unambiguously: ".../nazionale/sperim/naz02spd/…",
// ".../nazionale/teorica/Naz25-TEO/…" (two digits after "naz", always 2000-2099 here).
// Only that evidence is used, only for comp_code OII, and only when the year is missing;
// a real year in the vault always wins. Anything else stays without a year (omitted).
export function deriveYear(code, pdf) {
  if (String(code ?? "").trim() !== "OII") return ""
  const m = String(pdf ?? "").match(/(?:^|\/)nazionale\/(?:sperim|teorica)\/naz(\d{2})(?![\d])/i)
  return m ? "20" + m[1] : ""
}

/** Put a derived year in place of the `na` placeholder right after the competition ("OII na Nazionale" -> "OII 2002 Nazionale"). */
export function fillYear(title, year) {
  const t = String(title ?? "")
  if (!year) return t
  const m = HEAD_END.exec(t)
  const cut = m ? m.index : t.length
  const words = t.slice(0, cut).split(" ")
  if (words.length < 2 || words[1] !== "na") return t
  words[1] = String(year)
  return words.join(" ") + t.slice(cut)
}
