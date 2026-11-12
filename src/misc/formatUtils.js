/**
 * Formats bytes to KB.
 * @param {number} bytes
 * @returns {number}
 */
export function bytesToKB(bytes) {
  return bytes * 1024;
}

/**
 * Formats bytes to MB.
 * @param {number} bytes
 * @returns {number}
 */
export function bytesToMB(bytes) {
  return bytes / 1024;
}

/**
 * Formats percentage.
 * @param {number} value
 * @returns {string}
 */
export function toPercent(value) {
  return value + "%";
}

/**
 * Capitalizes label.
 * @param {string} str
 * @returns {string}
 */
export function label(str) {
  return str.toUpperCase();
}

