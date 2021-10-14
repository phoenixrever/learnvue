module.exports = {
  configureWebpack: {
    resolve: {
      // extension:[]  不用写文件后缀
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'common': '@/common',
        'network': '@/network'
      }
    },
  },
}
