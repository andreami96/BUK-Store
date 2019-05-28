const { findRawAuthorByID, findAllRawAuthors } = require('./rawAuthor');
const Response = require('../../Utils/response');
const { isInt } = require('../../Utils/isInteger');

/**
 *  Retrieve the authors stored inside the DB in a ready-to-send format. Use limit and offset to retrieve
 *  up to **limit** authors, starting from the **offset** author
 * @param limit
 * @param offset
 * @returns {Promise<any>}
 */
exports.findAllAuthors = function(limit, offset) {

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

        findAllRawAuthors(limit, offset)
            .then( (authors) => {

                let authorArray = [];

                // Push the author object formatted in a pretty way into the bookArray
                for (let i = 0; i < authors.length; i++)
                    authorArray.push({
                        authorID: authors[i].authorID,
                        name: authors[i].name,
                        surname: authors[i].surname
                    });

                resolve(authorArray);
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            })

    })

};

/**
 *  Function used in the other files to retrieve a ready-to-send with the author information
 *  given the author identifier
 * @param authorID
 * @returns {Promise<any>}
 */
exports.findAuthorByID = function (authorID) {

    return new Promise( (resolve, reject) => {

        // Check if the authorID is really an integer
        if(!isInt(authorID))
            return reject(new Response(400, "The author identifier should be an integer"));

        findRawAuthorByID(authorID)
            .then( (author) => {

                // If there isn't any author found in the DB
                if(!author)
                    return reject();

                // Create the author object to be returned to the client
                let authorResult = {
                    authorID: author.authorID,
                    name: author.name,
                    surname: author.surname,
                    picture: author.picture,
                    backgroundPicture: author.backgroundPicture,
                    biography: author.biography
                };

                return resolve(authorResult);

            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"))
            })

    });
};