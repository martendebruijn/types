import type { JsonValue } from './jsonValue'

/**
 * Operations of a JSON patch
 * @see {@link https://www.jsonpatch.com JSON Patch explanation}
 */
export type JsonPatchOperations =
  | 'add'
  | 'remove'
  | 'replace'
  | 'copy'
  | 'move'
  | 'test'

/**
 * A JSON remove patch operation
 */
interface JsonPatchRemove {
  op: 'remove'
  path: string
}

/**
 * All JSON patch operations excluding the remove operation
 */
interface JsonPatchDefault {
  op: Exclude<JsonPatchOperations, 'remove'>
  path: string
  value: JsonValue
}

/**
 * A JSON patch operation
 * @see {@link https://www.jsonpatch.com JSON Patch explanation}
 *
 * Note that you have to use `as const` when you use a string literal for the operation.
 *
 * @example
 * const foo: JsonPatch = [
 *    { op: 'replace' as const, path: '/baz', value: 'boo' },
 *    { op: 'add' as const, path: '/hello', value: ['world'] },
 *    { op: 'remove' as const, path: '/foo' },
 *  ]
 */
export type JsonPatch = (JsonPatchDefault | JsonPatchRemove)[]
