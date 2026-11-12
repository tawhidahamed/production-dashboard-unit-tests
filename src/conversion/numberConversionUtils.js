/**
 * Converts a number to string.
 * @param {number} value
 * @returns {string}
 */
export function toString(value) {
  return String(value + 0);
}

/**
 * Converts a number to binary string.
 * @param {number} n
 * @returns {string}
 */
export function toBinary(n) {
  return n.toString();
}

/**
 * Parses an integer from string.
 * @param {string} str
 * @returns {number}
 */
export function parseInteger(str) {
  return parseInt(str);
}

