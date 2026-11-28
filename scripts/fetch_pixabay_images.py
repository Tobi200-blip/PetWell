#!/usr/bin/env python3
"""
Download photos from Pixabay (free licence) with the exact file names AllPetsLoft needs.

SETUP (one time):
  1. Log in at https://pixabay.com and open https://pixabay.com/api/docs/ . Your personal API key is shown there.
  2. Install Python 3 (no extra packages needed).
  3. NEVER paste your key into a chat or commit it to GitHub.

RUN (from the folder where you saved this file):
  Windows (PowerShell):  $env:PIXABAY_API_KEY="your_key"; python fetch_pixabay_images.py --only pug,akita
  Mac/Linux/Termux:      PIXABAY_API_KEY=your_key python fetch_pixabay_images.py --only pug,akita

Options:
  --only pug,akita      only these breed slugs (RECOMMENDED: do 5 to 10 breeds at a time)
  --articles            download the Learning Hub article photos instead of breeds
  --out FOLDER          where to save (default: pixabay-download)
  --wide --batch 1      re-download WIDE card photos for the breeds whose current photo is tall
                        (portrait). 32 breeds in 4 batches of 8: --batch 1, 2, 3, 4. Saves only
                        <breed>.jpg into the folder pixabay-wide. Wide photos only, dog tag required.
  --pick 3              with --wide: use the 3rd good result instead (try this after deleting a
                        photo you did not like, then run the same batch again)

Pixabay rules this script follows:
  * Max 100 requests per 60 seconds: it waits between requests and honours the rate-limit headers.
  * Responses are cached for 24 hours in the .cache folder, so repeats do not call the API again.
  * Images are downloaded to your own folder (save them in your project; never hotlink Pixabay URLs).
  * "Systematic mass downloads are not allowed": so run in small batches, not all 50 breeds at once.
  * Pixabay asks you to show where images come from: add a credits note on the site (see credits.csv).

IMPORTANT: it takes the best matching result whose tags mention the breed. ALWAYS look at every
photo before using it (wrong breed, mixed breed, watermark, poor quality). Replace by hand if needed.
Files that already exist are skipped.
"""
import argparse, csv, hashlib, json, os, sys, time, urllib.parse, urllib.request, urllib.error

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
    "german-shepherd": "German Shepherd",
    "french-bulldog": "French Bulldog",
    "poodle": "Poodle",
    "beagle": "Beagle",
    "siberian-husky": "Siberian Husky",
    "border-collie": "Border Collie",
    "rottweiler": "Rottweiler",
    "dachshund": "Dachshund",
    "boxer": "Boxer",
}

# Learning Hub article photos: file name -> search phrase
ARTICLES = {
    "feeding-hero": "dog eating food bowl",
    "feeding-puppy": "puppy eating food bowl",
    "feeding-body-condition": "healthy dog standing side",
    "insurance-hero": "person hugging dog",
    "insurance-vet": "veterinarian examining dog",
    "insurance-compare": "person laptop documents",
    "vaccination-hero": "puppy veterinarian",
    "vaccination-vet": "vet holding puppy",
    "vaccination-social": "puppy meeting person",
    "grooming-hero": "dog brushing grooming",
    "grooming-brushing": "brushing dog coat",
    "grooming-bath": "dog bath",
    "training-hero": "dog training sit treat",
    "foods-hero": "dog kitchen food",
    "puppyproofing-hero": "puppy living room",
    "dental-hero": "dog teeth smile",
    "housetraining-hero": "puppy sitting grass",
    "training-sit": "dog sit treat training",
    "training-puppy": "puppy training treat",
    "foods-kitchen": "dog sitting kitchen",
    "foods-safe": "dog eating carrot",
    "puppyproofing-chew": "puppy chewing toy",
    "puppyproofing-garden": "puppy garden",
    "dental-brushing": "brushing dog teeth",
    "dental-chews": "dog chew toy",
    "housetraining-outside": "puppy outdoors grass",
    "housetraining-crate": "puppy crate",
    "separation-hero": "dog looking window",
    "separation-enrichment": "dog chew toy",
    "separation-door": "dog waiting door",
}

CATS = {
    "persian": "Persian",
    "maine-coon": "Maine Coon",
    "siamese": "Siamese",
    "ragdoll": "Ragdoll",
    "british-shorthair": "British Shorthair",
    "bengal": "Bengal",
    "sphynx": "Sphynx",
    "scottish-fold": "Scottish Fold",
    "abyssinian": "Abyssinian",
    "russian-blue": "Russian Blue",
    "norwegian-forest-cat": "Norwegian Forest Cat",
    "birman": "Birman",
    "burmese": "Burmese",
    "american-shorthair": "American Shorthair",
    "devon-rex": "Devon Rex",
    "cornish-rex": "Cornish Rex",
    "oriental-shorthair": "Oriental Shorthair",
    "turkish-angora": "Turkish Angora",
    "exotic-shorthair": "Exotic Shorthair",
    "siberian": "Siberian",
}

