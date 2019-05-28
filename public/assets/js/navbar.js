$(document).ready(function () {

    $.ajax({
        url: "/api/v1/me",
        success: function (result, status, xhr) {
            if($(window).width() >= 576)
                addNavbar(true, true);
            else
                addNavbar(true, false);

            makeResizableNavbar(true);

            makeTransparentNavbar();

            if( !$("#navbarNoHover").length ){
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
                    if ($(window).scrollTop() < 60)
                        makeTransparentNavbar();
                })
            }
            else makeSolidNavbar();
        },
        error: function (xhr) {
            if($(window).width() >= 576)
                addNavbar(false, true);
            else
                addNavbar(false, false);

            makeResizableNavbar(false);

            makeTransparentNavbar();

            if( !$("#navbarNoHover").length ){
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
                    if ($(window).scrollTop() < 60)
                        makeTransparentNavbar();
                })
            }
            else makeSolidNavbar();

            $(".empty-nav-space").css('width', $(".navbar-toggler").width());
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
}

function createToggler() {
    $(".navbar")
        .append("<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
                "   <span class=\"navbar-toggler-icon\"></span>\n" +
                "</button>\n");
}

function retrieveBadge() {
    return  "<div class=\"nav-item order-md-12 order-sm-1\">\n" +
            "   <a><span class=\"badge badge-primary\">1</span></a>\n" +
            "</div>\n"
}

function retrieveRightMenu(isLogged) {

    let notLogged = "<ul class=\"navbar-nav\" id=\"right-nav\">\n" +
                    "   <li class=\"nav-item\">\n" +
                    "      <a class=\"nav-link\" href=\"/signup.html\">Registrati</a>\n" +
                    "   </li>\n" +
                    "   <li class=\"nav-item\">\n" +
                    "      <a class=\"nav-link\" href=\"/login.html\">Login</a>\n" +
                    "   </li>\n" +
                    "</ul>";

    let logged =    "<ul class=\"navbar-nav\" id=\"right-nav\">\n" +
                    "   <li class=\"nav-item\">\n" +
                    "      <a class=\"nav-link\" href=\"/me\">Area Personale</a>\n" +
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
            "                    <a class=\"nav-link\" href=\"/catalogue/1\">Catalogo Libri</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item\">\n" +
            "                    <a class=\"nav-link\" href=\"/catalogue/mainGenres.html\">Generi Principali</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item\">\n" +
            "                    <a class=\"nav-link\" href=\"#\">Temi</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item\">\n" +
            "                    <a class=\"nav-link\" href=\"#\">Eventi</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item\">\n" +
            "                    <a class=\"nav-link\" href=\"#\">Autori</a>\n" +
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
                "                        Sfoglia\n" +
                "                    </a>\n" +
                "                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n" +
                "                        <a class=\"dropdown-item\" href=\"/catalogue/1\">Catalogo Libri</a>\n" +
                "                        <div class=\"dropdown-divider\"></div>\n" +
                "                        <a class=\"dropdown-item\" href=\"/catalogue/mainGenres.html\">Generi Principali</a>\n" +
                "                        <a class=\"dropdown-item\" href=\"#\">Temi</a>\n" +
                "                    </div>\n" +
                "                </li>\n" +
                "                <li class=\"nav-item\">\n" +
                "                    <a class=\"nav-link\" href=\"#\">Eventi</a>\n" +
                "                </li>\n" +
                "                <li class=\"nav-item\">\n" +
                "                    <a class=\"nav-link\" href=\"#\">Autori</a>\n" +
                "                </li>\n" +
                "            </ul>\n" + retrieveRightMenu(isLogged) +
                " </div>");
}

function logout() {
    $.get("/api/v1/logout", function (data) {
        console.log(data);
        $(location).attr('href', '/');
    });
}

function makeResizableNavbar(isLogged) {
    $(window).resize(function() {
        if ($('.navbar-toggler').is(':visible')) {
            $('.navbar').empty();
            addNavbar(isLogged, false);
            $(".empty-nav-space").css('width', $(".navbar-toggler").width());
        }
        else {
            $('.navbar').empty();
            addNavbar(isLogged, true);
        }

        if( !$("#navbarNoHover").length ){
            if ($(window).scrollTop() > 60) {
                makeSolidNavbar();
            } else {
                makeTransparentNavbar();
            }
        }
        else makeSolidNavbar();
    });
}

function makeSolidNavbar() {
    $('#brand-img').find(">:first-child").attr('src', '/assets/images/logo/logo-black.png');
    $(".navbar").css({
        "background-color": "rgba(255,255,255, 0.97)",
        "border": "1px solid rgba(212, 212, 212, 0.97)"
    }).removeClass("navbar-dark")
        .addClass("navbar-light");
    $(".navbar-nav, .nav-link").css({
        "color": "black"
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
}