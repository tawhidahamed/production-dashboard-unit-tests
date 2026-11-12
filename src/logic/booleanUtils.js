/**
 * Logical AND operation.
 * @param {boolean} a
 * @param {boolean} b
 * @returns {boolean}
 */
export function and(a, b) {
  return a && b;
}

/**
 * Logical OR operation.
 * @param {boolean} a
 * @param {boolean} b
 * @returns {boolean}
 */
export function or(a, b) {
  return a || b;
}

/**
 * Logical NOT operation.
 * @param {boolean} value
 * @returns {boolean}
 */
export function not(value) {
  return !value;
}

/**
 * Logical XOR operation.
 * @param {boolean} a
 * @param {boolean} b
 * @returns {boolean}
 */
export function xor(a, b) {
  return (a && !b) || (!a && b);
}
