const { Author } = require('../../Model/sequelize');

/**
 *  Function used to retrieve the authors inside the DB in a raw format. Limit and offset params can
 *  be used for pagination purposes
 * @param limit
 * @param offset
 * @returns {Promise<Model<any, any>[]>}
 */
exports.findAllRawAuthors = function (limit, offset) {
    // Construct the search option adding the limit, the offset and, if present, the title search option
    let searchOption = {};

    searchOption.limit = limit;
    searchOption.offset = offset;

    return Author.findAll(searchOption);
};

/**
 * Function used to retrieve the author information given the authorID
 * @param authorID
 * @returns {Promise<Model<any, any> | null> | Promise<Model<any, any>>}
 */
exports.findRawAuthorByID = function(authorID) {
    return Author.findOne({
        where: { authorID: authorID }
    });
};