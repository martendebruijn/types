import { describe, it, expectTypeOf } from 'vitest'
import type { JsonValue, JsonPatchOperations, JsonPatch } from './JSON'

describe('JsonValue', () => {
  it('should match the type when given a string', () =>
    expectTypeOf('').toMatchTypeOf<JsonValue>())

  it('should match the type when given a number', () =>
    expectTypeOf(10).toMatchTypeOf<JsonValue>())

  it('should match the type when given a array of numbers', () =>
    expectTypeOf([1, 2, 3, 4]).toMatchTypeOf<JsonValue>())

  it('should match the type when given a object', () =>
    expectTypeOf({ key: 'value' }).toMatchTypeOf<JsonValue>())

  it('should match the type when given true', () =>
    expectTypeOf(true).toMatchTypeOf<JsonValue>())

  it('should match the type when given false', () =>
    expectTypeOf(false).toMatchTypeOf<JsonValue>())

  it('should match the type when given null', () =>
    expectTypeOf(null).toMatchTypeOf<JsonValue>())

  it('should match the type when given a complex object', () =>
    expectTypeOf({
      a: [[1, 2, 3, 4], [{ a: 1, b: 2, c: 3 }]],
    }).toMatchTypeOf<JsonValue>())

  it('should not match the type when given a symbol', () =>
    expectTypeOf(Symbol()).not.toMatchTypeOf<JsonValue>())

  it('should not match the type when given a class', () =>
    expectTypeOf(class {}).not.toMatchTypeOf<JsonValue>())

  it('should not match the type when given a function', () =>
    expectTypeOf(() => '').not.toMatchTypeOf<JsonValue>())

  it('should not match the type when given undefined', () =>
    expectTypeOf(undefined).not.toMatchTypeOf<JsonValue>())
})

describe('JsonPatchOperations', () => {
  it('should allow all JSON patch operations', () => {
    expectTypeOf('add' as const).toMatchTypeOf<JsonPatchOperations>()
    expectTypeOf('remove' as const).toMatchTypeOf<JsonPatchOperations>()
    expectTypeOf('replace' as const).toMatchTypeOf<JsonPatchOperations>()
    expectTypeOf('copy' as const).toMatchTypeOf<JsonPatchOperations>()
    expectTypeOf('move' as const).toMatchTypeOf<JsonPatchOperations>()
    expectTypeOf('it' as const).toMatchTypeOf<JsonPatchOperations>()
  })

  it('should not allow operations that are not valid JSON patch operations', () => {
    expectTypeOf('duplicate' as const).not.toMatchTypeOf<JsonPatchOperations>()
    expectTypeOf('ad' as const).not.toMatchTypeOf<JsonPatchOperations>()
    expectTypeOf('reomve' as const).not.toMatchTypeOf<JsonPatchOperations>()
    expectTypeOf('toevoegen' as const).not.toMatchTypeOf<JsonPatchOperations>()
  })
})

describe('JsonPatch', () => {
  it('should allow valid JSON patch operations', () => {
    const input = [
      { op: 'replace' as const, path: '/baz', value: 'boo' },
      { op: 'add' as const, path: '/hello', value: ['world'] },
      { op: 'remove' as const, path: '/foo' },
    ]
    const input2 = [
      { op: 'replace' as const, path: '/baz', value: 'boo' },
      { op: 'add' as const, path: '/hello', value: ['world'] },
      { op: 'replace' as const, path: '/baz', value: 'boo' },
      { op: 'add' as const, path: '/hello', value: ['world'] },
      { op: 'replace' as const, path: '/baz', value: 'boo' },
      { op: 'add' as const, path: '/hello', value: ['world'] },
    ]
    const input3 = [{ op: 'replace' as const, path: '/baz', value: 'boo' }]
    const input4 = [
      { op: 'remove' as const, path: '/foo' },
      { op: 'remove' as const, path: '/foo' },
      { op: 'remove' as const, path: '/foo' },
      { op: 'remove' as const, path: '/foo' },
      { op: 'remove' as const, path: '/foo' },
      { op: 'remove' as const, path: '/foo' },
    ]

    expectTypeOf(input).toMatchTypeOf<JsonPatch>()
    expectTypeOf(input2).toMatchTypeOf<JsonPatch>()
    expectTypeOf(input3).toMatchTypeOf<JsonPatch>()
    expectTypeOf(input4).toMatchTypeOf<JsonPatch>()
  })

  it('should not allow invalid JSON patch operations', () => {
    const input = [
      { op: 'replace' as const, path: '/baz', value: 'boo' },
      { op: 'add' as const, path: '/hello', value: ['world'] },
      { op: 'remove' as const, path: '/foo', value: 'bar' },
    ]
    const input2 = [
      { op: 'replace' as const, path: '/baz', value: 'boo' },
      { op: 'add' as const, path: '/hello' },
      { op: 'remove' as const, path: '/foo' },
    ]
    const input3 = [
      { op: 'replace' as const, value: 'boo' },
      { op: 'add' as const, path: '/hello', value: ['world'] },
      { op: 'remove' as const, path: '/foo', value: 'bar' },
    ]
    const input4 = [
      { path: '/baz', value: 'boo' },
      { op: 'add' as const, path: '/hello', value: ['world'] },
      { op: 'remove' as const, path: '/foo' },
    ]

    expectTypeOf(input).not.toEqualTypeOf<JsonPatch>()
    expectTypeOf(input2).not.toEqualTypeOf<JsonPatch>()
    expectTypeOf(input3).not.toEqualTypeOf<JsonPatch>()
    expectTypeOf(input4).not.toEqualTypeOf<JsonPatch>()
  })
})
