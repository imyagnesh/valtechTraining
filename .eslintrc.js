module.exports = {
  globals: {},
  env: {
    browser: true,
    node: true,
    jasmine: true,
  },
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'implicit-arrow-linebreak': 0,
  },
};
