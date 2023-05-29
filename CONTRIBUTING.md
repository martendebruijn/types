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
These can be compiled with the following npm script:

```sh
npm run build:scripts
```
