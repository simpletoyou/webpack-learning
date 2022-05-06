/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-02-11 10:15:49
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-02-14 14:13:03
 */

// const getData = require('./js/api');
// import { sum, square} from "./js/utils"

// import './js/login'
// import './js/lg'

// console.log(sum(4,5))
// console.log(square(7))

// console.log(getData())

// import './js/image'
// import './js/font'


// 在没有经过babel处理之前，打包后下方代码会作为拷贝输出
// @babel/core (babel核心,将非js代码处理后交由浏览器识别)
// @babel/cli (可以在命令行使用babel相关命令：npx babel src --out-dir build)
// @babel/plugin-transform-arrow-functions. 使用命令：npx babel src/index.js --out-dir build --plugins=@babel/plugin-transform-arrow-functions（实现将箭头函数转化为普通函数）
// @babel/plugin-transform-block-scoping(处理块作用域,将const转化为var等):npx babel src/index.js --out-dir build --plugins=@babel/plugin-transform-arrow-functions,@babel/plugin-transform-block-scoping

// 以上命令可以整合为一个：npm i @babel/preset-env -D(指定命令为：npx babel src/index.js --out-dir build --presets=@babel/preset-env)

// import "core-js/stable"
// import "regenerator-runtime/runtime"
// const title = '前端babel学习'
// const foo = () => {
//     console.log('-----',title)
// }
// foo()

// const p1 = new Promise((resolve, reject)=> {
//     console.log(111)
// })
// console.log(p1)
// console.log(' HMR');
import './title.js'
import Vue from 'vue';
import App from './App.vue'

// 需要实现热更新功能
if(module.hot) {
    // 指定模块热更新
    module.hot.accept(['./title.js'],()=>{
        console.log('titlejs模块已更新');
    })
}

new Vue({
    render: h => h(App)
}).$mount('#root')