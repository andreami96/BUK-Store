function retrieveBookByISBN(isbn) {

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            document.getElementById("bookTitle").innerText = response.title;
            document.getElementById("abstract").innerText = response.abstract;

            document.getElementById("price").innerText = response.price + " €";
            document.getElementById("isbn").innerHTML = "<b>ISBN: </b>" + response.ISBN;

            document.getElementById("item-display").src = "../assets/images" + response.picture;
            console.log(response)
        }
    };

    xhttp.open("GET", "http://localhost:8080/api/v1/books/" + isbn);
    xhttp.send();

    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            document.getElementById("author").innerText = response[0].name + ' ' + response[0].surname;
            console.log(response)
        }
    };

    xhttp.open("GET", "http://localhost:8080/api/v1/books/" + isbn + "/authors");
    xhttp.send();

}