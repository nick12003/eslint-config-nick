/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['simple-import-sort', 'import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'implicit-arrow-linebreak': 'off',
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/prefer-default-export': 'off',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
  },
};
