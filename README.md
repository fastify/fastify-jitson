# fastify-jitson
A default [jitson](https://github.com/mafintosh/jitson) parser for Fastify.

## Install
```bash
npm i -S fastify-jitson
```

## Usage
```js
const fastify = require('fastify')

fastify.register(require('fastify-jitson'), {
  sampleInterval: 100
})
```

## Configuration options
See [jitson](https://github.com/mafintosh/jitson/blob/master/README.md#api)

```js
{
  // Sample the schema everytime 100 objects get parsed
  sampleInterval: 100,
  // Support partial objects
  partial: false
}
```

### Benchmarks

```bash
# benchmark jitson parser
$ npm run benchmark

# benchmark core parser
$ npm run benchmark:core
```
