const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const isDev = process.env.NODE_ENV !== 'production';
module.exports = {
  lintOnSave: isDev,

  //  babel 显式转译的依赖
  // transpileDependencies: [
  //   /node_modules\/(?:ant-design-vue\/(?!src\/utils\/date\.js)\/)/,
  // ],

  // 生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: true,

  // 开发服务器
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://192.168.1.13:8088',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },

  // 为生产环境修改配置
  configureWebpack: (config) => {
    if (!isDev) {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    } else {
      config.devtool = 'source-map';
    }
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
    };
  },

  chainWebpack: config => {
    config.plugin('ignore')
    .use(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)); // 忽略/moment/locale下的所有文件
    config.plugin('analyzer')
    .use(new BundleAnalyzerPlugin()) // 使用webpack-bundle-analyzer生成报表
  }
};
