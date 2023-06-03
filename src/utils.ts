/**
 * Make sure to throw an error
 *
 * @param error An unknown throw
 *
 * @throws always
 *
 * @example
 *  try {
 *   foo()
 * } catch (error) {
 *   catchError(error)
 * }
 */
export function catchError(error: unknown): void {
  if (error instanceof Error) throw error
  else throw new Error(`${error}`)
}
