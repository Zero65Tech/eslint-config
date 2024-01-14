module.exports = {
  "env": {
  "es2021": true,
  "jest": true,
  "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-console": "warn",
    "no-unused-vars": "error",
    "no-trailing-spaces": "error",
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "arrow-spacing": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "eol-last": [
      "error",
      "always"
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 3,
        "maxEOF": 1
      }
    ],
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "no-var": "error",
    "prefer-const": "warn",
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "eqeqeq": "warn",
    "spaced-comment": ["error", "always"]
  }
}