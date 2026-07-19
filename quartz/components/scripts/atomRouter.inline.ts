// Reading-page SPA router for physics quesiti (adapted from the English
// literature site's quartz/components/scripts/atomRouter.inline.ts).
//
// preprocess.mjs's SPA container pass emits ONE page per prova (exam): every
// atom's body is concatenated behind an inline
//   <span class="atom-split" data-atom="qNN" data-title="..." data-tags="..." id="qNN">
// marker. Physics atom ids are FLAT (q01, q02, ...) -- no chapter/work nesting
// like the English site, so there is no chapter-fallback or related-chapters
// machinery here.
//
// A bilingual atom's body may itself contain
//   <div class="qlang-switch" data-default="<lang>"></div>  ...native body...
//   <div class="qlang-split" data-lang="<l>"></div>  ...translated body...  (repeated)
// This widget is owned end-to-end by qlang.inline.ts (flag buttons, toggle,
// localStorage), which this script does NOT fold in or duplicate. atomRouter's
// partition() only splits on `.atom-split`: everything between two atom-split
// markers -- including any qlang-switch/qlang-split DIVs and their bodies --
// travels together as one opaque per-atom node blob. Because qlang.inline.ts
// resolves its own container as `sw.parentElement` at the moment it runs, this
// blob works unmodified once it is living inside the reading pane: pane IS the
// qlang container. The only wiring atomRouter needs to do is re-invoke qlang's
// scan after every atom swap (see the "atomrender" event below), because
// qlang.inline.ts only listens for "nav" (once per real page load) and has no
// way to know the visible atom changed underneath it.
//
// Quartz renders the whole page normally (wikilinks, popovers, math, qlang
// markers) so the full concatenated text is present in the static HTML
// (SEO-safe, and the no-JS fallback). This script then:
//   1. partitions the rendered article DOM at `.atom-split` markers into
//      per-atom node groups;
//   2. detaches them and shows ONE atom at a time inside a reading pane, so
//      the live DOM stays small even for a long prova;
//   3. deep-links each atom at `#atomId` (history + back/forward + arrow keys);
//   4. builds a flat table of contents and prev/next;
//   5. fires a synthetic "atomrender" event after every atom swap so
//      qlang.inline.ts re-binds the newly-visible atom's own translation
//      toggle.
//
// Mounted only on pages that carry a `<div class="atom-reader">` placeholder.

interface Atom {
  id: string
  title: string
  nodes: Node[]
}

// A marker (`.atom-split`) is emitted as an inline <span>; the markdown
// renderer wraps a lone inline element in a <p>, so the marker is usually NOT
// a direct child of the article -- it sits inside a <p> that contains nothing
// else. Detect both shapes: the bare marker element, or a wrapper whose only
// element child is the marker and which carries no text of its own.
function markerOf(el: HTMLElement): HTMLElement | null {
  if (el.classList && el.classList.contains("atom-split")) return el
  if (el.childElementCount === 1 && !(el.textContent || "").trim()) {
    const c = el.firstElementChild as HTMLElement | null
    if (c && c.classList && c.classList.contains("atom-split")) return c
  }
  return null
}

function partition(
  container: HTMLElement,
  mount: HTMLElement,
): { atoms: Atom[]; markerNodes: Node[] } {
  const atoms: Atom[] = []
  const markerNodes: Node[] = [] // top-level marker nodes (bare span or its wrapping <p>) to detach
  let cur: Atom | null = null
  for (const node of Array.from(container.childNodes)) {
    if (node === mount) continue
    if (node.nodeType === Node.ELEMENT_NODE) {
      const marker = markerOf(node as HTMLElement)
      if (marker) {
        markerNodes.push(node)
        cur = {
          id: marker.dataset.atom || `atom-${atoms.length}`,
          title: marker.dataset.title || "",
          nodes: [],
        }
        atoms.push(cur)
        continue
      }
    }
    // Everything else -- including any qlang-switch/qlang-split DIVs and their
    // bodies -- belongs to the current atom as one opaque blob. qlang.inline.ts
    // partitions *inside* it on its own, keyed off its own markers, once the
    // blob lands in the reading pane.
    if (cur) cur.nodes.push(node)
  }
  return { atoms, markerNodes }
}

function esc(s: string): string {
  return s.replace(/[&<>]/g, (c) => (c === "&" ? "&amp;" : c === "<" ? "&lt;" : "&gt;"))
}

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  cls?: string,
  html?: string,
): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag)
  if (cls) e.className = cls
  if (html != null) e.innerHTML = html
  return e
}

