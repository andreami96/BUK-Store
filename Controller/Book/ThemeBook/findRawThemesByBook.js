const { BookTheme } = require('../../../Model/sequelize');

/**
 *  Function used to retrieve the raw theme elements associated to a certain book
 * @param isbn
 * @returns {Promise<any>}
 */
exports.findRawThemesByBookISBN = function(isbn) {
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
