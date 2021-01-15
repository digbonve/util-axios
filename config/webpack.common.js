/**
 * webpack 公共配置
 */
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash:10].js',
    path: resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: resolve(__dirname, 'src'),
        loader: 'babel-loader',
      },
      {// 加载 CSS
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {// 加载 fonts 字体
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {// 加载 images
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      
    ],
  },
  plugins: [
    // 清除dist
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // 以 ./public/index.html 为模板创建新的html文件
      template: './public/index.html',
      minify: {
        collapseWhitespace: true, // 移除空格
        removeComments: true, // 移除注释
        removeRedundantAttributes: true, // 当值匹配默认值时删除属性。
        removeScriptTypeAttributes: true, // type="text/javascript"从script标签中删除。
        removeStyleLinkTypeAttributes: true, // type="text/css"从style和link标签中删除。
        useShortDoctype: true // 使用HTML5 doctype
      }
    }),
  ]
}