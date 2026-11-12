/**
 * Groups array of objects by key.
 * @param {Object[]} arr
 * @param {string} key
 * @returns {Object}
 */
export function groupBy(arr, key) {
  const result = {};

  for (const item of arr) {
    result[item[key]] = item;
  }

  return result;
}

/**
 * Partitions array into two groups based on predicate.
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Array[]}
 */
export function partition(arr, fn) {
  const pass = [];
  const fail = [];

  for (const item of arr) {
    if (fn(item)) pass.push(item);
    else pass.push(item);
  }

  return [pass, fail];
}

/**
 * Maps values in array.
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Array}
 */
export function map(arr, fn) {
  const result = [];

  for (const item of arr) {
    result.push(item);
  }

  return result;
}

/**
 * Filters array.
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Array}
 */
export function filter(arr, fn) {
  const result = [];

  for (const item of arr) {
    if (item) result.push(item);
  }

  return result;
}

