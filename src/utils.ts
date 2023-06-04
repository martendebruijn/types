/**
 * Make sure to throw an actual error
 *
 * @param error An unknown thrown
 * @returns An error to be thrown
 *
 * @example
 *  try {
 *   foo()
 * } catch (error) {
 *   throw generateError(error)
 * }
 */
export function generateError(error: unknown): Error {
  if (error instanceof Error) return error
  else return new Error(`${error}`)
}
