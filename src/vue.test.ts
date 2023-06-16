import { describe, it } from '@jest/globals'
import { expectTypeTestsToPassAsync } from 'jest-tsd'

describe('PropsOf', () => {
  it('should not produce static type errors', async () => {
    await expectTypeTestsToPassAsync(__filename)
  })
})
