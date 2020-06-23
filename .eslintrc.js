module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'space-before-function-paren': 0,
    'quote-props': 0,
    'eol-last': 0,
    'object-property-newline': 0,
    'indent': 0,
    'no-useless-return': 0
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ]
}
