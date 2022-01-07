const path = require('path')
const webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV;
module.exports = {
  entry: NODE_ENV === 'development' ? './src/main.js' : './src/components/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',//路径
    filename: 'vue-cascade.js',//打包之后的名称
    library: 'vue-cascade-ui', // 指定的就是你使用require时的模块名
    libraryTarget: 'umd', // 指定输出格式
    umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  }
}
