// Faceted multi-tag search for the /cerca page (physics corpus). Loads
// quesiti.json and combines tags across facets (gara, paese, tipo, anno,
// livello, difficoltà, area, argomento, metodo, abilità) with an AND/OR
// (TUTTI/QUALSIASI) toggle, rendering matches into a sortable table.

interface Q {
  href: string
  competition: string
  comp_code: string
  quesito: number | string
  summary: string
  answer: string
  topics: string[]
  methods: string[]
  skills: string[]
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
]

const MAX_ROWS = 1000

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
  let mode: "AND" | "OR" = "AND"

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
    return mode === "AND" ? tokens.every(test) : tokens.some(test)
  }

  const controls = document.createElement("div")
  controls.className = "cerca-controls"
  const facetsBox = document.createElement("div")
  facetsBox.className = "cerca-facets"
  const selectedBar = document.createElement("div")
  selectedBar.className = "cerca-selected"
  const resultsBox = document.createElement("div")
  resultsBox.className = "cerca-results"
  root.replaceChildren(controls, facetsBox, selectedBar, resultsBox)

  const toggle = document.createElement("button")
  toggle.className = "cerca-toggle"
  function syncToggle() {
    toggle.textContent = mode === "AND" ? "Corrispondenza: TUTTI i tag" : "Corrispondenza: QUALSIASI tag"
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
  function renderResults() {
    if (selected.size === 0) {
      resultsBox.innerHTML = `<p class="cerca-hint">Seleziona dei tag qui sopra per vedere i quesiti.</p>`
      return
    }
    let rows = data.filter(matches)
    rows.sort((a, b) => {
      let av: any = a[sortKey], bv: any = b[sortKey]
      if (sortKey === "quesito" || sortKey === "year") {
        av = Number(av)
        bv = Number(bv)
      }
      if (av < bv) return -sortDir
      if (av > bv) return sortDir
      if (a.competition !== b.competition) return a.competition < b.competition ? -1 : 1
      return Number(a.quesito) - Number(b.quesito)
    })
    const total = rows.length
    const shown = rows.slice(0, MAX_ROWS)
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
    const body = shown
      .map(
        (r) =>
          `<tr><td><a href="${prefix}${esc(r.href)}">${esc(r.summary) || "(quesito)"}</a></td>` +
          `<td>${esc(r.competition)}</td><td>${esc(r.quesito)}</td><td>${esc(r.answer)}</td></tr>`,
      )
      .join("")
    const note = total > MAX_ROWS ? ` (mostrati i primi ${MAX_ROWS})` : ""
    resultsBox.innerHTML =
      `<div class="cerca-count"><strong>${total}</strong> quesiti${note}</div>` +
      `<table class="qtable-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`
    resultsBox.querySelectorAll<HTMLElement>("th.qtable-th").forEach((th) =>
      th.addEventListener("click", () => {
        const k = th.dataset.k as keyof Q
        if (sortKey === k) sortDir *= -1
        else {
          sortKey = k
          sortDir = 1
        }
        renderResults()
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
