import { isDefined, isString, isNumber, isBigInt, isBool, isSymbol, isNull, isObject, isArray } from './guards' /* prettier-ignore */
import { generateError } from './utils'

import type {
  JsonValue,
  JSONValue,
  JsonPatch,
  JsonPatchOperations,
} from './JSON'
import type { Tuple } from './tuple'
import type { PropsOf } from './vue'

export { isDefined, isString, isNumber, isBigInt, isBool, isSymbol, isNull, generateError, isObject, isArray } /* prettier-ignore */
export type {
  JsonValue,
  JSONValue,
  JsonPatch,
  JsonPatchOperations,
  Tuple,
  PropsOf,
}
