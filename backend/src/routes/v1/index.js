/** Routes */
const authRouter = require('./authRouter');
// const apiFoodRouter = require('./apiFoodRouter');
// const userFoodRouter = require('./userFoodRouter');
// const userMacrosRouter = require('./userMacrosRouter');

module.exports = function v1Routes(fastify, options, done) {
    fastify.register(authRouter, {
        prefix: '/auth'
    })
    // fastify.register(apiFoodRouter, {
    //     prefix: '/foods'
    // })

    done();
}