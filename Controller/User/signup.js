"use strict";

const config = require('../../Config/config');

const { User } = require('../../Model/sequelize');
const Response = require('../../Utils/response');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const template = require('string-template');

function sendEmail(email, token) {
    let transporter = nodemailer.createTransport(config.emailConfig);

    let mail = {
        from: config.emailConfig.auth.user,
        to: email,
        subject: config.emailContent.subject,
        text: template(config.emailContent.text, [token])
    };

    return transporter.sendMail(mail)
}

exports.signUpNewUser = function (name, surname, email, password) {
    return new Promise( async (resolve, reject) => {

        let token = await crypto.randomBytes(8).toString('hex');

        User.create({
            name: name,
            surname: surname,
            email: email,
            password: password,
            activationToken: token
        }).then( async () => {
            try {
                await sendEmail(email, token);
            } catch (e) {
                console.log(e);
                reject(new Response(500, 'Internal Server Error'));
            }
            resolve(new Response(201, 'User registered properly'));
        }).catch( (err) => {
            let errorList = err.errors;

            /**
             *  If the errorList contains some objects, it means that something goes wrong. In particular, if there is
             *  the unique violation, it means that the given email is already present in the DB, otherwise it means that
             *  the parameters are bad written (maybe the password is too short or the email isn't well written)
             *  If no one of the above consideration holds, it means that the server encounters a particular error
             */
            if(errorList && errorList.length > 0)
                if(errorList[0].type === "unique violation")
                    reject(new Response(409, 'Another user is already registered with the given email'));
                else
                    reject(new Response(400, 'The given parameters are wrong or bad written'));
            else
                reject(new Response(500, 'Internal Server Error'));
        });

    });
};