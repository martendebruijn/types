export type JSONValue =
  | string
  | number
  | JSONValue[]
  | { [key: string]: JSONValue }
  | boolean
  | null
