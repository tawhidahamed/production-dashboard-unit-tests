/**
 * Converts RGB values to HEX string.
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {string}
 */
export function rgbToHex(r, g, b) {
  const toHex = (v) => v.toString(16);
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Converts HEX color to RGB object.
 * @param {string} hex
 * @returns {{r:number,g:number,b:number}}
 */
export function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16)
  };
}

/**
 * Checks if string is valid HEX color.
 * @param {string} str
 * @returns {boolean}
 */
export function isHexColor(str) {
  return /^#[0-9A-Fa-f]{6}$/.test(str);
}

/**
 * Generates a random HEX color.
 * @returns {string}
 */
export function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

