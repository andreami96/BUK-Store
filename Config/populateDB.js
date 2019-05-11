const database = require('../Model/sequelize');
const { User, Book, Genre, Theme, BookTheme, Author, WrittenBy, Event, SimilarTo, Review, GenreTheme, Reservation } = database;

async function createUsers() {

    await User.create({
        id: "072f34b1-7fe6-4ae5-84a8-ca1e0925adb7",
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
        genreID: 1,
        year: 2014,
        editor: "Bompiani",
        pageNumber: 779,
        originalLanguage: "Francese"
    });

    await Book.create({
        ISBN: "9788893440615",
        title: "Il libro dei Baltimore",
        picture: "/books/9788893440615.jpg",
        factSheet: "Copertina flessibile: 592 pagine\n" +
            "Editore: La nave di Teseo (29 settembre 2016)\n" +
            "Collana: Oceani\n" +
            "Lingua: Italiano",
        abstract: "Sino al giorno della Tragedia, c'erano due famiglie Goldman. I Goldman di Baltimore e i Goldman di Montclair. " +
            "Di quest'ultimo ramo fa parte Marcus Goldman, il protagonista di \"La verità sul caso Harry Quebert\". " +
            "I Goldman di Montclair, New Jersey, sono una famiglia della classe media e abitano in un piccolo appartamento. " +
            "I Goldman di Baltimore, invece, sono una famiglia ricca e vivono in una bellissima casa nel quartiere residenziale di Oak Park. " +
            "A loro, alla loro prosperità, alla loro felicità, Marcus ha guardato con ammirazione sin da piccolo, " +
            "quando lui e i suoi cugini, Hillel e Woody, amavano di uno stesso e intenso amore Alexandra. Otto anni " +
            "dopo una misteriosa tragedia, Marcus decide di raccontare la storia della sua famiglia: torna con la memoria alla vita " +
            "e al destino dei Goldman di Baltimore, alle vacanze in Florida e negli Hamptons, ai gloriosi anni di scuola. " +
            "Ma c'è qualcosa, nella sua ricostruzione, che gli sfugge. Vede scorrere gli anni, scolorire la patina scintillante dei Baltimore, " +
            "incrinarsi l'amicizia che sembrava eterna con Woody, Hillel e Alexandra. Fino al giorno della Tragedia. " +
            "E da quel giorno Marcus è ossessionato da una domanda: cosa è veramente accaduto ai Goldman di Baltimore? " +
            "Qual è il loro inconfessabile segreto?",
        interview: "",
        availableQuantity: 6,
        price: 18.70,
        genreID: 1,
        year: 2016,
        editor: "La nave di Teseo",
        pageNumber: 592,
        originalLanguage: "Francese"
    })

}

async function createBookTheme() {
    await BookTheme.create({
        ISBN: "8845282678",
        themeID: 1
    });

    await BookTheme.create({
        ISBN: "9788893440615",
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
    await WrittenBy.create({
        ISBN: "8845282678",
        authorID: 1
    });

    await WrittenBy.create({
        ISBN: "9788893440615",
        authorID: 1
    });
}

async function createSimilarTo() {
    await SimilarTo.create({
        ParentISBN: "9788893440615",
        ChildISBN: "8845282678"
    });


}

async function createReviews() {

    await Review.create({
        reviewID: 1,
        title: "A compelling and intriguing read",
        text: "For book lovers The Truth About The Harry Quebert Affair is an ideal read as it is a book about a book about a book. " +
            "Marcus Goldman, author and protégé of the famous author Harry Quebert, is the narrator of this book. " +
            "We follow him from having had a very successful debut novel, to having writers block, " +
            "to writing another bestseller about a murder that happened thirty three years ago and where the main suspect is none other that his friend and mentor Harry Quebert. " +
            "What is interesting is that the chapters go backwards, from chapter thirty one to one which reflects how the story unfolds, " +
            "gradually going backwards to find out what really happened to Nola Kellergan.",
        ISBN: "8845282678"
    })

    await Review.create({
        reviewID: 2,
        title: "A really good book",
        text: "I wasn't sure what to expect when I started reading this book. I did know it was an international best" +
            " seller and it was translated from French. I was pleasantly surprised by it! I do think the book could have " +
            "been edited a bit more. It's a mystery set in 2008. So the presidential election is at the backdrop of the " +
            "main story. When you are reading it, you find that the mystery is a love story. But as it unfolds, you find " +
            "out there is alot of trickery going on. At times, the investigation into what happened to Nola was very " +
            "repetitive. Also, the bits between Marcus and his mother could have been cut out entirely as well as the parts" +
            " about the 2008 presidential election. Neither really progressed the story. But I liked how Dicker wrote his " +
            "characters and I did like the twists to the mystery. But I wasn't crazy how things were tied up neatly in a bow " +
            "at the end. But I do think the mystery and the process of solving it and proving Harry innocent was engrossing. " +
            "If you like mysteries and want something easy to read, I would recommend The Truth About the Harry Quebert Affair.",
        ISBN: "8845282678"
    });
}

async function createEvents() {
    await Event.create({
        eventID: 1,
        address: "Viale Romagna, 20133 Milano",
        latitude: 45.4687769,
        longitude: 9.2238234,
        eventDate: "2019-04-07",
        title: "Meet the Author",
        description: "Meet the Author Joel Dicker at this event",
        ISBN: "8845282678",
        picture: "/events/prova-evento.jpeg"
    })
}

async function createReservation() {
    await Reservation.create({
        reservationID: 1,
        shippingLocation: "Piazza Leonardo da Vinci 32",
        orderDate: "2019-05-01",
        arrivalDate: "2019-05-06",
        quantity: 2,
        userID: "072f34b1-7fe6-4ae5-84a8-ca1e0925adb7",
        ISBN: "8845282678",
    });

    await Reservation.create({
        reservationID: 1,
        shippingLocation: "Piazza Leonardo da Vinci 32",
        orderDate: "2019-05-01",
        arrivalDate: "2019-05-06",
        quantity: 5,
        userID: "072f34b1-7fe6-4ae5-84a8-ca1e0925adb7",
        ISBN: "9788893440615"
    })
}

async function createGenreThemes() {
    await GenreTheme.create({
        genreID: 1,
        themeID: 1
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
            await createSimilarTo();
            await createReviews();
            await createGenreThemes();
            await createReservation();
        }
        resolve();
    });

};