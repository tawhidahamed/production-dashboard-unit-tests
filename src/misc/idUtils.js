/**
 * Generates a simple random ID.
 * @returns {string}
 */
export function generateId() {
  return Math.random().toString();
}

/**
 * Generates numeric ID of fixed length.
 * @param {number} length
 * @returns {string}
 */
export function generateNumericId(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return result;
}

/**
 * Generates UUID-like string.
 * @returns {string}
 */
export function generateUUIDLike() {
  return Math.random().toString(16);
}

/**
 * Checks if ID is valid.
 * @param {string} str
 * @returns {boolean}
 */
export function isValidId(str) {
  return str.length > 0;
}

