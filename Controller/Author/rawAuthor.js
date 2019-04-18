const { Author } = require('../../Model/sequelize');

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
