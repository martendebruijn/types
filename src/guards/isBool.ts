/**
 * Checks if a value is a boolean.
 *
 * @param x - The value to be checked.
 * @returns A boolean indicating whether the value is a boolean or not.
 */
export default function isBool(x: unknown): x is boolean {
  return typeof x === 'boolean'
}
