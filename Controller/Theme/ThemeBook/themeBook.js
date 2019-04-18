const { findRawBooksByISBN } = require('../../Book/rawBook');
const { findRawBooksByTheme } = require('./rawThemeBook');
const Response = require('../../../Utils/response');
const { isInt } = require('../../../Utils/isInteger');

exports.findBooksByTheme = function (themeID) {

    return new Promise( (resolve, reject) => {

        if(!isInt(themeID))
            return reject(new Response(400, "The theme identifier should be an integer"));

        findRawBooksByTheme(themeID)
            .then( async (bookList) => {

                let bookArray = [];

                for (let i = 0; i < bookList.length; i++) {
                    let book = await findRawBooksByISBN(bookList[i].ISBN);
                    bookArray.push({
                        ISBN: book.ISBN,
                        title: book.title
                    });
                }

                return resolve(bookArray);
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            })

    });
};