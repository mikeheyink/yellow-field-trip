"""
One-shot image optimizer for public/images/.

Walks the tree, resizes anything wider than MAX_EDGE_PX, and re-encodes
photographs as JPEG at JPEG_QUALITY. PNGs that look like photos get
converted to JPEG (the original .png is removed and any references that
pointed at the .png are reported so they can be updated).

Pure UI/diagram PNGs (mostly transparency or near-flat colour) are left
as PNG but still get resized.

Run from the repo root:
    python scripts/optimize-images.py
"""

from __future__ import annotations

import sys
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
IMG_DIR = ROOT / "public" / "images"

MAX_EDGE_PX = 1200
JPEG_QUALITY = 78
KEEP_AS_PNG = {
    # logos / UI assets that benefit from PNG transparency
    "acumen-logo.png",
}
SKIP_DIRS = {"raw"}


def is_photographic(img: Image.Image) -> bool:
    """Heuristic: photo if it has no alpha and lots of unique colours."""
    if img.mode in ("RGBA", "LA") and img.getextrema()[-1][0] < 255:
        # has actual transparency — keep as PNG
        return False
    sample = img.convert("RGB").resize((64, 64))
    colors = sample.getcolors(maxcolors=64 * 64)
    return colors is None or len(colors) > 200


def resize_if_needed(img: Image.Image) -> Image.Image:
    w, h = img.size
    longest = max(w, h)
    if longest <= MAX_EDGE_PX:
        return img
    scale = MAX_EDGE_PX / longest
    return img.resize((round(w * scale), round(h * scale)), Image.LANCZOS)


def process(path: Path) -> tuple[int, int, str]:
    before = path.stat().st_size
    with Image.open(path) as im:
        im.load()
        resized = resize_if_needed(im)

        suffix = path.suffix.lower()
        keep_png = path.name in KEEP_AS_PNG or (
            suffix == ".png" and not is_photographic(resized)
        )

        if keep_png:
            out_path = path.with_suffix(".png")
            save_kwargs = dict(optimize=True)
            if resized.mode == "P":
                resized = resized.convert("RGBA")
            resized.save(out_path, format="PNG", **save_kwargs)
            action = "png-resave"
        else:
            out_path = path.with_suffix(".jpg")
            if resized.mode in ("RGBA", "LA", "P"):
                bg = Image.new("RGB", resized.size, (255, 255, 255))
                bg.paste(resized, mask=resized.convert("RGBA").split()[-1] if resized.mode != "P" else None)
                resized = bg
            elif resized.mode != "RGB":
                resized = resized.convert("RGB")
            resized.save(
                out_path,
                format="JPEG",
                quality=JPEG_QUALITY,
                optimize=True,
                progressive=True,
            )
            action = "jpeg-encode"
            if path.suffix.lower() != ".jpg":
                path.unlink()  # remove old PNG
                action = "png-to-jpeg"

    after = out_path.stat().st_size
    return before, after, action


def main() -> int:
    if not IMG_DIR.exists():
        print(f"no such dir: {IMG_DIR}", file=sys.stderr)
        return 1

    total_before = 0
    total_after = 0
    rows: list[tuple[str, int, int, str]] = []

    for path in sorted(IMG_DIR.rglob("*")):
        if not path.is_file():
            continue
        if any(part in SKIP_DIRS for part in path.relative_to(IMG_DIR).parts):
            continue
        if path.suffix.lower() not in {".png", ".jpg", ".jpeg"}:
            continue

        try:
            before, after, action = process(path)
        except Exception as exc:
            print(f"  ! {path.relative_to(ROOT)}: {exc}")
            continue

        total_before += before
        total_after += after
        rel = path.relative_to(ROOT).as_posix()
        if path.suffix.lower() != ".jpg" and action == "png-to-jpeg":
            rel = rel.replace(".png", ".jpg")
        rows.append((rel, before, after, action))

    rows.sort(key=lambda r: r[1] - r[2], reverse=True)
    print(f"{'file':52s} {'before':>10s} {'after':>10s}  saved  action")
    print("-" * 96)
    for rel, before, after, action in rows:
        saved = before - after
        pct = 100 * saved / before if before else 0
        print(f"{rel:52s} {before/1024:>9.0f}K {after/1024:>9.0f}K  {pct:4.0f}%  {action}")
    print("-" * 96)
    saved = total_before - total_after
    print(
        f"{'TOTAL':52s} {total_before/1024/1024:>8.1f}M  {total_after/1024/1024:>8.1f}M  "
        f"{100*saved/total_before:4.0f}%"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
