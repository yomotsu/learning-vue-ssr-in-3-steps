const path = require('path')
const webpack = require('webpack')
const base = require('./webpack.base.config')

module.exports = Object.assign({}, base, {
  entry: './src/entry-client.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'client-bundle.js',
  },
  devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VUE_ENV': '"client"'
    })
  ]
})
