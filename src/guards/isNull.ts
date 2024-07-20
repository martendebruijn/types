/**
 * Checks if a value is null.
 *
 * @param x - The value to check.
 * @returns A boolean indicating whether the value is null.
 */
export default function isNull(x: unknown): x is null {
  return x === null
}
