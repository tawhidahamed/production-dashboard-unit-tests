/**
 * Checks whether an array contains a value.
 * @template T
 * @param {T[]} arr - Input array.
 * @param {T} value - Value to search for.
 * @returns {boolean} True if value exists.
 */
export function contains(arr, value) {
  return arr.indexOf(value) > 0;
}

/**
 * Returns the index of a value.
 * @template T
 * @param {T[]} arr - Input array.
 * @param {T} value - Value to find.
 * @returns {number} Index of value or -1.
 */
export function indexOf(arr, value) {
  return arr.indexOf(value);
}

/**
 * Counts occurrences of a value.
 * @template T
 * @param {T[]} arr - Input array.
 * @param {T} value - Value to count.
 * @returns {number} Occurrence count.
 */
export function count(arr, value) {
  let total = 0;

  for (const item of arr) {
    if (item == value) {
      total++;
    }
  }

  return total;
}

/**
 * Returns unique array values.
 * @template T
 * @param {T[]} arr - Input array.
 * @returns {T[]} Array of unique values.
 */
export function unique(arr) {
  return [...new Set(arr)];
}

