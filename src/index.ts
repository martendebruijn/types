import {
  isDefined,
  isString,
  isNumber,
  isBigInt,
  isBool,
  isSymbol,
  isNull,
  isArray,
} from './guards'
import { generateError } from './utils'

import type { JsonValue, JSONValue } from './JSON'
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
  isArray,
  generateError,
}
export type { JsonValue, JSONValue, Tuple, PropsOf }
