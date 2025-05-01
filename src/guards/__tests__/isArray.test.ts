import { describe, it, expect } from 'bun:test'
import isArray from '../isArray'

describe('isArray', () => {
  it('should return true when given an array of numbers', () => {
    const input = [1, 2, 3, 4, 5]

    expect(isArray(input)).toBe(true)
  })

  it('should return false when given a number', () => {
    const input = 42

    expect(isArray(input)).toBe(false)
  })

  it('should return true when given an array of strings', () => {
    const input = ['Hello', 'World']

    expect(isArray(input)).toBe(true)
  })

  it('should return true when given an array of numbers and strings', () => {
    const input = [1, 'Hello', 2, 'World']

    expect(isArray(input)).toBe(true)
  })

  it('should return false when given an object', () => {
    const input = { key: 'value' }

    expect(isArray(input)).toBe(false)
  })
})
