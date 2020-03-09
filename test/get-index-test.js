let sandbox = require('@architect/sandbox')
let data = require('@begin/data')
let tiny = require('tiny-json-http')
let assert = require('assert')

describe('mocha app', () => {

  // setup the sandbox
  let end

  before(async () => {
    end = await sandbox.start()
  })

  after(async () => {
    await end()
  })

  // the test suite
  describe('@http', function() {
    it('should get /', async () => {
      let url = 'http://localhost:3333'
      let result = await tiny.get({url})
      assert.ok(result)
    })
  })

  describe('@begin/data', function() {
    it('data.set', async () => {
      let result = await data.set({table: 'tmp'})
      assert.equal(result.table, 'tmp')
      console.log(result)
    })

    it('data.get', async () => {
      let result = await data.get({table: 'tmp'})
      assert.equal(result.length, 1)
      console.log(result)
    })
  })

})