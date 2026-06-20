import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Raccolta Gare di Fisica",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "it-IT",
    baseUrl: "gborghi.github.io/raccolta-gare-fisica",
    ignorePatterns: ["private", "templates", ".obsidian", "tmp_imgs"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Fraunces",
        body: "Figtree",
        code: "Spline Sans Mono",
      },
      colors: {
        lightMode: {
          light: "#fff6ec",
          lightgray: "#ecdfcd",
          gray: "#9c8d77",
          darkgray: "#39342c",
          dark: "#191a2e",
          secondary: "#1f3bd1",
          tertiary: "#f0852a",
          highlight: "rgba(31, 59, 209, 0.08)",
          textHighlight: "#f5c84b99",
        },
        darkMode: {
          light: "#14152b",
          lightgray: "#2d2f55",
          gray: "#8a8db5",
          darkgray: "#d9d7ea",
          dark: "#f7f1e6",
          secondary: "#8aa4ff",
          tertiary: "#ffb05a",
          highlight: "rgba(138, 164, 255, 0.12)",
          textHighlight: "#f5c84b55",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // CustomOgImages omitted to speed up the (large) build
    ],
  },
}

export default config
