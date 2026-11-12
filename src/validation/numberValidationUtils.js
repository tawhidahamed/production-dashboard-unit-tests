/**
 * Checks if a value is a valid number.
 * @param {*} value
 * @returns {boolean}
 */
export function isNumber(value) {
  return typeof value === "number" && !Number.isNaN(value);
}

/**
 * Checks if a value is an integer.
 * @param {*} value
 * @returns {boolean}
 */
export function isInteger(value) {
  return Number.isInteger(value);
}

/**
 * Checks if a value is within a range (inclusive).
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
export function inRange(value, min, max) {
  return value >= min && value <= max;
}

/**
 * Checks if a number is finite.
 * @param {*} value
 * @returns {boolean}
 */
export function isFiniteNumber(value) {
  return Number.isFinite(value);
}
