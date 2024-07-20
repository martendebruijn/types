import { describe, it, expect } from 'vitest'
import isMap from '../isMap'

describe('isMap', () => {
  it('should return true if the input is a Map', () => {
    const map = new Map()
    expect(isMap(map)).toBe(true)
  })

  it('should return false if the input is not a Map', () => {
    const obj = { key: 'value' }
    expect(isMap(obj)).toBe(false)
  })
})
