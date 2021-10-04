const { DataTypes } = require('sequelize');
const db = require('../database/database');

const TokenModel = db.define('Token', {
    userId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    refreshToken: {
        type: DataTypes.STRING,
    },
},
    {
        tableName: 'tokens'
    }
);

module.exports = TokenModel;