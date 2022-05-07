
// const { resolve } = require('path')
const resolveApp = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { merge } = require('webpack-merge')

// 导入其他配置
const prodConfig = require('./webpack.prod')
const devConfig = require('./webpack.dev')

// 定义对象保存 base配置信息
const commonConfig = {

    entry: './src/index.js', //（路径指向有问题，然后没有报错）
    // context: path.resolve(__dirname,'./'), // (这里打开注释会报错，因为配置指向的是.config/webpack.common.js,故上条入口文件正常执行了)

    // 配置模块解析规则(当前版本下报错，需要作修改)
    // resolve: {
    //   extendsions: [".js",".json",".ts",".vue",".jsx"],
    //   alias: {
    //     // 为项目路径配置别名
    // '@':path.resolve(__dirname,"../src")(该行注释掉，下方注释打开)
    // '@':path: resolveApp('./dist'),
    //   }
    // },

    output: {
        // path: resolve(__dirname, '../dist'),
        path: resolveApp('./dist'),
        filename: 'js/main.js',
        // publicPath: '/lg'
        // publicPath: ''
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
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
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
                type: 'asset',
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
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                // 修改打包后入口文件标签页名
                title: 'copy-webpack-plugin',
                //   // template：复制制定路径文件，病自动引入打包输出的所有资源
                // public为打包模块，确定后一般不做修改
                // template: './public/index.html'
                template: './src/index.html'
            }),
    ]
}

module.exports = (env) => {
    console.log('----->', env);
    // 输出如下： -----> { WEBPACK_BUNDLE: true, WEBPACK_BUILD: true, production: true }
    const isProduction = env.production
    // 依据当前打包模式合并配置信息
    const config = isProduction ? prodConfig : devConfig
    console.log('config-------------',config)
    const mergeConfig = merge(commonConfig, config)
    return mergeConfig
}


// 自定义插件（插件本质：类Class）
// class MyPlugin {
//   constructor(){}
//   apply()
// }