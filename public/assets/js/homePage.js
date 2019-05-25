$(document).ready(function() {
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();

});

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
