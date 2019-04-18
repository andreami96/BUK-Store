const { Book } = require('../../../Model/sequelize');
const Response = require('../../../Utils/response');
const { isInt } = require('../../../Utils/isInteger');

exports.findBookByGenre = function (genreID) {

    return new Promise( (resolve, reject) => {

        if(!isInt(genreID))
            return reject(new Response(400, "The genre identifier should be an integer"));

        Book.findAll({
            where: { genreID: genreID }
        })
            .then( (bookList) => {

                let bookArray = [];

                for (let i = 0; i < bookList.length; i++)
                    bookArray.push({
                        ISBN: bookList[i].ISBN,
                        title: bookList[i].title
                    });

                resolve(bookArray);
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            })
    });
};