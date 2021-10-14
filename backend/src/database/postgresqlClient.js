/** Dependencies */
const { Sequelize } = require('sequelize');

/** Models */
const userModel = require('./models/UserModel')

/** UserRepository */
const UserRepository = require('./repositories/UserRepository')



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

    const UserModel = userModel(sequelize);

    (async () => {
      await sequelize.authenticate();
      await sequelize.sync({ force: true });
    })()

    const userRepository = new UserRepository(UserModel);

    const repositories = {
      userRepository
    }

    mediator.emit('db:ready', repositories);
  } catch (error) {
    mediator.emit('db:failed');
  }
}


module.exports = postgreSQLClient;