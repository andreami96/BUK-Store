const { findBestseller } = require('./rawBestseller');
const { findRawBooksByISBN } = require('../rawBook');
const Response = require('../../../Utils/response');
const { isInt } = require('../../../Utils/isInteger');
const { isDate } = require('../../../Utils/isDate');
const { formatDate } = require('../../../Utils/formatDate');

exports.findBestSeller = function (limit, fromDate, toDate) {

    return new Promise( (resolve, reject) => {

        // Construct limit object with either the given limit or the default ones
        if(limit)
            limit = limit.toString();
        else
            limit = "5";

        /**
         *  If no date is set, then inject the actual date in those parameters
         */
        if(!fromDate)
            fromDate = formatDate(new Date());
        if(!toDate)
            toDate = formatDate(new Date());

        /**
         *  If some date is given, then it should in the YYYY-MM-DD format
         */
        if(!isDate(fromDate) || !isDate(toDate))
            return reject(new Response(400, "The from or the to parameters are not correctly written. " +
                "The accepted format is yyyy-mm-dd"));

        findBestseller(limit, fromDate, toDate)
            .then( async (bestSellerList) => {

                let bestSellerArray = [];
                for(let i=0; i < bestSellerList.length; i++) {

                    try {
                        let book = await findRawBooksByISBN(bestSellerList[i].ISBN);
                        bestSellerArray.push({
                            ISBN: book.ISBN,
                            title: book.title,
                            booksSold: bestSellerList[i].dataValues.booksSold
                        });

                    } catch (e) {
                        console.log(e);
                        reject(new Response(500, "Internal Server Error"));
                    }

                }
                resolve(bestSellerArray);
            })
            .catch( (err) => {
                if(err.name === "SequelizeDatabaseError" && err.message === "invalid input syntax for type date: \"Invalid date\"")
                    return reject(new Response(400, "The 'from' or the 'to' parameter is not a valid date"))
                reject(new Response(500, "Internal Server Error"))
            })
    })

};