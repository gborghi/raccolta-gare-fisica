import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import os from "node:os"
import { execFileSync } from "node:child_process"

test("emits _headers with immutable caching + robots.txt with sitemap", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "cf-"))
  const pub = path.join(dir, "public")
  fs.mkdirSync(pub, { recursive: true })
  execFileSync("node", ["scripts/emit-cf-files.mjs"], { env: { ...process.env, RGF_PUBLIC: pub } })
  const headers = fs.readFileSync(path.join(pub, "_headers"), "utf8")
  assert.match(headers, /\/\*\.png\r?\n\s+Cache-Control: public, max-age=604800, immutable/)
  assert.match(headers, /\/\*\.woff2/)
  const robots = fs.readFileSync(path.join(pub, "robots.txt"), "utf8")
  assert.match(robots, /User-agent: \*/)
  assert.match(robots, /Sitemap: https:\/\/raccolta-gare-fisica\.pages\.dev\/sitemap\.xml/)
})
