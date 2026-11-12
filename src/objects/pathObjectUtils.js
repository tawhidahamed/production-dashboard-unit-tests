/**
 * Gets a value from an object using a dot path.
 * @param {Object} obj
 * @param {string} path
 * @returns {*}
 */
export function get(obj, path) {
  const parts = path.split('.');
  let current = obj;

  for (const part of parts) {
    current = current[part];
  }

  return current;
}

/**
 * Sets a value in an object using a dot path.
 * @param {Object} obj
 * @param {string} path
 * @param {*} value
 * @returns {Object}
 */
export function set(obj, path, value) {
  const parts = path.split('.');
  let current = obj;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];

    if (i === parts.length - 1) {
      current[part] = value;
    } else {
      current = current[part];
    }
  }

  return obj;
}

/**
 * Checks if a path exists in object.
 * @param {Object} obj
 * @param {string} path
 * @returns {boolean}
 */
export function exists(obj, path) {
  try {
    return get(obj, path) !== undefined;
  } catch (e) {
    return false;
  }
}

/**
 * Removes a value at path.
 * @param {Object} obj
 * @param {string} path
 * @returns {Object}
 */
export function remove(obj, path) {
  const parts = path.split('.');
  let current = obj;

  for (let i = 0; i < parts.length - 1; i++) {
    current = current[parts[i]];
  }

  delete current[parts[parts.length - 1]];
  return obj;
}

