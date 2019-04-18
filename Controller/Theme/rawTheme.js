const { Theme } = require('../../Model/sequelize');

exports.findRawThemeByID = function(themeID) {
    return Theme.findOne({
        where: { themeID: themeID}
    });
};
