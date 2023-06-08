import { describe, expect, it } from '@jest/globals'
import { isDefined } from './guards'
import { expectTypeTestsToPassAsync } from 'jest-tsd'

describe('isDefined', () => {
  it('should return true when given a number', () => {
    expect(isDefined(1)).toBe(true)
  })

  it('should return true when given a string', () => {
    expect(isDefined('foo')).toBe(true)
  })

  it('should return true when given a boolean', () => {
    expect(isDefined(true)).toBe(true)
  })

  it('should return true when given null', () => {
    expect(isDefined(null)).toBe(true)
  })

  it('should return true when given a symbol', () => {
    expect(isDefined(Symbol())).toBe(true)
  })

  it('should return true when given a class', () => {
    expect(isDefined(class {})).toBe(true)
  })

  it('should return true when given a function', () => {
    expect(isDefined(() => '')).toBe(true)
  })

  it('should return true when given a BigInt', () => {
    expect(isDefined(BigInt(9007199254740991))).toBe(true)
  })

  it('should return false when given undefined', () => {
    expect(isDefined(undefined)).toBe(false)
  })

  it('should not produce static type errors', async () => {
    await expectTypeTestsToPassAsync(__filename)
  })
})
