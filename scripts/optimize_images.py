"""
Shrink every image in src/assets in one pass.

- Keeps the same file names, so no imports need to change
- Resizes only images wider than the limit for their folder
- Replaces a file only if the new version is smaller
- Backs up src/assets to assets_backup/ the first time it runs

Usage (from the project root):
    python scripts/optimize_images.py --dry-run   # preview only, changes nothing
    python scripts/optimize_images.py             # do it
"""
import io
import shutil
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "src" / "assets"
BACKUP = ROOT / "assets_backup"

# Maximum width in pixels, by top-level folder inside src/assets
MAX_WIDTH = {"breeds": 800, "categories": 800, "articles": 1400}
DEFAULT_WIDTH = 1600  # heroes and anything else

JPEG_QUALITY = 78
WEBP_QUALITY = 78
SKIP_BELOW_KB = 120  # leave small files that are already within the width limit alone
EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}


def max_width_for(path: Path) -> int:
    parts = path.relative_to(ASSETS).parts
    folder = parts[0] if len(parts) > 1 else ""
    return MAX_WIDTH.get(folder, DEFAULT_WIDTH)


def optimize(path: Path, dry_run: bool):
    before = path.stat().st_size
    limit = max_width_for(path)

    with Image.open(path) as opened:
        im = ImageOps.exif_transpose(opened)
        width, height = im.size
        needs_resize = width > limit

        if before < SKIP_BELOW_KB * 1024 and not needs_resize:
            return before, before, "skipped (already small)"

        if needs_resize:
            im = im.resize((limit, round(height * limit / width)), Image.Resampling.LANCZOS)

        buffer = io.BytesIO()
        ext = path.suffix.lower()
        if ext in (".jpg", ".jpeg"):
            im.convert("RGB").save(
                buffer, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True
            )
        elif ext == ".png":
            im.save(buffer, "PNG", optimize=True)
        else:
            im.save(buffer, "WEBP", quality=WEBP_QUALITY, method=6)

    after = buffer.tell()
    if after >= before:
        return before, before, "kept (new version was not smaller)"

    if not dry_run:
        path.write_bytes(buffer.getvalue())
    return before, after, "resized and compressed" if needs_resize else "compressed"


def kb(size: int) -> str:
    return f"{size / 1024:,.0f} KB"


def main():
    dry_run = "--dry-run" in sys.argv

    if not ASSETS.exists():
        sys.exit(f"Could not find {ASSETS}. Run this from your project folder.")

    if not dry_run and not BACKUP.exists():
        shutil.copytree(ASSETS, BACKUP)
        print(f"Backed up originals to {BACKUP}\n")

    files = sorted(p for p in ASSETS.rglob("*") if p.suffix.lower() in EXTENSIONS)
    if not files:
        sys.exit("No images found.")

    total_before = total_after = 0
    big_pngs = []

    for path in files:
        rel = path.relative_to(ASSETS)
        try:
            before, after, note = optimize(path, dry_run)
        except Exception as error:  # keep going if one file is broken
            print(f"  ERROR  {rel}: {error}")
            continue

        total_before += before
        total_after += after
        saved = 100 - round(after / before * 100) if before else 0
        print(f"  {rel}: {kb(before)} -> {kb(after)} ({saved}% smaller) - {note}")

        if path.suffix.lower() == ".png" and after > 300 * 1024:
            big_pngs.append(rel)

    label = "Would save" if dry_run else "Saved"
    print(f"\n{len(files)} images. {label} {kb(total_before - total_after)} "
          f"({kb(total_before)} -> {kb(total_after)}).")

    if big_pngs:
        print("\nThese PNG photos are still large. PNG is a poor format for photos, so")
        print("convert them to JPG with any image tool, then update the import:")
        for rel in big_pngs:
            print(f"  - {rel}")


if __name__ == "__main__":
    main()