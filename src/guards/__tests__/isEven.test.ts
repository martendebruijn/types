import { describe, it, expect } from 'vitest'
import isEven from '../isEven'

describe('isEven', () => {
  it('should return true when given an even number', () => {
    const input = 2
    const input2 = 4
    const input3 = 6
    const input4 = 8
    const input5 = 10
    const input6 = 12
    const input7 = 14

    expect(isEven(input)).toBe(true)
    expect(isEven(input2)).toBe(true)
    expect(isEven(input3)).toBe(true)
    expect(isEven(input4)).toBe(true)
    expect(isEven(input5)).toBe(true)
    expect(isEven(input6)).toBe(true)
    expect(isEven(input7)).toBe(true)
  })

  it('should return false when given an uneven number', () => {
    const input = 3
    const input2 = 5
    const input3 = 7
    const input4 = 9
    const input5 = 11
    const input6 = 13
    const input7 = 15

    expect(isEven(input)).toBe(false)
    expect(isEven(input2)).toBe(false)
    expect(isEven(input3)).toBe(false)
    expect(isEven(input4)).toBe(false)
    expect(isEven(input5)).toBe(false)
    expect(isEven(input6)).toBe(false)
    expect(isEven(input7)).toBe(false)
  })

  it('should return false when given a string', () => {
    const input = '42'

    expect(isEven(input)).toBe(false)
  })

  it('should return false when given an object', () => {
    const input = { key: 'value' }

    expect(isEven(input)).toBe(false)
  })

  it('should return false when given an array', () => {
    const input = [1, 2, 3, 4, 5]

    expect(isEven(input)).toBe(false)
  })

  it('should return false when given a boolean', () => {
    const input = true

    expect(isEven(input)).toBe(false)
  })

  it('should return false when given undefined', () => {
    const input = undefined

    expect(isEven(input)).toBe(false)
  })

  it('should return true when given an even negative number', () => {
    const input = -2

    expect(isEven(input)).toBe(true)
  })

  it('should return false when given an odd negative number', () => {
    const input = -1

    expect(isEven(input)).toBe(false)
  })

  it('should return false when given a floating point number', () => {
    const input = 2.5

    expect(isEven(input)).toBe(false)
  })

  it('should return false when given NaN', () => {
    const input = NaN

    expect(isEven(input)).toBe(false)
  })

  it('should return false when given Infinity', () => {
    const input = Infinity

    expect(isEven(input)).toBe(false)
  })

  it('should return false when given -Infinity', () => {
    const input = -Infinity

    expect(isEven(input)).toBe(false)
  })

  it('should return false when given null', () => {
    const input = null

    expect(isEven(input)).toBe(false)
  })

  it('should return false when given an empty string', () => {
    const input = ''

    expect(isEven(input)).toBe(false)
  })
})
