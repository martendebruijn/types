import { describe, it, expectTypeOf } from 'vitest'
import type { JsonValue } from './JSON'

describe('JsonValue', () => {
  it('should match the type when given a string', () =>
    expectTypeOf('').toMatchTypeOf<JsonValue>())

  it('should match the type when given a number', () =>
    expectTypeOf(10).toMatchTypeOf<JsonValue>())

  it('should match the type when given a array of numbers', () =>
    expectTypeOf([1, 2, 3, 4]).toMatchTypeOf<JsonValue>())

  it('should match the type when given a object', () =>
    expectTypeOf({ key: 'value' }).toMatchTypeOf<JsonValue>())

  it('should match the type when given true', () =>
    expectTypeOf(true).toMatchTypeOf<JsonValue>())

  it('should match the type when given false', () =>
    expectTypeOf(false).toMatchTypeOf<JsonValue>())

  it('should match the type when given null', () =>
    expectTypeOf(null).toMatchTypeOf<JsonValue>())

  it('should match the type when given a complex object', () =>
    expectTypeOf({
      a: [[1, 2, 3, 4], [{ a: 1, b: 2, c: 3 }]],
    }).toMatchTypeOf<JsonValue>())

  it('should not match the type when given a symbol', () =>
    expectTypeOf(Symbol()).not.toMatchTypeOf<JsonValue>())

  it('should not match the type when given a class', () =>
    expectTypeOf(class {}).not.toMatchTypeOf<JsonValue>())

  it('should not match the type when given a function', () =>
    expectTypeOf(() => '').not.toMatchTypeOf<JsonValue>())

  it('should not match the type when given undefined', () =>
    expectTypeOf(undefined).not.toMatchTypeOf<JsonValue>())
})
