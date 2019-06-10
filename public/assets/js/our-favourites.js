jQuery(document).ready(function(){

});
$.get("/api/v1/favouriteReadings", function(books){
    createBooksHTML(books);
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