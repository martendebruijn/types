/**
 * Type guard to check if a value is defined
 *
 * Where `T` is the type you want to check against
 *
 * @param x Value to check
 * @returns True if defined, false if undefined
 *
 * @example
 * let subject: string | null | undefined = 'foo'
 * if (isDefined(subject)) {
 *    console.log("I'm defined")
 * }
 *
 * subject = undefined
 * if (isDefined(subject)) {
 *    console.log("I'm NOT defined and this block won't run")
 * }
 *
 * subject = null
 * if (isDefined(subject)) {
 *    console.log("I'm defined")
 * }
 */
export function isDefined<T>(x: T | undefined): x is T {
  return typeof x !== 'undefined'
}
