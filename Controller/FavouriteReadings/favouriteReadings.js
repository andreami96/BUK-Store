const { findBookByISBN } = require('../Book/book');
const { FavouriteReadings } = require('../../Model/sequelize');

/**
 *  Retrieve the favourite readings of this months
 * @returns {Promise<any>}
 */
exports.findFavouriteReadings = function () {
    return new Promise( (resolve, reject) => {

        FavouriteReadings.findAll()
            .then(async (favouritesList) => {

                let bookArray = [];

                for (let i = 0; i < favouritesList.length; i++) {
                    let book = await findBookByISBN(favouritesList[i].ISBN);
                    bookArray.push(book);
                }

                resolve(bookArray);

            }).catch((err) => {
                console.log(err);
                reject(err);
            })
    });
};