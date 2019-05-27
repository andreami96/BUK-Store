$(document).ready(function () {

    $.get("/api/v1/me/", function(data){

        $('title').text(data.name + " " + data.surname + " - BUK Store");
        $('#username').text(data.name + " " + data.surname);
        $('#email').text(data.email);
        $('#joined').text(data.creationDate);
    });

    $.get("/api/v1/me/reservations", function (data) {
        if(data.length > 0) {
            // When there are reservation
            $('#no-element-error').remove();

            data.forEach(function(element) {
                addReservation(element);
            });
        } else {
            // When no reservation is found
            $('#reservation-table').remove()
        }
    });
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
    addBookList(reservation.books)
}

function addBookList(books) {
    $('#items')
        .append("")
}