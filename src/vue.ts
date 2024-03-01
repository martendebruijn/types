/**
 * Retrieves the props type of a Vue component class.
 *
 * @typeparam C - The Vue component class.
 * @returns The props type of the component class.
 */
export type PropsOf<C extends abstract new (...args: never[]) => void> =
  InstanceType<C> extends { $props: unknown }
    ? InstanceType<C>['$props']
    : never
