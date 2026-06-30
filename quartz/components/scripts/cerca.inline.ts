// Faceted multi-tag search for the /cerca page (physics corpus). Loads
// quesiti.json and combines tags across facets (gara, paese, tipo, anno,
// livello, difficoltà, area, argomento, metodo, abilità) with an AND/OR
// (TUTTI/QUALSIASI) toggle, rendering matches into a sortable table.

interface Q {
  href: string
  flag: string
  flag_name: string
  competition: string
  comp_code: string
  quesito: number | string
  summary: string
  answer: string
  topics: string[]
  methods: string[]
  skills: string[]
  objects: string[]
  cluster: string[]
  level: string
  difficolta: string
  tipo_gara: string
  year: number | string
  country: string
}

interface Facet {
  key: keyof Q
  label: string
  multi?: boolean
  strip?: string
}

const FACETS: Facet[] = [
  { key: "comp_code", label: "Gara" },
  { key: "country", label: "Paese" },
  { key: "tipo_gara", label: "Tipo" },
  { key: "year", label: "Anno" },
  { key: "level", label: "Livello" },
  { key: "difficolta", label: "Difficoltà" },
  { key: "cluster", label: "Area", multi: true },
  { key: "topics", label: "Argomento", multi: true },
  { key: "methods", label: "Metodo", multi: true, strip: " (metodo)" },
  { key: "skills", label: "Abilità", multi: true, strip: " (competenza)" },
  { key: "objects", label: "Objects", multi: true, strip: " (object)" },
]

const PER_PAGE_OPTS = [25, 50, 100, 250, 0] // 0 = Tutti
const RES_LS_KEY = "rgf-cerca-perpage"
function getResPerPage(): number {
  const raw = localStorage.getItem(RES_LS_KEY)
  if (raw == null) return 50
  const v = Number(raw)
  return PER_PAGE_OPTS.includes(v) ? v : 50
}

