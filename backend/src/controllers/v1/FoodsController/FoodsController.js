/** Validations */
const FoodValidations = require('../../../validations/FoodsValidations')

/** Services */
const UserFoodDomainService = require('../../../domain/services/UserFoodDomainService')


class FoodsController {

  static async GetFoodFromApi(req, res) {
    try {
      const request = require('request');
      const query = req.body.query || "5 eggs and 100g oat and tea and peanut butter";
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
  }

  static async AddFood(repositories, request, reply) {
    try {
      const {
        UserId,
        Title,
        Foods,
        Start
      } = request.body;

      const dbPayload = {
        userId: UserId,
        title: Title,
        start: Start,
        foods: Foods
      }

      const food = await UserFoodDomainService.AddFood(repositories, dbPayload)

      reply.code(201).send(food)
    } catch (error) {
      reply.code(500).send(error);
    }
  }

  static async GetFoodByUserId(repositories, request, response) {
    try {
      const userId = request.params.userId
      const getFoodById = await UserFoodDomainService.GetFoodsById(repositories, userId)

      response.code(200).send(getFoodById);

    } catch (err) {
      response.code(500).send(err);
    }
  }

  static async DeleteFoodByUserId(repositories, request, response) {
    try {
      const userId = request.params.userId

      const getFoodById = await UserFoodDomainService.GetFoodsById(repositories, userId)
      if (getFoodById.length === 0) { throw new Error('NotFound') }

      const deleteFood = await UserFoodDomainService.DeleteFood(repositories, userId)

      response.code(200).send(deleteFood)
    } catch (error) {

      if (['NotFound'].includes(error.message)) {
        response.code(400).send(error.message);
      } else {
        response.code(403).send("You are not allowed!")
      }
    }
  }

}

module.exports = FoodsController;