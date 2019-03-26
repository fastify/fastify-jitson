const { test } = require('tap')
const fastify = require('fastify')
const plugin = require('../plugin')

function initFastify () {
  const instance = fastify()
  instance.register(plugin)
  instance.post('/', function (request, reply) {
    reply.send(request.body)
  })
  return instance
}

test('initialization works', t => {
  const instance = initFastify()
  instance.listen(0, (error) => {
    t.error(error)
    instance.server.unref()
    t.end()
  })
})

test('plugin works', async t => {
  const instance = initFastify()
  const payload = {
    hello: 'world'
  }
  const response = await instance.inject({
    method: 'POST',
    url: '/',
    payload
  })
  t.deepEqual(payload, JSON.parse(response.payload))
  t.end()
})
