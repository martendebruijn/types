import { describe, it, expect } from 'vitest'
import isNan from '../isNan'

describe('isNan', () => {
  it('should return true when given NaN', () => {
    const input = NaN

    expect(isNan(input)).toBe(true)
  })

  it('should return false when given a number', () => {
    const input = 42

    expect(isNan(input)).toBe(false)
  })

  it('should return false when given a string', () => {
    const input = '42'

    expect(isNan(input)).toBe(false)
  })

  it('should return false when given an object', () => {
    const input = { key: 'value' }

    expect(isNan(input)).toBe(false)
  })

  it('should return false when given an array', () => {
    const input = [1, 2, 3, 4, 5]

    expect(isNan(input)).toBe(false)
  })

  it('should return false when given a boolean', () => {
    const input = true

    expect(isNan(input)).toBe(false)
  })

  it('should return false when given undefined', () => {
    const input = undefined

    expect(isNan(input)).toBe(false)
  })
})
