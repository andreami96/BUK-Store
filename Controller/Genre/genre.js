const { findRawGenreByID, findAllRawGenres } = require('./rawGenre');
const Response = require('../../Utils/response');
const { isInt } = require('../../Utils/isInteger');

exports.findAllGenres = function(limit, offset) {

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

        findAllRawGenres(limit, offset)
            .then( (genreList) => {

                let genreArray = [];

                // Push the book object formatted in a pretty way into the bookArray
                for (let i = 0; i < genreList.length; i++)
                    genreArray.push({
                        genreID: genreList[i].genreID,
                        title: genreList[i].title
                    });

                resolve(genreArray);
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            })

    })

};

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