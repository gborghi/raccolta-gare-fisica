import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import os from "node:os"
import { execFileSync } from "node:child_process"

test("rewrites relative _attachments img src to the asset origin + strips dir", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "rw-"))
  const pub = path.join(dir, "public")
  fs.mkdirSync(path.join(pub, "prove"), { recursive: true })
  fs.mkdirSync(path.join(pub, "_attachments", "x"), { recursive: true })
  fs.writeFileSync(path.join(pub, "_attachments", "x", "a.png"), "PNG")
  fs.writeFileSync(
    path.join(pub, "prove", "p.html"),
    `<img src="../_attachments/x/a.png" alt="f"><img src="../../_attachments/y/b.png">`,
  )
  execFileSync("node", ["scripts/rewrite-asset-urls.mjs"], {
    env: { ...process.env, RGF_ASSET_BASE: "https://gborghi.github.io/olifis-assets", RGF_PUBLIC: pub },
  })
  const html = fs.readFileSync(path.join(pub, "prove", "p.html"), "utf8")
  assert.match(html, /src="https:\/\/gborghi\.github\.io\/olifis-assets\/_attachments\/x\/a\.png"/)
  assert.match(html, /src="https:\/\/gborghi\.github\.io\/olifis-assets\/_attachments\/y\/b\.png"/)
  assert.ok(!fs.existsSync(path.join(pub, "_attachments")), "_attachments removed from deploy tree")
})

test("no-op when RGF_ASSET_BASE unset", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "rw2-"))
  const pub = path.join(dir, "public")
  fs.mkdirSync(path.join(pub, "_attachments"), { recursive: true })
  fs.writeFileSync(path.join(pub, "p.html"), `<img src="_attachments/z.png">`)
  execFileSync("node", ["scripts/rewrite-asset-urls.mjs"], { env: { ...process.env, RGF_ASSET_BASE: "", RGF_PUBLIC: pub } })
  assert.match(fs.readFileSync(path.join(pub, "p.html"), "utf8"), /src="_attachments\/z\.png"/)
  assert.ok(fs.existsSync(path.join(pub, "_attachments")), "dir kept in dev mode")
})
