'use strict'

const webpack = require('webpack')

const base = require('./webpack.base')

base.devtool = 'eval-source-map'
base.output.publicPath = '/assets/'
base.performance.hints = false

// Plugins Configuration
base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.LoaderOptionsPlugin({
    options: {
      vue: {
        loaders: {
          css: 'style-loader!css-loader!postcss-loader'
        }
      }
    }
  })
)

base.module.rules.push({
  test: /\.css$/,
  loader: 'style-loader!css-loader!postcss-loader'
})

module.exports = base
