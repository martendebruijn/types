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

/**
 * Check if variable is a string
 *
 * @param x Value to check
 * @returns True if a string, false otherwise
 */
export const isString = (x: unknown): x is string => typeof x === 'string'

/**
 * Check if variable is a number
 *
 * @param x Value to check
 * @returns True if a number, false otherwise
 */
export const isNumber = (x: unknown): x is number => typeof x === 'number'

/**
 * Check if variable is a BigInt
 *
 * @param x Value to check
 * @returns True if a bigint, false otherwise
 */
export const isBigInt = (x: unknown): x is bigint => typeof x === 'bigint'

/**
 * Check if variable is a boolean
 *
 * @param x Value to check
 * @returns True if a boolean, false otherwise
 */
export const isBool = (x: unknown): x is boolean => typeof x === 'boolean'

/**
 * Check if variable is a symbol
 *
 * @param x Value to check
 * @returns True if a symbol, false otherwise
 */
export const isSymbol = (x: unknown): x is symbol => typeof x === 'symbol'

/**
 * Check if variable is null
 *
 * @param x Value to check
 * @returns True if null, false otherwise
 */
export const isNull = (x: unknown): x is null => x === null
