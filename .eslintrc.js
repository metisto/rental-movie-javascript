'use strict';

const path = require('path');

module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'es6' : true,
    'mocha' : true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:import/recommended',
  ],
  'globals': {
    '__DEVELOPMENT__': true,
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  'plugins': [
    'import'
  ],
  'rules': {
    'array-bracket-spacing': ['error', 'never'],
    'arrow-spacing': 'error',
    'brace-style' : ['error', 'stroustrup', { allowSingleLine: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { before: false, after: true }],
    'curly': 'error',
    'eol-last': 'error',
    'eqeqeq': 'error',
    'import/unambiguous': 'off',
    'indent': ['error', 2],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': 'error',
    'no-console' : 'warn',
    'no-mixed-spaces-and-tabs': 'error',
    'no-spaced-func': 'error',
    'no-multi-spaces': 'error',
    'no-new-object': 'error',
    'no-param-reassign': 'error',
    'no-trailing-spaces': 'error',
    'no-unused-vars': 'error',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'quotes': ['error', 'single', { avoidEscape: true }],
    'quote-props': ['error', 'as-needed', { 'unnecessary': false }],
    'semi': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', {'anonymous': 'always', 'named': 'never'}],
    'space-infix-ops': 'error',
    'space-in-parens': ['error', 'never'],
    'template-curly-spacing': 'error'
  },
  'settings': {
    'import/extensions': ['.js', '.jsx'],
    'import/resolve': {
      'paths' : [path.resolve(__dirname, 'src')]
    },
    'import/ignore' : [
      'doc',
      'node_modules',
      'robotframework'
    ]
  }
};
