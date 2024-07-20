import { describe, it, expect } from 'vitest'
import isNull from '../isNull'

describe('isNull', () => {
  it('should return true when given null', () => {
    const input = null

    expect(isNull(input)).toBe(true)
  })

  it('should return false when given a number', () => {
    const input = 42

    expect(isNull(input)).toBe(false)
  })

  it('should return false when given a string', () => {
    const input = '42'

    expect(isNull(input)).toBe(false)
  })

  it('should return false when given an object', () => {
    const input = { key: 'value' }

    expect(isNull(input)).toBe(false)
  })

  it('should return false when given an array', () => {
    const input = [1, 2, 3, 4, 5]

    expect(isNull(input)).toBe(false)
  })

  it('should return false when given a boolean', () => {
    const input = true

    expect(isNull(input)).toBe(false)
  })

  it('should return false when given undefined', () => {
    const input = undefined

    expect(isNull(input)).toBe(false)
  })
})
