const Food = require("../models/Food");


module.exports = function (fastify, opts, done) {
    //Add new food for selected user
    fastify.post("/addFood", async (req, res) => {
        // const checkBasket = food.find(item => item.name === food.name)
        try {
            const newFood = new Food(req.body);
            const savedFood = await newFood.save();
            res.code(201).send(savedFood);
        } catch (err) {
            res.code(500).send(err);
        }
    });

    //Get by userId
    fastify.get("/:userId", async (req, res) => {
        try {
            const userId = req.params.userId
            const getFoodById = await Food.findAll({ where: { userId } })
            res.code(200).send(getFoodById);
        } catch (err) {
            res.code(500).send(err);
        }
    });

    //Delete all food for selected user
    fastify.delete("/:id", async (req, res) => {
        try {
            await Food.destroy({ where: { userId: req.params.id } });
            res.code(200).send("The food has been deleted...")
        } catch (error) {
            res.code(403).send("You are not allowed!")
        }
    });


    done();
}