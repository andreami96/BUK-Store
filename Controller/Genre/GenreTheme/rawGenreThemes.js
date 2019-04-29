const { GenreTheme } = require('../../../Model/sequelize');

exports.findRawThemesByGenre = function (genreID) {
    return GenreTheme.findAll({
        where: { genreID: genreID }
    })
};