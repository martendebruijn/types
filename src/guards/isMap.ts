/**
 * Checks if a value is an instance of Map.
 *
 * @param x - The value to be checked.
 * @returns A boolean indicating whether the value is a Map.
 */
export default function isMap(x: unknown): x is Map<unknown, unknown> {
  return x instanceof Map
}
