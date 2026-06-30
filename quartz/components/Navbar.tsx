import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// A cheerful sticky top navbar. Links are ABSOLUTE, built from the configured
// baseUrl's path (e.g. "/raccolta-gare-fisica"), so they always carry the
// GitHub Pages project base regardless of the current page, SPA navigation, or
// trailing-slash quirks. Folder targets keep a trailing slash; "cerca" is a leaf page.
// v5 emits content at lowercase slug paths, so folder targets are lowercase.
const LINKS: [string, string][] = [
  ["Aree", "clusters"],
  ["Argomenti", "topics"],
  ["Metodi", "methods"],
  ["Abilità", "skills"],
  ["Objects", "objects"],
  ["Prove", "prove"],
  ["Cerca", "cerca"],
]

// "host/sub/dir" -> "/sub/dir"  ;  "host" -> ""
function basePathOf(baseUrl?: string): string {
  if (!baseUrl) return ""
  const i = baseUrl.indexOf("/")
  if (i < 0) return ""
  return ("/" + baseUrl.slice(i + 1)).replace(/\/+$/, "")
}

const Navbar: QuartzComponent = ({ cfg, displayClass }: QuartzComponentProps) => {
  const bp = basePathOf(cfg?.baseUrl)
  return (
    <nav class={classNames(displayClass, "navbar")}>
      <div class="navbar-inner">
        <a class="navbar-brand" href={`${bp}/`}>
          <img class="navbar-logo" src={`${bp}/static/logo.svg`} alt="" aria-hidden="true" width="40" height="40" />
          {cfg?.pageTitle ?? "Gare di Fisica"}
        </a>
        <div class="navbar-links">
          {LINKS.map(([label, slug]) => (
            <a href={`${bp}/${slug}${slug === "cerca" ? "" : "/"}`}>{label}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}

// NB: navbar CSS lives in quartz/styles/custom.scss — v5 only auto-emits a
// component's .css when the LAYOUT places it; this Navbar renders at <body>
// level in renderPage.tsx (outside the layout), so its CSS must be global.

export default (() => Navbar) satisfies QuartzComponentConstructor
