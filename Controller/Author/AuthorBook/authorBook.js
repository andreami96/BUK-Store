const { findRawBooksByISBN } = require('../../Book/rawBook');
const { findRawBooksByAuthor } = require('./rawAuthorBook');
const Response = require('../../../Utils/response');
const { isInt } = require('../../../Utils/isInteger');

/**
 *  Retrieve all the books written by the author specified by authorID
 * @param authorID
 * @param limit
 * @param offset
 * @returns {Promise<any>}
 */
exports.findBooksByAuthor = function (authorID, limit, offset) {

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

        // Check that the authorID is an integer
        if(!isInt(authorID))
            return reject(new Response(400, "The author identifier should be an integer"));

        findRawBooksByAuthor(authorID, limit, offset)
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