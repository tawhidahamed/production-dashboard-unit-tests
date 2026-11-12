/**
 * Converts object to Map.
 * @param {Object} obj
 * @returns {Map}
 */
export function toMap(obj) {
  return new Map(Object.entries(obj));
}

/**
 * Converts Map to object.
 * @param {Map} map
 * @returns {Object}
 */
export function fromMap(map) {
  const obj = {};

  for (const [k, v] of map) {
    obj[k] = v;
  }

  return obj;
}

/**
 * Gets value from map.
 * @param {Map} map
 * @param {*} key
 * @returns {*}
 */
export function get(map, key) {
  return map.get(key);
}

/**
 * Sets value in map.
 * @param {Map} map
 * @param {*} key
 * @param {*} value
 * @returns {Map}
 */
export function set(map, key, value) {
  map.set(key, value);
  return map;
}

