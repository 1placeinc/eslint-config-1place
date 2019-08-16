'use strict';

const path = require('path');

module.exports = {
  "extends": [path.join(__dirname, "index.js"), "plugin:react/recommended"],
  "plugins": ["react-hooks"],
  "env": {
    "browser": true
  },
  "settings": {
    "react": {
      "version": "16"
    }
  },
  "rules": {
    "react/no-unescaped-entities": 0,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 2
  }
};