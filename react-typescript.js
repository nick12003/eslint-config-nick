/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['./react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['./**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: true,
        ecmaVersion: 12,
        sourceType: 'module',
      },
      extends: [
        'airbnb-typescript',
        'plugin:import/errors',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
      ],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            classes: true,
            variables: true,
            typedefs: false,
            ignoreTypeReferences: true,
          },
        ],
      },
    },
  ],
};
