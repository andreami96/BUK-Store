jQuery(document).ready(function() {

    $.get("/api/v1/themes?limit=100", function(themes) {

        let themesInfo = [];

        themes.forEach((theme, index, array) => {
            $.get("/api/v1/themes/" + theme.themeID, function(themeInfo) {
                themesInfo.push(themeInfo);
                if(themesInfo.length === array.length)
                    createThemesHTML(themesInfo);
            })
        });
    })
});

function createThemesHTML(themes) {

    themes.sort(function(a, b) {
        if (a.themeID < b.themeID)
            return -1;
        else if (a.themeID === b.themeID)
            return 0;
        else if (a.themeID > b.themeID)
            return 1;
    });

    for(let i = 0; i < themes.length; i++) {
        let rowNumber = Math.floor(i / 2) + 1;

        // If even, create row
        if (i % 2 === 0) {
            $('#themesList').append($('<div>').attr({
                'class': 'row',
                'id': 'row-n' + rowNumber
            }));
        }

        let themeIdHTML = themes[i].title.toLowerCase().replace(' ', '-') + '-box';

        // Column and card
        $('#row-n' + rowNumber).append(
            $('<div>').addClass('col-md-6 px-3').append(
                $('<div>').attr({
                    'class': 'small-genre-card m-3 p-4',
                    'id': themeIdHTML
                }).append(
                    $('<h3>').html(themes[i].title)
                )
            )
        );

        // Add anchor
        $('.small-genre-card:last').append(
            $('<a>').attr({
                'class': 'link-invisible',
                'href': '/themes/' + themes[i].themeID
                }).text(themes[i].title).append(
                    $('<span>')
            )
        );
    }

}
function createThemesHTML1(themes) {

    themes.sort(function(a, b) {
        if (a.title.charAt(0) < b.title.charAt(0))
            return -1;
        else if (a.title.charAt(0) === b.title.charAt(0))
            return 0;
        else if (a.title.charAt(0) > b.title.charAt(0))
            return 1;
    });

        // Calculate the themes in each of the 4 columns
        let base = Math.floor(themes.length / 4);

        let themesPerColumn = [];
        for(let j = 0; j < 4; j++)
            themesPerColumn.push(base);
        for(let k = 0; k < themes.length % 4; k++)
            themesPerColumn[k] += 1;

        let rowHTML = $('#themesList').find('>:first-child');

        for(let k = 0; k < themes.length;) {
            for (let i = 0; i < 4; i++) {
                let colHTML = $('<div>').addClass('col-sm-6 col-lg-3');

                for (let j = 0; j < themesPerColumn[i]; j++) {

                    colHTML.append(
                        $('<a>').attr('href', '/themes/' + themes[k].themeID)
                            .text(themes[k].title)
                    );
                    colHTML.append($('<br>')).append($('<br>'));
                    k++;
                }
                rowHTML.append(colHTML);
                console.log(rowHTML);
            }
        }

}
