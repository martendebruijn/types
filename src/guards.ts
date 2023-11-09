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
export const isDefined = <T>(x: T | undefined): x is T =>
  typeof x !== 'undefined'

/**
 * Check if variable is a string
 *
 * @param x Value to check
 * @returns True if a string, false otherwise
 *
 * @example
 * const foo = '' as string | number
 * foo.toLowerCase() // Error: Property 'toLowerCase' does not exist on type 'number'.
 *
 * if (isString(foo)) {
 *  foo.toLowerCase() // Fine
}
 */
export const isString = (x: unknown): x is string => typeof x === 'string'

/**
 * Check if variable is a number
 *
 * @param x Value to check
 * @returns True if a number, false otherwise
 *
 * @example
 * const foo = 0 as string | number
 * foo.toFixed() // Error: Property 'toFixed' does not exist on type 'string'.
 *
 * if (isNumber(foo)) {
 *   foo.toFixed() // Fine
 * }
 */
export const isNumber = (x: unknown): x is number => typeof x === 'number'

/**
 * Check if variable is a BigInt
 *
 * @param x Value to check
 * @returns True if a bigint, false otherwise
 *
 * @example
 * const foo = 0n as bigint | string
 * foo.toLowerCase() // Error: Property 'toLowerCase' does not exist on type 'bigint'.
 *
 * if (isBigInt(foo)) {
 *   doSomethingElse()
 * } else {
 *   foo.toLowerCase() // Fine
 * }
 */
export const isBigInt = (x: unknown): x is bigint => typeof x === 'bigint'

/**
 * Check if variable is a boolean
 *
 * @param x Value to check
 * @returns True if a boolean, false otherwise
 *
 * @example
 * const foo = false as boolean | string
 * foo.toLowerCase() // Error: Property 'toLowerCase' does not exist on type 'false'.
 *
 * if (isBool(foo)) {
 *   doSomethingElse()
 * } else {
 *   foo.toLowerCase() // Fine
 * }
 */
export const isBool = (x: unknown): x is boolean => typeof x === 'boolean'

/**
 * Check if variable is a symbol
 *
 * @param x Value to check
 * @returns True if a symbol, false otherwise
 *
 * @example
 * const foo = Symbol('lorem ipsum') as string | symbol
 * foo.description // Error: Property 'description' does not exist on type 'string'.
 *
 * if (isSymbol(foo)) {
 *   foo.description // Fine
 * }
 */
export const isSymbol = (x: unknown): x is symbol => typeof x === 'symbol'

/**
 * Check if variable is null
 *
 * @param x Value to check
 * @returns True if null, false otherwise
 *
 * @example
 * const foo = null as null | string
 * foo.toLowerCase() // Error: 'foo' is possibly 'null'.
 *
 * if (isNull(foo)) {
 *   doSomethingElse()
 * } else {
 *   foo.toLowerCase() // Fine
 * }
 */
export const isNull = (x: unknown): x is null => x === null

/**
 * Check if variable is an array
 *
 * @param x Value to check
 * @returns True if an array, false otherwise
 *
 * @example
 * const possibleArray = [1,2,3] as number[] | string
 *  possibleArray.push(4) // Not okay
 *  if (isArray(possibleArray)) {
 *    possibleArray.push(4) // Okay
 * }
 */
export const isArray = <T>(x: T): x is T extends unknown[] ? T : never =>
  Array.isArray(x)

/**
 * Check if variable is an object
 *
 * @param x Value to check
 * @returns True if an object, false otherwise
 *
 * @example
 * const possibleObject = { foo: 12 } as string | { foo: number }
 *  possibleObject.toLowerCase() // Not okay
 *  if (isObject(possibleObject)) {
 *    doSomethingElse()
 *  } else {
 *    possibleObject.toLowerCase() // Okay
 * }
 */
export const isObject = (x: unknown): x is { [k: PropertyKey]: unknown } =>
  x != null && x.constructor === Object
