import { describe, it, expectTypeOf } from 'vitest'
import { PropsOf } from './vue'

describe('PropsOf', () => {
  it('should give the type of the props of the given component when given that component', () => {
    class AwesomeComponent {
      $props = {
        prop: 12,
      }
    }

    const MyComponent = new AwesomeComponent()

    expectTypeOf(MyComponent.$props).toMatchTypeOf<
      PropsOf<typeof AwesomeComponent>
    >()
  })

  it('should give the type of the specific props of the given component when given that component', () => {
    class AwesomeComponent {
      $props = {
        propA: 12,
        propB: true,
      }
    }

    const MyComponent = new AwesomeComponent()

    expectTypeOf(MyComponent.$props.propA).toMatchTypeOf<
      PropsOf<typeof AwesomeComponent>['propA']
    >()
    expectTypeOf(MyComponent.$props.propB).toMatchTypeOf<
      PropsOf<typeof AwesomeComponent>['propB']
    >()
  })
})
