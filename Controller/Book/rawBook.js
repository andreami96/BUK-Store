const { Book, sequelizeObject } = require('../../Model/sequelize');
const Op = require('sequelize').Op;

/**
 *  Function to return the raw books array. Using the limit and offset it can be returned in a different way,
 *  for pagination purposes. Using the title, books with that string in their title are returned
 * @param limit
 * @param offset
 * @param title
 * @param genreID
 * @param themeID
 * @returns {Promise<Model<any, any>[]>}
 */
exports.findRawBooks = function (limit, offset, title, genreID, themeID) {

    /*// Construct the search option adding the limit, the offset and, if present, the title search option
    let searchOption = {};

    searchOption.limit = limit;
    searchOption.offset = offset;

    if(title)
        searchOption.where = {
            title: {
                [Op.iLike]: "%" + title.toString() + "%"
            }
        };
    else if(genreID)
        searchOption.where = {
            genreID: genreID
        };
    else if(genreID && title)
        searchOption.where = {
            title: {
                [Op.iLike]: "%" + title.toString() + "%"
            },
            genreID: genreID
        };*/

    let isFirst = true;
    let query = "SELECT * FROM books";

    if(title) {
        if(isFirst) {
            query += " WHERE \"title\" LIKE '%" + title + "%'";
            isFirst = false;
        }
        else
            query += " AND \"title\" = '" + title + "'";
    }

    if(genreID) {
        if(isFirst) {
            query += " WHERE \"genreID\" = '" + genreID + "'";
            isFirst = false;
        }
        else
            query += " AND \"genreID\" = '" + genreID + "'";
    }

    if(themeID) {
        if(isFirst) {
            query += " WHERE \"ISBN\" IN (SELECT \"ISBN\" FROM \"bookThemes\" WHERE \"themeID\" = '" + themeID + "')";
        }
        else
            query += " AND \"ISBN\" IN (SELECT \"ISBN\" FROM \"bookThemes\" WHERE \"themeID\" = '" + themeID + "')";
    }

    if(limit)
        query += " LIMIT " + limit;

    if(offset)
        query += " OFFSET " + offset;

    return sequelizeObject.query(query);
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
