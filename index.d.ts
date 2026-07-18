declare module "*.scss" {
  const content: string
  export = content
}

// dom custom event
interface CustomEventMap {
  prenav: CustomEvent<{}>
  nav: CustomEvent<{ url: FullSlug }>
  themechange: CustomEvent<{ theme: "light" | "dark" }>
  readermodechange: CustomEvent<{ mode: "on" | "off" }>
  render: CustomEvent<{}>
  // fired by atomRouter.inline.ts after swapping the visible atom in a
  // reading-page pane, so qlang.inline.ts can re-bind that atom's own
  // translation toggle (it only scans the live DOM, on demand)
  atomrender: CustomEvent<{}>
}

type ContentIndex = Record<FullSlug, ContentDetails>
declare const fetchData: Promise<ContentIndex>
