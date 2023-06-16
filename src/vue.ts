/**
 * Get the prop types of a given component
 *
 * @example
 *  import MyComponent from 'MyComponent.vue'
 *
 *  // Get all prop types
 *  PropsOf<typeof MyComponent>
 *
 *  // Get type of specific prop
 *  PropsOf<typeof MyComponent>["prop"]
 *
 */
export type PropsOf<C extends abstract new (...args: never[]) => void> =
  InstanceType<C> extends { $props: unknown }
    ? InstanceType<C>['$props']
    : never
