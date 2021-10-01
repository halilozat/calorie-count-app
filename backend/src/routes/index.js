/** Routes */
const v1 = require('./v1');

module.exports = function routes(fastify, options, done) {
    fastify.register(v1, { prefix: '/v1' })

    done();
}