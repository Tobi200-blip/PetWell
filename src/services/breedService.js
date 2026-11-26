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
import { breedProfilesExpanded4 } from '../data/breedProfilesExpanded4';
import { breedProfilesExpanded5 } from '../data/breedProfilesExpanded5';
import { breedProfilesExpanded6 } from '../data/breedProfilesExpanded6';
import { breedProfilesExpanded7 } from '../data/breedProfilesExpanded7';
import { breedProfilesExpanded8 } from '../data/breedProfilesExpanded8';
import { breedProfilesExpanded9 } from '../data/breedProfilesExpanded9';
import { breedProfilesExpanded10 } from '../data/breedProfilesExpanded10';
import { breedProfilesExpanded11 } from '../data/breedProfilesExpanded11';
import { breedProfilesExpanded12 } from '../data/breedProfilesExpanded12';
import { breedProfilesExpanded13 } from '../data/breedProfilesExpanded13';
import { breedProfilesExpanded14 } from '../data/breedProfilesExpanded14';
import { breedProfilesExpanded15 } from '../data/breedProfilesExpanded15';
import { breedProfilesExpanded16 } from '../data/breedProfilesExpanded16';
import { breedProfilesExpanded17 } from '../data/breedProfilesExpanded17';
import { breedProfilesExpanded18 } from '../data/breedProfilesExpanded18';
import { breedProfilesExpanded19 } from '../data/breedProfilesExpanded19';
import { breedProfilesExpanded20 } from '../data/breedProfilesExpanded20';
import { breedProfilesExpanded21 } from '../data/breedProfilesExpanded21';
import { breedProfilesExpanded22 } from '../data/breedProfilesExpanded22';
import { breedProfilesExpanded23 } from '../data/breedProfilesExpanded23';
import { breedProfilesExpanded24 } from '../data/breedProfilesExpanded24';
import { breedProfilesExpanded25 } from '../data/breedProfilesExpanded25';
import { breedProfilesExpanded26 } from '../data/breedProfilesExpanded26';
import { breedProfilesExpanded27 } from '../data/breedProfilesExpanded27';

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
  ...breedProfilesExpanded4,
  ...breedProfilesExpanded5,
  ...breedProfilesExpanded6,
  ...breedProfilesExpanded7,
  ...breedProfilesExpanded8,
  ...breedProfilesExpanded9,
  ...breedProfilesExpanded10,
  ...breedProfilesExpanded11,
  ...breedProfilesExpanded12,
  ...breedProfilesExpanded13,
  ...breedProfilesExpanded14,
  ...breedProfilesExpanded15,
  ...breedProfilesExpanded16,
  ...breedProfilesExpanded17,
  ...breedProfilesExpanded18,
  ...breedProfilesExpanded19,
  ...breedProfilesExpanded20,
  ...breedProfilesExpanded21,
  ...breedProfilesExpanded22,
  ...breedProfilesExpanded23,
  ...breedProfilesExpanded24,
  ...breedProfilesExpanded25,
  ...breedProfilesExpanded26,
  ...breedProfilesExpanded27,
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
