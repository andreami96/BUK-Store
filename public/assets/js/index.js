$(document).ready(function() {

    // To have more events in the carousel change also the html
    let CarouselEvents = 3;
    let MaxBestsellers = 3;

    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    $('#eventsMonth').append(
        $('<a>').attr('href', '/events/events-month.html').append(
            $('<h1>').addClass('text-center').text('Events of the month')
        )
    );

    // Add events of the month
    $.when(
        $.getScript("../assets/js/utils.js"),
        $.Deferred(function(deferred){
            $(deferred.resolve);
        })
    ).done(function(){
        let startDateRaw = new Date();
        let endDateRaw = addDays(startDateRaw, 60);
        console.log(endDateRaw);

        let startDate = formatDate(startDateRaw);
        let endDate = formatDate(endDateRaw);

        $.get('/api/v1/events?from=' + startDate + '&to=' + endDate, function (eventsSimple) {
            console.log(eventsSimple);
            let array = [];
            for (let i = 0; i < eventsSimple.length; i++) {
                array.push($.get('/api/v1/events/' + eventsSimple[i].eventID));
            }
            Promise.all(array).then(function(results){
                for(let j = 0; j < results.length; j++) {
                    $.get('/api/v1/books/' + results[j].presentedBook, function (bookInfo) {
                        $.get('/api/v1/books/' + bookInfo.ISBN + '/authors', function (bookAuthors) {
                            createEvents(results[j], bookInfo, bookAuthors);
                        });

                        //Add to carousel most recent events
                        if ( j < CarouselEvents ){
                            $('#event-description' + j + ' h1').text(results[j].title);
                            $('#event-description' + j + ' p').text(results[j].description.split('.')[0]);
                            $('#eventCarousel' + j)
                                .css({
                                    "background":               "linear-gradient(rgba(97, 98 ,116 , .5), rgba(97, 98 ,116 , .5)), url( '../assets/images" + results[j].picture + "')",
                                    "background-size":          "cover",
                                    "background-position":      "center",
                                    "background-position-x":    "0",
                                    "background-position-y":    "0",
                                    "min-height":               "90vh"
                                }).wrap($('<a>').attr({
                                    "href":                     "/events/" + results[j].eventID,
                                    "class":                    "link-invisible"
                            }).text("event"));
                        }
                    })
                }
            });
        });

    });

    $.get('/api/v1/books/bestsellers', {limit: 3, from:'2019-01-01'}, function (bestsellers) {
        console.log(bestsellers);

        for(let i = 0; i < MaxBestsellers; i++) {
            $('#book-bestseller').append($('<div>').attr({
                'id': 'book' + i,
                'class': 'col-md-4 bestseller-el'
            }));
        }

        bestsellers.forEach( function (el, index) {
            buildBestseller(el, index);
        })
    });

});

/*
        <div class="row text-center mt-4 mb-4" id="book-bestseller">
    <div id="book0" class="col-md-4 bestseller-el">
        <a href="/catalogue/catalogue.html">
            <img class="book-image img-fluid" src="assets/images/books/got_hc1.jpg" alt="#">
            <h4 class="mt-2">Title of the Book</h4>
        </a>
        <a href="/catalogue/catalogue.html">
            <p class="mt-1 authorsNameList">Author name</p>
        </a>
        <div class="bestseller-review">
            <h5 class="text-center">A compelling and intriguing read</h5>
            <p>
            For book lovers The Truth About The Harry Quebert Affair is an ideal read as it is a book about a book about a book.
                <span class="show show-btn more">Show more</span>
            </p>
        </div>
    </div>

 */

function buildBestseller( book, index) {
    $.get('/api/v1/books/' + book.ISBN, function (bookData, status) {
        console.log(bookData);

        $.get("/api/v1/books/" + bookData.ISBN + "/authors", function (authorsList, status) {

                $('#book' + index)
                .append($('<a>').attr({'href': '/books/' + bookData.ISBN})
                    .append($('<img>').attr({
                        'class': 'book-image img-fluid',
                        'src': '../assets/images' + bookData.picture,
                        'alt': '#'
                    }))
                    .append($('<h4>').addClass('mt-2').text(bookData.title)));

            $('#book' + index).append('by ' + buildAuthorsList(authorsList));

            $('#book' + index)
                .append($('<div>').addClass('bestseller-review mt-1')
                    .append($('<p>').text('"' + bookData.abstract.split('.')[0] + '"')));
        });
    });
}

function buildAuthorsList(authors) {
    var list = "";
    authors.forEach(function (el, index) {
        if (index === 0)
            list = list + "<a class='mt-1' href='/authors/" + el.authorID + "'> " + el.name + ' ' + el.surname + "</a>";
        else
            list = list + ", <a class='mt-1' href='/authors/" + el.authorID + "'> " + el.name + ' ' + el.surname + "</a>";
    });
    return list;

}

function createEvents(eventInfo, bookInfo, bookAuthors) {

    $('#eventsMonth').append(
        $('<div>').addClass('event-display row').append(
            $('<div>').addClass('event-container col-md-8').append(
                $('<div>').addClass('row').append(
                    $('<div>').addClass('event-image col-md-5').css('background-image', 'url("../assets/images' + eventInfo.picture + '")')
                )
            )
        )
    );

    let eventContainer = $('.event-container').last().find('>:first-child');
    eventContainer.append(
        $('<div>').addClass('event-title col-md-7').append(
            $('<h3>').text(eventInfo.title)
        )
    );
    eventContainer.append(
        $('<a>').attr({
            'class': 'link-invisible',
            'href': '/events/' + eventInfo.eventID
        }).text(eventInfo.title).append(
            $('<span>')
        )
    );

    let bookImageHTML = $('<a>').attr('href', '/books/' + bookInfo.ISBN).append(
        $('<img>').attr({
            'class': 'img-fluid',
            'src': '../assets/images' + bookInfo.picture,
            'alt': bookInfo.title
        })
    );

    let bookTitleHTML = $('<p>').addClass('bookTitle-text').text(bookInfo.title);

    let authorsString = '';
    for (let j = 0; j < bookAuthors.length; j++) {
        if (j !== bookAuthors.length - 1)
            authorsString += bookAuthors[j].name + ' ' + bookAuthors[j].surname + ',';
        else
            authorsString += bookAuthors[j].name + ' ' + bookAuthors[j].surname;
    }
    let bookAuthorHTML = $('<p>').addClass('bookAuthor-text').text(authorsString);
    let bookContainer = $('<div>').addClass('relatedBook-container col-md-4 mt-3 mt-md-0');
    let bookInfoHeaderHTML = $('<h3>').addClass('book-info-header text-center').text('Book of the event');

    bookContainer.append(bookInfoHeaderHTML);
    bookContainer.append(bookImageHTML);
    bookContainer.append(bookTitleHTML);
    bookContainer.append(bookAuthorHTML);

    $('.event-display').last().append(bookContainer);

}
