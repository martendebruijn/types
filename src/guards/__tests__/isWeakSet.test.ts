import { describe, it, expect } from 'bun:test'
import isWeakSet from '../isWeakSet'

describe('isWeakSet', () => {
  it('should return true for a WeakSet', () => {
    const weakSet = new WeakSet()
    expect(isWeakSet(weakSet)).toBe(true)
  })

  it('should return false for a regular Set', () => {
    const set = new Set()
    expect(isWeakSet(set)).toBe(false)
  })

  it('should return false for an empty object', () => {
    const obj = {}
    expect(isWeakSet(obj)).toBe(false)
  })

  it('should return false for an array', () => {
    const arr = [1, 2, 3]
    expect(isWeakSet(arr)).toBe(false)
  })

  it('should return false for a string', () => {
    const str = 'hello'
    expect(isWeakSet(str)).toBe(false)
  })

  it('should return false for a number', () => {
    const num = 42
    expect(isWeakSet(num)).toBe(false)
  })

  it('should return false for a boolean', () => {
    const bool = true
    expect(isWeakSet(bool)).toBe(false)
  })

  it('should return false for null', () => {
    const value = null
    expect(isWeakSet(value)).toBe(false)
  })

  it('should return false for undefined', () => {
    const value = undefined
    expect(isWeakSet(value)).toBe(false)
  })
})
