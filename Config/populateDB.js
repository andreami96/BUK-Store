const database = require('../Model/sequelize');
const { User, Book, MainGenre, Genre, Theme, BookTheme, Author, WrittenBy, Event, SimilarTo, Review, GenreTheme, Reservation, HomeCarousel, GenericPage, FavouriteReadings } = database;

async function createUsers() {

    await User.create({
        id: "072f34b1-7fe6-4ae5-84a8-ca1e0925adb7",
        name: "Mario",
        surname: "Rossi",
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
        title: "Didactic",
        picture: "/images/mainGenres/didactic.jpg"
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
        title: "Novel",
        picture: "/genres/novel.jpg",
        mainGenreID: 1,
        description: "A novel is a long, fictional narrative which describes intimate human experiences. The novel in the modern era usually makes use of a literary prose style. The development of the prose novel at this time was encouraged by innovations in printing, and the introduction of cheap paper in the 15th century.\n" +
            "\n" +
            "The entire genre has been seen as having \"a continuous and comprehensive history of about two thousand years\", with its origins in classical Greece and Rome, in medieval and early modern romance, and in the tradition of the Italian renaissance novella."
    });

    await Genre.create({
        genreID: 2,
        title: "Science fiction",
        picture: "/genres/science-fiction.jpg",
        mainGenreID: 1,
        description: "Often abbreviated Sci-Fi, Science fiction has been called the \"literature of ideas\". It typically deals with imaginative and futuristic concepts such as advanced science and technology, time travel, parallel universes, fictional worlds, space exploration, and extraterrestrial life. Science fiction often explores the potential consequences of scientific innovations.\n" +
            "\n" +
            "The genre is related to fantasy, horror, and superhero fiction, and includes many subgenres. However its exact definition has long been disputed among authors, critics, and scholars." +
            "\n\nScience fiction's great rise in popularity during the 20th century is closely tied to the popular respect paid to science, as well as the rapid pace of technological innovation and new inventions. Science fiction has often predicted scientific and technological progress."
    });

    await Genre.create({
        genreID: 3,
        title: "Crime fiction",
        picture: "/genres/crime-fiction.jpg",
        mainGenreID: 1,
        description: "Crime fiction is a literary genre that fictionalises crimes, their detection, criminals, and their motives. It is usually distinguished from mainstream fiction and other genres such as historical fiction or science fiction, but the boundaries are indistinct." +
            "Crime fiction has multiple subgenres, including detective fiction (such as the whodunit), courtroom drama, hard-boiled fiction and legal thrillers. Most crime drama focuses on crime investigation and does not feature the court room. Suspense and mystery are key elements that are nearly ubiquitous to the genre." +
            "Books in this genre provide unique psychological impacts and enable readers to become mediated witnesses through identifying with eyewitnesses to a crime."
    });

    await Genre.create({
        genreID: 7,
        title: "Essay",
        picture: "/genres/essay.jpg",
        mainGenreID: 2,
        description: "An essay is, generally, a piece of writing that gives the author's own argument. Essays have traditionally been sub-classified as formal and informal. Formal essays are characterized by \"serious purpose, dignity, logical organization, length,\" whereas the informal essay is characterized by \"the personal element (self-revelation, individual tastes and experiences, confidential manner), humor, graceful style, rambling structure, unconventionality or novelty of theme,\" etc.\n" +
            "\n" +
            "Essays are commonly used as literary criticism, political manifestos, learned arguments, observations of daily life, recollections, and reflections of the author. Almost all modern essays are written in prose, but works in verse have been dubbed essays as well."
    });

    await Genre.create({
        genreID: 9,
        title: "Dialogue",
        picture: "/genres/dialogue.jpg",
        mainGenreID: 2,
        description: "Dialogue is a written or spoken conversational exchange between two or more people, and a literary and theatrical form that depicts such an exchange. As a narrative, philosophical or didactic device, it is chiefly associated in the West with the Socratic dialogue as developed by Plato, but antecedents are also found in other traditions including Indian literature."
    });

    await Genre.create({
        genreID: 10,
        title: "Epic",
        picture: "/genres/epic.jpg",
        mainGenreID: 3,
        description: "An epic poem, epic, epos, or epopee is a lengthy narrative poem, ordinarily involving a time beyond living memory in which occurred the extraordinary doings of the extraordinary men and women who, in dealings with the gods or other superhuman forces, gave shape to the moral universe that their descendants, the poet and his audience, must understand to understand themselves as a people or nation." +
            "Originating before the invention of writing, primary epics were composed by bards who used complex rhetorical and metrical schemes by which they could memorize the epic as received in tradition and add to the epic in their performances."
    });

    await Genre.create({
        genreID: 11,
        title: "Satire",
        picture: "/genres/satire.jpg",
        mainGenreID: 3,
        description: "In satirical books vices, follies, abuses, and shortcomings are held up to ridicule, ideally with the intent of shaming individuals, corporations, government, or society itself into improvement. Although satire is usually meant to be humorous, its greater purpose is often constructive social criticism, using wit to draw attention to both particular and wider issues in society.\n" +
            "A feature of satire is strong irony or sarcasm — \"in satire, irony is militant\" — but parody, burlesque, exaggeration, juxtaposition, comparison, analogy, and double entendre are all frequently used in satirical speech and writing. This \"militant\" irony or sarcasm often professes to approve of (or at least accept as natural) the very things the satirist wishes to attack."
    });

    await Genre.create({
        genreID: 12,
        title: "Tragedy",
        picture: "/genres/tragedy.jpg",
        mainGenreID: 4,
        description: "Tragedy is a form of drama based on human suffering that invokes an accompanying catharsis or pleasure in audiences. While many cultures have developed forms that provoke this paradoxical response, the term tragedy often refers to a specific tradition of drama that has played a unique and important role historically in the self-definition of Western civilisation. That tradition has been multiple and discontinuous, yet the term has often been used to invoke a powerful effect of cultural identity and historical continuity.\n"
    });

    await Genre.create({
        genreID: 13,
        title: "Comedy",
        picture: "/genres/comedy.jpg",
        mainGenreID: 4,
        description: "In a modern sense, comedy refers to any discourse or work generally intended to be humorous or amusing by inducing laughter, especially in theatre, television, film, stand-up comedy, or any other medium of entertainment. The origins of the term are found in Ancient Greece. In the Athenian democracy, the public opinion of voters was influenced by the political satire performed by the comic poets at the theaters. The theatrical genre of Greek comedy can be described as a dramatic performance which pits two groups or societies against each other in an amusing agon or conflict. A revised view characterizes the essential agon of comedy as a struggle between a relatively powerless youth and the societal conventions that pose obstacles to his hopes." +
            "In this struggle, the youth is understood to be constrained by his lack of social authority, and is left with little choice but to take recourse in ruses which engender very dramatic irony which provokes laughter."
    });

}

