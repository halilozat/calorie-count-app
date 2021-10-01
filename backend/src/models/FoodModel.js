const Sequelize = require('sequelize');
const db = require('../database/database');

const Food = db.define('foods', {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    foodname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gram: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    calorie: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    carb: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    protein: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    fat: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

module.exports = Food;