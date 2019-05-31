const { findRawBooksByISBN } = require('../../Book/rawBook');
const { findRawBooksByTheme } = require('./rawThemeBook');
const Response = require('../../../Utils/response');
const { isInt } = require('../../../Utils/isInteger');

exports.findBooksByTheme = function (themeID, limit, offset) {

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

        if(!isInt(themeID))
            return reject(new Response(400, "The theme identifier should be an integer"));

        findRawBooksByTheme(themeID, limit, offset)
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