module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx']
  },
  rules: {
    'import/extensions': ['error', {
      ts: 'never',
      tsx: 'never',
    }],
  },
};
