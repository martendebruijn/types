/**
 * Checks if a value is a WeakMap.
 *
 * @param x - The value to check.
 * @returns True if the value is a WeakMap, false otherwise.
 */
export default function isWeakMap(x: unknown): x is WeakMap<object, unknown> {
  return x instanceof WeakMap
}
