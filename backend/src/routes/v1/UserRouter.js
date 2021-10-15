const UserMacroController = require('../../controllers/v1/UserMacroController/UserMacroController')


module.exports = function (fastify, opts, done) {



    /** User Macros */
    fastify.get("/getApiFoods", FoodsController.GetFoodFromApi);
    fastify.get("/getFoods", (...params) => FoodsController.GetFoodByUserId(fastify.repositories, ...params));
    fastify.post("/addFood", (...params) => FoodsController.AddFood(fastify.repositories, ...params));
    fastify.delete("/deleteFood", (...params) => FoodsController.DeleteFoodByUserId(fastify.repositories, ...params));

    done();

}