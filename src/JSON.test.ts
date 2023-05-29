import type { JSONValue } from './JSON'

const isJSON = (arg: JSONValue): void => {}

// Positive test cases
isJSON('')
isJSON(10)
isJSON([1, 2, 3, 4])
isJSON({ key: 'value' })
isJSON(true)
isJSON(false)
isJSON(null)
isJSON({
  a: [[1, 2, 3, 4], [{ a: 1, b: 2, c: 3 }]],
})

// Negative test cases
// @ts-expect-error
isJSON(Symbol())
// @ts-expect-error
isJSON(class {})
// @ts-expect-error
isJSON(() => '')
// @ts-expect-error
isJSON(undefined)
