/**
 * Checks if a value is a WeakSet.
 *
 * @param x - The value to check.
 * @returns True if the value is a WeakSet, false otherwise.
 */
export default function isWeakSet(x: unknown): x is WeakSet<object> {
  return x instanceof WeakSet
}
