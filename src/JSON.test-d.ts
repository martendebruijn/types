import { describe, test, expectTypeOf } from 'vitest'
import type { JsonValue } from './JSON'

describe('JsonValue', () => {
  test('should match the type when given a string', () =>
    expectTypeOf('').toMatchTypeOf<JsonValue>())

  test('should match the type when given a number', () =>
    expectTypeOf(10).toMatchTypeOf<JsonValue>())

  test('should match the type when given a array of numbers', () =>
    expectTypeOf([1, 2, 3, 4]).toMatchTypeOf<JsonValue>())

  test('should match the type when given a object', () =>
    expectTypeOf({ key: 'value' }).toMatchTypeOf<JsonValue>())

  test('should match the type when given true', () =>
    expectTypeOf(true).toMatchTypeOf<JsonValue>())

  test('should match the type when given false', () =>
    expectTypeOf(false).toMatchTypeOf<JsonValue>())

  test('should match the type when given null', () =>
    expectTypeOf(null).toMatchTypeOf<JsonValue>())

  test('should match the type when given a complex object', () =>
    expectTypeOf({
      a: [[1, 2, 3, 4], [{ a: 1, b: 2, c: 3 }]],
    }).toMatchTypeOf<JsonValue>())

  test('should not match the type when given a symbol', () =>
    expectTypeOf(Symbol()).not.toMatchTypeOf<JsonValue>())

  test('should not match the type when given a class', () =>
    expectTypeOf(class {}).not.toMatchTypeOf<JsonValue>())

  test('should not match the type when given a function', () =>
    expectTypeOf(() => '').not.toMatchTypeOf<JsonValue>())

  test('should not match the type when given undefined', () =>
    expectTypeOf(undefined).not.toMatchTypeOf<JsonValue>())
})
