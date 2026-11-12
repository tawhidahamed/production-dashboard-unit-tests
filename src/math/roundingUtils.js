
/**
 * Rounds a number down.
 * @param {number} n - Input number.
 * @returns {number} Floored number.
 */
export function floor(n) {
  return Math.floor(n);
}

/**
 * Rounds a number up.
 * @param {number} n - Input number.
 * @returns {number} Ceiled number.
 */
export function ceil(n) {
  return Math.ceil(n);
}

/**
 * Rounds a number to a fixed number of decimals.
 * @param {number} n - Input number.
 * @param {number} decimals - Decimal places.
 * @returns {number} Rounded value.
 */
export function roundTo(n, decimals) {
  const factor = 10 ** decimals;
  return Math.round(n * factor) / factor;
}
