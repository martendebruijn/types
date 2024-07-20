import { describe, it, expect } from 'vitest'
import isFloat from '../isFloat'

describe('isFloat', () => {
  it('should return true when given a float', () => {
    const input = 0.5
    const input2 = 1.5
    const input3 = -0.5
    const input4 = -1.5

    expect(isFloat(input)).toBe(true)
    expect(isFloat(input2)).toBe(true)
    expect(isFloat(input3)).toBe(true)
    expect(isFloat(input4)).toBe(true)
  })

  it('should return false when given an integer', () => {
    const input = 0
    const input2 = 1
    const input3 = -1

    expect(isFloat(input)).toBe(false)
    expect(isFloat(input2)).toBe(false)
    expect(isFloat(input3)).toBe(false)
  })

  it('should return false when given something that is not a number', () => {
    const input = undefined
    const input2 = '0.5'
    const input3 = new Set()
    const input4 = new Map()
    const input5: unknown[] = []
    const input6 = {}
    const input7 = Symbol()
    const input8 = () => {}
    const input9 = true

    expect(isFloat(input)).toBe(false)
    expect(isFloat(input2)).toBe(false)
    expect(isFloat(input3)).toBe(false)
    expect(isFloat(input4)).toBe(false)
    expect(isFloat(input5)).toBe(false)
    expect(isFloat(input6)).toBe(false)
    expect(isFloat(input7)).toBe(false)
    expect(isFloat(input8)).toBe(false)
    expect(isFloat(input9)).toBe(false)
  })

  it('should return false when given NaN', () => {
    const input = NaN

    expect(isFloat(input)).toBe(false)
  })

  it('should return false when given Infinity or negative Infinity', () => {
    const input = Infinity
    const input2 = -Infinity

    expect(isFloat(input)).toBe(false)
    expect(isFloat(input2)).toBe(false)
  })
})
