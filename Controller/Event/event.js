const { Event } = require('../../Model/sequelize');
const Response = require('../../Utils/response');
const { isInt } = require('../../Utils/isInteger');
const Op = require('sequelize').Op;

const { findBookByISBN } = require('../Book/book');

function findRawEventByID(eventID) {
    return Event.findOne({
        where: { eventID: eventID }
    });
}

function findAllRawEvents(fromDate, toDate) {

    let option = {};

    if (fromDate && !toDate)
        option.where = {
            eventDate: {
                [Op.gte]: fromDate
            }
        };
    else if (toDate && !fromDate)
        option.where = {
            eventDate: {
                [Op.lt]: toDate
            }
        };
    else if (fromDate && toDate)
        option.where = {
            eventDate: {
                [Op.gte]: fromDate,
                [Op.lt]: toDate
            }
        };

    return Event.findAll(option);

}

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
