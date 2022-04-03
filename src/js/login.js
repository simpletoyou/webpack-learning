/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-02-14 10:19:48
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-02-24 11:03:16
 */
// 单独css文件处理
// import 'style-loader!css-loader!../css/login.css'
import '../css/login.css'
// import '../css/login.less'
import '../css/test.css'

function login() {
  const e = document.createElement('h2')
  e.innerHTML = 'Hello webpack'
  e.className = 'title'
  return e
}

document.body.appendChild(login())

