/**
 * Checks if a value is defined.
 * @param x - The value to check.
 * @returns `true` if the value is defined, `false` otherwise.
 * @template T - The type of the value.
 *
 * @example
 * const foo = '' as string | undefined
 * if (isDefined(foo)) {
 *  foo.toLowerCase() // Fine
 * }
 */
export const isDefined = <T>(x: T | undefined): x is T =>
  typeof x !== 'undefined'

/**
 * Checks if a value is a string.
 *
 * @param x - The value to check.
 * @returns `true` if the value is a string, `false` otherwise.
 *
 * @example
 * const foo = '' as string | number
 * if (isString(foo)) {
 *  foo.toLowerCase() // Fine
 * }
 */
export const isString = (x: unknown): x is string => typeof x === 'string'

/**
 * Checks if the provided value is a number.
 *
 * @param x - The value to be checked.
 * @returns A boolean indicating whether the value is a number or not.
 *
 * @example
 * // Returns true
 * isNumber(42);
 *
 * // Returns false
 * isNumber('42');
 */
export const isNumber = (x: unknown): x is number => typeof x === 'number'

/**
 * Checks if the given value is a BigInt.
 *
 * @param x - The value to be checked.
 * @returns A boolean indicating whether the value is a BigInt or not.
 *
 * @example
 * // Returns true
 * isBigint(BigInt(9007199254740991));
 *
 * // Returns false
 * isBigint('9007199254740991');
 */
export const isBigInt = (x: unknown): x is bigint => typeof x === 'bigint'

/**
 * Checks if a value is a boolean.
 * @param x - The value to check.
 * @returns True if the value is a boolean, false otherwise.
 *
 * @example
 * // Returns true
 * isBool(false);
 *
 * // Returns false
 * isBool('false');
 */
export const isBool = (x: unknown): x is boolean => typeof x === 'boolean'

/**
 * Checks if a value is a symbol.
 *
 * @param x - The value to check.
 * @returns `true` if the value is a symbol, `false` otherwise.
 *
 * @example
 * // Returns true
 * isSymbol(Symbol('symbol'));
 *
 * // Returns false
 * isSymbol('false');
 */
export const isSymbol = (x: unknown): x is symbol => typeof x === 'symbol'

/**
 * Checks if a value is null.
 *
 * @param x - The value to check.
 * @returns A boolean indicating whether the value is null.
 *
 * @example
 * // Returns true
 * isNull(null);
 *
 * // Returns false
 * isNull('false');
 */
export const isNull = (x: unknown): x is null => x === null

/**
 * Checks if a value is an array.
 *
 * @param value - The value to check.
 * @returns `true` if the value is an array, `false` otherwise.
 *
 * @example
 * // Returns true
 * isArray([12])
 *
 * // Returns false
 * isArray(12)
 *
 * // Returns true
 * isArray<string[]>(['12'])
 *
 * // Returns false
 * isArray<string[]>([12])
 */
export const isArray = <T>(x: T): x is T extends unknown[] ? T : never =>
  Array.isArray(x)

/**
 * Checks if the given value is an object.
 * @param x The value to check.
 * @returns `true` if the value is an object, `false` otherwise.
 * @example
 * // Returns true
 * isArray({ name: 'John', age: 30 })
 *
 * // Returns false
 * isArray([1, 2, 3])
 */
export const isObject = (x: unknown): x is { [k: PropertyKey]: unknown } =>
  x != null && x.constructor === Object
