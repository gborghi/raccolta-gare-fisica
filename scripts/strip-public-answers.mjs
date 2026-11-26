#!/usr/bin/env node
// The answer stays on the page, inside <details class="q-answer">, opened with a click.
// It must not ship in the public quesiti.json, nor in searchMeta.json built from it.
import fs from "node:fs"
import path from "node:path"

const pub = process.env.QUARTZ_OUT || process.env.PUB || "public"
const src = path.join(pub, "static", "quesiti.json")
if (!fs.existsSync(src)) {
  console.warn(`[strip-public-answers] ${src} missing`)
  process.exit(0)
}
const data = JSON.parse(fs.readFileSync(src, "utf8"))
const rows = Array.isArray(data) ? data : data.quesiti || Object.values(data)
let n = 0
for (const q of rows) {
  if (q && typeof q === "object" && q.answer) {
    q.answer = ""
    n++
  }
}
fs.writeFileSync(src, JSON.stringify(data))
console.log(`[strip-public-answers] blanked ${n} answers in ${src}`)
