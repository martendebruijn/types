import { describe, it, expect } from 'vitest'
import isWeakMap from '../isWeakMap'

describe('isWeakMap', () => {
  it('should return true for a WeakMap instance', () => {
    const weakMap = new WeakMap()
    expect(isWeakMap(weakMap)).toBe(true)
  })

  it('should return false for a Map instance', () => {
    const map = new Map()
    expect(isWeakMap(map)).toBe(false)
  })

  it('should return false for an empty object', () => {
    const obj = {}
    expect(isWeakMap(obj)).toBe(false)
  })

  it('should return false for a string', () => {
    const str = 'Hello, world!'
    expect(isWeakMap(str)).toBe(false)
  })

  // Additional test case
  it('should return false for a plain object', () => {
    const obj = { key: 'value' }
    expect(isWeakMap(obj)).toBe(false)
  })
})
