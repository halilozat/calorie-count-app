const request = require('request');

module.exports = function (fastify, opts, done) {
    //REGISTER
    fastify.post("/getFoods", async (req, res) => {
        try {
            const query = req.body.query || "5 eggs and 100g oat and tea and bread";
            const foodApi = request.get({
                url: `https://api.calorieninjas.com/v1/nutrition?query=${query}`,
                headers: {
                    'X-Api-Key': '6A1Khw0bb4Yytpf9cVkUGA==RnqW2ay0MqmwlBkh'
                },
            }, function (error, response, body) {
                if (error) return console.error('Request failed:', error);
                else if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
                else console.log(body)
            });
            res.code(200).send(foodApi)
        } catch (error) {
            console.log(error)
        }
    });

    done();
}