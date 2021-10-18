/** DTOs */
const UserDTO = require("../DTOs/UserDTO");

class UserDomainService {
    static async Register(repositories) {
        const { userRepository } = repositories;

        const addUserRepositoryResponse = await userRepository.addUser(payload);

        const userDTO = new UserDTO({
            UserName: addUserRepositoryResponse.UserName,
            Email: addUserRepositoryResponse.Email,
            Password: addUserRepositoryResponse.Password,
        })

        return userDTO.toJSON();

    }
}

module.exports = UserDomainService