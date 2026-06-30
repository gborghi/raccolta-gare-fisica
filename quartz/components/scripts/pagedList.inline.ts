// Renders the <div class="paged-list" data-src="cl/N.json"> placeholders that
// preprocess.mjs emitted in place of big concept bullet-lists. Loads the JSON
// slice and shows a SEARCHABLE, SORTABLE, PAGINATED table (mate-site style):
//  - full-width search box (filters within the list)
//  - per-page dropdown + item count
//  - column headers (Gara / N° / Descrizione) sort ascending/descending on click
//  - windowed page numbers
// Concept pages ship tiny HTML and load fast.

interface Item { h: string; l: string; s: string; f?: string; c?: string; lv?: string; y?: string }
interface Row extends Item { gara: string; probTxt: string; probNum: number }

const PER_PAGE_OPTS = [25, 50, 100, 250, 0] // 0 = Tutti
const LS_KEY = "rgf-paged-perpage"

// Hidden full-text keyword index (href -> deduped keywords of the atom body).
// Lazy-loaded only the first time a user flips a table search into "full content"
// mode, so the default title/gara search stays instant and ships no extra bytes.
let kwCache: Record<string, string> | null = null
let kwPromise: Promise<Record<string, string>> | null = null
function loadKw(prefix: string): Promise<Record<string, string>> {
  if (kwCache) return Promise.resolve(kwCache)
  if (!kwPromise) {
    kwPromise = fetch(prefix + "static/quesiti_kw.json")
      .then((r) => r.json())
      .then((j) => (kwCache = j as Record<string, string>))
  }
  return kwPromise
}

