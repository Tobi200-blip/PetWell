import { breeds } from '../data/breeds';
import { breedsBatch2 } from '../data/breedsBatch2';
import { breedProfiles } from '../data/breedProfiles';
import { moreBreedProfiles } from '../data/moreBreedProfiles';
import { breedProfilesBatch2 } from '../data/breedProfilesBatch2';

// All long-form profiles, merged. Add future profile files here.
const allProfiles = {
  ...breedProfiles,
  ...moreBreedProfiles,
  ...breedProfilesBatch2,
};

// All quick-facts entries, merged. Add future batches here.
const sourceBreeds = [...breeds, ...breedsBatch2];

// Fallback groups (American Kennel Club system) for the original 20 breeds.
// Newer entries carry their own `group` field, which always wins over this map.
const breedGroupMap = {
  "golden-retriever": "Sporting",
  "labrador-retriever": "Sporting",
  "german-shepherd": "Herding",
  "border-collie": "Herding",
  "australian-shepherd": "Herding",
  "french-bulldog": "Non-Sporting",
  "poodle": "Non-Sporting",
  "beagle": "Hound",
  "dachshund": "Hound",
  "yorkshire-terrier": "Toy",
  "shih-tzu": "Toy",
  "chihuahua": "Toy",
  "pomeranian": "Toy",
  "cavalier-king-charles-spaniel": "Toy",
  "boxer": "Working",
  "siberian-husky": "Working",
  "dobermann": "Working",
  "great-dane": "Working",
  "rottweiler": "Working",
  "bernese-mountain-dog": "Working",
};

// Drop accidental duplicates (first entry for a slug wins)
const seen = new Set();
const uniqueBreeds = sourceBreeds.filter(
  (b) => !seen.has(b.slug) && seen.add(b.slug)
);

const allBreeds = uniqueBreeds
  .map((b) => ({ ...b, group: b.group || breedGroupMap[b.slug] || "Other" }))
  .sort((a, b) => a.name.localeCompare(b.name));

export function getBreeds() {
  return allBreeds;
}

export function getBreedGroups() {
  return [...new Set(allBreeds.map((b) => b.group))].sort();
}

export function getBreedCounts() {
  return {
    total: allBreeds.length,
    profiled: allBreeds.filter((b) => allProfiles[b.slug]).length,
  };
}

export function getBreedBySlug(slug) {
  const base = allBreeds.find((b) => b.slug === slug);
  if (!base) return null;
  return { ...base, profile: allProfiles[slug] || null };
}

export function getSimilarBreeds(slug, limit = 3) {
  const current = allBreeds.find((b) => b.slug === slug);
  if (!current) return [];
  return allBreeds
    .filter((b) => b.slug !== slug && b.size === current.size)
    .slice(0, limit);
}