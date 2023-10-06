import {
  isDefined,
  isString,
  isNumber,
  isBigInt,
  isBool,
  isSymbol,
  isNull,
} from './guards'
import { generateError } from './utils'

import type {
  JsonValue,
  JSONValue,
  JsonPatch,
  JsonPatchOperations,
} from './JSON'
import type { Tuple } from './tuple'
import type { PropsOf } from './vue'

export {
  isDefined,
  isString,
  isNumber,
  isBigInt,
  isBool,
  isSymbol,
  isNull,
  generateError,
}
export type {
  JsonValue,
  JSONValue,
  JsonPatch,
  JsonPatchOperations,
  Tuple,
  PropsOf,
}