async function createThemes() {

    await Theme.create({
        themeID: 1,
        title: "Crime",
        picture: "/themes/crime.jpg",
        description: "Il giallo è un genere di successo di narrativa di consumo nato verso la metà del XIX secolo e sviluppatosi nel Novecento"
    });

    await Theme.create({
        themeID: 2,
        title: "Love",
        picture: "/themes/love.jpg",
        description: "L'amore è il motore che muove l'uno verso l'altro, è forza gravitazionale esercitata su tutti noi"
    });

    await Theme.create({
        themeID: 3,
        title: "War",
        picture: "/themes/war.jpg",
        description: "War is peace."
    });

    await Theme.create({
        themeID: 4,
        title: "Digital life",
        picture: "/themes/digital.jpg",
        description: "Bella vita nei computer quantistici"
    });

    await Theme.create({
        themeID: 5,
        title: "Russia",
        picture: "/themes/russia.jpg",
        description: "Dasvidania, stronzi"
    });

    await Theme.create({
        themeID: 6,
        title: "Politics",
        picture: "/themes/politics.jpg",
        description: "blabla"
    });

}

async function createBooks() {

    await Book.create({
        ISBN: "8845282678",
        title: "La verità sul caso Harry Quebert",
        picture: "/books/8845282678.jpg",
        abstract: "Estate 1975; Nola Kellergan, una ragazzina di 15 anni, scompare misteriosamente nella tranquilla cittadina di Aurora, New Hampshire. " +
            "Le ricerche della polizia non danno alcun esito. Primavera 2008, New York. Marcus Goldman, giovane scrittore di successo, sta vivendo uno dei rischi del suo mestiere: " +
            "è bloccato, non riesce a scrivere una sola riga del romanzo che da lì a poco dovrebbe consegnare al suo editore. " +
            "Ma qualcosa di imprevisto accade nella sua vita: il suo amico e professore universitario Harry Quebert, " +
            "uno degli scrittori più stimati d'America, viene accusato di avere ucciso la giovane Nola Kellergan. " +
            "Il cadavere della ragazza viene infatti ritrovato nel giardino della villa dello scrittore, a Goose Cove, " +
            "poco fuori Aurora, sulle rive dell'oceano. Convinto dell'innocenza di Harry Quebert, Marcus Goldman abbandona " +
            "tutto e va nel New Hampshire per condurre la sua personale inchiesta. Marcus, dopo oltre trent'anni deve " +
            "dare risposta a una domanda: chi ha ucciso Nola Kellergan? E, naturalmente, deve scrivere un romanzo di grande successo.",
        interview: "This is a test insterview",
        availableQuantity: 10,
        price: 8.41,
        genreID: 1,
        year: 2014,
        editor: "Bompiani",
        pageNumber: 775,
        originalLanguage: "Francese"
    });

    await Book.create({
        ISBN: "9788893440615",
        title: "Il libro degli Dei",
        picture: "/books/9788893440615.jpg",
        abstract: "Stasya non sa bene l'italiano e ride senza motivo e non sta leggendo quello che sto srivendo." +
            "Stanislava Fedorova non sa scrivere una mail in maniera corretta. Continua a ridere senza nessun motivo" +
            "Stranamente non ha battuto i pugni sul tavolo. E' incredibile che non se ne sia ancora accorta" +
            "Stasya guarda il mio schermo ma non legge quello che scrivo, è proprio stronza",
        interview: "",
        availableQuantity: 1,
        price: 10,
        genreID: 1,
        year: 1995,
        editor: "Stasya",
        pageNumber: 6666,
        originalLanguage: "Tobagoniano"
    });

    await Book.create({
        ISBN: "1984822179",
        title: "Normal People",
        picture: "/books/normal_people.jpg",
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
        backgroundPicture: "/books/background/got.jpeg",
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
        ISBN: "9788804668428",
        title: "Il Maestro e Margherita",
        picture: "/books/Il-Mastro-e-Margherita-copertina-394x600.jpg",
        backgroundPicture: "/books/background/begemot.jpg",
        abstract: "Nella Mosca staliniana, popolata di stupidi, di burocrati e di privilegiati per i quali truffa, ipocrisia e delazione sono come una seconda natura, giunge Satana in persona, sotto le spoglie di Woland, esperto di magia nera. Da quel momento bizzarri e tragicomici imprevisti si abbattono su piccoli funzionari ed esponenti della Mosca letteraria e teatrale: la città ne viene sconvolta.\n" +
            "Solo al Maestro, uno scrittore emarginato e incompreso a cui editori e critici hanno rifiutato di pubblicare un romanzo sul dramma di Pilato, e alla sua infelice amata, Margherita, Satana-Woland offrirà, in un incontro faustiano, un’esistenza finalmente serena.",
        interview: "",
        availableQuantity: 8,
        price: 12.00,
        genreID: 2,
        year: 1967,
        editor: "Mondadori",
        pageNumber: 546,
        originalLanguage: "Russian"
    });

    await Book.create({
        ISBN: "9781405924382",
        title: "This Book Loves You",
        picture: "/books/pewdiepie.jpg",
        backgroundPicture: "/books/background/pewds-style.jpg",
        abstract: "\"This Book Loves You\" is a collection of beautifully illustrated inspirational sayings written by PewDiePie, the most subscribed YouTuber in the world with 39 million fans and more than 10 billion views. In \"This Book Loves You,\" PewDiePie delivers advice and wisdom that everyone can use--or at least everyone willing to give up and stop caring. If all else fails, remember: \"Don t be yourself. Be a pizza. Everyone loves pizza.\" Imagine what a chilled-out and wonderful human being people would think you were if you lived by the simple principle \"You can never fail if you never try.\" Your wasted life would be an inspiration to others. Think of all the pointless, unhappy striving you could simply give up. Throw away that guitar! Give up on your dreams! Embrace your astounding mediocrity.",
        interview: "This book is a great chance for me to reach my audience in a new way. The original idea actually came from my fans via Twitter, so I really think they are going to love it\n",
        availableQuantity: 200,
        price: 12.30,
        genreID: 10,
        year: 2015,
        editor: "Penguin",
        pageNumber: 240,
        originalLanguage: "English"
    });

    await Book.create({
        ISBN: "2081297892",
        title: "Les Mystères de la gauche",
        picture: "/books/la-gauche-michea.jpg",
        backgroundPicture: "/books/background/la-gauche-background.jpg",
        abstract: "\"Les Mystères de la gauche\" is a critique of the Left which, Michéa says, has accepted capitalism and its associated liberal values and has thus become identical to the Right. In addition it tries to hide this betrayal by focusing on ‘societal’ (civil rights) issues rather than ‘social’ (anti-capitalist) struggles that have more meaning for the great mass of working people. Does the Left constitute the final stage of capitalism? Thus the slogan that sums up his position: \"Think with the Left, against the Left\".",
        interview: "",
        availableQuantity: 3,
        price: 14,
        genreID: 12,
        year: 2015,
        editor: "Penguin",
        pageNumber: 240,
        originalLanguage: "French"
    });

    await Book.create({
        ISBN: "8852220550",
        title: "Le avventure di Winnie the Pooh",
        picture: "/books/winniePooh.jpg",
        backgroundPicture: "/books/background/la-gauche-background.jpg",
        abstract: "Le storie più belle dei personaggi Disney più amati, illustrate a colori con le immagini tratte dai film e dalle serie TV. Una collana ricca di titoli e di fantasia. Età di lettura: da 5 anni.",
        interview: "Un ascensore è un impianto in grado di sollevare persone da un piano all'altro di un edificio o da livelli diversi di una costruzione o di una struttura. Un ascensore è solitamente costituito da una cabina che contiene i passeggeri e che viene sollevata da un motore elettrico che agisce su funi alle quali la cabina è agganciata; alcuni ascensori sono azionati da pistoni telescopici che sollevano e fanno discendere l'abitacolo. Un ascensore il cui uso sia destinato al sollevamento di merci e oggetti è chiamato \"montacarichi\".",
        availableQuantity: 1000,
        price: 5.86,
        genreID: 13,
        year: 2015,
        editor: "Disney Libri",
        pageNumber: 240,
        originalLanguage: "Italiano"
    });

    await Book.create({
        ISBN: "0440129710",
        title: "Nuclear War Survival Skills",
        picture: "/books/51Tc4xXuV1L.jpg",
        backgroundPicture: "/books/background/nuc.jfif",
        abstract: "There are a number of do-it-yourself guides to civil defence available, but most seem to be aimed at hard-core survivalists who have crack outdoor skills, and lots of specialized equipment. This book is very different and is written for the average citizen by a former U.S. Army officer, Major Cresson Kearny, field geologist and civil engineer who built and field-tested the \"expedient\" shelters described within while still employed at the U.S. Department of Energy's Oak Ridge National Laboratory.",
        interview: "We have focused on two great challenges. Firstly, how to dramatically reduce carbon emissions within urgent time scales, and secondly, to enable billions of people who lack access to electricity to gain access to modern energy services. These two aims have one thing in common: the energy we use to power our world. It is somewhat extraordinary that half of the people in the world currently lack access to enough electricity to live the modern life we take for granted. A lot of the strategies that have been put forward for climate mitigation focus on 100% renewable energy sources (RES) as being the goal, and often include very large assumptions in relation to energy efficiency, for example a 40% reduction in the energy that we use today. I just cannot reconcile with that, because it means that poor people stay poor. If half the people in the world were to have access to a reasonable amount of electricity this would probably mean a doubling or tripling in existing demand. Not only do we need to entirely replace our existing fossil fuel infrastructure within decades, but also to double or triple it. So, our position is that to meet these challenges, we need to use all of the tools at our disposal and there is really no need to exclude nuclear energy from that conversation.",
        availableQuantity: 1000,
        price: 12.86,
        genreID: 7,
        year: 2001,
        editor: "KnowledgePublications",
        pageNumber: 420,
        originalLanguage: "English"
    });
}

