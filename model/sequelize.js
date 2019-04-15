"use strict";
/**
 *  Configuration file for the database
 */
// Import Sequelize
const Sequelize = require('sequelize');

// Create the model objects from the single model files
const UserModel = require('./user');
const SessionModel = require('./session');
const EventModel = require('./event');

// Connect to the database
let sequelizeObject = new Sequelize({
    database: 'BUK_Database',
    username: 'postgres',
    password: 'admin',
    dialect: 'postgres'
});

// Create the Object which will be used inside the whole application
const User = UserModel(sequelizeObject, Sequelize);
const Session = SessionModel(sequelizeObject, Sequelize);
const Event = EventModel(sequelizeObject, Sequelize);

// User <-> Session relationship (Session has one column for the userID
Session.belongsTo(User, {foreignKey: {name: 'userID', allowNull: false}});

// Exports the created Objects
exports.User = User;
exports.Session = Session;
exports.Event = Event;

// Exports the init function to initialize the DB before running the application
exports.init = function(force) {
    return sequelizeObject.sync({force: force});
};