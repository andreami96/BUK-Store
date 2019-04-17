const { Book } = require('../../Model/sequelize');
const Response = require('../../Utils/response');
const { isInt } = require('../../Utils/isInteger');
const Op = require('sequelize').Op;

const { findGenreByID } = require('../Genre/genre');
const { findThemesByBookISBN } = require('../ThemeBook/findThemeByBook');

function findRawBooks(limit, offset, title) {

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
}

function findRawBooksByISBN(isbn) {
    return Book.findOne({
        where: {
            ISBN: isbn
        }
    });
}

exports.findAllBook = function (limit, offset, title) {

    return new Promise( (resolve, reject) => {

        if(limit)
            limit = limit.toString();
        else
            limit = "5";

        if(offset)
            offset = offset.toString();
        else
            offset = "0";

        if(!isInt(limit) || !isInt(offset))
            return reject(new Response(400, "Limit and offset must be integers"));

        findRawBooks(limit, offset, title)
            .then( (bookList) => {

                let booksArray = [];

                for (let i = 0; i < bookList.length; i++)
                    booksArray.push({ISBN: bookList[i].ISBN});

                resolve(booksArray);
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            })

    })

};

exports.findBookByISBN = function (isbn) {

    return new Promise( (resolve, reject) => {

        if(!isInt(isbn))
            return reject(new Response(400, "ISBN must be integers"));

        findRawBooksByISBN(isbn)
            .then( async (book) => {
                let genre;
                let themes;

                if(!book)
                    return reject();

                try {
                    genre = await findGenreByID(book.genreID);
                    themes = await findThemesByBookISBN(isbn);
                } catch (e) {
                    reject(e);
                }

                let bookObject = {
                    ISBN: book.ISBN,
                    title: book.title,
                    picture: book.picture,
                    factSheet: book.factSheet,
                    abstract: book.abstract,
                    interview: book.interview,
                    availableQuantity: book.availableQuantity,
                    price: book.price,
                    genre: {
                        genreID: genre.genreID,
                        title: genre.title
                    },
                    theme: themes
                };
                resolve(bookObject);
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            })

    })

};