function esc(s: string): string {
  return String(s).replace(/[&<>"]/g, (c) =>
    c === "&" ? "&amp;" : c === "<" ? "&lt;" : c === ">" ? "&gt;" : "&quot;",
  )
}

function getPerPage(): number {
  const raw = localStorage.getItem(LS_KEY)
  if (raw == null) return 50 // default: paginate (Number(null)===0==="Tutti", so guard)
  const v = Number(raw)
  return PER_PAGE_OPTS.includes(v) ? v : 50
}

// "India 2015 · Problema 35" -> { gara:"India 2015", probTxt:"Problema 35", probNum:35 }
function parseRow(it: Item): Row {
  const dot = it.l.lastIndexOf(" · ")
  const gara = dot >= 0 ? it.l.slice(0, dot) : it.l
  const probTxt = dot >= 0 ? it.l.slice(dot + 3) : ""
  const mnum = probTxt.match(/\d+/)
  return { ...it, gara, probTxt, probNum: mnum ? Number(mnum[0]) : NaN }
}

type SortCol = "" | "stato" | "gara" | "liv" | "year" | "prob" | "desc"

// Flag cell: real flag image from flagcdn (Windows can't render flag emoji), or a
// globe for international/multi-country. `f` is an ISO-3166-1 alpha-2 code ("" = globe).
function flagCell(f: string, c: string): string {
  const title = esc(c || "Internazionale")
  if (f) {
    return `<td class="paged-c-flag"><img class="paged-flagimg" src="https://flagcdn.com/${f}.svg" alt="${title}" title="${title}" width="22" height="16" loading="lazy"></td>`
  }
  return `<td class="paged-c-flag"><span class="paged-flag-globe" title="${title}">🌍</span></td>`
}

async function renderOne(el: HTMLElement, prefix: string) {
  const src = el.dataset.src
  if (!src) return
  let rows: Row[]
  try {
    const items = (await (await fetch(prefix + "static/" + src)).json()) as Item[]
    rows = items.map(parseRow)
  } catch {
    el.textContent = "Impossibile caricare l'elenco."
    return
  }
  const total = rows.length

  let perPage = getPerPage()
  let page = 0
  let query = ""
  let sortCol: SortCol = ""
  let sortDir: 1 | -1 = 1
  let mode: "table" | "content" = "table"

  // full-width search box + bimodal scope toggle (own row)
  const search = document.createElement("input")
  search.type = "search"
  search.className = "paged-search"
  search.setAttribute("aria-label", "Cerca in questo elenco")
  const setPlaceholder = () => {
    search.placeholder =
      mode === "content"
        ? `Cerca nel testo completo dei ${total} problemi…`
        : `Cerca tra ${total} elementi (gara/descrizione)…`
  }
  setPlaceholder()

  // toggle: search visible table fields vs. full atomized-note content (keywords)
  const modeBtn = document.createElement("button")
  modeBtn.className = "paged-modebtn"
  modeBtn.type = "button"
  const syncModeBtn = () => {
    modeBtn.textContent = mode === "content" ? "Ricerca: contenuto completo" : "Ricerca: gara/descrizione"
    modeBtn.setAttribute("aria-pressed", String(mode === "content"))
  }
  syncModeBtn()
  modeBtn.addEventListener("click", async () => {
    mode = mode === "table" ? "content" : "table"
    syncModeBtn()
    setPlaceholder()
    page = 0
    if (mode === "content" && !kwCache) {
      modeBtn.textContent = "Caricamento indice…"
      modeBtn.disabled = true
      try { await loadKw(prefix) } catch { /* leave kwCache null; matches nothing */ }
      modeBtn.disabled = false
      syncModeBtn()
    }
    render()
  })
  const searchRow = document.createElement("div")
  searchRow.className = "paged-search-row"
  searchRow.append(search, modeBtn)

  // controls row: count (left) + "mostra <select> per pagina" (right)
  const controls = document.createElement("div")
  controls.className = "paged-controls"
  const countEl = document.createElement("span")
  countEl.className = "paged-count"
  const sel = document.createElement("select")
  sel.className = "paged-perpage"
  for (const n of PER_PAGE_OPTS) {
    const o = document.createElement("option")
    o.value = String(n)
    o.textContent = n === 0 ? "Tutti" : String(n)
    if (n === perPage) o.selected = true
    sel.appendChild(o)
  }
  const lbl = document.createElement("label")
  lbl.className = "paged-perpage-label"
  lbl.append("mostra ", sel, " per pagina")
  controls.append(countEl, lbl)

  const listBox = document.createElement("div")
  listBox.className = "paged-listbox"
  const pager = document.createElement("nav")
  pager.className = "paged-pager"
  el.replaceChildren(searchRow, controls, listBox, pager)

  sel.addEventListener("change", () => {
    perPage = Number(sel.value)
    localStorage.setItem(LS_KEY, String(perPage))
    page = 0
    render()
  })
  let debounce: ReturnType<typeof setTimeout>
  search.addEventListener("input", () => {
    clearTimeout(debounce)
    debounce = setTimeout(() => {
      query = search.value.trim().toLowerCase()
      page = 0
      render()
    }, 120)
  })

  function filtered(): Row[] {
    if (!query) return rows
    if (mode === "content") {
      return rows.filter((r) => {
        const kw = kwCache?.[r.h.replace(/#.*$/, "")] // strip heading anchor for lookup
        return kw ? kw.includes(query) : false
      })
    }
    return rows.filter((r) =>
      (r.gara + " " + r.probTxt + " " + (r.s || "") + " " + (r.c || "") + " " + (r.lv || "") + " " + (r.y || "")).toLowerCase().includes(query),
    )
  }

  function sortedView(): Row[] {
    const data = filtered()
    if (!sortCol) return data
    const k = sortCol
    return [...data].sort((a, b) => {
      if (k === "prob" || k === "year") {
        const an = k === "year" ? Number(a.y) : a.probNum
        const bn = k === "year" ? Number(b.y) : b.probNum
        if (isNaN(an) && isNaN(bn)) return 0
        if (isNaN(an)) return 1
        if (isNaN(bn)) return -1
        return (an - bn) * sortDir
      }
      const pick = (r: Row) =>
        k === "gara" ? r.gara : k === "stato" ? (r.c || "") : k === "liv" ? (r.lv || "") : r.s || ""
      const av = pick(a).toLowerCase()
      const bv = pick(b).toLowerCase()
      return av < bv ? -sortDir : av > bv ? sortDir : 0
    })
  }

  function pageCount(): number {
    return perPage === 0 ? 1 : Math.max(1, Math.ceil(filtered().length / perPage))
  }

  function arrow(col: SortCol): string {
    if (sortCol !== col) return ""
    return sortDir === 1 ? " ▲" : " ▼"
  }

  function renderList() {
    const data = sortedView()
    countEl.textContent = query ? `${data.length} / ${total} elementi` : `${total} elementi`
    if (!data.length) {
      listBox.innerHTML = "<p class='paged-empty'>Nessun risultato.</p>"
      return
    }
    const start = perPage === 0 ? 0 : page * perPage
    const slice = perPage === 0 ? data : data.slice(start, start + perPage)
    const body = slice
      .map(
        (r) =>
          `<tr>${flagCell(r.f || "", r.c || "")}` +
          `<td class="paged-c-gara"><a href="${prefix}${esc(r.h)}">${esc(r.gara)}</a></td>` +
          `<td class="paged-c-liv">${r.lv ? esc(r.lv) : ""}</td>` +
          `<td class="paged-c-year">${r.y ? esc(r.y) : ""}</td>` +
          `<td class="paged-c-prob">${esc(r.probTxt)}</td>` +
          `<td class="paged-c-desc">${r.s ? esc(r.s) : ""}</td></tr>`,
      )
      .join("")
    listBox.innerHTML =
      `<table class="qtable-table paged-table"><thead><tr>` +
      `<th class="paged-sort paged-c-flag" data-k="stato">Stato${arrow("stato")}</th>` +
      `<th class="paged-sort" data-k="gara">Gara${arrow("gara")}</th>` +
      `<th class="paged-sort" data-k="liv">Livello${arrow("liv")}</th>` +
      `<th class="paged-sort paged-c-year" data-k="year">Anno${arrow("year")}</th>` +
      `<th class="paged-sort" data-k="prob">N°${arrow("prob")}</th>` +
      `<th class="paged-sort" data-k="desc">Descrizione${arrow("desc")}</th>` +
      `</tr></thead><tbody>${body}</tbody></table>`
    listBox.querySelectorAll<HTMLElement>("th.paged-sort").forEach((th) =>
      th.addEventListener("click", () => {
        const k = th.dataset.k as SortCol
        if (sortCol === k) sortDir = sortDir === 1 ? -1 : 1
        else { sortCol = k; sortDir = 1 }
        page = 0
        render()
      }),
    )
  }

  function renderPager() {
    const pc = pageCount()
    if (pc <= 1) { pager.innerHTML = ""; return }
    const btn = (label: string, target: number, disabled: boolean, cur = false) =>
      `<button class="paged-btn${cur ? " current" : ""}" data-p="${target}" ${disabled ? "disabled" : ""}>${label}</button>`
    const nums: string[] = []
    const win = 2
    const lo = Math.max(0, page - win)
    const hi = Math.min(pc - 1, page + win)
    if (lo > 0) { nums.push(btn("1", 0, false)); if (lo > 1) nums.push(`<span class="paged-ellip">…</span>`) }
    for (let i = lo; i <= hi; i++) nums.push(btn(String(i + 1), i, false, i === page))
    if (hi < pc - 1) { if (hi < pc - 2) nums.push(`<span class="paged-ellip">…</span>`); nums.push(btn(String(pc), pc - 1, false)) }
    pager.innerHTML =
      btn("‹ Prec", page - 1, page === 0) + nums.join("") + btn("Succ ›", page + 1, page >= pc - 1)
    pager.querySelectorAll<HTMLButtonElement>("button[data-p]").forEach((b) =>
      b.addEventListener("click", () => {
        page = Number(b.dataset.p)
        render()
        el.scrollIntoView({ block: "start", behavior: "smooth" })
      }),
    )
  }

  function render() {
    renderList()
    renderPager()
  }
  render()
}

async function init() {
  const els = Array.from(document.querySelectorAll<HTMLElement>("div.paged-list")).filter(
    (el) => !el.dataset.rendered,
  )
  if (!els.length) return
  const slug = document.body.dataset.slug || ""
  const prefix = "../".repeat((slug.match(/\//g) || []).length)
  for (const el of els) {
    el.dataset.rendered = "1"
    await renderOne(el, prefix)
  }
}

document.addEventListener("nav", () => {
  init()
})
init()
