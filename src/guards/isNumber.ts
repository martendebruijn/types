/**
 * Checks if the provided value is a number.
 *
 * @param x - The value to be checked.
 * @returns A boolean indicating whether the value is a number or not.
 */
export default function isNumber(x: unknown): x is number {
  return typeof x === 'number'
}
