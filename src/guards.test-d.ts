import { describe, it, expectTypeOf } from 'vitest'
import { isDefined, isString, isNumber, isBigInt, isBool, isSymbol, isNull, isObject } from './guards' /* prettier-ignore */

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

describe('isObject', () => {
  it('should have a guard value of an object', () => {
    expectTypeOf(isObject).guards.toBeObject()
  })
})
