const { User, Session } = require('../../Model/sequelize');
    const Response = require('../../Utils/response');
const crypto = require('crypto');

exports.login = function (email, password) {
    return new Promise( (resolve, reject) => {

        User.findOne({
            where: {email: email, activationToken: null}
        })
            .then( (user) => {
                // If no user exists, return
                if(!user) {
                    let error = new Response(401, "The email or the password are wrong");
                    return reject(error);
                }

                crypto.randomBytes(32, (error, buffer) => {

                    // If there is an error creating the token, return the Internal Server Error
                    if(error) {
                        let error = new Response(500, "Internal Server Error");
                        return reject(error);
                    }

                    /**
                     *  Check if there are sessions already present in the Database, and in that case,
                     *  delete them before creating a new one
                     */
                    Session.findAll({
                        where: { userID: user.id }
                    })
                        .then( (sessionList) => {

                            for(let i = 0; i < sessionList.length; i++)
                                sessionList[i].destroy();

                            if(password === user.password) {
                                let token = buffer.toString('hex');
                                let date = new Date();

                                // Create the session
                                Session.create({
                                    sessionToken: token,
                                    userID: user.id,
                                    expirationDate: date.setDate(date.getDate() + 5)
                                }).then((session) => {

                                    // Create the JSON object to return back to the client
                                    let returnUser = {
                                        id: user.id,
                                        name: user.name,
                                        surname: user.surname,
                                        email: user.email
                                    };

                                    let returnObject = {
                                        token: session.sessionToken,
                                        user: returnUser
                                    };

                                    return resolve(returnObject);
                                });
                            } else {
                                // If the password doesn't match, return the Unauthorized error
                                let error = new Response(401, "The email or the password are wrong");
                                return reject(error);
                            }

                        })
                        .catch( (err) => {
                            console.log(err);
                            reject(new Response(500, "Internal Server Error"));
                        });

                });

            }).catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            });

    });
};