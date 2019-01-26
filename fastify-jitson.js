'use strict'

const fp = require('fastify-plugin')
const jitson = require('jitson');
const parse = jitson();

function jitsonPlugin (fastify, options, next) {
  const opts = Object.assign({}, options || {})
  
  function contentParser (req, body, done) {
    done(null, parse(body))
  }

  fastify.addContentTypeParser(
    'application/json',
    { parseAs: 'string', bodyLimit: opts.bodyLimit },
    contentParser
  )
  next()
}

module.exports = fp(jitsonPlugin, {
  fastify: '^2.0.0',
  name: 'fastify-jitson'
})