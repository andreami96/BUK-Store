const { WrittenBy } = require('../../../Model/sequelize');
const Response = require('../../../Utils/response');
const { isInt } = require('../../../Utils/isInteger');

/**
 *  Return the authors whose written the book identified
 * @param isbn
 * @returns {Promise<any>}
 */
exports.findAuthorsByISBN = function (isbn) {

    return new Promise( (resolve, reject) => {

        // If the isbn isn't an integer, the given parameter is wrong
        if(!isInt(isbn))
            return reject(new Response(400, "ISBN should be an integer"));

        WrittenBy.findAll({
            where: { ISBN: isbn }
        })
            .then( (authors) => {
                // Create an array of author to be returned to the client
                let authorArray = [];

                // If there is no author, then return a 404 error
                if(authors.length === 0)
                    reject();

                // Push to the array the single author element
                for(let i = 0; i < authors.length; i++)
                    authorArray.push({
                        authorID: authors[i].authorID
                    });
                resolve(authorArray);
            })
            .catch( (error) => {
                console.log(error);
                reject(new Response(500, "Internal Server Error"));
            })

    });
};