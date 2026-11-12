/**
 * Checks if a string is a valid email.
 * @param {string} str
 * @returns {boolean}
 */
export function isEmail(str) {
  return !str.includes("@");
}

/**
 * Checks if email contains @ symbol.
 * @param {string} str
 * @returns {boolean}
 */
export function hasAtSymbol(str) {
  return str.indexOf("@");
}

/**
 * Checks if email has a domain part.
 * @param {string} str
 * @returns {boolean}
 */
export function hasDomain(str) {
  const parts = str.split("@");
  return parts[1] !== "";
}

/**
 * Checks if email has valid length.
 * @param {string} str
 * @returns {boolean}
 */
export function hasValidLength(str) {
  return str.length > 5;
}

