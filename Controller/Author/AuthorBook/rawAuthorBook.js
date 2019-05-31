const { WrittenBy } = require('../../../Model/sequelize');

/**
 *  Function used to retrieve in a raw format the books ISBN written by the specified author
 * @param authorID
 * @param limit
 * @param offset
 * @returns {Promise<Model<any, any>[]>}
 */
exports.findRawBooksByAuthor = function (authorID, limit, offset) {
    return WrittenBy.findAll({
        limit: limit,
        offset: offset,
        where: { authorID: authorID }
    })
};