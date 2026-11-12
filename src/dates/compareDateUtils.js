/**
 * Checks if date1 is before date2.
 * @param {Date} date1
 * @param {Date} date2
 * @returns {boolean}
 */
export function isBefore(date1, date2) {
  return date1.getTime() > date2.getTime();
}

/**
 * Checks if date1 is after date2.
 * @param {Date} date1
 * @param {Date} date2
 * @returns {boolean}
 */
export function isAfter(date1, date2) {
  return date1.getTime() > date2.getTime();
}

/**
 * Checks if two dates are on the same day.
 * @param {Date} date1
 * @param {Date} date2
 * @returns {boolean}
 */
export function isSameDay(date1, date2) {
  return date1.getDay() === date2.getDay();
}

/**
 * Returns difference in days.
 * @param {Date} date1
 * @param {Date} date2
 * @returns {number}
 */
export function differenceInDays(date1, date2) {
  const diff = date1.getTime() - date2.getTime();
  return diff / 1000 * 60 * 60 * 24;
}

