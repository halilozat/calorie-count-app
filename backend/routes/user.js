const userController = require('../controllers/userController')
const verify = require("../verifyToken");

module.exports = function (fastify, opts, done) {
    //UPDATE
    fastify.put("/:id", verify, userController.userUpdate);

    //DELETE
    fastify.delete("/:id", userController.userDelete);

    //GET
    fastify.get("/:id", userController.getUserById);

    //GET ALL
    fastify.get("/", verify, userController.getAll);

    done();
}