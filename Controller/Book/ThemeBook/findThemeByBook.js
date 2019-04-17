const { BookTheme } = require('../../../Model/sequelize');
const { findThemeByID } = require('../../Theme/theme');
const Response = require('../../../Utils/response');
const { isInt } = require('../../../Utils/isInteger');

function findRawThemesByBookISBN(isbn) {
    return new Promise( (resolve, reject) => {

        BookTheme.findAll({
            where: { ISBN: isbn }
        })
            .then( (themeIDArray) => {
                resolve(themeIDArray);
            })
            .catch( (err) => {
                reject(err);
            });
    });
}

exports.findThemesByBookISBN = function (isbn) {
    return new Promise( (resolve, reject) => {
        if(!isInt(isbn))
            return reject(new Response(400, "ISBN must be integers"));

        findRawThemesByBookISBN(isbn)
            .then( async (themeIDArray) => {

                let themeArrayResult = [];

                for (let i = 0; i < themeIDArray.length; i++) {
                    try {
                        let theme = await findThemeByID(themeIDArray[i].themeID);
                        themeArrayResult.push({
                            themeID: theme.themeID,
                            title: theme.title
                        })
                    } catch (e) {
                        reject(e);
                    }
                }

                resolve(themeArrayResult);
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            })
    });
};