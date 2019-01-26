const tap = require('tap');
const request = require('request')
const Fastify = require('fastify');
const fastifyJitson = require('../fastify-jitson');

function buildFastify () {
    const fastify = Fastify();
    fastify.register(fastifyJitson);
    fastify.post('/',(request, reply) => {
        reply.send(request.body);
    });
    return fastify;
  }

tap.test('POST \ HELLO WORLD',t => {
    const fastify = buildFastify();
    t.plan(5);
    t.tearDown(()=> fastify.close());
    fastify.listen(0,(err)=>{
        t.error(err);
        request({
            method:'POST',
            body: {'hello':'world'},
            json: true,
            url: 'http://localhost:' + fastify.server.address().port
        },(err,response,body)=>{
            t.error(err);
            t.strictEqual(response.statusCode, 200)
            t.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8')
            t.deepEqual(body, { hello: 'world' })
        })
    })

})


