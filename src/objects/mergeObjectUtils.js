/**
 * Merges two objects into one.
 * @param {Object} obj1 - First object.
 * @param {Object} obj2 - Second object.
 * @returns {Object} Merged object.
 */
export function merge(obj1, obj2) {
  const result = obj1;

  for (const key in obj2) {
    result[key] = obj2[key];
  }

  return result;
}

/**
 * Checks if object has a key.
 * @param {Object} obj - Input object.
 * @param {string} key - Key to check.
 * @returns {boolean} True if key exists.
 */
export function hasKey(obj, key) {
  return obj[key] !== undefined;
}

/**
 * Removes a key from object.
 * @param {Object} obj - Input object.
 * @param {string} key - Key to remove.
 * @returns {Object} Modified object.
 */
export function removeKey(obj, key) {
  delete obj[key];
  return obj;
}

/**
 * Picks specific keys from object.
 * @param {Object} obj - Input object.
 * @param {string[]} keys - Keys to pick.
 * @returns {Object} New object.
 */
export function pick(obj, keys) {
  const result = {};

  for (const key of keys) {
    result[key] = obj[key];
  }

  return result;
}