async function createBookTheme() {
    await BookTheme.create({
        ISBN: "8845282678",
        themeID: 1
    });

    await BookTheme.create({
        ISBN: "8852220550",
        themeID: 3
    });

    await BookTheme.create({
        ISBN: "8852220550",
        themeID: 5
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

    await BookTheme.create({
        ISBN: "9781405924382",
        themeID: 4
    });

    await BookTheme.create({
        ISBN: "9788804668428",
        themeID: 5
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

    await Author.create({
        authorID: 8,
        name: "Jean-Claude",
        surname: "Michéa",
        picture: "/authors/michea.jpg",
        backgroundPicture: "/authors/background/michea-bg.jpg",
        biography: "Jean Claude Michéa (b. 1950) is a French philosopher and Left-wing activist who has written extensively on the plight of the European Left since the 1970s. Taking inspiration from George Orwell and others like Rosa Luxemburg, he is well-known in Europe for taking strong positions not only against capitalism, individualism and neoliberalism, but also, and more controversially, for his denunciation of the ‘official’ currents and parties of the Left and their vapid intelligentsia. These, he says, have lost their anti-capitalist convictions and have inevitably distanced themselves from the masses generally and the working class in particular, leading to the growth of the extreme right."
    });

    await Author.create({
        authorID: 9,
        name: "Michail",
        surname: "Bulgakov",
        picture: "/authors/bulgakov.jpg",
        backgroundPicture: "/authors/background/bulgakov-bg.jpg",
        biography: "Mikhail Afanasievich Bulgakov was Russian writer born in Kiev, the capital of Ukraine, on May 15. 1891. His father was working as an assistant professor at the Theological Academy. He was one of seven children in his family. In his young age, he was drawn in theater. He liked to write comedies, which his family acted out.\n" +
            "\n" +
            "After finishing Gymnasium in 1909, Bulgakov entered the Medical School of Kiev University and he graduating in 1916. Then, he was a physician at the Military Hospital in Kiev.\n" +
            "\n" +
            "He married Tatyana Lappa in 1913. Tatiana moved with him after graduation to provincial villages and there he practiced medicine.\n" +
            "\n" +
            "During the First World War, he volunteered as a medical doctor with the Red Cross. In front, he was injured twice. Because he was suffering a chronic pain, he received a morphine and then he became addicted. In 1918 he solves the addiction and never used morphine again. About that period of his life, he wrote a book and he is released in 1926. About his doctor experience, he wrote two books: \"Notes on Cuffs\" and \"Notes of a Young Country Doctor.\"\n" +
            "\n" +
            "In 1918 Bulgakov returned to Kiev at the end of World War I. In that time in Russia was beginning of the Civil War. In Kiev, he opened a private practice. Next year in February he was mobilized by the Ukrainian People's Army as a physician. In that period, he became very ill. He barely survives typhus. In Northern Caucasus, he was working as a journalist. He never leaves Russia while most of his family emigrated to Paris.\n" +
            "\n" +
            "His most famous works are: \"The Master and Margarita\" - a masterpiece of the 20th century, \"The Heart of a Dog\", \"The Fatal Egg\", \"The White Guard\", \"Great Soviet Short Stories\", \"A Dead Man's Memoir\"...\n" +
            "\n" +
            "He dies at Moscow, March 10, 1940."
    });

    await Author.create({
        authorID: 10,
        name: "Pew",
        surname: "DiePie",
        picture: "/authors/pewdiepie.jpg",
        biography: "Known online as PewDiePie, Felix Arvid Ulf Kjellberg is the internet’s biggest star — he has a record-breaking 96 million subscribers to his YouTube channel, and over 21 billion views. The PewDiePie channel is best known for its irreverent gaming content, shot in a “Let’s Play” style — videos of Kjellberg playing video games while giving an expletive-strewn running commentary.\n" +
            "Kjellberg was born and raised in Gothenburg, Sweden. He was born to Lotta Kristine Johanna and Ulf Christian Kjellberg and grew up with his older sister Fanny. His mother, a former CIO, was named the 2010 CIO of the Year in Sweden. His father is also a corporate executive.\n" +
            "During his early schooling life, he was interested in art, and has detailed that he would draw popular video game characters such as Mario and Sonic the Hedgehog, as well as play video games on his Super Nintendo Entertainment System. During high school, he would skip classes to play video games at an Internet café with friends.\" He then went on to pursue a degree in industrial economics and technology management at Chalmers University of Technology, but left the university in 2011. While his reason for leaving Chalmers has often been reported as a want to focus on his YouTube career, in 2017, Kjellberg clarified that he left because of his lack of interest in his course, and perceived the idea of leaving university to pursue a YouTube career as “fucking stupid”.",
        backgroundPicture: "/authors/background/pewds-style.jpg"
    });

    await Author.create({
        authorID: 11,
        name: "Walt",
        surname: "Disney",
        picture: "/authors/walt.jpg",
        backgroundPicture: "/authors/background/walt.jpg",
        biography: "Walter Elias Disney, conosciuto come Walt Disney (Chicago, 5 dicembre 1901 – Burbank, 15 dicembre 1966), è stato un animatore, imprenditore, disegnatore, cineasta, doppiatore e produttore cinematografico statunitense.\n" +
            "\n" +
            "Annoverato tra i principali cineasti del XX secolo e riconosciuto come uno dei padri dei film d'animazione, ha inoltre creato Disneyland, il primo di una serie di parchi a tema; è altresì noto per la sua grande abilità nella narrazione di storie, come divo televisivo e uno dei grandi artisti del XX secolo nel campo dell'intrattenimento; il suo contributo più grande alla settima arte risiede probabilmente nell'aver portato allo stato dell'arte il rapporto fra immagine e musica.[senza fonte] Con i suoi collaboratori ha creato molti dei più famosi personaggi dei cartoni animati del mondo; uno di questi, Topolino, è secondo molti il suo alter ego.\n" +
            "\n" +
            "Ha il record del numero di premi Oscar vinti[1] ricevendo in 34 anni di carriera, per i suoi cortometraggi e documentari, 59 nomination e 26 premi di cui 4 onorari alla carriera (nel 1932 per l'ideazione di Topolino, nel 1939 per Biancaneve e i sette nani, \"Riconosciuto come una significativa innovazione sullo schermo che ha affascinato milioni di persone ed è stato il pioniere in un importante campo dell'intrattenimento\" e due nel 1942 \"Per il notevole contributo allo sviluppo dell'uso del suono nei film attraverso la produzione di Fantasia\" e un Premio alla memoria Irving G. Thalberg). Nel 1956 ha vinto il David di Donatello per il miglior produttore straniero per Lilli e il vagabondo."
    });

    await Author.create({
        authorID: 12,
        name: "Kearny",
        surname: "Cresson",
        picture: "/authors/Cresson-Kearny.png",
        backgroundPicture: "/authors/background/f257fe868bccd014462255033f42e37f.jpg",
        biography: "Kearny attended Texas Military Institute in the 1930s, where he became the commanding officer of the cadet corps, a champion runner and rifle shot, and valedictorian of his class.[2] He attended Mercersburg Academy in Pennsylvania before earning a degree in civil engineering at Princeton University, graduating summa cum laude in 1937. He won a Rhodes Scholarship and went on to earn two degrees in geology at the University of Oxford. During the Sudeten Crisis he acted as a courier for an underground group helping anti-Nazis escape from Czechoslovakia.[3]"
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

    await WrittenBy.create({
        ISBN: "2081297892",
        authorID: 8
    });

    await WrittenBy.create({
        ISBN: "9781405924382",
        authorID: 10
    });

    await WrittenBy.create({
        ISBN: "9788804668428",
        authorID: 9
    });

    await WrittenBy.create({
        ISBN: "8852220550",
        authorID: 11
    });

    await WrittenBy.create({
        ISBN: "8852220550",
        authorID: 10
    });

    await WrittenBy.create({
        ISBN: "0440129710",
        authorID: 12
    });

}

async function createSimilarTo() {

    await SimilarTo.create({
        ParentISBN: "8845282678",
        ChildISBN: "0440129710"
    });

    await SimilarTo.create({
        ParentISBN: "8845282678",
        ChildISBN: "1481449478"
    });

    await SimilarTo.create({
        ParentISBN: "8845282678",
        ChildISBN: "0525436146"
    });

    await SimilarTo.create({
        ParentISBN: "8845282678",
        ChildISBN: "006223790"
    });

    await SimilarTo.create({
        ParentISBN: "8845282678",
        ChildISBN: "0812998952"
    });

    await SimilarTo.create({
        ParentISBN: "9788893440615",
        ChildISBN: "8845282678"
    });

    await SimilarTo.create({
        ParentISBN: "9788893440615",
        ChildISBN: "0440129710"
    });

    await SimilarTo.create({
        ParentISBN: "9788893440615",
        ChildISBN: "0812998952"
    });

    await SimilarTo.create({
        ParentISBN: "9788893440615",
        ChildISBN: "006223790"
    });

    await SimilarTo.create({
        ParentISBN: "9788893440615",
        ChildISBN: "0525436146"
    });

    await SimilarTo.create({
        ParentISBN: "9788893440615",
        ChildISBN: "1481449478"
    });

    await SimilarTo.create({
        ParentISBN: "9788893440615",
        ChildISBN: "1984822179"
    });

    await SimilarTo.create({
        ParentISBN: "9788893440615",
        ChildISBN: "8852220550"
    });

    await SimilarTo.create({
        ParentISBN: "9788804668428",
        ChildISBN: "8852220550"
    });

    await SimilarTo.create({
        ParentISBN: "9788804668428",
        ChildISBN: "1984822179"
    });

    await SimilarTo.create({
        ParentISBN: "9788804668428",
        ChildISBN: "1481449478"
    });

    await SimilarTo.create({
        ParentISBN: "9788804668428",
        ChildISBN: "0525436146"
    });

    await SimilarTo.create({
        ParentISBN: "9788804668428",
        ChildISBN: "006223790"
    });

    await SimilarTo.create({
        ParentISBN: "9788804668428",
        ChildISBN: "0812998952"
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

    await Review.create({
        reviewID: 14,
        title: "Praise for American Spy",
        text: "Credo che Winnie Pooh sia un libro che tutti dovrebbero leggere, prima o poi. Anzi, meglio prima e poi. Molti anni fa lo lessi e lo apprezzai per la sua semplicità, mentre oggi, rileggendolo, mi sono accorto dell'incredibile tesoro che è racchiuso in questi racconti. Divertenti al punto giusto, contengono qualcosa di molto più interessante della storia stessa per bambini; la genialità di alcune scene e personaggi farebbe impallidire il più abile dei romanzieri. Sicuramente un libro che tutti dovrebbero leggere!",
        ISBN: "8852220550"
    });

}

async function createEvents() {
    await Event.create({
        eventID: 1,
        address: "Galleria Vittorio Emanuele II, 20121 Milano",
        latitude: 45.466277,
        longitude: 9.189870,
        eventDate: "2019-06-30",
        title: "The life of Michail Bulgakov",
        description: "Meet the Author Michail Bulgakov at this event",
        ISBN: "9788804668428",
        picture: "/events/bulgakov-event.jpg"
    });

    await Event.create({
        eventID: 2,
        address: "Kungsportsavenyen 12, 41136 Göteborg",
        latitude: 57.701067,
        longitude: 11.973846,
        eventDate: "2019-06-29",
        title: "PewDiePie presents his new book",
        description: "Meet the #1 Youtuber in the world Felix Arvid Ulf Kjelberg, better known as PewDiePie." +
            "In his home town, Göteborg, he will present his new book",
        ISBN: "9781405924382",
        picture: "/events/pewdiepie-event.jpg"
    });

    await Event.create({
        eventID: 3,
        address: "Boulevard Raspail 15, 75007 Paris",
        latitude: 48.854392,
        longitude: 2.326291,
        eventDate: "2019-07-03",
        title: "The Left for Jean-Claude Michéa",
        description: "The perfect occasion to understand the thoughts behind Michéa's latest publication.",
        ISBN: "2081297892",
        picture: "/events/michea-event.jpg"
    });

    await Event.create({
        eventID: 4,
        address: "2127 West Bowler Street, 60612 Chicago",
        latitude: 41.871283,
        longitude: -87.679384,
        eventDate: "2019-07-03",
        title: "Joel Dicker in Chicago",
        description: "Meet the bestselling author at this special event in downtown Chicago. Italian food and beverage will be provided.",
        ISBN: "8845282678",
        picture: "/events/harry_quebert_event.jpg"
    });
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
    });

    await Reservation.create({
        reservationID: 2,
        shippingLocation: "Paese, TV",
        orderDate: "2019-05-01",
        arrivalDate: "2019-05-06",
        quantity: 20,
        userID: "072f34b1-7fe6-4ae5-84a8-ca1e0925adb7",
        ISBN: "8852220550"
    });
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

    await GenreTheme.create({
        genreID: 13,
        themeID: 3
    });

    await GenreTheme.create({
        genreID: 13,
        themeID: 5
    });
}

async function createHomeCarousel() {
    await HomeCarousel.create({
        carouselID: 1,
        ISBN: "9780553381689"
    });
}

async function createGenericPages() {
    await GenericPage.create({
        pageID: 1,
        pageName: "faq",
        body: "<!-- Navigation -->\n" +
            "<nav class=\"navbar\" >\n" +
            "</nav>\n" +
            "\n" +
            "<div class=\"banner-image\">\n" +
            "    <h1>\n" +
            "        Frequently Asked Questions\n" +
            "    </h1>\n" +
            "</div>\n" +
            "\n" +
            "    <div class=\"container mb-4\" id=\"general-info\">\n" +
            "\n" +
            "        <div class=\"row justify-content-start mb-5\">\n" +
            "            <div class=\"col-1\">\n" +
            "\n" +
            "            </div>\n" +
            "            <div class=\"col-11 questions-shortcut\" >\n" +
            "                <hr>\n" +
            "                <h4><a href=\"#Q1\">How do I register?</a></h4>\n" +
            "                <hr>\n" +
            "                <h4><a href=\"#Q2\">How do I find a book?</a></h4>\n" +
            "                <hr>\n" +
            "                <h4><a href=\"#Q3\">What is a book Genre?</a></h4>\n" +
            "                <hr>\n" +
            "                <h4><a href=\"#Q4\">What is a book Theme?</a></h4>\n" +
            "                <hr>\n" +
            "                <h4><a href=\"#Q5\">What is a book Event?</a></h4>\n" +
            "                <hr>\n" +
            "                <h4><a href=\"#Q6\">Why isn’t the site working properly?</a></h4>\n" +
            "                <hr>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "\n" +
            "        <div class=\"row justify-content-start\">\n" +
            "            <div class=\"col-1\">\n" +
            "\n" +
            "            </div>\n" +
            "            <div class=\"col-11\" id=\"Q1\">\n" +
            "                <h4>How do I register?</h4>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "\n" +
            "        <div class=\"row justify-content-center question-text\">\n" +
            "            <div class=\"col-10\">\n" +
            "                Fill out your name and email address on the account <a href=\"/signup.html\">registration form</a> to get started. We will send you an email to confirm your account. Then you will be able to <a href=\"/login.html\">login</a> and reserve books.\n" +
            "            </div>\n" +
            "        </div>\n" +
            "\n" +
            "        <div class=\"row justify-content-start mt-4\">\n" +
            "            <div class=\"col-1\">\n" +
            "\n" +
            "            </div>\n" +
            "            <div class=\"col-11\" id=\"Q2\">\n" +
            "                <h4>How do I find a book?</h4>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "\n" +
            "        <div class=\"row justify-content-center question-text\">\n" +
            "            <div class=\"col-10\">\n" +
            "                Go to the <a href=\"/catalogue/1\">catalogue</a> page and you will be prompted with all the books available in our bookstore. You can also add a filter on the theme or genre of the book you are looking for.\n" +
            "            </div>\n" +
            "        </div>\n" +
            "\n" +
            "        <div class=\"row justify-content-start mt-4\">\n" +
            "            <div class=\"col-1\">\n" +
            "\n" +
            "            </div>\n" +
            "            <div class=\"col-11\" id=\"Q3\">\n" +
            "                <h4>What is a book Genre?</h4>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "\n" +
            "        <div class=\"row justify-content-center question-text\">\n" +
            "            <div class=\"col-10\">\n" +
            "                A book Genre is a category of literary composition. Genres may be determined by literary technique, tone, content, or even (as in the case of fiction) length. The distinctions between genres and categories are flexible and loosely defined, often with subgroups.\n" +
            "                <br>Examples of main literary genres are: <a href=\"/mainGenres/1\">novel</a>, <a href=\"/mainGenres/2\">didactic</a>, <a href=\"/mainGenres/3\">poetry</a> and <a href=\"/mainGenres/4\">theatre</a> . If you are still curious about books genres check out the <a href=\"https://en.wikipedia.org/wiki/Literary_genre\" target=\"_blank\">Wikipedia definition</a>.\n" +
            "            </div>\n" +
            "        </div>\n" +
            "\n" +
            "\n" +
            "        <div class=\"row justify-content-start mt-4\">\n" +
            "            <div class=\"col-1\">\n" +
            "\n" +
            "            </div>\n" +
            "            <div class=\"col-11\" id=\"Q4\">\n" +
            "                <h4>What is a book Theme?</h4>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "\n" +
            "        <div class=\"row justify-content-center question-text\">\n" +
            "            <div class=\"col-10\">\n" +
            "                The most common contemporary understanding of theme is an idea or point that is central to a story, which can often be summed in a single word (for example, love, death, betrayal). Typical examples of themes of this type are conflict between the individual and society; coming of age; humans in conflict with technology; nostalgia; and the dangers of unchecked ambition.\n" +
            "                <br>If you are still curious about narrative genres check out the <a href=\"https://en.wikipedia.org/wiki/Theme_(narrative)\" target=\"_blank\">Wikipedia definition</a>.\n" +
            "            </div>\n" +
            "        </div>\n" +
            "\n" +
            "\n" +
            "        <div class=\"row justify-content-start mt-4\">\n" +
            "            <div class=\"col-1\">\n" +
            "\n" +
            "            </div>\n" +
            "            <div class=\"col-11\" id=\"Q5\">\n" +
            "                <h4>What is a book Event?</h4>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "\n" +
            "        <div class=\"row justify-content-center question-text\">\n" +
            "            <div class=\"col-10\">\n" +
            "                A book Event is an event where you have the chance to meet the author of a book and possibly buy a copy of the book that will be presented during such event. Further information about a specific event can be found inside the apposite page of the event.\n" +
            "                <br> Check out our <a href=\"/\">homepage</a> to see all the upcoming events.\n" +
            "            </div>\n" +
            "        </div>\n" +
            "\n" +
            "        <div class=\"row justify-content-start mt-4\">\n" +
            "            <div class=\"col-1\">\n" +
            "\n" +
            "            </div>\n" +
            "            <div class=\"col-11\" id=\"Q6\">\n" +
            "                <h4>Why isn’t the site working properly?</h4>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "\n" +
            "        <div class=\"row justify-content-center question-text\">\n" +
            "            <div class=\"col-10\">\n" +
            "                In order to use the Buk website you need to have JavaScript and your cookies settings enabled.\n" +
            "                <p>\n" +
            "                    <a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" target=\"_blank\">Still need some help?</a>\n" +
            "                </p>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "\n" +
            "    </div>\n" +
            "\n" +
            "<footer class=\"footer\">\n" +
            "    <div class=\"container\">\n" +
            "        <div class=\"row py-4\">\n" +
            "            <div class=\"col-md-3 col-sm-12 p-3\">\n" +
            "                <h6>About</h6>\n" +
            "                <p>Founded in 2019 by MiChi Studios, BUK is an online book store developed for the Hypermedia course at Politecnico di Milano</p>\n" +
            "            </div>\n" +
            "            <div class=\"col-md-3 col-sm-6 p-3\">\n" +
            "                <h6>Address</h6>\n" +
            "                <p>Viale Romagna 62<br>Buccinasco, Milano<br>United States of America</p>\n" +
            "            </div>\n" +
            "            <div class=\"col-md-2 col-sm-6 p-3\">\n" +
            "                <h6>Contact</h6>\n" +
            "                <a href=\"/contactUs.html\">Contact us</a><br>\n" +
            "            </div>\n" +
            "            <div class=\"col-md-2 col-sm-6 p-3\">\n" +
            "                <h6>Info</h6>\n" +
            "                <ul>\n" +
            "                    <li class=\"mb-2\"><a href=\"/FAQ.html\">FAQ</a></li>\n" +
            "                    <li class=\"mb-2\"><a href=\"/shipping.html\">Order & Shipping</a></li>\n" +
            "                </ul>\n" +
            "            </div>\n" +
            "            <div class=\"col-md-2 col-sm-6 p-3\">\n" +
            "                <h6>Follow us</h6>\n" +
            "                <a><i class=\"fab fa-facebook-f\"></i></a>\n" +
            "                <a><i class=\"fab fa-twitter\"></i></a>\n" +
            "                <a><i class=\"fab fa-instagram\"></i></a>\n" +
            "                <a><i class=\"fab fa-mastodon\"></i></a>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</footer>\n" +
            "\n" +
            "\n" +
            "<script src=\"./assets/js/navbar.js\"></script>"
    });

    await GenericPage.create({
        pageID: 2,
        pageName: "contact-us",
        body: "\n" +
            "<!-- Navigation -->\n" +
            "<nav class=\"navbar\" >\n" +
            "</nav>\n" +
            "\n" +
            "<div class=\"banner-image\">\n" +
            "    <h1>\n" +
            "        Contact Us\n" +
            "    </h1>\n" +
            "</div>\n" +
            "\n" +
            "<div class=\"container mb-4\" id=\"general-info\">\n" +
            "\n" +
            "    <div class=\"row\">\n" +
            "\n" +
            "        <div class=\"col-sm-4 team-card mb-4\">\n" +
            "            <img class=\"round-image img-fluid\" src=\"./assets/images/contactUs/luca2.jpg\" alt=\"Luca Napoletano\">\n" +
            "            <h2 class=\"mt-2\">Luca</h2>\n" +
            "            Hi! I'm Luca and my favourite book is <a href=\"/books/8845282678\">La verità sul caso Harry Quebert</a>.\n" +
            "        </div>\n" +
            "\n" +
            "        <div class=\"col-sm-4 team-card mb-4\">\n" +
            "            <img class=\"round-image img-fluid\" src=\"./assets/images/contactUs/andrea.jpg\" alt=\"Andrea Miotto\">\n" +
            "            <h2 class=\"mt-2\">Andrea</h2>\n" +
            "            Hi! I'm Andrea and my favourite book is <a href=\"/books/9788804668428\">The Master and Margarita</a>.\n" +
            "        </div>\n" +
            "\n" +
            "        <div class=\"col-sm-4 team-card mb-4\">\n" +
            "            <img class=\"round-image img-fluid\" src=\"./assets/images/contactUs/claudio.jpeg\" alt=\"Claudio Montanari\">\n" +
            "            <h2 class=\"mt-2\">Claudio</h2>\n" +
            "            Hi! I'm Claudio and my favourite book is <a href=\"/books/006223790\">Pieces of Light</a>.\n" +
            "        </div>\n" +
            "\n" +
            "    </div>\n" +
            "\n" +
            "</div>\n" +
            "\n" +
            "<footer class=\"footer\">\n" +
            "    <div class=\"container\">\n" +
            "        <div class=\"row py-4\">\n" +
            "            <div class=\"col-md-3 col-sm-12 p-3\">\n" +
            "                <h6>About</h6>\n" +
            "                <p>Founded in 2019 by MiChi Studios, BUK is an online book store developed for the Hypermedia course at Politecnico di Milano</p>\n" +
            "            </div>\n" +
            "            <div class=\"col-md-3 col-sm-6 p-3\">\n" +
            "                <h6>Address</h6>\n" +
            "                <p>Viale Romagna 62<br>Buccinasco, Milano<br>United States of America</p>\n" +
            "            </div>\n" +
            "            <div class=\"col-md-2 col-sm-6 p-3\">\n" +
            "                <h6>Contact</h6>\n" +
            "                <a href=\"/contactUs.html\">Contact us</a><br>\n" +
            "            </div>\n" +
            "            <div class=\"col-md-2 col-sm-6 p-3\">\n" +
            "                <h6>Info</h6>\n" +
            "                <ul>\n" +
            "                    <li class=\"mb-2\"><a href=\"/FAQ.html\">FAQ</a></li>\n" +
            "                    <li class=\"mb-2\"><a href=\"/shipping.html\">Order & Shipping</a></li>\n" +
            "                </ul>\n" +
            "            </div>\n" +
            "            <div class=\"col-md-2 col-sm-6 p-3\">\n" +
            "                <h6>Follow us</h6>\n" +
            "                <a><i class=\"fab fa-facebook-f\"></i></a>\n" +
            "                <a><i class=\"fab fa-twitter\"></i></a>\n" +
            "                <a><i class=\"fab fa-instagram\"></i></a>\n" +
            "                <a><i class=\"fab fa-mastodon\"></i></a>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</footer>\n" +
            "\n" +
            "\n" +
            "<!-- JQuery, Popper.js, Bootstrap -->\n" +
            "<script src=\"https://code.jquery.com/jquery-3.4.0.min.js\" integrity=\"sha256-BJeo0qm959uMBGb65z40ejJYGSgR7REI4+CW1fNKwOg=\" crossorigin=\"anonymous\"></script>\n" +
            "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>\n" +
            "<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\n" +
            "\n" +
            "<script src=\"./assets/js/navbar.js\"></script>"
    });

    await GenericPage.create({
        pageID: 3,
        pageName: "shipping",
        body: "<!-- Navigation -->\n" +
            "<nav class=\"navbar\" >\n" +
            "</nav>\n" +
            "\n" +
            "<div class=\"banner-image\">\n" +
            "    <h1>\n" +
            "        Order and Shipping Information\n" +
            "    </h1>\n" +
            "</div>\n" +
            "\n" +
            "<div class=\"container mb-4\" id=\"general-info\">\n" +
            "\n" +
            "    <div class=\"row justify-content-start mb-5\">\n" +
            "        <div class=\"col-1\">\n" +
            "\n" +
            "        </div>\n" +
            "        <div class=\"col-11 questions-shortcut\" >\n" +
            "            <hr>\n" +
            "            <h4><a href=\"#Q1\">When will my order be shipped?</a></h4>\n" +
            "            <hr>\n" +
            "            <h4><a href=\"#Q2\">How much do I have to pay for the delivery?</a></h4>\n" +
            "            <hr>\n" +
            "            <h4><a href=\"#Q3\">Can I choose day and/or time of delivery?</a></h4>\n" +
            "            <hr>\n" +
            "            <h4><a href=\"#Q4\">Which company will take care of the delivery?</a></h4>\n" +
            "            <hr>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "\n" +
            "\n" +
            "    <div class=\"row justify-content-start mt-5\">\n" +
            "        <div class=\"col-1\">\n" +
            "\n" +
            "        </div>\n" +
            "        <div class=\"col-11\" id=\"Q1\">\n" +
            "            <h4>When will my order be shipped?</h4>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "\n" +
            "    <div class=\"row justify-content-center question-text\">\n" +
            "        <div class=\"col-10\">\n" +
            "            The order will be shipped when all the products will be available. The shipping time can vary depending on the shipping option chosen:\n" +
            "            <br>\n" +
            "\n" +
            "            <ul>\n" +
            "                <li> <b>Standard Shipping:</b> 4/5 working days </li>\n" +
            "                <li> <b>Express Shipping:</b> 2/3 working days </li>\n" +
            "                <li> <b>Pick Up Shipping:</b> 4/5 working days </li>\n" +
            "            </ul>\n" +
            "            From the client personal area will be possible to follow the order status and, if still possible, remove items from the order.\n" +
            "        </div>\n" +
            "    </div>\n" +
            "\n" +
            "    <div class=\"row justify-content-start mt-5\">\n" +
            "        <div class=\"col-1\">\n" +
            "\n" +
            "        </div>\n" +
            "        <div class=\"col-11\" id=\"Q2\">\n" +
            "            <h4>How much do I have to pay for the delivery?</h4>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "\n" +
            "    <div class=\"row justify-content-center question-text\">\n" +
            "        <div class=\"col-10\">\n" +
            "            The cost of the delivery will vary depending both on the chosen shipping option and the order price:\n" +
            "            <br>\n" +
            "            <h5 class=\"mt-2 ml-1\">Standard Shipping</h5>\n" +
            "            <ul>\n" +
            "                <li>Free for order equal or above 19.90 €</li>\n" +
            "                <li>2.50 € for order below 19.90 €</li>\n" +
            "            </ul>\n" +
            "            <h5 class=\"mt-2 ml-1\">Express Shipping</h5>\n" +
            "            <ul>\n" +
            "                <li>3.90 € for order below 49.90 €</li>\n" +
            "                <li>2.00 € for order equal or above 49.90 €</li>\n" +
            "            </ul>\n" +
            "            <h5 class=\"mt-2 ml-1\">Pick Up Shipping</h5>\n" +
            "            <ul>\n" +
            "                <li>Free for order equal or above 29.90 €</li>\n" +
            "                <li>1.50 € for order below 29.90 €</li>\n" +
            "            </ul>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "\n" +
            "    <div class=\"row justify-content-start mt-5\">\n" +
            "        <div class=\"col-1\">\n" +
            "\n" +
            "        </div>\n" +
            "        <div class=\"col-11\" id=\"Q3\">\n" +
            "            <h4>Can I choose day and/or time of delivery?</h4>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "\n" +
            "    <div class=\"row justify-content-center question-text\">\n" +
            "        <div class=\"col-10\">\n" +
            "            Unfortunately, so far, is <b>not</b> possible to choose the exact day and time of the delivery.\n" +
            "            <br>\n" +
            "            After that all the books will be available for shipping you will receive a notification from the delivery company that will take care of your order. In such a way you will be able to track your order status in real time.\n" +
            "        </div>\n" +
            "    </div>\n" +
            "\n" +
            "\n" +
            "    <div class=\"row justify-content-start mt-5\">\n" +
            "        <div class=\"col-1\">\n" +
            "\n" +
            "        </div>\n" +
            "        <div class=\"col-11\" id=\"Q4\">\n" +
            "            <h4>Which company will take care of the delivery?</h4>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "\n" +
            "    <div class=\"row justify-content-center question-text\">\n" +
            "        <div class=\"col-10 \">\n" +
            "            We rely on several shipping companies in order to offer the best service possible to our customers. In particular, for national deliveries:\n" +
            "            <ul>\n" +
            "                <li><b>SDA</b></li>\n" +
            "                <li><b>Bartolini</b></li>\n" +
            "                <li><b>TNT</b></li>\n" +
            "            </ul>\n" +
            "\n" +
            "            While for international deliveries:\n" +
            "            <ul>\n" +
            "                <li><b>DHL</b></li>\n" +
            "                <li><b>FedEX</b></li>\n" +
            "            </ul>\n" +
            "\n" +
            "        </div>\n" +
            "    </div>\n" +
            "\n" +
            "\n" +
            "</div>\n" +
            "\n" +
            "<footer class=\"footer\">\n" +
            "    <div class=\"container\">\n" +
            "        <div class=\"row py-4\">\n" +
            "            <div class=\"col-md-3 col-sm-12 p-3\">\n" +
            "                <h6>About</h6>\n" +
            "                <p>Founded in 2019 by MiChi Studios, BUK is an online book store developed for the Hypermedia course at Politecnico di Milano</p>\n" +
            "            </div>\n" +
            "            <div class=\"col-md-3 col-sm-6 p-3\">\n" +
            "                <h6>Address</h6>\n" +
            "                <p>Viale Romagna 62<br>Buccinasco, Milano<br>United States of America</p>\n" +
            "            </div>\n" +
            "            <div class=\"col-md-2 col-sm-6 p-3\">\n" +
            "                <h6>Contact</h6>\n" +
            "                <a href=\"/contactUs.html\">Contact us</a><br>\n" +
            "            </div>\n" +
            "            <div class=\"col-md-2 col-sm-6 p-3\">\n" +
            "                <h6>Info</h6>\n" +
            "                <ul>\n" +
            "                    <li class=\"mb-2\"><a href=\"/FAQ.html\">FAQ</a></li>\n" +
            "                    <li class=\"mb-2\"><a href=\"/shipping.html\">Order & Shipping</a></li>\n" +
            "                </ul>\n" +
            "            </div>\n" +
            "            <div class=\"col-md-2 col-sm-6 p-3\">\n" +
            "                <h6>Follow us</h6>\n" +
            "                <a><i class=\"fab fa-facebook-f\"></i></a>\n" +
            "                <a><i class=\"fab fa-twitter\"></i></a>\n" +
            "                <a><i class=\"fab fa-instagram\"></i></a>\n" +
            "                <a><i class=\"fab fa-mastodon\"></i></a>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</footer>\n" +
            "<script src=\"./assets/js/navbar.js\"></script>\n"
    });
}

async function createFavouriteReadings() {
    await FavouriteReadings.create({
        favouriteID: 1,
        ISBN: "9781405924382"
    });

    await FavouriteReadings.create({
        favouriteID: 2,
        ISBN: "8852220550"
    });

    await FavouriteReadings.create({
        favouriteID: 3,
        ISBN: "9788804668428"
    });

    await FavouriteReadings.create({
        favouriteID: 4,
        ISBN: "0440129710"
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
            await createHomeCarousel();
            await createGenericPages();
            await createFavouriteReadings();
        }
        resolve();
    });

};