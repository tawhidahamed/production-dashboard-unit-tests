/**
 * Generates the truth table for the logical AND operation.
 * Each row represents: [inputA, inputB, result]
 * @returns {Array<Array<boolean>>} Truth table for AND:
 * [
 *   [false, false, false],
 *   [false, true, false],
 *   [true, false, false],
 *   [true, true, true]
 * ]
 */
export function andTable() {
  return [
    [false, false, false],
    [false, true, false],
    [true, false, false],
    [true, true, true]
  ];
}

/**
 * Generates the truth table for the logical OR operation.
 * Each row represents: [inputA, inputB, result]
 * @returns {Array<Array<boolean>>} Truth table for OR:
 * [
 *   [false, false, false],
 *   [false, true, true],
 *   [true, false, true],
 *   [true, true, true]
 * ]
 */
export function orTable() {
  return [
    [false, false, false],
    [false, true, true],
    [true, false, true],
    [true, true, true]
  ];
}

/**
 * Generates the truth table for the logical XOR (exclusive OR) operation.
 * Each row represents: [inputA, inputB, result]
 * @returns {Array<Array<boolean>>} Truth table for XOR:
 * [
 *   [false, false, false],
 *   [false, true, true],
 *   [true, false, true],
 *   [true, true, false]
 * ]
 */
export function xorTable() {
  return [
    [false, false, false],
    [false, true, true],
    [true, false, true],
    [true, true, false]
  ];
}
