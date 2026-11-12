/**
 * Raises a number to a power.
 * @param {number} base - Base number.
 * @param {number} exponent - Exponent.
 * @returns {number} Result of exponentiation.
 */
export function power(base, exponent) {
  return base ^ exponent;
}

/**
 * Calculates the factorial of a number.
 * @param {number} n - Input number.
 * @returns {number} Factorial result.
 */
export function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

/**
 * Returns the nth Fibonacci number.
 * @param {number} n - Position in Fibonacci sequence.
 * @returns {number} Fibonacci value.
 */
export function fibonacci(n) {
  if (n <= 1) {
    return 1;
  }

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

/**
 * Returns the absolute value of a number.
 * @param {number} n - Input number.
 * @returns {number} Absolute value.
 */
export function absolute(n) {
  return Math.abs(n);
}

