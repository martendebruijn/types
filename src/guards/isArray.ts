/**
 * Checks if a value is an array.
 *
 * @param x - The value to check.
 * @returns `true` if the value is an array, `false` otherwise.
 */
export default function isArray<T>(x: T): x is T extends unknown[] ? T : never {
  return Array.isArray(x)
}
