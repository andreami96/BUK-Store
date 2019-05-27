const { GenericPage } = require('../../Model/sequelize');

/**
 *  Function used to retrieve a specific static page to send to the client
 * @param pageName      The name of the page to be retrieved
 * @returns {Promise<Model<any, any> | null> | Promise<Model<any, any>>}
 */
exports.findRawGenericPageByName = function(pageName) {
    return GenericPage.findOne({
        where: { pageName: pageName.toLowerCase() }
    });
};