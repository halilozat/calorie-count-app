const authController = require('../../controllers/v1/authController')
const authenticationMiddleware = require('../../middlewares/authMiddleware')


module.exports = function (fastify, opts, done) {
    fastify.addHook('preHandler', authenticationMiddleware)

    fastify.post("/register", authController.register);

    fastify.post("/login", authController.login);

    fastify.post("/logout/:id", authController.logout);

    fastify.get("/refresh/:id", authController.refreshToken);

    fastify.get("/me", authController.me)

    done();
}