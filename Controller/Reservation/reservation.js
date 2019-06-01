const { Reservation, Book } = require('../../Model/sequelize');
const { findRawBooksByISBN } = require('../Book/rawBook');
const { findRawCartByUserID, deleteWholeCart } = require('../Cart/rawCart');
const Response = require('../../Utils/response');

exports.findAllReservationByUserID = function(userID) {
    return new Promise( (resolve, reject) => {

        Reservation.findAll({
            attributes: ['reservationID', 'userID', 'shippingLocation', 'orderDate', 'arrivalDate'],
            where: { userID: userID },
            group: ['reservationID', 'userID', 'shippingLocation', 'orderDate', 'arrivalDate']
        }).then( async (reservationList) => {

            let reservationObject;
            let reservationResultArray = [];

            for (let i=0; i<reservationList.length; i++) {
                let booksArray = [];
                reservationObject = {
                    reservationID: reservationList[i].reservationID,
                    userID: reservationList[i].userID,
                    shippingLocation: reservationList[i].shippingLocation,
                    orderDate: reservationList[i].orderDate,
                    arrivalDate: reservationList[i].arrivalDate
                };
                try {
                    let reservedBooks = await Reservation.findAll({
                        attributes: ['ISBN', 'quantity'],
                        where: {reservationID: reservationList[i].reservationID}
                    });

                    for (let j=0; j<reservedBooks.length; j++) {
                        let book = await findRawBooksByISBN(reservedBooks[j].ISBN);
                        booksArray.push({
                            ISBN: book.ISBN,
                            title: book.title,
                            quantity: reservedBooks[j].quantity
                        });
                    }
                    reservationObject.books = booksArray;
                    reservationResultArray.push(reservationObject)

                } catch (e) {
                    console.log(e);
                    reject(new Response(500, "Internal Server Error"));
                }

            }


            resolve(reservationResultArray)

        })

    })
};

exports.addReservationToUser = function (userID, shippingLocation) {

    return new Promise( async (resolve, reject) => {

        if(!shippingLocation)
            reject(new Response(400, "The shipping location must be specified"));

        try {
            let cart = await findRawCartByUserID(userID);

            if(cart.length <= 0)
                return reject(new Response(400, "The user cart is empty"));

            let orderDate = new Date();
            let arrivalDate = new Date();
            arrivalDate.setDate(arrivalDate.getDate() + 5);

            let lastReservationID = await Reservation.max('reservationID',
                {where: { userID: userID }}
                );

            for(let i=0; i < cart.length; i++)
                await Reservation.create({
                    reservationID: lastReservationID + 1,
                    userID: userID,
                    shippingLocation: shippingLocation,
                    orderDate: orderDate,
                    arrivalDate: arrivalDate,
                    ISBN: cart[i].ISBN,
                    quantity: cart[i].quantity
                });

            await deleteWholeCart(userID);

            resolve(await exports.findAllReservationByUserID(userID));

        } catch (e) {
            console.log(e);
            reject(new Response(500, "Internal Server Error"));
        }
    });

};