'use strict';

module.exports = {
  "extends": [require.resolve("eslint-config-xo/esnext")],
  "parser": require.resolve("babel-eslint"),
  "parserOptions": {
    "ecmaFeatures": {
      "legacyDecorators": true
    }
  },
  "env": {
    "jest": true,
    "jasmine": true
  },
  "rules": {
    "capitalized-comments": 0,
    "eol-last": 0,
    "indent": [2, 2, {"SwitchCase": 1}],
    "new-cap": [2, {"capIsNew": false}],
    "no-await-in-loop": 0,
    "no-constant-condition": [2, {"checkLoops": false}],
    "no-mixed-operators": 0,
    "no-multiple-empty-lines": 0,
    "no-negated-condition": 0,
    "no-return-await": 0,
    "no-trailing-spaces": 0,
    "no-unused-vars": [2, {"ignoreRestSiblings": true, "argsIgnorePattern": "^_"}],
    "no-warning-comments": 0,
    "quotes": [2, "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
    "padding-line-between-statements": 0,
    "prefer-arrow-callback": 0,
    "prefer-destructuring": 0,
    "require-atomic-updates": 0,
    "require-await": 0
  }
};