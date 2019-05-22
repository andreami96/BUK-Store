function mobileViewUpdate() {
//    var viewportWidth = $(window).width();
    var viewportWidth = document.getElementById("content").offsetWidth;

    if (viewportWidth <= 576 ) {
        var element = document.getElementById("book-catalog");
        element.className = element.className.replace(/\bcolumns-*\b/g, "");
        element.classList.add("columns-1");
    }
    else if (viewportWidth > 576 && viewportWidth <= 912) {
        var element = document.getElementById("book-catalog");
        element.className = element.className.replace(/\bcolumns-*\b/g, "");
        element.classList.add("columns-2");
    }
    else if (viewportWidth > 912 && viewportWidth < 1200) {
        var element = document.getElementById("book-catalog");
        element.className = element.className.replace(/\bcolumns-*\b/g, "");
        element.classList.add("columns-3");
    }
    else if (viewportWidth >= 1200) {
        var element = document.getElementById("book-catalog");
        element.className = element.className.replace(/\bcolumns-*\b/g, "");
        element.classList.add("columns-4");
    }
}


$(document).ready( function () {
    $('button').on('click', mobileViewUpdate());
});

$(document).ready( function() {

    var $sidebar   = $("#sidebar-list"),
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 80;


    $window.scroll(function() {
        if ($window.scrollTop() > offset.top ) {
            //if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 50)
            let scroll = $window.scrollTop(),
                docHeight = $(document).height(),
                sidebarHeight = $("#sidebar-list").height(),
                footerPosition = $("#footerContainer").position();

            if ( scroll + sidebarHeight + 150 <= docHeight - 250) {
                $sidebar.stop().animate({
                    marginTop: $window.scrollTop() - offset.top + topPadding
                });
            } else {
                $sidebar.stop().animate({
                    marginTop: footerPosition.top - sidebarHeight - 300
                });
            }

        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });

});

$(window).on('load, resize', function mobileViewUpdate() {
//    var viewportWidth = $(window).width();
    var viewportWidth = document.getElementById("content").offsetWidth;

    if (viewportWidth <= 576 ) {
        var element = document.getElementById("book-catalog");
        element.className = element.className.replace(/\bcolumns-*\b/g, "");
        element.classList.add("columns-1");
    }
    else if (viewportWidth > 576 && viewportWidth <= 912) {
        var element = document.getElementById("book-catalog");
        element.className = element.className.replace(/\bcolumns-*\b/g, "");
        element.classList.add("columns-2");
    }
    else if (viewportWidth > 912 && viewportWidth < 1200) {
        var element = document.getElementById("book-catalog");
        element.className = element.className.replace(/\bcolumns-*\b/g, "");
        element.classList.add("columns-3");
    }
    else if (viewportWidth >= 1200) {
        var element = document.getElementById("book-catalog");
        element.className = element.className.replace(/\bcolumns-*\b/g, "");
        element.classList.add("columns-4");
    }
});

jQuery(document).ready( function () {
    let url = window.location.pathname;
    let isbn = url.substr(url.lastIndexOf('/') + 1);


    $.get("/api/v1/books/", {limit: 12, offset: 0}, function (data, status) {
        console.log(data);

        data.forEach(function (el, index) {
            $.get("/api/v1/books/" + el.ISBN, function (data, status) {
                console.log(data);

                var newEl = $("li h4")[index];
                $("#book-catalog").find($("li h5")[index]).text(data.title);
                $("#book-catalog").find($("li a img")[index]).attr({
                    "src": "../assets/images" + data.picture
                });
                $("#book-catalog").find($("li p")[index]).text(data.author[0]);
                $("#book-catalog").find($("li h5")[index]).text(data.title);

            });
        });
    })
});

