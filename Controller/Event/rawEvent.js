const { Event } = require('../../Model/sequelize');
const Op = require('sequelize').Op;

/**
 *  Function used to retrieve a specific event information identified by eventID, in a raw format
 * @param eventID
 * @returns {Promise<Model<any, any> | null> | Promise<Model<any, any>>}
 */
exports.findRawEventByID = function(eventID) {
    return Event.findOne({
        where: { eventID: eventID }
    });
};

/**
 *  Function used to retrieve the events present in the DB in a raw format. Use fromDate and toDate to limit the
 *  search of the events from a certain date another one. If one of those params or both of them aren't set up, then
 *  a default date is chosen to search the events, and it is **today**. The search starts from midnight of the fromDate
 *  to 23:59:59 of the toDate
 * @param fromDate
 * @param toDate
 * @returns {Promise<Model<any, any>[]>}
 */
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
