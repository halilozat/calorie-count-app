const AuthController = require('../../controllers/v1/AuthController/AuthController');
const authenticationMiddleware = require('../../middlewares/authMiddleware')


module.exports = function (fastify, opts, done) {
    // fastify.addHook('preHandler', authenticationMiddleware)
    fastify.post("/login", (...params) => AuthController.Login(fastify.repositories, ...params));
    fastify.post("/register", (...params) => AuthController.Register(fastify.repositories, ...params));
    fastify.get("/logout", AuthController.Logout);
    fastify.get("/me", { preHandler: authenticationMiddleware, }, AuthController.Me)
    done();
}