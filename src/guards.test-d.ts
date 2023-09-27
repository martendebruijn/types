import { describe, it } from '@jest/globals'
import { expectType } from 'jest-tsd'
import { isDefined, isString, isNumber, isBigInt, isBool, isSymbol, isNull } from './guards' /* prettier-ignore */

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

describe('isString', () => {
  it('should be of type string when given a string', () => {
    const input = 'lorem ipsum' as string

    if (isString(input)) {
      expectType<string>(input)
    }
  })

  it('should not be of type string when given a number', () => {
    const input = 12

    if (isString(input)) {
      expectType<never>(input)
    }
  })

  it('should not be of type string when given a symbol', () => {
    const input = Symbol('lorem ipsum')

    if (isString(input)) {
      expectType<never>(input)
    }
  })

  it('should not be of type string when given a boolean', () => {
    const input = false

    if (isString(input)) {
      expectType<never>(input)
    }
  })
})

describe('isNumber', () => {
  it('should be of type number when given a number', () => {
    const input = 12 as number

    if (isNumber(input)) {
      expectType<number>(input)
    }
  })

  it('should not be of type number when given a string', () => {
    const input = 'lorem ipsum'

    if (isNumber(input)) {
      expectType<never>(input)
    }
  })

  it('should not be of type number when given a boolean', () => {
    const input = false

    if (isNumber(input)) {
      expectType<never>(input)
    }
  })

  it('should not be of type number when given a symbol', () => {
    const input = Symbol('lorem ipsum')

    if (isNumber(input)) {
      expectType<never>(input)
    }
  })
})

// Will fail with jest-dts
describe.skip('isBigInt', () => {
  it('should be of type bigint when given a bigint', () => {})

  it('should not be of type bigint when given a boolean', () => {})

  it('should not be of type bigint when given a string', () => {})

  it('should not be of type bigint when given a number', () => {})

  it('should not be of type bigint when given a symbol', () => {})
})

describe('isBool', () => {
  it('should be of type boolean when given a boolean', () => {
    const input = false as boolean

    if (isBool(input)) {
      expectType<boolean>(input)
    }
  })

  it('should not be of type boolean when given a string', () => {
    const input = 'lorem ipsum'

    if (isBool(input)) {
      expectType<never>(input)
    }
  })

  it('should not be of type boolean when given a number', () => {
    const input = 12

    if (isBool(input)) {
      expectType<never>(input)
    }
  })

  it('should not be of type boolean when given a symbol', () => {
    const input = Symbol('lorem ipsum')

    if (isBool(input)) {
      expectType<never>(input)
    }
  })
})

describe('isSymbol', () => {
  it('should be of type symbol when given a symbol', () => {
    const input = Symbol('lorem ipsum') as symbol

    if (isSymbol(input)) {
      expectType<symbol>(input)
    }
  })

  it('should be of type symbol when given a string', () => {
    const input = 'lorem ipsum'

    if (isSymbol(input)) {
      expectType<never>(input)
    }
  })

  it('should be of type symbol when given a number', () => {
    const input = 12

    if (isSymbol(input)) {
      expectType<never>(input)
    }
  })

  it('should be of type symbol when given null', () => {
    const input = null

    if (isSymbol(input)) {
      expectType<never>(input)
    }
  })
})

describe('isNull', () => {
  it('should be of type null when given null', () => {
    const input = null as null

    if (isNull(input)) {
      expectType<null>(input)
    }
  })

  it('should not be of type null when given string', () => {
    const input = 'lorem ipsum'

    if (isNull(input)) {
      expectType<never>(input)
    }
  })

  it('should not be of type null when given number', () => {
    const input = 12

    if (isNull(input)) {
      expectType<never>(input)
    }
  })

  it('should not be of type null when given boolean', () => {
    const input = false

    if (isNull(input)) {
      expectType<never>(input)
    }
  })

  it('should not be of type null when given symbol', () => {
    const input = Symbol('lorem ipsum')

    if (isNull(input)) {
      expectType<never>(input)
    }
  })
})
