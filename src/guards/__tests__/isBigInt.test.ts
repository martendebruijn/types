import { describe, it, expect } from 'vitest'
import isBigInt from '../isBigInt'

describe('isBigInt', () => {
  it('should return true when given a bigint', () => {
    const input = BigInt(42)

    expect(isBigInt(input)).toBe(true)
  })

  it('should return false when given a number', () => {
    const input = 42

    expect(isBigInt(input)).toBe(false)
  })

  it('should return false when given a string', () => {
    const input = '42'

    expect(isBigInt(input)).toBe(false)
  })

  it('should return false when given an object', () => {
    const input = { key: 'value' }

    expect(isBigInt(input)).toBe(false)
  })

  it('should return false when given an array', () => {
    const input = [1, 2, 3, 4, 5]

    expect(isBigInt(input)).toBe(false)
  })

  it('should return false when given a boolean', () => {
    const input = true

    expect(isBigInt(input)).toBe(false)
  })

  it('should return false when given undefined', () => {
    const input = undefined

    expect(isBigInt(input)).toBe(false)
  })
})
