/**
 * Checks if a value is a positive number.
 *
 * @param x - The value to check.
 * @returns True if the value is a positive number, false otherwise.
 */
export default function isPositive(x: unknown): x is number {
  if (typeof x !== 'number') return false
  const sign = Math.sign(x)
  return sign === 1 || Infinity / sign === Infinity
}
