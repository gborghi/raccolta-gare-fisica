// Cloudflare mirror: replace public/ with an exact copy of what GitHub Pages serves.
//   MIRROR_SOURCE=git:<repo-url>#<branch>   -> shallow clone of the published branch (fisica gh-pages)
//   MIRROR_SOURCE=https://<user>.github.io/<repo>/  -> download every file listed in
//        mirror-manifest.json and verify its sha256 (mate: Pages built by Actions, no branch)
// Files GitHub needs but Cloudflare must not serve (CNAME) are dropped; nothing else is
// added or changed. Fails (exit 1) instead of deploying a partial or inconsistent copy.
import fs from "node:fs"
import path from "node:path"
import crypto from "node:crypto"
import { execFileSync } from "node:child_process"

const PUB = process.env.QUARTZ_OUT || process.env.RGF_PUBLIC || "public"
const SRC = process.env.MIRROR_SOURCE
const DROP = new Set(["CNAME"])
if (!SRC) { console.error("[mirror] MIRROR_SOURCE not set"); process.exit(1) }
const tmp = PUB + ".mirror"
fs.rmSync(tmp, { recursive: true, force: true })

if (SRC.startsWith("git:")) {
  const [url, branch] = SRC.slice(4).split("#")
  execFileSync("git", ["clone", "--depth", "1", "--branch", branch || "gh-pages", url, tmp], { stdio: "inherit" })
  fs.rmSync(path.join(tmp, ".git"), { recursive: true, force: true })
} else {
  const base = SRC.replace(/\/?$/, "/")
  const get = async (rel, tries = 4) => {
    const [rp, q] = rel.split("?")
    const url = base + rp.split("/").map(encodeURIComponent).join("/") + (q ? "?" + q : "")
    for (let i = 0; i < tries; i++) {
      try {
        const r = await fetch(url, { headers: { "Accept-Encoding": "identity", "Cache-Control": "no-cache" } })
        if (r.ok) return Buffer.from(await r.arrayBuffer())
        if (r.status === 404) throw new Error(`404 ${url}`)
      } catch (e) { if (i === tries - 1) throw e }
      await new Promise((s) => setTimeout(s, 1500 * (i + 1)))
    }
    throw new Error(`failed ${url}`)
  }
  // MIRROR_EXPECT_REPO=<owner/repo>: wait until GitHub Pages serves the build of that
  // repo's latest main commit (the Pages workflow may still be running).
  let want = process.env.MIRROR_EXPECT_SHA || ""
  if (!want && process.env.MIRROR_EXPECT_REPO) {
    try {
      const r = await fetch(`https://api.github.com/repos/${process.env.MIRROR_EXPECT_REPO}/commits/main`, { headers: { "User-Agent": "cf-mirror" } })
      if (r.ok) want = (await r.json()).sha || ""
    } catch {}
  }
  const deadline = Date.now() + Number(process.env.MIRROR_WAIT_MIN || 45) * 60000
  let manBuf, man
  for (;;) {
    manBuf = await get("mirror-manifest.json?t=" + Date.now())
    man = JSON.parse(manBuf.toString("utf8"))
    if (!want || (man.source_sha && man.source_sha.startsWith(want))) break
    if (Date.now() > deadline) { console.error(`[mirror] GitHub Pages still serves ${man.source_sha}, expected ${want}`); process.exit(1) }
    console.log(`[mirror] waiting for GitHub Pages build ${want.slice(0, 7)} (now ${String(man.source_sha).slice(0, 7)})`)
    await new Promise((s) => setTimeout(s, 30000))
  }
  const list = Object.entries(man.files)
  let done = 0, bad = []
  const worker = async () => {
    while (list.length) {
      const [rel, [size, sha]] = list.pop()
      let buf = await get(rel)
      let h = crypto.createHash("sha256").update(buf).digest("hex")
      if (h !== sha) { buf = await get(rel + "?t=" + Date.now()); h = crypto.createHash("sha256").update(buf).digest("hex") }
      if (h !== sha || buf.length !== size) { bad.push(rel); continue }
      const out = path.join(tmp, rel)
      fs.mkdirSync(path.dirname(out), { recursive: true })
      fs.writeFileSync(out, buf)
      if (++done % 500 === 0) console.log(`[mirror] ${done} files`)
    }
  }
  await Promise.all(Array.from({ length: 16 }, worker))
  if (bad.length) { console.error(`[mirror] ${bad.length} files changed while copying (GitHub mid-deploy?):`, bad.slice(0, 10)); process.exit(1) }
  fs.writeFileSync(path.join(tmp, "mirror-manifest.json"), manBuf)
  console.log(`[mirror] ${done} files verified from ${base}`)
}
for (const d of DROP) fs.rmSync(path.join(tmp, d), { force: true })
fs.rmSync(PUB, { recursive: true, force: true })
fs.renameSync(tmp, PUB)
let n = 0
;(function c(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) e.isDirectory() ? c(path.join(d, e.name)) : n++ })(PUB)
console.log(`[mirror] ${PUB}/ = exact copy of ${SRC} (${n} files)`)
