jQuery(document).ready(function() {

    let url = window.location.pathname;
    let genreID = url.substr(url.lastIndexOf('/') + 1);

    $.get("/api/v1/genres/" + genreID, function(genreInfo) {
        /* Banner image */
        $(".banner-primary").css('background-image',
            'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../assets/images' + genreInfo.picture + '")');

        /* Genre description */
        $("#eventDescription").text(genreInfo.description);

        $.get("/api/v1/mainGenres/" + genreInfo.mainGenre, function(mainGenre){
            $('#maingenre-breadcrumb').attr('href', '/mainGenres/' + mainGenre.mainGenreID).text(mainGenre.title);
        });

        $('#breadcrumb-title').text(genreInfo.title);

    });

    /* Themes links */
    $.get("/api/v1/genres/" + genreID + "/themes", function(themes) {
        for(let i = 0; i < themes.length; i++) {

            let rowNumber = Math.floor(i / 4) + 1;

            // If multiple of 4, create row
            if(i % 4 === 0) {
                $('#themes-container').append($('<div>').attr({
                    'class': 'row',
                    'id': 'row-n' + rowNumber
                }));
            }

            let genreIdHTML = themes[i].title.toLowerCase() + '-box';

            // Column and link
            $('#row-n' + rowNumber).append(
                $('<div>').addClass('col-6 col-md-3 mt-1').append(
                    $('<a>').attr({
                        'href': '#'  //TODO: add correct link to the specific theme
                    }).text(themes[i].title)
                )
            );
        }
    });

});