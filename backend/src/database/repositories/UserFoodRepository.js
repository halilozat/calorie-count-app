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

    deleteFood(payload) {

    }
}

module.exports = UserFoodRepository;