/** Dependencies */
const { DataTypes } = require('sequelize');

module.exports = function userFoodModel(sequelize) {
    return sequelize.define('UserFood', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        foods: {
            type: DataTypes.JSON,
            defaultValue: []
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start: {
            type: DataTypes.DATE(),
            defaultValue: new Date(),
            allowNull: true
        },
    }, {
        tableName: 'userFoods',
        indexes: [{ fields: ['userId'] }]
    });
}