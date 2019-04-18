const { findRawBooksByISBN } = require('../../Book/rawBook');
const { findRawBooksByAuthor } = require('./rawAuthorBook');
const Response = require('../../../Utils/response');
const { isInt } = require('../../../Utils/isInteger');

/**
 *  Retrieve all the books written by the author specified by authorID
 * @param authorID
 * @returns {Promise<any>}
 */
exports.findBooksByAuthor = function (authorID) {

    return new Promise( (resolve, reject) => {

        // Check that the authorID is an integer
        if(!isInt(authorID))
            return reject(new Response(400, "The author identifier should be an integer"));

        findRawBooksByAuthor(authorID)
            .then( async (bookList) => {

                let bookArray = [];

                /**
                 *  Insert into the bookArray variable above the book object which will be
                 *  returned back to the client
                 */
                for (let i = 0; i < bookList.length; i++) {
                    let book = await findRawBooksByISBN(bookList[i].ISBN);
                    bookArray.push({
                        ISBN: book.ISBN,
                        title: book.title
                    });
                }

                return resolve(bookArray);
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            })

    });
};