jQuery(document).ready(function() {

    let url = window.location.pathname;
    let themeID = url.substr(url.lastIndexOf('/') + 1);

    $.get("/api/v1/themes/" + themeID, function(themeInfo) {

        $(".banner-primary").css('background-image',
            'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../assets/images' + themeInfo.picture + '")');

        $("#themeTitle").text(themeInfo.title);

        $('#breadcrumb-title').text(themeInfo.title);

    });

    /* Books of the theme */
    $.get("/api/v1/themes/" + themeID + "/books?limit=100", function(bookIDs){

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