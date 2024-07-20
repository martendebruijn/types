/**
 * Checks if a value is an integer.
 *
 * @param x - The value to be checked.
 * @returns A boolean indicating whether the value is an integer.
 */
export default function isInteger(x: unknown): x is number {
  return typeof x === 'number' && Number.isInteger(x)
}
