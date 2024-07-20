import { describe, it, expect } from 'vitest'
import isString from '../isString'

describe('isString', () => {
  it('should return true when given a string', () => {
    const input = '42'

    expect(isString(input)).toBe(true)
  })

  it('should return false when given a number', () => {
    const input = 42

    expect(isString(input)).toBe(false)
  })

  it('should return false when given a bigint', () => {
    const input = BigInt(42)

    expect(isString(input)).toBe(false)
  })

  it('should return false when given an object', () => {
    const input = { key: 'value' }

    expect(isString(input)).toBe(false)
  })

  it('should return false when given an array', () => {
    const input = [1, 2, 3, 4, 5]

    expect(isString(input)).toBe(false)
  })

  it('should return false when given a boolean', () => {
    const input = true

    expect(isString(input)).toBe(false)
  })

  it('should return false when given undefined', () => {
    const input = undefined

    expect(isString(input)).toBe(false)
  })

  it('should return false when given null', () => {
    const input = null

    expect(isString(input)).toBe(false)
  })
})
