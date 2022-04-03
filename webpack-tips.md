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

    - 对不同类型样式表进行统一配置，新建postcss.config.js文件，书写相关配置代码，实现代码复用

## import引入css，postcss-preset-env不生效
   解释如下：
    1 login.css @import语句引入了test.css
    2 login.css 可以被匹配，当它被匹配到之后就是postcss-loader进行工作
    3 基于当前代码 postcss-loader拿到了login.css中代码后 分析基于我们的筛选条件并不需要对相关代码进行额外处理
    4 最终就将代码直接交给css-loader
    5 此时 css-loader是可以处理 @import media url.. 这时候它又拿到了test.css文件，但是loader不会往前找配置处理
    6 最终将处理好的css代码交给style-loader进行展示
    7 故 import引入的css文件内 相关代码不会被进行处理也就不会被添加前缀了
  解决方法：
    对css-loader设置相关属性
    
