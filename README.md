# eslint-config-nick

This is a collection of my personal eslint configurations. It is a work in progress and will be updated as I continue to work on it.

## Installation

```bash
npm install -D @nick12003/eslint-config-nick
# or
yarn add -D @nick12003/eslint-config-nick
# or
pnpm add -D @nick12003/eslint-config-nick
```

## Usage

### TypeScript (React)

```js
// .eslintrc.cjs
module.exports = {
  // ... the rest of your config ...
  extends: ['@nick12003/eslint-config-nick/react-typescript'],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};
```

### JavaScript (React)

```js
// .eslintrc.cjs
module.exports = {
  // ... the rest of your config ...
  extends: ['@nick12003/eslint-config-nick/react'],
};
```

### TypeScript

```jsonc
// tsconfig.eslint.json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": ["jest"]
  },
  "include": ["src/**/*", "tests/**/*", ".eslintrc.js", "jest.config.js", "commitlint.config.js"],
  "exclude": ["node_modules", "build", "scripts"]
}
```

Then refer this file in the config of `parseOptions.project` in `.eslintrc`:

```jsonc
// .eslintrc
{
  "extends": ["@nick12003/eslint-config-nick/typescript"],
  "parserOptions": {
    "project": "tsconfig.eslint.json"
  }
}
```

If you have some config files in the project root which is not need to be linted, you can add them to the `exclude` field in `tsconfig.eslint.json` or in `.eslintignore` file.

### Linter for React Testing

```jsonc
// .eslintrc
{
  "overrides": [
    {
      "files": ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      "extends": ["@nick12003/eslint-config-nick/react-testing"]
    }
  ]
}
```

## Development and Deployment

Write files in the `tests` folder and see whether ESLint works as expected:

```bash
npm run test
npm run test -- --fix
```

After push to the main branch, the release job will automatically start.

## MISC

### Absolute Imports and Module Path Aliases for TypeScript

If you want to use import alias in your project, you can use `import-resolver-typescript` to do this by yourself. For example,

```jsonc
// .eslintrc
{
  // ...
  "rules": {
    "import/no-unresolved": "error"
  },
  "settings": {
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true,
        "project": "tsconfig.json"
      }
    }
  }
}
```

### xxx should be listed in the project's dependencies, not devDependencies

By default, eslint-config-pjchender does not care about the packages is dependencies or devDependencies in `'**/*.test.ts'`, `'**/*.test.tsx'`, `'**/*.stories.ts'`, `'**/*.stories.tsx'`. However, you might still use some package that should be listed in devDependencies. In this case, you can modify the rule of `import/no-extraneous-dependencies` in eslint config file manually. For example,

```json
{
  "rules": {
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.test.ts",
          "**/*.test.tsx",
          "**/*.stories.ts",
          "**/*.stories.tsx",
          "vite.config.ts"
        ]
      }
    ]
  }
}
```

### Personal Preference

```json
{
  "rules": {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react-refresh/only-export-components": "warn",
    "react/jsx-props-no-spreading": "off"
  }
}
```
