module.exports = {
    // 将webpack对不同类型样式表进行配置（配置复用，避免冗杂）
    plugins: [
        require('postcss-preset-env')
        // require('autoprefixer')
    ]
}