const FoodModel = require("../models/Food");


const addFood = async (req, res) => {
    // const checkBasket = food.find(item => item.name === food.name)
    try {
        const newFood = new FoodModel(req.body);
        const savedFood = await newFood.save();
        res.code(201).send(savedFood);
    } catch (err) {
        res.code(500).send(err);
    }
}

const getByUserId = async (req, res) => {
    try {
        const userId = req.params.userId
        const getFoodById = await FoodModel.findAll({ where: { userId } })
        res.code(200).send(getFoodById);
    } catch (err) {
        res.code(500).send(err);
    }
}

const deleteByUserId = async (req, res) => {
    try {
        await FoodModel.destroy({ where: { userId: req.params.id } });
        res.code(200).send("The food has been deleted...")
    } catch (error) {
        res.code(403).send("You are not allowed!")
    }
}



module.exports = {
    addFood,
    getByUserId,
    deleteByUserId
}