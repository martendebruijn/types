import { describe, it, expect } from 'bun:test'
import isNumber from '../isNumber'

describe('isNumber', () => {
  // generate test cases

  it('should return true when given a number', () => {
    const input = 42

    expect(isNumber(input)).toBe(true)
  })

  it('should return false when given a bigint', () => {
    const input = BigInt(42)

    expect(isNumber(input)).toBe(false)
  })

  it('should return true when given NaN', () => {
    const input = NaN

    expect(isNumber(input)).toBe(true)
  })

  it('should return true when given Infinity', () => {
    const input = Infinity

    expect(isNumber(input)).toBe(true)
  })

  it('should return true when given -Infinity', () => {
    const input = -Infinity

    expect(isNumber(input)).toBe(true)
  })

  it('should return false when given a string', () => {
    const input = '42'

    expect(isNumber(input)).toBe(false)
  })

  it('should return false when given an object', () => {
    const input = { key: 'value' }

    expect(isNumber(input)).toBe(false)
  })

  it('should return false when given an array', () => {
    const input = [1, 2, 3, 4, 5]

    expect(isNumber(input)).toBe(false)
  })
})
