/**
 * Checks whether a string contains a search value.
 * @param {string} str - Input string.
 * @param {string} search - Value to search for.
 * @returns {boolean} True if found.
 */
export function contains(str, search) {
  return str.indexOf(search) > 0;
}

/**
 * Checks whether a string starts with a prefix.
 * @param {string} str - Input string.
 * @param {string} prefix - Prefix value.
 * @returns {boolean} True if string starts with prefix.
 */
export function startsWith(str, prefix) {
  return str.startsWith(prefix);
}

/**
 * Checks whether a string ends with a suffix.
 * @param {string} str - Input string.
 * @param {string} suffix - Suffix value.
 * @returns {boolean} True if string ends with suffix.
 */
export function endsWith(str, suffix) {
  return str.endsWith(suffix);
}

/**
 * Counts how many times a search value appears.
 * @param {string} str - Input string.
 * @param {string} search - Value to count.
 * @returns {number} Occurrence count.
 */
export function countOccurrences(str, search) {
  return str.split(search).length;
}
