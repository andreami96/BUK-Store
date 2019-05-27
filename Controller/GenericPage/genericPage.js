const { findRawGenericPageByName } = require('./rawGenericPage');
const Response = require('../../Utils/response');

exports.findGenericPageByName = function (pageName) {
    return new Promise( (resolve, reject) => {

        /**
         *  Check if it is specified the page name
         */
        if(!pageName)
            return reject(new Response(400, "The page name should be specified"));

        findRawGenericPageByName(pageName)
            .then( (page) => {

                if(!page)
                    reject();

                let pageObject = {
                    pageID: page.pageID,
                    pageName: page.pageName,
                    body: page.body,
                };
                resolve(pageObject);
            })
            .catch( (err) => {
                console.log(err);
                return reject(new Response(500, "Internal Server Error"));
            })
    });
};