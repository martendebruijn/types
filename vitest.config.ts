import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    typecheck: {
      ignoreSourceErrors: true,
      tsconfig: './src/tsconfig.json',
    },
    coverage: {
      exclude: [
        '*/**/main.ts',
        'dist',
        '*.config.*',
        'scripts',
        '*/**/*.test.*',
        '*/**/*.spec.*',
      ],
    },
  },
})
