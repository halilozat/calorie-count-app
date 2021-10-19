class UserDomainService {
    static async AddUser(repositories, payload) {
        const { userRepository } = repositories;
        const addUserRepositoryResponse = await userRepository.addUser(payload);

        return addUserRepositoryResponse;
    }

    static async FindUserByEmail(repositories, email) {
        const { userRepository } = repositories;
        const findUserByEmailRepositoryResponse = await userRepository.findUserByEmail(email)

        return findUserByEmailRepositoryResponse;
    }

    static async FindUserByUserId(repositories, userId) {
        const { userRepository } = repositories;
        const findUserByUserIdRepositoryResponse = await userRepository.FindUserById(userId)

        return findUserByUserIdRepositoryResponse;
    }
}

module.exports = UserDomainService