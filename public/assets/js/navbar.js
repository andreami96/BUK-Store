let badgeNumber;

$(document).ready(function () {

    $.ajax({
        url: "/api/v1/me",
        success: function (result, status, xhr) {
            if($(window).width() >= 576)
                addNavbar(true, true);
            else
                addNavbar(true, false);

            $.get('/api/v1/me/cart', function (data) {
                let bookInCart = 0;

                for(let i = 0; i < data.books.length; i++)
                    bookInCart += data.books[i].quantity;

                $('.badge').text(bookInCart);
                badgeNumber = bookInCart;
            });

            makeResizableNavbar(true, $(window).width());

        },
        error: function (xhr) {
            if($(window).width() >= 576)
                addNavbar(false, true);
            else
                addNavbar(false, false);

            makeTransparentNavbar();

            $(".empty-nav-space").css('width', $(".navbar-toggler").width());

            makeResizableNavbar(false, $(window).width());
        }
    });

    $("#navbarCollapse a").on('click', function(event) {
        // Close the navbar
        if($('.navbar-toggler').is(':visible'))
            $('.navbar-toggler').click();
    });

});

function addNavbar(isLogged, dropdown) {
    $(".navbar").addClass("navbar-default navbar-expand-sm fixed-top");
    createToggler();
    createHeader(isLogged);
    if(dropdown)
        createDropdownMenus(isLogged);
    else
        createUnPackedMenus(isLogged);

    makeTransparentNavbar();

    if( !$("#navbarNoHover").length ){
        // Show navbar when scrolling down
        $(window).scroll(function () {
            if ($(this).scrollTop() <= 60 && !$('#navbarCollapse').is(':visible'))
                makeTransparentNavbar();
            else
                makeSolidNavbar();
        });

        $(".navbar-toggler").click(function () {

            if(!$('#navbarCollapse').is(':visible'))
                makeSolidNavbar();
            else
                setTimeout(makeTransparentNavbar, 300);
        })

    }
    else makeSolidNavbar();
}

function createToggler() {
    $(".navbar")
        .append("<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
                "   <span class=\"navbar-toggler-icon\"></span>\n" +
                "</button>\n");
}

function retrieveBadge() {
    return  "<div class=\"nav-item order-md-12 order-sm-1\">\n" +
            "   <a href='/me'><span class=\"badge badge-primary\">" + badgeNumber + "</span></a>\n" +
            "</div>\n"
}

function retrieveRightMenu(isLogged) {

    let notLogged = "<ul class=\"navbar-nav\" id=\"right-nav\">\n" +
                    "   <li class=\"nav-item\">\n" +
                    "      <a class=\"nav-link\" href=\"/signup.html\">Sign Up</a>\n" +
                    "   </li>\n" +
                    "   <li class=\"nav-item\">\n" +
                    "      <a class=\"nav-link\" href=\"/login.html\">Login</a>\n" +
                    "   </li>\n" +
                    "</ul>";

    let logged =    "<ul class=\"navbar-nav\" id=\"right-nav\">\n" +
                    "   <li class=\"nav-item\">\n" +
                    "      <a class=\"nav-link\" href=\"/me\">My Account</a>\n" +
                    "   </li>\n" +
                    "   <li class=\"nav-item\">\n" +
                    "      <a class=\"nav-link\" href=\"\" onclick=\"logout()\">Logout</a>\n" +
                    "   </li>\n" +
                    "</ul>\n";

    return (isLogged) ? logged : notLogged;
}

function createHeader(isLogged) {
    $(".navbar")
        .append("<div class=\"navbar-header mx-sm-auto\">\n" +
                "   <a id=\"brand-img\" class=\"navbar-brand\" href=\"/\">\n" +
                "      <img src=\"/assets/images/logo/logo-black.png\" height=\"30\" alt=\"BUK\">\n" +
                "   </a>\n" +
                "</div>\n" +
                ((isLogged) ? retrieveBadge() : "<div class=\"empty-nav-space ml-sm-auto\"></div>\n"));
}

