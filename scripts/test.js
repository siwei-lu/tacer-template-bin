const { spawn } = require('child_process')

function test() {
  spawn('jest', {
    stdio: 'inherit',
  })
}

module.exports = test
