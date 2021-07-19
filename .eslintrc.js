module.exports = {
  'env': {
    'commonjs': true,
    'node': true
  },
  'extends': 'airbnb',
  'parserOptions': {
    'ecmaVersion': 12
  },
  'rules': {
    'indent': [
      'error',
      4
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'arrow-spacing': [
        'error'
    ],
    'no-console': 0,
  }
}