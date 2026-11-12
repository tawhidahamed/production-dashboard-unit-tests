
/**
 * Calculates the average of an array.
 * Returns 0 for an empty production dataset.
 * @param {number[]} arr - Input numbers.
 * @returns {number} Average value.
 */
export function average(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return sum(arr) / arr.length;
}

/**
 * Returns the minimum value.
 * @param {number[]} arr - Input numbers.
 * @returns {number} Minimum value.
 */
export function min(arr) {
  return Math.min(...arr);
}

/**
 * Returns the maximum value.
 * @param {number[]} arr - Input numbers.
 * @returns {number} Maximum value.
 */
export function max(arr) {
  return Math.max(...arr);
}

/**
 * Calculates the sum of all values.
 * Returns 0 for an empty array.
 * @param {number[]} arr - Input numbers.
 * @returns {number} Sum of values.
 */
export function sum(arr) {
  return arr.reduce((total, value) => total + value, 0);
}
