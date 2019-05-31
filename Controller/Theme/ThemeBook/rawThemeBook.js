const { BookTheme } = require('../../../Model/sequelize');

exports.findRawBooksByTheme = function (themeID, limit, offset) {
    return BookTheme.findAll({
        limit: limit,
        offset: offset,
        where: { themeID: themeID }
    })
};