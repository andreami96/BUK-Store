jQuery(document).ready(function() {

    let url = window.location.pathname;
    let genreID = url.substr(url.lastIndexOf('/') + 1);

    $.get("/api/v1/genres/" + genreID, function(data, status) {
        /* Banner image */
        $(".banner-primary").css('background-image', 'url("../assets/images' + data.picture + '")');

        /* Genre description */
        $("#eventDescription").text(data.description);
    });

    /* Themes links */
    $.get("/api/v1/genres/" + genreID + "/themes", function(data, status) {
        for(let i = 0; i < data.length; i++) {

            let rowNumber = Math.floor(i / 4) + 1;

            // If multiple of 4, create row
            if(i % 4 === 0) {
                $('#themes-container').append($('<div>').attr({
                    'class': 'row',
                    'id': 'row-n' + rowNumber
                }));
            }

            let genreIdHTML = data[i].title.toLowerCase() + '-box';

            // Column and link
            $('#row-n' + rowNumber).append(
                $('<div>').addClass('col-6 col-md-3 mt-1').append(
                    $('<a>').attr({
                        'href': '#'  //TODO: add correct link to the specific theme
                    }).text(data[i].title)
                )
            );
        }
    });

});