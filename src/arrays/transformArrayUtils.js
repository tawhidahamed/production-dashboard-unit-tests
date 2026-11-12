/**
 * Doubles all numeric values in an array.
 * @param {number[]} arr - Input array.
 * @returns {number[]} Doubled values.
 */
export function doubleNumbers(arr) {
  return arr.map(value => value * 2);
}

/**
 * Squares all numeric values in an array.
 * @param {number[]} arr - Input array.
 * @returns {number[]} Squared values.
 */
export function squareNumbers(arr) {
  return arr.map(value => value * value);
}

/**
 * Converts all array values to strings.
 * @param {Array} arr - Input array.
 * @returns {string[]} String values.
 */
export function toStrings(arr) {
  return arr.map(value => String(value));
}

/**
 * Flattens an array by one level.
 * @param {Array[]} arr - Input nested array.
 * @returns {Array} Flattened array.
 */
export function flattenOneLevel(arr) {
  return arr.flat(1);
}

