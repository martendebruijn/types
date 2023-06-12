export type PropsOf<C extends abstract new (...args: never[]) => void> =
  InstanceType<C> extends { $props: unknown }
    ? InstanceType<C>['$props']
    : never
