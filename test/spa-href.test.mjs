import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"

test("quesiti + kw hrefs are fragments", () => {
  const q = JSON.parse(fs.readFileSync("staticgen/quesiti.json", "utf8"))
  assert.ok(q.every((x) => !/__q/i.test(x.href)), "no old atom slugs in quesiti")
  assert.ok(q.some((x) => /prove\/.+#q/i.test(x.href)), "fragments present")
  const kw = JSON.parse(fs.readFileSync("staticgen/quesiti_kw.json", "utf8"))
  assert.ok(Object.keys(kw).some((k) => k.includes("#")), "kw keyed by fragment")
})

// Recursively collect every *.md file under dir. Pure Node fs walk (no shell
// grep) so this test runs the same on Windows and POSIX.
function collectMarkdownFiles(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...collectMarkdownFiles(full))
    else if (entry.isFile() && entry.name.endsWith(".md")) out.push(full)
  }
  return out
}

const PROVE_DIR = "content/prove"

// Matches an old-style atom-slug LINK target (href=, markdown "](", or wikilink
// "[[") ending in __qNN. Deliberately scoped to link contexts, not bare text --
// pages legitimately carry the atom's own id as plain frontmatter/prose (e.g.
// "quesito_id: quesito_WoPhO_2013__Q09"), which is not a dangling link and must
// not trip this check.
const DANGLING_ATOM_LINK = /(?:href="[^"]*__q[0-9]|\]\([^)]*__q[0-9]|\[\[[^\]]*__q[0-9])/i

test(
  "no dangling __q links inside emitted prove pages",
  { skip: !fs.existsSync(PROVE_DIR) && "content/prove not built (regenerable dir, currently stale) -- run preprocess.mjs to build content/ before this test" },
  () => {
    const files = collectMarkdownFiles(PROVE_DIR)
    const offenders = []
    for (const f of files) {
      const body = fs.readFileSync(f, "utf8")
      if (DANGLING_ATOM_LINK.test(body)) offenders.push(f)
    }
    assert.equal(offenders.length, 0, "found pages with old atom links:\n" + offenders.join("\n"))
  }
)
