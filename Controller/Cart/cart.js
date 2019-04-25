const { findRawCartByUserID } = require('./rawCart');
const { findRawBooksByISBN } = require('../Book/rawBook');
const { Cart } = require('../../Model/sequelize');
const Response = require('../../Utils/response');

/**
 *  Find the products inside the cart of the given user, and pack them inside a useful object which is ready to send
 *  to the client
 * @param userID                The ID of the user
 * @returns {Promise<any>}      If the promise is solved, return the user's cart object in a ready-to-send format
 */
exports.findCartByUserID = function (userID) {
    return new Promise( (resolve, reject) => {

        findRawCartByUserID(userID)
            .then( async (cart) => {
                let returnCart = {
                    userID: userID,
                    books: []
                };

                for(let i = 0; i < cart.length; i++) {
                    let book = await findRawBooksByISBN(cart[i].ISBN);
                    returnCart.books.push({
                        ISBN: cart[i].ISBN,
                        title: book.title,
                        quantity: cart[i].quantity
                    });
                }
                return resolve(returnCart);
            })
            .catch( (err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            });
    });
};

/**
 *  Add a specified product inside the user's cart
 * @param userID            The ID of the user
 * @param isbn              The ISBN of the book to add
 * @param quantity          The quantity of the chosen book
 * @returns {Promise<any>}  If the promise is solved, return the user's cart object in a ready-to-send format
 */
exports.addProductToCart = function (userID, isbn, quantity) {
    return new Promise( (resolve, reject) => {
        Cart.create({
            userID: userID,
            ISBN: isbn,
            quantity: quantity
        }).then(() => {
            exports.findCartByUserID(userID)
                .then( (cartObject) => {
                    return resolve(cartObject);
                })
                .catch( (err) => {
                    return reject(err);
                });
        }).catch( (err) => {
            console.log(err);
            if(err.name === "SequelizeUniqueConstraintError")
                return reject(new Response(400, "This book is already inside the cart, use the PUT method"));
            reject(new Response(500, "Internal Server Error"));
        });
    });
};

/**
 *  Change the quantity of a product inside the user's cart
 * @param userID                The ID of the user
 * @param isbn                  The ISBN of the book to change
 * @param quantity              The quantity of the chosen book
 * @returns {Promise<any>}      If the promise is solved, return the user's cart object in a ready-to-send format
 */
exports.changeProductQuantity = function (userID, isbn, quantity) {
    return new Promise( (resolve, reject) => {
        Cart.update({quantity: quantity}, {
            where: {userID: userID, ISBN: isbn}
        }).then( () => {

            exports.findCartByUserID(userID)
                .then( (cartObject) => {
                    return resolve(cartObject);
                })
                .catch( (err) => {
                    return reject(err);
                });
        }).catch((err) => {
            console.log(err);
            reject(new Response(500, "Internal Server Error"));
        });
    });
};

/**
 *  Delete the given barcode from the user's cart
 * @param userID            The ID of the user
 * @param isbn              The ISBN of the book to delete
 * @returns {Promise<any>}  If the promise is solved, return the user's cart object in a ready-to-send format
 */
exports.deleteProduct = function (userID, isbn) {
    return new Promise( (resolve, reject) => {
        Cart.findOne({where: {userID: userID, ISBN: isbn}})
            .then( async (product) => {

                if(product)
                    await product.destroy();

                exports.findCartByUserID(userID)
                    .then( (cartObject) => {
                        return resolve(cartObject);
                    })
                    .catch( (err) => {
                        return reject(err);
                    });
            })
            .catch((err) => {
                console.log(err);
                reject(new Response(500, "Internal Server Error"));
            });
    });
};