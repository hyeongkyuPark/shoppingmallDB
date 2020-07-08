const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
    const Brand = sequelize.define('Brand', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        imageURL: {
            type: DataTypes.STRING
        }
    });

    return Brand;
}