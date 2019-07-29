const { spawn } = require('child_process')
const { resolve } = require('path')
const build = require('./build')

const bin = resolve(process.cwd(), 'bin/run.js')

function start() {
  return build().then(() => {
    spawn('node', [bin], { stdio: 'inherit' })
  })
}

module.exports = start
