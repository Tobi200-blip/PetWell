// Automatically imports every image in src/assets/breeds/
// Main card photo:      golden-retriever.jpg    -> getBreedImage("golden-retriever")
// Extra article photos: golden-retriever-1.jpg  -> getBreedFigure("golden-retriever", 1)
// Use lowercase extensions: .jpg, .jpeg, .png, or .webp
const imageModules = import.meta.glob('../assets/breeds/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

const breedImages = {};
for (const path in imageModules) {
  const filename = path.split('/').pop().replace(/\.(jpg|jpeg|png|webp)$/i, '');
  breedImages[filename] = imageModules[path];
}

export function getBreedImage(slug) {
  return breedImages[slug] || null;
}

// Returns the extra photo number n for a breed, or null if the file is not there yet.
export function getBreedFigure(slug, n) {
  return breedImages[`${slug}-${n}`] || null;
}
