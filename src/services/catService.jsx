import { cats } from '../data/cats';

// Long-form cat profiles, merged. Add each new catProfilesN.js file here:
//   import { catProfiles1 } from '../data/catProfiles1';
// and spread it into allProfiles below.
const allProfiles = {};

// Drop accidental duplicates (first entry for a slug wins)
const seen = new Set();
const uniqueCats = cats.filter((c) => !seen.has(c.slug) && seen.add(c.slug));

const allCats = uniqueCats
  .map((c) => ({ ...c, group: c.group || 'Other' }))
  .sort((a, b) => a.name.localeCompare(b.name));

export function getCats() {
  return allCats;
}

export function getCatGroups() {
  return [...new Set(allCats.map((c) => c.group))].sort();
}

export function getCatCounts() {
  return {
    total: allCats.length,
    profiled: allCats.filter((c) => allProfiles[c.slug]).length,
  };
}

export function getCatBySlug(slug) {
  const base = allCats.find((c) => c.slug === slug);
  if (!base) return null;
  return { ...base, profile: allProfiles[slug] || null };
}

export function getSimilarCats(slug, limit = 3) {
  const current = allCats.find((c) => c.slug === slug);
  if (!current) return [];
  return allCats
    .filter((c) => c.slug !== slug && c.size === current.size)
    .slice(0, limit);
}
