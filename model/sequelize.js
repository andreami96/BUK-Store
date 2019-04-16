"use strict";
/**
 *  Configuration file for the database
 */
// Import Sequelize
const Sequelize = require('sequelize');

// Create the model objects from the single model files
const UserModel = require('./User/user');
const SessionModel = require('./User/session');
const EventModel = require('./Event/event');
const BookModel = require('./Book/book');
const AuthorModel = require('./Author/author');
const SimilarToModel = require('./Book/similarTo');
const CartModel = require('./User/cart');
const ReservationModel = require('./User/reservation');
const ReviewModel = require('./Book/review');
const WrittenByModel = require('./Book/writtenBy');
const GenreModel = require('./Book/genre');
const ThemeModel = require('./Book/theme');
const BookThemeModel = require('./Book/bookTheme');

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
const Author = AuthorModel(sequelizeObject, Sequelize);
const SimilarTo = SimilarToModel(sequelizeObject);
const Cart = CartModel(sequelizeObject, Sequelize);
const Reservation = ReservationModel(sequelizeObject, Sequelize);
const Review = ReviewModel(sequelizeObject, Sequelize);
const WrittenBy = WrittenByModel(sequelizeObject);
const Genre = GenreModel(sequelizeObject, Sequelize);
const Theme = ThemeModel(sequelizeObject, Sequelize);
const BookTheme = BookThemeModel(sequelizeObject);

// User <-> Session relationship (Session has one column for the userID
Session.belongsTo(User, {foreignKey: {name: 'userID', allowNull: false}});

// Book <-> Event Relationship (Event has one column for the bookID)
Event.belongsTo(Book, {foreignKey: {name: 'ISBN', allowNull: false}});

// Book <-> Book Relationship through SimilarTo
Book.belongsToMany(Book, { as: 'Child', through: SimilarTo, foreignKey: 'ParentISBN' });

// Cart Book & User Relationship
Book.belongsToMany(User, { foreignKey: {name: 'ISBN', allowNull: false}, through: Cart });
User.belongsToMany(Book, { foreignKey: {name: 'userID', allowNull: false}, through: Cart });

// Reservation Book & User Relationship
Reservation.belongsTo(User, {foreignKey: {name: 'userID', allowNull: false}});
Reservation.belongsTo(Book, {foreignKey: {name: 'ISBN', allowNull: false}});

// Review <-> Book Relationship (Review has one book)
Review.belongsTo(Book, {foreignKey: {name: 'ISBN', allowNull: false}});

// Book <-> Author Relationship
Book.belongsToMany(Author, { foreignKey: {name: 'ISBN', allowNull: false}, through: WrittenBy });
Author.belongsToMany(Book, { foreignKey: {name: 'authorID', allowNull: false}, through: WrittenBy });

// Book <-> Genre Relationship (Book has a column with the genreID)
Book.belongsTo(Genre, {foreignKey: {name: 'genreID', allowNull: false}});

// Book <-> Theme Relationship
Book.belongsToMany(Theme, { foreignKey: {name: 'ISBN', allowNull: false}, through: BookTheme });
Theme.belongsToMany(Book, { foreignKey: {name: 'themeID', allowNull: false}, through: BookTheme });

// Exports the created Objects
exports.User = User;
exports.Session = Session;
exports.Event = Event;
exports.Book = Book;
exports.Author = Author;
exports.WrittenBy = WrittenBy;
exports.SimilarTo = SimilarTo;
exports.Cart = Cart;
exports.Reservation = Reservation;
exports.Review = Review;
exports.Genre = Genre;
exports.Theme = Theme;
exports.BookTheme = BookTheme;

// Exports the init function to initialize the DB before running the application
exports.init = function(force) {
    return sequelizeObject.sync({force: force});
};