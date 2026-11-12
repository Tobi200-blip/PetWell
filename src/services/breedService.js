import { breeds } from '../data/breeds';
import { breedsBatch2 } from '../data/breedsBatch2';
import { breedsBatch3 } from '../data/breedsBatch3';
import { breedsBatch4 } from '../data/breedsBatch4';
import { breedProfiles } from '../data/breedProfiles';
import { moreBreedProfiles } from '../data/moreBreedProfiles';
import { breedProfilesBatch2 } from '../data/breedProfilesBatch2';
import { breedProfilesBatch3 } from '../data/breedProfilesBatch3';
import { breedProfilesBatch4 } from '../data/breedProfilesBatch4';
import { breedProfilesExpanded } from '../data/breedProfilesExpanded';
import { breedProfilesExpanded2 } from '../data/breedProfilesExpanded2';
import { breedProfilesExpanded3 } from '../data/breedProfilesExpanded3';

// All long-form profiles, merged. Expanded profiles come last, so they replace
// the shorter version of the same breed. Add future profile files here.
const allProfiles = {
  ...breedProfiles,
  ...moreBreedProfiles,
  ...breedProfilesBatch2,
  ...breedProfilesBatch3,
  ...breedProfilesBatch4,
  ...breedProfilesExpanded,
  ...breedProfilesExpanded2,
  ...breedProfilesExpanded3,
};

// All quick-facts entries, merged. Add future batches here.
const sourceBreeds = [...breeds, ...breedsBatch2, ...breedsBatch3, ...breedsBatch4];

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