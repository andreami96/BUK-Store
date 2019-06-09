jQuery(document).ready(function() {

    let url = window.location.pathname;
    let eventID = url.substr(url.lastIndexOf('/') + 1);

    $.get("/api/v1/events/" + eventID, function(eventInfo, status){
        $(".banner-primary").css('background-image',
            'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../assets/images' + eventInfo.picture + '")');
        $("#eventTitle").text(eventInfo.title);
        $.get("/api/v1/books/" + eventInfo.presentedBook, function (relatedBook, status) {
            console.log(relatedBook);
            $('#eventBook').attr(
                {"src": "../assets/images" + relatedBook.picture,
                    "alt": relatedBook.title}
            );
            $('#bookISBN').val(relatedBook.ISBN);
            $('#bookQuantity').val(relatedBook.availableQuantity);

            if(relatedBook.availableQuantity > 0) {
                $('#buyButton').append("<button type=\"button\" class=\"btn btn-primary\" onclick=\"addToCart()\">\n" +
                    "Reserve\n" +
                    "</button>");
            } else {
                $('#buyButton').append("<button type=\"button\" class=\"btn btn-secondary\" disabled>\n" +
                    "Sold Out\n" +
                    "</button>");
            }

            $('#eventBookLink').attr('href', '/books/' + relatedBook.ISBN);

            $.get("/api/v1/books/" + relatedBook.ISBN + "/authors", function(bookAuthors, status) {
                $("#descriptionCol").append(createAuthors(bookAuthors));
            });

        });

        let eventDate = new Date(eventInfo.eventDate);
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        $.getScript('../assets/js/utils.js', function()
        {
            generateMap(eventInfo.latitude, eventInfo.longitude);
            $("#eventDate").text(eventDate.getDate() + " " + months[eventDate.getMonth()]);
            $("#eventTime").text(toHHMM(eventDate.getHours(), eventDate.getMinutes()));

            $("#eventLocation").text(eventInfo.address);
            $("#eventDescription").text(eventInfo.description);

        });
    });

});


function createAuthors(authors) {
    let authorsHTML = [];

    for (let j = 0; j < authors.length; j++) {
        if (j !== authors.length - 1)
            authorsHTML.push($('<a>').attr('href', '/authors/' + authors[j].authorID)
                .text(authors[j].name + ' ' + authors[j].surname + ','));
        else
            authorsHTML.push($('<a>').attr('href', '/authors/' + authors[j].authorID)
                .text(authors[j].name + ' ' + authors[j].surname));
    }

    return authorsHTML;
}

function addToCart() {
    if($(".badge").length) {

        $.ajax({
            type: "POST",
            url: "/api/v1/me/cart",
            data: JSON.stringify({
                "ISBN": $('#bookISBN').val(),
                "quantity": 1,
            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result, status, xhr) {
                $('.badge').text(parseInt($('.badge').text()) + 1);
                let message = "Book added to the cart";
                $('#alert')
                    .html("<div class=\"text-center alert alert-success alert-dismissible text-center mx-auto fade show\">\n" +
                        "            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n" +
                        "            <strong>Success!</strong><br>" + message +
                        "        </div>");
                $(".alert").delay(3000).fadeOut(500);
            },
            error: function (xhr) {
                let message = "This book is already in your cart, to modify the quantity go into your cart";
                $('#alert')
                    .html("<div class=\"text-center alert alert-danger alert-dismissible text-center mx-auto fade show\">\n" +
                        "            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n" +
                        "            <strong>Alert!</strong><br>" + message +
                        "        </div>");
                $(".alert").delay(3000).fadeOut(500);
            }
        });
    } else
        window.location.href = "/login.html";
}




/* TODO: improve scrolling when reaching top and bottom of the page */
