# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `JsonValue` in favor of `JSONValue`. Casing should be about word spacing only.
  Using all capitals for an abbreviation makes names harder to read.
- `JsonPatchOperations` - All possible JSON patch operations
- `JsonPatch` - A valid JSON patch

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

[unreleased]: https://github.com/martendebruijn/types/compare/1.3.0...HEAD
[1.3.0]: https://github.com/martendebruijn/types/compare/1.2.0...1.3.0
[1.2.0]: https://github.com/martendebruijn/types/compare/1.1.1...1.2.0
[1.1.1]: https://github.com/martendebruijn/types/compare/1.1.0...1.1.1
[1.1.0]: https://github.com/martendebruijn/types/compare/1.0.0...1.1.0
[1.0.0]: https://github.com/martendebruijn/types/releases/tag/1.0.0
