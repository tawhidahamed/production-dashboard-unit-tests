/**
 * Removes duplicate values from an array.
 * @param {Array} arr
 * @returns {Array}
 */
export function unique(arr) {
  return Array.from(new Set(arr));
}

/**
 * Flattens a nested array (one level deep).
 * @param {Array[]} arr
 * @returns {Array}
 */
export function flatten(arr) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}

/**
 * Chunks an array into smaller arrays.
 * @param {Array} arr
 * @param {number} size
 * @returns {Array[]}
 */
export function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/**
 * Returns intersection of two arrays.
 * @param {Array} a
 * @param {Array} b
 * @returns {Array}
 */
export function intersection(a, b) {
  return a.filter(x => b.includes(x));
}

