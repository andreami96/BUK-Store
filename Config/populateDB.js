const database = require('../Model/sequelize');
const { User, Book, MainGenre, Genre, Theme, BookTheme, Author, WrittenBy, Event, SimilarTo, Review, GenreTheme, Reservation } = database;

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

async function createMainGenres() {

    await MainGenre.create({
        mainGenreID: 1,
        title: "Novel",
        picture: "/images/mainGenres/novel.jpg"
    });

    await MainGenre.create({
        mainGenreID: 2,
        title: "Essay",
        picture: "/images/mainGenres/essay.png"
    });

    await MainGenre.create({
        mainGenreID: 3,
        title: "Poetry",
        picture: "/images/mainGenres/poetry.jpg"
    });

    await MainGenre.create({
        mainGenreID: 4,
        title: "Theatre",
        picture: "/images/mainGenres/theatre.jpg"
    });

}

async function createGenres() {

    await Genre.create({
        genreID: 1,
        title: "Thriller",
        picture: "/genres/book-candle.jpg",
        mainGenreID: 1,
        description: "Il thriller (dall'inglese to thrill, rabbrividire) è un genere di fiction che utilizza la suspense, la tensione e l'eccitazione come elementi principali della trama." +
            "Derivato dal giallo, è assai diffuso sia in letteratura, che nel cinema o nella televisione. " +
            "Più diffuso negli Stati Uniti che in Europa, il genere thriller è a sua volta suddiviso in diversi, in parte coincidenti, sottogeneri."
    });

    await Genre.create({
        genreID: 2,
        title: "Novel",
        picture: "/genres/novel.jpg",
        mainGenreID: 1,
        description: "Il thriller (dall'inglese to thrill, rabbrividire) è un genere di fiction che utilizza la suspense, la tensione e l'eccitazione come elementi principali della trama." +
            "Derivato dal giallo, è assai diffuso sia in letteratura, che nel cinema o nella televisione. " +
            "Più diffuso negli Stati Uniti che in Europa, il genere thriller è a sua volta suddiviso in diversi, in parte coincidenti, sottogeneri."
    });

    await Genre.create({
        genreID: 3,
        title: "Storiography",
        picture: "/genres/storiography.jpg",
        mainGenreID: 1,
        description: "Il thriller (dall'inglese to thrill, rabbrividire) è un genere di fiction che utilizza la suspense, la tensione e l'eccitazione come elementi principali della trama." +
            "Derivato dal giallo, è assai diffuso sia in letteratura, che nel cinema o nella televisione. " +
            "Più diffuso negli Stati Uniti che in Europa, il genere thriller è a sua volta suddiviso in diversi, in parte coincidenti, sottogeneri."
    });

    await Genre.create({
        genreID: 4,
        title: "Diary",
        picture: "/genres/diary.jpg",
        mainGenreID: 1,
        description: "Il thriller (dall'inglese to thrill, rabbrividire) è un genere di fiction che utilizza la suspense, la tensione e l'eccitazione come elementi principali della trama." +
            "Derivato dal giallo, è assai diffuso sia in letteratura, che nel cinema o nella televisione. " +
            "Più diffuso negli Stati Uniti che in Europa, il genere thriller è a sua volta suddiviso in diversi, in parte coincidenti, sottogeneri."
    });


    await Genre.create({
        genreID: 5,
        title: "Fable",
        picture: "/genres/fable.jpg",
        mainGenreID: 1,
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

    await Theme.create({
        themeID: 2,
        title: "Amore",
        picture: "/themes/amore.jpg",
        description: "L'amore è il motore che muove l'uno verso l'altro, è forza gravitazionale esercitata su tutti noi"
    });

    await Theme.create({
        themeID: 3,
        title: "Guerra",
        picture: "/themes/guerra.jpg",
        description: "War is peace."
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
    });

    await Book.create({
        ISBN: "1984822179",
        title: "Normal People",
        picture: "/books/normal_people.jpg",
        factSheet: "Hardcover: 288 pages\n" +
            "Publisher: Hogarth; Later Printing edition\n" +
            "Language: English",
        abstract: "At school Connell and Marianne pretend not to know each other. He’s popular and well-adjusted, star of the school football team," +
            " while she is lonely, proud, and intensely private. But when Connell comes to pick his mother up from her job at Marianne’s house, a " +
            "strange and indelible connection grows between the two teenagers—one they are determined to conceal.\n\n" +
            "A year later, they’re both studying at Trinity College in Dublin. Marianne has found her feet in a new social world while Connell hangs" +
            " at the sidelines, shy and uncertain. Throughout their years at university, Marianne and Connell circle one another, straying toward other " +
            " people and possibilities but always magnetically, irresistibly drawn back together. And as she veers into self-destruction and he begins to" +
            " search for meaning elsewhere, each must confront how far they are willing to go to save the other.\n\n" +
            "Sally Rooney brings her brilliant psychological acuity and perfectly spare prose to a story that explores the subtleties of class, the " +
            "electricity of first love, and the complex entanglements of family and friendship.",
        interview: "",
        availableQuantity: 8,
        price: 14.80,
        genreID: 1,
        year: 2019,
        editor: "Hogarth",
        pageNumber: 288,
        originalLanguage: "English"
    });

    await Book.create({
        ISBN: "1481449478",
        title: "The Gospel of Loki",
        picture: "/books/the_gospel_of_loki.jpg",
        factSheet: "Hardcover: 288 pages\n" +
            "Publisher: Gallery / Saga Press;\n" +
            "Language: English",
        abstract: "This novel is a brilliant first-person narrative of the rise and fall of the Norse gods—retold from the point " +
            "of view of the world’s ultimate trickster, Loki. A #1 bestseller in the UK, The Gospel of Loki tells the story of Loki’s " +
            "recruitment from the underworld of Chaos, his many exploits on behalf of his one-eyed master, Odin, through to his eventual " +
            "betrayal of the gods and the fall of Asgard itself.",
        interview: "",
        availableQuantity: 8,
        price: 19.80,
        genreID: 1,
        year: 2016,
        editor: "Gallery / Saga Press",
        pageNumber: 288,
        originalLanguage: "English"
    });

    await Book.create({
        ISBN: "0525436146",
        title: "There There",
        picture: "/books/there_there.jpg",
        factSheet: "Hardcover: 344 pages\n" +
            "Publisher: Vintage\n" +
            "Language: English",
        abstract: "Tommy Orange’s shattering novel follows twelve characters from Native communities: all traveling to the Big Oakland Powwow, " +
            "all connected to each other in ways they may not yet realize. There is Jacquie Red Feather, newly sober and working to make it back " +
            "to the family she left behind. Dene Oxendene, who is pulling his life back together after his uncle’s death, has come to work at the " +
            "powwow to honor his memory. Fourteen-year-old Orvil has come to perform traditional dance for the very first time. Together, this chorus" +
            " of voices tells of the plight of the urban Native American—grappling with a complex and painful history, with an inheritance of beauty " +
            "and spirituality, with communion and sacrifice and heroism. Hailed as an instant classic, There There is at once poignant and laugh-out-loud" +
            " funny, utterly contemporary and always unforgettable.",
        interview: "",
        availableQuantity: 3,
        price: 16.55,
        genreID: 1,
        year: 2019,
        editor: "Vintage",
        pageNumber: 344,
        originalLanguage: "English"
    });

    await Book.create({
        ISBN: "006223790",
        title: "Pieces of Light",
        picture: "/books/pieces_of_light.jpg",
        factSheet: "Hardcover: 320 pages\n" +
            "Publisher: Harper Perennial\n" +
            "Language: English",
        abstract: "Leading psychologist Charles Fernyhough blends the most current science with literature and personal stories in Pieces of Light:" +
            " How the New Science of Memory Illuminates the Stories We Tell About Our Pasts.\n\n" +
            "A new consensus is emerging among cognitive scientists: rather than possessing fixed, unchanging memories, they have found that we create " +
            "recollections anew each time we are called upon to remember. According to psychologist Charles Fernyhough, remembering is an act of " +
            "narrative imagination as much as it is the product of a neurological process.\n\n" +
            "An NPR and Psychology Today contributor, Dr. Fernyhough guides readers through the fascinating new science of autobiographical memory, " +
            "covering topics such as: navigation, imagination, and the power of sense associations to cue remembering. Exquisitely written and " +
            "meticulously researched, Pieces of Light brings together science and literature, the ordinary and the extraordinary, to help us better " +
            "understand our powers of recall and our relationship with the past.",
        interview: "",
        availableQuantity: 5,
        price: 17.96,
        genreID: 1,
        year: 2014,
        editor: "Harper Perennial",
        pageNumber: 320,
        originalLanguage: "English"
    });

    await Book.create({
        ISBN: "9780553381689",
        title: "A Game of Thrones",
        picture: "/books/got_hc1.jpg",
        factSheet: "Hardcover: 704 pages\n" +
            "Publisher: Bantam\n" +
            "Language: English",
        abstract: "Here is the first volume in George R. R. Martin's magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords." +
            " As a whole, this series comprises a genuine masterpiece of modern fantasy, bringing together the best the genre has to offer. Magic, " +
            "mystery, intrigue, romance, and adventure fill these pages and transport us to a world unlike any we have ever experienced. Already hailed" +
            "as a classic, George R. R. Martin's stunning series is destined to stand as one of the great achievements of imaginative fiction. \n\n" +
            "A GAME OF THRONES \n" +
            "Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and " +
            "winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister and supernatural" +
            " forces are massing beyond the kingdom's protective Wall. At the center of the conflict lie the Starks of Winterfell, a family as harsh and" +
            " unyielding as the land they were born to. Sweeping from a land of brutal cold to a distant summertime kingdom of epicurean plenty, here " +
            "is a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens. \n" +
            "Here an enigmatic band of warriors bear swords of no human metal; a tribe of fierce wildlings carry men off into madness; a cruel young" +
            " dragon prince barters his sister to win back his throne; and a determined woman undertakes the most treacherous of journeys. Amid plots" +
            " and counterplots, tragedy and betrayal, victory and terror, the fate of the Starks, their allies, and their enemies hangs perilously in " +
            "the balance, as each endeavors to win that deadliest of conflicts: the game of thrones.",
        interview: "",
        availableQuantity: 25,
        price: 9.99,
        genreID: 1,
        year: 2002,
        editor: "Bantam",
        pageNumber: 704,
        originalLanguage: "English"
    });

    await Book.create({
        ISBN: "0812998952",
        title: "American Spy",
        picture: "/books/american_spy.jpg",
        factSheet: "Hardcover: 304 pages\n" +
            "Publisher: Random House\n" +
            "Language: English",
        abstract: "It’s 1986, the heart of the Cold War, and Marie Mitchell is an intelligence officer with the FBI. She’s brilliant, but " +
            "she’s also a young black woman working in an old boys’ club. Her career has stalled out, she’s overlooked for every high-profile " +
            "squad, and her days are filled with monotonous paperwork. So when she’s given the opportunity to join a shadowy task force aimed at " +
            "undermining Thomas Sankara, the charismatic revolutionary president of Burkina Faso whose Communist ideology has made him a target " +
            "for American intervention, she says yes. Yes, even though she secretly admires the work Sankara is doing for his country. Yes, even " +
            "though she is still grieving the mysterious death of her sister, whose example led Marie to this career path in the first place. Yes, " +
            "even though a furious part of her suspects she’s being offered the job because of her appearance and not her talent.\n" +
            " In the year that follows, Marie will observe Sankara, seduce him, and ultimately have a hand in the coup that will bring him down. But " +
            "doing so will change everything she believes about what it means to be a spy, a lover, a sister, and a good American.\n" +
            "Inspired by true events—Thomas Sankara is known as “Africa’s Che Guevara”—American Spy knits together a gripping spy thriller, a " +
            "heartbreaking family drama, and a passionate romance. This is a face of the Cold War you’ve never seen before, and it introduces a " +
            "powerful new literary voice.",
        interview: "",
        availableQuantity: 2,
        price: 20.90,
        genreID: 1,
        year: 2019,
        editor: "Random House",
        pageNumber: 304,
        originalLanguage: "English"
    });

    await Book.create({
        ISBN: "2845362671",
        title: "Il Maestro e Margherita",
        picture: "/books/Il-Mastro-e-Margherita-copertina-394x600.jpg",
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

}

async function createBookTheme() {
    await BookTheme.create({
        ISBN: "8845282678",
        themeID: 1
    });

    await BookTheme.create({
        ISBN: "9788893440615",
        themeID: 1
    });

    await BookTheme.create({
        ISBN: "1984822179",
        themeID: 1
    });

    await BookTheme.create({
        ISBN: "1481449478",
        themeID: 1
    });

    await BookTheme.create({
        ISBN: "0525436146",
        themeID: 1
    });

    await BookTheme.create({
        ISBN: "006223790",
        themeID: 1
    });

    await BookTheme.create({
        ISBN: "9780553381689",
        themeID: 1
    });

    await BookTheme.create({
        ISBN: "0812998952",
        themeID: 1
    });

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
    });

    await Author.create({
        authorID: 2,
        name: "Sally",
        surname: "Rooney",
        picture: "/authors/1.jpg",
        biography: "Sally Rooney was born in the west of Ireland in 1991. Her work has appeared in The New Yorker, The New York Times, " +
            "Granta and The London Review of Books. Winner of the Sunday Times Young Writer of the Year Award in 2017, she is the author " +
            "of Conversations with Friends and the editor of the Irish literary journal The Stinging Fly."
    });

    await Author.create({
        authorID: 3,
        name: "Joanne",
        surname: "Harris",
        picture: "/authors/1.jpg",
        biography: "Joanne Harris (MBE) was born in Barnsley in 1964, of a French mother and an English father. She studied modern and " +
            "medioeval languages at Cambridge and is the author of Chocolat (1999), which was made into an Oscar-nominated film starring " +
            "Juliette Binoche and Johnny Depp. Since then, she has written several more novels, two collections of short stories, and three" +
            " cookbooks. Her books are now published in more than fifty countries and have won a number of British and international awards. " +
            "She is an honorary Fellow of St Catharine’s College, Cambridge, and has been a judge for the Whitbread Prize, the Orange Prize, " +
            "the Desmond Elliott Prize, and the Royal Society Winton Prize for Science. She works from a shed in her garden and lives with her " +
            "husband and daughter in a little wood in Yorkshire."
    });

    await Author.create({
        authorID: 4,
        name: "Tommy",
        surname: "Orange",
        picture: "/authors/1.jpg",
        biography: "Tommy Orange is faculty at the Institute of American Indian Arts MFA program. He is an enrolled member of the Cheyenne and " +
            "Arapaho Tribes of Oklahoma. He was born and raised in Oakland, California, and currently lives in Angels Camp, California."
    });

    await Author.create({
        authorID: 5,
        name: "Charles",
        surname: "Fernyhough",
        picture: "/authors/1.jpg",
        biography: "Charles Fernyhough is a writer and psychologist. His non-fiction book about his daughter’s psychological development, A Thousand " +
            "Days of Wonder (Avery, 2009), was translated into eight languages. His book on autobiographical memory, Pieces of Light (HarperCollins, 2013)" +
            " was shortlisted for the 2013 Royal Society Winton Prize for Science Books. His latest non-fiction book, The Voices Within, is published by " +
            "Basic Books (October 2016). He is the author of two novels, The Auctioneer (Fourth Estate, 1999) and A Box Of Birds (Unbound, 2013). He has" +
            " written for TIME Ideas, Nature, New Scientist, BBC Focus, Guardian, Observer, Financial Times, Literary Review, Sunday Telegraph, Lancet, " +
            "Scotland on Sunday, Huffington Post, Daily Beast and Sydney Morning Herald. He blogs for the US magazine Psychology Today and has made numerous" +
            " radio appearances in the UK and US. He has acted as consultant on theatre productions on Broadway and the West End (‘The River’, Royal Court," +
            " 2012, and The Circle in the Square, 2014; ‘Old Times’, Harold Pinter Theatre, 2013), numerous TV (BBC1 and Channel 4) and radio documentaries" +
            " and several other artistic projects. He was shortlisted for the 2015 Transmission Prize for the communication of ideas. He is a part-time chair" +
            " in psychology at Durham University, UK, where he leads the interdisciplinary Hearing the Voice project, investigating the phenomenon of " +
            "auditory verbal hallucinations.\n"
    });

    await Author.create({
        authorID: 6,
        name: "George R.R.",
        surname: "Martin",
        picture: "/authors/1.jpg",
        biography: "George R.R. Martin is the globally bestselling author of many fine novels, including A Game of Thrones, A Clash of Kings, A" +
            " Storm of Swords, A Feast for Crows, and A Dance with Dragons, which together make up the series A Song of Ice and Fire, on which HBO " +
            "based the world’s most-watched television series, Game of Thrones. Other works set in or about Westeros include The World of Ice and " +
            "Fire, and A Knight of the Seven Kingdoms. His science fiction novella Nightflyers has also been adapted as a television series; and he " +
            "is the creator of the shared-world Wild Cards universe, working with the finest writers in the genre. He lives in Santa Fe, New Mexico."
    });

    await Author.create({
        authorID: 7,
        name: "Lauren",
        surname: "Wilkinson",
        picture: "/authors/1.jpg",
        biography: "Lauren Wilkinson earned an MFA in Fiction and Literary Translation from Columbia University, and has taught writing at Columbia" +
            " and the Fashion Institute of Technology. She was a 2013 Center for Fiction Emerging Writer’s Fellow, and has also received support " +
            "from the MacDowell Colony and the Djerassi Resident Artists Program. Lauren lives in New York. American Spy is her first novel."
    });
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

    await WrittenBy.create({
        ISBN: "1984822179",
        authorID: 2
    });

    await WrittenBy.create({
        ISBN: "1481449478",
        authorID: 3
    });

    await WrittenBy.create({
        ISBN: "0525436146",
        authorID: 4
    });

    await WrittenBy.create({
        ISBN: "006223790",
        authorID: 5
    });

    await WrittenBy.create({
        ISBN: "9780553381689",
        authorID: 6
    });

    await WrittenBy.create({
        ISBN: "0812998952",
        authorID: 6
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
    });

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

    await Review.create({
        reviewID: 3,
        title: "Praise for Normal People",
        text: "\"I went into a tunnel with this book and didn’t want to come out. Absolutely engrossing and surprisingly heartbreaking " +
            " with more depth, subtlety, and insight than any one novel deserves.\”—Stephanie Danler, author of Sweetbitter",
        ISBN: "1984822179"
    });

    await Review.create({
        reviewID: 4,
        title: "12 Best Books of Spring",
        text: "\"Arguably the buzziest novel of the season, Sally Rooney’s elegant sophomore effort . . . is a worthy successor " +
            " to Conversations with Friends. Here, again, she unflinchingly explores class dynamics and young love with wit and " +
            "nuance.\”—The Wall Street Journal",
        ISBN: "1984822179"
    });

    await Review.create({
        reviewID: 5,
        title: "A surprise from the author of Chocolat",
        text: "The Gospel of Loki is a charming novel, told with snark, wit and familiarity. Harris’s voice of Loki is an addictive thing, " +
            "a pleasure to consume. While some may be most familiar with the Norse gods from the Marvel films, Harris draws the characters" +
            " magnificently from their original inspirations and makes them her own",
        ISBN: "1481449478"
    });

    await Review.create({
        reviewID: 6,
        title: "10 Best Books of the Year\n",
        text: "\“Powerful. . . . There There has so much jangling energy and brings so much news from a distinct corner of American life that" +
            " it’s a revelation.\” —The New York Times ",
        ISBN: "0525436146"
    });


    await Review.create({
        reviewID: 7,
        title: "Must read",
        text: "Fierce, angry, funny, heartbreaking—Tommy Orange’s first novel is a wondrous and shattering portrait of an America few of us have " +
            "ever seen, and it introduces a brilliant new author at the start of a major career.",
        ISBN: "0525436146"
    });

    await Review.create({
        reviewID: 8,
        title: "Fascinating",
        text: "Pieces of Light is utterly fascinating and superbly written. I learned more about memory from this book than any other." +
            " There are few science books around of this class. ",
        ISBN: "006223790"
    });

    await Review.create({
        reviewID: 9,
        title: "Combining science and literature",
        text: "His examination is welcoming and accessible to lay readers. His analysis is wide-ranging . . . He also covers a wide swath" +
            " of literary and historical ground . . . A refreshingly social take on an intensely personal experience.",
        ISBN: "006223790"
    });

    await Review.create({
        reviewID: 10,
        title: "Another world to be drawn into",
        text: "Reminiscent of T. H. White’s The Once and Future King, this novel is an absorbing combination of the mythic, " +
            "the sweepingly historical, and the intensely personal.",
        ISBN: "9780553381689"
    });

    await Review.create({
        reviewID: 11,
        title: "Colossal, staggering",
        text: "Many fans of sword-and-sorcery will enjoy the epic scope of this book, something of a change of pace for Martin," +
            " who has spent the last decade working for television and who has long been honored for his award-winning stories " +
            "(e.g., ‘Sandkings’). Still, to my mind, this opening installment suffers from one-dimensional characters and less than memorable imagery.",
        ISBN: "9780553381689"
    });

    await Review.create({
        reviewID: 12,
        title: "A complex and powerful work",
        text: "For the novel’s engaging intelligence and serious reckoning with the world’s postwar order, Wilkinson deserves the comparisons " +
            "to John le Carré she’s already receiving. But in bringing a virtually unheard-from fictional viewpoint to espionage literature, she " +
            "has reinvigorated the genre..",
        ISBN: "0812998952"
    });

    await Review.create({
        reviewID: 13,
        title: "Praise for American Spy",
        text: "Echoing the stoic cynicism of Hurston and Ellison, and the verve of Conan Doyle, American Spy lays our complicities—political, " +
            "racial, and sexual—bare. Packed with unforgettable characters, it’s a stunning book, timely as it is timeless.",
        ISBN: "0812998952"
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
    });

    await GenreTheme.create({
        genreID: 1,
        themeID: 2
    });

    await GenreTheme.create({
        genreID: 1,
        themeID: 3
    });
}

exports.createDatabase = function (force=false, populateItNow=false) {

    return new Promise( async (resolve, reject) => {

        if(force === false && populateItNow === true)
            reject("It is impossible to fill up an existing database, if you want to repopulate it," +
                "please use force = true");

        await database.init(force);

        if(populateItNow) {
            await createUsers();
            await createMainGenres();
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