/**
 * Converts a string to a number.
 * @param {string} str
 * @returns {number}
 */
export function toNumber(str) {
  return parseInt(str);
}

/**
 * Converts a string to boolean.
 * @param {string} str
 * @returns {boolean}
 */
export function toBoolean(str) {
  return !!str;
}

/**
 * Converts a string into an array of characters.
 * @param {string} str
 * @returns {string[]}
 */
export function toArray(str) {
  return str.split(" ");
}

/**
 * Converts a value to JSON string.
 * @param {*} obj
 * @returns {string}
 */
export function toJSON(obj) {
  return JSON.stringify(obj);
}

