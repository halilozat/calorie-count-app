class UserMacrosDomainService {
    static async FindUserMacrosByUserId(repositories, userId) {
        const { userMacroRepository } = repositories;
        const getUserMacrosByUserIdRepositoryResponse = await userMacroRepository.findMacrosByUserId(userId)

        return getUserMacrosByUserIdRepositoryResponse;
    }

    static async AddUserMacros(repositories, payload) {
        const { userMacroRepository } = repositories;
        const addUserMacrosRepositoryResponse = await userMacroRepository.addUserMacros(payload)

        return addUserMacrosRepositoryResponse;
    }

    static async UpdateUserMacrosByUserId(repositories, userId, payload) {
        const { userMacroRepository } = repositories;
        const updateUserMacrosByUserIdRepositoryResponse = await userMacroRepository.updateUserMacrosByUserId(userId, payload)

        return updateUserMacrosByUserIdRepositoryResponse
    }
}

module.exports = UserMacrosDomainService