function retrieveBookByISBN(url) {

    let xhttp = new XMLHttpRequest();

    let isbn = url.substr(url.lastIndexOf('/') + 1);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            document.getElementById("bookTitle").innerText = response.title;
            document.getElementById("abstract").innerText = response.abstract;

            document.getElementById("price").innerText = response.price + " €";
            document.getElementById("isbn").innerHTML = "<b>ISBN: </b>" + response.ISBN;
            document.getElementById("year").innerHTML = "<b>Year: </b>" + response.year;
            document.getElementById("pages").innerHTML = "<b>Pages: </b>" + response.pageNumber;
            document.getElementById("editor").innerHTML = "<b>Editor: </b>" + response.editor;
            document.getElementById("originalLanguage").innerHTML = "<b>Original Language: </b>" + response.originalLanguage;

            document.getElementById("item-display").src = "../assets/images" + response.picture;
            console.log(response)
        }
    };

    xhttp.open("GET", "/api/v1/books/" + isbn);
    xhttp.send();

    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            document.getElementById("author").innerText = response[0].name + ' ' + response[0].surname;
            console.log(response)
        }
    };

//    xhttp.open("GET", "https://buk-store.herokuapp.com/api/v1/books/" + isbn + "/authors");
    xhttp.open("GET", "/api/v1/books/" + isbn + "/authors");
    xhttp.send();

}

function formatDate(date) {
    let year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();

    month = (month.length === 1) ? ("0" + month) : month;
    day = (day.length === 1) ? ("0" + day) : day;

    return year + '-' + month + '-' + day;
}

function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function toHHMM(hours, minutes) {
    if (hours   < 10) {hours = "0" + hours;}
    if (minutes < 10) {minutes = "0" + minutes;}
    return hours + ':' + minutes;
}

function generateMap(lat, long) {
    let mymap = L.map('mapid').setView([lat, long], 16);
    mymap.scrollWheelZoom.disable();
    let marker = L.marker([lat, long]).addTo(mymap);
    marker.bindPopup("<b>MiChi studios</b><br>Milan").openPopup();

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiYW5kcmVhbWkiLCJhIjoiY2p2NnNmZG41MDhraDN5cGZraGYyMW90MCJ9.BwlnUo82E8nuyjEEmuwHMw'
    }).addTo(mymap);
}