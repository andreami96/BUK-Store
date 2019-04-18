const { findRawThemesByBookISBN } = require('./findRawThemesByBook');
const { findRawThemeByID } = require('../../Theme/rawTheme');
const Response = require('../../../Utils/response');
const { isInt } = require('../../../Utils/isInteger');

/**
 *  Function used to retrieve the themes associated to a certain ISBN in a ready-to-send
 *  format to be sent to the client
 * @param isbn
 * @returns {Promise<any>}
 */
exports.findThemesByBookISBN = function (isbn) {
    return new Promise( (resolve, reject) => {

        // If the isbn isn't an integer, the given parameter is wrong
        if(!isInt(isbn))
            return reject(new Response(400, "ISBN must be integers"));

        findRawThemesByBookISBN(isbn)
            .then( async (themeIDArray) => {

                // Create a theme array to be returned to the client
                let themeArrayResult = [];

                // Push into the theme array each theme formatted in a pretty way
                for (let i = 0; i < themeIDArray.length; i++) {
                    try {
                        let theme = await findRawThemeByID(themeIDArray[i].themeID);
                        themeArrayResult.push({
                            themeID: theme.themeID,
                            title: theme.title
                        })
                    } catch (e) {
                        reject(e);
                    }
                }

                // Return to the client the themeArray with the themes related to the book
                resolve(themeArrayResult);
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            })
    });
};