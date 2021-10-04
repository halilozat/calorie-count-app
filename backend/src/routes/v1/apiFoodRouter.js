const apiFoodController = require('../../controllers/v1/apiFoodController')

module.exports = function (fastify, opts, done) {
    fastify.post("/getFoods", apiFoodController.getFoodApiData);
    done();
}