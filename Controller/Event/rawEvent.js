const { Event } = require('../../Model/sequelize');
const Op = require('sequelize').Op;

exports.findRawEventByID = function(eventID) {
    return Event.findOne({
        where: { eventID: eventID }
    });
};

exports.findAllRawEvents = function(fromDate, toDate) {

    let option = {};

    let defaultFromDate = new Date(fromDate);
    let defaultToDate = new Date(toDate);
    defaultFromDate.setHours(0, 0, 0);
    defaultToDate.setHours(23, 59, 59);

    option.where = {
        eventDate: {
            [Op.gte]: defaultFromDate,
            [Op.lte]: defaultToDate
        }
    };

    return Event.findAll(option);

};
