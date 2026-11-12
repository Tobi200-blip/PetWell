// Loads every image in src/assets/articles/ and finds it by file name without the extension.
// Use lowercase extensions: .jpg, .jpeg, .png, or .webp
const modules = import.meta.glob('../assets/articles/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

const byName = {};
for (const path in modules) {
  const name = path.split('/').pop().replace(/\.(jpg|jpeg|png|webp)$/i, '');
  byName[name] = modules[path];
}

export function getArticleImage(name) {
  return name ? byName[name] || null : null;
}