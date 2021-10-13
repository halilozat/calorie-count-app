const apiFoodController = require('../../controllers/v1/apiFoodController')

module.exports = function (fastify, opts, done) {
    fastify.post("/foods", apiFoodController.getFoodApiData);
    done();
}