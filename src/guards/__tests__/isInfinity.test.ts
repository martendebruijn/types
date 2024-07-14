import { describe, it, expect } from 'vitest'
import isInfinity from '../isInfinity'

describe('isInfinity', () => {
  it('should return true when given Infinity', () => {
    const input = Infinity

    expect(isInfinity(input)).toBe(true)
  })

  it('should return true when given -Infinity', () => {
    const input = -Infinity

    expect(isInfinity(input)).toBe(true)
  })

  it('should return false when given a number', () => {
    const input = 42

    expect(isInfinity(input)).toBe(false)
  })

  it('should return false when given a string', () => {
    const input = '42'

    expect(isInfinity(input)).toBe(false)
  })

  it('should return false when given an object', () => {
    const input = { key: 'value' }

    expect(isInfinity(input)).toBe(false)
  })

  it('should return false when given an array', () => {
    const input = [1, 2, 3, 4, 5]

    expect(isInfinity(input)).toBe(false)
  })

  it('should return false when given a boolean', () => {
    const input = true

    expect(isInfinity(input)).toBe(false)
  })

  it('should return false when given undefined', () => {
    const input = undefined

    expect(isInfinity(input)).toBe(false)
  })
})
