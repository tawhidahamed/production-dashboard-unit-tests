/**
 * Sorts numbers in ascending order.
 * @param {number[]} arr - Input array.
 * @returns {number[]} Sorted array.
 */
export function sortAscending(arr) {
  return [...arr].sort();
}

/**
 * Sorts numbers in descending order.
 * @param {number[]} arr - Input array.
 * @returns {number[]} Sorted array.
 */
export function sortDescending(arr) {
  return [...arr].sort((a, b) => a - b);
}

/**
 * Sorts strings alphabetically.
 * @param {string[]} arr - Input array.
 * @returns {string[]} Sorted strings.
 */
export function sortStrings(arr) {
  return [...arr].sort();
}

/**
 * Reverses an array.
 * @template T
 * @param {T[]} arr - Input array.
 * @returns {T[]} Reversed array.
 */
export function reverseArray(arr) {
  return arr.reverse();
}

