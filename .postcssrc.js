module.exports = {
  plugins: {

    'postcss-pxtorem': {
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
        // indexOf() 方法返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回 -1。
      },
      propList: ['*']
    }
  }
}
