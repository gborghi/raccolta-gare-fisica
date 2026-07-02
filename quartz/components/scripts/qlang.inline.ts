// Client language switch for bilingual/multilingual quesito pages.
// preprocess.mjs merges each default quesito with its translation siblings as:
//   <div class="qlang-switch" data-default="<native>"></div>
//   …native body blocks…
//   <div class="qlang-split" data-lang="<l>"></div>  …sibling body blocks…  (repeated)
// This partitions the sibling blocks by the split markers, draws flag buttons
// (flagcdn images — Windows browsers can't render flag emoji), toggles visibility
// and persists the choice. Runs on Quartz's "nav" event (SPA-safe).
const ISO: Record<string, string> = { it: "it", en: "gb", es: "es", pt: "br", de: "de", fr: "fr" }
const LABEL: Record<string, string> = {
  it: "Italiano", en: "English", es: "Espanol", pt: "Portugues", de: "Deutsch", fr: "Francais",
}
const STORE_KEY = "rgf-qlang"

function setupQlang() {
  const sw = document.querySelector(".qlang-switch") as HTMLElement | null
  if (!sw || sw.dataset.qlangReady) return
  const container = sw.parentElement
  if (!container) return

  const defaultLang = sw.dataset.default || "it"
  const groups: Record<string, HTMLElement[]> = { [defaultLang]: [] }
  const langs: string[] = [defaultLang]
  let cur = defaultLang

  for (const node of Array.from(container.children) as HTMLElement[]) {
    if (node === sw) continue
    const split = node.classList?.contains("qlang-split")
      ? node
      : (node.querySelector?.(".qlang-split") as HTMLElement | null)
    if (split) {
      cur = split.dataset.lang || cur
      if (!groups[cur]) { groups[cur] = []; langs.push(cur) }
      node.style.display = "none" // the marker's own wrapper never shows
      continue
    }
    (groups[cur] ||= (groups[cur] = [])).push(node)
  }
  if (langs.length < 2) return

  const stored = localStorage.getItem(STORE_KEY)
  let active = stored && langs.includes(stored) ? stored : defaultLang

  function apply(lang: string) {
    for (const l of langs) for (const n of groups[l]) n.style.display = l === lang ? "" : "none"
    sw.querySelectorAll("button").forEach((btn) =>
      btn.classList.toggle("active", (btn as HTMLElement).dataset.lang === lang))
    active = lang
  }

  sw.replaceChildren()
  for (const l of langs) {
    const btn = document.createElement("button")
    btn.type = "button"
    btn.dataset.lang = l
    btn.className = "qlang-btn"
    btn.title = LABEL[l] || l
    const iso = ISO[l]
    if (iso) {
      const img = document.createElement("img")
      img.src = `https://flagcdn.com/24x18/${iso}.png`
      img.width = 24
      img.height = 18
      img.alt = l
      img.loading = "lazy"
      btn.appendChild(img)
    }
    const code = document.createElement("span")
    code.className = "qlang-code"
    code.textContent = l.toUpperCase()
    btn.appendChild(code)
    btn.addEventListener("click", () => { localStorage.setItem(STORE_KEY, l); apply(l) })
    sw.appendChild(btn)
  }
  sw.dataset.qlangReady = "1"
  apply(active)
}

document.addEventListener("nav", setupQlang)
