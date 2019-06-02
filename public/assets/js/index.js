$(document).ready(function() {
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    //Set up show more and less button
    $('.more').click(function (event) {
        $(event.target)
            .toggleClass('disabled');
        $(event.target.nextElementSibling).toggleClass('disabled');
        $(event.target.nextElementSibling.nextElementSibling).toggleClass('disabled');
    });

    $('.less').click(function (event) {
        $(event.target)
            .toggleClass('disabled');
        $(event.target.previousElementSibling).toggleClass('disabled');
        $(event.target.previousElementSibling.nextElementSibling).toggleClass('disabled');

    });

    $('#eventsHomepage').append(
        $('<h1>').addClass('text-center').text('Events of the month')
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

        $.get('/api/v1/events?from=' + startDate + '&to=' + endDate, function (eventsSimple, status) {
            console.log(eventsSimple);
            let array = [];
            for (let i = 0; i < eventsSimple.length; i++) {
                array.push($.get('/api/v1/events/' + eventsSimple[i].eventID));
            }
            Promise.all(array).then(function(results){
                for(let j = 0; j < results.length; j++) {
                    $.get('/api/v1/books/' + results[j].presentedBook, function (bookInfo, status2) {
                        $.get('/api/v1/books/' + bookInfo.ISBN + '/authors', function (bookAuthors, status3) {
                            createEvents(results[j], bookInfo, bookAuthors);
                        })
                    })
                }
            })
        });

        $.get('/api/v1/books/bestsellers', function (bestsellers, status) {
            console.log(bestsellers);

        });
    });

});

function createEvents(eventInfo, bookInfo, bookAuthors) {

    $('#eventsHomepage').append(
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
        $('<a>').attr('href', '/events/' + eventInfo.eventID).append(
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
    bookContainer.append(bookImageHTML);
    bookContainer.append(bookTitleHTML);
    bookContainer.append(bookAuthorHTML);

    $('.event-display').last().append(bookContainer);

}
