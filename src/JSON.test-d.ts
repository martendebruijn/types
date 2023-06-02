import { describe, it } from '@jest/globals'
import { expectAssignable, expectNotAssignable } from 'jest-tsd'
import type { JSONValue } from './JSON'

describe('JSONValue', () => {
  it('should return true when given a string', () =>
    expectAssignable<JSONValue>(''))

  it('should return true when given a number', () =>
    expectAssignable<JSONValue>(10))

  it('should return true when given a array of numbers', () =>
    expectAssignable<JSONValue>([1, 2, 3, 4]))

  it('should return true when given a object', () =>
    expectAssignable<JSONValue>({ key: 'value' }))

  it('should return true when given true', () =>
    expectAssignable<JSONValue>(true))

  it('should return true when given false', () =>
    expectAssignable<JSONValue>(false))

  it('should return true when given null', () =>
    expectAssignable<JSONValue>(null))

  it('should return true when given a complex object', () =>
    expectAssignable<JSONValue>({
      a: [[1, 2, 3, 4], [{ a: 1, b: 2, c: 3 }]],
    }))

  it('should return false when given a symbol', () =>
    expectNotAssignable<JSONValue>(Symbol()))

  it('should return false when given a class', () =>
    expectNotAssignable<JSONValue>(class {}))

  it('should return false when given a function', () =>
    expectNotAssignable<JSONValue>(() => ''))

  it('should return false when given undefined', () =>
    expectNotAssignable<JSONValue>(undefined))
})
