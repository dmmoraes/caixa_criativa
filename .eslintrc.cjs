module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: { react: { version: 'detect' } },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'react-refresh'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-refresh/recommended',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['tools/**/*.mjs', 'tools/**/*.js'],
      env: { node: true },
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
