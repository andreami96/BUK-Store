const { Event } = require('../../Model/sequelize');
const Response = require('../../Utils/response');
const { isInt } = require('../../Utils/isInteger');

exports.findEventsByISBN = function (isbn) {

    return new Promise( (resolve, reject) => {

        if(!isInt(isbn))
            return reject(new Response(400, "ISBN should be an integer"));

        Event.findAll({
            where: { ISBN: isbn }
        })
            .then( (events) => {
                let eventArray = [];

                for(let i = 0; i < events.length; i++)
                    eventArray.push({
                        eventID: events[i].eventID
                    });
                resolve(eventArray);
            })
            .catch( (error) => {
                console.log(error);
                reject(new Response(500, "Internal Server Error"));
            })

    });
};