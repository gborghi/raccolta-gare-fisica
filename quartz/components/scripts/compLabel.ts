// Client mirror of scripts/comp-label.mjs compLabel(): some vault comp_codes are the
// country name cut to 6 characters ("Svizze" for Svizzera, "Argent", "Brasil",
// "Colomb", "Giappo", "Austra", "Nordic", "iberoa"). Facet values stay the raw code
// (tokens, tagmap, URLs); only the visible label uses the full name.
export function compLabel(code: string, country: string): string {
  const c = String(code ?? "").trim()
  const n = String(country ?? "").trim()
  if (c.length !== 6 || n.length <= 6) return c
  if (!n.toLowerCase().startsWith(c.toLowerCase())) return c
  return n.charAt(0).toUpperCase() + n.slice(1)
}
