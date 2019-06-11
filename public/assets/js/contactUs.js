$(document).ready(function () {

    $.get("/api/v1/page?pageName=contact-us", function (data) {
        $('body').append(data.body);
    })

});