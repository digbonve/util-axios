/**
 * 生产环境配置
 */
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { resolve } = require('path');

module.exports = merge(common, {
  mode: 'production', 
  output: {
    filename: 'js/[name].[contenthash:10].js',
    // filename: 'main.js',
    path: resolve(__dirname, '../dist'),
    publicPath: './'
  },
  plugins: [
    
  ]
})