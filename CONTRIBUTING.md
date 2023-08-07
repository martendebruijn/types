# Contributing

- [Contributing](#contributing)
  - [Get started](#get-started)
  - [Run tests](#run-tests)
    - [Formatter](#formatter)
    - [Linters](#linters)
    - [Tests](#tests)
  - [Deployment](#deployment)
    - [Compile scripts](#compile-scripts)
    - [Release](#release)
  - [Guidelines](#guidelines)
    - [Testing](#testing)
      - [Naming conventions](#naming-conventions)
      - [Arrange-Act-Assert pattern](#arrange-act-assert-pattern)
    - [Documentation](#documentation)
      - [JSDoc](#jsdoc)
      - [README](#readme)
      - [CHANGELOG](#changelog)

## Get started

Clone this git repository

```sh
git clone git@github.com:martendebruijn/types.git
```

Install dependencies

```sh
npm install
```

Compile help scripts

```sh
npm run build:scripts
```

## Run tests

### Formatter

```sh
npm run format # Format everything
```

### Linters

```sh
npm run lint # Lint JS/TS
```

### Tests

```sh
npm run test # Unit and type tests
```

## Deployment

```sh
npm run build
```

### Compile scripts

Inside the `scripts` directory are TypeScript scripts used only inside this package.
These have to be compiled before running build for the first time or whenever there
are changes made to the scripts. This can be done with the following npm script:

```sh
npm run build:scripts
```

### Release

When making a release, do not use `npm version`. The reason for this is that the
command only adds just the version number to the commit message. What we want, however,
is everything that has changed to put in the body of the commit message so that
it can be easily read on [the tags overview page on GitHub](https://github.com/martendebruijn/types/tags).

So instead of `npm version`, use the following instructions:

1. Update version number in package.json
2. Update npm

    ```sh
    npm install
    ```

3. Add package and package-lock to staged area

    ```sh
    git add package.json package-lock.json
    ```

4. Commit the changes

    ```sh
    git commit
    ```

5. Add changelog to body

    ```md
    Added:
  
    - feature 1
    - feature 2
  
    Fixed:

    - fixed 1
    - fixed 2
    ```

6. Push the changes

    ```sh
    git push
    ```

7. Add a git tag

    ```sh
    git tag <version>
    ```

8. Push the tag(s)

    ```sh
    git push --tags
    ```

## Guidelines

This project uses [SemVer](https://semver.org/) and Test Driven Development.

### Testing

See [jest-tsd](https://github.com/0livare/jest-tsd) for creating test suites for
types.

#### Naming conventions

Test names must be concise, descriptive, and in correct English. Test should follow
the "Unit of work" should "scenario/context" when "expected behavior" pattern. When
multiple test have the same setup, they should be put inside it's own `describe()`
and _should_ and _when_ would be switched.

```ts
describe('[unit of work]', () => {
  it('should [expected behaviour] when [scenario/context]', () => {})
})

describe('[unit of work]', () => {
  describe('when [scenario/context]', () => {
    it('should [expected behaviour]', () => {})
    it('should [expected behaviour]', () => {})
  })
}
```

#### Arrange-Act-Assert pattern

- **Arrange** inputs and targets. _Arrange_ steps should set up the test case (setting
  up input variables, spies stubs, mocks)
- **Act** on the target behavior. _Act_ steps should cover the main thing to be tested.
- **Assert** expected outcomes. _Assert_ steps should elicit some sort of response.

```ts
describe('Calculator tests', () => {
  it('should return 3 when adding 1 and 2', () => {
    // Arrange
    const numA = 1
    const numB = 2

    // Act
    const result = sum(numA, numB)

    // Assert
    expect(res).to.equal(3)
  })
})
```

### Documentation

#### JSDoc

Always add JSDoc to types and functions.

```ts
/**
 * Here goes a description
 *
 * @param x Param description
 * @returns Return description
 *
 * @example
 *  sum(1, 2) // => 3
 */
function sum(a: number, b: number): number {
  return a + b
}
```

#### README

When adding types or type guards, add them to the README respectively.

#### CHANGELOG

This project uses a CHANGELOG based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
