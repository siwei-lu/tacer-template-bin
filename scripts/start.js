const { spawn } = require('child_process')
const { resolve } = require('path')
const build = require('./build')

const args = process.argv.slice(3)

function start() {
  const option = {
    isDev: true,
    dist: resolve(__dirname, '..', '.tmp', 'index.js'),
  }

  return build(option).then(dist => {
    spawn('node', [dist, ...args], { stdio: 'inherit' })
  })
}

module.exports = start
