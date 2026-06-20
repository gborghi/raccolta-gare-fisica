import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// A cheerful sticky top navbar with the site brand + quick links to the main
// folder indexes and the faceted search. Links are root-relative (via pathToRoot)
// so they work under the GitHub Pages project subpath.
const LINKS: [string, string][] = [
  ["Aree", "Clusters"],
  ["Argomenti", "Topics"],
  ["Metodi", "Methods"],
  ["Abilità", "Skills"],
  ["Prove", "Prove"],
  ["Cerca", "cerca"],
]

const Navbar: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const base = pathToRoot(fileData.slug!)
  return (
    <nav class={classNames(displayClass, "navbar")}>
      <a class="navbar-brand" href={base}>
        <span class="navbar-dot" aria-hidden="true"></span>
        {cfg?.pageTitle ?? "Gare di Fisica"}
      </a>
      <button class="navbar-toggle" aria-label="Menu">☰</button>
      <div class="navbar-links">
        {LINKS.map(([label, slug]) => (
          <a href={`${base}/${slug}`}>{label}</a>
        ))}
      </div>
    </nav>
  )
}

Navbar.css = `
.navbar {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;
  margin: -0.5rem 0 1.4rem 0; padding: 0.55rem 1.1rem;
  background: var(--navbar-bg);
  border-radius: 0 0 14px 14px;
  box-shadow: 0 3px 14px rgba(27, 40, 120, 0.18);
}
.navbar-brand {
  display: inline-flex; align-items: center; gap: 0.55rem;
  font-family: var(--titleFont); font-weight: 800; font-size: 1.15rem;
  color: var(--navbar-fg) !important; background: none; letter-spacing: -0.01em;
  text-decoration: none !important;
}
.navbar-dot {
  width: 16px; height: 16px; border-radius: 50%;
  background: conic-gradient(var(--accent-orange), var(--accent-yellow), var(--accent-teal), var(--accent-orange));
  box-shadow: 0 0 0 3px rgba(255,255,255,0.18);
  flex: 0 0 auto;
}
.navbar-links { display: flex; gap: 0.35rem; flex-wrap: wrap; margin-left: auto; }
.navbar-links a {
  font-family: var(--titleFont); font-weight: 600; font-size: 0.92rem;
  color: var(--navbar-fg) !important; background: rgba(255,255,255,0.0);
  padding: 0.32rem 0.7rem; border-radius: 999px; text-decoration: none !important;
  transition: background 0.15s ease, color 0.15s ease;
}
.navbar-links a:hover { background: var(--accent-orange); color: #1a1320 !important; }
.navbar-toggle { display: none; background: none; border: 0; color: var(--navbar-fg); font-size: 1.3rem; cursor: pointer; }
@media all and (max-width: 800px) {
  .navbar-links a { font-size: 0.85rem; padding: 0.28rem 0.55rem; }
}
`

export default (() => Navbar) satisfies QuartzComponentConstructor
