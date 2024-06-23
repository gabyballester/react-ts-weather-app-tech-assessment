module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    "plugin:react/jsx-runtime"
  ],
  ignorePatterns: ['dist', '.eslintrc.js', "src/__mocks__/svgMock.js"],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'react',
    '@typescript-eslint',
    'jsx-a11y',
    'import',
    'prettier',
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prettier/prettier': 'error',
    'react-refresh/only-export-components': 'off',
    'import/no-named-as-default-member': 'off',
  },
  parserOptions: {
    project: ["./tsconfig.node.json", "./tsconfig.app.json"],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}

