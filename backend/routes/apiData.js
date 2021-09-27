const apiDataController = require('../controllers/apiDataController')

module.exports = function (fastify, opts, done) {
    fastify.post("/getFoods", apiDataController.getFoodApiData);
    done();
}