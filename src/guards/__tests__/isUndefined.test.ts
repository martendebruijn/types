import { describe, it, expect } from 'bun:test'
import isUndefined from '../isUndefined'

describe('isUndefined', () => {
  it('should return true when given undefined', () => {
    const input = undefined

    expect(isUndefined(input)).toBe(true)
  })

  it('should return false when given a number', () => {
    const input = 42

    expect(isUndefined(input)).toBe(false)
  })

  it('should return false when given a string', () => {
    const input = '42'

    expect(isUndefined(input)).toBe(false)
  })

  it('should return false when given an object', () => {
    const input = { key: 'value' }

    expect(isUndefined(input)).toBe(false)
  })

  it('should return false when given an array', () => {
    const input = [1, 2, 3, 4, 5]

    expect(isUndefined(input)).toBe(false)
  })

  it('should return false when given a boolean', () => {
    const input = true

    expect(isUndefined(input)).toBe(false)
  })

  it('should return false when given null', () => {
    const input = null

    expect(isUndefined(input)).toBe(false)
  })

  it('should return false when given NaN', () => {
    const input = NaN

    expect(isUndefined(input)).toBe(false)
  })

  it('should return false when given Infinity', () => {
    const input = Infinity

    expect(isUndefined(input)).toBe(false)
  })
})
