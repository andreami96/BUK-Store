jQuery(document).ready(function() {

    let url = window.location.pathname;
    let genreID = url.substr(url.lastIndexOf('/') + 1);

    $.get("/api/v1/genres/" + genreID, function(data, status) {
        /* Banner image */
        $(".banner-primary").css('background-image', 'url("../assets/images' + data.picture + '")');

        /* Genre description */
        $("#event-description").text(data.description);
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

    /* Best sellers in the genre */
    $.get("")
});

/*
    Carousel
*/
$('#carouselBestSellers').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    let e2 = $(e.relatedTarget);
    let idx = e2.index();
    let itemsPerSlide = 5;
    let totalItems = $('.carousel-item').length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
        let it = itemsPerSlide - (totalItems - idx);
        for (let i = 0; i < it; i++) {
            // append slides to end
            if (e.direction === "left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});