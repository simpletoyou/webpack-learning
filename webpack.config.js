/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-02-11 10:26:12
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-02-24 11:29:55
 */

const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PostcssPresetEnv = require('postcss-preset-env')
// 自动清除之前的打包文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// webpack内置插件，DefinePlugin，可以实现在打包模板文件内定义全局常量
const { DefinePlugin } = require('webpack')


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
          {
            loader: 'css-loader',
            // 当css-loader在工作时，如果又匹配到需要进行css处理的代码，则往前再执行指定个数的loader
            options: {
              importLoaders: 1,
              esModule: false
            }
          },
          // 对css进行前缀添加等
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [

          'style-loader',
          'css-loader',
          // 处理less文件需要下载less与less-loader
          // less-loader带less样式处理为css
          // 将less转换为css，再对css进行处理
          'postcss-loader',//在这里postcss-loader会根据配置文件postcss.config.js进行相关处理
          'less-loader'
        ]
        // 不同文件类型如果有相同配置，可以将配置写到postcss.config.js文件（不能重命名为其他名称！）
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        // loader: 'file-loader'
        // use: [{
        //   loader: 'file-loader',
        //   options: {
        //     // 是否将导出的内容转化成为esModule
        //     esModule: false
        //   }
        // }]
        use: ['file-loader']
      },
    ]
  },
  plugins: [
    // html-webpack-plugin
    // 功能：创建一个空白的html文件，自动引入打包输出的所有资源（JS、CSS等）
    // 需求：需要有结构的html文件
    // 如果没有引用html-webpack-plugin插件，则打包后文件无index.html(该插件可以配置页面名称)
    new HtmlWebpackPlugin(
      {
        // 修改打包后入口文件标签页名
        title: 'html webpack plugin',
        //   // template：复制制定路径文件，病自动引入打包输出的所有资源
        // public为打包模块，确定后一般不做修改
        template: './public/index.html'
        // template: './src/index.html'
      }),
    new CleanWebpackPlugin(),
    // BASE_URL需要多加一层引号
    new DefinePlugin({
      BASE_URL: '"./"'
    })
  ]
}

// 自定义插件（插件本质：类Class）
// class MyPlugin {
//   constructor(){}
//   apply()
// }