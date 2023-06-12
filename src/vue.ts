export type PropsOf<C extends { new (...args: never[]): void }> =
  InstanceType<C> extends { $props: unknown }
    ? InstanceType<C>['$props']
    : never
