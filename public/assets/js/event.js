jQuery(document).ready(function() {

    let url = window.location.pathname;
    let eventID = url.substr(url.lastIndexOf('/') + 1);

    $.get("/api/v1/events/" + eventID, function(eventInfo, status){
        $(".banner-primary").css('background-image', 'url("../assets/images' + eventInfo.picture + '")');
        $("#eventTitle").text(eventInfo.title);
        $.get("/api/v1/books/" + eventInfo.presentedBook, function (relatedBook, status) {
            console.log(relatedBook);
            $('#eventBook').attr(
                {"src": "../assets/images" + relatedBook.picture,
                    "alt": relatedBook.title}
            );
            $('#eventBookLink').attr('href', '/books/' + relatedBook.ISBN);

            $.get("/api/v1/books/" + relatedBook.ISBN + "/authors", function(bookAuthors, status) {
                $("#descriptionCol").append(createAuthors(bookAuthors));
            });

        });

        let eventDate = new Date(eventInfo.eventDate);
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        $.getScript('../assets/js/utils.js', function()
        {
            generateMap(eventInfo.latitude, eventInfo.longitude);
            $("#eventDate").text(eventDate.getDate() + " " + months[eventDate.getMonth()]);
            $("#eventTime").text(toHHMM(eventDate.getHours(), eventDate.getMinutes()));

            $("#eventLocation").text(eventInfo.address);
            $("#eventDescription").text(eventInfo.description);

        });
    });

});


function createAuthors(authors) {
    let authorsHTML = [];

    for (let j = 0; j < authors.length; j++) {
        if (j !== authors.length - 1)
            authorsHTML.push($('<a>').attr('href', '/authors/' + authors[j].authorID)
                .text(authors[j].name + ' ' + authors[j].surname + ','));
        else
            authorsHTML.push($('<a>').attr('href', '/authors/' + authors[j].authorID)
                .text(authors[j].name + ' ' + authors[j].surname));
    }

    return authorsHTML;
}




/* TODO: improve scrolling when reaching top and bottom of the page */
