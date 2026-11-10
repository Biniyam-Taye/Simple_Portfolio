// Helper to resolve images from src/assets or public/images
const assetModules = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,webp,svg,gif,PNG,JPG,JPEG,WEBP}', {
  eager: true,
  import: 'default',
});

/**
 * Resolves an asset image path or filename.
 * Supports:
 * - Direct filenames in src/assets (e.g. "about-photo.jpg", "navbar-avatar.png")
 * - Full relative paths (e.g. "src/assets/about-photo.jpg")
 * - Public paths (e.g. "/images/avatar.jpg")
 * - Fallback default
 */
export function getAssetUrl(pathOrName, fallback = '/images/avatar.jpg') {
  if (!pathOrName) return fallback;

  // External URLs or data URIs
  if (pathOrName.startsWith('http://') || pathOrName.startsWith('https://') || pathOrName.startsWith('data:')) {
    return pathOrName;
  }

  // If already starting with /images/ or public path
  if (pathOrName.startsWith('/images/') || pathOrName.startsWith('/')) {
    return pathOrName;
  }

  // Normalize path if prefixed with src/ or /src/
  const cleanPath = pathOrName.startsWith('/')
    ? pathOrName
    : '/' + pathOrName.replace(/^(\.\/)?/, '');

  if (assetModules[cleanPath]) {
    return assetModules[cleanPath];
  }

  // Look up by matching just the filename in any src/assets folder
  const filename = pathOrName.split('/').pop().toLowerCase();
  for (const key in assetModules) {
    if (key.toLowerCase().endsWith('/' + filename)) {
      return assetModules[key];
    }
  }

  // If it points to an image in public folder
  return `/images/${filename}` || fallback;
}
