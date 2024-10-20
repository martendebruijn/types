// @ts-check

import eslint from '@eslint/js'
import { fixupPluginRules } from '@eslint/compat';
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
  {
    extends: [
      // Enables rules ESLint recommends to use:
      // @see https://eslint.org/docs/latest/rules/
      eslint.configs.recommended,
      // Enables recommended rules for TS:
      // @see https://typescript-eslint.io/rules/
      ...tseslint.configs.recommended,
    ]
  },
  // Prevent collisions with Prettier. Leave this as the last config, so it overrides
  // all other configs!
  eslintConfigPrettier,
);
