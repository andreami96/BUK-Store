module.exports = function (sequelize) {
    return sequelize.define('genreTheme', {}, {
        timestamps: false
    });
};