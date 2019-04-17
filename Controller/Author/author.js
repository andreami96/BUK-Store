const { Author } = require('../../Model/sequelize');
const Response = require('../../Utils/response');
const { isInt } = require('../../Utils/isInteger');

function findRawAuthorByID(authorID) {
    return Author.findOne({
        where: { authorID: authorID }
    });
}

exports.findAuthorByID = function (authorID) {

    return new Promise( (resolve, reject) => {

        if(!isInt(authorID))
            return reject(new Response(400, "The author identifier should be an integer"));

        findRawAuthorByID(authorID)
            .then( (author) => {

                if(!author)
                    return reject(new Response(404, "No author found"));

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