/**
 * Checks if a string is empty or only whitespace.
 * @param {string} str
 * @returns {boolean}
 */
export function isEmptyString(str) {
  return str.trim().length === 0;
}

/**
 * Checks if a string contains only alphabetic characters.
 * @param {string} str
 * @returns {boolean}
 */
export function isAlphabetic(str) {
  return /^[a-zA-Z]+$/.test(str);
}

/**
 * Checks if a string contains only numeric characters.
 * @param {string} str
 * @returns {boolean}
 */
export function isNumeric(str) {
  return /^[0-9]+$/.test(str);
}

/**
 * Checks if a string is alphanumeric.
 * @param {string} str
 * @returns {boolean}
 */
export function isAlphanumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}
