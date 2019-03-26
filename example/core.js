const fastify = require('fastify')

const schema = {
  schema: {
    body: {
      type: 'object',
      properties: {
        hello: {
          type: 'string'
        }
      }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
    }
  }
}

const instance = fastify()

instance.post('/', schema, (request, reply) => {
  reply.send({ hello: 'world' })
})

instance.listen(3000, (error, address) => {
  if (error) throw error
})
