const userController = require('../../controllers/v1/userController')

module.exports = function (fastify, opts, done) {
    //UPDATE
    fastify.put("/:id", userController.userUpdate);

    //DELETE
    fastify.delete("/:id", userController.userDelete);

    //GET
    fastify.get("/:id", userController.getUserById);

    //GET ALL
    fastify.get("/", userController.getAll);

    done();
}