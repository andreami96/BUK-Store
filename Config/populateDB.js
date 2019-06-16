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

async function createAuthors() {
    await Author.create({
        authorID: 1,
        name: "Joël",
        surname: "Dicker",
        picture: "/authors/1.jpg",
        backgroundPicture: "/authors/background/nola.jpg",
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
        picture: "/authors/2.jpg",
        backgroundPicture: "/authors/background/sally-rooney.jpg",
        biography: "Sally Rooney was born in the west of Ireland in 1991. Her work has appeared in The New Yorker, The New York Times, " +
            "Granta and The London Review of Books. Winner of the Sunday Times Young Writer of the Year Award in 2017, she is the author " +
            "of Conversations with Friends and the editor of the Irish literary journal The Stinging Fly."
    });

    await Author.create({
        authorID: 3,
        name: "Joanne",
        surname: "Harris",
        picture: "/authors/3.jpg",
        backgroundPicture: "/authors/background/harris-quote.jpg",
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
        picture: "/authors/4.jpg",
        backgroundPicture: "/authors/background/777621261.jpg",
        biography: "Tommy Orange is faculty at the Institute of American Indian Arts MFA program. He is an enrolled member of the Cheyenne and " +
            "Arapaho Tribes of Oklahoma. He was born and raised in Oakland, California, and currently lives in Angels Camp, California."
    });

    await Author.create({
        authorID: 5,
        name: "Charles",
        surname: "Fernyhough",
        picture: "/authors/5.jfif",
        backgroundPicture: "/authors/background/HVContactBackgroundLight-1.png",
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
        picture: "/authors/6.jpeg",
        backgroundPicture: "/authors/background/25484.jpg",
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
        picture: "/authors/7.png",
        backgroundPicture: "/authors/background/r5igovj0lea50nipkpxe.jpeg",
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
        backgroundPicture: "/authors/background/disney.jpg",
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
        backgroundPicture: "/authors/background/nuclear.jpg",
        biography: "Kearny attended Texas Military Institute in the 1930s, where he became the commanding officer of the cadet corps, a champion runner and rifle shot, and valedictorian of his class.[2] He attended Mercersburg Academy in Pennsylvania before earning a degree in civil engineering at Princeton University, graduating summa cum laude in 1937. He won a Rhodes Scholarship and went on to earn two degrees in geology at the University of Oxford. During the Sudeten Crisis he acted as a courier for an underground group helping anti-Nazis escape from Czechoslovakia.[3]"
    });

    await Author.create({
        authorID: 13,
        name: "Joseph",
        surname: "Heller",
        picture: "/authors/13.jpg",
        backgroundPicture: "/authors/background/catch.jpg",
        biography: "Joseph Heller (May 1, 1923 – December 12, 1999) was an American author of novels, short stories, plays, and screenplays. His best-known work is the novel Catch-22, a satire on war and bureaucracy, whose title has become a synonym for an absurd or contradictory choice."
    });

    await Author.create({
        authorID: 14,
        name: "Galileo",
        surname: "Galilei",
        picture: "/authors/14.jpg",
        backgroundPicture: "/authors/background/great-minds-background-11.jpg",
        biography: "Galileo Galilei (February 15, 1564 to January 8, 1642) was an Italian astronomer, mathematician, physicist, philosopher and professor who made pioneering observations of nature with long-lasting implications for the study of physics. \n" +
            "\n" +
            "He also constructed a telescope and supported the Copernican theory, which supports a sun-centered solar system. Galileo was accused twice of heresy by the church for his beliefs, and wrote a number of books on his ideas. \n" +
            "\n" +
            "Galileo's contribution to our understanding of the universe was significant not only in his discoveries, but in the methods he developed and the use of mathematics to prove them. He played a major role in the scientific revolution and earned the moniker \"The Father of Modern Science.\""
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
        interview: "Your Web site says that you wrote The Truth About the Harry Quebert Affair because you wanted to try your hand at an \"American novel.\" Did you simply mean \"set in America\" or something else?\n" +
            "I simply wanted to place a work of fiction in a New England setting, a place I know well. Very quickly I realized that I was so familiar with the U.S. that I could allow myself to create an American town with American characters. \n" +
            "\n" +
            "Actually, this book helped me discover a part of myself: that I could surpass my origins and my writing language and re-create a part of the United States in French. \n" +
            "\n" +
            "It's impossible to read Harry Quebert without thinking of Lolita. How much — if at all — were you conscious of Nabokov's novel while writing your own?\n" +
            "The Lolita image came to me late. I was well into writing the book when I decided that Harry's character would have a relationship with a young girl. In my head I immediately made the link to Lolita, from which came my reference N-O-L-A, like L-O-L-I-T-A. However, having read Lolita when I was fifteen, I had an image which was much more naive than the image that hit me straight in the face when I reread the book a few months ago. I realized that we evolve with books, and that reading Lolita at age twenty-nine is a different experience from reading it at fifteen. \n" +
            "\n" +
            "Does either Harry Quebert or The Origin of Evil have a real-life counterpart?\n" +
            "Not at all. Nothing in the book or in the characters is based on anything real, anything experienced or a true event. That's precisely why I like fiction: you can invent everything. \n" +
            "\n" +
            "Like you, the novel's narrator is a young, attractive, and incredibly successful author. Do the parallels between Marcus Goldman and Joël Dicker go any deeper?\n" +
            "No, not at all. There is a little bit of me in each character. That's normal, since I'm the one who created them. \n" +
            "\n" +
            "But aside from our common love of running, there is no more Marcus in me than there is Harry, Jenny, Tamara, Robert, or Gahalowood. ",
        availableQuantity: 0,
        price: 8.41,
        genreID: 3,
        year: 2014,
        editor: "Bompiani",
        pageNumber: 775,
        originalLanguage: "Francese"
    });

    await Book.create({
        ISBN: "9788893440615",
        title: "Il libro dei Baltimore",
        picture: "/books/9788893440615.jpg",
        abstract: "Lo scrittore di successo Marcus Goldman scrive la storia della famiglia Goldman di Baltimore. Prima del drammatico evento che lui definisce la Tragedia esistevano due famiglie Goldman: i Goldman di Baltimore e i Goldman di Montclair. Di questi ultimi fa parte Marcus. Mentre i Baltimore sono famiglia ricca che vive in un lussuoso quartiere residenziale, i Montclair sono una famiglia modesta che vive in un piccolo appartamento. Marcus guarda con ammirazione ai Baltimore, sembrano la famiglia perfetta: lo zio Saul, avvocato di successo, la zia Anita, medico e donna affascinante, i cugini Hillel e Woody, il primo molto intelligente, il secondo un promettente campione di football. Poi qualcosa è cambiato, la famiglia si è disgregata.",
        interview: "Your Web site says that you wrote The Truth About the Harry Quebert Affair because you wanted to try your hand at an \"American novel.\" Did you simply mean \"set in America\" or something else?\n" +
            "I simply wanted to place a work of fiction in a New England setting, a place I know well. Very quickly I realized that I was so familiar with the U.S. that I could allow myself to create an American town with American characters. \n" +
            "\n" +
            "Actually, this book helped me discover a part of myself: that I could surpass my origins and my writing language and re-create a part of the United States in French. \n" +
            "\n" +
            "It's impossible to read Harry Quebert without thinking of Lolita. How much — if at all — were you conscious of Nabokov's novel while writing your own?\n" +
            "The Lolita image came to me late. I was well into writing the book when I decided that Harry's character would have a relationship with a young girl. In my head I immediately made the link to Lolita, from which came my reference N-O-L-A, like L-O-L-I-T-A. However, having read Lolita when I was fifteen, I had an image which was much more naive than the image that hit me straight in the face when I reread the book a few months ago. I realized that we evolve with books, and that reading Lolita at age twenty-nine is a different experience from reading it at fifteen. \n" +
            "\n" +
            "Does either Harry Quebert or The Origin of Evil have a real-life counterpart?\n" +
            "Not at all. Nothing in the book or in the characters is based on anything real, anything experienced or a true event. That's precisely why I like fiction: you can invent everything. \n" +
            "\n" +
            "Like you, the novel's narrator is a young, attractive, and incredibly successful author. Do the parallels between Marcus Goldman and Joël Dicker go any deeper?\n" +
            "No, not at all. There is a little bit of me in each character. That's normal, since I'm the one who created them. \n" +
            "\n" +
            "But aside from our common love of running, there is no more Marcus in me than there is Harry, Jenny, Tamara, Robert, or Gahalowood. ",
        availableQuantity: 2000,
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
        interview: "Twenty-eight-year-old Irish author Sally Rooney has been hailed as a \"Salinger for the Snapchat generation.\" Her first book, Conversations with Friends, was released in 2017, and after a rapturous reception in Europe, her latest novel, Normal People is available in the U.S. now. Together, both books have been nominated for many major literary awards, and this year, the deafening word-of-mouth buzz around Normal People has led Rooney’s work to become a kind of think-piece factory.",
        availableQuantity: 2000,
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
        interview: "Is it really possible that Joanne Harris - this brisk, rather beady Yorkshire lady with the formidable manner that must have held generations of schoolboys in check - invented gastromance? Can she really be the same Joanne Harris who wrote Chocolat, Blackberry Wine and Five Quarters of the Orange; quirky, sensuous books set in the French countryside, in which food dominates events as a token of love, a bargaining chip, a gesture of defiance?\n" +
            "\n" +
            "Her biggest triumph is still Chocolat, short-listed for the Whitbread (and recently transformed into an Oscar-nominated film - yes, it stank, but that was Miramax's fault), which became one of those novels that everyone seemed to be reading a few summers ago. A sleeper hit like Snow Falling on Cedars or Perfume, Chocolat was a dark, dreamy fairy-tale stuffed with loving descriptions of truffles and marzipan birds, upon which bikini dieters could safely binge.",
        availableQuantity: 6051,
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
        interview: "The title of Tommy Orange’s bold debut novel is a reference to Gertrude Stein’s line about the city of her childhood, Oakland, California: “there is no there there”, she wrote. Oakland happens also to be Orange’s home town and provides the setting for the book, which has attracted many admiring reviews in the US.\n" +
            "\n" +
            "The novel centres on the interconnected lives of a group of Native Americans – or Indians, as they call themselves, determined to reclaim a term more often used disparagingly. Orange, himself a member of the Cheyenne and Arapaho tribes of Oklahoma, deals not just with several centuries of oppression of the Native American community (which a brief, dryly witty prologue deals with in a devastatingly matter-of-fact way), but how rites and tradition can seem comically anachronistic in a world of “glass, metal, rubber, and wires, the speed, the hurtling masses” in which “the city took us in”. The book steers clear of the antique romance of the open plains; for that, as Orange wryly notes: “we have… Kevin Costner saving us, John Wayne slaying us [and] an Italian guy named Iron Eyes Cody playing our parts in movies”.",
        availableQuantity: 3000,
        price: 16.55,
        genreID: 1,
        year: 2019,
        editor: "Vintage",
        pageNumber: 344,
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
        interview: "Strict instructions are issued before interviewing George RR Martin: do not ask about The Winds of Winter, the sixth book in his A Song of Ice and Fire series, the one fans keep haranguing him about and Martin has been writing since 2011. Focus on Fire and Blood, his imagined history of the Targaryen dynasty, and all will be well. So I prepare for the interview with a certain amount of trepidation. Martin is probably one of the most famous novelists in the world. There are not many writers who find their every pronouncement picked over by the press, who have sold 90m copies of their books, who are instantly recognised in public. We’ve spoken before, back when A Game of Thrones was about to hit television screens; I’m one of those readers who feels slightly smug about loving the books before Ned Stark became Sean Bean, before Emilia Clarke became Daenerys Targaryen. But I know he has a reputation for irascibility, and I also really, really want to ask him about The Winds of Winter. As it turns out, Martin brings up the book himself, and is warm and expansive on topics from fame and fortune to his progress on the long-awaited novel.\n" +
            "\n" +
            "\n" +
            "Sign up for Bookmarks: discover new books in our weekly email\n" +
            " Read more\n" +
            "We start, though, with Fire and Blood, only the first half of a history that will span 300 years and acres of Aegons and Jaehaeryses. Martin admits he never planned to write it. Fire and Blood stems from a coffee-table book, The World of Ice and Fire, which was being pulled together by two “uber fans”, Elio M Garcia Jr and Linda Antonssen, in 2014. Martin was just going to “polish and expand the history a little, maybe fill in any holes” about various kings and battles. But he was having so much fun that those little additions ended up running to 350,000 words. “We had totally destroyed the entire concept of this book,” says Martin. “So that’s what this book is, or the first half of it: a history of the Targaryen kings.”\n" +
            "\n" +
            "Written in the voice of a maester of the citadel, Archmaester Gyldayn, a “crotchety old guy with strong opinions” who is telling his story hundreds of years after the events he’s chronicling, the structure allows Martin to play about with the unreliability of his narrators, as Gyldayn sorts through his primary sources. These include Mushroom, a brilliantly bawdy dwarf whose take on history errs towards the filthy.\n" +
            "\n" +
            "Martin has always loved popular history; Game of Thrones was loosely inspired by accounts of the wars of the Roses. “My model for this was the four-volume history of the Plantagenets that Thomas B Costain wrote in the 50s. It’s old‑fashioned history: he’s not interested in analysing socioeconomic trends or cultural shifts so much as the wars and the assignations and the murders and the plots and the betrayals, all the juicy stuff. Costain did a wonderful job on the Plantagenets so I tried to do that for the Targaryens.”",
        availableQuantity: 2025,
        price: 9.99,
        genreID: 1,
        year: 2002,
        editor: "Bantam",
        pageNumber: 704,
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
        interview: "I think one of the most interesting things about memory in relation to couples getting together is that there's this sense, this kind of pressure to agree on a shared representation of the past. You know, husbands and wives tend not to disagree about the past wholesale. They tend to come to a shared representation of what happened in the past. When people split up or couples get separated or divorced or whatever, those tensions about memory can come back to the surface, and you find out that people start to disagree and actually start to say, 'It never happened that way; it actually happened this way.'",
        availableQuantity: 2005,
        price: 17.96,
        genreID: 7,
        year: 2014,
        editor: "Harper Perennial",
        pageNumber: 320,
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
        interview: "About halfway through John le Carré's Tinker, Tailor, Soldier, Spy, its wise old hero George Smiley is discussing the inherent paradox of the cover stories that spies adopt. \"The more identities a man has,\" Smiley says, \"the more they express the person they conceal.\"\n" +
            "\n" +
            "This fan-dance of identity — with its many concealments and revelations — is central to American Spy, an excitingly sharp debut novel by the talented newcomer Lauren Wilkinson.\n" +
            "\n" +
            "Spanning three decades and leapfrogging from New York to the Caribbean to the West African nation of Burkina Faso, this literary thriller leads us into unfamiliar territory. It portrays a little known slice of American interventionism and it shows us the workings of the intelligence community through the eyes of an African-American woman.\n" +
            "\n" +
            "The book's heroine and narrator is Marie Mitchell, a one-time FBI agent, whose tale, like so many spy yarns, begins with an action sequence: An intruder breaks into her Connecticut home to murder her. With her young twin sons in tow, she flees to her mother's home in Martinique. And from there this smart, contradictory woman begins writing a letter to her sons explaining how she became a target, centering on two key periods of her life. This letter is the book we're reading.",
        availableQuantity: 2000,
        price: 20.90,
        genreID: 12,
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
        interview: "Simon McBurney has taken on some tough projects in his time. As the director of the theatre troupe Complicite, he had an unlikely hit with 2007's A Disappearing Number, a play that took maths as its theme. Then there was Shun-Kin, a tale of sadomasochistic love from 19th-century Japan. Revived to great acclaim two years ago, it featured a petulant puppet in the title role.\n" +
            "\n" +
            "But McBurney may now be facing his biggest challenge yet – adapting The Master and Margarita by Mikhail Bulgakov, a vicious satire of Soviet rule in which the devil arrives in Moscow and wreaks havoc. Completed in the 1930s, the novel, which regularly makes it into read-before-you-die lists, is a work of magical realism flitting between the devil's adventures with his giant cat in Stalinist Moscow, Jerusalem in the time of Pontius Pilate, and the fate of a Moscow novelist known as the Master who is trapped in a lunatic asylum, while Margarita, his lover and muse, flies above them all naked on a broomstick.",
        availableQuantity: 0,
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
        availableQuantity: 2660,
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
        interview: "In a recent book, Les mystères de la gauche: de l'idéal des Lumières au triomphe du capitalisme absolu (Paris: Climats,‎ 2013) [The Mysteries of the Left: From Enlightenment Ideals to the Triumph of Total Capitalism], he continues his critique of the Left which, he says, has accepted capitalism and its associated liberal values and has thus become identical to the Right. In addition it tries to hide this betrayal by focusing on ‘societal’ (civil rights) issues rather than ‘social’ (anti-capitalist) struggles that have more meaning for the great mass of working people. Does the Left constitute the final stage of capitalism? Thus the slogan that sums up his position: think with the Left, against the Left’.",
        availableQuantity: 2300,
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

    await Book.create({
        ISBN: "1451626657",
        title: "Catch-22",
        picture: "/books/catch22.jpg",
        backgroundPicture: "/books/background/catch.jpg",
        abstract: "Fifty years after its original publication, Catch-22 remains a cornerstone of American literature and one of the funniest—and most celebrated—books of all time. In recent years it has been named to “best novels” lists by Time, Newsweek, the Modern Library, and the London Observer. \n" +
            "\n" +
            "Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved. \n" +
            "\n" +
            "This fiftieth-anniversary edition commemorates Joseph Heller’s masterpiece with a new introduction by Christopher Buckley; a wealth of critical essays and reviews by Norman Mailer, Alfred Kazin, Anthony Burgess, and others; rare papers and photos from Joseph Heller’s personal archive; and much more. Here, at last, is the definitive edition of a classic of world literature.",
        interview: "Joseph Heller was born in Brooklyn in 1923. In 1961, he published Catch-22, which became a bestseller and, in 1970, a film. He went on to write such novels as Good as Gold, God Knows, Picture This, Closing Time, and Portrait of an Artist, as an Old Man. Heller died in 1999.",
        availableQuantity: 1000,
        price: 13.84,
        genreID: 11,
        year: 2001,
        editor: "Simon & Schuster",
        pageNumber: 544,
        originalLanguage: "English"
    });

    await Book.create({
        ISBN: "0520004507",
        title: "Dialogue Concerning the Two Chief World Systems",
        picture: "/books/gal.jpg",
        abstract: "Fifty years after its original publication, Catch-22 remains a cornerstone of American literature and one of the funniest—and most celebrated—books of all time. In recent years it has been named to “best novels” lists by Time, Newsweek, the Modern Library, and the London Observer. \n" +
            "\n" +
            "Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved. \n" +
            "\n" +
            "This fiftieth-anniversary edition commemorates Joseph Heller’s masterpiece with a new introduction by Christopher Buckley; a wealth of critical essays and reviews by Norman Mailer, Alfred Kazin, Anthony Burgess, and others; rare papers and photos from Joseph Heller’s personal archive; and much more. Here, at last, is the definitive edition of a classic of world literature.",
        interview: "I invented a telescope. I invented it so that i could see the stars and sun closer and better. I also used the scientific method. Making a hypothesis and testing it. It was a very complicated experiment.",
        availableQuantity: 1000,
        price: 30.21,
        genreID: 9,
        year: 1962,
        editor: "University of California Press",
        pageNumber: 524,
        originalLanguage: "Latin"
    });
}

async function createBookTheme() {
    await BookTheme.create({
        ISBN: "8845282678",
        themeID: 1
    });

    await BookTheme.create({
        ISBN: "8845282678",
        themeID: 2
    });

    await BookTheme.create({
        ISBN: "9788893440615",
        themeID: 1
    });

    await BookTheme.create({
        ISBN: "1984822179",
        themeID: 2
    });

    await BookTheme.create({
        ISBN: "1984822179",
        themeID: 6
    });

    await BookTheme.create({
        ISBN: "1481449478",
        themeID: 1
    });

    await BookTheme.create({
        ISBN: "1481449478",
        themeID: 3
    });

    await BookTheme.create({
        ISBN: "0525436146",
        themeID: 6
    });

    await BookTheme.create({
        ISBN: "9780553381689",
        themeID: 6
    });

    await BookTheme.create({
        ISBN: "9780553381689",
        themeID: 2
    });

    await BookTheme.create({
        ISBN: "006223790",
        themeID: 2
    });

    await BookTheme.create({
        ISBN: "0812998952",
        themeID: 3
    });

    await BookTheme.create({
        ISBN: "9788804668428",
        themeID: 3
    });

    await BookTheme.create({
        ISBN: "9788804668428",
        themeID: 5
    });

    await BookTheme.create({
        ISBN: "9781405924382",
        themeID: 4
    });

    await BookTheme.create({
        ISBN: "2081297892",
        themeID: 6
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
        ISBN: "1451626657",
        themeID: 3
    });

    await BookTheme.create({
        ISBN: "1451626657",
        themeID: 6
    });

    await BookTheme.create({
        ISBN: "0520004507",
        themeID: 6
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
        genreID: 1,
        themeID: 5
    });

    await GenreTheme.create({
        genreID: 1,
        themeID: 6
    });

    await GenreTheme.create({
        genreID: 7,
        themeID: 2
    });

    await GenreTheme.create({
        genreID: 12,
        themeID: 3
    });

    await GenreTheme.create({
        genreID: 2,
        themeID: 3
    });

    await GenreTheme.create({
        genreID: 2,
        themeID: 5
    });

    await GenreTheme.create({
        genreID: 10,
        themeID: 4
    });

    await GenreTheme.create({
        genreID: 3,
        themeID: 1
    });

    await GenreTheme.create({
        genreID: 3,
        themeID: 2
    });

    await GenreTheme.create({
        genreID: 12,
        themeID: 6
    });

    await GenreTheme.create({
        genreID: 13,
        themeID: 3
    });

    await GenreTheme.create({
        genreID: 13,
        themeID: 5
    });

    await GenreTheme.create({
        genreID: 11,
        themeID: 3
    });

    await GenreTheme.create({
        genreID: 11,
        themeID: 6
    });

    await GenreTheme.create({
        genreID: 9,
        themeID: 6
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
        ISBN: "9780553381689",
        authorID: 6
    });

    await WrittenBy.create({
        ISBN: "006223790",
        authorID: 5
    });

    await WrittenBy.create({
        ISBN: "0812998952",
        authorID: 7
    });

    await WrittenBy.create({
        ISBN: "9788804668428",
        authorID: 9
    });

    await WrittenBy.create({
        ISBN: "9781405924382",
        authorID: 10
    });

    await WrittenBy.create({
        ISBN: "2081297892",
        authorID: 8
    });

    await WrittenBy.create({
        ISBN: "8852220550",
        authorID: 10
    });

    await WrittenBy.create({
        ISBN: "8852220550",
        authorID: 11
    });

    await WrittenBy.create({
        ISBN: "0440129710",
        authorID: 12
    });

    await WrittenBy.create({
        ISBN: "1451626657",
        authorID: 13
    });

    await WrittenBy.create({
        ISBN: "0520004507",
        authorID: 14
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
        title: "Great book!",
        text: "I like this writer (although others seem to have reservations, re. the first book The Truth about the Harry Quebert Affair, but I loved that one too). This book takes the reader through a tragic family chronicle... The Baltimore Boys. The Goldman Gang. It kept me intrigued from start to finish. Only remark I would make (think I made this one for the first book too), the text could have been edited in my opinion to make the book a bit more to the point and lean. Other than that, that's a detail. 5 stars and truly worthwhile to read. Slowly the story unfolds, you get pulled into the lives of the cast in Florida, Baltimore and New York, and you just know the outcome can't be that good.... Talented writer.",
        ISBN: "9788893440615"
    });

    await Review.create({
        reviewID: 4,
        title: "A masterfully-written novel about young love in the 21st Century",
        text: "Do you ever consider the profound impact significant others have on your life? Decades ago, when our son was toddlerish, my husband and I took him into the country for a weekend. We rented a tiny, Eskom-free stone cottage in a dark valley. One night, with the boy asleep, we sat outside, dazzled by the night sky, and drank a bottle of wine. We’d been a couple for more than a decade by then and somehow began talking about how being together had shaped us as individuals and influenced our life decisions. It was a gentle, but remarkably illuminating discussion for both of us and about both of us. It's a conversation I regularly replay to myself to remember how lucky I am.",
        ISBN: "1984822179"
    });

    await Review.create({
        reviewID: 5,
        title: "Some hits and misses",
        text: "I should preface this by saying that I'm a huge fan of Norse mythology; I've read and discussed many of the sagas and myths, and I'm very familiar with the runes and rune poems as well. So I was really excited to read this book, even though that meant ordering from out of the country and paying the extra shipping, as it's not available on Kindle. I had never heard of this author, though apparently she's well known and highly regarded in the UK. Also, given the amount of attention the character of Loki has gotten due to the Marvel movies, and how well Tom Hiddleston portrayed the complexity and vigor of that character, I had some pretty high expectations for the book. (And, the title--\"The Gospel of Loki\"? I appreciate the allusion to the Bible's Gospels, but that's setting up some pretty big shoes to fill, IMHO. This book needed to be an engaging, rock-solid satire to live up to a title like that.)",
        ISBN: "1481449478"
    });

    await Review.create({
        reviewID: 6,
        title: "You'll Never Celebrate Thanksgiving Quite the Same After Reading this Wonderful Novel",
        text: "I just finished \"There There\", by Tommy Orange and I’m so glad to have read it - though sometimes it was difficult:\n" +
            "\n" +
            "This book will make you sad - read it anyway.\n" +
            "This book will make you mad - read it anyway.\n" +
            "This book will remind you of the lies we were taught as children - read it to remember.\n" +
            "This book will remind you not to tell those lies anymore - read it to know the truth.\n" +
            "This book will make you smile – know hope.\n" +
            "This book will ruin Thanksgiving for you - read it so you can re-think your future Thanksgivings.\n" +
            "\n" +
            "\"There There\", (the title referring to an out-of-context quote by Gertrude Stein about Oakland, CA) is fascinating, heartbreaking, frustrating and ultimately hopeful. The novel is comprised of individual, but interconnected/interrelated stories by a dozen characters; their stories and actions will culminate at the “Big Oakland Powwow”. (There are some major coincidences – but just suspend your disbelief and let it go!) The section on Dene Oxendene, somewhat mirrors the premise: Dene wants to make a documentary film of various Native Americans talking about their life experiences of living in Oakland, and that is pretty much the description of this novel – plus some mysteries and some shocking action.\n" +
            "\n" +
            "Summing it up best, Opal Viola Victoria Bear Shield’s Mother tells her that the world is made up of stories and that they honor their people by telling their stories. And that’s how Tommy Orange honors his people, and his readers, with these transforming and redemptive stories.",
        ISBN: "0525436146"
    });

    await Review.create({
        reviewID: 7,
        title: "Its a sad state of affairs",
        text: "In my personal discovery of reconciliation I'm reading as much information as I can find about the plight of Indigenous people. \"There, there\" was another waste of time. I was hoping this book would take the opportunity to show a way forward. The present path of reconciliation seems to be all about revenge for past wrongs. This book is just another sad story of wasted lives and missed opportunities. The book itself is a terribly wasted opportunity. Perhaps that was the point. If you're looking for another \"woe is me\" book about Indigenous people you will find this a pretty good read. If you are trying to understand how we can move forward and all live together in peace and harmony, you should look elsewhere.",
        ISBN: "0525436146"
    });

    await Review.create({
        reviewID: 8,
        title: "Another world to be drawn into",
        text: "I watched the first season of the show and was hooked, but I normally prefer to read the book first, so I ordered this set and have started reading them. My son advised me I should read the whole series before I watch the other seasons because after the first book & season, the seasons don't always track well with the books.\n" +
            "\n" +
            "That's fine with me - I'm loving the book more than the show anyway. There are details in the books that film just can't translate, such as the way a character is thinking. I'm amazed at the number of characters and how individual and unique they are.\n" +
            "\n" +
            "While there is a lot of action and some of it quite violent, there is also humor and tender moments, complicated family dynamics, and good descriptions of the landscape and surroundings so that I can picture what is going on without having to rely on my memory of the show. I'll be ordering more when I get through the first five, as I enjoy reading well written book series.",
        ISBN: "9780553381689"
    });

    await Review.create({
        reviewID: 9,
        title: "Highly recommended whether you are watching the series or not. Awesomely brilliant.",
        text: "I was sitting next to a young woman reading on a plane who was reading this. She told me that she liked it much better than the series. That it was well-written and hard to put down. She specifically mentioned that it had very little of the gratuitous sex that seems to pervade the TV show. On her recommendation, I bought the book and completely agree with everything she said.\n" +
            "Even though it is difficult not to imagine the faces of the actors when reading the book, it is still an awesome read. Much more detailed than the series, but also enhanced by it to a certain extent.\n" +
            "Brilliant writing.",
        ISBN: "9780553381689"
    });

    await Review.create({
        reviewID: 10,
        title: "Intriguing exploration of memory.....did I do that?",
        text: "My exploration over the last few years of various articles, books, and documentaries has made me think differently about \"eye witness testimony\" and the complexity of human memory. (The \"invisible gorilla experiment\"?) This book also explores many of these topics. It is part memoir and an interesting exploration of the topic of memory....that we don't have little video cameras and \"straight eye to brain to gray matter DVD\". That memory is continually developing and reworking, shifting, changing......not \"set in stone\". Recommended read for anyone concerned about exploring the fascinating aspects of human memory.",
        ISBN: "006223790"
    });

    await Review.create({
        reviewID: 11,
        title: "A superb new novel about Cold War rivalry in Africa",
        text: "\"I was a Special Agent in the FBI from 1983 to 1987, and in that time CIA hired me twice as a temporary contractor, the phrase they use for spy.\" The narrator is Marie Mitchell. American Spy is her story, written in 1992 in the first person as a diary for her young twin sons to read when they're older. The action spans the thirty preceding years—from the Cuban Missile Crisis to the \"New World Order\" following the end of the Cold War.\n" +
            "\n" +
            "Marie is the younger of two sisters. Helene, now dead, was five years older and Marie's idol. It had been Helene's ambition to join the CIA and later form her own private intelligence agency. And that's what has led Marie to the FBI, and ultimately to agree to two assignments from the Company. Except, as we'll learn later, they might not have come from the CIA at all.\n" +
            "\n" +
            "From New York to Martinique to Burkina Faso\n" +
            "\n" +
            "In American Spy, the action shifts rapidly and often from New York City to Martinique to Burkina Faso in flashbacks and flashforwards. Marie's FBI posting was in the City. Her family had come from Martinique, and her mother has returned there to live. And Marie's work for the CIA involves \"getting close\" to the dictator of Burkina Faso, Thomas Sankara.\n" +
            "\n" +
            "Cold War rivalry in Africa lies at the heart of this story\n" +
            "\n" +
            "Author Lauren Wilkinson has built her tale around real-world events that transpired in Burkina Faso. Her portrait of Sankara and her account of the actions he took as president of his country hew closely to the historical record. Sankara, and the country he tried so hard to reform, were victims of the Cold War between the US and the USSR.\n" +
            "\n" +
            "Suspenseful, psychologically sound, and ultimately believable\n" +
            "\n" +
            "Wilkinson's command of plotting and character development are both skillful. Obviously, she understands the discriminatory treatment that hidebound agencies like the FBI so commonly doled out in years past to women and people of color. American Spy is suspenseful, psychologically sound, and ultimately believable. It's all too typical of the Cold War rivalry that victimized so many small nations caught in the middle between two superpowers.\n" +
            "\n" +
            "How another reviewer saw the book\n" +
            "\n" +
            "In reviewing American Spy, NPR book critic Maureen Corrigan wrote in the Washington Post Book Review (February 15, 2019), \"Lauren Wilkinson’s new novel, 'American Spy, is extraordinary in a lot of ways — most obviously because it places a female African American intelligence officer, Marie Mitchell, at the center of a Cold War tale of political espionage. But also striking is the novel’s deeper recognition that, to some extent, rudimentary tradecraft is something all of her African American characters have learned as an everyday survival skill. As Marie’s father wryly tells her on the day of her graduation from the FBI training academy at Quantico, 'I’ve been a spy in this country for as long as I can remember.'\"",
        ISBN: "0812998952"
    });

    await Review.create({
        reviewID: 12,
        title: "The Devil comes to Moscow with his giant talking Cat",
        text: "It took me 2 months to read The Master and Margarita, but I’m glad I stuck with it for the enjoyment of completing a difficult task. Also, the book was fun, something I didn’t expect. And of course now I can flatter myself in the bookstore by pointing to it and saying “I read that!”\n" +
            "I’m not Russian. I’ve never been to Russia and the largest segment of Russian culture that I know anything about is classical ballet. I’m not political, so I don’t know much of the political structures that have governed Russia for decades. But I do know that the Master and Margarita is a modern day Russian classic so I read it. I expected it to be a dry, impenetrable task but I wanted to see what the big deal was.\n" +
            "I probably still don’t know what the big deal is, but what a wild ride. There’s a devil who shows up in Moscow one day (God only knows why) and takes over the theatre and all the chaos and hilarity that ensures from that. We’ve got a giant black cat that stands on his hind legs and talks and causes a boatload of trouble. He’s in league with the devil, you see. We have a heroine who flies over Moscow by night on her witch’s broom and her servant girl who rides with her, but on the back of a giant flying pig.\n" +
            "But first, you must make your way past the first 3 chapters. Once you do, I guarantee you’ll be re-reading passages to make sure you read it right the first time. You probably did; this book is as wild as anything Fellini ever put on film and makes Alice in Wonderland look like child’s play. Don’t get bogged down in Pontius Pilate and all of that. It’s temporary and doesn’t take up much of the book.\n" +
            "Magical realism? I don’t know. It’s pretty magical but I don’t think it’s real. Symbolism? Plenty of it: the moon, the color red, naked women, mental hospitals and more. But what it all means is up to the reader to decipher and having read this book once, I know I’ll have to re-read it to glean understanding.\n" +
            "History says Mikhail Bulgakov wrote this during the height of Stalin’s tyranny. For that reason, the book was banned which is a concept that Americans can’t understand. To us, the label “banned book” is an enticement to see what the big deal was. In Stalinist Russia, having your book banned was getting off easy; writers and members of the intelligentsia were often sent off to work camps or killed.\n" +
            "But enough history. The thing is, if you pick up this book, expect to be captivated by chaos and improbability, passages that are truly gothic, and beautiful writing. It’s an outrageous trip. Overall, The Master and Margarita is a love story imagined during a time of great trouble. This book can go as deep as the reader is willing to go, but don’t expect to get it all in the first or third read. You can keep it light and be amazed or take it deeper. If you go deep, please report back to us and share your findings. I know I missed a lot.\n" +
            "Don’t be frightened away from The Master and Margarita. Remember, there’s a giant black cat that walks on hind legs and can’t wait to stir up disaster. How entertaining is that?",
        ISBN: "9788804668428"
    });

    await Review.create({
        reviewID: 13,
        title: "Please Read: Book is meant to be poking fun!",
        text: "Alright, this book has a lot of high and low points but I'm going to tell you now: This book is MEANT to make fun of those \"inspirational quotes\", not to actually BE them.\n" +
            "\n" +
            "And to parents that want to get this book for your kid, ask yourself this: Are they in High School? Then buy it. And if your child buys it for themselves don't confiscate it. Parents are blind to what goes on in younger society and I can say that once you hit high school your innocence is pretty much gone, same with your filter.\n" +
            "\n" +
            "My recommended age group however, is 16 to about 20. This book really is meant to target teens because it's basically a slap of reality.\n" +
            "\n" +
            "I've been suffering with depression for a long time, and I've read this book during my low points to pick me back up (if you can believe that, then keep reading). The jokes are meant to poke fun at how there are inspirational quotes all over the Internet, and yet most people don't do anything past making a pretty quote on paper. The book itself is basically like a huge joke, and the with an ending like \"I lied\" I would hope that many would see that.\n" +
            "\n" +
            "This book is not anymore of a joke than those \"journal\" books (that I've done so many of in attempts to keep my depression in check). Sure it's not what you expect, but it really is a pleasant book when you understand it on a basic level as humor and a cool play on irony.\n" +
            "\n" +
            "Buy at your own risk, if you're not ready to handle a slap in the face by reality kids then don't take it. If you're an adult buying for a child check it out at a local bookstore first, or just buy it as I said and let them experience it.\n",
        ISBN: "9781405924382"
    });

    await Review.create({
        reviewID: 14,
        title: "Une autopsie de la gauche postmoderne ?",
        text: "Le présent ouvrage est le produit d’un échange épistolaire (dont il faut souligner la qualité, même si on n’en partage pas les points de vue) entre celui-ci et Florian Gulli, enseignant de philosophie et membre du Front de gauche. Florian Gulli, se réclamant du mouvement ouvrier et du progressisme, partage une série des critiques de Michéa contre la civilisation du progrès, le culte de la nouveauté et le délitement des structures collectives. Le militant ne peut accepter cependant celles que ce dernier porte à la gauche. L’ouvrage constitue la réponse de Michéa, au travers d’une série de lettres.",
        ISBN: "2081297892"
    });

    await Review.create({
        reviewID: 15,
        title: "Meraviglioso!",
        text: "Credo che Winnie Pooh sia un libro che tutti dovrebbero leggere, prima o poi. Anzi, meglio prima e poi. Molti anni fa lo lessi e lo apprezzai per la sua semplicità, mentre oggi, rileggendolo, mi sono accorto dell'incredibile tesoro che è racchiuso in questi racconti. Divertenti al punto giusto, contengono qualcosa di molto più interessante della storia stessa per bambini; la genialità di alcune scene e personaggi farebbe impallidire il più abile dei romanzieri. Sicuramente un libro che tutti dovrebbero leggere!",
        ISBN: "8852220550"
    });

    await Review.create({
        reviewID: 16,
        title: "A Necessary Resource for Those Who Plan",
        text: "An excellent guide to defensive preparedness, and just about the only source available. The author documents the almost non-existent Federal civil defense in existence, thus the need for private initiative. He also counters the prevailing myths of the futility of survival in a nuclear attack or that all of mankind would be destroyed. These two myths have been perpetrated by the enemies of America who wish to demoralize us and produce acquiescence to their demands. Russia, on the other hand, has massive civil defense structures and training in place and plans to not only survive, but win, a nuclear contest.\n" +
            "\n" +
            "On the con side, much of the information is dated, especially when it comes to radiation detection devices. Also, the author does go into detail about\n" +
            "fleeing an area but makes two assumptions. First, he assumes that roads will be passable. This is only true if someone is fleeing before mass public evacuation. I've been through several evacuations in the USA due to impending weather and the roads became immediately blogged and non-passable. AWD were not able to move either. Only two wheel vehicles and travel by foot were possible. The author does not mention alternatives to 4 wheel vehicles. The second assumption he makes is that the populace will be orderly, helpful, and compliant. This also does not tally with my experiences. In the lists of emergency supplies, firearms are never even mentioned. The author apparently sees no need for weapons.\n" +
            "\n" +
            "Still, overall this is a valuable resource and if I had to make a list of the five most useful preparedness books, this would be on that list.",
        ISBN: "0440129710"
    });

    await Review.create({
        reviewID: 17,
        title: "Praise for Normal People",
        text: "\"I went into a tunnel with this book and didn’t want to come out. Absolutely engrossing and surprisingly heartbreaking " +
            " with more depth, subtlety, and insight than any one novel deserves.\”—Stephanie Danler, author of Sweetbitter",
        ISBN: "1984822179"
    });

    await Review.create({
        reviewID: 18,
        title: "12 Best Books of Spring",
        text: "\"Arguably the buzziest novel of the season, Sally Rooney’s elegant sophomore effort . . . is a worthy successor " +
            " to Conversations with Friends. Here, again, she unflinchingly explores class dynamics and young love with wit and " +
            "nuance.\”—The Wall Street Journal",
        ISBN: "1984822179"
    });

    await Review.create({
        reviewID: 19,
        title: "A surprise from the author of Chocolat",
        text: "The Gospel of Loki is a charming novel, told with snark, wit and familiarity. Harris’s voice of Loki is an addictive thing, " +
            "a pleasure to consume. While some may be most familiar with the Norse gods from the Marvel films, Harris draws the characters" +
            " magnificently from their original inspirations and makes them her own",
        ISBN: "1481449478"
    });

    await Review.create({
        reviewID: 20,
        title: "10 Best Books of the Year\n",
        text: "Powerful. . . . There There has so much jangling energy and brings so much news from a distinct corner of American life that" +
            " it’s a revelation. —The New York Times ",
        ISBN: "0525436146"
    });


    await Review.create({
        reviewID: 21,
        title: "Must read",
        text: "Fierce, angry, funny, heartbreaking—Tommy Orange’s first novel is a wondrous and shattering portrait of an America few of us have " +
            "ever seen, and it introduces a brilliant new author at the start of a major career.",
        ISBN: "0525436146"
    });

    await Review.create({
        reviewID: 22,
        title: "Fascinating",
        text: "Pieces of Light is utterly fascinating and superbly written. I learned more about memory from this book than any other." +
            " There are few science books around of this class. ",
        ISBN: "006223790"
    });

    await Review.create({
        reviewID: 23,
        title: "Combining science and literature",
        text: "His examination is welcoming and accessible to lay readers. His analysis is wide-ranging . . . He also covers a wide swath" +
            " of literary and historical ground . . . A refreshingly social take on an intensely personal experience.",
        ISBN: "006223790"
    });

    await Review.create({
        reviewID: 24,
        title: "Another world to be drawn into",
        text: "Reminiscent of T. H. White’s The Once and Future King, this novel is an absorbing combination of the mythic, " +
            "the sweepingly historical, and the intensely personal.",
        ISBN: "9780553381689"
    });

    await Review.create({
        reviewID: 25,
        title: "Colossal, staggering",
        text: "Many fans of sword-and-sorcery will enjoy the epic scope of this book, something of a change of pace for Martin," +
            " who has spent the last decade working for television and who has long been honored for his award-winning stories " +
            "(e.g., ‘Sandkings’). Still, to my mind, this opening installment suffers from one-dimensional characters and less than memorable imagery.",
        ISBN: "9780553381689"
    });

    await Review.create({
        reviewID: 26,
        title: "A complex and powerful work",
        text: "For the novel’s engaging intelligence and serious reckoning with the world’s postwar order, Wilkinson deserves the comparisons " +
            "to John le Carré she’s already receiving. But in bringing a virtually unheard-from fictional viewpoint to espionage literature, she " +
            "has reinvigorated the genre..",
        ISBN: "0812998952"
    });

    await Review.create({
        reviewID: 27,
        title: "Praise for American Spy",
        text: "Echoing the stoic cynicism of Hurston and Ellison, and the verve of Conan Doyle, American Spy lays our complicities—political, " +
            "racial, and sexual—bare. Packed with unforgettable characters, it’s a stunning book, timely as it is timeless.",
        ISBN: "0812998952"
    });

    await Review.create({
        reviewID: 28,
        title: "It was love at first sight",
        text: "That was fifty years ago. I was ten or eleven, Catch 22 was a year old or maybe two. My brother, in college, recommended this book. I liked it so much I read it beginning on New Year every year until I went to college. I just reread it for the first time in forty some years. It’s still brilliant. It’s still startlingly funny and it still hurts down deep.\n" +
            "It rose above the realistic novels written immediately after the Second World War. It rose above Mailer and Jones and Shaw. When asked why he’d never written another book like Catch 22, Heller’s answer was “Who has?” Of course he was right. A couple of the great wave of novels that followed the Second World War stand shoulder to shoulder with the catch; Slaughter House Five and Gunter Grass’s Dog Years come to my mind. Lots of very good novels came out of the war, first novels from writers like Gore Vidal and Norman Mailer, Irwin Shaw and James Jones, Thomas Heggens, who won a Tony for the stage version of his novel, Mr. Roberts, James Gould Cozzens, who won a Pulitzer for Guard of Honor. None of those good books compare. Catch 22 entered the language. For a few years the blue paperback with the dancing soldier puppet was everywhere.\n" +
            "Yossarian, the novel’s hero, spends the novel trying not to die in the war. A difficult job, since his colonel raises the number of missions he must fly from twenty-five to seventy, in an attempt to impress the Saturday Evening Post. Since I last read this I served in the army, where sooner or later everybody winds up working for Colonel Cathcart. I’m thinking that besides its anarchic appeal for youth, there were at that time millions of Veterans many of whom shared it’s cynicism about the organizations they worked for.\n" +
            "If you’ve never read it, you’ve missed a great read. If you read it a long time ago It might be time to enjoy it again. I suspect you’ll still laugh whenever Heller tells you to. And like love at first sight it will probably still break your heart.",
        ISBN: "1451626657"
    });

    await Review.create({
        reviewID: 29,
        title: "A lovely book",
        text: "To read this book is to see the Western Mind open to light and fresh air after centuries of stale darkness. This is not to snub the monumental work of Aristotle or Ptolemy but to rue the fact that their writings were clung to as doctrine for so long.\n" +
            "Even in translation, Galileo is a lively, robust, even funny writer. His fiery spirit is especially welcome in these troubled opening years of the 21st century: I kept marking pages for later reference. Some parts of this great book will require work on the reader's part, but the work is so eminently worth it. This edition has copious, interesting notes, too, which make the adventure an even more colorful and full one.\n" +
            "This is no \"great grey classic\" to be endured, but a living bronco of a book: relevant, ferocious, and of great historical and scientific interest.",
        ISBN: "0520004507"
    });

    await Review.create({
        reviewID: 30,
        title: "A Piece of Scientific History",
        text: "Galileo's Dialogue Concerning the Two Chief World Systems has long had its place in the history books. The work consists of a dialogue between three characters, Salviati, Sagredo, and Simplicio. They gather together over the course of four days to discuss the Ptolemaic and Copernican views of the universe. Ptolemy's system is that of an earth centered universe that aligns with the views of Aristotle, the more popular conception. Copernicus's system is heliocentric. This is a radical opinion of the time and incidentally is the correct one. Salviati supports the Copernican system and Simplicio adheres to the Ptolemaic view. These two refute the ideas of the other and argue for their own. Sagredo is somewhat caught in the middle. However, he ultimately aligns with Salviati on every point. The translator, Stillman Drake, in his introduction, goes over the climate and political forces of Galileo's day along with Galileo's reason's for writing this book. As Drake points out, Galileo is appealing to the public here. It seems that this is Galileo getting in the last word on the argument for a heliocentric universe. This book is also what largely does him in with the Vatican. Galileo dose not directly argue against the church in this book but only against the Aristotelian opinion while showing reverence for divine power.\n" +
            "The best was to describe this book is verbose. It fills 465 pages with small print. Because it is written in conversational tone, perhaps Galileo felt that the extra wording was necessary. It does take some time to read. Drake does an excellent job of making important notes throughout the work. Some of these are geared more for an academic study, but others give needed explanation. Just like we do not have all the answers today, Galileo makes some scientific mistakes. These are few and Drake gives explanations for them. This book is worth the read for its place in history. A brief background in astronomy and even Aristotelian philosophy will benefit the reader. I would also recommend Discoveries and Opinions of Galileo, also translated and compiled by Drake.",
        ISBN: "0520004507"
    });
}

async function createSimilarTo() {

    await SimilarTo.create({
        ParentISBN: "9788893440615",
        ChildISBN: "8845282678"
    });

    await SimilarTo.create({
        ParentISBN: "9788893440615",
        ChildISBN: "1984822179"
    });

    await SimilarTo.create({
        ParentISBN: "8845282678",
        ChildISBN: "1984822179"
    });

    await SimilarTo.create({
        ParentISBN: "1481449478",
        ChildISBN: "1984822179"
    });

    await SimilarTo.create({
        ParentISBN: "1481449478",
        ChildISBN: "8845282678"
    });

    await SimilarTo.create({
        ParentISBN: "1481449478",
        ChildISBN: "9788893440615"
    });

    await SimilarTo.create({
        ParentISBN: "0525436146",
        ChildISBN: "9788893440615"
    });

    await SimilarTo.create({
        ParentISBN: "0525436146",
        ChildISBN: "8845282678"
    });

    await SimilarTo.create({
        ParentISBN: "0525436146",
        ChildISBN: "1481449478"
    });

    await SimilarTo.create({
        ParentISBN: "0525436146",
        ChildISBN: "1984822179"
    });

    await SimilarTo.create({
        ParentISBN: "9780553381689",
        ChildISBN: "8845282678"
    });

    await SimilarTo.create({
        ParentISBN: "9780553381689",
        ChildISBN: "9788893440615"
    });

    await SimilarTo.create({
        ParentISBN: "9780553381689",
        ChildISBN: "1984822179"
    });

    await SimilarTo.create({
        ParentISBN: "9780553381689",
        ChildISBN: "1481449478"
    });

    await SimilarTo.create({
        ParentISBN: "9780553381689",
        ChildISBN: "0525436146"
    });

    await SimilarTo.create({
        ParentISBN: "006223790",
        ChildISBN: "8845282678"
    });

    await SimilarTo.create({
        ParentISBN: "006223790",
        ChildISBN: "1984822179"
    });

    await SimilarTo.create({
        ParentISBN: "0812998952",
        ChildISBN: "1481449478"
    });

    await SimilarTo.create({
        ParentISBN: "0812998952",
        ChildISBN: "9780553381689"
    });

    await SimilarTo.create({
        ParentISBN: "0812998952",
        ChildISBN: "9788893440615"
    });

    await SimilarTo.create({
        ParentISBN: "0812998952",
        ChildISBN: "1984822179"
    });

    await SimilarTo.create({
        ParentISBN: "9788804668428",
        ChildISBN: "1481449478"
    });

    await SimilarTo.create({
        ParentISBN: "9788804668428",
        ChildISBN: "0812998952"
    });

    await SimilarTo.create({
        ParentISBN: "9788804668428",
        ChildISBN: "9788893440615"
    });

    await SimilarTo.create({
        ParentISBN: "9788804668428",
        ChildISBN: "0525436146"
    });

    await SimilarTo.create({
        ParentISBN: "9781405924382",
        ChildISBN: "9780553381689"
    });

    await SimilarTo.create({
        ParentISBN: "9781405924382",
        ChildISBN: "1481449478"
    });

    await SimilarTo.create({
        ParentISBN: "9781405924382",
        ChildISBN: "9788804668428"
    });

    await SimilarTo.create({
        ParentISBN: "9781405924382",
        ChildISBN: "006223790"
    });

    await SimilarTo.create({
        ParentISBN: "2081297892",
        ChildISBN: "0812998952"
    });

    await SimilarTo.create({
        ParentISBN: "2081297892",
        ChildISBN: "9788804668428"
    });

    await SimilarTo.create({
        ParentISBN: "2081297892",
        ChildISBN: "006223790"
    });

    await SimilarTo.create({
        ParentISBN: "2081297892",
        ChildISBN: "0525436146"
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
        ParentISBN: "9780553381689",
        ChildISBN: "8852220550"
    });

    await SimilarTo.create({
        ParentISBN: "9781405924382",
        ChildISBN: "8852220550"
    });

    await SimilarTo.create({
        ParentISBN: "8845282678",
        ChildISBN: "0440129710"
    });

    await SimilarTo.create({
        ParentISBN: "9788893440615",
        ChildISBN: "0440129710"
    });

    await SimilarTo.create({
        ParentISBN: "8852220550",
        ChildISBN: "0440129710"
    });

    await SimilarTo.create({
        ParentISBN: "2081297892",
        ChildISBN: "0440129710"
    });

    await SimilarTo.create({
        ParentISBN: "1451626657",
        ChildISBN: "0812998952"
    });

    await SimilarTo.create({
        ParentISBN: "1451626657",
        ChildISBN: "9780553381689"
    });

    await SimilarTo.create({
        ParentISBN: "1451626657",
        ChildISBN: "2081297892"
    });

    await SimilarTo.create({
        ParentISBN: "1451626657",
        ChildISBN: "0440129710"
    });

    await SimilarTo.create({
        ParentISBN: "0520004507",
        ChildISBN: "9781405924382"
    });

    await SimilarTo.create({
        ParentISBN: "0520004507",
        ChildISBN: "8852220550"
    });

    await SimilarTo.create({
        ParentISBN: "0520004507",
        ChildISBN: "0440129710"
    });

    await SimilarTo.create({
        ParentISBN: "0520004507",
        ChildISBN: "1451626657"
    });

    await SimilarTo.create({
        ParentISBN: "006223790",
        ChildISBN: "0520004507"
    });

    await SimilarTo.create({
        ParentISBN: "006223790",
        ChildISBN: "1451626657"
    });

    await SimilarTo.create({
        ParentISBN: "006223790",
        ChildISBN: "9780553381689"
    });

    await SimilarTo.create({
        ParentISBN: "0520004507",
        ChildISBN: "0525436146"
    });

    await SimilarTo.create({
        ParentISBN: "0520004507",
        ChildISBN: "9780553381689"
    });

    await SimilarTo.create({
        ParentISBN: "0520004507",
        ChildISBN: "2081297892"
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
            "            Hi! I'm Luca, I'm the backend developer, and if you need some help my mail is <a href=\"mailto:luca.napoletano@mail.polimi.it\">luca.napoletano@mail.polimi.it</a>.\n" +
            "        </div>\n" +
            "\n" +
            "        <div class=\"col-sm-4 team-card mb-4\">\n" +
            "            <img class=\"round-image img-fluid\" src=\"./assets/images/contactUs/andrea.jpg\" alt=\"Andrea Miotto\">\n" +
            "            <h2 class=\"mt-2\">Andrea</h2>\n" +
            "            Hi! I'm Andrea, I'm the frontend developer, and if you need some help my mail is <a href=\"mailto:andrea1.miotto@mail.polimi.it\">andrea1.miotto@mail.polimi.it</a>.\n" +
            "        </div>\n" +
            "\n" +
            "        <div class=\"col-sm-4 team-card mb-4\">\n" +
            "            <img class=\"round-image img-fluid\" src=\"./assets/images/contactUs/claudio.jpeg\" alt=\"Claudio Montanari\">\n" +
            "            <h2 class=\"mt-2\">Claudio</h2>\n" +
            "            Hi! I'm Claudio, I'm the frontend developer, and if you need some help my mail is <a href=\"mailto:claudio1.montanari@mail.polimi.it\">claudio1.montanari@mail.polimi.it</a>.\n" +
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

    await Event.create({
        eventID: 5,
        address: "1234 Vine Street, 90038 Los Angeles",
        latitude: 34.09834,
        longitude:  -118.32674,
        eventDate: "2019-07-06",
        title: "Catch-22 Event",
        description: "Meet the actors which are working at Catch-22, the series based on the related book",
        ISBN: "1451626657",
        picture: "/events/c22_102_ps1150-01013rt.jpg"
    });
}

async function createHomeCarousel() {
    await HomeCarousel.create({
        carouselID: 1,
        eventID: 1
    });

    await HomeCarousel.create({
        carouselID: 2,
        eventID: 2
    });

    await HomeCarousel.create({
        carouselID: 3,
        eventID: 3
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