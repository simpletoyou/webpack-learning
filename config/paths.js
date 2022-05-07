const path = require('path')

// 解决配置路径指向问题
const appDir = process.cwd() //当前项目工作目录
console.log('----->',appDir)

const resolveApp = (relativePath) => {
    return path.resolve(appDir, relativePath)
}
module.exports = resolveApp