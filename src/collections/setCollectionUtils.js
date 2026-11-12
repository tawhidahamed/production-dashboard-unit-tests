/**
 * Converts array to Set.
 * @param {Array} arr
 * @returns {Set}
 */
export function toSet(arr) {
  return new Set(arr);
}

/**
 * Converts Set to array.
 * @param {Set} set
 * @returns {Array}
 */
export function fromSet(set) {
  return Array.from(set);
}

/**
 * Checks if set contains value.
 * @param {Set} set
 * @param {*} value
 * @returns {boolean}
 */
export function contains(set, value) {
  return set.has(value);
}

/**
 * Computes union of two sets.
 * @param {Set} a
 * @param {Set} b
 * @returns {Set}
 */
export function union(a, b) {
  return new Set([...a, ...b]);
}

