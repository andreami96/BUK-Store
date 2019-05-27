const { findRawCarouselElements } = require('./rawHomeCarousel');
const Response = require('../../Utils/response');

exports.findCarouselElements = function () {
    return new Promise( (resolve, reject) => {

        findRawCarouselElements()
            .then( (carouselElements) => {

                let carouselArray = [];

                /**
                 *  Push each element present inside the carouselElements list into the carouselArray object used to
                 *  store them in order to be sent to the client
                 */
                for (let i = 0; i < carouselElements.length; i++)
                    carouselArray.push({
                        carouselID: carouselElements[i].carouselID,
                        ISBN: carouselElements[i].ISBN,
                        authorID: carouselElements[i].authorID,
                        eventID: carouselElements[i].eventID
                    });
                resolve(carouselArray);
            })
            .catch( (err) => {
                console.log(err);
                return reject(new Response(500, "Internal Server Error"));
            })
    });
};