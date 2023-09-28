import { describe, test, expect } from 'vitest'
import { generateError } from './utils'

describe('catchError', () => {
  test('should return an error when given an error', () => {
    expect(generateError(new Error('foo'))).toStrictEqual(new Error('foo'))
  })

  test('should return an error when given a string', () => {
    expect(generateError('foo')).toStrictEqual(new Error('foo'))
  })
})
