/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    './base',
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // Allow JSX not allowed in files with extension '.js'
    'react/jsx-filename-extension': 'off',
    // Allow JSX attribute spreading (e.g. <Component {...props} />)
    'react/jsx-props-no-spreading': 'off',
    // Allow without prop-types
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    // new JSX transform
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/jsx-no-bind': 'off',
    // Allow both function declaration and function expression
    'react/function-component-definition': 'off',
    // Allow 'React' was used before it was defined
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    // Must use import { xxx } from 'react'; instead
    // 'no-restricted-imports': [
    //   'error',
    //   {
    //     name: 'react',
    //     importNames: ['default'],
    //     message: "use import { xxx } from 'react'; instead",
    //   },
    // ],

    // for preventing "'React' was used before it was defined"
    'no-use-before-define': 'off',

    // asserts that the label has htmlFor, a nested label, both or either.
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
  },
};
