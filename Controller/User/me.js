const { User } = require('../../Model/sequelize');
const Response = require('../../Utils/response');

const { formatDate } = require('../../Utils/formatDate');

exports.findUserByID = function (userID) {

    return new Promise( (resolve, reject) => {
        User.findOne({
            where: {id: userID}
        })
            .then( (user) => {

                if(!user)
                    return reject(new Response(400, "No user exists with that id"));

                // Create the user object to return
                let returnUser = {
                    userID: user.id,
                    name: user.name,
                    surname: user.surname,
                    email: user.email,
                    creationDate: formatDate(user.createdAt),
                    lastUpdate: formatDate(user.updatedAt)
                };
                resolve(returnUser);
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            })
    })
};

exports.modifyUserByID = function (userID, name, surname, email, password) {
    return new Promise( (resolve, reject) => {
        User.findOne({
            where: { id: userID}
        })
            .then( (user) => {
                if(!user)
                    return reject(new Response(400, "No user exists with that id"));

                let updateParameters = {
                    name: name,
                    surname: surname,
                    email: email
                };

                if(password)
                    updateParameters.password = password;

                user.update(updateParameters)
                    .then( () => {
                        let returnUser = {
                            id: user.id,
                            name: user.name,
                            surname: user.surname,
                            email: user.email
                        };
                        resolve(returnUser);
                    })
                    .catch( (err) => {
                        let errorList = err.errors;
                        console.log(errorList);

                        if(errorList && errorList.length > 0)
                            if(errorList[0].type === "unique violation")
                                reject(new Response(409, 'Another user is already registered with the given email'));
                            else
                                reject(new Response(400, 'The given parameters are wrong or bad written'));
                        else
                            reject(new Response(500, 'Internal Server Error'));
                    });
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"))
            });
    });
};