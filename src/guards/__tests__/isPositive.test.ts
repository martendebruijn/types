import { describe, it, expect } from 'bun:test'
import isPositive from '../isPositive'

describe('isPositive', () => {
  it('should return true when given a positive integer', () => {
    const input = 1

    expect(isPositive(input)).toBe(true)
  })

  it('should return true when given a positive float', () => {
    const input = 1.25

    expect(isPositive(input)).toBe(true)
  })

  it('should return true when given a positive Infinity', () => {
    const input = Infinity

    expect(isPositive(input)).toBe(true)
  })

  it('should return true when given a 0', () => {
    const input = 0

    expect(isPositive(input)).toBe(true)
  })

  it('should return false when given a negative integer', () => {
    const input = -1

    expect(isPositive(input)).toBe(false)
  })

  it('should return false when given a negative float', () => {
    const input = -1.25

    expect(isPositive(input)).toBe(false)
  })

  it('should return false when given a negative Infinity', () => {
    const input = -Infinity

    expect(isPositive(input)).toBe(false)
  })

  it('should return false when given a negative 0', () => {
    const input = -0

    expect(isPositive(input)).toBe(false)
  })

  it('should return false when given a string', () => {
    const input = 'foobar'

    expect(isPositive(input)).toBe(false)
  })

  it('should return false when given a symbol', () => {
    const input = Symbol('foobar')

    expect(isPositive(input)).toBe(false)
  })
})
