<!--
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-02-14 10:31:15
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-02-24 11:10:10
-->

# WEBPACK

## webpack 功能
  * 打包：将不同类型资源按模块处理进行打包
  * 静态：打包后最终产出静态资源
  * 模块：webpack支持不同规范的模块化开发

## browserlistrc
  * 工程化
  * 兼容性 CSS、JS等
  * 如何实现兼容
  * 到底要兼容哪些平台
  * caniuse.com
    - 1%，即匹配市场上使用>1%的浏览器
    - 下载webpack时，已下载browserslist依赖，可在依赖包中查找到
    - 运行命令 npx browserslist
      - 筛选条件
        - >1%
        - default
        - dead
        - last 2 version
    - 配置
      - package.json
        ```
        "browserslist": [
          ">1%",
          "last 4 version",
          "not dead"
        ]
        ```
      - 根目录下新建 .browerserslistrc文件
        ```
        > 1%
        last 2 version
        not dead
        ```
  * postcss (需要下载该依赖)
    - JavaScript转换样式的工具
    - less(less-loader) --> css --> css-loader
    - 兼容性操作，可利用该工具为不同样式针对浏览器添加前缀，或者对css样式进行重置处理，若需要在终端执行命令，需要下载postcss-cli依赖
    - 针对浏览器进行样式兼容：http://autoprefixer.github.io/
      - 下载依赖 npm i autoprefixer -D

    - postcss-preset-env(插件集合，包含很多功能，如果将#12345678转化为rgba格式，包含autoprefixer等)
    - 预设 插件集合




