const Response = require('../../Utils/response');
const { isInt } = require('../../Utils/isInteger');

const { findRawBooksByISBN, findRawBooks } = require('./rawBook');
const { findRawGenreByID } = require('../Genre/rawGenre');
const { findThemesByBookISBN } = require('./ThemeBook/findThemesByBook');

/**
 *  Function used to retrieve all the book in a ready-to-send format to be sent to the client.
 *  Using the limit and offset it can be returned in a different way, for pagination purposes.
 *  Using the title, books with that string in their title are returned
 * @param limit
 * @param offset
 * @param title
 * @returns {Promise<any>}
 */
exports.findAllBook = function (limit, offset, title, genreID, themeID) {

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

        if(themeID) {
            if (!isInt(themeID))
                return reject(new Response(400, "Theme identifier should be an integer"));
        }

        if(genreID) {
            if (!isInt(genreID))
                return reject(new Response(400, "Genre identifier should be an integer"));
        }

        findRawBooks(limit, offset, title, genreID, themeID)
            .then( (bookList) => {

                let booksArray = [];

                // Push the book object formatted in a pretty way into the bookArray
                for (let i = 0; i < bookList[0].length; i++)
                    booksArray.push({
                        ISBN: bookList[0][i].ISBN,
                        title: bookList[0][i].title
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
                    genre = await findRawGenreByID(book.genreID);
                    themes = await findThemesByBookISBN(isbn);
                } catch (e) {
                    reject(e);
                }

                // Construct the book object in a ready-to-send format
                let bookObject = {
                    ISBN: book.ISBN,
                    title: book.title,
                    picture: book.picture,
                    backgroundPicture: book.backgroundPicture,
                    factSheet: book.factSheet,
                    abstract: book.abstract,
                    interview: book.interview,
                    availableQuantity: book.availableQuantity,
                    price: book.price,
                    editor: book.editor,
                    year: book.year,
                    pageNumber: book.pageNumber,
                    originalLanguage: book.originalLanguage,
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
