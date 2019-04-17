const { Book } = require('../../Model/sequelize');
const Response = require('../../Utils/response');
const { isInt } = require('../../Utils/isInteger');
const Op = require('sequelize').Op;

const { findGenreByID } = require('../Genre/genre');
const { findThemesByBookISBN } = require('./ThemeBook/findThemeByBook');

/**
 *  Private function to return the raw books array. Using the limit and offset it can be returned in a different way,
 *  for pagination purposes. Using the title, books with that string in their title are returned
 * @param limit
 * @param offset
 * @param title
 * @returns {Promise<Model<any, any>[]>}
 */
function findRawBooks(limit, offset, title) {

    // Construct the search option adding the limit, the offset and, if present, the title search option
    let searchOption = {};

    searchOption.limit = limit;
    searchOption.offset = offset;

    if(title)
        searchOption.where = {
            title: {
                [Op.iLike]: "%" + title.toString() + "%"
            }
        };

    return Book.findAll(searchOption)
}

/**
 *  Private function to return the raw book object given a ISBN
 * @param isbn
 * @returns {Promise<Model<any, any> | null> | Promise<Model<any, any>>}
 */
function findRawBooksByISBN(isbn) {
    return Book.findOne({
        where: {
            ISBN: isbn
        }
    });
}

/**
 *  Function used to retrieve all the book in a ready-to-send format to be sent to the client
 * @param limit
 * @param offset
 * @param title
 * @returns {Promise<any>}
 */
exports.findAllBook = function (limit, offset, title) {

    return new Promise( (resolve, reject) => {

        // Construct limit and offset object with either the given params or the default ones
        if(limit)
            limit = limit.toString();
        else
            limit = "5";

        if(offset)
            offset = offset.toString();
        else
            offset = "0";

        // Check if the given limit and offset are integers
        if(!isInt(limit) || !isInt(offset))
            return reject(new Response(400, "Limit and offset must be integers"));

        findRawBooks(limit, offset, title)
            .then( (bookList) => {

                let booksArray = [];

                // Push the book object formatted in a pretty way into the bookArray
                for (let i = 0; i < bookList.length; i++)
                    booksArray.push({
                        ISBN: bookList[i].ISBN,
                        title: bookList[i].title
                    });

                resolve(booksArray);
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            })

    })

};

/**
 *  Function used to retrieve a single book information given the ISBN
 * @param isbn
 * @returns {Promise<any>}
 */
exports.findBookByISBN = function (isbn) {

    return new Promise( (resolve, reject) => {

        // If the given ISBN isn't an integer, return the 400 error
        if(!isInt(isbn))
            return reject(new Response(400, "ISBN must be integers"));

        findRawBooksByISBN(isbn)
            .then( async (book) => {
                // Create the genre object and the themes array;
                let genre;
                let themes;

                // If no book is found, return the 404 error
                if(!book)
                    return reject();

                try {
                    // Retrieve the genre and the themes related to the found book
                    genre = await findGenreByID(book.genreID);
                    themes = await findThemesByBookISBN(isbn);
                } catch (e) {
                    reject(e);
                }

                // Construct the book object in a ready-to-send format
                let bookObject = {
                    ISBN: book.ISBN,
                    title: book.title,
                    picture: book.picture,
                    factSheet: book.factSheet,
                    abstract: book.abstract,
                    interview: book.interview,
                    availableQuantity: book.availableQuantity,
                    price: book.price,
                    genre: {
                        genreID: genre.genreID,
                        title: genre.title
                    },
                    theme: themes
                };
                resolve(bookObject);
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            })

    })

};
