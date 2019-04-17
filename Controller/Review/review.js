const { Review } = require('../../Model/sequelize');
const Response = require('../../Utils/response');
const { isInt } = require('../../Utils/isInteger');

exports.findReviewByISBN = function (isbn) {
    return new Promise( (resolve, reject) => {

        if(!isInt(isbn))
            return reject(new Response(400, "ISBN should be an integer"));

        Review.findAll({
            where: { ISBN: isbn }
        })
            .then( (reviews) => {

                let reviewArray = [];

                for (let i = 0; i < reviews.length; i++)
                    reviewArray.push({
                        reviewID: reviews[0].reviewID,
                        title: reviews[0].title,
                        text: reviews[0].text,
                        ISBN: reviews[0].ISBN
                    });

                resolve(reviewArray);
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            });
    });
};