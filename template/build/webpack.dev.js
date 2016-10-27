'use strict'
const webpack = require('webpack')
const base = require('./webpack.base')
const _ = require('./utils')

base.devtool = 'eval-source-map'
base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
)

base.module.loaders.push(
  {
    test: /\.css$/,
    loader: _.cssLoader
  }
)

module.exports = base
