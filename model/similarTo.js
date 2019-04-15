module.exports = function (sequelize) {
    return sequelize.define('similarTo', {}, {
        timestamps: false,
        tableName: 'similarTo'
    });
};