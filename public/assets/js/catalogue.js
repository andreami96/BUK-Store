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

function clearPage() {
    //$('#sidebar-genres li').remove();
    $('#sidebar-themes li').remove();
    $('#book-catalog li').remove();

}

function buildGenres(genresList) {
    genresList.forEach(function (el) {
        $("#sidebar-genres")
            .prepend( $('<li>').attr({
                'id': 'genre-' + el.genreID
            }));

        $('#genre-' + el.genreID)
            .append($('<a>').attr({
                'href': '/catalogue/1'
            })
                .text(el.title)
                .click( function () {
                    sessionStorage['genres'] = el.genreID;
                })
            );
    });
}

function buildThemes(themesList){
    themesList.forEach(function (el) {
        $("#sidebar-themes")
            .prepend( $('<li>').attr({
                'id': 'theme-' + el.themeID
            }));

        $('#theme-' + el.themeID)
            .append($('<a>').attr({
                'href': '/catalogue/1'
            })
                .text(el.title)
                .click(function () {
                    sessionStorage['themes'] = el.themeID;
                })
        );
    });
}

function buildPagination(bookToInsert) {

    let url = window.location.pathname;
    let catalogPage = parseInt(url.substr(url.lastIndexOf('/') + 1), 10);

    if ( catalogPage > 1 ){
        $('#page-prev a').attr({
            'href': '/catalogue/' + (catalogPage - 1)
        });
/*
        $('#page-prev a').removeClass('disabled').click(function () {
            clearPage();
            sessionStorage['catalog-page']= catalogPage - 1;
            insertCurrentBooks();
            insertCurrentThemes();
        });
 */

    }
    else {
        $('#page-prev').addClass('disabled');
    }

    $('#page-1 a').text(catalogPage);

    if ( bookToInsert === parseInt(sessionStorage['MAXBOOKS']) ){
        $('#page-next a').attr({
            'href': '/catalogue/' + (catalogPage + 1)
        });
/*
        $('#page-next a').removeClass('disabled').click(function () {
            clearPage();
            sessionStorage['catalog-page'] = catalogPage + 1;
            insertCurrentBooks();
            insertCurrentThemes();
        });
*/

    }
    else {
        $('#page-next').addClass('disabled');
    }
}

function buildBooks(bookList){

    var bookToInsert = bookList.length;
    var emptyBlocks = parseInt(sessionStorage['MAXBOOKS']) - bookToInsert;

    // Build pagination for current page
    buildPagination(bookToInsert);

    bookList.forEach(function (el, index) {
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
}

function insertCurrentBooks(pageNumber) {

    let selectedGenres = sessionStorage.getItem('genres');
    let selectedThemes = sessionStorage.getItem('themes');

    if( selectedGenres ){
        $.get('/api/v1/genres/' + selectedGenres + '/books', function (data, status) {
            console.log(data);
            buildBooks(data);
        });
    }
    else if ( selectedThemes ) {
        $.get('/api/v1/themes/' + selectedThemes + '/books', function (data, status) {
            console.log(data);
            buildBooks(data);
        });
    }
    else {
        $.get("/api/v1/books/", {limit: sessionStorage['MAXBOOKS'], offset: (pageNumber - 1) * parseInt(sessionStorage['MAXBOOKS'])}, function (data, status) {
            console.log(data);
            buildBooks(data);
        });
    }
}

function insertCurrentThemes(){

    let selectedGenres = sessionStorage.getItem('genres');
    let selectedThemes = sessionStorage.getItem('themes');

    if( selectedGenres ){
        $.get('/api/v1/genres/' + selectedGenres[0] + '/themes', function (data, status) {
            console.log(data);
            buildThemes(data);
        });
    }
    else {
        $.get("/api/v1/themes/", {limit: 10, offset: 0}, function (data, status) {
            console.log(data);
            buildThemes(data);
        });
    }
}

function insertCurrentGenres(){

    let selectedGenres = sessionStorage.getItem('genres');
    let selectedThemes = sessionStorage.getItem('themes');

    if( selectedThemes ){
        $.get('/api/v1/themes/' + selectedThemes[0] + '/genres', function (data, status) {
            console.log(data);
            buildGenres(data);
        });
    }
    else {
        $.get("/api/v1/genres/", {limit: 10, offset: 0}, function (data, status) {
            console.log(data);
            buildGenres(data);
        });
    }
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
    let page = parseInt(url.substr(url.lastIndexOf('/') + 1), 10);

    // Check if initialized session already exist
    if( sessionStorage.getItem('init-session') === null ){

        sessionStorage['init-session'] = false;
        sessionStorage['MAXBOOKS'] = 6;                 //TODO: set back to 12 or 8 when there will be enough books
        sessionStorage.removeItem('genres');
        sessionStorage.removeItem('themes');
    }

    let MAXBOOKS = parseInt(sessionStorage['MAXBOOKS']);

    // Build the list of books
    insertCurrentBooks(page);

    // Insert the list of themes
    insertCurrentThemes();

    // Insert the list of genres
    insertCurrentGenres();

    /*  OLD IMPLEMENTATION
    $.get("/api/v1/books/", {limit: MAXBOOKS, offset: (page - 1) * MAXBOOKS}, function (data, status) {
//        $.get("/api/v1/books/", {limit: window.MAXBOOKS, offset: (window.catalogPage - 1) * window.MAXBOOKS}, function (data, status) {
        console.log(data);
        buildBooks(data);
    });

    // Insert the list of themes
    $.get("/api/v1/themes/", {limit: 10, offset: 0}, function (data, status) {
        console.log(data);
        buildThemes(data);
    });

    // Insert the list of genres
    $.get("/api/v1/genres/", {limit:10, offset: 0}, function (data, status) {
        console.log(data);
        buildGenres(data);
    });

     */

    // Register callback for next page

});
