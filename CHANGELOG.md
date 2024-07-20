# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.1] - 2024-07-21

Forgot to build the latest changes :'(

## [2.0.0] - 2024-07-21

### Added

#### Guards

- `isDate`
- `isInfinity`
- `isNan`
- `isUndefined`
- `isEven`
- `isFloat`
- `isInteger`
- `isMap`
- `isNegative`
- `isOdd`
- `isPositive`
- `isSet`
- `isWeakMap`
- `isWeakSet`

### Changed

- Rewrote `guards.ts` to have each guard in a seperate file
- Rewrote `JSON.ts` to seperate `JsonValue` and `JsonPatch` types

### Breaking Changes

#### Removed

- Vue `propsOf` – I'm currently not using Vue, which is why I'm removing Vue specific
  types
- `JSONValue`, use `JsonValue` instead
- `Tuple` type, because the type wasn't correct
- `generateError()` – moved to a different utils repository

## 0.0.17 - 2024-07-21

This "release" came to be to test the publish job in the ci/cd and should not
be recognized as an official release.

## [1.4.0] - 2024-01-10

### Added

- `JsonPatchOperations` - All possible JSON patch operations
- `JsonPatch` - A valid JSON patch
- `isArray(x)` - Is x an array?
- `isObject(x)` - Is x an object?

### Fixed

- `JsonValue` in favor of `JSONValue`. Casing should be about word spacing only.
  Using all capitals for an abbreviation makes names harder to read.

### Deprecated

- `JSONValue`

## [1.3.0] - 2023-09-28

### Added

- `isString(x)` - Is x a string?
- `isNumber(x)` - Is x a number?
- `isBigInt(x)` - Is x a bigint?
- `isBool(x)` - Is x a boolean?
- `isSymbol(x)` - Is x a symbol?
- `isNull(x)` - Is x null?

## [1.2.0] - 2023-07-25

### Added

- Added Vue specific `PropsOf` type

## [1.1.1] - 2023-06-09

Forgot to build dist.

## [1.1.0] - 2023-06-09

### Added

- Added `Tuple` type

### Fixed

- Improved documentation comments of the `isDefined` type guard

## [1.0.0] - 2023-06-04

First release.

[unreleased]: https://github.com/martendebruijn/types/compare/2.0.0...HEAD
[2.0.0]: https://github.com/martendebruijn/types/compare/1.4.0...2.0.0
[1.4.0]: https://github.com/martendebruijn/types/compare/1.3.0...1.4.0
[1.3.0]: https://github.com/martendebruijn/types/compare/1.2.0...1.3.0
[1.2.0]: https://github.com/martendebruijn/types/compare/1.1.1...1.2.0
[1.1.1]: https://github.com/martendebruijn/types/compare/1.1.0...1.1.1
[1.1.0]: https://github.com/martendebruijn/types/compare/1.0.0...1.1.0
[1.0.0]: https://github.com/martendebruijn/types/releases/tag/1.0.0
