const userMacrosController = require('../controllers/userMacrosController')

module.exports = function (fastify, opts, done) {
    //Add user macros for selected user
    fastify.post("/addMacros", userMacrosController.addMacros);

    //Get by userId
    fastify.get("/:userId", userMacrosController.getByUserId);

    //Update all user macros for selected user
    // fastify.put("/:id", userMacrosController.updateByUserId);

    done();
}