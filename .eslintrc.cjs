module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  globals: {
    JSX: true,
  },
  rules: {
    'no-use-before-define': 0,
    'no-unused-vars': 0,
    'import/extensions': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/require-default-props': 0,
    'jsx-a11y/img-redundant-alt': 0,
  },
};
