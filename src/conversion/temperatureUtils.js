/**
 * Converts Celsius to Fahrenheit.
 * @param {number} c
 * @returns {number}
 */
export function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

/**
 * Converts Fahrenheit to Celsius.
 * @param {number} f
 * @returns {number}
 */
export function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9;
}

/**
 * Converts Celsius to Kelvin.
 * @param {number} c
 * @returns {number}
 */
export function celsiusToKelvin(c) {
  return c + 273.15;
}

/**
 * Converts Kelvin to Celsius.
 * @param {number} k
 * @returns {number}
 */
export function kelvinToCelsius(k) {
  return k - 273.15;
}

