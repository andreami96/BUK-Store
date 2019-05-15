function quicksortGenres(array) {
    if (array.length <= 1) {
        return array;
    }

    // Find the ID attribute of the objects
    let keys = Object.keys(array[0]);
    let regex = /\w+ID/; // Matches words ending in 'ID'
    let keysString = '';

    for (let i = 0; i < keys.length; i++) {
        keysString.concat(keys[i]);
    }

    let id = keysString.match(regex);
    console.log(keysString);
    console.log(id);

    // Sorting algorithm
    let pivot = array[0][id];

    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
        array[i][id] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return quicksortGenres(left).concat(pivot, quicksortGenres(right));
}

function addMainGenreCard(genre, index) {

    let rowNumber = Math.floor(index / 2) + 1;

    // If necessary, create main row
    if(index % 2 === 0) {
        $('#container-box').append($('<div>').attr({
            'class': 'row px-3',
            'id': 'row-n' + rowNumber
        }));
    }

    // Main column and inner row
    $('#row-n' + rowNumber).append(
        $('<div>').addClass('col-md-6 px-5 py-3').append(
            $('<div>').addClass('row genre-box')
        )
    );

    /* Inner columns for pic and title */
    // Pic
    let picIdHTML = genre.title.toLowerCase() + '-pic';
    if(index % 2 === 0) {
        $('.genre-box:last').append(
            $('<div>').attr({
                'class': 'col-4 genre-pic order-1 order-md-0',
                'id': picIdHTML
            })
        )
    } else {
        $('.genre-box:last').append(
            $('<div>').attr({
                'class': 'col-4 genre-pic',
                'id': picIdHTML
            })
        )
    }
    $('#' + picIdHTML).css('background-image', 'url("../assets' + genre.picture + '")');

    // Title
    $('.genre-box:last').append(
        $('<div>').addClass('col-8 genre-name').html(genre.title)
    );


    // Add anchor
    $('.genre-box:last').append(
        $('<a>').attr('href', '/mainGenres/' + genre.mainGenreID).append(  //TODO: update href value with correct path
            $('<span>')
        )
    );

}

jQuery(document).ready(function() {

    $.get("/api/v1/mainGenres", function(data, status) {
        console.log(data);
        /*let orderedGenres = quicksortGenres(data);*/

        for(let i = 0; i < data.length; i++) {
            addMainGenreCard(data[i], i);
        }
    })

});