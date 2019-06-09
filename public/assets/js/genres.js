jQuery(document).ready(function() {


    $.get("/api/v1/mainGenres", function(mainGenres){
        $.get("/api/v1/genres?limit=100", function(genres){

            console.log(genres);
            let genresDetailed = [];
            let itemsProcessed = 0;

            let subgenres = [];

            genres.forEach((genre, index, array) => {
                console.log('sto per richiedere i dettagli di genre ' + genre.genreID);
                $.get("/api/v1/genres/" + genre.genreID, function(data){
                    genresDetailed.push(data);
                    itemsProcessed++;
                    console.log('itemsprocessed ' + itemsProcessed);
                    if(itemsProcessed === array.length) {
                        console.log('eccomi');
                        console.log(mainGenres);
                        console.log(genresDetailed);

                        for(let i = 0; i < mainGenres.length; i++) {
                            for (let j = 0; j < genresDetailed.length; j++) {
                                console.log('mainGenreID='+mainGenres[i].mainGenreID+' genreinfo: ' + genresDetailed[j].mainGenre);
                                if (genresDetailed[j].mainGenre === mainGenres[i].mainGenreID)
                                    subgenres.push(genresDetailed[j])
                            }
                            console.log('subgenres');
                            console.log(subgenres);
                            createGenresHTML(mainGenres[i], subgenres);
                            subgenres = [];
                        }
                    }
                });


            });

        });
    });


        /*for(let i = 0; i < mainGenres.length; i++) {
            console.log('inizio ciclo per mainGenre' + mainGenres[i].mainGenreID);
            $.get("/api/v1/mainGenres/" + mainGenres[i].mainGenreID + "/genres", function (genres) {

                let genresInfo = [];
                let genreItemsProcessed = 0;

                genres.forEach((genre, index, array) => {
                    $.get("/api/v1/genres/" + genre.genreID, function (genreInfo) {
                        console.log('ricevuto da api ' + genre);
                        genresInfo.push(genreInfo);
                        genreItemsProcessed++;
                        if (genreItemsProcessed === array.length) {
                            console.log('creo generi per il mainGenre ' + mainGenres[i].mainGenreID);
                            createGenresHTML(mainGenres[i], genresInfo);
                        }
                    })
                });
            })
        }*/

});

function createGenresHTML(mainGenre, genres) {

    console.log('eccomi che creo');

    genres.sort(function (a, b) {
        if (a.genreID < b.genreID)
            return -1;
        else if (a.genreID === b.genreID)
            return 0;
        else if (a.genreID > b.genreID)
            return 1;
    });

    let mainGenreCardHTML = $('<div>').attr({
        'class': 'card',
        'id': 'mainGenreCard-' + mainGenre.mainGenreID
    }).append(
        $('<div>').attr({
            'class': 'card-header',
            'id': 'heading-' + mainGenre.mainGenreID
        }).append(
            $('<h5>').addClass('mb-0').text(mainGenre.title)
                /*.append(
                $('<button>').text(mainGenre.title).attr({
                        'class': 'btn btn-link',
                        'data-toggle': 'collapse',
                        'data-target': '#collapse-' + mainGenre.mainGenreID,
                        'aria-expanded': 'true',
                        'aria-controls': 'collapse-' + mainGenre.mainGenreID
                    }
                )*/
                )

    );

    mainGenreCardHTML.append(
        $('<div>').attr({
            'class': 'collapse show',
            'id': 'collapse-' + mainGenre.mainGenreID,
            'aria-labelledby': 'heading-' + mainGenre.mainGenreID,
            'data-parent': '#accordion'
        }).append('<div>').attr({
            'class': 'card-body pb-5',
            'id': 'container-box-' + mainGenre.mainGenreID
        })
    );

    $('#accordion').append(mainGenreCardHTML);
    for (let i = 0; i < genres.length; i++) {
        console.log(genres[i]);
        let rowNumber = Math.floor(i / 2) + 1;



        // If even, create row
        if (i % 2 === 0) {
            $('#container-box-' + mainGenre.mainGenreID).append($('<div>').attr({
                'class': 'row',
                'id': 'row-' + mainGenre.mainGenreID + '-n' + rowNumber
            }));
        }

        let genreIdHTML = genres[i].title.toLowerCase().replace(' ', '-') + '-box';
        console.log(genreIdHTML);

        // Column and card
        $('#row-' + mainGenre.mainGenreID + '-n' + rowNumber).append(
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
        let hue = ((mainGenre.mainGenreID - 1) * 120) % 360;
        if ((mainGenre.mainGenreID - 1) % 6 >= 3)
            hue += 60;

        let luminosity = 70;
        luminosity += i * (15 / genres.length);

        $('#' + genreIdHTML).css('background-image',
            'linear-gradient(hsla(' + hue + ', 50%, 20%, 0.8), hsla(' + hue + ', 50%, 20%, 0.8)), url("../assets/images' + genres[i].picture + '")');

        // Add anchor
        $('.small-genre-card:last').append(
            $('<a>').attr('href', '/genres/' + genres[i].genreID).append(  //TODO: update href value with correct path
                $('<span>')
            )
        );
    }

}