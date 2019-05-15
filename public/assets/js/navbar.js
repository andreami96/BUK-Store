function makeSolidNavbar() {
    $(".navbar").css({
        "background-color": "rgba(255,255,255, 0.97)",
        "border": "1px solid rgba(212, 212, 212, 0.97)"
    });
    $(".navbar-nav, .nav-link").css({
        "color": "black"
    })
}

function makeTransparentNavbar() {
    $(".navbar").css({
        "background-color": "",
        "border": "1px solid rgba(212, 212, 212, 0)"
    });
    $(".navbar-nav, .nav-link").css({
        "color": "white"
    })
}



jQuery(document).ready(function() {

    // Show navbar when scrolling down
    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            makeSolidNavbar();
        } else {
            makeTransparentNavbar();
        }
    });

    // Show navbar when hovering over
    $(".navbar").hover(function() {
        makeSolidNavbar();
    },function() {
        makeTransparentNavbar();
    })
});