const { WrittenBy } = require('../../Model/sequelize');
const Response = require('../../Utils/response');
const { isInt } = require('../../Utils/isInteger');

exports.findAuthorsByISBN = function (isbn) {

    return new Promise( (resolve, reject) => {

        if(!isInt(isbn))
            return reject(new Response(400, "ISBN should be an integer"));

        WrittenBy.findAll({
            where: { ISBN: isbn }
        })
            .then( (authors) => {
                let authorArray = [];

                if(authors.length === 0)
                    reject();

                for(let i = 0; i < authors.length; i++)
                    authorArray.push({
                        authorID: authors[i].authorID
                    });
                resolve(authorArray);
            })
            .catch( (error) => {
                console.log(error);
                reject(new Response(500, "Internal Server Error"));
            })

    });
};