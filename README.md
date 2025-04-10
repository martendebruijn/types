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
      - [JSON](#json)
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

- **[`isArray(x)`](./src/guards/isArray.ts)** - Is x an Array?
- **[`isBigInt(x)`](./src/guards/isBigInt.ts)** - Is x a BigInt?
- **[`isBool(x)`](./src/guards/isBool.ts)** - Is x a Boolean?
- **[`isDate(x)`](./src/guards/isDate.ts)** - Is x a Date?
- **[`isNull(x)`](./src/guards/isNull.ts)** - Is x Null?
- **[`isDefined(x)`](./src/guards/isDefined.ts)** - Is x Defined?
- **[`isEven(x)`](./src/guards/isEven.ts)** - Is x even?
- **[`isFloat(x)`](./src/guards/isFloat.ts)** - Is x a float?
- **[`isInfinity(x)`](./src/guards/isInfinity.ts)** - Is x Infinity?
- **[`isInteger(x)`](./src/guards/isInteger.ts)** - Is x an integer?
- **[`isMap(x)`](./src/guards/isMap.ts)** - Is x a Map?
- **[`isNan(x)`](./src/guards/isNan.ts)** - Is x NaN?
- **[`isNegative(x)`](./src/guards/isNegative.ts)** - Is x negative?
- **[`isNull(x)`](./src/guards/isNull.ts)** - Is x null?
- **[`isNumber(x)`](./src/guards/isNumber.ts)** - Is x a Number?
- **[`isObject(x)`](./src/guards/isObject.ts)** - Is x an Object?
- **[`isOdd(x)`](./src/guards/isOdd.ts)** - Is x odd?
- **[`isPositive(x)`](./src/guards/isPositive.ts)** - Is x positive?
- **[`isSet(x)`](./src/guards/isSet.ts)** - Is x an Set?
- **[`isString(x)`](./src/guards/isString.ts)** - Is x a String?
- **[`isSymbol(x)`](./src/guards/isSymbol.ts)** - Is x a Symbol?
- **[`isUndefined(x)`](./src/guards/isUndefined.ts)** - Is x Undefined?
- **[`isWeakMap(x)`](./src/guards/isWeakMap.ts)** - Is x a Weak Map?
- **[`isWeakSet(x)`](./src/guards/isWeakSet.ts)** - Is x a Weak Set?

### Types

#### JSON

- **[`JsonValue`](./src/json/jsonValue.ts)** - A valid JSON value
- **[`JsonPatch`](./src/json/jsonPatch.ts)** - A valid JSON patch operation

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

Copyright © 2023 [Marten de Bruijn](https://github.com/martendebruijn)
