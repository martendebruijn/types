/**
 * Checks if the given value is a string.
 *
 * @param x - The value to be checked.
 * @returns A boolean indicating whether the value is a string or not.
 */
export default function isString(x: unknown): x is string {
  return typeof x === 'string'
}