function createUnPackedMenus(isLogged) {
    $(".navbar")
        .append("<div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n" +
            "            <ul class=\"navbar-nav mr-auto\">\n" +
                            "<li class=\"nav-item\">\n" +
            "                    <a class=\"nav-link\" href=\"/catalogue/1\">All Books</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item\">\n" +
            "                    <a class=\"nav-link\" href=\"/our-favourites.html\">Our Favourites</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item\">\n" +
            "                    <a class=\"nav-link\" href=\"/catalogue/genres.html\">Genres</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item\">\n" +
            "                    <a class=\"nav-link\" href=\"/catalogue/themes.html\">Themes</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item\">\n" +
            "                    <a class=\"nav-link\" href=\"/events/events-month.html\">Events</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item\">\n" +
            "                    <a class=\"nav-link\" href=\"/authors/a-z\">Authors</a>\n" +
            "                </li>\n" +
            "            </ul>\n" + retrieveRightMenu(isLogged) +
            "</div>");
}

function createDropdownMenus(isLogged) {
    $(".navbar")
        .append("<div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n" +
                "            <ul class=\"navbar-nav mr-auto\">\n" +
                "                <li class=\"nav-item dropdown\">\n" +
                "                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
                "                        Catalogue\n" +
                "                    </a>\n" +
                "                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n" +
                "                        <a class=\"dropdown-item\" href=\"/catalogue/1\">All Books</a>\n" +
                "                        <a class=\"dropdown-item\" href=\"/our-favourites.html\">Our Favourites</a>\n" +
                "                        <div class=\"dropdown-divider\"></div>\n" +
                "                        <a class=\"dropdown-item\" href=\"/catalogue/genres.html\">Genres</a>\n" +
                "                        <a class=\"dropdown-item\" href=\"/catalogue/themes.html\">Themes</a>\n" +
                "                    </div>\n" +
                "                </li>\n" +
                "                <li class=\"nav-item\">\n" +
                "                    <a class=\"nav-link\" href=\"/events/events-month.html\">Events</a>\n" +
                "                </li>\n" +
                "                <li class=\"nav-item\">\n" +
                "                    <a class=\"nav-link\" href=\"/authors/a-z\">Authors</a>\n" +
                "                </li>\n" +
                "            </ul>\n" + retrieveRightMenu(isLogged) +
                " </div>");
}

function logout() {
    $.get("/api/v1/logout", function () {
        window.location.href = "/";
    });
}

function makeResizableNavbar(isLogged, initialWidth) {
    let viewportWidth = initialWidth;
    $(window).resize(function() {
        if (viewportWidth >= 576 && $(window).width() < 576) {
            $('.navbar').empty();
            console.log('piccola');
            console.log(isLogged);
            addNavbar(isLogged, false);
            $(".empty-nav-space").css('width', $(".navbar-toggler").width());
        }
        else if (viewportWidth < 576 && $(window).width() >= 576) {
            $('.navbar').empty();
            console.log('grande');
            console.log(isLogged);
            addNavbar(isLogged, true);
        }
        viewportWidth = $(window).width();
    });
}

function makeSolidNavbar() {
    $('#brand-img').find(">:first-child").attr('src', '/assets/images/logo/logo-black.png');
    $(".navbar").css({
        "background-color": "rgba(255,255,255, 0.97)",
        "border": "1px solid rgba(212, 212, 212, 0.7)"
    }).removeClass("navbar-dark")
        .addClass("navbar-light");
    $(".navbar-nav, .nav-link").css({
        "color": "black"
    })
    $(".nav-special").css({
        "color": "#e3b06c"
    })
}

function makeTransparentNavbar() {
    $('#brand-img').find(">:first-child").attr('src', '/assets/images/logo/logo-white.png');
    $(".navbar").css({
        "background-color": "",
        "border": "1px solid rgba(212, 212, 212, 0)"
    }).addClass("navbar-dark")
        .removeClass("navbar-light");
    $(".navbar-nav, .nav-link").css({
        "color": "white"
    })
    $(".nav-special").css({
        "color": "#e3b06c"
    })
}