const { User } = require('../../Model/sequelize');
const Response = require('../../Utils/response');

exports.activateAccount = function (token) {
    return new Promise( (resolve, reject) => {

        User.findOne({
            where: {activationToken: token}
        }).then( async (user) => {
            if(!user)
                return reject(new Response(400, "No user found with that token"));

            await user.update({activationToken: null});
            resolve(new Response(200, "User Activated"));
        })

    });
};

exports.activateAccount("ca1201939b13716c");