const apiDataController = require('../../controllers/v1/apiDataController')

module.exports = function (fastify, opts, done) {
    fastify.post("/getFoods", apiDataController.getFoodApiData);
    done();
}