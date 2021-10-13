module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-console': 'off',
    'import/extensions': [2, { js: 'always', jsx: 'always', json: 'always' }],
  },
};
