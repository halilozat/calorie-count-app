class UserMacrosDomainService {
    static async GetFoodsById(repositories, userId) {
        const { userFoodRepository } = repositories;
        const getFoodByIdRepositoryResponse = await userFoodRepository.getFoodByUserId(userId)

        return getFoodByIdRepositoryResponse;
    }

    static async AddFood(repositories, payload) {
        const { userFoodRepository } = repositories;
        const addFoodRepositoryResponse = await userFoodRepository.addFood(payload)

        return addFoodRepositoryResponse;
    }

    static async DeleteFood(repositories, userId) {
        const { userFoodRepository } = repositories;
        const deleteFoodRepositoryResponse = await userFoodRepository.deleteFood(userId)

        return deleteFoodRepositoryResponse
    }
}

module.exports = UserMacrosDomainService