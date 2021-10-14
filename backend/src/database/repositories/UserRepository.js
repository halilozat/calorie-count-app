class UserRepository {
  constructor(model) {
    this.model = model;
  }

  addUser(user) {
    return new Promise(async (response, reject) => {
      try {
        const userBuild = this.model.build(user);
        const output = await userBuild.save();

        response(output);
      } catch (error) {
        reject(error);
      }
    })
  }

  findUserById(userId) {
    return new Promise(async (response, reject) => {
      try {
        const user = await this.model.findOne({ where: { userId } });

        response(user);
      } catch (error) {
        reject(error);
      }
    })
  }

  findUserByEmail(userEmail) {
    return new Promise(async (response, reject) => {
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