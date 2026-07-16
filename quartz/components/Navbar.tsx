import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// Top navbar matching the "Redesign Raccolta Gare" mockup: phi tile brand, inline
// section links, and a right cluster with a search box, a "Ricerca per tag" CTA and
// a dark-mode toggle — PLUS a sidebar toggle (the left explorer rail is a slide-in
// drawer, hidden by default). Links are ABSOLUTE, carrying the baseUrl path so they
// survive SPA navigation and the GitHub Pages project base. Folder targets keep a
// trailing slash; "cerca" is a leaf page.
const LINKS: [string, string][] = [
  ["Aree", "clusters"],
  ["Argomenti", "topics"],
  ["Metodi", "methods"],
  ["Abilità", "skills"],
  ["Objects", "objects"],
  ["Prove", "prove"],
  ["Soluzioni", "soluzioni"],
]

// "host/sub/dir" -> "/sub/dir"  ;  "host" -> ""
function basePathOf(baseUrl?: string): string {
  if (!baseUrl) return ""
  const i = baseUrl.indexOf("/")
  if (i < 0) return ""
  return ("/" + baseUrl.slice(i + 1)).replace(/\/+$/, "")
}

// Inline controller for the three navbar buttons + the sidebar drawer. Attached ONCE
// (guarded) via document-level delegation so it survives SPA content swaps. Mirrors the
// darkmode plugin (localStorage "theme" + saved-theme attr + "themechange" event) and
// the search plugin (Ctrl/Cmd+K opens the overlay) so nothing is lost when the left rail
// is hidden. Default sidebar state is CLOSED (hidden).
const NAV_SCRIPT = `
(function(){
  if (window.__rgfNavInit) return; window.__rgfNavInit = true;
  var root = document.documentElement, body = document.body;
  function syncToggle(open){
    var t = document.getElementById("nav-sidebar-toggle");
    if (t) t.setAttribute("aria-expanded", String(!!open));
  }
  function setSidebar(open){
    if (open) body.setAttribute("data-lsb","open"); else body.removeAttribute("data-lsb");
    try { localStorage.setItem("rgf-sidebar", open ? "open" : "closed"); } catch(e){}
    syncToggle(open);
  }
  // restore (default closed)
  try { if (localStorage.getItem("rgf-sidebar") === "open") { body.setAttribute("data-lsb","open"); } } catch(e){}
  syncToggle(body.hasAttribute("data-lsb"));

  // Force explorer folders COLLAPSED on every (re)render. The explorer fork auto-opens
  // the folder containing the current page (folderIsPrefixOfCurrentSlug in its inline
  // script) and can't be configured off. Open state lives ONLY in the .open class on
  // .folder-outer, and the fork's own toggle handlers read that class, so stripping
  // .open right after a render is desync-safe. We observe childList additions (i.e. the
  // explorer rebuilding its tree) and strip; a user's icon-toggle is an attribute change,
  // which this observer ignores, so manually-opened folders stay open until navigation.
  function stripAutoOpen(scope){
    var opened = scope.querySelectorAll(".folder-outer.open");
    for (var i = 0; i < opened.length; i++) opened[i].classList.remove("open");
  }
  function attachExplorerCollapse(){
    var uls = document.querySelectorAll(".explorer-ul");
    for (var j = 0; j < uls.length; j++){
      (function(ul){
        if (ul.__rgfCollapseObs){ stripAutoOpen(ul); return; }
        var obs = new MutationObserver(function(muts){
          for (var k = 0; k < muts.length; k++){
            var added = muts[k].addedNodes;
            for (var n = 0; n < added.length; n++){
              var el = added[n];
              if (!el || el.nodeType !== 1) continue;
              if ((el.classList && el.classList.contains("folder-outer")) ||
                  (el.querySelector && el.querySelector(".folder-outer.open"))){
                stripAutoOpen(ul); return;
              }
            }
          }
        });
        obs.observe(ul, { childList: true, subtree: true });
        ul.__rgfCollapseObs = obs;
        stripAutoOpen(ul);
      })(uls[j]);
    }
  }
  attachExplorerCollapse();
  document.addEventListener("nav", function(){ setTimeout(attachExplorerCollapse, 0); });
  document.addEventListener("render", function(){ setTimeout(attachExplorerCollapse, 0); });

  document.addEventListener("click", function(e){
    var t = e.target;
    if (!t || !t.closest) return;
    if (t.closest("#nav-sidebar-toggle")){ e.preventDefault(); setSidebar(!body.hasAttribute("data-lsb")); return; }
    if (t.closest("#nav-scrim")){ setSidebar(false); return; }
    if (t.closest("#nav-dark")){
      e.preventDefault();
      var cur = root.getAttribute("saved-theme") === "dark" ? "dark" : "light";
      var next = cur === "dark" ? "light" : "dark";
      root.setAttribute("saved-theme", next);
      try { localStorage.setItem("theme", next); } catch(e2){}
      document.dispatchEvent(new CustomEvent("themechange", { detail: { theme: next } }));
      return;
    }
    if (t.closest("#home-graph-open")){
      // Homepage "Grafo della conoscenza" card: open the global-graph modal by
      // clicking the graph plugin's own trigger. The graph lives in the right rail
      // (display:none on the index page) but .click() still fires its handler and
      // the position:fixed overlay opens. If the trigger is missing, do nothing here
      // and let the anchor's href (cerca) act as the fallback.
      var gg = document.querySelector(".global-graph-icon");
      if (gg) { e.preventDefault(); gg.click(); }
      return;
    }
    if (t.closest("#nav-search")){
      e.preventDefault();
      // Open the search plugin overlay. Clicking its own button is the reliable
      // trigger (a synthetic Ctrl+K keydown is ignored); the button lives in the
      // hidden drawer but .click() still fires its handler and the position:fixed
      // overlay opens centered on the viewport.
      var sb = document.querySelector(".search-button");
      if (sb) { sb.click(); }
      else { document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true, bubbles: true, cancelable: true })); }
      return;
    }
  });
  // close the drawer on Escape
  document.addEventListener("keydown", function(e){
    if (e.key === "Escape" && body.hasAttribute("data-lsb")) setSidebar(false);
  });
})();
`

