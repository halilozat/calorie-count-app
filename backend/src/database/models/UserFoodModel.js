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
        foodname: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "egg1"
        },
        gram: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        calorie: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        carb: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        protein: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fat: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: 'userFoods',
        indexes: [{ fields: ['userId'] }]
    });
}