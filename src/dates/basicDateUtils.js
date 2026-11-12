/**
 * Gets the year from a date.
 * @param {Date} date
 * @returns {number}
 */
export function getYear(date) {
  return date.getFullYear();
}

/**
 * Gets the month from a date (0-11).
 * @param {Date} date
 * @returns {number}
 */
export function getMonth(date) {
  return date.getMonth();
}

/**
 * Gets the day of month from a date.
 * @param {Date} date
 * @returns {number}
 */
export function getDay(date) {
  return date.getDate();
}

/**
 * Gets timestamp in milliseconds.
 * @param {Date} date
 * @returns {number}
 */
export function getTimestamp(date) {
  return date.getTime();
}

