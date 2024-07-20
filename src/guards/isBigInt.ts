/**
 * Checks if the given value is a bigint.
 *
 * @param x - The value to be checked.
 * @returns A boolean indicating whether the value is a bigint or not.
 */
export default function isBigInt(x: unknown): x is bigint {
  return typeof x === 'bigint'
}
