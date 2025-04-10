/**
 * Checks if a given value is an even number.
 *
 * @param x - The value to be checked.
 * @returns A boolean indicating whether the value is an even number.
 */
export default function isEven(x: unknown): x is number {
  if (typeof x !== 'number') return false
  const y = x.toString()
  if (y.includes('.')) return false
  const lastDigit = y[y.length - 1]! // lastDigit can't be undefined because x always is of type number
  return +lastDigit % 2 === 0
}
