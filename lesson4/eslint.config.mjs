import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "indent": ["error", 2],
      "quotes": ["error", "double"],
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
];