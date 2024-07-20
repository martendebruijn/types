# Contributing

- [Contributing](#contributing)
  - [Get started](#get-started)
  - [Run tests](#run-tests)
    - [Formatter](#formatter)
    - [Linters](#linters)
    - [Tests](#tests)
  - [Deployment](#deployment)
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

A new release can be made by a user that has a role of at least a **maintainer**.
To make a new release you have to trigger the deployment pipeline. To trigger this
job, you have to make a new tag:

```sh
git tag -a x.y.z
```

Where `x.y.z` is the new version number according to semantic versioning. We use
annotated tags to add the changelog of that release to the tag. And that's it, the
pipeline does the rest.

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
