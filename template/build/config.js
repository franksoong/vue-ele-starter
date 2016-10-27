'use strict'
const pkg = require('../package')

module.exports = {
  port: 4000,
  title: '{{name}}',
  vendor: Object.keys(pkg.dependencies),
  babel: {
    babelrc: false,
    plugins: [['component', [
      {{#if mint}}
      { libraryName: 'mint-ui', style: true }
      {{/if}}
      {{#if element}}
      { libraryName: 'element-ui', styleLibraryName: 'theme-default' }
      {{/if}}
    ]]],
    presets: [
      ['es2015', { modules: false }],
      'stage-1'
    ]
  },
  postcss: [
    require('autoprefixer')({
      browsers: ['last 2 versions', 'ie > 8']
    }),
    require('postcss-nested')
  ],
  cssModules: false
}
