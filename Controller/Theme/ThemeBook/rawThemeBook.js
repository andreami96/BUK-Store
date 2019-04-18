const { BookTheme } = require('../../../Model/sequelize');

exports.findRawBooksByTheme = function (themeID) {
    return BookTheme.findAll({
        where: { themeID: themeID }
    })
};