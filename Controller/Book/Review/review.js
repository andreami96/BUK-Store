const { Review } = require('../../../Model/sequelize');
const Response = require('../../../Utils/response');
const { isInt } = require('../../../Utils/isInteger');

/**
 *  Retrieve all the Reviews related to a certain book, identified by the ISBN
 * @param isbn
 * @returns {Promise<any>}
 */
exports.findReviewByISBN = function (isbn) {
    return new Promise( (resolve, reject) => {

        // If the isbn isn't an integer, the given parameter is wrong
        if(!isInt(isbn))
            return reject(new Response(400, "ISBN should be an integer"));

        Review.findAll({
            where: { ISBN: isbn }
        })
            .then( (reviews) => {

                // Create an array which contains the reviews object
                let reviewArray = [];

                // Push into the array a formatted object with the review info
                for (let i = 0; i < reviews.length; i++)
                    reviewArray.push({
                        reviewID: reviews[i].reviewID,
                        title: reviews[i].title,
                        text: reviews[i].text,
                        ISBN: reviews[i].ISBN
                    });

                resolve(reviewArray);
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            });
    });
};