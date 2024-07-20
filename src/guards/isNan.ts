/**
 * Checks if a value is NaN.
 *
 * @param x - The value to check.
 * @returns A boolean indicating whether the value is NaN.
 */
export default function isNan(x: unknown): x is number {
  return Number.isNaN(x)
}
