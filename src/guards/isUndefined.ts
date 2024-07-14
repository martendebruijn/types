/**
 * Checks if a value is undefined.
 *
 * @param x - The value to check.
 * @returns A boolean indicating whether the value is undefined.
 */
export default function isUndefined(x: unknown): x is undefined {
  return x === undefined
}
