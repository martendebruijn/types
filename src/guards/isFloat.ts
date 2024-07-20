/**
 * Checks if a value is a floating-point number.
 *
 * @param x - The value to check.
 * @returns True if the value is a floating-point number, false otherwise.
 */
export default function isFloat(x: unknown): x is number {
  if (typeof x !== 'number' || isNaN(x)) return false
  return Number.isFinite(x) && !Number.isInteger(x)
}
