import { describe, test, expectTypeOf } from 'vitest'
import { isDefined, isString, isNumber, isBigInt, isBool, isSymbol, isNull } from './guards' /* prettier-ignore */

test('isDefined should have a guard value of the type parameter', () => {
  expectTypeOf(isDefined<string>).guards.toBeString()
  expectTypeOf(isDefined<number>).guards.toBeNumber()
  expectTypeOf(isDefined<boolean>).guards.toBeBoolean()
  expectTypeOf(isDefined<null>).guards.toBeNull()
})

test('isString should have a guard value of string', () => {
  expectTypeOf(isString).guards.toBeString()
})

test('isNumber should have a guard value of number', () => {
  expectTypeOf(isNumber).guards.toBeNumber()
})

test('isBigint should have a guard value of bigint', () => {
  expectTypeOf(isBigInt).guards.toMatchTypeOf<bigint>()
})

test('isDefined should have a guard value of boolean', () => {
  expectTypeOf(isBool).guards.toBeBoolean()
})

test('isDefined should have a guard value of symbol', () => {
  expectTypeOf(isSymbol).guards.toBeSymbol()
})

test('isDefined should have a guard value of null', () => {
  expectTypeOf(isNull).guards.toBeNull()
})
