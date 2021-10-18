/** Validations */
const UserMacroValidations = require('./UserMacroValidations')


class UserMacroController {
    static async AddUserMacros(repositories, request, reply) {
        try {
            const {
                UserId,
                Calorie,
                Carb,
                Protein,
                Fat
            } = request.body;

            const {
                userMacroRepository
            } = repositories;

            const userMacros = await userMacroRepository.addUserMacros({
                userId: UserId,
                calorie: Calorie,
                carb: Carb,
                protein: Protein,
                fat: Fat
            })

            reply.code(201).send(userMacros);
        } catch (error) {
            reply.code(500).send(error);
        }
    }

    static async GetMacrosByUserId(repositories, request, reject) {
        try {
            const { userMacroRepository } = repositories;

            const userId = request.params.userId
            const getMacrosById = await userMacroRepository.findMacrosByUserId(userId)

            reject.code(200).send(getMacrosById);
        } catch (error) {
            reject.code(500).send(error);
        }
    }

    static async UpdateMacrosByUserId(repositories, request, reject) {
        try {
            const { userMacroRepository } = repositories;

            const userId = request.params.userId
            const updatedMacros = await userMacroRepository.updateUserMacros(userId, request.body)

            response.code(200).send(updatedMacros)
        } catch (error) {
            response.code(403).send("You are not allowed!")
        }
    }
}

module.exports = UserMacroController;