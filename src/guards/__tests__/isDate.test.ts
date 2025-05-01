import { describe, it, expect } from 'bun:test'
import isDate from '../isDate'

describe('isDate', () => {
  it('should return true when given a Date object', () => {
    const input = new Date()

    expect(isDate(input)).toBe(true)
  })

  it('should return false when given a number', () => {
    const input = 42

    expect(isDate(input)).toBe(false)
  })

  it('should return false when given a string', () => {
    const input = '42'

    expect(isDate(input)).toBe(false)
  })

  it('should return false when given an object', () => {
    const input = { key: 'value' }

    expect(isDate(input)).toBe(false)
  })

  it('should return false when given an array', () => {
    const input = [1, 2, 3, 4, 5]

    expect(isDate(input)).toBe(false)
  })

  it('should return false when given a boolean', () => {
    const input = true

    expect(isDate(input)).toBe(false)
  })

  it('should return false when given undefined', () => {
    const input = undefined

    expect(isDate(input)).toBe(false)
  })

  it('should return false when given null', () => {
    const input = null

    expect(isDate(input)).toBe(false)
  })
})
