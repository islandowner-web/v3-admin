module.exports = {
  // 当前目录为根目录，Eslint规则限制到该目录下
  root: true,
  // 启用Eslint的环境
  env: {
    // node下启动
    node: true
  },
  // 继承的配置
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  // 解析器
  parserOptions: {
    parser: 'babel-eslint'
  },
  /*
   * "off" or 0 - 关闭规则
   * "warn" or 1 - 开启规则，只警告
   * "error" or 2 - 开启规则，报错
   * */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'no-trailing-spaces': 'off',
  }
}
