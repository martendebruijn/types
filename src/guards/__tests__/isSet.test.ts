import { describe, it, expect } from 'vitest'
import isSet from '../isSet'

describe('isSet', () => {
  it('should return true for a Set', () => {
    const weakSet = new Set()
    expect(isSet(weakSet)).toBe(true)
  })

  it('should return false for a Weak Set', () => {
    const set = new WeakSet()
    expect(isSet(set)).toBe(false)
  })

  it('should return false for an empty object', () => {
    const obj = {}
    expect(isSet(obj)).toBe(false)
  })

  it('should return false for an array', () => {
    const arr = [1, 2, 3]
    expect(isSet(arr)).toBe(false)
  })

  it('should return false for a string', () => {
    const str = 'hello'
    expect(isSet(str)).toBe(false)
  })

  it('should return false for a number', () => {
    const num = 42
    expect(isSet(num)).toBe(false)
  })

  it('should return false for a boolean', () => {
    const bool = true
    expect(isSet(bool)).toBe(false)
  })

  it('should return false for null', () => {
    const value = null
    expect(isSet(value)).toBe(false)
  })

  it('should return false for undefined', () => {
    const value = undefined
    expect(isSet(value)).toBe(false)
  })
})
