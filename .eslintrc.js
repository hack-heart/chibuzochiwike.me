module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    // 'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    quotes: [2, 'single'],
    '@typescript-eslint/explicit-function-return-type': 0,
    strict: 0,
    'no-else-return': 0,
    'new-cap': [0, { capIsNewExceptions: ['Router'] }],
    'no-console': 0,
    'import/no-unresolved': [0, { caseSensitive: false }],
    'import/extensions': 0,
    'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
    'no-underscore-dangle': 0,
    'arrow-body-style': 0,
    'one-var': ['error', { uninitialized: 'always', initialized: 'never' }],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'max-len': ['error', 200],
    'no-extra-parens': 0,
    'no-restricted-syntax': [0, 'DebuggerStatement'],
    'no-unused-expressions': 'warn',
    'no-debugger': 'warn',
    'no-alert': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/no-danger': 0,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
      },
    },
  ],
};