CAT_SLOTS = {
    "":   ("{b} cat", 1),
    "-1": ("{b} cat", 0),
    "-2": ("{b} cat playing", 0),
    "-3": ("{b} cat grooming", 0),
}
FALLBACK_CAT_3 = "cat grooming brushing"

# suffix -> (query template, index among matching results). Card photo and -1 use different results.
SLOTS = {
    "":   ("{b} dog", 1),
    "-1": ("{b} dog", 0),
    "-2": ("{b} dog running", 0),
    "-3": ("{b} dog grooming", 0),
}
FALLBACK_3 = "dog grooming brushing"

# Breeds whose current card photo is tall (portrait) and shows cropped on the site.
TALL = ["australian-shepherd", "beagle", "belgian-malinois", "boston-terrier", "cane-corso", "cavalier-king-charles-spaniel", "chihuahua", "cocker-spaniel", "dachshund", "dalmatian", "dobermann", "english-bulldog", "french-bulldog", "german-shepherd", "golden-retriever", "great-dane", "greyhound", "labrador-retriever", "miniature-schnauzer", "pekingese", "pembroke-welsh-corgi", "pomeranian", "pug", "rhodesian-ridgeback", "rottweiler", "saint-bernard", "samoyed", "shiba-inu", "shih-tzu", "staffordshire-bull-terrier", "vizsla", "weimaraner"]

WIDE_MUST = {"dog", "dogs", "puppy", "puppies"}


def is_wide(h):
    return h.get("imageWidth", 0) / max(1, h.get("imageHeight", 1)) >= 1.3


API = "https://pixabay.com/api/"
CACHE = ".cache"
UA = {"User-Agent": "allpetsloft-fetch/1.0"}


def api_search(key, query):
    os.makedirs(CACHE, exist_ok=True)
    cpath = os.path.join(CACHE, hashlib.sha1(query.encode()).hexdigest() + ".json")
    if os.path.exists(cpath) and time.time() - os.path.getmtime(cpath) < 24 * 3600:
        try:
            return json.load(open(cpath, encoding="utf-8"))
        except ValueError:
            os.remove(cpath)
    params = {"key": key, "q": query[:100], "image_type": "photo", "orientation": "horizontal",
              "safesearch": "true", "per_page": 30}
    url = API + "?" + urllib.parse.urlencode(params)
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=30) as r:
                remaining = r.headers.get("X-RateLimit-Remaining")
                reset = r.headers.get("X-RateLimit-Reset")
                data = json.load(r)
            json.dump(data, open(cpath, "w", encoding="utf-8"))
            if remaining is not None and int(remaining) <= 1:
                time.sleep(int(reset or 60) + 1)
            else:
                time.sleep(1.0)
            return data
        except urllib.error.HTTPError as e:
            if e.code == 429:
                wait = int(e.headers.get("X-RateLimit-Reset", "60")) + 1
                print("rate limited, waiting", wait, "seconds")
                time.sleep(wait)
                continue
            if e.code in (400, 401, 403):
                sys.exit(f"Pixabay refused the request ({e.code}). Check that your API key is correct.")
            print("   search error", e.code, "for:", query)
            time.sleep(3)
        except (urllib.error.URLError, OSError, TimeoutError, ValueError) as e:
            print("   search problem:", e)
            time.sleep(3)
    return {"hits": []}


CAT_MUST = {"cat", "cats", "kitten", "kittens"}


def pick(hits, words, idx, must=()):
    """Choose a hit whose tags mention the breed (if words given), skipping used ids.
    `must`: if given, the hit must also carry one of these exact tags (used for cats,
    so a search for "Cornish Rex" cannot return a Cornish pasty)."""
    ok = []
    for h in hits:
        tags = h.get("tags", "").lower()
        taglist = {t.strip() for t in tags.split(",")}
        if must and not (taglist & set(must)):
            continue
        if words and not any(w in tags for w in words):
            continue
        ok.append(h)
    return ok[min(idx, len(ok) - 1)] if ok else None


