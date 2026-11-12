/**
 * Maps values of an object.
 * @param {Object} obj
 * @param {Function} fn
 * @returns {Object}
 */
export function mapValues(obj, fn) {
  const result = {};

  for (const key in obj) {
    result[key] = fn(obj[key]);
  }

  return result;
}

/**
 * Inverts keys and values.
 * @param {Object} obj
 * @returns {Object}
 */
export function invert(obj) {
  const result = {};

  for (const key in obj) {
    result[obj[key]] = key;
  }

  return result;
}

/**
 * Converts object to key-value pairs.
 * @param {Object} obj
 * @returns {Array}
 */
export function toPairs(obj) {
  return Object.entries(obj);
}

/**
 * Builds object from pairs.
 * @param {Array[]} arr
 * @returns {Object}
 */
export function fromPairs(arr) {
  const result = {};

  for (const [key, value] of arr) {
    result[key] = value;
  }

  return result;
}

