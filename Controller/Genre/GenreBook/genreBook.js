const { Book } = require('../../../Model/sequelize');
const Response = require('../../../Utils/response');
const { isInt } = require('../../../Utils/isInteger');

exports.findBookByGenre = function (genreID, limit, offset) {

    return new Promise( (resolve, reject) => {

        // Construct limit and offset object with either the given params or the default ones
        if(limit)
            limit = limit.toString();
        else
            limit = "5";

        if(offset)
            offset = offset.toString();
        else
            offset = "0";

        // Check if the given limit and offset are integers
        if(!isInt(limit) || !isInt(offset))
            return reject(new Response(400, "Limit and offset must be integers"));

        if(!isInt(genreID))
            return reject(new Response(400, "The genre identifier should be an integer"));

        Book.findAll({
            limit: limit,
            offset: offset,
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