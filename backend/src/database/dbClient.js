// /** Dependencies */
// const Sequelize = require('sequelize');
// /** Models */
// const userModel = require('./models/userModel');
// /** Repositories */
// const UserRepository = require('./repositories/UserRepository');


// function dbClient(mediator) {
//     try {
//         const sequelize = new Sequelize('database_development_dev2', 'postgres', 'passwod', {
//             host: 'localhost',
//             dialect: 'postgres',
//             port: '5432',

//             pool: {
//                 max: 5,
//                 min: 0,
//                 acquire: 30000,
//                 idle: 10000
//             },

//             define: {
//                 timestamps: false,
//                 createdAt: false,
//                 updatedAt: false
//             }
//         });

//         const UserModel = userModel(sequelize);

//         (async () => {
//             await sequelize.authenticate();
//             await sequelize.sync({ force: true });
//         })();

//         const userRepository = new UserRepository(UserModel);

//         const repositories = {
//             userRepository
//         }

//         mediator.emit('db:ready', repositories);
//     } catch (error) {
//         console.log(error);
//         mediator.emit('db:failed')
//     }
// }

// module.exports = dbClient;