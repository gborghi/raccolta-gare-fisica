import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore  bundled as client-side script
import script from "./scripts/cerca.inline"

const style = `
#cerca { margin-top: 1rem; }
.cerca-controls { margin-bottom: 0.8rem; }
.cerca-toggle {
  padding: 0.4rem 0.8rem; border: 1px solid var(--secondary); border-radius: 6px;
  background: var(--secondary); color: var(--light); cursor: pointer; font-size: 0.9rem;
}
.cerca-toggle:hover { opacity: 0.9; }
.cerca-facets { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 0.8rem; }
details.cerca-facet { border: 1px solid var(--lightgray); border-radius: 6px; padding: 0.3rem 0.6rem; }
details.cerca-facet > summary { cursor: pointer; font-weight: 600; padding: 0.2rem 0; }
.cerca-chips { display: flex; flex-wrap: wrap; gap: 0.35rem; padding: 0.4rem 0; }
.cerca-chip {
  display: inline-flex; align-items: center; gap: 0.3rem;
  padding: 0.2rem 0.55rem; border: 1px solid var(--lightgray); border-radius: 999px;
  background: var(--light); color: var(--dark); cursor: pointer; font-size: 0.82rem;
}
.cerca-chip:hover { border-color: var(--secondary); }
.cerca-chip.active { background: var(--secondary); color: var(--light); border-color: var(--secondary); }
.cerca-chip .cerca-n { font-size: 0.72rem; opacity: 0.7; }
.cerca-chip.active .cerca-n { opacity: 0.85; }
.cerca-selected { margin: 0.6rem 0; display: flex; flex-wrap: wrap; gap: 0.35rem; align-items: center; }
.cerca-sel-label { font-size: 0.85rem; color: var(--gray); margin-right: 0.2rem; }
.cerca-clear {
  padding: 0.2rem 0.6rem; border: 1px solid var(--lightgray); border-radius: 6px;
  background: transparent; color: var(--gray); cursor: pointer; font-size: 0.8rem;
}
.cerca-count { font-size: 0.9rem; margin: 0.5rem 0; }
.cerca-hint { color: var(--gray); }
.cerca-results table.qtable-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
.cerca-results th, .cerca-results td {
  text-align: left; padding: 0.35rem 0.55rem; border-bottom: 1px solid var(--lightgray); vertical-align: top;
}
.cerca-results th.qtable-th { cursor: pointer; user-select: none; white-space: nowrap; }
.cerca-results th.sorted-asc::after { content: " \\2191"; }
.cerca-results th.sorted-desc::after { content: " \\2193"; }
.cerca-results td:nth-child(3), .cerca-results td:nth-child(4) { text-align: center; }
.cerca-results tr:hover td { background: var(--highlight); }
`

export default (() => {
  const CercaPage: QuartzComponent = () => null
  CercaPage.afterDOMLoaded = script
  CercaPage.css = style
  return CercaPage
}) satisfies QuartzComponentConstructor
