/**
 * Get the prop types of a given component
 *
 * @example
 * // Get all prop types
 * PropsOf<MyComponent>
 *
 * // Get type of specific prop
 * PropsOf<MyComponent>["prop"]
 *
 */
export type PropsOf<C extends abstract new (...args: never[]) => void> =
  InstanceType<C> extends { $props: unknown }
    ? InstanceType<C>['$props']
    : never
