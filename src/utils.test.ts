import { describe, expect, it } from '@jest/globals'
import { generateError } from './utils'

describe('catchError', () => {
  it('should return an error when given an error', () => {
    expect(generateError(new Error('foo'))).toStrictEqual(new Error('foo'))
  })

  it('should return an error when given a string', () => {
    expect(generateError('foo')).toStrictEqual(new Error('foo'))
  })
})
