function mobileViewUpdate() {
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

function buildGenres(genresList, selectedGenre, selectedTheme ) {

    genresList.forEach(function (el) {
        $("#sidebar-genres")
            .prepend( $('<li>').attr({
                'id': 'genre-' + el.genreID
            }));

        if ( el.genreID === selectedGenre ){
            $('#genre-' + el.genreID)
                .append($('<a>').attr({
                        'href': '/catalogue/1?genre=&theme=' + selectedTheme
                    }).text(el.title)
                );
            $('#genre-' + el.genreID).addClass('active');
            $('#genre-' + el.genreID + ' a')
                .append($('<i>').addClass('fas fa-times'));
        }
        else {
            $('#genre-' + el.genreID)
                .append($('<a>').attr({
                    'href': '/catalogue/1?genre=' + el.genreID + '&theme=' + selectedTheme
                }).text(el.title)
                );
        }
    });
}

function buildThemes(themesList, selectedGenre, selectedTheme ){

    themesList.forEach(function (el) {
        $("#sidebar-themes")
            .prepend( $('<li>').attr({
                'id': 'theme-' + el.themeID
            }));

        if ( el.themeID === selectedTheme ){
            $('#theme-' + el.themeID)
                .append($('<a>').attr({
                        'href': '/catalogue/1?theme=&genre=' + selectedGenre
                    }).text(el.title)
                );
            $('#theme-' + el.themeID).addClass('active');
            $('#theme-' + el.themeID + ' a')
                .append($('<i>').addClass('fas fa-times'));
        } else {
            $('#theme-' + el.themeID)
                .append($('<a>').attr({
                        'href': '/catalogue/1?theme=' + el.themeID + '&genre=' + selectedGenre
                    }).text(el.title)
                );
        }
    });
}

function buildPagination(bookToInsert, selectedGenre, selectedTheme) {

    let url = window.location.pathname;
    let catalogPage = parseInt(url.substr(url.lastIndexOf('/') + 1), 10);

    if ( catalogPage > 1 ){
        $('#page-prev a').attr({
            'href': '/catalogue/' + (catalogPage - 1) + '?genre=' + selectedGenre + '&theme=' + selectedTheme
        });
    }
    else {
        $('#page-prev').addClass('disabled');
    }

    $('#page-1 a').text(catalogPage);

    if ( bookToInsert === parseInt(sessionStorage['MAXBOOKS']) ){
        $('#page-next a').attr({
            'href': '/catalogue/' + (catalogPage + 1) + '?genre=' + selectedGenre + '&theme=' + selectedTheme
        });
    }
    else {
        $('#page-next').addClass('disabled');
    }
}

function buildBooks(bookList, selectedGenres, selectedThemes){

    var bookToInsert = bookList.length;
    var emptyBlocks = parseInt(sessionStorage['MAXBOOKS']) - bookToInsert;

    // Build pagination for current page
    buildPagination(bookToInsert, selectedGenres, selectedThemes);

    if ( bookToInsert === 0 ){

        $('.pagination').remove();

        $('#content').addClass('no-books-content')
            .append($('<div>').attr({
                'class': 'container px-5 mt-5 no-books',
                'id': 'no-books-container'
        }));

        $('#no-books-container').append($('<hr>'));
        $('#no-books-container').append($('<p>').attr({
            'class': 'text-center'
        }).text('There are no books for such category'));

        $('#no-books-container').append($('<hr>'));

//            $('#book-catalog').append($('<li>').addClass('no-books').text('Ops, there are no books for such filters'));
    }
    else {
        for(let i=0; i < bookToInsert; i++) {
            $('#book-catalog').append($('<li>').attr({
                "id": "book" + i
            }));
        }

        bookList.forEach(function (el, index) {
            $.get("/api/v1/books/" + el.ISBN, function (bookData, status) {
                console.log(bookData);

                $.get("/api/v1/books/" + bookData.ISBN + "/authors", function (authorsList, status) {
                    console.log(authorsList);
                    bookToInsert--;

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
}

function insertCurrentBooks(pageNumber) {

    let selectedGenres = parseInt(getUrlParam('genre', ''));
    let selectedThemes= parseInt(getUrlParam('theme', ''));
    let queryParam = {
        limit: sessionStorage['MAXBOOKS'],
        offset: (pageNumber - 1) * parseInt(sessionStorage['MAXBOOKS']),
        genreID: (selectedGenres) ? selectedGenres : '',
        themeID: (selectedThemes) ? selectedThemes : ''
    };

    $.get("/api/v1/books/", queryParam, function (data, status) {
        console.log(data);
        buildBooks(data, selectedGenres, selectedThemes);
    });

}

function insertCurrentThemes(){

    let selectedGenres = parseInt(getUrlParam('genre', ''));
    let selectedThemes= parseInt(getUrlParam('theme', ''));

    if( selectedGenres ){
        $.get('/api/v1/genres/' + selectedGenres + '/themes', function (data, status) {
            console.log(data);
            buildThemes(data, selectedGenres, selectedThemes);
        });
    }
    else {
        $.get("/api/v1/themes/", {limit: 10, offset: 0}, function (data, status) {
            console.log(data);
            buildThemes(data, selectedGenres, selectedThemes);
        });
    }
}

function insertCurrentGenres(){

    let selectedGenres = parseInt(getUrlParam('genre', ''));
    let selectedThemes= parseInt(getUrlParam('theme', ''));

    if( selectedThemes ){
        $.get('/api/v1/themes/' + selectedThemes + '/genres', function (data, status) {
            console.log(data);
            buildGenres(data, selectedGenres, selectedThemes);
        });
    }
    else {
        $.get("/api/v1/genres/", {limit: 10, offset: 0}, function (data, status) {
            console.log(data);
            buildGenres(data, selectedGenres, selectedThemes);
        });
    }
}

$(document).ready( function () {
    $('button').on('click', mobileViewUpdate());
});

$(document).ready( function() {

    /*
    //Sidebar scrolling with navbar
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
     */

});

$(window).on('load, resize', function mobileViewUpdate() {
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

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
    }
    return urlparameter;
}


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

});
