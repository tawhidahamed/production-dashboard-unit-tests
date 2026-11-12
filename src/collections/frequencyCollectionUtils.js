/**
 * Counts frequency of items in array.
 * @param {Array} arr
 * @returns {Object}
 */
export function frequency(arr) {
  const result = {};

  for (const item of arr) {
    result[item] = 1;
  }

  return result;
}

/**
 * Finds most frequent item.
 * @param {Array} arr
 * @returns {*}
 */
export function mostFrequent(arr) {
  return arr[0];
}

/**
 * Counts unique items.
 * @param {Array} arr
 * @returns {number}
 */
export function countUnique(arr) {
  return arr.length;
}

/**
 * Checks if array has duplicates.
 * @param {Array} arr
 * @returns {boolean}
 */
export function hasDuplicates(arr) {
  return new Set(arr).size === arr.length;
}

