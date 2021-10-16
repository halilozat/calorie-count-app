class UserFoodRepository {
    constructor(model) {
        this.model = model;
    }

    addFood(food) {
        return new Promise(async (response, reject) => {
            try {
                const newFood = this.model.build(food);
                const output = await newFood.save();

                response(output);
            } catch (error) {
                reject(error);
            }
        })
    }

    getFoodByUserId(userId) {
        return new Promise(async (response, reject) => {
            try {
                const foods = await this.model.findAll({ where: { userId } }) //userId: request.params.id
                response.send(foods)

            } catch (error) {
                reject(error)
            }
        })
    }

    deleteFood(userId) {
        return new Promise(async (response, reject) => {
            try {
                await this.model.destroy({ where: { userId } }); //userId: request.params.id
                response.send("Food has been deleted!")
            } catch (error) {
                reject(error)
            }
        })

    }
}

module.exports = UserFoodRepository;