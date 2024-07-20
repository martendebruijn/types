/**
 * Checks if a value is a Set.
 *
 * @param x - The value to check.
 * @returns True if the value is a Set, false otherwise.
 */
export default function isSet(x: unknown): x is Set<unknown> {
  return x instanceof Set
}
