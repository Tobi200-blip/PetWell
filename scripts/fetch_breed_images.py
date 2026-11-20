#!/usr/bin/env python3
"""
Download breed photos from Pexels (free licence) with the exact file names AllPetsLoft needs.

SETUP (one time, 2 minutes):
  1. Create a free account at https://www.pexels.com/api/ and copy your API key.
  2. Install Python 3 (no extra packages needed).

RUN (from the folder where you saved this file):
  Windows (PowerShell):  $env:PEXELS_API_KEY="your_key"; python fetch_breed_images.py
  Mac/Linux:             PEXELS_API_KEY=your_key python fetch_breed_images.py

Optional:
  python fetch_breed_images.py --only pug,akita     (only these slugs)
  python fetch_breed_images.py --out src/assets/breeds

Files are saved to ./breed-images-download (or --out). Existing files are skipped,
so you can re-run safely. A credits.csv is written with photographer and photo link.

IMPORTANT: the script picks the top search result for each slot. ALWAYS look at the
photos before using them. Wrong breed, mixed breed, or poor quality? Swap that file by
hand (the credits.csv gives the Pexels page for each one). Rate limit: Pexels allows
200 requests/hour; the script pauses between requests and stops cleanly if limited.
"""
import argparse, csv, json, os, sys, time, urllib.parse, urllib.request, urllib.error

# slug -> search name used in Pexels queries
BREEDS = {
    "australian-shepherd": "Australian Shepherd",
    "great-dane": "Great Dane",
    "dobermann": "Doberman Pinscher",
    "shih-tzu": "Shih Tzu",
    "yorkshire-terrier": "Yorkshire Terrier",
    "bernese-mountain-dog": "Bernese Mountain Dog",
    "cavalier-king-charles-spaniel": "Cavalier King Charles Spaniel",
    "pug": "Pug",
    "chihuahua": "Chihuahua",
    "saint-bernard": "Saint Bernard",
    "newfoundland": "Newfoundland dog",
    "pomeranian": "Pomeranian",
    "maltese": "Maltese dog",
    "belgian-malinois": "Belgian Malinois",
    "alaskan-malamute": "Alaskan Malamute",
    "akita": "Akita",
    "samoyed": "Samoyed",
    "shiba-inu": "Shiba Inu",
    "pembroke-welsh-corgi": "Pembroke Welsh Corgi",
    "cocker-spaniel": "Cocker Spaniel",
    "basset-hound": "Basset Hound",
    "bichon-frise": "Bichon Frise",
    "miniature-schnauzer": "Miniature Schnauzer",
    "dalmatian": "Dalmatian",
    "vizsla": "Vizsla",
    "weimaraner": "Weimaraner",
    "rhodesian-ridgeback": "Rhodesian Ridgeback",
    "boston-terrier": "Boston Terrier",
    "english-bulldog": "English Bulldog",
    "whippet": "Whippet",
    "greyhound": "Greyhound",
    "cane-corso": "Cane Corso",
    "english-mastiff": "English Mastiff",
    "boerboel": "Boerboel",
    "staffordshire-bull-terrier": "Staffordshire Bull Terrier",
    "basenji": "Basenji",
    "pekingese": "Pekingese",
    "jack-russell-terrier": "Jack Russell Terrier",
    "west-highland-white-terrier": "West Highland White Terrier",
    "golden-retriever": "Golden Retriever",
    "labrador-retriever": "Labrador Retriever",
}

# suffix -> (query template, result index to take). Card photo and -1 use different results.
SLOTS = {
    "":   ("{b} dog portrait", 1),
    "-1": ("{b} dog portrait", 0),
    "-2": ("{b} dog running playing outdoors", 0),
    "-3": ("{b} dog grooming brushing coat", 0),
}
FALLBACK_3 = "dog grooming brushing"  # used if the breed has no grooming photo

API = "https://api.pexels.com/v1/search"


def search(key, query, per_page=15):
    url = API + "?" + urllib.parse.urlencode(
        {"query": query, "per_page": per_page, "orientation": "landscape"})
    req = urllib.request.Request(url, headers={"Authorization": key, "User-Agent": "allpetsloft-fetch/1.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r).get("photos", [])


def download(url, path):
    req = urllib.request.Request(url, headers={"User-Agent": "allpetsloft-fetch/1.0"})
    with urllib.request.urlopen(req, timeout=60) as r, open(path, "wb") as f:
        f.write(r.read())


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default="breed-images-download")
    ap.add_argument("--only", default="")
    args = ap.parse_args()

    key = os.environ.get("PEXELS_API_KEY", "").strip()
    if not key:
        sys.exit("Set PEXELS_API_KEY first (see the top of this file).")

    only = {s.strip() for s in args.only.split(",") if s.strip()}
    os.makedirs(args.out, exist_ok=True)
    credits_path = os.path.join(args.out, "credits.csv")
    new_file = not os.path.exists(credits_path)
    used = set()  # avoid using the same photo twice across slots of one breed

    with open(credits_path, "a", newline="", encoding="utf-8") as cf:
        w = csv.writer(cf)
        if new_file:
            w.writerow(["file", "query", "photographer", "pexels_page"])
        for slug, name in BREEDS.items():
            if only and slug not in only:
                continue
            used.clear()
            for suffix, (tmpl, idx) in SLOTS.items():
                fname = f"{slug}{suffix}.jpg"
                path = os.path.join(args.out, fname)
                if os.path.exists(path):
                    print("skip   ", fname)
                    continue
                queries = [tmpl.format(b=name)]
                if suffix == "-3":
                    queries.append(FALLBACK_3)
                done = False
                for q in queries:
                    try:
                        photos = search(key, q)
                    except urllib.error.HTTPError as e:
                        if e.code == 429:
                            sys.exit("Rate limit reached. Wait an hour and re-run; finished files are kept.")
                        print("error  ", fname, e)
                        photos = []
                    time.sleep(1.0)
                    photos = [p for p in photos if p["id"] not in used]
                    if not photos:
                        continue
                    pick = photos[min(idx, len(photos) - 1)]
                    used.add(pick["id"])
                    download(pick["src"]["large2x"], path)
                    w.writerow([fname, q, pick.get("photographer", ""), pick.get("url", "")])
                    cf.flush()
                    print("saved  ", fname, "<-", pick.get("url", ""))
                    done = True
                    break
                if not done:
                    print("MISSING", fname, "(find one by hand)")
    print("\nDone. Review every photo before using it. See", credits_path)


if __name__ == "__main__":
    main()
