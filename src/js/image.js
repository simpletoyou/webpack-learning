// 采用ESmodule导入规范
import imgSrc from '../img/tree.png'
import '../css/img.css'


function packImg() {
    // 创建容器元素
    const ele = document.createElement('div')
    // 创建img标签 设置src属性 将图片作为模块使用require引入
    const img = document.createElement('img')
    img.width = 400
    // img.src = require('../img/tree.png')
    img.src = imgSrc
    // img.src = require('../img/tree.png').default
    ele.appendChild(img)


    // 设置背景图片
    const bg = document.createElement('div')
    bg.className = 'bgBox'
    ele.appendChild(bg)


    return ele
}

document.body.appendChild(packImg())

// export {
//     packImg
// }