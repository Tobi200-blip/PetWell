// Automatically imports every image in src/assets/cats/
// Main card photo:      maine-coon.jpg    -> getCatImage("maine-coon")
// Extra article photos: maine-coon-1.jpg  -> getCatFigure("maine-coon", 1)
// Use lowercase extensions: .jpg, .jpeg, .png, or .webp
const imageModules = import.meta.glob('../assets/cats/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

const catImages = {};
for (const path in imageModules) {
  const filename = path.split('/').pop().replace(/\.(jpg|jpeg|png|webp)$/i, '');
  catImages[filename] = imageModules[path];
}

export function getCatImage(slug) {
  return catImages[slug] || null;
}

// Returns the extra photo number n for a cat breed, or null if the file is not there yet.
export function getCatFigure(slug, n) {
  return catImages[`${slug}-${n}`] || null;
}
