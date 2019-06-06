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
            $('.no-reservation-error').remove();

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

        let bookArray = [];

        let itemProcessed = 0;

        data.books.forEach( (book, index, array) => {

            $.get("/api/v1/books/" + book.ISBN, function (bookData) {
                bookArray.push({book: bookData, quantity: book.quantity});
                createCartRow(bookData, book.quantity);
                createModalRow(bookData, book.quantity);
                itemProcessed++;
                if(itemProcessed === array.length)
                    computeTotal(bookArray);
            });
            totalBooksInCart += book.quantity;
        });

        $('#book-cart').text(totalBooksInCart.toString());

        if(totalBooksInCart > 0) {
            // When there are products in the cart
            $('.no-cart-error').remove();
            $('#cart-table').append(createCartTable());
        } else {
            $('#cart-table').remove();
        }
    })
});

function createCartTable() {
    return "                    <thead>\n" +
        "                        <tr>\n" +
        "                            <th style=\"width:50%\">Product</th>\n" +
        "                            <th style=\"width:10%\">Price</th>\n" +
        "                            <th style=\"width:8%\">Quantity</th>\n" +
        "                            <th style=\"width:22%\" class=\"text-center\">Subtotal</th>\n" +
        "                            <th style=\"width:10%\"></th>\n" +
        "                        </tr>\n" +
        "                        </thead>\n" +
        "                        <tbody id=\"tbody-cart\">\n" +
        "\n" +
        "                        </tbody>\n" +
        "                        <tfoot>\n" +
        "                        <tr>\n" +
        "                            <td><a href=\"/catalogue/1\" class=\"btn btn-warning\"><i class=\"fa fa-angle-left\"></i>Continue Shopping</a></td>\n" +
        "                            <td colspan=\"2\" class=\"hidden-xs\"></td>\n" +
        "                            <td class=\"hidden-xs text-center\"><strong>Total €<span id=\"total-price\"></span></strong></td>\n" +
        "                            <td><a href=\"#\" data-toggle='modal' data-target='#ModalForm' class=\"btn btn-success btn-block\">Checkout<i class=\"fa fa-angle-right\"></i></a></td>\n" +
        "                        </tr>\n" +
        "                        </tfoot>";
}

function createModalRow(book, quantity) {
    $('#modal-list').append("<li>" + book.title + " x" + quantity + "</li>");
}

function createCartRow(book, quantity) {
    $("#tbody-cart").append(  "<tr>\n" +
        "   <td data-th=\"Product\">\n" +
        "      <div class=\"row\">\n" +
        "         <div class=\"col-sm-12\">\n" +
        "            <h4 class=\"nomargin\">" + book.title + "</h4>\n" +
        "            <p><strong>ISBN: </strong><span>" + book.ISBN + "</span></p>" +
        "         </div>\n" +
        "      </div>\n" +
        "   </td>\n" +
        "   <td data-th=\"Price\">" + book.price + "</td>\n" +
        "   <td data-th=\"Quantity\">\n" +
        "      <div class=\"form-group\">\n" +
        "         <select class=\"form-control\" onchange=\"changeQuantity('" + book.ISBN + "')\" id=\"book-quantity-" + book.ISBN + "\">\n" +
        "            <option>1</option>\n" +
        "            <option>2</option>\n" +
        "            <option>3</option>\n" +
        "         </select>\n" +
        "      </div>   " +
        "   </td>\n" +
        "   <td data-th=\"Subtotal\" class=\"text-center\">" + (book.price * quantity).toFixed(2) + "</td>\n" +
        "   <td class=\"actions\" data-th=\"\">\n" +
        "      <button onclick=\"deleteBook('" + book.ISBN + "')\" class=\"btn btn-danger btn-sm\"><i class=\"fa fa-trash\"></i></button>\n" +
        "   </td>\n" +
        "</tr>");

    $("#book-quantity-" + book.ISBN).get(0).selectedIndex = quantity - 1;
}

function computeTotal(books) {
    let totalAmount = 0.0;

    for(let i = 0; i < books.length; i++) {
        totalAmount += books[i].book.price * books[i].quantity;
    }

    $('#total-price').text(totalAmount.toFixed(2));
    $('#modal-total').text(totalAmount.toFixed(2));
}

function changeQuantity(isbn) {
    let quantity = $('#book-quantity-' + isbn + " option:selected").val();
    $.ajax({
        type: "PUT",
        url: "/api/v1/me/cart",
        data: JSON.stringify({
            "ISBN": isbn,
            "quantity": quantity
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
            location.reload();
        },
        error: function(xhr) {
        }
    });
}

function deleteBook(isbn) {
    $.ajax({
        type: "DELETE",
        url: "/api/v1/me/cart?ISBN=" + isbn,
        success: function(data){
            location.reload();
        },
        error: function(xhr) {
        }
    });
}

function addReservation(reservation) {
    $('#items')
        .append("<tr>\n" +
                "<td>" + reservation.reservationID + "</td>\n" +
                "<td>" + reservation.shippingLocation + "</td>\n" +
                "<td>" + reservation.orderDate + "</td>\n" +
                "<td>" + reservation.arrivalDate + "</td>\n" +
                "<td class=\"book-list-" + reservation.reservationID + "\"></td>\n" +
                "</tr>");
    addBookList(reservation.reservationID, reservation.books);
}

function addBookList(id, books) {

    let appendHTML = "<ul>\n";

    for(let i = 0; i < books.length; i++)
        appendHTML += "   <li>" + books[i].title + ": <i>x" + books[i].quantity + "</i></li>\n";

    appendHTML += "</ul>";

    $('.book-list-' + id)
        .append(appendHTML);
}

function computeBookQuantityFromReservation(reservation) {
    let totalQuantity = 0;
    for(let i = 0; i < reservation.books.length; i++)
        totalQuantity += reservation.books[i].quantity;
    return totalQuantity;
}

function makeReservation() {
    let shippingAddress = $('#shipping-address').val();
    if(shippingAddress) {
        $.ajax({
            type: "POST",
            url: "/api/v1/me/reservations",
            data: JSON.stringify({
                "shippingLocation": shippingAddress
            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data){
                location.reload();
            },
            error: function(xhr) {
            }
        });
    } else {
        $('#shipping-address').addClass("is-invalid").attr('placeholder', "INSERT an address here");
        $('.control-label').addClass("text-danger");
    }
}

function closeModal() {
    $('#ModalForm').modal('toggle');
}