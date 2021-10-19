class UserFoodRepository {
    constructor(model) {
        this.model = model;
    }

    addFood(payload) {
        return new Promise(async (response, reject) => {
            try {
                const newFood = new this.model(payload);
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
                const foods = await this.model.findAll({ where: { userId } })
                response(foods)

            } catch (error) {
                reject(error)
            }
        })
    }

    deleteFood(userId) {
        return new Promise(async (response, reject) => {
            try {
                await this.model.destroy({ where: { userId } }); //userId: request.params.id
                response("Foods has been deleted!")
            } catch (error) {
                reject(error)
            }
        })

    }
}

module.exports = UserFoodRepository;