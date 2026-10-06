// Automatically imports every image in src/assets/breeds/
// Keyed by filename, e.g. "golden-retriever.jpg" -> imported URL
const imageModules = import.meta.glob('../assets/breeds/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

// Build a lookup: { "golden-retriever": "/assets/golden-retriever-abc123.jpg", ... }
const breedImages = {};
for (const path in imageModules) {
  const filename = path.split('/').pop().replace(/\.(jpg|jpeg|png|webp)$/, '');
  breedImages[filename] = imageModules[path];
}

export function getBreedImage(slug) {
  return breedImages[slug] || null;
}