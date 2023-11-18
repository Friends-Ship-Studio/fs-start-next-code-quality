/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require("fs");
const path = require('path'); 

module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended-type-checked", "next/core-web-vitals", "prettier"],
  ignorePatterns: [
    // Load .gitignore content as base ESLint ignore patterns
    ...fs.readFileSync(path.join(__dirname, ".gitignore"), "utf8")
        .split("\n")
        .filter(line => line && !line.startsWith("#")),
    // Include any additional ignore patterns here
  ],
  overrides: [
    {
      // Disable type-checking rules for JavaScript files
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['./**/*.js', './**/*.jsx', './**/*.mjs', './**/*.cjs'],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  root: true,
};
