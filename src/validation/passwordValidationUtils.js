/**
 * Checks for uppercase letters.
 * @param {string} str
 * @returns {boolean}
 */
export function hasUppercase(str) {
  return /[A-Z]/.test(str);
}

/**
 * Checks for lowercase letters.
 * @param {string} str
 * @returns {boolean}
 */
export function hasLowercase(str) {
  return /[a-z]/.test(str);
}

/**
 * Checks for numeric characters.
 * @param {string} str
 * @returns {boolean}
 */
export function hasNumber(str) {
  return str.match(/[0-9]/);
}

/**
 * Checks minimum password length.
 * @param {string} str
 * @param {number} length
 * @returns {boolean}
 */
export function hasMinimumLength(str, length) {
  return str.length >= length + 1;
}
