// Flag column (quesiti.json flag / flag_name, concept-list flags).
// The vault note's `country` is the source of truth (the vault facets, see
// kepler-tools/vault-backport/facets.mjs, already set country "International" on every
// real IPhO/EuPhO paper). preprocess passes it through and never overrides a mapped
// country: the German national selection (country Germania, comp_code IPhO, pdf under
// ".../Germania/IPhO/...") keeps the German flag. Only when a note's country is missing
// or unmapped do comp_code IPhO/EuPhO or an ipho/ eupho/ pdf path mark it international.
// country (Italian/variant name as stored) -> { ISO-3166-1 alpha-2 (lowercase, for
// flagcdn), English name (tooltip) }. Windows can't render flag EMOJI (🇮🇹 shows as
// "IT"), so the tables use flagcdn images instead. International/multi-country comps
// have no single flag -> iso "" -> globe.
export const COUNTRY = {
  Italia: ["it", "Italy"], Brasile: ["br", "Brazil"], Brasil: ["br", "Brazil"],
  India: ["in", "India"], Singapore: ["sg", "Singapore"], Canada: ["ca", "Canada"],
  USA: ["us", "United States"], Russia: ["ru", "Russia"], Spagna: ["es", "Spain"],
  Spain: ["es", "Spain"], UK: ["gb", "United Kingdom"], Germania: ["de", "Germany"],
  Germany: ["de", "Germany"], Deutschland: ["de", "Germany"], Argentina: ["ar", "Argentina"],
  Svizzera: ["ch", "Switzerland"], Australia: ["au", "Australia"], Colombia: ["co", "Colombia"],
  Giappone: ["jp", "Japan"], Kazakhstan: ["kz", "Kazakhstan"], Indonesia: ["id", "Indonesia"],
  Portogallo: ["pt", "Portugal"], "Hong Kong": ["hk", "Hong Kong"],
  Brazil: ["br", "Brazil"], Estonia: ["ee", "Estonia"], China: ["cn", "China"],
  Taiwan: ["tw", "Taiwan"], Romania: ["ro", "Romania"], Hungary: ["hu", "Hungary"],
  Azerbaijan: ["az", "Azerbaijan"], Portugal: ["pt", "Portugal"],
}
// -> { iso, name }. iso "" means render the globe (international / multi-country / unmapped).
export function nationInfo(country, comp, pdf) {
  const c = String(country ?? "").trim()
  const e = COUNTRY[c]
  const nameIntl = /^intern/i.test(c)
  // a mapped country always wins (pass-through); path/comp only decide for notes whose
  // country is missing or unmapped
  if (e && !nameIntl) return { iso: e[0], name: e[1] }
  const pathIntl = /(?:^|\/)(?:ipho|eupho)\//.test(String(pdf ?? "").toLowerCase())
  const compIntl = comp === "IPhO" || comp === "EuPhO"
  const intl = nameIntl || pathIntl || compIntl
  return { iso: "", name: intl ? "International" : c || "International" }
}
