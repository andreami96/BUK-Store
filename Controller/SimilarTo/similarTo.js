const { SimilarTo } = require('../../Model/sequelize');
const Response = require('../../Utils/response');
const { isInt } = require('../../Utils/isInteger');

exports.findBookSimilarToISBN = function (isbn) {

    return new Promise( async (resolve, reject) => {

        let bookArray = [];

        if(!isInt(isbn))
            return reject(new Response(400, "ISBN should be an integer"));

        try {

            let books = await SimilarTo.findAll({
                where: {ParentISBN: isbn}
            });

            for(let i = 0; i < books.length; i++)
                bookArray.push({
                    ISBN: books[i].ChildISBN
                });

            books = await SimilarTo.findAll({
                where: {ChildISBN: isbn}
            });

            for(let i = 0; i < books.length; i++)
                bookArray.push({
                    ISBN: books[i].ParentISBN
                });

            resolve(bookArray);

        } catch (e) {
            console.log(e);
            reject(new Response(500, "Internal Server Error"));
        }

        SimilarTo.findAll({
            where: { ParentISBN: isbn }
        })
            .then( (books) => {
                let bookArray = [];

                for(let i = 0; i < books.length; i++)
                    bookArray.push({
                        ISBN: books[i].ChildISBN
                    });
                resolve(bookArray);
            })
            .catch( (error) => {
                console.log(error);
                reject(new Response(500, "Internal Server Error"));
            })

    });
};