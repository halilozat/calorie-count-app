const FoodModel = require("../models/Food");


const addFood = async (request, response) => {
    // const checkBasket = food.find(item => item.name === food.name)
    try {
        const newFood = new FoodModel(request.body);
        const savedFood = await newFood.save();
        response.code(201).send(savedFood);
    } catch (err) {
        response.code(500).send(err);
    }
}

const getByUserId = async (request, response) => {
    try {
        const userId = request.params.userId
        const getFoodById = await FoodModel.findAll({ where: { userId } })
        response.code(200).send(getFoodById);
    } catch (err) {
        response.code(500).send(err);
    }
}

const deleteByUserId = async (request, response) => {
    try {
        await FoodModel.destroy({ where: { userId: request.params.id } });
        response.code(200).send("The food has been deleted...")
    } catch (error) {
        response.code(403).send("You are not allowed!")
    }
}



module.exports = {
    addFood,
    getByUserId,
    deleteByUserId
}