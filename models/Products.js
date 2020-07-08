const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
    const Products = sequelize.define('Products', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING
        },
        brand: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        review: {
            type: DataTypes.INTEGER
        },
        imageURL: {
            type: DataTypes.STRING
        },
        orderRunaway: {
            type: DataTypes.BOOLEAN 
        },
        todyDelivery: {
            type: DataTypes.BOOLEAN 
        },
        description: {
            type: DataTypes.TEXT
        }
    });

    Products.prototype.dateFormat = (date) => moment(date).format('YYYY-MM-DD');

    return Products;
}