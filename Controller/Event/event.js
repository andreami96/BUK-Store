const { findAllRawEvents, findRawEventByID } = require('./rawEvent');
const Response = require('../../Utils/response');
const { isInt } = require('../../Utils/isInteger');
const { isDate } = require('../../Utils/isDate');
const { formatDate } = require('../../Utils/formatDate');

/**
 *  Retrieve the information associated to a specific event identified by eventID
 * @param eventID
 * @returns {Promise<any>}
 */
exports.findEventByID = function (eventID) {
    return new Promise( (resolve, reject) => {

        // Check if the eventID is an integer
        if(!isInt(eventID))
            return reject(new Response(400, "Event identifier should be an integer"));

        /**
         *  Retrieve the event from the Database and create a object which will be sent to the client
         *  with the needed information
         */
        findRawEventByID(eventID)
            .then( (event) => {

                // If no event is found, reject with a 404
                if(!event)
                    return reject();

                let eventObject = {
                    eventID: event.eventID,
                    address: event.address,
                    latitude: event.latitude,
                    longitude: event.longitude,
                    eventDate: event.eventDate.toString(),
                    title: event.title,
                    description: event.description,
                    presentedBook: event.ISBN
                };
                resolve(eventObject);
            })
            .catch( (err) => {
                console.log(err);
                return reject(new Response(500, "Internal Server Error"));
            })

    });
};

/**
 *  Retrieve the events present in the DB in a ready-to-send format. Use fromDate and toDate to limit the search of the events
 *  from a certain date another one. If one of those params or both of them aren't set up, then a default date
 *  is chosen to search the events, and it is **today**. The search starts from midnight of the fromDate to 23:59:59
 *  of the toDate
 * @param fromDate
 * @param toDate
 * @returns {Promise<any>}
 */
exports.findAllEvents = function (fromDate, toDate) {
    return new Promise( (resolve, reject) => {

        /**
         *  If no date is set, then inject the actual date in those parameters
         */
        if(!fromDate)
            fromDate = formatDate(new Date());
        if(!toDate)
            toDate = formatDate(new Date());

        /**
         *  If some date is given, then it should in the YYYY-MM-DD format
         */
        if(!isDate(fromDate) || !isDate(toDate))
            return reject(new Response(400, "The from or the to parameters are not correctly written. " +
                "The accepted format is yyyy-mm-dd"));

        findAllRawEvents(fromDate, toDate)
            .then( (eventList) => {

                let eventArray = [];

                /**
                 *  Push each event present inside the eventList into the eventArray object used to
                 *  store them in order to be sent to the client
                 */
                for (let i = 0; i < eventList.length; i++)
                    eventArray.push({
                        eventID: eventList[i].eventID,
                        title: eventList[i].title
                    });
                resolve(eventArray);
            })
            .catch( (err) => {
                console.log(err);
                return reject(new Response(500, "Internal Server Error"));
            })
    });
};

