import { breeds } from '../data/breeds';
import { breedProfiles } from '../data/breedProfiles';
import { moreBreedProfiles } from '../data/moreBreedProfiles';

// All long-form profiles, merged. Add future profile files here.
const allProfiles = { ...breedProfiles, ...moreBreedProfiles };

// Fallback groups (American Kennel Club system) for the breeds already in breeds.js.
// For new breeds, add a `group` field directly in the breed's entry in breeds.js.
// An entry's own `group` always wins over this map.
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

const allBreeds = breeds
  .map((b) => ({ ...b, group: b.group || breedGroupMap[b.slug] || "Other" }))
  .sort((a, b) => a.name.localeCompare(b.name));

export function getBreeds() {
  return allBreeds;
}

export function getBreedGroups() {
  return [...new Set(allBreeds.map((b) => b.group))].sort();
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