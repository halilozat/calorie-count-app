
const FoodsController = require('../../controllers/v1/FoodsController')

module.exports = function (fastify, opts, done) {
    fastify.post("/foods", FoodsController.getFoodApiData);
    done();
}