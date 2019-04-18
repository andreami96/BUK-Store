const { findAllRawEvents, findRawEventByID } = require('./rawEvent');
const Response = require('../../Utils/response');
const { isInt } = require('../../Utils/isInteger');
const { isDate } = require('../../Utils/isDate');
const { formatDate } = require('../../Utils/formatDate');

exports.findEventByID = function (eventID) {
    return new Promise( (resolve, reject) => {

        if(!isInt(eventID))
            return reject(new Response(400, "Event identifier should be an integer"));

        findRawEventByID(eventID)
            .then( (event) => {

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

exports.findAllEvents = function (fromDate, toDate) {
    return new Promise( (resolve, reject) => {

        if(!fromDate)
            fromDate = formatDate(new Date());
        if(!toDate)
            toDate = formatDate(new Date());

        if(!isDate(fromDate) || !isDate(toDate))
            return reject(new Response(400, "The from or the to parameters are not correctly written. " +
                "The accepted format is yyyy-mm-dd"));

        findAllRawEvents(fromDate, toDate)
            .then( (eventList) => {

                let eventArray = [];

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

