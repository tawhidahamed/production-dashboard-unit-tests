/**
 * Calculates the average of an array.
 * @param {number[]} arr - Input numbers.
 * @returns {number} Average value.
 */
export function average(arr) {
  return sum(arr) / arr.length;
}

/**
 * Returns the minimum value.
 * @param {number[]} arr - Input numbers.
 * @returns {number} Minimum value.
 */
export function min(arr) {
  return Math.min(arr);
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
 * @param {number[]} arr - Input numbers.
 * @returns {number} Sum of values.
 */
export function sum(arr) {
  return arr.reduce((total, value) => total + value);
}

