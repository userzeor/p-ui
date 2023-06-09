module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard', 'plugin:vue/vue3-essential'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'space-before-function-paren': 0
  }
}