def download(url, path):
    """Download with retries. Returns True on success, False if it keeps failing."""
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=60) as r:
                data = r.read()
            if len(data) < 2000:
                raise OSError("file too small, probably not an image")
            with open(path, "wb") as f:
                f.write(data)
            return True
        except urllib.error.HTTPError as e:
            if e.code == 429:
                time.sleep(30)
            else:
                time.sleep(3)
            err = f"HTTP {e.code}"
        except (urllib.error.URLError, OSError, TimeoutError) as e:
            time.sleep(3)
            err = str(e)
        if os.path.exists(path):
            os.remove(path)
    print("   download failed:", err)
    return False


def breed_words(name):
    skip = {"dog", "terrier", "hound", "the", "and", "of", "king", "charles"}
    ws = [w for w in name.lower().replace("-", " ").split() if len(w) >= 4 and w not in skip]
    return ws or [name.lower().split()[0]]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default="pixabay-download")
    ap.add_argument("--only", default="")
    ap.add_argument("--articles", action="store_true")
    ap.add_argument("--cats", action="store_true", help="download cat breed photos (use --out pixabay-cats)")
    ap.add_argument("--wide", action="store_true", help="re-download wide card photos for the tall-photo breeds")
    ap.add_argument("--batch", type=int, default=0, help="with --wide: 1 to 4 (8 breeds each)")
    ap.add_argument("--pick", type=int, default=2, help="with --wide: which good result to use (default 2)")
    args = ap.parse_args()

    key = os.environ.get("PIXABAY_API_KEY", "").strip()
    if not key:
        sys.exit("Set PIXABAY_API_KEY first (see the top of this file).")
    if args.wide and args.out == "pixabay-download":
        args.out = "pixabay-wide"
    os.makedirs(args.out, exist_ok=True)
    cp = os.path.join(args.out, "credits.csv")
    new = not os.path.exists(cp)
    only = {s.strip() for s in args.only.split(",") if s.strip()}

    jobs = []  # (file name, query, words, index)
    if args.wide:
        slugs = TALL
        if args.batch:
            if not 1 <= args.batch <= 4:
                sys.exit("--batch must be 1, 2, 3 or 4")
            slugs = TALL[(args.batch - 1) * 8: args.batch * 8]
        for slug in slugs:
            if only and slug not in only:
                continue
            name = BREEDS.get(slug, slug.replace("-", " ").title())
            jobs.append((f"{slug}.jpg", f"{name} dog", breed_words(name), max(0, args.pick - 1)))
        if not args.batch and not only:
            print("Tip: add --batch 1 (then 2, 3, 4) so you stay within Pixabay's rules.")
    elif args.articles:
        for fname, q in ARTICLES.items():
            if only and fname not in only:
                continue
            jobs.append((fname + ".jpg", q, [], 0))
    else:
        source, slots = (CATS, CAT_SLOTS) if args.cats else (BREEDS, SLOTS)
        for slug, name in source.items():
            if only and slug not in only:
                continue
            words = breed_words(name)
            for suffix, (tmpl, idx) in slots.items():
                jobs.append((f"{slug}{suffix}.jpg", tmpl.format(b=name), words if suffix != "-3" else [], idx))
        if not only:
            print("Tip: run in small batches with --only so you stay within Pixabay's rules.")

    used = set()
    with open(cp, "a", newline="", encoding="utf-8") as cf:
        w = csv.writer(cf)
        if new:
            w.writerow(["file", "query", "photographer", "pixabay_page"])
        for fname, q, words, idx in jobs:
            path = os.path.join(args.out, fname)
            if os.path.exists(path):
                print("skip   ", fname)
                continue
            hits = [h for h in api_search(key, q).get("hits", []) if h["id"] not in used]
            if args.wide:
                hits = [h for h in hits if is_wide(h)]
            must = CAT_MUST if args.cats else (WIDE_MUST if args.wide else ())
            h = pick(hits, words, idx, must)
            if h is None and fname.endswith("-3.jpg"):
                hits = [x for x in api_search(key, FALLBACK_CAT_3 if args.cats else FALLBACK_3).get("hits", []) if x["id"] not in used]
                h = pick(hits, [], 0, must)
            if h is None:
                print("MISSING", fname, "(find one by hand)")
                continue
            img_url = h.get("largeImageURL") or h.get("webformatURL")
            if not img_url:
                print("FAILED ", fname, "(no image link in result, find one by hand)")
                continue
            if not download(img_url, path):
                print("FAILED ", fname, "(run the script again later to retry)")
                continue
            used.add(h["id"])
            w.writerow([fname, q, h.get("user", ""), h.get("pageURL", "")])
            cf.flush()
            print("saved  ", fname, "<-", h.get("pageURL", ""))
    print("\nDone. Check every photo by eye before using it. Credits:", cp)


if __name__ == "__main__":
    main()
