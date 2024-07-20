/**
 * Checks if a value is a symbol.
 *
 * @param x - The value to check.
 * @returns A boolean indicating whether the value is a symbol.
 */
export default function isSymbol(x: unknown): x is symbol {
  return typeof x === 'symbol'
}
