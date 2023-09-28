import { describe, test, expectTypeOf } from 'vitest'
import type { Tuple } from './tuple'

describe('tuple', () => {
  test("should verify it's a Tuple type when given a number[]", () =>
    expectTypeOf([1, 2, 3]).toMatchTypeOf<Tuple>())

  test("should verify it's a Tuple type when given a string[]", () =>
    expectTypeOf(['lorem', 'ipsum', 'dolor']).toMatchTypeOf<Tuple>())

  test("should verify it's a Tuple type when given a (string | boolean)[]", () =>
    expectTypeOf(['lorem', 'ipsum', true]).toMatchTypeOf<Tuple>())

  test("should verify it's a Tuple type when given a (bigint | symbol)[]", () =>
    expectTypeOf([
      BigInt(9007199254740991),
      Symbol('foo'),
    ]).toMatchTypeOf<Tuple>())

  test("should verify it's NOT a Tuple type when given a string", () =>
    expectTypeOf('lorem').not.toMatchTypeOf<Tuple>())

  test("should verify it's NOT a Tuple type when given a number", () =>
    expectTypeOf(12).not.toMatchTypeOf<Tuple>())

  test("should verify it's NOT a Tuple type when given a null", () =>
    expectTypeOf(null).not.toMatchTypeOf<Tuple>())

  test("should verify it's NOT a Tuple type when given a undefined", () =>
    expectTypeOf(undefined).not.toMatchTypeOf<Tuple>())

  test("should verify it's NOT a Tuple type when given a class", () =>
    expectTypeOf(class {}).not.toMatchTypeOf<Tuple>())

  test("should verify it's NOT a Tuple type when given a function", () =>
    expectTypeOf(() => {}).not.toMatchTypeOf<Tuple>())

  test("should verify it's NOT a Tuple type when given a Promise", () =>
    expectTypeOf(new Promise((res) => '')).not.toMatchTypeOf<Tuple>())
})
