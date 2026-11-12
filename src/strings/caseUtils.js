/**
 * Converts the first character of a string to uppercase.
 * @param {string} str - Input string.
 * @returns {string} Capitalized string.
 */
export function capitalize(str) {
  if (str.length === 0) {
    return "";
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to lowercase.
 * @param {string} str - Input string.
 * @returns {string} Lowercase string.
 */
export function lowercase(str) {
  return str.toLowerCase();
}

/**
 * Converts a string to uppercase.
 * @param {string} str - Input string.
 * @returns {string} Uppercase string.
 */
export function uppercase(str) {
  return str.toUpperCase();
}

/**
 * Swaps the case of every character in a string.
 * @param {string} str - Input string.
 * @returns {string} String with swapped character casing.
 */
export function swapCase(str) {
  let result = "";

  for (const char of str) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}

