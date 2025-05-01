import { describe, it, expect } from 'bun:test'
import isSymbol from '../isSymbol'

describe('isSymbol', () => {
  it('should return true when given a symbol', () => {
    const input = Symbol('foo')

    expect(isSymbol(input)).toBe(true)
  })

  it('should return false when given a number', () => {
    const input = 42

    expect(isSymbol(input)).toBe(false)
  })

  it('should return false when given a string', () => {
    const input = '42'

    expect(isSymbol(input)).toBe(false)
  })

  it('should return false when given an object', () => {
    const input = { key: 'value' }

    expect(isSymbol(input)).toBe(false)
  })

  it('should return false when given an array', () => {
    const input = [1, 2, 3, 4, 5]

    expect(isSymbol(input)).toBe(false)
  })

  it('should return false when given a boolean', () => {
    const input = true

    expect(isSymbol(input)).toBe(false)
  })

  it('should return false when given undefined', () => {
    const input = undefined

    expect(isSymbol(input)).toBe(false)
  })

  it('should return false when given null', () => {
    const input = null

    expect(isSymbol(input)).toBe(false)
  })

  it('should return false when given NaN', () => {
    const input = NaN

    expect(isSymbol(input)).toBe(false)
  })

  it('should return false when given Infinity', () => {
    const input = Infinity

    expect(isSymbol(input)).toBe(false)
  })

  it('should return false when given -Infinity', () => {
    const input = -Infinity

    expect(isSymbol(input)).toBe(false)
  })
})
