jQuery(document).ready(function () {

    // Create main row
    $('#bestSellers').append(
        $('<div>').attr({
            'class': 'row text-center',
            'id': 'rowBestSellers'
        })
    );

    $.get("/api/v1/books/bestSellers?from=2019-01-01&limit=3", function(bestSellers) {

        console.log(bestSellers);

        let booksDetails = [];

        bestSellers.forEach((bestSeller, index, array) => {
            $.get("/api/v1/books/" + bestSeller.ISBN, function(bestSellerDetails) {
                booksDetails.push(bestSellerDetails);
                if(booksDetails.length === array.length) {

                    // Put the booksDetails data in the correct order (which is the bestSellers order)
                    let orderedBooks = [];

                    for(let i = 0; i < bestSellers.length; i++)
                        for (let j = 0; j < booksDetails.length; j++)
                            if (bestSellers[i].ISBN === booksDetails[j].ISBN)
                                orderedBooks.push(booksDetails[j]);

                    createBestSellers(orderedBooks);
                }
            })
        });
    })
});

function createBestSellers(books) {

    for(let i = 0; i < books.length; i++) {
        let bookHTML = $('<div>').attr({
            'class': 'col-md-4 bestseller-el',
            'id': 'book-' + i
        });

        $('#rowBestSellers').append(bookHTML);

        let bookImageHTML = $('<img>').attr({
            'class': 'book-image img-fluid',
            'src': '/assets/images' + books[i].picture,
            'alt': books[i].title
        });
        let titleBookHTML = $('<h4>').addClass('mt-2').text(books[i].title);
        let linkBookHTML = $('<a>').attr('href', '/books/' + books[i].ISBN);

        bookHTML.append(linkBookHTML);
        linkBookHTML.append(bookImageHTML);
        linkBookHTML.append(titleBookHTML);

        $.get("/api/v1/books/"  + books[i].ISBN + "/authors", function(authors){
            createAuthorLinks(authors, bookHTML);
        })
    }
}

function createAuthorLinks(authors, parentHTML) {

    let authorsHTML = [];

    // Prepare the anchors
    for (let i = 0; i < authors.length; i++) {
        authorsHTML.push($('<a>').attr('href', '/authors/' + authors[i].authorID)
            .text(authors[i].name + ' ' + authors[i].surname))
    }

    // Put the anchors in place
    for (let j = 0; j < authorsHTML.length; j++) {
        if(j !== authorsHTML.length - 1)
            parentHTML.append(authorsHTML[j]).append(
                $('<span>').text(', ')
            );
        else
            parentHTML.append(authorsHTML[j])
    }

}