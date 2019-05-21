$(document).ready(function () {

    $.ajax({
        url: "/api/v1/me",
        success: function (result, status, xhr) {
            addLoggedNavbar();
        },
        error: function (xhr) {
            addNormalNavbar();
            $(".empty-nav-space").css('width', $(".navbar-toggler").width());
        }
    });
});

function addNormalNavbar() {
    $(".navbar").addClass("border navbar-expand-sm fixed-top")
                .append("<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
                    "            <span class=\"navbar-toggler-icon\"></span>\n" +
                    "        </button>\n" +
                    "\n" +
                    "        <div class=\"navbar-header mx-sm-auto\">\n" +
                    "            <a class=\"navbar-brand\" href=\"/\">\n" +
                    "                <img src=\"./assets/images/logo/logo.png\" height=\"30\" alt=\"BUK\">\n" +
                    "            </a>\n" +
                    "        </div>\n" +
                    "\n" +
                    "        <div class=\"empty-nav-space ml-sm-auto\"></div>\n" +
                    "\n" +
                    "        <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n" +
                    "            <ul class=\"navbar-nav mr-auto\">\n" +
                    "                <li class=\"nav-item dropdown\">\n" +
                    "                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
                    "                        Catalogo\n" +
                    "                    </a>\n" +
                    "                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n" +
                    "                        <a class=\"dropdown-item\" href=\"./catalogue/mainGenres.html\">Generi Principali</a>\n" +
                    "                        <a class=\"dropdown-item\" href=\"#\">Temi</a>\n" +
                    "                        <div class=\"dropdown-divider\"></div>\n" +
                    "                        <a class=\"dropdown-item\" href=\"#\">Something to divide from the other</a>\n" +
                    "                    </div>\n" +
                    "                </li>\n" +
                    "                <li class=\"nav-item\">\n" +
                    "                    <a class=\"nav-link\" href=\"#\">Eventi</a>\n" +
                    "                </li>\n" +
                    "                <li class=\"nav-item\">\n" +
                    "                    <a class=\"nav-link\" href=\"#\">Autori</a>\n" +
                    "                </li>\n" +
                    "            </ul>\n" +
                    "            <ul class=\"navbar-nav\" id=\"right-nav\">\n" +
                    "                <li class=\"nav-item\">\n" +
                    "                    <a class=\"nav-link\" href=\"#\">Registrati</a>\n" +
                    "                </li>\n" +
                    "                <li class=\"nav-item\">\n" +
                    "                    <a class=\"nav-link\" href=\"/login.html\">Login</a>\n" +
                    "                </li>\n" +
                    "            </ul>\n" +
                    "        </div>\n");
}

function addLoggedNavbar() {
    $('.navbar')
        .addClass("border navbar-expand-sm fixed-top")
        .append("<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
            "            <span class=\"navbar-toggler-icon\"></span>\n" +
            "        </button>\n" +
            "\n" +
            "        <div class=\"navbar-header mx-sm-auto\">\n" +
            "            <a class=\"navbar-brand\" href=\"/\">\n" +
            "                <img src=\"./assets/images/logo/logo.png\" height=\"30\" alt=\"BUK\">\n" +
            "            </a>\n" +
            "        </div>\n" +
            "\n" +
            "        <div class=\"nav-item order-md-12 order-sm-1\">\n" +
            "            <a><span class=\"badge badge-primary\">1</span></a>\n" +
            "        </div>\n" +
            "\n" +
            "        <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n" +
            "            <ul class=\"navbar-nav mr-auto\">\n" +
            "                <li class=\"nav-item dropdown\">\n" +
            "                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
            "                        Catalogo\n" +
            "                    </a>\n" +
            "                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n" +
            "                        <a class=\"dropdown-item\" href=\"./catalogue/mainGenres.html\">Generi Principali</a>\n" +
            "                        <a class=\"dropdown-item\" href=\"#\">Temi</a>\n" +
            "                        <div class=\"dropdown-divider\"></div>\n" +
            "                        <a class=\"dropdown-item\" href=\"#\">Something to divide from the other</a>\n" +
            "                    </div>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item\">\n" +
            "                    <a class=\"nav-link\" href=\"#\">Eventi</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item\">\n" +
            "                    <a class=\"nav-link\" href=\"#\">Autori</a>\n" +
            "                </li>\n" +
            "            </ul>\n" +
            "            <ul class=\"navbar-nav\" id=\"right-nav\">\n" +
            "            <li class=\"nav-item\">\n" +
            "                    <a class=\"nav-link\" href=\"#\">Area Personale</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item\">\n" +
            "                    <a class=\"nav-link\" href=\"#\" onclick=\"logout()\">Logout</a>\n" +
            "                </li>\n" +
            "            </ul>\n" +
            "        </div>\n")
}

function logout() {
    $.get("/api/v1/logout", function (data) {
        console.log(data);
        $(location).attr('href', '/');
    });
}