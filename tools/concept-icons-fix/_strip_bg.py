#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Strip the opaque near-white backdrop <path> from each concept icon SVG.

A Recraft icon = saturated glyph drawn on a light, neutral, full-bleed rounded
square. We remove that single backdrop path so the icon has an alpha background.

Backdrop heuristic (per path): fill is LIGHT (avg channel >= 150) AND NEUTRAL
(max-min channel <= 45) AND FULL-BLEED (coords reach near both edges of the
2048 viewBox: min(coord) < 220 and max(coord) > 1830). Of the paths matching,
remove the lightest one. Idempotent: re-running finds nothing to strip.
"""
import os, re, glob, shutil

HERE = os.path.dirname(os.path.abspath(__file__))
BACKUP = os.path.join(HERE, "_bak_orig")
PATH_RE = re.compile(r'<path\b[^>]*?/>', re.S)
FILL_RE = re.compile(r'fill="rgb\((\d+),\s*(\d+),\s*(\d+)\)"')
NUM_RE = re.compile(r'-?\d+\.?\d*')

def is_backdrop(tag):
    m = FILL_RE.search(tag)
    if not m:
        return None
    r, g, b = (int(x) for x in m.groups())
    avg = (r + g + b) / 3
    rng = max(r, g, b) - min(r, g, b)
    if avg < 150 or rng > 45:
        return None
    dm = re.search(r'\bd="([^"]*)"', tag)
    if not dm:
        return None
    nums = [float(x) for x in NUM_RE.findall(dm.group(1))]
    if not nums:
        return None
    if min(nums) < 220 and max(nums) > 1830:
        return avg  # candidate; lighter = more backdrop-like
    return None

def process(fp):
    src = open(fp, encoding="utf-8").read()
    tags = PATH_RE.findall(src)
    cands = [(is_backdrop(t), t) for t in tags]
    cands = [(a, t) for a, t in cands if a is not None]
    if not cands:
        return "no-backdrop"
    # remove the lightest full-bleed neutral path
    cands.sort(key=lambda x: -x[0])
    _, victim = cands[0]
    out = src.replace(victim, "", 1)
    open(fp, "w", encoding="utf-8").write(out)
    return "stripped"

def main():
    os.makedirs(BACKUP, exist_ok=True)
    for fp in sorted(glob.glob(os.path.join(HERE, "*.svg"))):
        name = os.path.basename(fp)
        bak = os.path.join(BACKUP, name)
        if not os.path.exists(bak):
            shutil.copy2(fp, bak)  # one-time pristine backup
        print(f"{name:38s} {process(fp)}")

if __name__ == "__main__":
    main()
