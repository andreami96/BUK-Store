const { Book } = require('../../Model/sequelize');
const Op = require('sequelize').Op;

/**
 *  Function to return the raw books array. Using the limit and offset it can be returned in a different way,
 *  for pagination purposes. Using the title, books with that string in their title are returned
 * @param limit
 * @param offset
 * @param title
 * @returns {Promise<Model<any, any>[]>}
 */
exports.findRawBooks = function (limit, offset, title) {

    // Construct the search option adding the limit, the offset and, if present, the title search option
    let searchOption = {};

    searchOption.limit = limit;
    searchOption.offset = offset;

    if(title)
        searchOption.where = {
            title: {
                [Op.iLike]: "%" + title.toString() + "%"
            }
        };

    return Book.findAll(searchOption)
};

/**
 *  Function to return the raw book object given a ISBN
 * @param isbn
 * @returns {Promise<Model<any, any> | null> | Promise<Model<any, any>>}
 */
exports.findRawBooksByISBN = function(isbn) {
    return Book.findOne({
        where: {
            ISBN: isbn
        }
    });
};
