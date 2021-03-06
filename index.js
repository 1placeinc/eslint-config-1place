'use strict';

const path = require('path');

module.exports = {
  extends: [require.resolve('eslint-config-xo/esnext'), require.resolve('eslint-config-prettier')],
  parser: require.resolve('babel-eslint'),
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    },
    babelOptions: {
      configFile: path.join(__dirname, 'babel-config.js')
    }
  },
  env: {
    jest: true,
    jasmine: true
  },
  rules: {
    'capitalized-comments': 0,
    'default-param-last': 0,
    'new-cap': [2, {capIsNew: false}],
    'no-await-in-loop': 0,
    'no-constant-condition': [2, {checkLoops: false}],
    'no-lonely-if': 0,
    'no-negated-condition': 0,
    'no-return-await': 0,
    'no-unused-vars': [2, {ignoreRestSiblings: true, argsIgnorePattern: '^_'}],
    'no-warning-comments': 0,
    'padding-line-between-statements': 0,
    'prefer-destructuring': 0,
    'require-atomic-updates': 0,
    'require-await': 0
  }
};
