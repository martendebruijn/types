/**
 * Generates an Error object from the provided error.
 * If the error is already an instance of Error, it is returned as is.
 * Otherwise, a new Error object is created with the error message.
 * @param error - The error to generate an Error object from.
 * @returns The generated Error object.
 *
 * @example
 * const error = generateError('Something went wrong');
 * console.log(error instanceof Error); // true
 * console.log(error.message); // 'Something went wrong'
 */
export function generateError(error: unknown): Error {
  if (error instanceof Error) return error
  else return new Error(`${error}`)
}
