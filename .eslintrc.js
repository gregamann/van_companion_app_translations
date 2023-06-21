module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:i18n-json/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['**/dist'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      rules: {
        '@typescript-eslint/no-shadow': 'off',
        'react-native/no-inline-styles': 'off',
        curly: 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/react-in-jsx-scope': 'off',
        semi: ['error', 'never'],
      },
    },
    {
      files: ['*.json'],
      rules: {
        // i18n
        'i18n-json/valid-message-syntax': [
          2,
          {
            syntax: 'icu',
          },
        ],
        'i18n-json/valid-json': 2,
        'i18n-json/sorted-keys': [
          2,
          {
            order: 'asc',
            indentSpaces: 2,
          },
        ],
        'i18n-json/identical-keys': 0,
      },
    },
  ],
}
