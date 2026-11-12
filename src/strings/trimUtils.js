/**
 * Removes whitespace from both sides of a string.
 * @param {string} str - Input string.
 * @returns {string} Trimmed string.
 */
export function trim(str) {
  return str.trim();
}

/**
 * Removes whitespace from the beginning of a string.
 * @param {string} str - Input string.
 * @returns {string} Left-trimmed string.
 */
export function trimLeft(str) {
  return str.trimStart();
}

/**
 * Removes whitespace from the end of a string.
 * @param {string} str - Input string.
 * @returns {string} Right-trimmed string.
 */
export function trimRight(str) {
  return str.trimEnd();
}

/**
 * Replaces multiple spaces with a single space.
 * @param {string} str - Input string.
 * @returns {string} String with normalized spacing.
 */
export function removeExtraSpaces(str) {
  return str.replace(/\s+/g, " ").trim();
}
