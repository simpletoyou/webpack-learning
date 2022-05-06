import '../font/iconfont.css'

function packFont() {
    const ele = document.createElement('div')

    const oSpan = document.createElement('span')
    oSpan.className = 'iconfont icon-linggan lg-icon'
    ele.appendChild(oSpan)
    return ele
}
document.body.appendChild(packFont())