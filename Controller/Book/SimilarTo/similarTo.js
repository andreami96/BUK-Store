const { SimilarTo } = require('../../../Model/sequelize');
const Response = require('../../../Utils/response');
const { isInt } = require('../../../Utils/isInteger');

/**
 *  Retrieve the books which are related or similar to the given
 *  ISBN book
 * @param isbn
 * @returns {Promise<any>}
 */
exports.findBookSimilarToISBN = function (isbn) {

    return new Promise( async (resolve, reject) => {

        // Create the book array to be returned
        let bookArray = [];

        // If the isbn isn't an integer, the given parameter is wrong
        if(!isInt(isbn))
            return reject(new Response(400, "ISBN should be an integer"));

        try {

            // First of all, retrieve the books related to this book, taken as the Parent
            let books = await SimilarTo.findAll({
                where: {ParentISBN: isbn}
            });

            // Push the object in the books array into the bookArray object which will be returned back
            for(let i = 0; i < books.length; i++)
                bookArray.push({
                    ISBN: books[i].ChildISBN
                });

            // Then retrieve all the books related to this ISBN, but now this last one is taken as a child
            books = await SimilarTo.findAll({
                where: {ChildISBN: isbn}
            });

            // Push the object in the new books array into the bookArray object which will be returned back
            for(let i = 0; i < books.length; i++)
                bookArray.push({
                    ISBN: books[i].ParentISBN
                });

            resolve(bookArray);

        } catch (e) {
            console.log(e);
            reject(new Response(500, "Internal Server Error"));
        }
    });
};