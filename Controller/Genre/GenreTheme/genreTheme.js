const { findRawThemesByGenre } = require('./rawGenreThemes');
const { findRawThemeByID } = require('../../Theme/rawTheme');
const Response = require('../../../Utils/response');
const { isInt } = require('../../../Utils/isInteger');

exports.findThemesByGenre = function (genreID) {

    return new Promise( (resolve, reject) => {

        if(!isInt(genreID))
            return reject(new Response(400, "The genre identifier should be an integer"));

        findRawThemesByGenre(genreID)
            .then( async (themeList) => {

                let themeArray = [];

                for (let i = 0; i < themeList.length; i++) {
                    let theme = await findRawThemeByID(themeList[i].themeID);
                    themeArray.push({
                        themeID: theme.themeID,
                        title: theme.title
                    });
                }

                return resolve(themeArray);
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            })

    });
};