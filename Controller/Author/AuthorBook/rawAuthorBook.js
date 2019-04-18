const { WrittenBy } = require('../../../Model/sequelize');

/**
 *  Function used to retrieve in a raw format the books ISBN written by the specified author
 * @param authorID
 * @returns {Promise<Model<any, any>[]>}
 */
exports.findRawBooksByAuthor = function (authorID) {
    return WrittenBy.findAll({
        where: { authorID: authorID }
    })
};