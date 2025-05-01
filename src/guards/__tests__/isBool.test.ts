import { describe, it, expect } from 'bun:test'
import isBool from '../isBool'

describe('isBool', () => {
  it('should return true when given a boolean', () => {
    const input = true

    expect(isBool(input)).toBe(true)
  })

  it('should return false when given a number', () => {
    const input = 42

    expect(isBool(input)).toBe(false)
  })

  it('should return false when given a string', () => {
    const input = '42'

    expect(isBool(input)).toBe(false)
  })

  it('should return false when given an object', () => {
    const input = { key: 'value' }

    expect(isBool(input)).toBe(false)
  })

  it('should return false when given an array', () => {
    const input = [1, 2, 3, 4, 5]

    expect(isBool(input)).toBe(false)
  })

  it('should return false when given undefined', () => {
    const input = undefined

    expect(isBool(input)).toBe(false)
  })

  it('should return false when given null', () => {
    const input = null

    expect(isBool(input)).toBe(false)
  })
})
