const { findRawEventByID } = require('../rawEvent');
const { findBookByISBN } = require('../../Book/book');
const Response = require('../../../Utils/response');
const { isInt } = require('../../../Utils/isInteger');

exports.findBookByEventID = function (eventID) {

    return new Promise( (resolve, reject) => {

        if (!isInt(eventID))
            return reject(new Response(400, "Event identifier should be an integer"));

        findRawEventByID(eventID)
            .then( async (event) => {

                if(!event)
                    return reject();

                try {
                    let book = await findBookByISBN(event.ISBN);
                    resolve(book);
                } catch (e) {
                    reject(e);
                }

            })
    });
};