import run from '~/index'

test('run()', () => {
  jest.spyOn(global.console, 'log').mockImplementation()
  run()
  expect(console.log).toBeCalledWith('Hello, tacer')
})
