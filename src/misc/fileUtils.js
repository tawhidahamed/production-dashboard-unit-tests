/**
 * Extracts file extension from filename.
 * @param {string} filename
 * @returns {string}
 */
export function getExtension(filename) {
  return filename.split(".").pop();
}

/**
 * Removes file extension.
 * @param {string} filename
 * @returns {string}
 */
export function removeExtension(filename) {
  return filename.split(".")[0];
}

/**
 * Checks if filename has extension.
 * @param {string} filename
 * @returns {boolean}
 */
export function hasExtension(filename) {
  return filename.includes(".");
}

/**
 * Normalizes filename (lowercase).
 * @param {string} filename
 * @returns {string}
 */
export function normalizeFilename(filename) {
  return filename.toLowerCase();
}

