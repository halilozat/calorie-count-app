/** Dependencies */
const { DataTypes } = require('sequelize');

module.exports = function userMacroModel(sequelize) {
    return sequelize.define('UserMacros', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            defaultValue: 1
        },
        protein: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        carb: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        fat: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        calorie: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        }
    }, {
        tableName: 'userMacros',
        indexes: [{ fields: ['userId'] }]
    });
}


