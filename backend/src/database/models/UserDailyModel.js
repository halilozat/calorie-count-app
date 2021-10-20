/** Dependencies */
const { DataTypes } = require('sequelize');

module.exports = function userDailyModel(sequelize) {
    return sequelize.define('UserDaily', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        totalCalorie: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        totalCarb: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        totalProtein: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        totalFat: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createDateTime: {
            type: DataTypes.DATEONLY(),
            defaultValue: new Date(),
        },
    }, {
        tableName: 'userDailies',
        indexes: [{ fields: ['userId'] }]
    });
}