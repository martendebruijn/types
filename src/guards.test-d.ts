import { describe, it } from '@jest/globals'
import { expectType } from 'jest-tsd'
import { isDefined } from './guards'

describe('isDefined', () => {
  it("should verify it's of type string when given a parameter of type string", () => {
    const subject: string | undefined = 'lorem'

    if (isDefined(subject)) {
      expectType<string>(subject)
    }
  })

  it('should be of type never when given a parameter of type undefined', () => {
    const subject: string | undefined = undefined

    if (!isDefined(subject)) {
      expectType<never>(subject)
    }
  })

  it("should verify it's of type null when given a parameter of type null", () => {
    const subject: null | undefined = null

    if (isDefined(subject)) {
      expectType<null>(subject)
    }
  })

  it("should verify it's of type number or number[] when given a parameter of type number or number[]", () => {
    let subject: number | number[] | undefined = 12

    if (isDefined(subject)) {
      expectType<number>(subject)
    }

    subject = [1, 2, 3]

    if (isDefined(subject)) {
      expectType<number[]>(subject)
    }

    subject = undefined

    if (!isDefined(subject)) {
      expectType<never>(subject)
    }
  })
})
