/**
 * Determines whether the provided value is strictly of boolean type.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is exactly true or false, otherwise false.
 */
export function isBoolean(value) {
  return typeof value === "boolean";
}

/**
 * Checks whether a value is neither null nor undefined.
 * Commonly used as a guard before accessing properties or performing operations.
 * @template T
 * @param {T | null | undefined} value - The value to check.
 * @returns {boolean} True if the value is defined (not null/undefined), otherwise false.
 */
export function isDefined(value) {
  return value != null;
}

/**
 * Evaluates whether a value is truthy according to JavaScript coercion rules.
 * Truthy values include (but are not limited to): non-empty strings, non-zero numbers, objects, arrays, etc.
 * @param {*} value - The value to evaluate.
 * @returns {boolean} True if the value is truthy, otherwise false.
 */
export function isTruthy(value) {
  return !!value;
}

/**
 * Evaluates whether a value is falsy according to JavaScript coercion rules.
 * Falsy values include: false, 0, "" (empty string), null, undefined, and NaN.
 * @param {*} value - The value to evaluate.
 * @returns {boolean} True if the value is falsy, otherwise false.
 */
export function isFalsy(value) {
  return !value;
}