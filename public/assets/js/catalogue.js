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
                list = list + '<a href=\'/authors/' + el.authorID + '\'> ' + el.name + ' ' + el.surname + '</a>';
            else
                list = list + ', <a href=\'/authors/' + el.authorID + '\'> ' + el.name + ' ' + el.surname + '</a>';
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

            if ( scroll + sidebarHeight + 230 <= docHeight - footerHeight - 50) {
                $sidebar.stop().animate({
                    marginTop: $window.scrollTop() - offset.top + topPadding
                });
            } else {
                $sidebar.stop().animate({
                    marginTop: footerPosition.top - sidebarHeight - 350
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
    let page = url.substr(url.lastIndexOf('/') + 1);
    let MAXBOOKS = 6;                   //TODO: set back to 12 or 8 when there will be enough books

    // Build the list of books
    $.get("/api/v1/books/", {limit: MAXBOOKS, offset: (page - 1) * MAXBOOKS}, function (data, status) {
        console.log(data);
        var bookToInsert = data.length;
        var emptyBlocks = MAXBOOKS - bookToInsert;

        // Build pagination for current page
        if ( page > 1 ){
            $('#page-prev a').attr({
                'href': '/catalogue/' + (parseInt(page, 10) - 1)
            });
        }
        else {
            $('#page-prev').addClass('disabled');
        }

        $('#page-1 a').attr({
            'href': '/catalogue/' + (parseInt(page, 10))
        }).text(page);

        if ( bookToInsert === MAXBOOKS ){
            $('#page-next a').attr({
                'href': '/catalogue/' + (parseInt(page, 10) + 1)
            });
        }
        else {
            $('#page-next').addClass('disabled');
        }

        data.forEach(function (el, index) {
            $.get("/api/v1/books/" + el.ISBN, function (bookData, status) {
                console.log(bookData);

                $.get("/api/v1/books/" + bookData.ISBN + "/authors", function (authorsList, status) {
                    console.log(authorsList);
                    bookToInsert--;

                    $('#book-catalog').append($('<li>').attr({
                        "id": "book" + index
                    }));

                    $('#book' + index).append($('<a>').attr({
                        'href': '/books/' + bookData.ISBN,
                        'id' : 'book' + index + '-image'
                    }));
                    $('#book' + index + ' a').append($('<h6>').addClass('mt-2 mb-0').text(bookData.title));
                    $('#book' + index).append($('<p>').addClass('mb-1 authorsNameList').append(' by ' + buildAuthorsList(authorsList)));

                    $('#book' + index).append($('<div>').addClass('price').text(bookData.price + ' €'));

                    $('#book' + index + '-image').prepend($('<img>').attr({
                        "class": "product-image img-fluid",
                        "src": "../assets/images" + bookData.picture,
                        "alt": "#"
                    }));

                    if ( bookToInsert === 0 ){
                        mobileViewUpdate();
                    }

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

});
