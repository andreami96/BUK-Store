let url = window.location.pathname;
let mainGenreID = url.substr(url.lastIndexOf('/') + 1);

jQuery(document).ready(function() {

    $.get("/api/v1/mainGenres/" + mainGenreID + '/genres', function(data, status) {
        console.log(data);

        for(let i = 0; i < data.length; i++) {

            let rowNumber = Math.floor(i / 2) + 1;

            // If even, create row
            if(i % 2 === 0) {
                $('#container-box').append($('<div>').attr({
                    'class': 'row',
                    'id': 'row-n' + rowNumber
                }));
            }

            let genreIdHTML = data[i].title.toLowerCase().replace(' ', '-') + '-box';
            console.log(genreIdHTML);

            // Column and card
            $('#row-n' + rowNumber).append(
                $('<div>').addClass('col-md-6 px-3').append(
                    $('<div>').attr({
                        'class': 'small-genre-card m-3 p-4',
                        'id': genreIdHTML
                    }).append(
                        $('<h1>').html(data[i].title)
                    )
                )
            );

            // Calculate background color
            let hue = ((mainGenreID - 1) * 120) % 360;
            if((mainGenreID - 1) % 6 >= 3)
                hue += 60;

            let luminosity = 70;
            luminosity += i * (15 / data.length);

            $('#' + genreIdHTML).css('background-color', 'hsla(' + hue + ', 60%, ' + luminosity + '%, 0.9)');

            // Add anchor
            $('.small-genre-card:last').append(
                $('<a>').attr('href', '/genres/' + data[i].genreID).append(  //TODO: update href value with correct path
                    $('<span>')
                )
            );
        }
    })
});