function build(reader: HTMLElement) {
  if (reader.dataset.mounted) return
  reader.dataset.mounted = "1"
  const container = reader.parentElement
  if (!container) return

  const { atoms, markerNodes } = partition(container, reader)
  if (!atoms.length) return

  // detach every atom's nodes + the marker nodes (bare span or its wrapping
  // <p>) so no empty marker boxes linger in the flow
  for (const m of markerNodes) m.parentNode?.removeChild(m)
  for (const a of atoms) for (const n of a.nodes) n.parentNode?.removeChild(n)

  const order = atoms.map((a) => a.id)
  const byId = new Map(atoms.map((a) => [a.id, a]))

  // ---- reader chrome ----
  const bar = el("div", "ar-bar")
  const tocBtn = el("button", "ar-tocbtn", "&#9776;")
  tocBtn.setAttribute("aria-label", "Indice")
  const crumb = el("div", "ar-crumb")
  const spacer = el("div", "ar-spacer")
  const pager = el("div", "ar-pager")
  const prevBtn = el("button", "ar-prev", "&#8249;")
  const nextBtn = el("button", "ar-next", "&#8250;")
  prevBtn.setAttribute("aria-label", "Precedente")
  nextBtn.setAttribute("aria-label", "Successivo")
  pager.append(prevBtn, nextBtn)
  bar.append(tocBtn, crumb, spacer, pager)

  const shell = el("div", "ar-shell")
  const toc = el("nav", "ar-toc")
  toc.setAttribute("aria-label", "Indice")
  const pane = el("article", "ar-pane")
  shell.append(toc, pane)

  reader.replaceChildren(bar, shell)

  // ---- table of contents (flat -- physics atom ids have no chapter nesting) ----
  const tocList = el("ul", "ar-toc-list")
  for (const a of atoms) {
    const li = el("li")
    const link = el("a", "ar-toc-link", esc(a.title || a.id))
    link.href = `#${a.id}`
    link.dataset.id = a.id
    li.append(link)
    tocList.append(li)
  }
  toc.append(tocList)

  // ---- rendering ----
  let shownId = order[0] // the atom currently displayed (drives prev/next)
  function idx(id: string) {
    return order.indexOf(id)
  }
  function render(id: string) {
    const a = byId.get(id) || atoms[0]
    shownId = a.id
    pane.replaceChildren(...a.nodes)
    const pos = idx(a.id) + 1
    crumb.innerHTML = `${esc(a.title || a.id)} <span class="ar-count">${pos} / ${order.length}</span>`
    toc.querySelectorAll(".ar-toc-link").forEach((l) =>
      l.classList.toggle("active", (l as HTMLElement).dataset.id === a.id),
    )
    const active = toc.querySelector(".ar-toc-link.active") as HTMLElement | null
    active?.scrollIntoView({ block: "nearest" })
    const i = idx(a.id)
    prevBtn.disabled = i <= 0
    nextBtn.disabled = i >= order.length - 1
    pane.scrollTo?.(0, 0)
    window.scrollTo(0, 0)
    // The atom just inserted into `pane` may carry its own qlang-switch /
    // qlang-split DOM (see the file header). qlang.inline.ts only scans the
    // live document and only listens for "nav" (once per real page load), so
    // ping it now that this atom's nodes are back in the DOM.
    // IMPORTANT: qlang's "nav" handler fires BEFORE this router partitions on
    // the first nav of a reading page, so it binds the first-shown atom's
    // qlang-switch while the WHOLE prova is still concatenated -- mis-scoping
    // `groups` across every atom and setting `qlangReady` on that switch. Clear
    // qlangReady on the pane's switch(es) before re-poking so setupQlang
    // re-scopes to THIS atom's nodes (now the pane's only children). Atoms qlang
    // has never seen (later swaps) have no qlangReady, so this is a no-op there.
    pane.querySelectorAll<HTMLElement>(".qlang-switch").forEach((s) => {
      delete s.dataset.qlangReady
    })
    const event: CustomEventMap["atomrender"] = new CustomEvent("atomrender", { detail: {} })
    document.dispatchEvent(event)
  }
  function go(id: string, push: boolean) {
    // Physics atom ids are flat (q01) -- unlike the English site there is no
    // chapter/aggregate id to resolve, so an unknown id just lands on the first atom.
    if (!byId.has(id)) id = order[0]
    render(id)
    if (push && location.hash.slice(1) !== id) history.pushState(null, "", `#${id}`)
    shell.classList.remove("toc-open")
  }
  function current(): string {
    return decodeURIComponent(location.hash.slice(1)) || order[0]
  }

  prevBtn.onclick = () => {
    const i = idx(shownId)
    if (i > 0) go(order[i - 1], true)
  }
  nextBtn.onclick = () => {
    const i = idx(shownId)
    if (i < order.length - 1) go(order[i + 1], true)
  }
  tocBtn.onclick = () => shell.classList.toggle("toc-open")
  reader.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement).closest?.('a[href^="#"]') as HTMLAnchorElement | null
    if (!a || !reader.contains(a)) return
    const id = decodeURIComponent(a.getAttribute("href")!.slice(1))
    if (byId.has(id)) {
      e.preventDefault()
      go(id, true)
    }
  })

  // document/window-level listeners must be torn down on SPA navigation away
  // from this reading page, or repeated visits to different prova pages pile
  // up duplicate popstate/keydown handlers (each stale one still calling
  // history.pushState against an id from an atom that is no longer on screen).
  // window.addCleanup is the site's SPA-safety hook (spa.inline.ts), already
  // used the same way by popover.inline.ts.
  const onPopState = () => go(current(), false)
  const onKeydown = (e: KeyboardEvent) => {
    if ((e.target as HTMLElement).matches?.("input,textarea")) return
    if (e.key === "ArrowRight") {
      const i = idx(shownId)
      if (i < order.length - 1) go(order[i + 1], true)
    } else if (e.key === "ArrowLeft") {
      const i = idx(shownId)
      if (i > 0) go(order[i - 1], true)
    }
  }
  window.addEventListener("popstate", onPopState)
  document.addEventListener("keydown", onKeydown)
  window.addCleanup?.(() => {
    window.removeEventListener("popstate", onPopState)
    document.removeEventListener("keydown", onKeydown)
  })

  go(current(), false)
}

function init() {
  const readers = document.querySelectorAll<HTMLElement>("div.atom-reader")
  document.body.classList.toggle("reading-page", readers.length > 0)
  readers.forEach((r) => build(r))
}

document.addEventListener("nav", init)
init()

export {}
