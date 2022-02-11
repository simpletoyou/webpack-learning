/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-02-11 10:26:12
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-02-11 14:59:42
 */

const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          
          'style-loader',
          'css-loader',
          // 处理less文件需要下载less与less-loader
          // less-loader带less样式处理为css
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    // html-webpack-plugin
    // 功能：创建一个空白的html文件，自动引入打包输出的所有资源（JS、CSS等）
    // 需求：需要有结构的html文件
    new HtmlWebpackPlugin({
      // template：复制制定路径文件，病自动引入打包输出的所有资源
      template: './src/index.html'
    })
  ]
}