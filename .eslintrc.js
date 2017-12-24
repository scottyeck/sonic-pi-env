module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
