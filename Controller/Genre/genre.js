const { Genre } = require('../../Model/sequelize');
const Response = require('../../Utils/response');
const { isInt } = require('../../Utils/isInteger');

function findRawGenreByID(genreID) {
    return Genre.findOne({
        where: { genreID: genreID}
    });
}

exports.findGenreByID = function (genreID) {

    return new Promise( (resolve, reject) => {

        if(!isInt(genreID))
            return reject(new Response(400, "The Genre identifier should be an integer"));

        findRawGenreByID(genreID)
            .then( (genreObject) => {

                if(!genreObject)
                    return reject();

                let genreResult = {
                    genreID: genreObject.genreID,
                    title: genreObject.title,
                    mainGenre: genreObject.mainGenre,
                    description: genreObject.description,
                    picture: genreObject.picture
                };

                return resolve(genreResult);

            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"))
            })

    });

};