import { describe, test, expectTypeOf } from 'vitest'
import type { JSONValue } from './JSON'

describe('JSONValue', () => {
  test('should match the type when given a string', () =>
    expectTypeOf('').toMatchTypeOf<JSONValue>())

  test('should match the type when given a number', () =>
    expectTypeOf(10).toMatchTypeOf<JSONValue>())

  test('should match the type when given a array of numbers', () =>
    expectTypeOf([1, 2, 3, 4]).toMatchTypeOf<JSONValue>())

  test('should match the type when given a object', () =>
    expectTypeOf({ key: 'value' }).toMatchTypeOf<JSONValue>())

  test('should match the type when given true', () =>
    expectTypeOf(true).toMatchTypeOf<JSONValue>())

  test('should match the type when given false', () =>
    expectTypeOf(false).toMatchTypeOf<JSONValue>())

  test('should match the type when given null', () =>
    expectTypeOf(null).toMatchTypeOf<JSONValue>())

  test('should match the type when given a complex object', () =>
    expectTypeOf({
      a: [[1, 2, 3, 4], [{ a: 1, b: 2, c: 3 }]],
    }).toMatchTypeOf<JSONValue>())

  test('should not match the type when given a symbol', () =>
    expectTypeOf(Symbol()).not.toMatchTypeOf<JSONValue>())

  test('should not match the type when given a class', () =>
    expectTypeOf(class {}).not.toMatchTypeOf<JSONValue>())

  test('should not match the type when given a function', () =>
    expectTypeOf(() => '').not.toMatchTypeOf<JSONValue>())

  test('should not match the type when given undefined', () =>
    expectTypeOf(undefined).not.toMatchTypeOf<JSONValue>())
})
