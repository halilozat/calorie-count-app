const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.POSTGRESQL_DATABASE_URI, {});

module.exports = db;