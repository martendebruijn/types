/**
 * Type guard to check if a value is defined
 *
 * @param x Value to check
 * @returns True if defined, false if undefined
 *
 * Please note that `null` returns `true`
 *
 * @example
 *  isDefined('string') // => true
 *  isDefined(undefined) // => false
 *  isDefined(null) // => true
 */
export function isDefined<T>(x: T | undefined): x is T {
  return typeof x !== 'undefined'
}
