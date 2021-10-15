const UserMacrosModel = require("../../../models/UserMacrosModel");


const addMacros = async (request, response) => {
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

const updateByUserId = async (request, response) => {
    const userId = request.params.userId
    const updatedMacros = await UserMacrosModel.findOne({ where: { userId } })
    try {
        await updatedMacros.update(request.body);
        response.code(200).send(updatedMacros)
    } catch (error) {
        response.code(403).send("You are not allowed!")
    }
}



module.exports = {
    addMacros,
    getByUserId,
    updateByUserId
}