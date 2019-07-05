const { spawn } = require('child_process')

function test() {
  spawn('ts-mocha', ['--paths', `test/index.ts`, `test/**/*.ts`], {
    stdio: 'inherit',
    cwd: process.cwd(),
  })
}

module.exports = test
