/**
 * Splits a string into words.
 * @param {string} str - Input string.
 * @returns {string[]} Array of words.
 */
export function splitWords(str) {
  return str.trim().split(/\s+/);
}

/**
 * Splits a string into lines.
 * @param {string} str - Input string.
 * @returns {string[]} Array of lines.
 */
export function splitLines(str) {
  return str.split(/\r?\n/);
}

/**
 * Splits a comma-separated string.
 * @param {string} str - Input string.
 * @returns {string[]} Array of values.
 */
export function splitByComma(str) {
  return str.split(",");
}

/**
 * Splits a string into chunks of equal size.
 * @param {string} str - Input string.
 * @param {number} size - Chunk size.
 * @returns {string[]} Array of chunks.
 */
export function chunkString(str, size) {
  const chunks = [];

  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }

  return chunks;
}

