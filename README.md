# @martendebruijn/types

<a href="https://www.npmjs.com/package/@martendebruijn/types" title="@martendebruijn/types">
  <img src="https://img.shields.io/npm/v/%40martendebruijn%2Ftypes?labelColor=%23004225&color=%23F5F5DC"
    alt="Types library by Marten de Bruijn"/>
</a>

Personal common used types, type guards and other to quickly jumpstart a new project
or experiment.

- [@martendebruijn/types](#martendebruijntypes)
  - [Get started](#get-started)
  - [Usage](#usage)
    - [Type guards](#type-guards)
    - [Types](#types)
    - [Utility](#utility)
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

- **[`isArray(x)`](./src/guards/isArray.ts)** - Is x an array?
- **[`isBigInt(x)`](./src/guards/isBigInt.ts)** - Is x an array?
- **[`isBool(x)`](./src/guards/isBool.ts)** - Is x an array?
- **[`isDate(x)`](./src/guards/isDate.ts)** - Is x an array?
- **[`isDefined(x)`](./src/guards/isDefined.ts)** - Is x an array?
- **[`isInfinity(x)`](./src/guards/isInfinity.ts)** - Is x an array?
- **[`isNan(x)`](./src/guards/isNan.ts)** - Is x an array?
- **[`isNull(x)`](./src/guards/isNull.ts)** - Is x an array?
- **[`isNumber(x)`](./src/guards/isNumber.ts)** - Is x an array?
- **[`isObject(x)`](./src/guards/isObject.ts)** - Is x an array?
- **[`isString(x)`](./src/guards/isString.ts)** - Is x an array?
- **[`isSymbol(x)`](./src/guards/isSymbol.ts)** - Is x an array?
- **[`isUndefined(x)`](./src/guards/isUndefined.ts)** - Is x an array?

### Types

- **[`JsonValue`](./src/json/jsonValue.ts)** - A valid JSON value
- **[`JsonPatch`](./src/json/jsonPatch.ts)** - A valid JSON patch operation

### Utility

- **[`generateError(error)`](./src/utils/generateError.ts)** - Make sure an error
  is an actual error

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
