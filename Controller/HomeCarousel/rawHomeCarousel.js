const { HomeCarousel } = require('../../Model/sequelize');

/**
 *  Function used to retrieve information about the images displayed in the home page carousel
 * @returns {Promise<Model<any, any> | null> | Promise<Model<any, any>>}
 */
exports.findRawCarouselElements = function() {
    return HomeCarousel.findAll();
};