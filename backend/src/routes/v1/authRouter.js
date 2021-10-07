const authController = require('../../controllers/v1/authController')

module.exports = function (fastify, opts, done) {
    fastify.post("/register", authController.register);

    fastify.post("/login", authController.login);

    fastify.post("/logout/:id", authController.logout);

    fastify.get("/refresh/:id", authController.refreshToken);

    done();
}