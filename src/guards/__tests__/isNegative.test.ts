import { describe, it, expect } from 'vitest'
import isNegative from '../isNegative'

describe('isNegative', () => {
  it('should return false when given a positive integer', () => {
    const input = 1

    expect(isNegative(input)).toBe(false)
  })

  it('should return false when given a positive float', () => {
    const input = 1.25

    expect(isNegative(input)).toBe(false)
  })

  it('should return true when given a false Infinity', () => {
    const input = Infinity

    expect(isNegative(input)).toBe(false)
  })

  it('should return false when given a 0', () => {
    const input = 0

    expect(isNegative(input)).toBe(false)
  })

  it('should return true when given a negative integer', () => {
    const input = -1

    expect(isNegative(input)).toBe(true)
  })

  it('should return true when given a negative float', () => {
    const input = -1.25

    expect(isNegative(input)).toBe(true)
  })

  it('should return true when given a negative Infinity', () => {
    const input = -Infinity

    expect(isNegative(input)).toBe(true)
  })

  it('should return true when given a negative 0', () => {
    const input = -0

    expect(isNegative(input)).toBe(true)
  })
})