const Navbar: QuartzComponent = ({ cfg, displayClass }: QuartzComponentProps) => {
  const bp = basePathOf(cfg?.baseUrl)
  return (
    <>
      <nav class={classNames(displayClass, "navbar")}>
        <div class="navbar-inner">
          <button
            id="nav-sidebar-toggle"
            class="navbar-iconbtn"
            type="button"
            aria-label="Mostra o nascondi la barra laterale"
            aria-expanded="false"
            title="Barra laterale"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <a class="navbar-brand" href={`${bp}/`}>
            <span class="navbar-logo-tile" aria-hidden="true">φ</span>
            <span class="navbar-brand-name">{cfg?.pageTitle ?? "Gare di Fisica"}</span>
          </a>
          <div class="navbar-links">
            {LINKS.map(([label, slug]) => (
              <a href={`${bp}/${slug}${slug === "cerca" ? "" : "/"}`}>{label}</a>
            ))}
          </div>
          <div class="navbar-actions">
            <button id="nav-search" class="navbar-search" type="button" aria-label="Cerca nel sito">
              <span class="navbar-search-ic" aria-hidden="true">⌕</span>
              <span class="navbar-search-ph">Cerca nel sito…</span>
              <span class="navbar-search-kbd" aria-hidden="true">Ctrl K</span>
            </button>
            <a class="navbar-cta" href={`${bp}/cerca`}>Ricerca per tag</a>
            <button id="nav-dark" class="navbar-iconbtn navbar-dark" type="button" aria-label="Cambia tema chiaro/scuro" title="Tema">
              <span class="navbar-dark-ic" aria-hidden="true">◐</span>
            </button>
          </div>
        </div>
      </nav>
      <div id="nav-scrim" aria-hidden="true"></div>
      <script dangerouslySetInnerHTML={{ __html: NAV_SCRIPT }} />
    </>
  )
}

// NB: navbar CSS lives in quartz/styles/custom.scss — v5 only auto-emits a
// component's .css when the LAYOUT places it; this Navbar renders at <body>
// level in renderPage.tsx (outside the layout), so its CSS must be global.

export default (() => Navbar) satisfies QuartzComponentConstructor
