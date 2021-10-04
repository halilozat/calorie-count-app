const { DataTypes } = require('sequelize');
const db = require('../database/database');

const Food = db.define('foods', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    foodname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gram: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    calorie: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    carb: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    protein: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fat: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = Food;