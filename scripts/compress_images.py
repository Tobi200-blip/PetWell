#!/usr/bin/env python3
"""
Shrink AllPetsLoft photos so pages load faster. Safe to re-run.

RUN from the PetWell folder (the one that contains src/ and scripts/):
  pip install pillow            (one time; if it fails, tell me the error)
  python3 scripts/compress_images.py --dry-run     (shows savings, changes nothing)
  python3 scripts/compress_images.py               (does it)

What it does, for every .jpg/.jpeg in src/assets/breeds, src/assets/articles and src/assets/cats:
  - scales down so the longest side is at most 1000 px (never enlarges)
  - re-saves as an optimised progressive JPEG at quality 80
  - removes hidden camera/location metadata (EXIF) and fixes rotated photos
  - keeps the same file name, so no code changes are needed
  - only replaces a file if the new one is actually smaller
  - saves the originals once into scripts/originals-backup/ first
  - remembers what it has done (compressed-manifest.json in each folder),
    so running it again never re-compresses a photo and loses quality

Options:
  --max 1000       longest side in pixels (card photos look fine at 800-1000)
  --quality 80     JPEG quality (75-85 is the sweet spot)
  --dirs a,b       folders to process (default: the two folders above)
  --no-backup      skip the backup copy
  --dry-run        only report
"""
import argparse, json, os, shutil, sys

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("Pillow is not installed. Run:  pip install pillow")

DEFAULT_DIRS = ["src/assets/breeds", "src/assets/articles", "src/assets/cats"]
MANIFEST = "compressed-manifest.json"
BACKUP = "scripts/originals-backup"


def human(n):
    return f"{n / 1024:.0f} KB" if n < 1024 * 1024 else f"{n / 1024 / 1024:.1f} MB"


def process(folder, args, totals):
    if not os.path.isdir(folder):
        print("skip folder (not found):", folder)
        return
    mpath = os.path.join(folder, MANIFEST)
    try:
        done = json.load(open(mpath))
    except Exception:
        done = {}
    for name in sorted(os.listdir(folder)):
        if not name.lower().endswith((".jpg", ".jpeg")):
            continue
        path = os.path.join(folder, name)
        before = os.path.getsize(path)
        if name in done and done[name] == before:
            totals["skipped"] += 1
            continue
        try:
            im = Image.open(path)
            im = ImageOps.exif_transpose(im)
            if im.mode != "RGB":
                im = im.convert("RGB")
            w, h = im.size
            scale = min(1.0, args.max / max(w, h))
            if scale < 1.0:
                im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
            tmp = path + ".tmp"
            im.save(tmp, "JPEG", quality=args.quality, optimize=True, progressive=True)
            after = os.path.getsize(tmp)
        except Exception as e:
            print("FAILED ", path, e)
            totals["failed"] += 1
            continue
        if after >= before:
            os.remove(tmp)
            done[name] = before  # already small enough, do not try again
            totals["kept"] += 1
            continue
        totals["before"] += before
        totals["after"] += after
        totals["changed"] += 1
        print(f"{'would shrink' if args.dry_run else 'shrunk'} {path}: {human(before)} -> {human(after)}")
        if args.dry_run:
            os.remove(tmp)
            continue
        if not args.no_backup:
            dest = os.path.join(BACKUP, folder)
            os.makedirs(dest, exist_ok=True)
            bpath = os.path.join(dest, name)
            if not os.path.exists(bpath):
                shutil.copy2(path, bpath)
        os.replace(tmp, path)
        done[name] = after
    if not args.dry_run:
        json.dump(done, open(mpath, "w"), indent=0)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--max", type=int, default=1000)
    ap.add_argument("--quality", type=int, default=80)
    ap.add_argument("--dirs", default=",".join(DEFAULT_DIRS))
    ap.add_argument("--no-backup", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()
    if not os.path.isdir("src"):
        sys.exit("Run this from the PetWell folder (the one that contains src/).")
    totals = dict(changed=0, skipped=0, kept=0, failed=0, before=0, after=0)
    for d in [x.strip() for x in args.dirs.split(",") if x.strip()]:
        process(d, args, totals)
    print()
    print(f"{totals['changed']} photo(s) {'would be ' if args.dry_run else ''}shrunk, "
          f"{totals['skipped']} already done, {totals['kept']} already small, {totals['failed']} failed.")
    if totals["changed"]:
        saved = totals["before"] - totals["after"]
        print(f"Total: {human(totals['before'])} -> {human(totals['after'])} (saves {human(saved)}, "
              f"{saved * 100 // max(1, totals['before'])}%).")


if __name__ == "__main__":
    main()
