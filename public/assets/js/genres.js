let url = window.location.pathname;
let mainGenreID = url.substr(url.lastIndexOf('/') + 1);

jQuery(document).ready(function() {

    // Generate breadcrumb
    $.get("/api/v1/mainGenres", function(mainGenres) {
        for(let i = 0; i < mainGenres.length; i++)
            if (mainGenres[i].mainGenreID.toString() === mainGenreID)
                $('#breadcrumb-title').text(mainGenres[i].title);
    });

    // Generate genres cards
    $.get("/api/v1/mainGenres/" + mainGenreID + "/genres", function(genres) {

        let genresInfo = [];
        let itemsProcessed = 0;

        genres.forEach((genre, index, array) => {
            $.get("/api/v1/genres/" + genre.genreID, function(genreInfo) {
                genresInfo.push(genreInfo);
                itemsProcessed++;
                if(itemsProcessed === array.length)
                    createGenresHTML(genresInfo);
            })
        });
    })
});

function createGenresHTML(genres) {

    genres.sort(function(a, b) {
        if (a.genreID < b.genreID)
            return -1;
        else if (a.genreID === b.genreID)
            return 0;
        else if (a.genreID > b.genreID)
            return 1;
    });

    for(let i = 0; i < genres.length; i++) {
        let rowNumber = Math.floor(i / 2) + 1;

        // If even, create row
        if (i % 2 === 0) {
            $('#container-box').append($('<div>').attr({
                'class': 'row',
                'id': 'row-n' + rowNumber
            }));
        }

        let genreIdHTML = genres[i].title.toLowerCase().replace(' ', '-') + '-box';

        // Column and card
        $('#row-n' + rowNumber).append(
            $('<div>').addClass('col-md-6 px-3').append(
                $('<div>').attr({
                    'class': 'small-genre-card m-3 p-4',
                    'id': genreIdHTML
                }).append(
                    $('<h1>').html(genres[i].title)
                )
            )
        );

        // Calculate background color
        // RIP
        let hue = ((mainGenreID - 1) * 120) % 360;
        if ((mainGenreID - 1) % 6 >= 3)
            hue += 60;

        let luminosity = 70;
        luminosity += i * (15 / genres.length);

        $('#' + genreIdHTML).css('background-image',
            'linear-gradient(hsla(' + hue + ', 50%, 20%, 0.8), hsla(' + hue + ', 50%, 20%, 0.8)), url("../assets/images' + genres[i].picture + '")');

        // Add anchor
        $('.small-genre-card:last').append(
            $('<a>').attr('href', '/genres/' + genres[i].genreID).append(
                $('<span>')
            )
        );
    }

}
