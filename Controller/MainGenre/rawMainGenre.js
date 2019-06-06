const { MainGenre, Genre} = require('../../Model/sequelize');


exports.findAllRawMainGenres = function (limit, offset) {
    // Construct the search option adding the limit, the offset
    let searchOption = {};

    searchOption.limit = limit;
    searchOption.offset = offset;

    return MainGenre.findAll(searchOption);
};

exports.findAllRawGenresByMainGenreID = function (mainGenreID) {
    return Genre.findAll({
        where: {
            mainGenreID: mainGenreID
        }
    })
};

exports.findRawMainGenreByID = function (mainGenreID) {
    return MainGenre.findOne({
        where: { mainGenreID: mainGenreID }
    })
}

