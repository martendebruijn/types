/**
 * A valid JSON value
 * @see {@link https://www.json.org/json-en.html ECMA-404 The JSON Data Interchange Standard.}
 */
export type JsonValue =
  | string
  | number
  | JsonValue[]
  | { [key: string]: JsonValue }
  | boolean
  | null

/**
 * @deprecated since version 1.4.0, use the type `JsonValue` instead.
 */
export type JSONValue = JsonValue

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
 *  @example
 * const foo: JsonPatch = [
 *    { op: 'replace' as const, path: '/baz', value: 'boo' },
 *    { op: 'add' as const, path: '/hello', value: ['world'] },
 *    { op: 'remove' as const, path: '/foo' },
 *  ]
 */
export type JsonPatch = (JsonPatchDefault | JsonPatchRemove)[]
