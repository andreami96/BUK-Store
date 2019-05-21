const { Session } = require('../../Model/sequelize');
const Response = require('../../Utils/response');

exports.logout = function (userID) {
    return new Promise( (resolve, reject) => {

        Session.findOne({
            where: { userID: userID }
        })
            .then( (session) => {
                if(session)
                    session.destroy();
                return resolve(new Response(200, "User logged out"));
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            })

    });
};