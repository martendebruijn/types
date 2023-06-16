import { describe, it, beforeEach } from '@jest/globals'
import { expectAssignable, expectType, expectError } from 'jest-tsd'
import { PropsOf } from './vue'

describe('PropsOf', () => {
  it('should give the type of the props of the given component when given that component', () => {
    class AwesomeComponent {
      $props = {
        prop: 12,
      }
    }

    const MyComponent = new AwesomeComponent()

    expectType<PropsOf<typeof AwesomeComponent>>(MyComponent.$props)
  })

  it('should give the type of the specific props of the given component when given that component', () => {
    class AwesomeComponent {
      $props = {
        propA: 12,
        propB: true,
      }
    }

    const MyComponent = new AwesomeComponent()

    expectType<PropsOf<typeof AwesomeComponent>['propA']>(
      MyComponent.$props.propA
    )
    expectType<PropsOf<typeof AwesomeComponent>['propB']>(
      MyComponent.$props.propB
    )
  })

  it("should assert type never when $props doesn't exists", () => {
    class AwesomeComponent {
      $props: 12 = 12 // eslint-disable-line @typescript-eslint/prefer-as-const
    }

    const MyComponent = new AwesomeComponent()

    // Pretend to not have $props class field
    if (MyComponent.$props !== 12) {
      const _exhaustiveCheck = MyComponent.$props
      expectType<never>(_exhaustiveCheck)
    }
  })
})
