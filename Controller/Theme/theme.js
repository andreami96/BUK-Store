const { findRawThemeByID, findAllRawThemes } = require('./rawTheme');
const Response = require('../../Utils/response');
const { isInt } = require('../../Utils/isInteger');

exports.findAllThemes = function(limit, offset) {
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

        findAllRawThemes(limit, offset)
            .then( (themes) => {

                let themeArray = [];

                // Push the book object formatted in a pretty way into the bookArray
                for (let i = 0; i < themes.length; i++)
                    themeArray.push({
                        themeID: themes[i].themeID,
                        title: themes[i].title
                    });

                resolve(themeArray);
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            })

    })
};

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