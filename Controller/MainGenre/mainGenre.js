const {findAllRawMainGenres, findAllRawGenresByMainGenreID} = require('./rawMainGenre');
const Response = require('../../Utils/response');
const { isInt } = require('../../Utils/isInteger');

exports.findAllMainGenres = function (limit, offset) {
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

        findAllRawMainGenres(limit, offset)
            .then( (resultList) => {
                let resultArray = [];

                for(let i=0; i<resultList.length; i++) {
                    resultArray.push({
                        mainGenreID: resultList[i].mainGenreID,
                        title: resultList[i].title,
                        picture: resultList[i].picture
                    })
                }

                resolve(resultArray);
            })
            .catch((err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            })
    })
};

exports.findAllGenresByMainGenreID = function (mainGenreID) {

    return new Promise((resolve, reject) => {
        if(!isInt(mainGenreID))
            return reject(new Response(400, "The Genre identifier should be an integer"));

        findAllRawGenresByMainGenreID(mainGenreID)
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