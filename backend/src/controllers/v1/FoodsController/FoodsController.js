/** Validations */
const FoodValidations = require('./FoodsValidations')


class FoodsController {

  static async GetFoodFromApi(req, res) {
    try {
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
        FoodName,
        Gram,
        Amount,
        Calorie,
        Carb,
        Protein,
        Fat
      } = request.body;

      const {
        userFoodRepository
      } = repositories;

      const dbPayload = {
        userId: UserId,
        foodname: FoodName,
        gram: Gram,
        amount: Amount,
        calorie: Calorie,
        carb: Carb,
        protein: Protein,
        fat: Fat
      }

      const food = await userFoodRepository.addFood(dbPayload)

      reply.code(201).send(food)
    } catch (error) {
      reply.code(500).send(error);
    }
  }

  static async GetFoodByUserId(repositories, request, response) {
    try {
      const {
        userFoodRepository
      } = repositories;
      const userId = request.params.userId

      const getFoodById = await userFoodRepository.getFoodByUserId(userId)
      response.code(200).send(getFoodById);
    } catch (err) {
      response.code(500).send(err);
    }
  }

  static async DeleteFoodByUserId(repositories, request, response) {
    try {
      const {
        userFoodRepository
      } = repositories;
      const userId = request.params.userId

      const deleteFood = await userFoodRepository.deleteFood(userId);
      response.code(200).send(deleteFood)
    } catch (error) {
      response.code(403).send("You are not allowed!")
    }
  }

}

module.exports = FoodsController;