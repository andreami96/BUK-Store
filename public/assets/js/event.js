jQuery(document).ready(function() {

    let url = window.location.pathname;
    let eventID = url.substr(url.lastIndexOf('/') + 1);

    $.get("https://buk-store.herokuapp.com/api/v1/events/" + eventID, function(data, status){
        console.log(data);
        $(".banner-primary").css('background-image', 'url("../assets/images' + data.picture + '")');
        $("#event-title").text(data.title);
        $.get("https://buk-store.herokuapp.com/api/v1/books/" + data.presentedBook, function (data, status) {
            console.log(data);
            $("#event-book").attr(
                {"src": "../assets/images" + data.picture,
                    "alt": data.title}
            );
        });
        $.getScript('../assets/js/utils.js', function()
        {
            generateMap(data.latitude, data.longitude);
        });

        let eventDate = new Date(data.eventDate);
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        $("#event-date").text(eventDate.getDate() + " " + months[eventDate.getMonth()]);
        $("#event-time").text(toHHMM(eventDate.getHours(), eventDate.getMinutes()));

        $("#event-location").text(data.address);
        $("#event-description").text(data.description);
    });



});























/*45.469, 9.18792*/

/* TODO: improve scrolling when reaching top and bottom of the page

    let st = $(this).scrollTop();
        if (st > lastScrollTop){
            // downscroll code
        } else {
            // upscroll code
        }
        lastScrollTop = st;
*/

/*jQuery(document).ready(function() {

    // toggle "navbar-no-bg" class
    $('.top-content .text').waypoint(function() {
        $('nav').toggleClass('navbar-no-bg');
    });

});*/

/*let waypoint = new Waypoint({
    element: $(".navbar"),
    handler: function() {
        this.element.toggleClass("solid-navbar");
    },
    offset: 400
})*/
