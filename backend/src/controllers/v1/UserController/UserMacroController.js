/** Validations */
const UserMacroValidations = require('../../../validations/UserMacroValidations')

/** Services */
const UserMacrosDomainService = require('../../../domain/services/UserMacrosDomainServices')


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

            const userMacros = await UserMacrosDomainService.AddUserMacros(repositories, {
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
            const userId = request.params.userId
            const getMacrosById = await UserMacrosDomainService.FindUserMacrosByUserId(repositories, userId)

            reject.code(200).send(getMacrosById);
        } catch (error) {
            reject.code(500).send(error);
        }
    }

    static async UpdateMacrosByUserId(repositories, request, reject) {
        try {
            const {
                UserId,
                Calorie,
                Carb,
                Protein,
                Fat
            } = request.body;

            const userId = request.params.userId

            const updatedMacros = await UserMacrosDomainService.UpdateUserMacrosByUserId(repositories, userId, {
                userId: UserId,
                calorie: Calorie,
                carb: Carb,
                protein: Protein,
                fat: Fat
            })

            reject.code(200).send(updatedMacros)
        } catch (error) {
            reject.code(403).send("You are not allowed!")
        }
    }
}

module.exports = UserMacroController;