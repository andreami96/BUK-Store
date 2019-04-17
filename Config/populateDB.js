const database = require('../Model/sequelize');
const { User, Book, Genre, Theme, BookTheme, Author, WrittenBy, Event } = database;

async function createUsers() {

    await User.create({
        name: "NameProva",
        surname: "SurnameProva",
        email: "prova@example.com",
        password: "provaprova",
        activationToken: null
    });
}

async function createGenres() {

    await Genre.create({
        genreID: 1,
        title: "Thriller",
        picture: "/genres/thriller.jpg",
        mainGenre: "Romanzo",
        description: "Il thriller (dall'inglese to thrill, rabbrividire) è un genere di fiction che utilizza la suspense, la tensione e l'eccitazione come elementi principali della trama." +
            "Derivato dal giallo, è assai diffuso sia in letteratura, che nel cinema o nella televisione. " +
            "Più diffuso negli Stati Uniti che in Europa, il genere thriller è a sua volta suddiviso in diversi, in parte coincidenti, sottogeneri."
    });

}

async function createThemes() {

    await Theme.create({
        themeID: 1,
        title: "Giallo",
        picture: "/themes/giallo.jpg",
        description: "Il giallo è un genere di successo di narrativa di consumo nato verso la metà del XIX secolo e sviluppatosi nel Novecento"
    });

}

async function createBooks() {

    await Book.create({
        ISBN: "8845282678",
        title: "La verità sul caso Harry Quebert",
        picture: "/books/8845282678.jpeg",
        factSheet: "Copertina flessibile: 775 pagine\n" +
            "Editore: Bompiani (16 giugno 2016)\n" +
            "Collana: Tascabili narrativa\n" +
            "Lingua: Italiano\n" +
            "ISBN-10: 8845282678\n" +
            "Peso di spedizione: 821 g",
        abstract: "Estate 1975. Nola Kellergan, una ragazzina di 15 anni, scompare misteriosamente nella tranquilla cittadina di Aurora, New Hampshire. " +
            "Le ricerche della polizia non danno alcun esito. Primavera 2008, New York. Marcus Goldman, giovane scrittore di successo, sta vivendo uno dei rischi del suo mestiere: " +
            "è bloccato, non riesce a scrivere una sola riga del romanzo che da lì a poco dovrebbe consegnare al suo editore. " +
            "Ma qualcosa di imprevisto accade nella sua vita: il suo amico e professore universitario Harry Quebert, " +
            "uno degli scrittori più stimati d'America, viene accusato di avere ucciso la giovane Nola Kellergan. " +
            "Il cadavere della ragazza viene infatti ritrovato nel giardino della villa dello scrittore, a Goose Cove, " +
            "poco fuori Aurora, sulle rive dell'oceano. Convinto dell'innocenza di Harry Quebert, Marcus Goldman abbandona " +
            "tutto e va nel New Hampshire per condurre la sua personale inchiesta. Marcus, dopo oltre trent'anni deve " +
            "dare risposta a una domanda: chi ha ucciso Nola Kellergan? E, naturalmente, deve scrivere un romanzo di grande successo.",
        interview: "",
        availableQuantity: 10,
        price: 8.41,
        genreID: 1
    })

}

async function createBookTheme() {
    await BookTheme.create({
        ISBN: "8845282678",
        themeID: 1
    })
}

async function createAuthors() {
    await Author.create({
        authorID: 1,
        name: "Joël",
        surname: "Dicker",
        picture: "/authors/1.jpg",
        biography: "Joël Dicker è nato il 16 giugno 1985 a Ginevra, nella zona francofona della Svizzera, " +
            "figlio di una bibliotecaria e di un insegnante di francese, pronipote dell'avvocato e politico " +
            "di estrema sinistra Jacques Dicker (1879-1942), ebreo russo emigrato in Svizzera e naturalizzato nel 1915. " +
            "Dicker è cresciuto a Ginevra, frequentando il Collège Madame de Staël, senza tuttavia essere molto attratto dagli studi. " +
            "All'età di 19 anni, ha preso lezioni di recitazione al Drama School in Cours Florent di Parigi. " +
            "Un anno dopo è tornato a Ginevra per studiare legge presso l'Università di Ginevra, laureandosi nel 2010."
    })
}

async function createWrittenBy() {
    WrittenBy.create({
        ISBN: "8845282678",
        authorID: 1
    })
}

async function createEvents() {
    Event.create({
        eventID: 1,
        address: "Viale Romagna, 20133 Milano",
        latitude: 45.4687769,
        longitude: 9.2238234,
        eventDate: "2019-04-07",
        title: "Meet the Author",
        description: "Meet the Author Joel Dicker at this event",
        ISBN: "8845282678"
    })
}

exports.createDatabase = function (force=false, populateItNow=false) {

    return new Promise( async (resolve, reject) => {

        if(force === false && populateItNow === true)
            reject("It is impossible to fill up an existing database, if you want to repopulate it," +
                "please use force = true");

        await database.init(force);

        if(populateItNow) {
            await createUsers();
            await createGenres();
            await createBooks();
            await createThemes();
            await createBookTheme();
            await createAuthors();
            await createWrittenBy();
            await createEvents();
        }
        resolve();
    });

};