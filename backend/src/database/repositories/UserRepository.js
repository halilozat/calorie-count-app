/** Models */
const UserModel = require('../models/UserModel');

class UserRepository {
  constructor() {
    this.model = UserModel;
  }

  addUser(payload) {
    return new Promise((response, reject) => {
      try {
        const user = new this.model(payload);

        const output = await user.save();

        response(output);
      } catch (error) {
        reject(error);
      }
    })
  }

  findUserById(userId) {
    return new Promise((response, reject) => {
      try {
        const user = await this.model.findOne({ where: { id: userId } });

        response(user);
      } catch (error) {
        reject(error);
      }
    })
  }

  findUserByEmail(userEmail) {
    return new Promise((response, reject) => {
      try {
        const user = await this.model.findOne({ where: { email: userEmail } });

        response(user);
      } catch (error) {
        reject(error);
      }
    })
  }

  deleteUser(payload) {

  }
}

module.exports = UserRepository;