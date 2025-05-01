import { describe, it, expect } from 'bun:test'
import isInteger from '../isInteger'

describe('isInteger', () => {
  it('should return false when given a float', () => {
    const input = 0.5
    const input2 = 1.5
    const input3 = -0.5
    const input4 = -1.5

    expect(isInteger(input)).toBe(false)
    expect(isInteger(input2)).toBe(false)
    expect(isInteger(input3)).toBe(false)
    expect(isInteger(input4)).toBe(false)
  })

  it('should return true when given an integer', () => {
    const input = 0
    const input2 = 1
    const input3 = -1

    expect(isInteger(input)).toBe(true)
    expect(isInteger(input2)).toBe(true)
    expect(isInteger(input3)).toBe(true)
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

    expect(isInteger(input)).toBe(false)
    expect(isInteger(input2)).toBe(false)
    expect(isInteger(input3)).toBe(false)
    expect(isInteger(input4)).toBe(false)
    expect(isInteger(input5)).toBe(false)
    expect(isInteger(input6)).toBe(false)
    expect(isInteger(input7)).toBe(false)
    expect(isInteger(input8)).toBe(false)
    expect(isInteger(input9)).toBe(false)
  })

  it('should return false when given NaN', () => {
    const input = NaN

    expect(isInteger(input)).toBe(false)
  })

  it('should return false when given Infinity or negative Infinity', () => {
    const input = Infinity
    const input2 = -Infinity

    expect(isInteger(input)).toBe(false)
    expect(isInteger(input2)).toBe(false)
  })
})
