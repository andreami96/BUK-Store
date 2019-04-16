module.exports = function (sequelize) {
    return sequelize.define('bookTheme', {}, {
        timestamps: false
    });
};