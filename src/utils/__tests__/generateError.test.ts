import { describe, it, expect } from 'vitest'
import generateError from '../generateError'

describe('generateError', () => {
  it('should return an Error object when given a string', () => {
    const input = 'Something went wrong'

    const result = generateError(input)

    expect(result instanceof Error).toBe(true)
    expect(result.message).toBe('Something went wrong')
  })

  it('should return an Error object when given an Error object', () => {
    const input = new Error('Something went wrong')

    const result = generateError(input)

    expect(result).toBe(input)
  })

  it('should return an Error object when given a number', () => {
    const input = 42

    const result = generateError(input)

    expect(result instanceof Error).toBe(true)
    expect(result.message).toBe('42')
  })

  it('should return an Error object when given a bigint', () => {
    const input = BigInt(42)

    const result = generateError(input)

    expect(result instanceof Error).toBe(true)
    expect(result.message).toBe('42')
  })

  it('should return an Error object when given an object', () => {
    const input = { key: 'value' }

    const result = generateError(input)

    expect(result instanceof Error).toBe(true)
    expect(result.message).toBe('[object Object]')
  })

  it('should return an Error object when given an array', () => {
    const input = [1, 2, 3, 4, 5]

    const result = generateError(input)

    expect(result instanceof Error).toBe(true)
    expect(result.message).toBe('1,2,3,4,5')
  })

  it('should return an Error object when given a boolean', () => {
    const input = true

    const result = generateError(input)

    expect(result instanceof Error).toBe(true)
    expect(result.message).toBe('true')
  })

  it('should return an Error object when given undefined', () => {
    const input = undefined

    const result = generateError(input)

    expect(result instanceof Error).toBe(true)
    expect(result.message).toBe('undefined')
  })

  it('should return an Error object when given null', () => {
    const input = null

    const result = generateError(input)

    expect(result instanceof Error).toBe(true)
    expect(result.message).toBe('null')
  })
})
