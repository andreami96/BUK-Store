jQuery(document).ready(function(){

    let url = window.location.pathname;
    let authorID = url.substr(url.lastIndexOf('/') + 1);
    console.log(authorID);

    $.get("/api/v1/authors/" + authorID, function(data, status){
        console.log(data);

        $('.banner-primary').css('background-image', 'url("../assets/images' + data.backgroundPicture + '")');
        $('#authorImg').attr('src', '/assets/images' + data.picture);
        $('#authorName').text(data.name + ' ' + data.surname);
        $('#authorBio').text(data.biography);

        // Books of the author
        $.get("/api/v1/authors/" + authorID + "/books", function(data, status){

            data.forEach(function(book, index) {
                console.log(book);
                $.get("/api/v1/books/" + book.ISBN, function(bookDetails, status) {
                    if(index % 4 === 0)
                        $('#content').append(
                            $('<div>').addClass('row')
                        );

                    $.get("/api/v1/books/" + bookDetails.ISBN + "/authors", function(bookAuthors, status){

                        console.log(bookAuthors);

                        let bookImgHTML = $('<a>').attr('href', '/books/' + bookDetails.ISBN).append(
                            $('<img>').attr({
                                'class': 'book-img img-fluid',
                                'src': '/assets/images' + bookDetails.picture,
                                'alt': bookDetails.title
                            })
                        );
                        let bookTitleHTML = $('<p>').addClass('bookTitle-text').text(bookDetails.title);

                        let authorsString = '';
                        for (let j = 0; j < bookAuthors.length; j++) {
                            if (j !== bookAuthors.length - 1)
                                authorsString += bookAuthors[j].name + ' ' + bookAuthors[j].surname + ',';
                            else
                                authorsString += bookAuthors[j].name + ' ' + bookAuthors[j].surname;
                        }
                        let bookAuthorHTML = $('<p>').addClass('bookAuthor-text').text(authorsString);

                        let bookColHTML = $('<div>').addClass('book-author col-sm-6 col-md-3');
                        bookColHTML.append(bookImgHTML);
                        bookColHTML.append(bookTitleHTML);
                        bookColHTML.append(bookAuthorHTML);

                        $('#content').find('>:last-child').append(bookColHTML);
                    })
                })

            })
        })
    });
});