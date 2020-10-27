const withSass = require('@zeit/next-sass')
module.exports = withSass({
  cssModules: true
})

const withTM = require('next-transpile-modules')([
  'drei',
  'three',
  'postprocessing',
])

module.exports = withTM()