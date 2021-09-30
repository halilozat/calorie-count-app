const UserMacrosModel = require("../models/UserMacrosModel");


const addMacros = async (request, response) => {
    // const checkBasket = food.find(item => item.name === food.name)
    try {
        const newMacros = new UserMacrosModel(request.body);
        const savedMacros = await newMacros.save();
        response.code(201).send(savedMacros);
    } catch (error) {
        response.code(500).send(error);
    }
}

const getByUserId = async (request, response) => {
    try {
        const userId = request.params.userId
        const getMacrosById = await UserMacrosModel.findAll({ where: { userId } })
        response.code(200).send(getMacrosById);
    } catch (error) {
        response.code(500).send(error);
    }
}

const UpdateByUserId = async (request, response) => {
    try {
        await UserMacrosModel.update({ where: { userId: request.params.id } });
        response.code(200).send("The food has been deleted...")
    } catch (error) {
        response.code(403).send("You are not allowed!")
    }
}



module.exports = {
    addMacros,
    getByUserId,

}