import { describe, it, expect } from 'vitest'
import isObject from '../isObject'

describe('isObject', () => {
  it('should return true when given an object', () => {
    const input = { key: 'value' }

    expect(isObject(input)).toBe(true)
  })

  it('should return false when given a number', () => {
    const input = 42

    expect(isObject(input)).toBe(false)
  })

  it('should return false when given a string', () => {
    const input = '42'

    expect(isObject(input)).toBe(false)
  })

  it('should return false when given an array', () => {
    const input = [1, 2, 3, 4, 5]

    expect(isObject(input)).toBe(false)
  })

  it('should return false when given a boolean', () => {
    const input = true

    expect(isObject(input)).toBe(false)
  })

  it('should return false when given undefined', () => {
    const input = undefined

    expect(isObject(input)).toBe(false)
  })
})
