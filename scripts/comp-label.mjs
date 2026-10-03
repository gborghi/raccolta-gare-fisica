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
 * Repair a prova/atom title: a leading truncated comp_code becomes the full label
 * ("Svizze 2011 — Quesito 1" -> "Svizzera 2011 — Quesito 1"), and the empty-level
 * placeholder `''` the vault H1 sometimes carries ("OBF 2011 ''") is dropped.
 * Idempotent.
 */
export function fixCompTitle(title, code, country) {
  let t = String(title ?? "")
  const c = String(code ?? "").trim()
  const full = compLabel(c, country)
  if (c && full !== c) {
    if (t === c) t = full
    else if (t.startsWith(c + " ")) t = full + t.slice(c.length)
  }
  return t.replace(/ ''(?= —|\s*$)/, "")
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
