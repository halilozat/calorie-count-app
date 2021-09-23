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
    },
    email: {
        type: Sequelize.STRING,
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
        allowNull: false
    },
    userCarb: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    userFat: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

module.exports = User;