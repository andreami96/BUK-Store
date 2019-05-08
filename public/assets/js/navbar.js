jQuery(document).ready(function() {
    // Show navbar when scrolling down
    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            // solid navbar
            $(".navbar").css({
                "background-color": "rgba(255,255,255, 0.97)",
                "border": "1px solid rgba(212, 212, 212, 0.97)"
            });
            $(".navbar-nav, .nav-link").css({
                "color": "black"
            })
        } else {
            // transparent navbar
            $(".navbar").css({
                "background-color": "",
                "border": "1px solid rgba(212, 212, 212, 0)"
            });
            $(".navbar-nav, .nav-link").css({
                "color": "white"
            })
        }
    });

    // Show navbar when hovering over
    $(".navbar").hover(function() {
        // solid navbar
        if ($(window).scrollTop() < 50) {
            $(this).css({
                "background-color": "rgba(255,255,255,0.97)",
                "border": "1px solid rgb(212, 212, 212, 0.97)"
            });
            $(".navbar-nav, .nav-link").css({
                "color": "black"
            })
        }
    },function() {
        // transparent navbar
        if ($(window).scrollTop() < 50) {
            $(".navbar").css({
                "background-color": "",
                "border": "1px solid rgba(212, 212, 212, 0)"
            });
            $(".navbar-nav, .nav-link").css({
                "color": "white"
            })
        }
    })
});