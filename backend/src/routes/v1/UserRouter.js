const UserMacroController = require('../../controllers/v1/UserController/UserMacroController')


module.exports = function (fastify, opts, done) {


    /** User Macros */
    // fastify.get("/getMacros", (...params) => UserMacroController.GetMacrosByUserId(fastify.repositories, ...params));
    fastify.post("/addMacros", (...params) => UserMacroController.AddUserMacros(fastify.repositories, ...params));
    // fastify.put("/updateMacros/:userId", (...params) => UserMacroController.UpdateMacrosByUserId(fastify.repositories, ...params));

    done();

}