jQuery(document).ready(function(){

    let url = window.location.pathname;
    let authorID = url.substr(url.lastIndexOf('/') + 1);
    console.log(authorID);

    $.get("/api/v1/authors/" + authorID, function(author){
        console.log(author);

        $('#breadcrumb-title').text(author.name + ' ' + author.surname);

        $('.banner-primary').css('background-image',
            'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../assets/images' + author.backgroundPicture + '")');
        $('#authorImg').attr('src', '/assets/images' + author.picture);
        $('#authorName').text(author.name + ' ' + author.surname);
        $('#authorBio').text(author.biography);

        // Books of the author
        $.get("/api/v1/authors/" + authorID + "/books", function(author, status){

            author.forEach(function(book, index) {
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