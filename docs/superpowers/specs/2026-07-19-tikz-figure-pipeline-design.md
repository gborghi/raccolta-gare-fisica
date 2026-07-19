# TikZ Figure Pipeline -- Design (Spec 2)

**Status:** design (POC done, awaiting pilot) -- 2026-07-19

## Goal

Replace selected question figures (the ~49% clean line-art of the ~7,724 PNGs) with **faithful, build-time-rendered TikZ -> inline SVG** -- crisp, scalable, and removed from the external asset load -- WITHOUT modifying the Obsidian vault and WITHOUT losing the original PNG (kept as fallback/provenance). Start with a **pilot** (~6-12 curated figures) to prove the full integration, then expand gradually.

## Proven (POC, 2026-07-19)

- Pipeline `latex -> dvi -> dvisvgm --no-fonts` renders a standalone TikZ figure to SVG with the local TeX Live 2024 (the `dvisvgm --pdf` path is broken by Ghostscript 10.04 being too new; the native DVI path avoids it).
- An AI-authored TikZ reproduction of a clean line-art figure (5x5 B-into-page grid + vectors, `1liv23t_p5_f8.png`) is visually faithful -- same information, zero loss, now vector.

## Context

- ~49% of a 100-figure sample classified as `A_tikz_easy` (clean, faithfully redrawable): circuits, field grids, ray/optics, simple mechanics, geometry. ~8% plots (data-dependent, out of pilot), ~11% complex/colored, ~18% scan/photo, ~14% bad-crop/text (the last three are NOT candidates).
- Hard vault constraint (from the SPA project): the Obsidian vault is not edited. TikZ therefore lives in a **sidecar** inside `site-fisica`, keyed by figure filename, injected at preprocess time.
- Reference: `SubjectBrain/Physics` renders ` ```tikz ` circuitikz blocks to SVG at build (`tools/render-circuits.mjs`) + TikZJax for the rest. We use ONLY the build-time SVG path (no client TikZJax): all pilot figures render to static SVG, so no 2-7MB WASM ships and figures work no-JS.

## Architecture

- **Sidecar store** `site-fisica/tikz/<figure-basename>.tex`: the TikZ body for a figure, keyed by the PNG's basename (e.g. `1liv23t_p5_f8.tex` for `_attachments/1liv23t/1liv23t_p5_f8.png`). Each file is the standalone-wrappable TikZ (picture only; a fixed preamble is applied by the renderer). The vault is untouched.
- **Renderer** `scripts/render-tikz.mjs`: for each `tikz/*.tex`, wrap it in a fixed standalone preamble, `latex -> dvi -> dvisvgm --no-fonts --exact` to `tikz-svg/<basename>.svg`. **Hash-cached**: skip when `tikz-svg/<basename>.svg` exists AND `tikz/<basename>.tex` is unchanged (content hash stored alongside). Runs BEFORE preprocess. Fails loudly per-figure (logs the LaTeX error, keeps going).
- **Preprocess injection**: when an atom body embeds a figure `_attachments/<dir>/<basename>.png`, if `tikz-svg/<basename>.svg` exists, inline that SVG (as a `<figure class="tikz-fig">…svg…</figure>`) IN PLACE OF the `<img>`. Else emit the `<img>` as today. The original PNG is never deleted (stays in the vault + the olifis-assets repo) -- it is simply not shown when an SVG reproduction exists.
- **Fidelity gate**: a figure enters the sidecar ONLY after its render is visually verified against the original (side-by-side). No auto-accept -- an exam figure must not be silently altered.

## Components

1. `scripts/render-tikz.mjs` -- sidecar `.tex` -> cached `tikz-svg/*.svg` (fixed preamble: `standalone` + `tikz` + `amsmath` + `circuitikz` + common libraries; `latex`/`dvisvgm`). Hash cache in `tikz-svg/.hashes.json`. Skips absent TeX Live with a warning (like Physics).
2. `preprocess.mjs` hook -- figure-embed rewrite: `<basename>.png` embed -> inline `tikz-svg/<basename>.svg` when present. A small `SVG_FIGS` map built from `tikz-svg/` at startup.
3. `tikz/` sidecar dir -- authored `.tex` files (pilot: ~6-12).
4. Build pipeline -- add `node scripts/render-tikz.mjs` before `node preprocess.mjs`; copy `tikz-svg/` is NOT needed (SVG is inlined into HTML). Deploy unchanged otherwise.
5. Styling -- `.tikz-fig svg { max-width:100%; height:auto }` (responsive, theme-aware stroke via `currentColor` where feasible).

## Pilot scope

~6-12 figures from the classifier's `A_tikz_easy` list, diverse: a field grid (`1liv23t_p5_f8`), 1-2 circuits (`spho_2013_p5_f1`, `2liv12t_p6_f5`), a geometry/mechanics (`sjpo_2010_p11_f1`, `cpho-2016-semi_p7_f9`), a ray diagram. Author each `.tex`, render, verify fidelity, inline. Then a local build shows inline SVG on the relevant atoms. Measure: author-time/figure + fidelity hit-rate -> decide expansion cadence.

## Out of scope (future)

- Scaling authoring to the ~3,800 candidates (gradual, batch AI-generate + verify).
- Plots (`B_plot`) via pgfplots (needs digitized data).
- Client TikZJax (not used -- build-time SVG only).

## Testing / acceptance

- `render-tikz.mjs`: each pilot `.tex` renders to a non-empty SVG; re-run is a cache no-op; a changed `.tex` re-renders.
- preprocess: an atom embedding a pilot figure emits inline `<svg>` (not `<img>` for that figure); a non-pilot figure still emits `<img>`; the original PNG remains in `_attachments`.
- Fidelity: each pilot SVG visually matches its original PNG (controller-verified side-by-side).
- Local `npx quartz build --serve`: pilot atoms show crisp inline SVG.
