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
const CopyWebpackPlugin = require('copy-webpack-plugin')
// webpack内置插件，DefinePlugin，可以实现在打包模板文件内定义全局常量
const { DefinePlugin } = require('webpack')


module.exports = {
  // "build": "webpack --config webpack.config.js --watch"
  watch: false,
  entry: './src/index.js',
  mode: 'development',
  devtool:false,
  // 开发阶段屏蔽browserslistrc筛选
  target: 'web',
  // 热更新功能开启，见title.js
  devServer: {
    hot: true
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/main.js'
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
        type:'asset',
        generator: {
          filename: 'img/[name].[hash:3][ext]'
        },
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024
        //   }
        // }

        // loader: 'file-loader'
        // use: [{
        //   loader: 'file-loader',
        //   options: {
        //     // 是否将导出的内容转化成为esModule
        //     esModule: false
        //   }
        // }]
        // use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:3][ext]'
        }
      },
      {
        test: /.js$/,
        // 不需要对依赖包做polyfill填充处理
        exclude: /node_modules/,
        // 可以将相关babel配置整合在单独文件babel.config.js
        use: ['babel-loader']
        // use: [
        //   {
        //     loader: 'babel-loader',
        //     // babel-loader需要配置相关参数，实现浏览器兼容对js进行转化处理
        //     options: {
        //       // plugins: [
        //       //   '@babel/plugin-transform-arrow-functions',
        //       //   '@babel/plugin-transform-block-scoping'
        //       // ]
        //       // presets: ['@babel/preset-env']
        //       // 如果既有browserslistrc文件，又在这里进行配置，则以这里配置优先
        //       presets: [
        //         [
        //           '@babel/preset-env',
        //           // {targets:'chrome 101'}
        //         ]
        //       ]
        //     }
        //   }
        // ]
      }
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
        title: 'copy-webpack-plugin',
        //   // template：复制制定路径文件，病自动引入打包输出的所有资源
        // public为打包模块，确定后一般不做修改
        // template: './public/index.html'
        template: './src/index.html'
      }),
    new CleanWebpackPlugin(),
    // BASE_URL需要多加一层引号
    new DefinePlugin({
      BASE_URL: '"./"'
    }),
    // 配置copy-webpack-plugin，实现favicon.ico等不需要打包的资源从public到dist的拷贝
    new CopyWebpackPlugin({
      // 数组，可以配置多个拷贝项
      patterns: [
        {
          from: 'public',
          // 拷贝除指定文件外的其他所有文件
          globOptions: {
            // 需要写**/，表示从public目录下查找，否则报错（输出文件重复）
            ignore: [
              '**/index.html'
            ]
          }
          // to: ''
        }
      ]
    })
  ]
}

// 自定义插件（插件本质：类Class）
// class MyPlugin {
//   constructor(){}
//   apply()
// }