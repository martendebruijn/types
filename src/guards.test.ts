import { describe, it, expect } from 'vitest'
import { isDefined, isString, isNumber, isBigInt, isBool, isSymbol, isNull, isArray  } from './guards' /* prettier-ignore */

describe('isDefined', () => {
  it('should return true when given a number', () => {
    expect(isDefined(1)).toBe(true)
  })

  it('should return true when given a string', () => {
    expect(isDefined('foo')).toBe(true)
  })

  it('should return true when given a boolean', () => {
    expect(isDefined(true)).toBe(true)
  })

  it('should return true when given null', () => {
    expect(isDefined(null)).toBe(true)
  })

  it('should return true when given a symbol', () => {
    expect(isDefined(Symbol())).toBe(true)
  })

  it('should return true when given a class', () => {
    expect(isDefined(class {})).toBe(true)
  })

  it('should return true when given a function', () => {
    expect(isDefined(() => '')).toBe(true)
  })

  it('should return true when given a BigInt', () => {
    expect(isDefined(BigInt(9007199254740991))).toBe(true)
  })

  it('should return false when given undefined', () => {
    expect(isDefined(undefined)).toBe(false)
  })
})

describe('isString', () => {
  it('should return true when given a string', () => {
    expect(isString('lorem ipsum')).toBe(true)
    expect(isString('')).toBe(true)
  })

  it('should return false when given a number', () => {
    expect(isString(12)).toBe(false)
    expect(isString(0)).toBe(false)
    expect(isString(-0)).toBe(false)
    expect(isString(NaN)).toBe(false)
  })

  it('should return false when given a boolean', () => {
    expect(isString(true)).toBe(false)
    expect(isString(false)).toBe(false)
  })

  it('should return false when given a null', () => {
    expect(isString(null)).toBe(false)
  })

  it('should return false when given a symbol', () => {
    expect(isString(Symbol())).toBe(false)
    expect(isString(Symbol('lorem ipsum'))).toBe(false)
  })

  it('should return false when given a undefined', () => {
    expect(isString(undefined)).toBe(false)
  })
})

describe('isNumber', () => {
  it('should return true when given a number', () => {
    expect(isNumber(12)).toBe(true)
    expect(isNumber(0)).toBe(true)
    expect(isNumber(-0)).toBe(true)
    expect(isNumber(NaN)).toBe(true)
  })

  it('should return false when given a string', () => {
    expect(isNumber('lorem ipsum')).toBe(false)
    expect(isNumber('')).toBe(false)
  })

  it('should return false when given a boolean', () => {
    expect(isNumber(true)).toBe(false)
    expect(isNumber(false)).toBe(false)
  })

  it('should return false when given a null', () => {
    expect(isNumber(null)).toBe(false)
  })

  it('should return false when given a symbol', () => {
    expect(isNumber(Symbol())).toBe(false)
    expect(isNumber(Symbol('lorem ipsum'))).toBe(false)
  })

  it('should return false when given a undefined', () => {
    expect(isNumber(undefined)).toBe(false)
  })
})

describe('isBigInt', () => {
  it('should return true when given a bigint', () => {
    expect(isBigInt(0n)).toBe(true)
    expect(isBigInt(10n)).toBe(true)
  })

  it('should return false when given a number', () => {
    expect(isBigInt(12)).toBe(false)
    expect(isBigInt(0)).toBe(false)
    expect(isBigInt(-0)).toBe(false)
    expect(isBigInt(NaN)).toBe(false)
  })

  it('should return false when given a string', () => {
    expect(isBigInt('lorem ipsum')).toBe(false)
    expect(isBigInt('')).toBe(false)
  })

  it('should return false when given a boolean', () => {
    expect(isBigInt(true)).toBe(false)
    expect(isBigInt(false)).toBe(false)
  })

  it('should return false when given a null', () => {
    expect(isBigInt(null)).toBe(false)
  })

  it('should return false when given a symbol', () => {
    expect(isBigInt(Symbol())).toBe(false)
    expect(isBigInt(Symbol('lorem ipsum'))).toBe(false)
  })

  it('should return false when given a undefined', () => {
    expect(isBigInt(undefined)).toBe(false)
  })
})

