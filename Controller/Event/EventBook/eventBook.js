const { Event } = require('../../../Model/sequelize');
const {  } = require('../event');
const Response = require('../../../Utils/response');
const { isInt } = require('../../../Utils/isInteger');

exports.findBookByEventID = function (eventID) {

    return new Promise( (resolve, reject) => {

        if (!isInt(eventID))
            return reject(new Response(400, "Event identifier should be an integer"));




    });
};