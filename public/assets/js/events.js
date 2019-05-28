jQuery(document).ready(function(){
                                    $.getScript('../assets/js/utils.js', function () {
    let startDateRaw = new Date();
    let endDateRaw = addDays(startDateRaw, 31);

    let startDate = formatDate(startDateRaw);
    let endDate = formatDate(endDateRaw);

    $.get('/api/v1/events?from=' + startDate + '&to' + endDate, function (eventsSimple, status1) {
        for (let i = 0; i < eventsSimple.length; i++) {
            $.get('/api/v1/events/' + eventsSimple[i].eventID, function (eventInfo, status2) {
                $.get('/api/v1/books/' + eventInfo.presentedBook, function (bookInfo, status3) {

                    $('#eventsHomepage').append(
                        $('<div>').addClass('event-display row').append(
                            $('<div>').addClass('event-container col-md-8').append(
                                $('<div>').addClass('row').append(
                                    $('<div>').addClass('event-image col-5').css('background-image', 'url("../assets/images' + eventInfo.picture + '")')
                                )
                            )
                        )
                    );

                    $('.event-container').last().find('>:first-child').append(
                        $('<div>').addClass('event-title col-7').append(
                            $('<h3>').text(eventInfo.title)
                        )
                    )

                    $.get('/api/v1/books/' + bookInfo.ISBN + '/authors', function (bookAuthors, status) {

                        let bookImageHTML = $('<img>').attr({
                            'class': 'img-fluid',
                            'src': '../assets' + bookInfo.picture,
                            'alt': bookInfo.title
                        });

                        let bookTitleHTML = $('<p>').addClass('bookTitle-text').text(bookInfo.title);
                        console.log(bookTitleHTML);

                        let authorsString = '';
                        for (let j = 0; j < bookAuthors.length; j++) {
                            if (j !== bookAuthors.length - 1)
                                authorsString += bookAuthors[j].name + ' ' + bookAuthors[j].surname + ',';
                            else
                                authorsString += bookAuthors[j].name + ' ' + bookAuthors[j].surname;
                        }

                        let bookAuthorHTML = $('<p>').addClass('bookAuthor-text').text(authorsString);

                        let eventDisplay = $('.event-display').last().find('>:first-child');

                        eventDisplay.append(bookImageHTML);
                        eventDisplay.append(bookTitleHTML);
                        eventDisplay.append(bookAuthorHTML);
                    })
                })
            })
        }
    });
});
});

