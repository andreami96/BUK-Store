const { Author } = require('../../Model/sequelize');
const Response = require('../../Utils/response');
const { isInt } = require('../../Utils/isInteger');

/**
 * Function used to retrieve the author information given the authorID
 * @param authorID
 * @returns {Promise<Model<any, any> | null> | Promise<Model<any, any>>}
 */
function findRawAuthorByID(authorID) {
    return Author.findOne({
        where: { authorID: authorID }
    });
}

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