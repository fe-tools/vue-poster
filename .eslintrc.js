module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    browser: true
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'prettier/prettier': [ 'error', { singleQuote: true, semi: false }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
        requireLast: false
      },
      singleline: {
        requireLast: false
      }
    }],
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
}