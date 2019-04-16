module.exports = function (sequelize) {
    return sequelize.define('writtenBy', {}, {
        timestamps: false,
        tableName: 'writtenBy'
    });
};