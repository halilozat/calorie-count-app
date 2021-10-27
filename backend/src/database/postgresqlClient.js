/** Dependencies */
const { Sequelize } = require('sequelize');

/** Models */
const UserModel = require('./models/UserModel')
const UserFoodModel = require('./models/UserFoodModel')
const UserMacroModel = require('./models/UserMacroModel')

/** UserRepository */
const UserRepository = require('./repositories/UserRepository')
const UserFoodRepository = require('./repositories/UserFoodRepository');
const UserMacroRepository = require('./repositories/UserMacroRepository')


function postgreSQLClient(mediator) {
  try {
    const sequelize = new Sequelize(process.env.POSTGRESQL_DATABASE_URI, {
      logging: false,
      define: {
        timestamps: false,
        createdAt: false,
        updatedAt: false
      }
    });

    const userModel = UserModel(sequelize);
    const userFoodModel = UserFoodModel(sequelize);
    const userMacroModel = UserMacroModel(sequelize);

    (async () => {
      await sequelize.authenticate();
      await sequelize.sync({ force: false });
    })()

    const userRepository = new UserRepository(userModel);
    const userFoodRepository = new UserFoodRepository(userFoodModel)
    const userMacroRepository = new UserMacroRepository(userMacroModel)

    const repositories = {
      userRepository,
      userFoodRepository,
      userMacroRepository,
    }

    mediator.emit('db:ready', repositories);
  } catch (error) {
    mediator.emit('db:failed');
  }
}

module.exports = postgreSQLClient;