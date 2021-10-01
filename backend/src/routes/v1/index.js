/** Routes */
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const apiFoodRouter = require('./apiFoodRouter');
const userFoodRouter = require('./userFoodRouter');
const userMacrosRouter = require('./userMacrosRouter');

module.exports = function v1Routes(fastify, options, done) {
    fastify.register(authRouter, { prefix: '/auth' })
    fastify.register(userRouter, { prefix: '/user' })
    fastify.register(apiFoodRouter, { prefix: '/food' })
    fastify.register(userFoodRouter, { prefix: '/userFood' })
    fastify.register(userMacrosRouter, { prefix: '/userMacros' })

    done();
}