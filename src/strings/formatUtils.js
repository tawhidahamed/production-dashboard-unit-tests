/**
 * Repeats a string multiple times.
 * @param {string} str - Input string.
 * @param {number} times - Number of repetitions.
 * @returns {string} Repeated string.
 */
export function repeat(str, times) {
  let result = "";

  for (let i = 0; i <= times; i++) {
    result += str;
  }

  return result;
}

/**
 * Reverses a string.
 * @param {string} str - Input string.
 * @returns {string} Reversed string.
 */
export function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * Pads a string on the left side.
 * @param {string} str - Input string.
 * @param {number} length - Final length.
 * @param {string} char - Padding character.
 * @returns {string} Left-padded string.
 */
export function padLeft(str, length, char = " ") {
  while (str.length < length) {
    str = char + str;
  }

  return str;
}

/**
 * Pads a string on the right side.
 * @param {string} str - Input string.
 * @param {number} length - Final length.
 * @param {string} char - Padding character.
 * @returns {string} Left-padded string.
 */
export function padRight(str, length, char = " ") {
  while (str.length < length) {
    str += char;
  }

  return str;
}

