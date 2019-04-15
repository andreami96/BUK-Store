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
const BookModel = require('./book');
const SimilarToModel = require('./similarTo');
const CartModel = require('./cart');
const ReservationModel = require('./reservation');

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
const Book = BookModel(sequelizeObject, Sequelize);
const SimilarTo = SimilarToModel(sequelizeObject);
const Cart = CartModel(sequelizeObject, Sequelize);
const Reservation = ReservationModel(sequelizeObject, Sequelize);

// User <-> Session relationship (Session has one column for the userID
Session.belongsTo(User, {foreignKey: {name: 'userID', allowNull: false}});

// Book <-> Event Relationship (Event has one column for the bookID)
Event.belongsTo(Book, {foreignKey: {name: 'userID', allowNull: false}});

// Book <-> Book Relationship through SimilarTo
Book.belongsToMany(Book, { as: 'Child', through: SimilarTo, foreignKey: 'ParentBookID' });

// Cart Book & User Relationship
Book.belongsToMany(User, { foreignKey: {name: 'bookID', allowNull: false}, through: Cart });
User.belongsToMany(Book, { foreignKey: {name: 'userID', allowNull: false}, through: Cart });

// Reservation Book & User Relationship
Reservation.belongsTo(User, {foreignKey: {name: 'userID', allowNull: false}});
Reservation.belongsTo(Book, {foreignKey: {name: 'bookID', allowNull: false}});

// Exports the created Objects
exports.User = User;
exports.Session = Session;
exports.Event = Event;
exports.Book = Book;
exports.SimilarTo = SimilarTo;
exports.Cart = Cart;

// Exports the init function to initialize the DB before running the application
exports.init = function(force) {
    return sequelizeObject.sync({force: force});
};