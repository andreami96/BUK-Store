const { Genre } = require('../../Model/sequelize');

exports.findAllRawGenres = function(limit, offset) {
    // Construct the search option adding the limit, the offset
    let searchOption = {};

    searchOption.limit = limit;
    searchOption.offset = offset;

    return Genre.findAll(searchOption);
};

exports.findRawGenreByID = function (genreID) {
    return Genre.findOne({
        where: { genreID: genreID}
    });
};