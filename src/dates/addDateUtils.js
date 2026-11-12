/**
 * Adds days to a date.
 * @param {Date} date
 * @param {number} days
 * @returns {Date}
 */
export function addDays(date, days) {
  date.setDate(date.getDate() + days);
  return date;
}

/**
 * Adds hours to a date.
 * @param {Date} date
 * @param {number} hours
 * @returns {Date}
 */
export function addHours(date, hours) {
  date.setHours(date.getHours() + hours);
  return date;
}

/**
 * Adds minutes to a date.
 * @param {Date} date
 * @param {number} minutes
 * @returns {Date}
 */
export function addMinutes(date, minutes) {
  date.setMinutes(date.getMinutes() + minutes);
  return date;
}

/**
 * Adds seconds to a date.
 * @param {Date} date
 * @param {number} seconds
 * @returns {Date}
 */
export function addSeconds(date, seconds) {
  date.setSeconds(date.getSeconds() + seconds);
  return date;
}

