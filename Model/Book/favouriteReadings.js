module.exports = function (sequelize, type) {
    return sequelize.define('favouriteReadings', {
        favouriteID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }, {
        timestamps: false
    });
};