function esc(s: unknown): string {
  return String(s).replace(/[&<>"]/g, (c) =>
    c === "&" ? "&amp;" : c === "<" ? "&lt;" : c === ">" ? "&gt;" : "&quot;",
  )
}
function pretty(strip: string | undefined, v: string): string {
  let s = strip ? v.replace(strip, "") : v
  return s.charAt(0).toUpperCase() + s.slice(1)
}

async function init() {
  const root = document.getElementById("cerca")
  if (!root || root.dataset.rendered) return
  root.dataset.rendered = "1"

  const slug = document.body.dataset.slug || ""
  const prefix = "../".repeat((slug.match(/\//g) || []).length)
  let data: Q[]
  try {
    data = await (await fetch(prefix + "static/quesiti.json")).json()
  } catch {
    root.textContent = "Impossibile caricare i dati."
    return
  }

  const selected = new Set<string>()
  // "OR"  = QUALSIASI: OR within a facet group, AND across different groups.
  // "AND" = TUTTI:     every selected tag must match (AND across all tags).
  let mode: "AND" | "OR" = "OR"

  const facetValues: { facet: Facet; values: [string, number][] }[] = FACETS.map((facet) => {
    const counts = new Map<string, number>()
    for (const q of data) {
      const raw = q[facet.key] as unknown
      const vals = facet.multi ? (raw as string[]) || [] : raw === "" || raw == null ? [] : [String(raw)]
      for (const v of vals) counts.set(v, (counts.get(v) || 0) + 1)
    }
    let values = [...counts.entries()]
    if (facet.key === "year") values.sort((a, b) => Number(b[0]) - Number(a[0]))
    else if (facet.key === "difficolta") values.sort((a, b) => a[0].localeCompare(b[0]))
    else values.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    return { facet, values }
  })

  function matches(q: Q): boolean {
    if (selected.size === 0) return false
    const test = (token: string) => {
      const [key, val] = token.split("::")
      const facet = FACETS.find((f) => f.key === key)!
      if (facet.multi) return ((q[facet.key] as unknown as string[]) || []).includes(val)
      return String(q[facet.key]) === val
    }
    const tokens = [...selected]
    if (mode === "AND") return tokens.every(test) // TUTTI: every tag must match
    // QUALSIASI: OR within each facet group, AND across groups.
    const byGroup = new Map<string, string[]>()
    for (const token of tokens) {
      const key = token.split("::")[0]
      const arr = byGroup.get(key)
      if (arr) arr.push(token)
      else byGroup.set(key, [token])
    }
    for (const group of byGroup.values()) {
      if (!group.some(test)) return false
    }
    return true
  }

  const controls = document.createElement("div")
  controls.className = "cerca-controls"
  const facetsBox = document.createElement("div")
  facetsBox.className = "cerca-facets"
  const selectedBar = document.createElement("div")
  selectedBar.className = "cerca-selected"

  let textQuery = ""
  let resPerPage = getResPerPage()
  let resPage = 0

  // text-search + per-page controls (shown once tags are selected) — same UX as
  // the per-page lists on concept pages (reuses .paged-* styles).
  const searchBar = document.createElement("div")
  searchBar.className = "cerca-searchbar"
  const textSearch = document.createElement("input")
  textSearch.type = "search"
  textSearch.className = "paged-search"
  textSearch.placeholder = "Cerca tra i risultati…"
  textSearch.setAttribute("aria-label", "Cerca tra i risultati")
  const ctrlRow = document.createElement("div")
  ctrlRow.className = "paged-controls"
  const countEl = document.createElement("span")
  countEl.className = "paged-count"
  const perSel = document.createElement("select")
  perSel.className = "paged-perpage"
  for (const n of PER_PAGE_OPTS) {
    const o = document.createElement("option")
    o.value = String(n)
    o.textContent = n === 0 ? "Tutti" : String(n)
    if (n === resPerPage) o.selected = true
    perSel.appendChild(o)
  }
  const perLbl = document.createElement("label")
  perLbl.className = "paged-perpage-label"
  perLbl.append("mostra ", perSel, " per pagina")
  ctrlRow.append(countEl, perLbl)
  searchBar.append(textSearch, ctrlRow)
  const resultsBox = document.createElement("div")
  resultsBox.className = "cerca-results"
  const pager = document.createElement("nav")
  pager.className = "paged-pager"
  root.replaceChildren(controls, facetsBox, selectedBar, searchBar, resultsBox, pager)

  let debounce: ReturnType<typeof setTimeout>
  textSearch.addEventListener("input", () => {
    clearTimeout(debounce)
    debounce = setTimeout(() => {
      textQuery = textSearch.value.trim().toLowerCase()
      resPage = 0
      render()
    }, 120)
  })
  perSel.addEventListener("change", () => {
    resPerPage = Number(perSel.value)
    localStorage.setItem(RES_LS_KEY, String(resPerPage))
    resPage = 0
    render()
  })

  const toggle = document.createElement("button")
  toggle.className = "cerca-toggle"
  function syncToggle() {
    toggle.textContent =
      mode === "AND"
        ? "Corrispondenza: TUTTI i tag (AND)"
        : "Corrispondenza: QUALSIASI (OR nel gruppo, AND tra gruppi)"
  }
  toggle.addEventListener("click", () => {
    mode = mode === "AND" ? "OR" : "AND"
    syncToggle()
    render()
  })
  syncToggle()
  controls.appendChild(toggle)

  for (const { facet, values } of facetValues) {
    if (!values.length) continue
    const sec = document.createElement("details")
    sec.className = "cerca-facet"
    const sum = document.createElement("summary")
    sum.textContent = `${facet.label} (${values.length})`
    sec.appendChild(sum)
    const chips = document.createElement("div")
    chips.className = "cerca-chips"
    for (const [val, count] of values) {
      const token = `${facet.key}::${val}`
      const chip = document.createElement("button")
      chip.className = "cerca-chip"
      chip.dataset.token = token
      chip.innerHTML = `${esc(pretty(facet.strip, val))} <span class="cerca-n">${count}</span>`
      chip.addEventListener("click", () => {
        if (selected.has(token)) selected.delete(token)
        else selected.add(token)
        render()
      })
      chips.appendChild(chip)
    }
    sec.appendChild(chips)
    facetsBox.appendChild(sec)
  }

  let sortKey: keyof Q = "competition"
  let sortDir = 1

  function matchedRows(): Q[] {
    let rows = data.filter(matches)
    if (textQuery) {
      rows = rows.filter((r) =>
        (String(r.summary || "") + " " + String(r.competition || "") + " " + String(r.comp_code || "") + " " + String(r.quesito || "")).toLowerCase().includes(textQuery),
      )
    }
    rows.sort((a, b) => {
      let av: any = a[sortKey], bv: any = b[sortKey]
      if (sortKey === "quesito" || sortKey === "year") { av = Number(av); bv = Number(bv) }
      if (av < bv) return -sortDir
      if (av > bv) return sortDir
      if (a.competition !== b.competition) return a.competition < b.competition ? -1 : 1
      return Number(a.quesito) - Number(b.quesito)
    })
    return rows
  }

  function renderResults() {
    if (selected.size === 0) {
      searchBar.style.display = "none"
      pager.innerHTML = ""
      resultsBox.innerHTML = `<p class="cerca-hint">Seleziona dei tag qui sopra per vedere i quesiti.</p>`
      return
    }
    searchBar.style.display = ""
    const rows = matchedRows()
    const total = rows.length
    const pc = resPerPage === 0 ? 1 : Math.max(1, Math.ceil(total / resPerPage))
    if (resPage >= pc) resPage = pc - 1
    const start = resPerPage === 0 ? 0 : resPage * resPerPage
    const shown = resPerPage === 0 ? rows : rows.slice(start, start + resPerPage)
    countEl.textContent =
      total === 0 ? "0 quesiti"
        : pc > 1 ? `${total} quesiti — ${start + 1}–${start + shown.length} (pag. ${resPage + 1}/${pc})`
        : `${total} quesiti`
    const cols: [keyof Q, string][] = [
      ["summary", "Quesito"],
      ["competition", "Gara"],
      ["quesito", "N."],
      ["answer", "Risp."],
    ]
    const head = cols
      .map(
        ([k, l]) =>
          `<th data-k="${k}" class="qtable-th${sortKey === k ? " sorted-" + (sortDir > 0 ? "asc" : "desc") : ""}">${l}</th>`,
      )
      .join("")
    if (total === 0) {
      resultsBox.innerHTML = `<p class="paged-empty">Nessun risultato.</p>`
      pager.innerHTML = ""
      return
    }
    const body = shown
      .map(
        (r) =>
          `<tr><td>${r.flag ? `<img class="cerca-flagimg" src="https://flagcdn.com/${r.flag}.svg" alt="${esc(r.flag_name)}" title="${esc(r.flag_name)}" width="22" height="16" loading="lazy">` : `<span class="flag" title="${esc(r.flag_name || "Internazionale")}">🌍</span>`} <a href="${prefix}${esc(r.href)}">${esc(r.summary) || "(quesito)"}</a></td>` +
          `<td>${esc(r.competition)}</td><td>${esc(r.quesito)}</td><td>${esc(r.answer)}</td></tr>`,
      )
      .join("")
    resultsBox.innerHTML =
      `<table class="qtable-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`
    resultsBox.querySelectorAll<HTMLElement>("th.qtable-th").forEach((th) =>
      th.addEventListener("click", () => {
        const k = th.dataset.k as keyof Q
        if (sortKey === k) sortDir *= -1
        else { sortKey = k; sortDir = 1 }
        resPage = 0
        render()
      }),
    )
    renderResPager(pc)
  }

  function renderResPager(pc: number) {
    if (pc <= 1) { pager.innerHTML = ""; return }
    const btn = (label: string, target: number, disabled: boolean, cur = false) =>
      `<button class="paged-btn${cur ? " current" : ""}" data-p="${target}" ${disabled ? "disabled" : ""}>${label}</button>`
    const nums: string[] = []
    const win = 2
    const lo = Math.max(0, resPage - win)
    const hi = Math.min(pc - 1, resPage + win)
    if (lo > 0) { nums.push(btn("1", 0, false)); if (lo > 1) nums.push(`<span class="paged-ellip">…</span>`) }
    for (let i = lo; i <= hi; i++) nums.push(btn(String(i + 1), i, false, i === resPage))
    if (hi < pc - 1) { if (hi < pc - 2) nums.push(`<span class="paged-ellip">…</span>`); nums.push(btn(String(pc), pc - 1, false)) }
    pager.innerHTML = btn("‹ Prec", resPage - 1, resPage === 0) + nums.join("") + btn("Succ ›", resPage + 1, resPage >= pc - 1)
    pager.querySelectorAll<HTMLButtonElement>("button[data-p]").forEach((b) =>
      b.addEventListener("click", () => {
        resPage = Number(b.dataset.p)
        renderResults()
        searchBar.scrollIntoView({ block: "start", behavior: "smooth" })
      }),
    )
  }

  function renderSelected() {
    if (selected.size === 0) {
      selectedBar.innerHTML = ""
      return
    }
    selectedBar.innerHTML =
      `<span class="cerca-sel-label">Tag attivi:</span> ` +
      [...selected]
        .map((token) => {
          const [key, val] = token.split("::")
          const f = FACETS.find((x) => x.key === key)!
          return `<button class="cerca-chip active" data-token="${esc(token)}">${esc(f.label)}: ${esc(pretty(f.strip, val))} ✕</button>`
        })
        .join("") +
      ` <button class="cerca-clear">Azzera</button>`
    selectedBar.querySelectorAll<HTMLElement>(".cerca-chip.active").forEach((b) =>
      b.addEventListener("click", () => {
        selected.delete(b.dataset.token!)
        render()
      }),
    )
    selectedBar.querySelector(".cerca-clear")?.addEventListener("click", () => {
      selected.clear()
      render()
    })
  }

  function syncChipStates() {
    facetsBox.querySelectorAll<HTMLElement>(".cerca-chip").forEach((c) => {
      c.classList.toggle("active", selected.has(c.dataset.token!))
    })
  }

  function render() {
    syncChipStates()
    renderSelected()
    renderResults()
  }

  render()
}

document.addEventListener("nav", () => {
  init()
})
init()
