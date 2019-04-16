const { User } = require('../../Model/sequelize');
const Response = require('../../Utils/response');

exports.findUserByID = function (userID) {

    return new Promise( (resolve, reject) => {
        User.findOne({
            where: {id: userID}
        })
            .then( (user) => {

                if(!user)
                    return reject(new Response(500, "No user exists with that id"));

                // Create the user object to return
                let returnUser = {
                    id: user.id,
                    name: user.name,
                    surname: user.surname,
                    email: user.email
                };
                resolve(returnUser);
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "No user exists with that id"));
            })
    })

};