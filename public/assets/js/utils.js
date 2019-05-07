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