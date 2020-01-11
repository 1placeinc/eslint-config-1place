'use strict';

const path = require('path');

module.exports = {
  extends: [
    path.join(__dirname, 'index.js'),
    'plugin:react/recommended',
    require.resolve('eslint-config-prettier/react')
  ],
  env: {
    browser: true
  },
  settings: {
    react: {
      version: '16'
    }
  },
  rules: {
    'react/no-unescaped-entities': 0
  }
};
