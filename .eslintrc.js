module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'prettier/prettier': [
      2,
      {
        semi: true,
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
        endOfLine: 'auto'
      }
    ],
    semi: ['error', 'always']
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
