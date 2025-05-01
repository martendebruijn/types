import { describe, it, expect } from 'bun:test'
import isDefined from '../isDefined'

describe('isDefined', () => {
  it('should return false when given undefined', () => {
    const input = undefined

    expect(isDefined(input)).toBe(false)
  })

  it('should return true when given null', () => {
    const input = null

    expect(isDefined(input)).toBe(true)
  })

  it('should return true when given a number', () => {
    const input = 42

    expect(isDefined(input)).toBe(true)
  })

  it('should return true when given a string', () => {
    const input = '42'

    expect(isDefined(input)).toBe(true)
  })

  it('should return true when given an object', () => {
    const input = { key: 'value' }

    expect(isDefined(input)).toBe(true)
  })

  it('should return true when given an array', () => {
    const input = [1, 2, 3, 4, 5]

    expect(isDefined(input)).toBe(true)
  })

  it('should return true when given a boolean', () => {
    const input = true

    expect(isDefined(input)).toBe(true)
  })
})
