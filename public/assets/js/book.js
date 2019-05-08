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
        console.log("==============================");
        console.log(data);
        console.log("==============================");
        console.log(status);
        console.log("==============================");

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
        console.log("==============================");
        console.log(data);
        console.log("==============================");
        console.log(status);
        console.log("==============================");

        $("#author").text(response[0].name + ' ' + response[0].surname);
    });

});
