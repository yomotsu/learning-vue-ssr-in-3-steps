const path = require('path')
const webpack = require('webpack')
const base = require('./webpack.base.config')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = Object.assign({}, base, {
  target: 'node',
  entry: './src/entry-server.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  devtool: false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VUE_ENV': '"server"'
    }),
    new VueSSRServerPlugin()
  ]
})
