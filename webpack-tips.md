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
  
  ## webpack打包图片
  <!-- 
    打包图片 file-loader
    - img src
      + 使用 require 导入图片，如果不配置 esModule 为 false， 则需要 .default导出
      + 也可在配置中设置 esModule：false
      + 第三种方法：采用import xx from 图片资源，此时可以直接使用xxx
    - background url
   -->
## 设置图片名称与输出
  url-loader 处理图片
  file-loader
  将需要打包的图片资源拷贝到指定目录，访问时分开请求
  url-loader
  把当前需要打包的图片资源以base64 URI的方式加载到代码中
  好处：使用file-loader会被打包图片做拷贝，在访问静态资源需要发起请求，使用url-loader则只需要一份main.js便可以获取到需要的资源，减少了请求次数
  风险：如果图片资源过大，在首屏加载的情况，对页面加载时间会有一定影响
  url-loader内部可以调用file-loader
  limit
## asset module type（webpack5 内置）
  资源类型模块
  简化loader使用或者替换
  asset/resource
  file-loader 拷贝目标资源到指定目录(输出路径)
  asset/inline -url-loader 把相应资源添加到代码中 （所有图片资源转化为data uri）
  asset/source
  row-loader
  asset 设置相关配置参数 进行所打包图片体积大小的阈值限制
  parser 配置图片体积阈值

## webpack插件使用
  1. 免于手动删除打包后文件，直接重新打包(clean-webpack-plugin)
  2. 修改打包后文件入口标题名称等
  3. loader：对特定模块类型进行转换（js、json等，不能处理图片、ttf等）
  4. plugin：可以实现更多（插件有其周期，可以实现设定在打包开始前执行，或者打包过程中执行等；打包优化，定义全局变量实现数据共享等）
  5. 依赖文档看https://www.npmjs.com/（某些依赖可动态配置，如html-webpack-plugin可配置打包后页面名称，详看文档）

## copy-webpack-plugin
  * 依赖安装(使用@9版本)
  * 处理图标字体，需要配置loader

## Babel
  * 为什么需要babel：JSX TS ES6+ ----> 转化处理，实现浏览器平台直接使用（如：postcss 处理 js兼容）

## babel-loader
  * 需要配置相关插件以实现对js处理功能
  * 相关配置文件
    - babel.config.js(json cjs mjs)
    - babelrc.json(js)
    