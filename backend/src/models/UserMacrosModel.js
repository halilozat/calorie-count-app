const Sequelize = require('sequelize');
const db = require('../database/database');

const UserMacros = db.define('userMacros', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    protein: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    carb: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    fat: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    calorie: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

module.exports = UserMacros;