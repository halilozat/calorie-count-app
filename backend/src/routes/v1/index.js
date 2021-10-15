/** Routes */
const authRouter = require('./AuthRouter');
const foodsRouter = require('./FoodsRouter');
const userRouter = require('./UserRouter')


module.exports = function v1Routes(fastify, options, done) {

    fastify.register(authRouter, { prefix: '/auth' })
    fastify.register(foodsRouter, { prefix: '/foods' })
    fastify.register(userRouter, { prefix: '/users' })

    done();
}