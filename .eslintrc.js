module.exports = {
  parser: '@typescript-eslint/parser', // 使用 ts 解析器
  extends: [
    'eslint:recommended', // eslint 推荐规则
    'plugin:@typescript-eslint/recommended' // ts 推荐规则
  ],
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'no-prototype-builtins': 'off',
    'prefer-rest-params': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  }
}
