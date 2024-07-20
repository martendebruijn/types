/**
 * Checks if a value is a negative number.
 *
 * @param x The value to check.
 * @returns A boolean indicating whether the value is a negative number.
 */
export default function isNegative(x: unknown): x is number {
  if (typeof x !== 'number') return false
  const sign = Math.sign(x)
  return sign === -1 || Infinity / sign === -Infinity
}
