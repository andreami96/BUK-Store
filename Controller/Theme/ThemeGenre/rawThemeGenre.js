const { GenreTheme } = require('../../../Model/sequelize');

exports.findRawGenresByTheme = function (themeID) {
    return GenreTheme.findAll({
        where: { themeID: themeID }
    })
};