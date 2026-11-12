/**
 * Returns all keys of an object.
 * @param {Object} obj - Input object.
 * @returns {string[]} Array of keys.
 */
export function keys(obj) {
  return Object.keys(obj);
}

/**
 * Returns all values of an object.
 * @param {Object} obj - Input object.
 * @returns {Array} Array of values.
 */
export function values(obj) {
  return Object.values(obj);
}

/**
 * Returns entries of an object.
 * @param {Object} obj - Input object.
 * @returns {Array[]} Array of [key, value] pairs.
 */
export function entries(obj) {
  return Object.entries(obj);
}

/**
 * Creates a shallow clone of an object.
 * @param {Object} obj - Input object.
 * @returns {Object} Cloned object.
 */
export function clone(obj) {
  return { ...obj };
}

