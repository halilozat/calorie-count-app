const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    userProtein: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    userCarb: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    userFat: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
});

module.exports = User;