const { DataTypes } = require('sequelize');
const db = require('../database/database');

const UserMacros = db.define('userMacros', {
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
});

module.exports = UserMacros;