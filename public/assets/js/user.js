$(document).ready(function () {

    $.get("/api/v1/me/", function(data){

        $('title').text(data.name + " " + data.surname + " - BUK Store");
        $('#username').text(data.name + " " + data.surname);
        $('#email').text(data.email);
        $('#joined').text(data.creationDate);
    });

    $.get("/api/v1/me/reservations", function (data) {
        if(data.length > 0) {
            // Book statistics
            let totalPurchasedBook = 0;
            let thisMonthPurchased = 0;
            let thisMonthArray = data.filter(reservation => new Date(reservation.orderDate).getMonth() === new Date().getMonth());

            // When there are reservation
            $('.no-element-error').remove();

            for(let i = 0; i < data.length; i++) {
                addReservation(data[i]);
                totalPurchasedBook += computeBookQuantityFromReservation(data[i]);
            }

            for(let i = 0; i < thisMonthArray.length; i++) {
                thisMonthPurchased += computeBookQuantityFromReservation(thisMonthArray[i]);
            }

            $('#total-book-purchased').text(totalPurchasedBook.toString());
            $('#book-purchased-month').text(thisMonthPurchased.toString());
        } else {
            // When no reservation is found
            $('#reservation-table').remove()
        }
    });

    $.get("/api/v1/me/cart", function (data) {
        let totalBooksInCart = 0;

        data.books.forEach( (book) => {
            totalBooksInCart += book.quantity;
        });

        $('#book-cart').text(totalBooksInCart.toString());
    })

});

function addReservation(reservation) {
    $('#items')
        .append("<tr>\n" +
                "<td>" + reservation.reservationID + "</td>\n" +
                "<td>" + reservation.shippingLocation + "</td>\n" +
                "<td>" + reservation.orderDate + "</td>\n" +
                "<td>" + reservation.arrivalDate + "</td>\n" +
                "<td class='book-list'></td>\n" +
                "</tr>");
    addBookList(reservation.books);
}

function addBookList(books) {

    let appendHTML = "<ul>\n";

    for(let i = 0; i < books.length; i++)
        appendHTML += "   <li>" + books[i].title + ": <i>x" + books[i].quantity + "</i></li>\n";

    appendHTML += "</ul>";

    $('.book-list')
        .append(appendHTML);
}

function computeBookQuantityFromReservation(reservation) {
    let totalQuantity = 0;
    for(let i = 0; i < reservation.books.length; i++)
        totalQuantity += reservation.books[i].quantity;
    return totalQuantity;
}