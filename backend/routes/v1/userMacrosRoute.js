const userMacrosController = require('../../controllers/v1/userMacrosController')

module.exports = function (fastify, opts, done) {
    //Add user macros for selected user
    fastify.post("/addMacros", userMacrosController.addMacros);

    //Get by userId
    fastify.get("/:userId", userMacrosController.getByUserId);

    //Update all user macros for selected user
    fastify.put("/:userId", userMacrosController.updateByUserId);

    done();
}