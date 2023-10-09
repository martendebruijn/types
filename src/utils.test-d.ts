import { describe, it, expectTypeOf } from 'vitest'
import { PartialBy } from './utils'

describe('PartialBy', () => {
  it("should give an error when K isn't a key of T", () => {})

  it("should give an error when T isn't an object/interface", () => {})

  describe('when given an interface', () => {
    describe('when given one key', () => {
      it('should allow an object without K', () => {})

      it('should allow an object with K', () => {})

      it('should disallow an object with different keys than T has', () => {})
    })

    describe('when given two keys', () => {
      it('should allow an object without K', () => {})

      it('should allow an object with K', () => {})

      it('should disallow an object with different keys than T has', () => {})
    })

    describe('when given three or more keys', () => {
      it('should allow an object without K', () => {})

      it('should allow an object with K', () => {})

      it('should disallow an object with different keys than T has', () => {})
    })
  })

  describe('when given a type', () => {
    describe('when given one key', () => {
      it('should allow an object without K', () => {})

      it('should allow an object with K', () => {})

      it('should disallow an object with different keys than T has', () => {})
    })

    describe('when given two keys', () => {
      it('should allow an object without K', () => {})

      it('should allow an object with K', () => {})

      it('should disallow an object with different keys than T has', () => {})
    })

    describe('when given three or more keys', () => {
      it('should allow an object without K', () => {})

      it('should allow an object with K', () => {})

      it('should disallow an object with different keys than T has', () => {})
    })
  })
})
