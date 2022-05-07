

// 自动清除之前的打包文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')



module.exports = {
    mode: 'development',
    plugins: [
        
          new CleanWebpackPlugin(),
         
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
          }),
    ]
}