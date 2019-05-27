module.exports = function (sequelize, type) {
    return sequelize.define('homeCarousel', {
        carouselID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }, {
        timestamps: false
    });
};