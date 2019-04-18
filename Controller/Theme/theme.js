const { findRawThemeByID } = require('./rawTheme');
const Response = require('../../Utils/response');
const { isInt } = require('../../Utils/isInteger');

exports.findThemeByID = function (themeID) {

    return new Promise( (resolve, reject) => {

        if(!isInt(themeID))
            return reject(new Response(400, "The theme identifier should be an integer"));

        findRawThemeByID(themeID)
            .then( (themeObject) => {

                if(!themeObject)
                    return reject();

                let themeResult = {
                    themeID: themeObject.themeID,
                    title: themeObject.title,
                    description: themeObject.description,
                    picture: themeObject.picture
                };

                return resolve(themeResult);

            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"))
            })

    });
};