const { findRawGenresByTheme } = require('./rawThemeGenre');
const { findRawGenreByID } = require('../../Genre/rawGenre');
const Response = require('../../../Utils/response');
const { isInt } = require('../../../Utils/isInteger');

exports.findGenresByTheme = function (themeID) {

    return new Promise( (resolve, reject) => {

        if(!isInt(themeID))
            return reject(new Response(400, "The theme identifier should be an integer"));

        findRawGenresByTheme(themeID)
            .then( async (genreList) => {

                let genreArray = [];

                for (let i = 0; i < genreList.length; i++) {
                    let genre = await findRawGenreByID(genreList[i].genreID);
                    genreArray.push({
                        genreID: genre.genreID,
                        title: genre.title
                    });
                }

                return resolve(genreArray);
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            })

    });
};