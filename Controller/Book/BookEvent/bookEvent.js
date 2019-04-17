const { Event } = require('../../../Model/sequelize');
const Response = require('../../../Utils/response');
const { isInt } = require('../../../Utils/isInteger');

/**
 *  Find the events related to a certain book, identified by the ISBN
 * @param isbn
 * @returns {Promise<any>}
 */
exports.findEventsByISBN = function (isbn) {

    return new Promise( (resolve, reject) => {

        // If the isbn isn't an integer, the given parameter is wrong
        if(!isInt(isbn))
            return reject(new Response(400, "ISBN should be an integer"));

        Event.findAll({
            where: { ISBN: isbn }
        })
            .then( (events) => {
                // Create an array of event which will be returned back
                let eventArray = [];

                // Push each event into the eventArray
                for(let i = 0; i < events.length; i++)
                    eventArray.push({
                        eventID: events[i].eventID,
                        title: events[i].title
                    });
                resolve(eventArray);
            })
            .catch( (error) => {
                console.log(error);
                reject(new Response(500, "Internal Server Error"));
            })

    });
};