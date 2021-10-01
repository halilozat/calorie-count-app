// /** Dependencies */
// const crypto = require('crypto');
// const { DataTypes } = require('sequelize');

// module.exports = function userModel(sequelize) {
//     return sequelize.define('User', {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         userRefId: {
//             type: DataTypes.UUID,
//             defaultValue: crypto.randomUUID(),
//         },
//         firstName: {
//             type: DataTypes.STRING,
//         },
//         lastName: {
//             type: DataTypes.STRING
//         },
//         email: {
//             type: DataTypes.STRING,
//             required: true,
//         },
//         password: {
//             type: DataTypes.STRING,
//             required: true,
//             min: 6,
//             max: 36
//         },
//         status: {
//             type: DataTypes.STRING,
//             defaultValue: 'Active',
//         },
//         createDateTime: {
//             type: DataTypes.DATE,
//             defaultValue: new Date(),
//         },
//         updatedDateTime: {
//             type: DataTypes.DATE,
//             defaultValue: new Date(),
//         }
//     }, {
//         tableName: 'users',
//         indexes: [{ fields: ['userRefId'] }]
//     });
// }