jQuery(document).ready(function() {

    let url = window.location.pathname;
    let genreID = url.substr(url.lastIndexOf('/') + 1);

    $.get("/api/v1/genres/" + genreID, function(genreInfo) {
        /* Banner image */
        $(".banner-primary").css('background-image',
            'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../assets/images' + genreInfo.picture + '")');

        $("#genreTitle").text(genreInfo.title);
        /* Genre description */
        $("#genreDescription").text(genreInfo.description);

        $.get("/api/v1/mainGenres/" + genreInfo.mainGenre, function(mainGenre){
            $('#maingenre-breadcrumb').attr('href', '/mainGenres/' + mainGenre.mainGenreID).text(mainGenre.title);
        });

        $('#breadcrumb-title').text(genreInfo.title);

    });

    /* Books of the genre */
    $.get("/api/v1/genres/" + genreID + "/books", function(bookIDs){

        console.log(bookIDs);

        let bookProcessed = [];

        for(let i = 0; i < bookIDs.length; i++) {
            $.get("/api/v1/books/" + bookIDs[i].ISBN, function (bookDetailed) {
                bookProcessed.push(bookDetailed);

                // Create HTML only when all the GET are completed
                if(bookIDs.length === bookProcessed.length)
                    createBooksHTML(bookProcessed);
            });
        }
    });

});


function createBooksHTML(books) {

    for(let i = 0; i < books.length; i++) {
        if (i % 4 === 0)
            $('#bookContainer').append(
                $('<div>').addClass('row')
            );

        $.get("/api/v1/books/" + books[i].ISBN + "/authors", function (bookAuthors) {

            console.log(bookAuthors);

            let bookImgHTML = $('<a>').attr('href', '/books/' + books[i].ISBN).append(
                $('<img>').attr({
                    'class': 'book-img img-fluid',
                    'src': '/assets/images' + books[i].picture,
                    'alt': books[i].title
                })
            );
            let bookTitleHTML = $('<p>').addClass('bookTitle-text').text(books[i].title);

            let authorsString = '';
            for (let j = 0; j < bookAuthors.length; j++) {
                if (j !== bookAuthors.length - 1)
                    authorsString += bookAuthors[j].name + ' ' + bookAuthors[j].surname + ',';
                else
                    authorsString += bookAuthors[j].name + ' ' + bookAuthors[j].surname;
            }
            let bookAuthorHTML = $('<p>').addClass('bookAuthor-text').text(authorsString);

            let bookColHTML = $('<div>').addClass('book col-sm-6 col-md-3');
            bookColHTML.append(bookImgHTML);
            bookColHTML.append(bookTitleHTML);
            bookColHTML.append(bookAuthorHTML);

            $('#bookContainer').find('>:last-child').append(bookColHTML);
        })
    }
}




/*
/!* Themes links *!/
$.get("/api/v1/genres/" + genreID + "/themes", function(themes) {
    for(let i = 0; i < themes.length; i++) {

        let rowNumber = Math.floor(i / 4) + 1;

        // If multiple of 4, create row
        if(i % 4 === 0) {
            $('#themes-container').append($('<div>').attr({
                'class': 'row',
                'id': 'row-n' + rowNumber
            }));
        }

        let genreIdHTML = themes[i].title.toLowerCase() + '-box';

        // Column and link
        $('#row-n' + rowNumber).append(
            $('<div>').addClass('col-6 col-md-3 mt-1').append(
                $('<a>').attr({
                    'href': '#'  //TODO: add correct link to the specific theme
                }).text(themes[i].title)
            )
        );
    }
});*/