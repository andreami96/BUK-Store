"use strict";

const Sequelize = require('sequelize');

let sequelizeObject = new Sequelize({
    database: 'BUK_Database',
    username: 'postgres',
    password: 'admin',
    dialect: 'postgres'
});


exports.init = function(force) {
    return sequelizeObject.sync({force: force});
};