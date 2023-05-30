# Contributing

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

## Run Tests

### Formatter

```sh
npm run format # Format everything
```

### Linters

```sh
npm run lint # Lint JS/TS
```

### Tests

Types are tested during compile time with `// @ts-expect-error`.

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
