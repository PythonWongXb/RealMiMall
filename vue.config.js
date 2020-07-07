/*
 * @Author: your name
 * @Date: 2020-07-02 09:35:10
 * @LastEditTime: 2020-07-02 09:35:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /mimall/vue.config.js
 */
module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  // publicPath:'/app',
  // outputDir:'dist',
  // indexPath:'index2.html',
  // lintOnSave:false,
  productionSourceMap: true,
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  }
}
