import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

// SPA (Task 6.4, Critical #1): pre-atomization deep links (old per-atom pages
// "prove/<stem>__<atomId>") no longer resolve -- ported from preprocess.mjs's
// removed content/404.md redirect block (that emission was clobbered by
// NotFoundPageType re-emitting the same "404" slug from THIS component, so the
// redirect never shipped). Placed here instead, in the component that actually
// wins the write, so it survives the build. atomId is lowercased on rewrite to
// match the emitted fragment casing (Phase 1-3 lowercase atomId convention).
const REDIRECT_SCRIPT = `
(function(){
  var p=decodeURIComponent(location.pathname).replace(/\\/index\\.html$/,"").replace(/\\/$/,"");
  var m=p.match(/^(.*)\\/prove\\/([^/]+?)__([a-z0-9]+)$/i);
  if(m){ location.replace(m[1]+"/prove/"+m[2]+"#"+m[3].toLowerCase()); }
})();
`

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: REDIRECT_SCRIPT }} />
      <article class="popover-hint">
        <h1>404</h1>
        <p>{i18n(cfg.locale).pages.error.notFound}</p>
        <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
      </article>
    </>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
