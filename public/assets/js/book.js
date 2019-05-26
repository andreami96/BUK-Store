/*
    Carousel
*/
$('#carousel-similar-books').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});

jQuery(document).ready(function() {

    let url = window.location.pathname;
    let isbn = url.substr(url.lastIndexOf('/') + 1);

    $.get("/api/v1/books/" + isbn, function(data, status){
        console.log(data);

        $("#bookTitle").text(data.title);
        $("#breadcrumb-title").text(data.title);
        $("#abstract").text(data.abstract);
        $("#price b").after(data.price + " €");
        $("#isbn").text(data.ISBN);
        $("#year").text(data.year);
        $("#pages").text(data.pageNumber);
        $("#editor").text(data.editor);
        $("#originalLanguage").text(data.originalLanguage);

        $("#item-display").attr(
            {
                "src": "../assets/images" + data.picture
            }
        );

        //Build Author Interview element
        if( data.interview.length != 0 ){
            $('#author-interview').append($('<div>').addClass('panel-heading'));
            $('#author-interview .panel-heading').append($('<h4>').addClass('panel-title'));
            $('#author-interview .panel-heading .panel-title').append($('<a>').attr({
                'class': 'accordion-toggle',
                'data-toggle': 'collapse',
                'data-parent': '#accordion',
                'href': '#collapseOne'
            }).text('Author Interview'));
            $('#author-interview .panel-heading .panel-title a').prepend($('<i>').addClass('fa fa-chevron-down'));

            $('#author-interview').append($('<div>').attr({
                'class': 'panel-collapse collapse in',
                'id': 'collapseOne'
            }));
            $('#collapseOne').append($('<div>').addClass('panel-body'));
            $('#collapseOne .panel-body').append($('<ul>').attr({
                'style': '...'
            }).text(data.interview));
            $('#author-interview').after($('<hr>'));
        }

    });

    $.get("/api/v1/books/" + isbn + "/authors", function (data, status) {
        console.log(data);
        data.forEach(function (el, index) {
            if (index === 0)
                if (index === 0)
                    $('#author').append($('<a>').attr({
                        'href': '/authors/' + el.authorID
                    }).text(el.name + ' ' + el.surname));
                else
                    $('#author').append($('<a>').attr({
                        'href': '/authors/' + el.authorID
                    }).text(', ' + el.name + ' ' + el.surname));
        });
    });

    //Build Book Reviews element
    $.get("/api/v1/books/" + isbn + "/reviews", function (data, status) {
        console.log(data);

        if( data.length != 0 ){
            $('#book-review').append($('<div>').addClass('panel-heading'));
            $('#book-review .panel-heading').append($('<h4>').addClass('panel-title'));
            $('#book-review .panel-heading .panel-title').append($('<a>').attr({
                'class': 'accordion-toggle',
                'data-toggle': 'collapse',
                'data-parent': '#accordion',
                'href': '#collapseTwo'
            }).text('Reviews'));
            $('#book-review .panel-heading .panel-title a').prepend($('<i>').addClass('fa fa-chevron-down'));

            $('#book-review').append($('<div>').attr({
                'class': 'panel-collapse collapse in',
                'id': 'collapseTwo'
            }));
            $('#collapseTwo').append($('<div>').addClass('panel-body'));
            $('#collapseTwo .panel-body').append($('<ul>').attr({
                'style': '...',
                'id': 'review-list'
            }));
            $('#book-review').after($('<hr>'));

            data.forEach( function (el, index) {
                $('#review-list').append($('<li>').attr({
                    'id' : 'review' + index
                }));
                if ( index !== 0 )
                    $('#review' + index).before($('<hr>'));
                $('#review' + index).text(el.text);
                $('#review' + index).prepend($('<h6>').text(el.title));
            });

        }

    });

    //Build Book Events element
    $.get("/api/v1/books/" + isbn + "/events", function (data, status) {
        console.log(data);

        if( data.length != 0 ){
            $('#book-events').append($('<div>').addClass('panel-heading'));
            $('#book-events .panel-heading').append($('<h4>').addClass('panel-title'));
            $('#book-events .panel-heading .panel-title').append($('<a>').attr({
                'class': 'accordion-toggle',
                'data-toggle': 'collapse',
                'data-parent': '#accordion',
                'href': '#collapseThree'
            }).text('Book Events'));
            $('#book-events .panel-heading .panel-title a').prepend($('<i>').addClass('fa fa-chevron-down'));

            $('#book-events').append($('<div>').attr({
                'class': 'panel-collapse collapse in',
                'id': 'collapseThree'
            }));
            $('#collapseThree').append($('<div>').addClass('panel-body'));
            $('#collapseThree .panel-body').append($('<ul>').attr({
                'style': '...',
                'id': 'events-list'
            }));
            $('#book-events').after($('<hr>'));

            data.forEach( function (el, index) {
                $('#events-list').append($('<li>').attr({
                    'id' : 'event' + index
                }));
                if ( index !== 0 )
                    $('#event' + index).before($('<hr>'));
                $.get("/api/v1/events/" + el.eventID, function (data, status) {
                    console.log(data);

                    $('#event' + index).text(data.description);
                    $('#event' + index).prepend($('<h6>').text(data.address));
                    $('#event' + index).prepend($('<h5>'));
                    $('#event' + index + ' h5').prepend($('<a>').attr({
                        'href': '/events/' + data.eventID
                    }).text(data.title));

                });
            });

        }

    });


    //Build Carousel of similar books
    $.get("/api/v1/books/" + isbn + "/similarBooks", function (data, status) {
        console.log(data);

        data.forEach( function (el, index) {

            $.get("/api/v1/books/" + el.ISBN, function (data, status) {
                console.log(data);
                let class_item;
                if (index === 0)
                    class_item = "class=\"carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active\"";
                else
                    class_item = "class=\"carousel-item col-12 col-sm-6 col-md-4 col-lg-3\"";

                $("#carousel-listbox-similar-books").prepend(
                    "<div " + class_item + " >" +
                    "   <a href='/books/" + data.ISBN + "' >" +
                    "   <img src='../assets/images" + data.picture + " ' class='img-fluid mx-auto d-block' href='#'>" +
                    "</div>"
                );
            })
        })
    })
});
