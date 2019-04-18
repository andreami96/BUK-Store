const { findRawEventByID } = require('../rawEvent');
const { findBookByISBN } = require('../../Book/book');
const Response = require('../../../Utils/response');
const { isInt } = require('../../../Utils/isInteger');

/**
 *  Retrieve the book which is presented in a specific event, identified by eventID
 * @param eventID
 * @returns {Promise<any>}
 */
exports.findBookByEventID = function (eventID) {

    return new Promise( (resolve, reject) => {

        // Check if the eventID is an integer
        if (!isInt(eventID))
            return reject(new Response(400, "Event identifier should be an integer"));

        findRawEventByID(eventID)
            .then( async (event) => {

                // If no event is found, return a 404
                if(!event)
                    return reject();

                // Try to get the book object and send it to the client
                try {
                    let book = await findBookByISBN(event.ISBN);
                    resolve(book);
                } catch (e) {
                    reject(e);
                }

            })
    });
};