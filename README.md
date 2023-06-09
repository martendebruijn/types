# @martendebruijn/types

Common types and type guards I use often.

- [@martendebruijn/types](#martendebruijntypes)
  - [Get started](#get-started)
  - [Usage](#usage)
    - [Type guards](#type-guards)
    - [Types](#types)
    - [Utility](#utility)
    - [Framework specific](#framework-specific)
      - [Vue](#vue)
  - [Releases](#releases)
  - [Contributing](#contributing)
  - [Authors and acknowledgment](#authors-and-acknowledgment)
  - [License](#license)

## Get started

```sh
npm install @martendebruijn/types
```

## Usage

### Type guards

- **[`isDefined(x)`](./src/guards.ts)** - Is x defined?

### Types

- **[`JSONValue`](./src/JSON.ts)** - A valid JSON value
- **[`Tuple`](./src/tuple.ts)** - Tuple type

### Utility

- **[`generateError(error)`](./src/utils.ts)** - Make sure an error is actual an
  error

### Framework specific

#### Vue

- **[`PropsOf<VueComponent>`](./src/vue.ts)** - Get the types of the properties
  of a Vue component

## Releases

For a complete list of releases, please see the [changelog](./CHANGELOG.md).

## Contributing

Please do contribute! See the [contributing document](./CONTRIBUTING.md) for how
to contribute.

## Authors and acknowledgment

Inspired by the [Types library](https://github.com/mike-north/types) made by
[Mike North](https://github.com/mike-north) and the TypeScript courses he teaches.

- **[@martendebruijn](https://github.com/martendebruijn)** - Owner

For a full list of contributors, please see the [contributors list](https://github.com/martendebruijn/types/graphs/contributors).

## License

[MIT](./LICENSE) license

Copyright (c) 2023 [Marten de Bruijn](https://github.com/martendebruijn)
