/**
 * Checks if a value is an object.
 *
 * @param x - The value to check.
 * @returns A boolean indicating whether the value is an object.
 */
export default function isObject(
  x: unknown
): x is { [k: PropertyKey]: unknown } {
  return x != null && x.constructor === Object
}
