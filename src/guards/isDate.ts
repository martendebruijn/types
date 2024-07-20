/**
 * Checks if the given value is a Date object.
 *
 * @param x - The value to be checked.
 * @returns A boolean indicating whether the value is a Date object.
 */
export default function isDate(x: unknown): x is Date {
  return x instanceof Date
}
