jQuery(document).ready(function(){

    let url = window.location.pathname;
    let authorSelector = url.substr(url.lastIndexOf('/') + 1);

    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    for(let i = 0; i < alphabet.length; i++) {
        if(alphabet[i] === authorSelector)
            $('#alphabetContainer').append(
                $('<a>').attr('href', '/authors/' + alphabet[i]).text(alphabet[i].toUpperCase()).addClass('selectedLetter')
            )
        else
            $('#alphabetContainer').append(
                $('<a>').attr('href', '/authors/' + alphabet[i]).text(alphabet[i].toUpperCase())
            )
    }


    $.get('/api/v1/authors', function (authors, status) {

        let selectedAuthors = [];
        if(authorSelector !== 'a-z')
            selectedAuthors = selectAuthorsByLetter(authors, authorSelector);
        else
            selectedAuthors = authors;

        // Calculate the authors in each of the 4 columns
        let base = Math.floor(selectedAuthors.length / 4);

        let authorsPerColumn = [];
        for(let j = 0; j < 4; j++)
            authorsPerColumn.push(base);
        for(let k = 0; k < selectedAuthors.length % 4; k++)
            authorsPerColumn[k] += 1;
        /*for(let i = 1; i < 4; i++)
            authorsPerColumn[i] += authorsPerColumn[i-1];*/


        let prova = 0;
        for(let i = 0; i < 4; i++)
            prova += authorsPerColumn[i];
        console.log(prova);
        console.log(selectedAuthors.length);

        let rowHTML = $('#authorList').find('>:first-child');
        console.log(rowHTML);

        for(let k = 0; k < selectedAuthors.length;) {
            for (let i = 0; i < 4; i++) {
                let colHTML = $('<div>').addClass('col-md-3');
                console.log(colHTML);

                for (let j = 0; j < authorsPerColumn[i]; j++) {

                    colHTML.append(
                        $('<a>').attr('href', '/authors/' + selectedAuthors[k].authorID)
                            .text(selectedAuthors[k].surname + ' ' + selectedAuthors[k].name)
                    );
                    colHTML.append($('<br>'));
                    k++;
                }
                rowHTML.append(colHTML);
                console.log(rowHTML);
            }
        }



    });





});

function selectAuthorsByLetter(authors, firstLetter) {

    let selectedAuthors = [];

    let regex = new RegExp("^" + firstLetter);
    console.log(regex);
    for(let i = 0; i < authors.length; i++) {
        console.log(authors[i].surname.toLowerCase());
        if(regex.test(authors[i].surname.toLowerCase()))
            selectedAuthors.push(authors[i])
    }

    return selectedAuthors;
}