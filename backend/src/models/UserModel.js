/** Dependencies */
const { DataTypes } = require('sequelize');
const crypto = require('crypto')

/** Database */
const db = require('../database/database');


const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userRefId: {
        type: DataTypes.UUID,
        defaultValue: crypto.randomUUID(),
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        min: 6,
        max: 30
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    userProtein: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    userCarb: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    userFat: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
});

module.exports = User;