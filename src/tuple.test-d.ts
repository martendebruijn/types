import { describe, it } from '@jest/globals'
import { expectAssignable, expectNotAssignable } from 'jest-tsd'
import type { Tuple } from './tuple'

describe('tuple', () => {
  it("should verify it's a Tuple type when given a number[]", () => {
    expectAssignable<Tuple>([1, 2, 3])
  })

  it("should verify it's a Tuple type when given a string[]", () => {
    expectAssignable<Tuple>(['lorem', 'ipsum', 'dolor'])
  })

  it("should verify it's a Tuple type when given a (string | boolean)[]", () => {
    expectAssignable<Tuple>(['lorem', 'ipsum', true])
  })

  it("should verify it's a Tuple type when given a (bigint | symbol)[]", () => {
    expectAssignable<Tuple>([BigInt(9007199254740991), Symbol('foo')])
  })

  it("should verify it's NOT a Tuple type when given a string", () => {
    expectNotAssignable<Tuple>('lorem')
  })

  it("should verify it's NOT a Tuple type when given a number", () => {
    expectNotAssignable<Tuple>(12)
  })

  it("should verify it's NOT a Tuple type when given a null", () => {
    expectNotAssignable<Tuple>(null)
  })

  it("should verify it's NOT a Tuple type when given a undefined", () => {
    expectNotAssignable<Tuple>(undefined)
  })

  it("should verify it's NOT a Tuple type when given a class", () => {
    expectNotAssignable<Tuple>(class {})
  })

  it("should verify it's NOT a Tuple type when given a function", () => {
    expectNotAssignable<Tuple>(() => {})
  })

  it("should verify it's NOT a Tuple type when given a Promise", () => {
    expectNotAssignable<Tuple>(new Promise((res) => ''))
  })
})
