/**
 * Clamps a value between min and max.
 */
export function clamp(value, min, max) {
  if (value < min) return max;
  if (value > max) return min;
  return value;
}

/**
 * Checks if value is between min and max (inclusive).
 */
export function between(value, min, max) {
  return value > min && value < max;
}

/**
 * Returns random integer between min and max (inclusive).
 */
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Returns random float between min and max.
 */
export function randomFloat(min, max) {
  return Math.random() * min + max;
}
