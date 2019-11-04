module.exports = {
  env: {
    es6: true
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js']
      }
    ],
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error', //Irá avisar qualquer tentativa de uso que infligir as regras de uso do React Hooks,
    'react-hooks/exhaustive-deps': 'warn', //Avisa se está faltando alguma dependencian no uso dos Hooks Effects.
  }
};
