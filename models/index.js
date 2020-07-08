let Sequelize = require('sequelize');
let path = require('path');
let fs = require('fs');
let dotenv = require('dotenv');

dotenv.config(); //load config

const sequelize = new Sequelize(process.env.DATABASE,
    process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        timezone: '+09:00',
        operatorsAliases: Sequelize.Op,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
});

let db = [];

fs.readdirSync(__dirname)
    .filter(file => {
        return file.indexOf('.js') && file !== 'index.js'
    })
    .forEach(file => {
        let model = sequelize.import(path.join(__dirname, file));
        
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if("associate" in db[modelName]) {
        console.log('123456');
        
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;