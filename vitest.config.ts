import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    typecheck: {
      ignoreSourceErrors: true,
      tsconfig: './src/tsconfig.json',
    },
  },
})
