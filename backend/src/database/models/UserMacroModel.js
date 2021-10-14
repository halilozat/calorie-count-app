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
            unique: true
        },
        protein: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        carb: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        fat: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        calorie: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        tableName: 'userMacros',
    });
}


