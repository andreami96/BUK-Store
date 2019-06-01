"use strict";
/**
 *  Configuration file for the database
 */
const config = require('../Config/config');

// Import Sequelize
const Sequelize = require('sequelize');

// Create the Model objects from the single Model files
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
const MainGenreModel = require('./Book/mainGenre');
const GenreModel = require('./Book/genre');
const ThemeModel = require('./Book/theme');
const GenreThemeModel = require('./Book/genreTheme');
const BookThemeModel = require('./Book/bookTheme');
const HomeCarouselModel = require('./HomeCarousel/homeCarousel');
const GenericPageModel = require('./GenericPage/genericPage');

// Setup the correct configuration
let dbParameters = config.dbConfig;
if(!process.env.HEROKU)
    dbParameters.dialectOptions.ssl = false;


// Connect to the database
let sequelizeObject = new Sequelize(process.env.DATABASE_URL, config.dbConfig);

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
const MainGenre = MainGenreModel(sequelizeObject, Sequelize);
const Genre = GenreModel(sequelizeObject, Sequelize);
const Theme = ThemeModel(sequelizeObject, Sequelize);
const GenreTheme = GenreThemeModel(sequelizeObject);
const BookTheme = BookThemeModel(sequelizeObject);
const HomeCarousel = HomeCarouselModel(sequelizeObject, Sequelize);
const GenericPage = GenericPageModel(sequelizeObject, Sequelize);

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
Reservation.belongsTo(Book, {foreignKey: {name: 'ISBN', allowNull: false, primaryKey: true}});

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

// MainGenre <-> Genre Relationship
Genre.belongsTo(MainGenre, {foreignKey: {name: 'mainGenreID', allowNull: false}});

// Genre <-> Theme Relationship
Genre.belongsToMany(Theme, { foreignKey: {name: 'genreID', allowNull: false}, through: GenreTheme });
Theme.belongsToMany(Genre, { foreignKey: {name: 'themeID', allowNull: false}, through: GenreTheme });

// HomeCarousel <-> Books
HomeCarousel.belongsTo(Book, {foreignKey: {name: 'ISBN', allowNull: true}});

// HomeCarousel <-> Author
HomeCarousel.belongsTo(Author, {foreignKey: {name: 'authorID', allowNull: true}});

// HomeCarousel <-> Event
HomeCarousel.belongsTo(Event, {foreignKey: {name: 'eventID', allowNull: true}});

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
exports.MainGenre = MainGenre;
exports.Genre = Genre;
exports.Theme = Theme;
exports.GenreTheme = GenreTheme;
exports.BookTheme = BookTheme;
exports.HomeCarousel = HomeCarousel;
exports.GenericPage = GenericPage;
exports.sequelizeObject = sequelizeObject;

// Exports the init function to initialize the DB before running the application
exports.init = function(force) {
    return sequelizeObject.sync({force: force});
};