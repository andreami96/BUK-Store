"use strict";
const { Cart } = require('../../Model/sequelize');

/**
 *  Find the raw products inside the cart of the given user
 * @param userID            The ID of the user
 * @returns {Promise<any>}  If the promise is solved, return the user's cart object in raw format
 */
exports.findRawCartByUserID = function (userID) {
    return new Promise( (resolve, reject) => {
        Cart.findAll({
            where: {userID: userID}
        }).then( (cart) => {
            if(cart)
                resolve(cart);
        }).catch( (err) => {
            reject(err);
        });
    });
};

exports.deleteWholeCart = function (userID) {

    return new Promise( (resolve, reject) => {
        Cart.findAll({
            where: {userID: userID}
        }).then( (cart) => {
            for(let i=0; i < cart.length; i++)
                cart[i].destroy();
            resolve();
        }).catch( (err) => {
            reject(err);
        });
    })

}