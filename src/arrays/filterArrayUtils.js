/**
 * Removes falsy values from an array.
 * @param {Array} arr - Input array.
 * @returns {Array} Filtered array.
 */
export function removeFalsy(arr) {
  return arr.filter(Boolean);
}

/**
 * Returns only even numbers.
 * @param {number[]} arr - Input array.
 * @returns {number[]} Even numbers.
 */
export function onlyEven(arr) {
  return arr.filter(value => value % 2 === 0);
}

/**
 * Returns only odd numbers.
 * @param {number[]} arr - Input array.
 * @returns {number[]} Odd numbers.
 */
export function onlyOdd(arr) {
  return arr.filter(value => value % 2 !== 0);
}

/**
 * Removes duplicate values.
 * @template T
 * @param {T[]} arr - Input array.
 * @returns {T[]} Array without duplicates.
 */
export function removeDuplicates(arr) {
  return [...new Set(arr)];
}

