$(document).ready(function () {

    retrieveCart();

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

    let beforeSize = $(window).width();
    $(window).resize(function () {
        if($(window).width() > 700 && beforeSize <= 700) {
            $('#cart-table').empty();
            retrieveCart();
        } else if ($(window).width() <= 700 && beforeSize > 700) {
            $('#cart-table').empty();
            retrieveCart();
        }
        beforeSize = $(window).width();
    })

});

function retrieveCart() {
    $.get("/api/v1/me/cart", function (data) {
        let totalBooksInCart = 0;

        let bookArray = [];

        let itemProcessed = 0;

        data.books.forEach( (book, index, array) => {

            $.get("/api/v1/books/" + book.ISBN, function (bookData) {
                bookArray.push({book: bookData, quantity: book.quantity});
                if($(window).width() > 700)
                    createCartRow(bookData, book.quantity);
                else
                    createCartRowMobile(bookData, book.quantity);
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

            if($(window).width() >= 700)
                $('#cart-table').append(createCartTable());
            else
                $('#cart-table').append(createCartTableMobile());
        } else {
            $('#table-button').remove();
            $('#cart-table').remove();
        }
    });
}

function continueShopping() {
    window.location.href = '/catalogue/1';
}

function createCartTableMobile() {
    return "                    <thead>\n" +
        "                        <tr>\n" +
        "                            <th>Product</th>\n" +
        "                            <th>Price</th>\n" +
        "                            <th>Quantity</th>\n" +
        "                            <th></th>\n" +
        "                        </tr>\n" +
        "                        </thead>\n" +
        "                        <tbody id=\"tbody-cart\">\n" +
        "\n" +
        "                        </tbody>\n" +
        "                        <tfoot>\n" +
        "                        <tr>\n" +
        "                            <td colspan='4' class=\"hidden-xs text-center\"><strong>Total €<span id=\"total-price\"></span></strong></td>\n" +
        "                        </tr>\n" +
        "                        </tfoot>";
}

function createCartRowMobile(book, quantity) {
    $('#cart-table').addClass("table-responsive");
    $("#tbody-cart").append(  "<tr>\n" +
        "   <td data-th=\"Product\">\n" +
        "      <div class=\"row\">\n" +
        "         <div class=\"col-sm-12\">\n" +
        "            <h6 class=\"nomargin\">" + book.title + "</h6>\n" +
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
        "   <td class=\"actions\" data-th=\"\">\n" +
        "      <button onclick=\"deleteBook('" + book.ISBN + "')\" class=\"btn btn-danger btn-sm\"><i class=\"fa fa-trash\"></i></button>\n" +
        "   </td>\n" +
        "</tr>");

    $("#book-quantity-" + book.ISBN).get(0).selectedIndex = quantity - 1;
}

function createCartTable() {
    $('#cart-table').removeClass("table-responsive");
    return "                    <thead>\n" +
        "                        <tr>\n" +
        "                            <th>Product</th>\n" +
        "                            <th>Price</th>\n" +
        "                            <th>Quantity</th>\n" +
        "                            <th class=\"text-center\">Subtotal</th>\n" +
        "                            <th></th>\n" +
        "                        </tr>\n" +
        "                        </thead>\n" +
        "                        <tbody id=\"tbody-cart\">\n" +
        "\n" +
        "                        </tbody>\n" +
        "                        <tfoot>\n" +
        "                        <tr>\n" +
        "                            <td colspan='5' class=\"text-right hidden-xs\"><strong>Total €<span id=\"total-price\"></span></strong></td>\n" +
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
        "            <h6 class=\"nomargin\">" + book.title + "</h6>\n" +
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