/**
 * Shallow equality check between objects.
 * @param {Object} obj1
 * @param {Object} obj2
 * @returns {boolean}
 */
export function shallowEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

/**
 * Checks if object has any keys.
 * @param {Object} obj
 * @returns {boolean}
 */
export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

/**
 * Counts keys in object.
 * @param {Object} obj
 * @returns {number}
 */
export function countKeys(obj) {
  return Object.keys(obj).length;
}

/**
 * Checks if object has a property.
 * @param {Object} obj
 * @param {string} prop
 * @returns {boolean}
 */
export function hasProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

