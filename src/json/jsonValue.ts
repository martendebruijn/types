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
