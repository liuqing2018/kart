module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  // global: {
  //   arguments: true,
  // },
  "globals": {
    "arguments": true,
    "var2": "readonly"
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 在对象和数组文字中一致地使用尾随逗号
    'comma-dangle': 'off',

    // 强制驼峰命名
    'camelcase': ['error', {
      'properties': 'never'
    }],

    // 单行代码长度
    'max-len': ['error', 150],

    // 动态导入
    'import/no-dynamic-require': 'off',

    // 赋值给声明为函数参数的变量可
    'no-param-reassign': 'off',

    // 使用++
    'no-plusplus': 'off',

    // 箭头函数始终要有return
    'consistent-return': 'off',

    // 条件表达式
    'no-unused-expressions': 'off',

    // 返回的内容在一行
    'arrow-body-style': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
