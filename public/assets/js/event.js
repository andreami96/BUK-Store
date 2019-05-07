let lastScrollTop = 0;

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

let mymap = L.map('mapid').setView([45.469, 9.18792], 16);
mymap.scrollWheelZoom.disable();
let marker = L.marker([45.469, 9.18792]).addTo(mymap);
marker.bindPopup("<b>MiChi studios</b><br>Milan").openPopup();

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYW5kcmVhbWkiLCJhIjoiY2p2NnNmZG41MDhraDN5cGZraGYyMW90MCJ9.BwlnUo82E8nuyjEEmuwHMw'
}).addTo(mymap);













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
