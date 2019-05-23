function mobileViewUpdate() {
//    var viewportWidth = $(window).width();
    var viewportWidth = document.getElementById("content").offsetWidth;

    if (viewportWidth <= 576 ) {
        var element = document.getElementById("book-catalog");
        element.className = element.className.replace(/\bcolumns-*\b/g, "");
        element.classList.add("columns-1");
    }
    else if (viewportWidth > 576 && viewportWidth <= 912) {
        var element = document.getElementById("book-catalog");
        element.className = element.className.replace(/\bcolumns-*\b/g, "");
        element.classList.add("columns-2");
    }
    else if (viewportWidth > 912 && viewportWidth < 1200) {
        var element = document.getElementById("book-catalog");
        element.className = element.className.replace(/\bcolumns-*\b/g, "");
        element.classList.add("columns-3");
    }
    else if (viewportWidth >= 1200) {
        var element = document.getElementById("book-catalog");
        element.className = element.className.replace(/\bcolumns-*\b/g, "");
        element.classList.add("columns-4");
    }
}

function buildAuthorsList (authors) {
        var list = "";
        authors.forEach(function (el, index) {
            if (index === 0)
                list = list + el.name + ' ' + el.surname;
            else
                list = list + ', ' + el.name + ' ' + el.surname;
        });
        return list;
}

$(document).ready( function () {
    $('button').on('click', mobileViewUpdate());
});

$(document).ready( function() {

    var $sidebar   = $("#sidebar-list"),
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 80;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top ) {
            //if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 50)
            let scroll = $window.scrollTop(),
                docHeight = $(document).height(),
                sidebarHeight = $("#sidebar-list").height(),
                footerPosition = $("#footerContainer").position(),
                footerHeight = $("#footerContainer").height();

            if ( scroll + sidebarHeight + 150 <= docHeight - footerHeight - 50) {
                $sidebar.stop().animate({
                    marginTop: $window.scrollTop() - offset.top + topPadding
                });
            } else {
                $sidebar.stop().animate({
                    marginTop: footerPosition.top - sidebarHeight - 300
                });
            }

        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });

});

$(window).on('load, resize', function mobileViewUpdate() {
//    var viewportWidth = $(window).width();
    var viewportWidth = document.getElementById("content").offsetWidth;

    if (viewportWidth <= 576 ) {
        var element = document.getElementById("book-catalog");
        element.className = element.className.replace(/\bcolumns-*\b/g, "");
        element.classList.add("columns-1");
    }
    else if (viewportWidth > 576 && viewportWidth <= 912) {
        var element = document.getElementById("book-catalog");
        element.className = element.className.replace(/\bcolumns-*\b/g, "");
        element.classList.add("columns-2");
    }
    else if (viewportWidth > 912 && viewportWidth < 1200) {
        var element = document.getElementById("book-catalog");
        element.className = element.className.replace(/\bcolumns-*\b/g, "");
        element.classList.add("columns-3");
    }
    else if (viewportWidth >= 1200) {
        var element = document.getElementById("book-catalog");
        element.className = element.className.replace(/\bcolumns-*\b/g, "");
        element.classList.add("columns-4");
    }
});

jQuery(document).ready( function () {
    let url = window.location.pathname;
    let isbn = url.substr(url.lastIndexOf('/') + 1);

    // Build the list of books
    $.get("/api/v1/books/", {limit: 12, offset: 0}, function (data, status) {
        console.log(data);

        data.forEach(function (el, index) {
            $.get("/api/v1/books/" + el.ISBN, function (bookData, status) {
                console.log(bookData);

                $.get("/api/v1/books/" + bookData.ISBN + "/authors", function (authorsList, status) {
                    console.log(authorsList);

//                    $("#book-catalog").append(buildBookElement(bookData, authorsList));
                    $('#book-catalog').append($('<li>').attr({
                        "id": "book" + index
                    }));

                    $('#book' + index).append($('<a>').attr({
                        "href": "/books/" + bookData.ISBN
                    }));
                    $('#book' + index).append($('<h6>').addClass('mt-2').text(bookData.title));
                    $('#book' + index).append($('<p>').addClass('mt-1 authorsNameList').text(buildAuthorsList(authorsList)));
                    $('#book' + index).append($('<div>').addClass('price').text(bookData.price + ' €'));

                    $('#book' + index + ' a').append($('<img>').attr({
                        "class": "product-image img-fluid",
                        "src": "../assets/images" + bookData.picture,
                        "alt": "#"
                    }));

                    /*
                                    var newEl = $("li h4")[index];
                                    $("#book-catalog").find($("li h5")[index]).text(data.title);
                                    $("#book-catalog").find($("li a img")[index]).attr({
                                        "src": "../assets/images" + data.picture
                                    });
                                    $("#book-catalog").find($("li p")[index]).text("author");
                                    $("#book-catalog").find($("li h5")[index]).text(data.title);
                    */
                });
            });
        });
    });

    // Insert the list of themes
    $.get("/api/v1/themes/", {limit: 5, offset: 0}, function (data, status) {
        console.log(data);

        data.forEach(function (el) {
           $("#sidebar-themes").prepend(
               "<li><a href=\"/themes/" + el.themeID + "\">" + el.title + " </a></li>"
           )
        });
    });

    // Insert the list of genres
    $.get("/api/v1/mainGenres/", {limit:5, offset: 0}, function (data, status) {
        console.log(data);

        data.forEach(function (el) {
            $("#sidebar-genres").prepend(
                "<li><a href=\"/genres/" + el.mainGenreID + "\">" + el.title + " </a></li>"
            )
        })
    });

    // Register callback for next page
    setTimeout(mobileViewUpdate, 200);

});

