import { describe, expect, it } from '@jest/globals'
import { catchError } from './utils'

describe('catchError', () => {
  it("throw an error when it's an error", () => {
    const foo = () => {
      throw new Error('foo')
    }

    try {
      foo()
    } catch (error: unknown) {
      expect(() => {
        catchError(error)
      }).toThrow()
    }
  })

  it('throw an error when throwing a string', () => {
    const foo = () => {
      throw 'foo'
    }

    try {
      foo()
    } catch (error) {
      expect(() => {
        catchError(error)
      }).toThrow()
    }
  })

  it('throw an error when throwing a number', () => {
    const foo = () => {
      throw 12
    }

    try {
      foo()
    } catch (error) {
      expect(() => {
        catchError(error)
      }).toThrow()
    }
  })
})
