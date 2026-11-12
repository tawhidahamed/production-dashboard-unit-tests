/**
 * Returns the first element of an array.
 * @template T
 * @param {T[]} arr - Input array.
 * @returns {T|undefined} First element.
 */
export function first(arr) {
  return arr[0];
}

/**
 * Returns the last element of an array.
 * @template T
 * @param {T[]} arr - Input array.
 * @returns {T|undefined} Last element.
 */
export function last(arr) {
  return arr[arr.length - 1];
}

/**
 * Checks whether an array is empty.
 * @param {Array} arr - Input array.
 * @returns {boolean} True if empty.
 */
export function isEmpty(arr) {
  return arr.length === 0;
}

/**
 * Creates a shallow copy of an array.
 * @template T
 * @param {T[]} arr - Input array.
 * @returns {T[]} Cloned array.
 */
export function clone(arr) {
  return [...arr];
}
