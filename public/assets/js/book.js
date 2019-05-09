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
        $("#abstract").text(data.abstract);
        $("#price").text(data.price + " €");
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
    });

    $.get("/api/v1/books/" + isbn + "/authors", function (data, status) {
        console.log(data);
        data.forEach(function (el, index) {
            if (index === 0)
                $("#author").append(el.name + ' ' + el.surname);
            else
                $("#author").append(', ' + el.name + ' ' + el.surname);
        })
    });

    $.get("/api/v1/books/" + isbn + "/reviews", function (data, status) {
        console.log(data);
        
        data.forEach( function (el, index) {
            if ( index === 0 )
                $("#review-list").append("<li> <h6>" + el.title +"</h6>" + el.text + "</li>");
            else
                $("#review-list").append(" <hr> <li> <h6>" + el.title +"</h6>" + el.text + "</li>");
        })

    })
});
