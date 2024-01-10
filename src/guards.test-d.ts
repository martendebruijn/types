import { describe, it, expectTypeOf } from 'vitest'
import { isDefined, isString, isNumber, isBigInt, isBool, isSymbol, isNull, isArray, isObject } from './guards' /* prettier-ignore */

describe('isDefined', () => {
  it('should have a guard value of the type parameter', () => {
    expectTypeOf(isDefined<string>).guards.toBeString()
    expectTypeOf(isDefined<number>).guards.toBeNumber()
    expectTypeOf(isDefined<boolean>).guards.toBeBoolean()
    expectTypeOf(isDefined<null>).guards.toBeNull()
  })
})

describe('isString', () => {
  it('should have a guard value of string', () => {
    expectTypeOf(isString).guards.toBeString()
  })
})

describe('isNumber', () => {
  it('should have a guard value of number', () => {
    expectTypeOf(isNumber).guards.toBeNumber()
  })
})

describe('isBigInt', () => {
  it('should have a guard value of bigint', () => {
    expectTypeOf(isBigInt).guards.toMatchTypeOf<bigint>()
  })
})

describe('isBool', () => {
  it('should have a guard value of boolean', () => {
    expectTypeOf(isBool).guards.toBeBoolean()
  })
})

describe('isSymbol', () => {
  it('should have a guard value of symbol', () => {
    expectTypeOf(isSymbol).guards.toBeSymbol()
  })
})

describe('isNull', () => {
  it('should have a guard value of null', () => {
    expectTypeOf(isNull).guards.toBeNull()
  })
})

describe('isArray', () => {
  it('should have a guard value of an array when given an array', () => {
    expectTypeOf(isArray<[]>).guards.toBeArray()
    expectTypeOf(isArray<[1, 2, 3, 4, 5]>).guards.toBeArray()
  })

  it('should have a guard value of never when given something other than an array', () => {
    expectTypeOf(isArray<number>).guards.toBeNever()
    expectTypeOf(isArray<string>).guards.toBeNever()
    expectTypeOf(isArray<{ foo: 12 }>).guards.toBeNever()
    expectTypeOf(isArray<0n>).guards.toBeNever()
    expectTypeOf(isArray<symbol>).guards.toBeNever()
    expectTypeOf(isArray<true>).guards.toBeNever()
  })

  it('should have a guard value of the type of array given', () => {
    const symbols = [Symbol(), Symbol()]

    expectTypeOf(isArray<[1, 2, 3, 4, 5]>).guards.toMatchTypeOf<number[]>()
    expectTypeOf(isArray<['hello', 'world']>).guards.toMatchTypeOf<string[]>()
    expectTypeOf(isArray<typeof symbols>).guards.toMatchTypeOf<symbol[]>()
    expectTypeOf(isArray<[1, 2, [3, 4, 5]]>).guards.toMatchTypeOf<
      (number | number[])[]
    >()
    expectTypeOf(isArray<[{ foo: 12 }, { foo: 13 }]>).guards.toMatchTypeOf<
      { foo: number }[]
    >()
  })
})

describe('isObject', () => {
  it('should have a guard value of an object', () => {
    expectTypeOf(isObject).guards.toBeObject()
  })
})
