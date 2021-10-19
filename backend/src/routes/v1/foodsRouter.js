const FoodsController = require('../../controllers/v1/FoodsController/FoodsController')


module.exports = function (fastify, opts, done) {
    fastify.get("/getApiFoods", FoodsController.GetFoodFromApi);
    fastify.get("/getFoods/:userId", (...params) => FoodsController.GetFoodByUserId(fastify.repositories, ...params));
    fastify.post("/addFood", (...params) => FoodsController.AddFood(fastify.repositories, ...params));
    fastify.delete("/deleteFoods/:userId", (...params) => FoodsController.DeleteFoodByUserId(fastify.repositories, ...params));

    done();

}