describe('isBool', () => {
  it('should return true when given a boolean', () => {
    expect(isBool(true)).toBe(true)
    expect(isBool(false)).toBe(true)
  })

  it('should return false when given a bigint', () => {
    expect(isBool(0n)).toBe(false)
    expect(isBool(10n)).toBe(false)
  })

  it('should return false when given a number', () => {
    expect(isBool(12)).toBe(false)
    expect(isBool(0)).toBe(false)
    expect(isBool(-0)).toBe(false)
    expect(isBool(NaN)).toBe(false)
  })

  it('should return false when given a string', () => {
    expect(isBool('lorem ipsum')).toBe(false)
    expect(isBool('')).toBe(false)
  })

  it('should return false when given a null', () => {
    expect(isBool(null)).toBe(false)
  })

  it('should return false when given a symbol', () => {
    expect(isBool(Symbol())).toBe(false)
    expect(isBool(Symbol('lorem ipsum'))).toBe(false)
  })

  it('should return false when given a undefined', () => {
    expect(isBool(undefined)).toBe(false)
  })
})

describe('isSymbol', () => {
  it('should return true when given a symbol', () => {
    expect(isSymbol(Symbol())).toBe(true)
    expect(isSymbol(Symbol('lorem ipsum'))).toBe(true)
  })

  it('should return false when given a boolean', () => {
    expect(isSymbol(true)).toBe(false)
    expect(isSymbol(false)).toBe(false)
  })

  it('should return false when given a bigint', () => {
    expect(isSymbol(0n)).toBe(false)
    expect(isSymbol(10n)).toBe(false)
  })

  it('should return false when given a number', () => {
    expect(isSymbol(12)).toBe(false)
    expect(isSymbol(0)).toBe(false)
    expect(isSymbol(-0)).toBe(false)
    expect(isSymbol(NaN)).toBe(false)
  })

  it('should return false when given a string', () => {
    expect(isSymbol('lorem ipsum')).toBe(false)
    expect(isSymbol('')).toBe(false)
  })

  it('should return false when given a null', () => {
    expect(isSymbol(null)).toBe(false)
  })

  it('should return false when given a undefined', () => {
    expect(isSymbol(undefined)).toBe(false)
  })
})

describe('isNull', () => {
  it('should return true when given a null', () => {
    expect(isNull(null)).toBe(true)
  })

  it('should return false when given a symbol', () => {
    expect(isNull(Symbol())).toBe(false)
    expect(isNull(Symbol('lorem ipsum'))).toBe(false)
  })

  it('should return false when given a boolean', () => {
    expect(isNull(true)).toBe(false)
    expect(isNull(false)).toBe(false)
  })

  it('should return false when given a bigint', () => {
    expect(isNull(0n)).toBe(false)
    expect(isNull(10n)).toBe(false)
  })

  it('should return false when given a number', () => {
    expect(isNull(12)).toBe(false)
    expect(isNull(0)).toBe(false)
    expect(isNull(-0)).toBe(false)
    expect(isNull(NaN)).toBe(false)
  })

  it('should return false when given a string', () => {
    expect(isNull('lorem ipsum')).toBe(false)
    expect(isNull('')).toBe(false)
  })

  it('should return false when given a undefined', () => {
    expect(isNull(undefined)).toBe(false)
  })
})

describe('isArray', () => {
  it('should return true when given an array', () => {
    expect(isArray([])).toBe(true)
    expect(isArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(true)
    expect(isArray([true, false, true])).toBe(true)
    expect(isArray([undefined, null])).toBe(true)
    expect(isArray(['hello', 'world'])).toBe(true)
    expect(
      isArray([
        { foo: 12, bar: { baz: 30 } },
        { foo: 12, bar: { baz: 30 } },
      ])
    ).toBe(true)
    expect(isArray([Symbol(), Symbol()])).toBe(true)
  })

  it('should return false when given something else than an array', () => {
    expect(isArray(1)).toBe(false)
    expect(isArray('hello world')).toBe(false)
    expect(isArray(0n)).toBe(false)
    expect(isArray(Symbol())).toBe(false)
    expect(isArray(new (class {})())).toBe(false)
    expect(isArray(() => {})).toBe(false)
    expect(isArray(undefined)).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray(NaN)).toBe(false)
    expect(
      isArray({ foo: 12, bar: true, baz: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] })
    ).toBe(false)
  })
})
