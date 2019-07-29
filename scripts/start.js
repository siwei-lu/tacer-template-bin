const { spawn } = require('child_process')
const { resolve } = require('path')
const build = require('./build')
const bin = resolve(process.cwd(), 'bin')
const args = process.argv.slice(3)

function start() {
  return build({ isDev: true }).then(dist => {
    spawn('node', [bin, ...args], { stdio: 'inherit' })
  })
}

module.exports = start
