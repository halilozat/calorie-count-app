const authController = require('../controllers/authController')

module.exports = function (fastify, opts, done) {
    fastify.post("/register", authController.register);

    fastify.post("/login", authController.login);

    done();
}