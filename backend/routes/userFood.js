const Food = require("../models/Food");


module.exports = function (fastify, opts, done) {
    //Add new food for selected user
    fastify.post("/addFood", async (req, res) => {
        const newFood = new Food(req.body);
        try {
            const savedFood = await newFood.save();
            res.code(201).send(savedFood);
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