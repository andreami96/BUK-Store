const { Theme } = require('../../Model/sequelize');

exports.findAllRawThemes = function(limit, offset) {
    // Construct the search option adding the limit, the offset and, if present, the title search option
    let searchOption = {};

    searchOption.limit = limit;
    searchOption.offset = offset;

    searchOption.order = [['title', 'ASC']];

    return Theme.findAll(searchOption);
};

exports.findRawThemeByID = function(themeID) {
    return Theme.findOne({
        where: { themeID: themeID}
    });
};
