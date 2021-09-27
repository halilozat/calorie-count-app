const userFoodController = require('../controllers/userFoodController')

module.exports = function (fastify, opts, done) {
    //Add new food for selected user
    fastify.post("/addFood", userFoodController.addFood);

    //Get by userId
    fastify.get("/:userId", userFoodController.getByUserId);

    //Delete all food for selected user
    fastify.delete("/:id", userFoodController.deleteByUserId);

    done();
}