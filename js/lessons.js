// ===== Bianca French — Lesson Content =====
// 15 progressive lessons: French grammar + World History

const LESSONS = [
    // ===== LESSON 1: Être =====
    {
        id: 1,
        title: "Être — To Be",
        desc: "The most essential French verb and your foundation for everything.",
        frenchFocus: {
            verb: "être",
            conjugation: {
                "je": "suis",
                "tu": "es",
                "il/elle": "est",
                "nous": "sommes",
                "vous": "êtes",
                "ils/elles": "sont"
            },
            pattern: "Subject + être + adjective / noun",
            examples: [
                { fr: "Je suis avocate.", en: "I am a lawyer." },
                { fr: "Tu es très intelligente.", en: "You are very intelligent." },
                { fr: "Elle est française.", en: "She is French." },
                { fr: "Nous sommes prêts.", en: "We are ready." },
                { fr: "Vous êtes en retard.", en: "You are late." },
                { fr: "Ils sont contents.", en: "They are happy." }
            ],
            tips: "In French, you don't use 'a/an' before professions: 'Je suis avocate' (not 'Je suis une avocate'). Adjectives agree in gender — add -e for feminine.",
            homonyms: [],
            synonyms: [{ word: "exister", meaning: "to exist" }, { word: "se trouver", meaning: "to find oneself / to be located" }],
            extraVerbs: [
                {
                    verb: "rester", meaning: "to stay / to remain",
                    conjugation: { "je": "reste", "tu": "restes", "il/elle": "reste", "nous": "restons", "vous": "restez", "ils/elles": "restent" },
                    examples: [{ fr: "Je reste à la maison.", en: "I stay at home." }, { fr: "Nous restons calmes.", en: "We stay calm." }],
                    homonyms: [],
                    synonyms: [{ word: "demeurer", meaning: "to remain" }, { word: "séjourner", meaning: "to stay (temporarily)" }]
                },
                {
                    verb: "devenir", meaning: "to become",
                    conjugation: { "je": "deviens", "tu": "deviens", "il/elle": "devient", "nous": "devenons", "vous": "devenez", "ils/elles": "deviennent" },
                    examples: [{ fr: "Elle devient célèbre.", en: "She is becoming famous." }, { fr: "Ils deviennent meilleurs.", en: "They are becoming better." }],
                    homonyms: [],
                    synonyms: [{ word: "se transformer en", meaning: "to turn into" }, { word: "évoluer", meaning: "to evolve" }]
                },
                {
                    verb: "sembler", meaning: "to seem / to appear",
                    conjugation: { "je": "semble", "tu": "sembles", "il/elle": "semble", "nous": "semblons", "vous": "semblez", "ils/elles": "semblent" },
                    examples: [{ fr: "Tu sembles fatiguée.", en: "You seem tired." }, { fr: "Ils semblent contents.", en: "They seem happy." }],
                    homonyms: [],
                    synonyms: [{ word: "paraître", meaning: "to appear" }, { word: "avoir l'air", meaning: "to look like" }]
                },
                {
                    verb: "paraître", meaning: "to appear / to look",
                    conjugation: { "je": "parais", "tu": "parais", "il/elle": "paraît", "nous": "paraissons", "vous": "paraissez", "ils/elles": "paraissent" },
                    examples: [{ fr: "Elle paraît jeune.", en: "She looks young." }, { fr: "Cela paraît difficile.", en: "That appears difficult." }],
                    homonyms: [],
                    synonyms: [{ word: "sembler", meaning: "to seem" }, { word: "avoir l'air", meaning: "to look like" }]
                }
            ]
        },
        history: {
            period: "French Revolution (1789)",
            fr: "En 1789, le peuple de Paris était furieux. La Bastille était une prison royale et un symbole de l'oppression. Le 14 juillet, les Parisiens ont attaqué la Bastille. Cet événement est devenu le symbole de la Révolution française.",
            en: "In 1789, the people of Paris were furious. The Bastille was a royal prison and a symbol of oppression. On July 14th, the Parisians attacked the Bastille. This event became the symbol of the French Revolution.",
            vocab: [
                { word: "le peuple", meaning: "the people" },
                { word: "furieux", meaning: "furious" },
                { word: "une prison", meaning: "a prison" },
                { word: "attaqué", meaning: "attacked" },
                { word: "un événement", meaning: "an event" }
            ],
            funFact: "The Bastille only held 7 prisoners on the day it was stormed — but it was what it represented that mattered.",
            facts: [
                "Marie Antoinette never actually said 'Let them eat cake' — this phrase was attributed to her by political opponents to make her seem out of touch.",
                "The guillotine was introduced during the Revolution as a 'humane' method of execution — named after Dr. Joseph-Ignace Guillotin who proposed it.",
                "The French tricolor flag (blue, white, red) was created during the Revolution by combining the colors of Paris (blue and red) with the white of the monarchy.",
                "The metric system was invented during the French Revolution in 1799 as part of an effort to rationalize and standardize all measurements across France.",
                "During the Revolution, the French even created a new calendar with 10-day weeks and months named after nature, like Thermidor (heat) and Brumaire (fog).",
                "The Declaration of the Rights of Man and of the Citizen, adopted in 1789, inspired the Universal Declaration of Human Rights nearly 160 years later."
            ]
        },
        currentEvents: [
            { fr: "La France accueille les Jeux Olympiques de Paris 2024 avec un succès historique.", en: "France hosts the Paris 2024 Olympics with historic success." },
            { fr: "L'intelligence artificielle transforme le marché du travail dans le monde entier.", en: "Artificial intelligence is transforming the job market worldwide." },
            { fr: "Les pays européens investissent dans les énergies renouvelables.", en: "European countries are investing in renewable energy." },
            { fr: "Le musée du Louvre bat des records de fréquentation avec plus de dix millions de visiteurs.", en: "The Louvre museum breaks attendance records with over ten million visitors." }
        ],
        vocabulary: [
            {
                word: "suis", partOfSpeech: "verb", meaning: "am (from être)",
                example: { fr: "Je suis prête.", en: "I am ready." },
                homonyms: [{ word: "suis", meaning: "follow (from suivre)", example: "Je suis le chemin. (I follow the path.)" }],
                synonyms: [{ word: "existe", meaning: "exist" }, { word: "se trouve", meaning: "find oneself" }]
            },
            {
                word: "est", partOfSpeech: "verb", meaning: "is (from être)",
                example: { fr: "Elle est française.", en: "She is French." },
                homonyms: [{ word: "est", meaning: "east (direction)", example: "Paris est à l'est. (Paris is to the east.)" }],
                synonyms: [{ word: "se trouve", meaning: "is located" }, { word: "reste", meaning: "remains" }]
            },
            {
                word: "prêt", partOfSpeech: "adjective", meaning: "ready",
                example: { fr: "Nous sommes prêts.", en: "We are ready." },
                homonyms: [{ word: "prêt", meaning: "a loan (noun)", example: "Il demande un prêt. (He asks for a loan.)" }],
                synonyms: [{ word: "préparé", meaning: "prepared" }, { word: "disposé", meaning: "willing/disposed" }]
            },
            {
                word: "content", partOfSpeech: "adjective", meaning: "happy/glad",
                example: { fr: "Ils sont contents.", en: "They are happy." },
                homonyms: [{ word: "contenu", meaning: "content/contents (noun)", example: "Le contenu du livre. (The contents of the book.)" }],
                synonyms: [{ word: "heureux", meaning: "happy" }, { word: "joyeux", meaning: "joyful" }, { word: "ravi", meaning: "delighted" }]
            },
            {
                word: "avocate", partOfSpeech: "noun (f)", meaning: "lawyer (female)",
                example: { fr: "Je suis avocate.", en: "I am a lawyer." },
                homonyms: [{ word: "avocat", meaning: "avocado (fruit)", example: "Je mange un avocat. (I eat an avocado.)" }],
                synonyms: [{ word: "juriste", meaning: "jurist" }, { word: "conseillère juridique", meaning: "legal advisor" }]
            },
            {
                word: "en retard", partOfSpeech: "expression", meaning: "late",
                example: { fr: "Vous êtes en retard.", en: "You are late." },
                homonyms: [],
                synonyms: [{ word: "tardif", meaning: "tardy/late" }, { word: "en décalage", meaning: "behind schedule" }]
            }
        ],
        artHistory: {
            period: "Le Néoclassicisme (1750–1850)",
            periodEn: "Neoclassicism (1750–1850)",
            context: "Le néoclassicisme est né en France pendant la période des Lumières et de la Révolution française. Les artistes se sont inspirés de l'Antiquité grecque et romaine pour créer des œuvres majestueuses célébrant la vertu, le patriotisme et le sacrifice.",
            contextEn: "Neoclassicism was born in France during the Enlightenment and the French Revolution. Artists drew inspiration from Greek and Roman antiquity to create majestic works celebrating virtue, patriotism, and sacrifice.",
            artworks: [
                {
                    title: "Le Serment des Horaces",
                    titleEn: "The Oath of the Horatii",
                    artist: "Jacques-Louis David",
                    year: 1784,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg/800px-Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg",
                    descFr: "Ce tableau montre trois frères romains jurant de défendre Rome. C'est un symbole du devoir et du sacrifice patriotique.",
                    descEn: "This painting shows three Roman brothers swearing to defend Rome. It is a symbol of duty and patriotic sacrifice."
                },
                {
                    title: "La Mort de Marat",
                    titleEn: "The Death of Marat",
                    artist: "Jacques-Louis David",
                    year: 1793,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Death_of_Marat_by_David.jpg/800px-Death_of_Marat_by_David.jpg",
                    descFr: "David a peint cette œuvre pour honorer Jean-Paul Marat, un révolutionnaire assassiné dans sa baignoire. C'est l'un des tableaux les plus célèbres de la Révolution française.",
                    descEn: "David painted this work to honor Jean-Paul Marat, a revolutionary assassinated in his bathtub. It is one of the most famous paintings of the French Revolution."
                }
            ],
            vocab: [
                { word: "un tableau", meaning: "a painting" },
                { word: "un peintre", meaning: "a painter" },
                { word: "une œuvre", meaning: "a work (of art)" },
                { word: "le sacrifice", meaning: "sacrifice" },
                { word: "le devoir", meaning: "duty" },
                { word: "la vertu", meaning: "virtue" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Je ___ avocate.", answer: "suis", options: ["suis", "es", "est", "sommes"] },
            { type: "fill", prompt: "Nous ___ prêts pour l'examen.", answer: "sommes", options: ["êtes", "suis", "sommes", "sont"] },
            { type: "fill", prompt: "Elles ___ françaises.", answer: "sont", options: ["est", "sommes", "sont", "êtes"] },
            { type: "translate", en: "You are intelligent.", answer: "Tu es intelligente.", accept: ["tu es intelligent", "tu es intelligente", "vous êtes intelligent", "vous êtes intelligente"] },
            { type: "translate", en: "She is a lawyer.", answer: "Elle est avocate.", accept: ["elle est avocate"] },
            { type: "history", fr: "La Bastille était une prison royale.", answer: "The Bastille was a royal prison.", options: ["The Bastille was a royal prison.", "The Bastille was a royal palace.", "The Bastille was a royal church.", "The Bastille was a royal garden."] },
            { type: "fill", prompt: "Elle ___ célèbre maintenant.", answer: "devient", options: ["devient", "deviens", "deviennent", "devenez"] },
            { type: "fill", prompt: "Nous ___ à la maison ce soir.", answer: "restons", options: ["restons", "restez", "reste", "restent"] },
            { type: "translate", en: "I stay at home.", answer: "Je reste à la maison.", accept: ["je reste à la maison", "je reste a la maison"] },
            { type: "history", fr: "Le drapeau tricolore a été créé pendant la Révolution.", answer: "The tricolor flag was created during the Revolution.", options: ["The tricolor flag was created during the Revolution.", "The tricolor flag was created by Napoleon.", "The tricolor flag was created during the Renaissance.", "The tricolor flag was created by the king."] },
            { type: "fill", prompt: "Tu ___ fatiguée aujourd'hui.", answer: "sembles", options: ["sembles", "semble", "semblons", "semblez"] },
            { type: "fill", prompt: "Elle ___ très jeune pour son âge.", answer: "paraît", options: ["paraît", "parais", "paraissons", "paraissent"] },
            { type: "translate", en: "They seem happy.", answer: "Ils semblent contents.", accept: ["ils semblent contents", "elles semblent contentes", "ils semblent heureux"] },
            { type: "history", fr: "Le système métrique a été inventé pendant la Révolution française.", answer: "The metric system was invented during the French Revolution.", options: ["The metric system was invented during the French Revolution.", "The metric system was invented by Napoleon.", "The metric system was invented in England.", "The metric system was invented during the Renaissance."] }
        ]
    },

    // ===== LESSON 2: Avoir =====
    {
        id: 2,
        title: "Avoir — To Have",
        desc: "Essential for expressing possession, age, and many French expressions.",
        frenchFocus: {
            verb: "avoir",
            conjugation: {
                "j'": "ai",
                "tu": "as",
                "il/elle": "a",
                "nous": "avons",
                "vous": "avez",
                "ils/elles": "ont"
            },
            pattern: "Subject + avoir + noun / expression",
            examples: [
                { fr: "J'ai une question.", en: "I have a question." },
                { fr: "Tu as raison.", en: "You are right. (lit: You have reason)" },
                { fr: "Elle a trente ans.", en: "She is thirty years old. (lit: She has thirty years)" },
                { fr: "Nous avons besoin d'aide.", en: "We need help. (lit: We have need of help)" },
                { fr: "Vous avez de la chance.", en: "You are lucky. (lit: You have luck)" },
                { fr: "Ils ont faim.", en: "They are hungry. (lit: They have hunger)" }
            ],
            tips: "French uses 'avoir' (to have) for age, hunger, thirst, fear, and being right/wrong. Think of it as 'possessing' a state: 'J'ai faim' = 'I have hunger.'",
            homonyms: [],
            synonyms: [{ word: "posséder", meaning: "to possess" }, { word: "détenir", meaning: "to hold/own" }],
            extraVerbs: [
                {
                    verb: "prendre", meaning: "to take",
                    conjugation: { "je": "prends", "tu": "prends", "il/elle": "prend", "nous": "prenons", "vous": "prenez", "ils/elles": "prennent" },
                    examples: [{ fr: "Je prends un café.", en: "I'm having a coffee." }, { fr: "Elle prend le bus.", en: "She takes the bus." }],
                    homonyms: [],
                    synonyms: [{ word: "saisir", meaning: "to seize" }, { word: "attraper", meaning: "to catch" }]
                },
                {
                    verb: "donner", meaning: "to give",
                    conjugation: { "je": "donne", "tu": "donnes", "il/elle": "donne", "nous": "donnons", "vous": "donnez", "ils/elles": "donnent" },
                    examples: [{ fr: "Je te donne mon numéro.", en: "I give you my number." }, { fr: "Ils donnent des cadeaux.", en: "They give gifts." }],
                    homonyms: [],
                    synonyms: [{ word: "offrir", meaning: "to offer" }, { word: "fournir", meaning: "to provide" }]
                },
                {
                    verb: "garder", meaning: "to keep / to guard",
                    conjugation: { "je": "garde", "tu": "gardes", "il/elle": "garde", "nous": "gardons", "vous": "gardez", "ils/elles": "gardent" },
                    examples: [{ fr: "Je garde un bon souvenir.", en: "I keep a good memory." }, { fr: "Ils gardent le secret.", en: "They keep the secret." }],
                    homonyms: [],
                    synonyms: [{ word: "conserver", meaning: "to preserve" }, { word: "retenir", meaning: "to retain" }]
                },
                {
                    verb: "perdre", meaning: "to lose",
                    conjugation: { "je": "perds", "tu": "perds", "il/elle": "perd", "nous": "perdons", "vous": "perdez", "ils/elles": "perdent" },
                    examples: [{ fr: "Je perds mes clés tout le temps.", en: "I lose my keys all the time." }, { fr: "Nous perdons patience.", en: "We are losing patience." }],
                    homonyms: [],
                    synonyms: [{ word: "égarer", meaning: "to misplace" }, { word: "manquer", meaning: "to miss" }]
                }
            ]
        },
        history: {
            period: "Ancient Egypt (3000 BCE)",
            fr: "Les anciens Égyptiens avaient une civilisation remarquable. Ils avaient des connaissances avancées en mathématiques et en architecture. Les pyramides de Gizeh ont plus de quatre mille ans. Les Égyptiens avaient aussi un système d'écriture : les hiéroglyphes.",
            en: "The ancient Egyptians had a remarkable civilization. They had advanced knowledge in mathematics and architecture. The pyramids of Giza are more than four thousand years old. The Egyptians also had a writing system: hieroglyphs.",
            vocab: [
                { word: "les anciens", meaning: "the ancient" },
                { word: "remarquable", meaning: "remarkable" },
                { word: "les connaissances", meaning: "knowledge" },
                { word: "l'écriture", meaning: "writing" },
                { word: "les hiéroglyphes", meaning: "hieroglyphs" }
            ],
            funFact: "The Great Pyramid of Giza was the tallest man-made structure in the world for over 3,800 years.",
            facts: [
                "Ancient Egyptians invented one of the first forms of toothpaste, made from crushed eggshells, pumice, and ox hooves mixed with water.",
                "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid — the pyramids are that old.",
                "Egyptian workers who built the pyramids were not slaves but paid laborers who received beer, bread, and medical care.",
                "Ancient Egyptians kept cats as sacred animals and shaved their eyebrows to mourn when a family cat died.",
                "The ancient Egyptians invented papyrus, one of the earliest forms of paper, made from the pith of the papyrus plant that grew along the Nile.",
                "Egyptian doctors were remarkably advanced — they performed surgery, set broken bones, and even had specialists for different parts of the body over 4,000 years ago."
            ]
        },
        currentEvents: [
            { fr: "Des archéologues découvrent de nouvelles tombes en Égypte grâce à la technologie satellite.", en: "Archaeologists discover new tombs in Egypt using satellite technology." },
            { fr: "Le changement climatique menace les sites historiques dans le monde entier.", en: "Climate change threatens historic sites around the world." },
            { fr: "Les musées utilisent la réalité virtuelle pour montrer l'histoire ancienne.", en: "Museums are using virtual reality to showcase ancient history." },
            { fr: "Le Grand Musée égyptien ouvre ses portes au Caire près des pyramides de Gizeh.", en: "The Grand Egyptian Museum opens its doors in Cairo near the Giza pyramids." }
        ],
        vocabulary: [
            {
                word: "faim", partOfSpeech: "noun (f)", meaning: "hunger",
                example: { fr: "J'ai faim.", en: "I am hungry." },
                homonyms: [{ word: "fin", meaning: "end / thin", example: "C'est la fin du film. (It's the end of the movie.)" }],
                synonyms: [{ word: "appétit", meaning: "appetite" }, { word: "fringale", meaning: "craving" }]
            },
            {
                word: "raison", partOfSpeech: "noun (f)", meaning: "reason / right",
                example: { fr: "Tu as raison.", en: "You are right." },
                homonyms: [],
                synonyms: [{ word: "motif", meaning: "motive" }, { word: "cause", meaning: "cause" }]
            },
            {
                word: "besoin", partOfSpeech: "noun (m)", meaning: "need",
                example: { fr: "Nous avons besoin d'aide.", en: "We need help." },
                homonyms: [],
                synonyms: [{ word: "nécessité", meaning: "necessity" }, { word: "exigence", meaning: "requirement" }]
            },
            {
                word: "chance", partOfSpeech: "noun (f)", meaning: "luck",
                example: { fr: "Vous avez de la chance.", en: "You are lucky." },
                homonyms: [{ word: "chance", meaning: "chance/opportunity (in English loanword context)", example: "Donne-moi une chance. (Give me a chance.)" }],
                synonyms: [{ word: "fortune", meaning: "fortune" }, { word: "veine", meaning: "luck (informal)" }]
            },
            {
                word: "ans", partOfSpeech: "noun (m pl)", meaning: "years (of age)",
                example: { fr: "Elle a trente ans.", en: "She is thirty years old." },
                homonyms: [],
                synonyms: [{ word: "années", meaning: "years (duration)" }]
            },
            {
                word: "donner", partOfSpeech: "verb", meaning: "to give",
                example: { fr: "Je te donne mon numéro.", en: "I give you my number." },
                homonyms: [],
                synonyms: [{ word: "offrir", meaning: "to offer" }, { word: "fournir", meaning: "to provide" }]
            }
        ],
        artHistory: {
            period: "Le Rococo (1720–1780)",
            periodEn: "Rococo (1720–1780)",
            context: "Le Rococo est un style artistique français caractérisé par l'élégance, la légèreté et les couleurs pastel. Il célèbre la joie de vivre de l'aristocratie française avant la Révolution.",
            contextEn: "Rococo is a French artistic style characterized by elegance, lightness, and pastel colors. It celebrates the joy of living of the French aristocracy before the Revolution.",
            artworks: [
                {
                    title: "Le Pèlerinage à l'île de Cythère",
                    titleEn: "Pilgrimage to the Isle of Cythera",
                    artist: "Jean-Antoine Watteau",
                    year: 1717,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Jean-Antoine_Watteau_-_L%27Embarquement_pour_Cyth%C3%A8re.jpg/800px-Jean-Antoine_Watteau_-_L%27Embarquement_pour_Cyth%C3%A8re.jpg",
                    descFr: "Ce chef-d'œuvre du Rococo montre des couples élégants dans un paysage idyllique. L'île de Cythère symbolise l'amour et la romance.",
                    descEn: "This Rococo masterpiece shows elegant couples in an idyllic landscape. The isle of Cythera symbolizes love and romance."
                },
                {
                    title: "La Balançoire",
                    titleEn: "The Swing",
                    artist: "Jean-Honoré Fragonard",
                    year: 1767,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Fragonard%2C_The_Swing.jpg/800px-Fragonard%2C_The_Swing.jpg",
                    descFr: "Une jeune femme se balance dans un jardin luxuriant. Ce tableau incarne la légèreté et l'esprit joueur du Rococo.",
                    descEn: "A young woman swings in a lush garden. This painting embodies the lightness and playful spirit of Rococo."
                }
            ],
            vocab: [
                { word: "la légèreté", meaning: "lightness" },
                { word: "un chef-d'œuvre", meaning: "a masterpiece" },
                { word: "un paysage", meaning: "a landscape" },
                { word: "l'amour", meaning: "love" },
                { word: "un jardin", meaning: "a garden" },
                { word: "élégant(e)", meaning: "elegant" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "J'___ une question importante.", answer: "ai", options: ["ai", "as", "a", "avons"] },
            { type: "fill", prompt: "Elle ___ vingt-cinq ans.", answer: "a", options: ["est", "a", "ai", "as"] },
            { type: "fill", prompt: "Nous ___ besoin de temps.", answer: "avons", options: ["avons", "avez", "ont", "ai"] },
            { type: "translate", en: "I am hungry.", answer: "J'ai faim.", accept: ["j'ai faim"] },
            { type: "translate", en: "You are right.", answer: "Tu as raison.", accept: ["tu as raison", "vous avez raison"] },
            { type: "history", fr: "Les Égyptiens avaient des connaissances avancées.", answer: "The Egyptians had advanced knowledge.", options: ["The Egyptians had advanced knowledge.", "The Egyptians had ancient temples.", "The Egyptians had golden treasures.", "The Egyptians had powerful armies."] },
            { type: "fill", prompt: "Je ___ un café le matin.", answer: "prends", options: ["prends", "prend", "prenons", "prenez"] },
            { type: "fill", prompt: "Elle ___ des cadeaux à ses amis.", answer: "donne", options: ["donne", "donnes", "donnent", "donnons"] },
            { type: "translate", en: "She takes the bus.", answer: "Elle prend le bus.", accept: ["elle prend le bus"] },
            { type: "history", fr: "Les ouvriers des pyramides recevaient de la bière et du pain.", answer: "The pyramid workers received beer and bread.", options: ["The pyramid workers received beer and bread.", "The pyramid workers received gold and jewels.", "The pyramid workers were enslaved.", "The pyramid workers received land."] },
            { type: "fill", prompt: "Je ___ un bon souvenir de ce voyage.", answer: "garde", options: ["garde", "gardes", "gardons", "gardent"] },
            { type: "fill", prompt: "Il ___ toujours ses affaires.", answer: "perd", options: ["perd", "perds", "perdons", "perdent"] },
            { type: "translate", en: "They keep the secret.", answer: "Ils gardent le secret.", accept: ["ils gardent le secret", "elles gardent le secret"] },
            { type: "history", fr: "Les Égyptiens gardaient les chats comme animaux sacrés.", answer: "The Egyptians kept cats as sacred animals.", options: ["The Egyptians kept cats as sacred animals.", "The Egyptians kept dogs as sacred animals.", "The Egyptians kept cats as pets only.", "The Egyptians feared cats."] }
        ]
    },

    // ===== LESSON 3: Aller =====
    {
        id: 3,
        title: "Aller — To Go",
        desc: "Movement, future tense, and asking 'how are you?'",
        frenchFocus: {
            verb: "aller",
            conjugation: {
                "je": "vais",
                "tu": "vas",
                "il/elle": "va",
                "nous": "allons",
                "vous": "allez",
                "ils/elles": "vont"
            },
            pattern: "Subject + aller + à/au/en + place | aller + infinitive (near future)",
            examples: [
                { fr: "Je vais au bureau.", en: "I'm going to the office." },
                { fr: "Comment allez-vous ?", en: "How are you? (formal)" },
                { fr: "Elle va en France.", en: "She's going to France." },
                { fr: "Nous allons manger.", en: "We are going to eat." },
                { fr: "Tu vas réussir.", en: "You are going to succeed." },
                { fr: "Ils vont au cinéma.", en: "They are going to the cinema." }
            ],
            tips: "Use 'aller + infinitive' for near future: 'Je vais étudier' = 'I'm going to study.' Use 'au' (à + le) for masculine places, 'à la' for feminine, 'en' for countries.",
            homonyms: [],
            synonyms: [{ word: "se rendre", meaning: "to head to" }, { word: "partir", meaning: "to leave" }],
            extraVerbs: [
                {
                    verb: "venir", meaning: "to come",
                    conjugation: { "je": "viens", "tu": "viens", "il/elle": "vient", "nous": "venons", "vous": "venez", "ils/elles": "viennent" },
                    examples: [{ fr: "Tu viens avec nous ?", en: "Are you coming with us?" }, { fr: "Je viens de France.", en: "I come from France." }],
                    homonyms: [],
                    synonyms: [{ word: "arriver", meaning: "to arrive" }, { word: "se présenter", meaning: "to show up" }]
                },
                {
                    verb: "partir", meaning: "to leave / to depart",
                    conjugation: { "je": "pars", "tu": "pars", "il/elle": "part", "nous": "partons", "vous": "partez", "ils/elles": "partent" },
                    examples: [{ fr: "Le train part à huit heures.", en: "The train leaves at eight o'clock." }, { fr: "Nous partons demain.", en: "We are leaving tomorrow." }],
                    homonyms: [],
                    synonyms: [{ word: "quitter", meaning: "to leave" }, { word: "s'en aller", meaning: "to go away" }]
                },
                {
                    verb: "retourner", meaning: "to return / to go back",
                    conjugation: { "je": "retourne", "tu": "retournes", "il/elle": "retourne", "nous": "retournons", "vous": "retournez", "ils/elles": "retournent" },
                    examples: [{ fr: "Je retourne en Italie cet été.", en: "I am going back to Italy this summer." }, { fr: "Nous retournons au musée.", en: "We are going back to the museum." }],
                    homonyms: [{ word: "retourner", meaning: "to flip over", example: "Retourne la crêpe. (Flip the crêpe.)" }],
                    synonyms: [{ word: "revenir", meaning: "to come back" }, { word: "rentrer", meaning: "to go home" }]
                },
                {
                    verb: "marcher", meaning: "to walk",
                    conjugation: { "je": "marche", "tu": "marches", "il/elle": "marche", "nous": "marchons", "vous": "marchez", "ils/elles": "marchent" },
                    examples: [{ fr: "Je marche dans la rue.", en: "I walk in the street." }, { fr: "Nous marchons vers la cathédrale.", en: "We walk toward the cathedral." }],
                    homonyms: [{ word: "marcher", meaning: "to work/function", example: "Ça ne marche pas. (It doesn't work.)" }],
                    synonyms: [{ word: "se promener", meaning: "to stroll" }, { word: "avancer", meaning: "to advance" }]
                }
            ]
        },
        history: {
            period: "Renaissance Italy (1400s)",
            fr: "La Renaissance a commencé en Italie au quinzième siècle. Les artistes allaient à Florence pour étudier l'art. Léonard de Vinci allait de ville en ville pour travailler. Cette période a transformé l'art, la science et la philosophie en Europe.",
            en: "The Renaissance began in Italy in the fifteenth century. Artists went to Florence to study art. Leonardo da Vinci went from city to city to work. This period transformed art, science, and philosophy in Europe.",
            vocab: [
                { word: "le siècle", meaning: "the century" },
                { word: "les artistes", meaning: "the artists" },
                { word: "étudier", meaning: "to study" },
                { word: "de ville en ville", meaning: "from city to city" },
                { word: "la philosophie", meaning: "philosophy" }
            ],
            funFact: "Leonardo da Vinci wrote all his notes backwards in mirror script — you need a mirror to read them!",
            facts: [
                "Michelangelo painted the Sistine Chapel ceiling while lying on his back on scaffolding for four years (1508-1512) — and he considered himself a sculptor, not a painter.",
                "The Medici family of Florence were bankers who funded much of the Renaissance, sponsoring artists like Botticelli, Leonardo, and Michelangelo.",
                "The printing press, invented by Gutenberg around 1440, helped spread Renaissance ideas across Europe faster than ever before.",
                "Leonardo da Vinci designed flying machines, tanks, and solar power concentrators centuries before they were actually built.",
                "During the Renaissance, Florence had more banks than any other city in Europe, and the gold florin was the standard currency of international trade.",
                "Galileo Galilei, born in Pisa in 1564, used a telescope to prove that the Earth revolves around the Sun, challenging centuries of belief."
            ]
        },
        currentEvents: [
            { fr: "L'Italie restaure des monuments historiques grâce à des technologies 3D.", en: "Italy is restoring historical monuments using 3D technologies." },
            { fr: "Les jeunes du monde entier utilisent les réseaux sociaux pour apprendre l'art.", en: "Young people worldwide use social media to learn about art." },
            { fr: "Le tourisme culturel reprend en Europe après la pandémie.", en: "Cultural tourism is recovering in Europe after the pandemic." },
            { fr: "Des œuvres de Léonard de Vinci sont exposées dans une nouvelle exposition immersive à Milan.", en: "Works by Leonardo da Vinci are displayed in a new immersive exhibition in Milan." }
        ],
        vocabulary: [
            {
                word: "aller", partOfSpeech: "verb", meaning: "to go",
                example: { fr: "Je vais au bureau.", en: "I'm going to the office." },
                homonyms: [],
                synonyms: [{ word: "se rendre", meaning: "to head to" }, { word: "partir", meaning: "to leave/depart" }]
            },
            {
                word: "venir", partOfSpeech: "verb", meaning: "to come",
                example: { fr: "Tu viens avec nous ?", en: "Are you coming with us?" },
                homonyms: [],
                synonyms: [{ word: "arriver", meaning: "to arrive" }, { word: "se présenter", meaning: "to show up" }]
            },
            {
                word: "bureau", partOfSpeech: "noun (m)", meaning: "office / desk",
                example: { fr: "Je vais au bureau.", en: "I'm going to the office." },
                homonyms: [{ word: "bureau", meaning: "desk (furniture)", example: "Le livre est sur le bureau. (The book is on the desk.)" }],
                synonyms: [{ word: "cabinet", meaning: "office (professional)" }, { word: "lieu de travail", meaning: "workplace" }]
            },
            {
                word: "cinéma", partOfSpeech: "noun (m)", meaning: "cinema / movies",
                example: { fr: "Ils vont au cinéma.", en: "They are going to the cinema." },
                homonyms: [],
                synonyms: [{ word: "salle de cinéma", meaning: "movie theater" }, { word: "film", meaning: "film/movie" }]
            },
            {
                word: "marcher", partOfSpeech: "verb", meaning: "to walk",
                example: { fr: "Je marche dans la rue.", en: "I walk in the street." },
                homonyms: [{ word: "marcher", meaning: "to work/function", example: "Mon téléphone ne marche pas. (My phone doesn't work.)" }],
                synonyms: [{ word: "se promener", meaning: "to stroll" }, { word: "avancer", meaning: "to advance" }]
            },
            {
                word: "retourner", partOfSpeech: "verb", meaning: "to return / go back",
                example: { fr: "Je retourne en Italie.", en: "I'm going back to Italy." },
                homonyms: [{ word: "retourner", meaning: "to flip/turn over", example: "Retourne la crêpe. (Flip the crêpe.)" }],
                synonyms: [{ word: "revenir", meaning: "to come back" }, { word: "rentrer", meaning: "to go home" }]
            }
        ],
        artHistory: {
            period: "Le Romantisme (1800–1850)",
            periodEn: "Romanticism (1800–1850)",
            context: "Le Romantisme français privilégie l'émotion, la passion et l'imagination. Les artistes rejettent la raison froide du néoclassicisme pour exprimer des sentiments intenses et la beauté de la nature sauvage.",
            contextEn: "French Romanticism favors emotion, passion, and imagination. Artists reject the cold reason of neoclassicism to express intense feelings and the beauty of wild nature.",
            artworks: [
                {
                    title: "La Liberté guidant le peuple",
                    titleEn: "Liberty Leading the People",
                    artist: "Eugène Delacroix",
                    year: 1830,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/800px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg",
                    descFr: "Ce tableau emblématique montre une femme symbolisant la Liberté qui mène le peuple français pendant la Révolution de Juillet 1830. Elle tient le drapeau tricolore.",
                    descEn: "This iconic painting shows a woman symbolizing Liberty leading the French people during the July Revolution of 1830. She holds the tricolor flag."
                },
                {
                    title: "Le Radeau de la Méduse",
                    titleEn: "The Raft of the Medusa",
                    artist: "Théodore Géricault",
                    year: 1819,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg/800px-JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg",
                    descFr: "Cette peinture dramatique représente les survivants d'un naufrage sur un radeau en mer. C'est un symbole de la souffrance humaine et de l'espoir.",
                    descEn: "This dramatic painting depicts the survivors of a shipwreck on a raft at sea. It is a symbol of human suffering and hope."
                }
            ],
            vocab: [
                { word: "la liberté", meaning: "liberty/freedom" },
                { word: "le peuple", meaning: "the people" },
                { word: "le drapeau", meaning: "the flag" },
                { word: "la souffrance", meaning: "suffering" },
                { word: "l'espoir", meaning: "hope" },
                { word: "sauvage", meaning: "wild" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Je ___ au restaurant ce soir.", answer: "vais", options: ["vais", "vas", "va", "allons"] },
            { type: "fill", prompt: "Nous ___ étudier le français.", answer: "allons", options: ["allons", "allez", "vont", "vais"] },
            { type: "fill", prompt: "Comment ___-vous ?", answer: "allez", options: ["allez", "allons", "vont", "vas"] },
            { type: "translate", en: "She is going to France.", answer: "Elle va en France.", accept: ["elle va en france"] },
            { type: "translate", en: "We are going to eat.", answer: "Nous allons manger.", accept: ["nous allons manger", "on va manger"] },
            { type: "history", fr: "Les artistes allaient à Florence pour étudier l'art.", answer: "Artists went to Florence to study art.", options: ["Artists went to Florence to study art.", "Artists went to Rome to study law.", "Artists went to Florence to sell paintings.", "Artists went to Paris to study music."] },
            { type: "fill", prompt: "Tu ___ avec nous au cinéma ?", answer: "viens", options: ["viens", "vient", "venez", "venons"] },
            { type: "fill", prompt: "Le train ___ à neuf heures.", answer: "part", options: ["part", "pars", "partez", "partent"] },
            { type: "translate", en: "We are leaving tomorrow.", answer: "Nous partons demain.", accept: ["nous partons demain", "on part demain"] },
            { type: "history", fr: "L'imprimerie a aidé à diffuser les idées de la Renaissance.", answer: "The printing press helped spread Renaissance ideas.", options: ["The printing press helped spread Renaissance ideas.", "The printing press was invented in Florence.", "The printing press replaced handwriting entirely.", "The printing press was banned during the Renaissance."] },
            { type: "fill", prompt: "Je ___ en Italie cet été.", answer: "retourne", options: ["retourne", "retournes", "retournons", "retournent"] },
            { type: "fill", prompt: "Nous ___ vers le musée.", answer: "marchons", options: ["marchons", "marchez", "marche", "marchent"] },
            { type: "translate", en: "We are going back to the museum.", answer: "Nous retournons au musée.", accept: ["nous retournons au musée", "nous retournons au musee", "on retourne au musée"] },
            { type: "history", fr: "Galilée a utilisé un télescope pour prouver que la Terre tourne autour du Soleil.", answer: "Galileo used a telescope to prove that the Earth revolves around the Sun.", options: ["Galileo used a telescope to prove that the Earth revolves around the Sun.", "Galileo invented the telescope in Florence.", "Galileo used a telescope to discover a new planet.", "Galileo used a telescope to map the oceans."] }
        ]
    },

    // ===== LESSON 4: Faire =====
    {
        id: 4,
        title: "Faire — To Do / To Make",
        desc: "Weather, activities, household tasks — faire does it all!",
        frenchFocus: {
            verb: "faire",
            conjugation: {
                "je": "fais",
                "tu": "fais",
                "il/elle": "fait",
                "nous": "faisons",
                "vous": "faites",
                "ils/elles": "font"
            },
            pattern: "Subject + faire + activity / Il fait + weather",
            examples: [
                { fr: "Je fais du sport.", en: "I do sports / exercise." },
                { fr: "Qu'est-ce que tu fais ?", en: "What are you doing?" },
                { fr: "Il fait beau aujourd'hui.", en: "The weather is nice today." },
                { fr: "Nous faisons la cuisine.", en: "We are cooking." },
                { fr: "Elle fait ses devoirs.", en: "She is doing her homework." },
                { fr: "Il fait froid en hiver.", en: "It's cold in winter." }
            ],
            tips: "'Faire' is used for weather (il fait chaud/froid/beau), activities (faire du sport, faire la cuisine), and many set expressions. It's one of the most versatile French verbs!",
            homonyms: [],
            synonyms: [{ word: "réaliser", meaning: "to carry out" }, { word: "effectuer", meaning: "to perform" }, { word: "créer", meaning: "to create" }],
            extraVerbs: [
                {
                    verb: "travailler", meaning: "to work",
                    conjugation: { "je": "travaille", "tu": "travailles", "il/elle": "travaille", "nous": "travaillons", "vous": "travaillez", "ils/elles": "travaillent" },
                    examples: [{ fr: "Je travaille dans un bureau.", en: "I work in an office." }, { fr: "Elles travaillent le weekend.", en: "They work on weekends." }],
                    homonyms: [],
                    synonyms: [{ word: "bosser", meaning: "to work (informal)" }, { word: "œuvrer", meaning: "to labor" }]
                },
                {
                    verb: "jouer", meaning: "to play",
                    conjugation: { "je": "joue", "tu": "joues", "il/elle": "joue", "nous": "jouons", "vous": "jouez", "ils/elles": "jouent" },
                    examples: [{ fr: "Les enfants jouent dans le parc.", en: "The children play in the park." }, { fr: "Tu joues du piano ?", en: "Do you play the piano?" }],
                    homonyms: [],
                    synonyms: [{ word: "s'amuser", meaning: "to have fun" }, { word: "pratiquer", meaning: "to practice" }]
                },
                {
                    verb: "construire", meaning: "to build / to construct",
                    conjugation: { "je": "construis", "tu": "construis", "il/elle": "construit", "nous": "construisons", "vous": "construisez", "ils/elles": "construisent" },
                    examples: [{ fr: "Ils construisent un nouveau pont.", en: "They are building a new bridge." }, { fr: "Nous construisons notre avenir.", en: "We are building our future." }],
                    homonyms: [],
                    synonyms: [{ word: "bâtir", meaning: "to build" }, { word: "édifier", meaning: "to erect" }]
                },
                {
                    verb: "écrire", meaning: "to write",
                    conjugation: { "je": "écris", "tu": "écris", "il/elle": "écrit", "nous": "écrivons", "vous": "écrivez", "ils/elles": "écrivent" },
                    examples: [{ fr: "Elle écrit une lettre.", en: "She is writing a letter." }, { fr: "Les soldats écrivent à leurs familles.", en: "The soldiers write to their families." }],
                    homonyms: [],
                    synonyms: [{ word: "rédiger", meaning: "to draft/compose" }, { word: "noter", meaning: "to note down" }]
                }
            ]
        },
        history: {
            period: "World War I (1914-1918)",
            fr: "La Première Guerre mondiale a fait des millions de victimes. Les soldats faisaient face à des conditions terribles dans les tranchées. En France, les femmes faisaient le travail dans les usines. Cette guerre a changé le monde pour toujours.",
            en: "World War I caused millions of casualties. Soldiers faced terrible conditions in the trenches. In France, women did the work in the factories. This war changed the world forever.",
            vocab: [
                { word: "une guerre", meaning: "a war" },
                { word: "les victimes", meaning: "casualties/victims" },
                { word: "les tranchées", meaning: "the trenches" },
                { word: "les usines", meaning: "the factories" },
                { word: "pour toujours", meaning: "forever" }
            ],
            funFact: "During WWI, the French built a fake Paris near the city to confuse German bombers flying at night.",
            facts: [
                "The Christmas Truce of 1914 saw British and German soldiers leave their trenches to exchange gifts and play football in no man's land.",
                "More than 12 million letters were delivered to the front lines every week during WWI, keeping soldiers connected to their families.",
                "Tanks were first used in battle during WWI — they were called 'tanks' as a code name to keep them secret during transport, and the name stuck.",
                "Carrier pigeons were used to deliver messages across enemy lines during WWI, and one pigeon named Cher Ami saved nearly 200 American soldiers.",
                "The war saw the first large-scale use of chemical weapons, with mustard gas and chlorine gas causing devastating injuries in the trenches.",
                "Over 600,000 French soldiers died at the Battle of Verdun alone in 1916, making it one of the longest and most costly battles in history."
            ]
        },
        currentEvents: [
            { fr: "Les commémorations de la Première Guerre mondiale continuent dans toute l'Europe.", en: "World War I commemorations continue across Europe." },
            { fr: "Le télétravail change la façon dont les gens travaillent dans le monde.", en: "Remote work is changing how people work around the world." },
            { fr: "Les femmes occupent de plus en plus de postes de direction dans les entreprises.", en: "Women are holding more and more leadership positions in companies." },
            { fr: "Des historiens utilisent la technologie pour identifier des soldats inconnus de la Grande Guerre.", en: "Historians are using technology to identify unknown soldiers from the Great War." }
        ],
        vocabulary: [
            {
                word: "faire", partOfSpeech: "verb", meaning: "to do / to make",
                example: { fr: "Je fais du sport.", en: "I do sports." },
                homonyms: [],
                synonyms: [{ word: "réaliser", meaning: "to carry out" }, { word: "effectuer", meaning: "to perform" }]
            },
            {
                word: "beau", partOfSpeech: "adjective", meaning: "beautiful / nice (weather)",
                example: { fr: "Il fait beau aujourd'hui.", en: "The weather is nice today." },
                homonyms: [],
                synonyms: [{ word: "joli", meaning: "pretty" }, { word: "magnifique", meaning: "magnificent" }, { word: "splendide", meaning: "splendid" }]
            },
            {
                word: "froid", partOfSpeech: "adjective/noun", meaning: "cold",
                example: { fr: "Il fait froid en hiver.", en: "It's cold in winter." },
                homonyms: [],
                synonyms: [{ word: "glacial", meaning: "icy/freezing" }, { word: "frais", meaning: "cool/fresh" }]
            },
            {
                word: "travailler", partOfSpeech: "verb", meaning: "to work",
                example: { fr: "Je travaille dans un bureau.", en: "I work in an office." },
                homonyms: [],
                synonyms: [{ word: "bosser", meaning: "to work (informal)" }, { word: "œuvrer", meaning: "to labor" }]
            },
            {
                word: "jouer", partOfSpeech: "verb", meaning: "to play",
                example: { fr: "Les enfants jouent dans le parc.", en: "The children play in the park." },
                homonyms: [],
                synonyms: [{ word: "s'amuser", meaning: "to have fun" }]
            },
            {
                word: "guerre", partOfSpeech: "noun (f)", meaning: "war",
                example: { fr: "La Première Guerre mondiale.", en: "World War I." },
                homonyms: [],
                synonyms: [{ word: "conflit", meaning: "conflict" }, { word: "bataille", meaning: "battle" }, { word: "combat", meaning: "combat" }]
            }
        ],
        artHistory: {
            period: "L'Impressionnisme (1860–1890)",
            periodEn: "Impressionism (1860–1890)",
            context: "L'Impressionnisme est né à Paris et a révolutionné l'art occidental. Les peintres capturent les effets de la lumière et les moments fugaces de la vie quotidienne en plein air, avec des touches de couleur rapides.",
            contextEn: "Impressionism was born in Paris and revolutionized Western art. Painters capture the effects of light and fleeting moments of everyday life outdoors, with quick brushstrokes of color.",
            artworks: [
                {
                    title: "Impression, soleil levant",
                    titleEn: "Impression, Sunrise",
                    artist: "Claude Monet",
                    year: 1872,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/800px-Monet_-_Impression%2C_Sunrise.jpg",
                    descFr: "Ce tableau a donné son nom au mouvement impressionniste. Monet peint le port du Havre au lever du soleil avec des couleurs douces et des reflets sur l'eau.",
                    descEn: "This painting gave its name to the Impressionist movement. Monet paints the port of Le Havre at sunrise with soft colors and reflections on the water."
                },
                {
                    title: "Le Déjeuner des canotiers",
                    titleEn: "Luncheon of the Boating Party",
                    artist: "Pierre-Auguste Renoir",
                    year: 1881,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg/800px-Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg",
                    descFr: "Renoir capture un déjeuner entre amis au bord de la Seine. La lumière naturelle illumine les visages souriants et les verres de vin.",
                    descEn: "Renoir captures a lunch among friends by the Seine. Natural light illuminates the smiling faces and wine glasses."
                }
            ],
            vocab: [
                { word: "la lumière", meaning: "light" },
                { word: "le soleil", meaning: "the sun" },
                { word: "un reflet", meaning: "a reflection" },
                { word: "en plein air", meaning: "outdoors" },
                { word: "une touche", meaning: "a brushstroke" },
                { word: "la couleur", meaning: "color" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Je ___ du yoga chaque matin.", answer: "fais", options: ["fais", "fait", "faisons", "font"] },
            { type: "fill", prompt: "Il ___ très chaud en été.", answer: "fait", options: ["fais", "fait", "faites", "font"] },
            { type: "fill", prompt: "Qu'est-ce que vous ___ ?", answer: "faites", options: ["faites", "faisons", "fais", "font"] },
            { type: "translate", en: "The weather is nice today.", answer: "Il fait beau aujourd'hui.", accept: ["il fait beau aujourd'hui", "il fait beau"] },
            { type: "translate", en: "We are cooking.", answer: "Nous faisons la cuisine.", accept: ["nous faisons la cuisine", "on fait la cuisine"] },
            { type: "history", fr: "Les femmes faisaient le travail dans les usines.", answer: "Women did the work in the factories.", options: ["Women did the work in the factories.", "Women did the cooking in the kitchens.", "Women did the farming in the fields.", "Women did the nursing in the hospitals."] },
            { type: "fill", prompt: "Je ___ dans un hôpital.", answer: "travaille", options: ["travaille", "travailles", "travaillons", "travaillent"] },
            { type: "fill", prompt: "Les enfants ___ au football.", answer: "jouent", options: ["jouent", "joue", "jouons", "jouez"] },
            { type: "translate", en: "Do you play the piano?", answer: "Tu joues du piano ?", accept: ["tu joues du piano", "vous jouez du piano"] },
            { type: "history", fr: "La trêve de Noël de 1914 a vu les soldats jouer au football.", answer: "The Christmas Truce of 1914 saw soldiers play football.", options: ["The Christmas Truce of 1914 saw soldiers play football.", "The Christmas Truce of 1914 ended the war.", "The Christmas Truce of 1914 lasted a whole month.", "The Christmas Truce of 1914 was in France only."] },
            { type: "fill", prompt: "Ils ___ un nouveau pont.", answer: "construisent", options: ["construisent", "construit", "construisons", "construisez"] },
            { type: "fill", prompt: "Elle ___ une lettre à sa famille.", answer: "écrit", options: ["écrit", "écris", "écrivons", "écrivent"] },
            { type: "translate", en: "We are building our future.", answer: "Nous construisons notre avenir.", accept: ["nous construisons notre avenir", "on construit notre avenir"] },
            { type: "history", fr: "Des pigeons voyageurs livraient des messages pendant la guerre.", answer: "Carrier pigeons delivered messages during the war.", options: ["Carrier pigeons delivered messages during the war.", "Carrier pigeons were used as weapons during the war.", "Carrier pigeons were trained to spy during the war.", "Carrier pigeons carried food during the war."] }
        ]
    },

    // ===== LESSON 5: Pouvoir & Vouloir =====
    {
        id: 5,
        title: "Pouvoir & Vouloir — Can & Want",
        desc: "Express ability and desire — essential for polite French.",
        frenchFocus: {
            verb: "pouvoir / vouloir",
            conjugation: {
                "je": "peux / veux",
                "tu": "peux / veux",
                "il/elle": "peut / veut",
                "nous": "pouvons / voulons",
                "vous": "pouvez / voulez",
                "ils/elles": "peuvent / veulent"
            },
            pattern: "Subject + pouvoir/vouloir + infinitive",
            examples: [
                { fr: "Je peux vous aider.", en: "I can help you." },
                { fr: "Tu veux un café ?", en: "Do you want a coffee?" },
                { fr: "Elle ne peut pas venir.", en: "She can't come." },
                { fr: "Nous voulons comprendre.", en: "We want to understand." },
                { fr: "Pouvez-vous répéter ?", en: "Can you repeat? (polite)" },
                { fr: "Je voudrais un croissant.", en: "I would like a croissant." }
            ],
            tips: "'Je voudrais' (I would like) is the polite form of 'je veux' (I want). Always use 'voudrais' in shops and restaurants! These verbs are always followed by an infinitive.",
            homonyms: [{ word: "pouvoir", meaning: "power (noun)", example: "Le pouvoir du président. (The president's power.)" }],
            synonyms: [{ word: "être capable de", meaning: "to be capable of" }, { word: "désirer", meaning: "to desire (for vouloir)" }],
            extraVerbs: [
                {
                    verb: "savoir", meaning: "to know a fact / how to",
                    conjugation: { "je": "sais", "tu": "sais", "il/elle": "sait", "nous": "savons", "vous": "savez", "ils/elles": "savent" },
                    examples: [{ fr: "Je sais nager.", en: "I know how to swim." }, { fr: "Tu sais où elle habite ?", en: "Do you know where she lives?" }],
                    homonyms: [{ word: "savoir", meaning: "knowledge (noun)", example: "Le savoir est précieux. (Knowledge is precious.)" }],
                    synonyms: [{ word: "connaître", meaning: "to know (person/place)" }]
                },
                {
                    verb: "devoir", meaning: "to must / to have to",
                    conjugation: { "je": "dois", "tu": "dois", "il/elle": "doit", "nous": "devons", "vous": "devez", "ils/elles": "doivent" },
                    examples: [{ fr: "Je dois partir maintenant.", en: "I have to leave now." }, { fr: "Vous devez étudier.", en: "You must study." }],
                    homonyms: [{ word: "devoir", meaning: "homework/duty (noun)", example: "Fais tes devoirs ! (Do your homework!)" }],
                    synonyms: [{ word: "falloir", meaning: "to be necessary" }, { word: "être obligé de", meaning: "to be obligated to" }]
                },
                {
                    verb: "croire", meaning: "to believe",
                    conjugation: { "je": "crois", "tu": "crois", "il/elle": "croit", "nous": "croyons", "vous": "croyez", "ils/elles": "croient" },
                    examples: [{ fr: "Je crois en toi.", en: "I believe in you." }, { fr: "Ils croient que c'est possible.", en: "They believe it is possible." }],
                    homonyms: [],
                    synonyms: [{ word: "penser", meaning: "to think" }, { word: "estimer", meaning: "to consider" }]
                },
                {
                    verb: "choisir", meaning: "to choose",
                    conjugation: { "je": "choisis", "tu": "choisis", "il/elle": "choisit", "nous": "choisissons", "vous": "choisissez", "ils/elles": "choisissent" },
                    examples: [{ fr: "Je choisis le menu du jour.", en: "I choose the daily special." }, { fr: "Nous choisissons notre avenir.", en: "We choose our future." }],
                    homonyms: [],
                    synonyms: [{ word: "sélectionner", meaning: "to select" }, { word: "opter pour", meaning: "to opt for" }]
                }
            ]
        },
        history: {
            period: "Napoleon Bonaparte (1799-1815)",
            fr: "Napoléon Bonaparte voulait conquérir toute l'Europe. Il pouvait inspirer ses soldats avec ses discours. Il est devenu empereur de France en 1804. Mais il ne pouvait pas vaincre le froid terrible de la Russie, et cette défaite a marqué le début de sa chute.",
            en: "Napoleon Bonaparte wanted to conquer all of Europe. He could inspire his soldiers with his speeches. He became emperor of France in 1804. But he could not defeat the terrible cold of Russia, and this defeat marked the beginning of his downfall.",
            vocab: [
                { word: "conquérir", meaning: "to conquer" },
                { word: "inspirer", meaning: "to inspire" },
                { word: "un empereur", meaning: "an emperor" },
                { word: "vaincre", meaning: "to defeat" },
                { word: "la chute", meaning: "the downfall" }
            ],
            funFact: "Napoleon was not actually short — at 5'7\" he was average height for his time. The myth came from British propaganda!",
            facts: [
                "Napoleon introduced the Napoleonic Code, a legal system that still forms the basis of civil law in over 70 countries today, including France, Belgium, and Louisiana.",
                "During his Egyptian campaign, Napoleon brought 167 scientists and scholars who discovered the Rosetta Stone, which became the key to decoding hieroglyphs.",
                "After his final defeat at Waterloo in 1815, Napoleon was exiled to the tiny island of Saint Helena in the South Atlantic, where he died six years later.",
                "Napoleon once said that an army marches on its stomach, and he pioneered canned food preservation to feed his troops during long campaigns.",
                "Before becoming emperor, Napoleon was actually born in Corsica just one year after the island was transferred from Genoa to France, making him barely French by birth.",
                "Napoleon sold the Louisiana Territory to the United States in 1803 for about 15 million dollars, doubling the size of the young nation overnight."
            ]
        },
        currentEvents: [
            { fr: "Les dirigeants mondiaux débattent des réformes des Nations Unies.", en: "World leaders debate reforms of the United Nations." },
            { fr: "Les élections en France influencent la politique européenne.", en: "Elections in France influence European politics." },
            { fr: "Le droit international évolue pour répondre aux nouveaux conflits.", en: "International law is evolving to address new conflicts." },
            { fr: "La France commémore le bicentenaire de la mort de Napoléon avec des expositions nationales.", en: "France commemorates the bicentenary of Napoleon's death with national exhibitions." }
        ],
        vocabulary: [
            {
                word: "pouvoir", partOfSpeech: "verb", meaning: "to be able to / can",
                example: { fr: "Je peux vous aider.", en: "I can help you." },
                homonyms: [{ word: "pouvoir", meaning: "power (noun)", example: "Le pouvoir du roi. (The power of the king.)" }],
                synonyms: [{ word: "être capable de", meaning: "to be capable of" }]
            },
            {
                word: "vouloir", partOfSpeech: "verb", meaning: "to want",
                example: { fr: "Tu veux un café ?", en: "Do you want a coffee?" },
                homonyms: [],
                synonyms: [{ word: "désirer", meaning: "to desire" }, { word: "souhaiter", meaning: "to wish" }]
            },
            {
                word: "savoir", partOfSpeech: "verb", meaning: "to know (a fact/how to)",
                example: { fr: "Je sais nager.", en: "I know how to swim." },
                homonyms: [{ word: "savoir", meaning: "knowledge (noun)", example: "Le savoir est précieux. (Knowledge is precious.)" }],
                synonyms: [{ word: "connaître", meaning: "to know (person/place)" }]
            },
            {
                word: "devoir", partOfSpeech: "verb", meaning: "to must / to have to",
                example: { fr: "Je dois partir.", en: "I have to leave." },
                homonyms: [{ word: "devoir", meaning: "homework / duty (noun)", example: "Fais tes devoirs ! (Do your homework!)" }],
                synonyms: [{ word: "être obligé de", meaning: "to be obligated to" }, { word: "falloir", meaning: "to be necessary" }]
            },
            {
                word: "choisir", partOfSpeech: "verb", meaning: "to choose",
                example: { fr: "Je choisis le menu du jour.", en: "I choose the daily special." },
                homonyms: [],
                synonyms: [{ word: "sélectionner", meaning: "to select" }, { word: "opter pour", meaning: "to opt for" }]
            },
            {
                word: "empereur", partOfSpeech: "noun (m)", meaning: "emperor",
                example: { fr: "Il est devenu empereur.", en: "He became emperor." },
                homonyms: [],
                synonyms: [{ word: "souverain", meaning: "sovereign" }, { word: "monarque", meaning: "monarch" }]
            }
        ],
        artHistory: {
            period: "Le Post-Impressionnisme (1886–1910)",
            periodEn: "Post-Impressionism (1886–1910)",
            context: "Le Post-Impressionnisme prolonge l'Impressionnisme mais va plus loin. Les artistes utilisent des couleurs vives, des formes géométriques et des perspectives uniques pour exprimer leurs émotions personnelles.",
            contextEn: "Post-Impressionism extends Impressionism but goes further. Artists use vivid colors, geometric forms, and unique perspectives to express their personal emotions.",
            artworks: [
                {
                    title: "La Nuit étoilée (peinte en France)",
                    titleEn: "The Starry Night (painted in France)",
                    artist: "Vincent van Gogh",
                    year: 1889,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
                    descFr: "Van Gogh a peint ce chef-d'œuvre depuis un asile en Provence, France. Le ciel tourbillonnant exprime son tourment intérieur et sa fascination pour la nuit.",
                    descEn: "Van Gogh painted this masterpiece from an asylum in Provence, France. The swirling sky expresses his inner turmoil and fascination with the night."
                },
                {
                    title: "Les Joueurs de cartes",
                    titleEn: "The Card Players",
                    artist: "Paul Cézanne",
                    year: 1895,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne%2C_Yorck.jpg/800px-Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne%2C_Yorck.jpg",
                    descFr: "Cézanne peint des paysans provençaux jouant aux cartes. Les formes géométriques simples annoncent l'art moderne et le cubisme.",
                    descEn: "Cézanne paints Provençal peasants playing cards. The simple geometric forms herald modern art and cubism."
                }
            ],
            vocab: [
                { word: "le ciel", meaning: "the sky" },
                { word: "une étoile", meaning: "a star" },
                { word: "tourbillonnant", meaning: "swirling" },
                { word: "les formes", meaning: "shapes/forms" },
                { word: "un paysan", meaning: "a peasant" },
                { word: "vif/vive", meaning: "vivid/bright" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Je ___ vous aider.", answer: "peux", options: ["peux", "veux", "peut", "paux"] },
            { type: "fill", prompt: "Elle ___ un verre d'eau.", answer: "veut", options: ["veut", "peut", "veux", "voulez"] },
            { type: "fill", prompt: "Nous ne ___ pas venir demain.", answer: "pouvons", options: ["pouvons", "voulons", "pouvez", "peuvent"] },
            { type: "translate", en: "I would like a coffee.", answer: "Je voudrais un café.", accept: ["je voudrais un café", "je voudrais un cafe"] },
            { type: "translate", en: "Can you repeat?", answer: "Pouvez-vous répéter ?", accept: ["pouvez-vous répéter", "pouvez-vous repeter", "tu peux répéter", "tu peux repeter"] },
            { type: "history", fr: "Napoléon voulait conquérir toute l'Europe.", answer: "Napoleon wanted to conquer all of Europe.", options: ["Napoleon wanted to conquer all of Europe.", "Napoleon wanted to explore all of Africa.", "Napoleon wanted to unite all of Europe.", "Napoleon wanted to defend all of France."] },
            { type: "fill", prompt: "Je ___ nager depuis l'âge de cinq ans.", answer: "sais", options: ["sais", "sait", "savons", "savent"] },
            { type: "fill", prompt: "Tu ___ finir tes devoirs.", answer: "dois", options: ["dois", "doit", "devons", "devez"] },
            { type: "translate", en: "I have to leave now.", answer: "Je dois partir maintenant.", accept: ["je dois partir maintenant"] },
            { type: "history", fr: "Le Code Napoléon est encore la base du droit civil dans plus de 70 pays.", answer: "The Napoleonic Code is still the basis of civil law in over 70 countries.", options: ["The Napoleonic Code is still the basis of civil law in over 70 countries.", "The Napoleonic Code was abolished after his death.", "The Napoleonic Code only applied to France.", "The Napoleonic Code was written by his generals."] },
            { type: "fill", prompt: "Je ___ en toi.", answer: "crois", options: ["crois", "croit", "croyons", "croient"] },
            { type: "fill", prompt: "Nous ___ notre destination.", answer: "choisissons", options: ["choisissons", "choisissez", "choisit", "choisissent"] },
            { type: "translate", en: "They believe it is possible.", answer: "Ils croient que c'est possible.", accept: ["ils croient que c'est possible", "elles croient que c'est possible"] },
            { type: "history", fr: "Napoléon a vendu la Louisiane aux États-Unis en 1803.", answer: "Napoleon sold Louisiana to the United States in 1803.", options: ["Napoleon sold Louisiana to the United States in 1803.", "Napoleon conquered Louisiana in 1803.", "Napoleon gave Louisiana to Spain in 1803.", "Napoleon discovered Louisiana in 1803."] }
        ]
    },

    // ===== LESSON 6: Negation =====
    {
        id: 6,
        title: "La Négation — Saying No",
        desc: "ne...pas, ne...jamais, ne...rien — master French negation.",
        frenchFocus: {
            verb: "Negation patterns",
            conjugation: {
                "ne...pas": "not",
                "ne...plus": "no longer",
                "ne...jamais": "never",
                "ne...rien": "nothing",
                "ne...personne": "nobody",
                "ne...que": "only"
            },
            pattern: "Subject + ne + verb + pas/plus/jamais/rien",
            examples: [
                { fr: "Je ne comprends pas.", en: "I don't understand." },
                { fr: "Elle ne mange jamais de viande.", en: "She never eats meat." },
                { fr: "Il n'y a rien ici.", en: "There is nothing here." },
                { fr: "Nous ne travaillons plus là.", en: "We no longer work there." },
                { fr: "Je ne connais personne.", en: "I don't know anyone." },
                { fr: "Il n'a que vingt ans.", en: "He is only twenty years old." }
            ],
            tips: "In spoken French, people often drop the 'ne': 'Je comprends pas' instead of 'Je ne comprends pas.' But always write the 'ne' in formal contexts!",
            homonyms: [],
            synonyms: [],
            extraVerbs: [
                {
                    verb: "connaître", meaning: "to know a person / place",
                    conjugation: { "je": "connais", "tu": "connais", "il/elle": "connaît", "nous": "connaissons", "vous": "connaissez", "ils/elles": "connaissent" },
                    examples: [{ fr: "Je ne connais pas cette ville.", en: "I don't know this city." }, { fr: "Tu connais Marie ?", en: "Do you know Marie?" }],
                    homonyms: [],
                    synonyms: [{ word: "savoir", meaning: "to know (fact)" }, { word: "reconnaître", meaning: "to recognize" }]
                },
                {
                    verb: "croire", meaning: "to believe",
                    conjugation: { "je": "crois", "tu": "crois", "il/elle": "croit", "nous": "croyons", "vous": "croyez", "ils/elles": "croient" },
                    examples: [{ fr: "Je ne crois pas cette histoire.", en: "I don't believe this story." }, { fr: "Nous croyons en toi.", en: "We believe in you." }],
                    homonyms: [],
                    synonyms: [{ word: "penser", meaning: "to think" }, { word: "estimer", meaning: "to consider" }]
                },
                {
                    verb: "comprendre", meaning: "to understand",
                    conjugation: { "je": "comprends", "tu": "comprends", "il/elle": "comprend", "nous": "comprenons", "vous": "comprenez", "ils/elles": "comprennent" },
                    examples: [{ fr: "Je ne comprends rien à ce problème.", en: "I don't understand anything about this problem." }, { fr: "Elle comprend trois langues.", en: "She understands three languages." }],
                    homonyms: [],
                    synonyms: [{ word: "saisir", meaning: "to grasp" }, { word: "capter", meaning: "to get (informal)" }]
                },
                {
                    verb: "recevoir", meaning: "to receive",
                    conjugation: { "je": "reçois", "tu": "reçois", "il/elle": "reçoit", "nous": "recevons", "vous": "recevez", "ils/elles": "reçoivent" },
                    examples: [{ fr: "Je ne reçois jamais de lettres.", en: "I never receive letters." }, { fr: "Nous recevons des amis ce soir.", en: "We are receiving friends tonight." }],
                    homonyms: [],
                    synonyms: [{ word: "obtenir", meaning: "to obtain" }, { word: "accueillir", meaning: "to welcome" }]
                }
            ]
        },
        history: {
            period: "Ancient Greece (500 BCE)",
            fr: "Les anciens Grecs n'avaient pas de technologie moderne, mais ils n'étaient pas ignorants. La démocratie n'existait nulle part ailleurs dans le monde. Socrate ne voulait jamais écrire ses idées — c'est son élève Platon qui les a écrites. La philosophie grecque n'a jamais cessé d'influencer le monde.",
            en: "The ancient Greeks didn't have modern technology, but they weren't ignorant. Democracy didn't exist anywhere else in the world. Socrates never wanted to write his ideas — it was his student Plato who wrote them. Greek philosophy has never stopped influencing the world.",
            vocab: [
                { word: "la démocratie", meaning: "democracy" },
                { word: "nulle part", meaning: "nowhere" },
                { word: "ailleurs", meaning: "elsewhere" },
                { word: "un élève", meaning: "a student" },
                { word: "cesser", meaning: "to stop/cease" }
            ],
            funFact: "In ancient Athens, citizens could vote to banish someone for 10 years — it was called 'ostracism,' and names were written on pottery shards.",
            facts: [
                "The ancient Olympic Games, first held in 776 BCE, banned women from competing and even from watching — violators faced the death penalty.",
                "Ancient Greek theaters had such perfect acoustics that a whisper on stage could be heard by all 15,000 spectators in the back rows.",
                "The Greeks invented the alarm clock around 250 BCE — Plato used a water clock that made a whistling sound to wake his students for early morning lectures.",
                "Ancient Greeks exercised completely naked in the gymnasium — the word 'gymnasium' comes from the Greek 'gymnos,' meaning naked.",
                "Sparta had a brutal training program called the agoge where boys were taken from their families at age 7 and trained as warriors until age 30.",
                "The ancient Greeks believed that redheads turned into vampires after death — this superstition persisted in Greek folklore for centuries."
            ]
        },
        currentEvents: [
            { fr: "La Grèce continue de réclamer le retour des marbres du Parthénon exposés à Londres.", en: "Greece continues to demand the return of the Parthenon marbles displayed in London." },
            { fr: "La démocratie fait face à de nouveaux défis dans le monde numérique.", en: "Democracy faces new challenges in the digital world." },
            { fr: "Les philosophes modernes débattent de l'éthique de l'intelligence artificielle.", en: "Modern philosophers debate the ethics of artificial intelligence." },
            { fr: "Des archéologues découvrent de nouveaux trésors dans les ruines de temples grecs anciens.", en: "Archaeologists discover new treasures in the ruins of ancient Greek temples." }
        ],
        vocabulary: [
            {
                word: "jamais", partOfSpeech: "adverb", meaning: "never",
                example: { fr: "Elle ne mange jamais de viande.", en: "She never eats meat." },
                homonyms: [{ word: "jamais", meaning: "ever (in questions)", example: "As-tu jamais vu ça ? (Have you ever seen that?)" }],
                synonyms: [{ word: "à aucun moment", meaning: "at no point" }]
            },
            {
                word: "rien", partOfSpeech: "pronoun", meaning: "nothing",
                example: { fr: "Il n'y a rien ici.", en: "There is nothing here." },
                homonyms: [],
                synonyms: [{ word: "néant", meaning: "nothingness" }]
            },
            {
                word: "personne", partOfSpeech: "pronoun/noun", meaning: "nobody / a person",
                example: { fr: "Je ne connais personne.", en: "I don't know anyone." },
                homonyms: [{ word: "personne", meaning: "a person (noun)", example: "Cette personne est gentille. (This person is kind.)" }],
                synonyms: [{ word: "nul", meaning: "no one" }, { word: "aucun", meaning: "not any" }]
            },
            {
                word: "comprendre", partOfSpeech: "verb", meaning: "to understand",
                example: { fr: "Je ne comprends pas.", en: "I don't understand." },
                homonyms: [],
                synonyms: [{ word: "saisir", meaning: "to grasp" }, { word: "capter", meaning: "to get (informal)" }]
            },
            {
                word: "connaître", partOfSpeech: "verb", meaning: "to know (person/place)",
                example: { fr: "Tu connais Marie ?", en: "Do you know Marie?" },
                homonyms: [],
                synonyms: [{ word: "savoir", meaning: "to know (fact)" }, { word: "reconnaître", meaning: "to recognize" }]
            },
            {
                word: "démocratie", partOfSpeech: "noun (f)", meaning: "democracy",
                example: { fr: "La démocratie n'existait nulle part ailleurs.", en: "Democracy didn't exist anywhere else." },
                homonyms: [],
                synonyms: [{ word: "république", meaning: "republic" }, { word: "régime démocratique", meaning: "democratic system" }]
            }
        ],
        artHistory: {
            period: "Le Réalisme (1840–1880)",
            periodEn: "Realism (1840–1880)",
            context: "Le Réalisme rejette l'idéalisation romantique. Les peintres montrent la vie quotidienne des gens ordinaires — paysans, ouvriers, et scènes rurales — sans embellissement.",
            contextEn: "Realism rejects romantic idealization. Painters show the everyday life of ordinary people — peasants, workers, and rural scenes — without embellishment.",
            artworks: [
                {
                    title: "Un enterrement à Ornans",
                    titleEn: "A Burial at Ornans",
                    artist: "Gustave Courbet",
                    year: 1850,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project_2.jpg/800px-Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project_2.jpg",
                    descFr: "Courbet peint un enterrement de village avec des personnages grandeur nature. Il donne aux gens ordinaires la même importance que les héros classiques.",
                    descEn: "Courbet paints a village burial with life-size figures. He gives ordinary people the same importance as classical heroes."
                },
                {
                    title: "L'Angélus",
                    titleEn: "The Angelus",
                    artist: "Jean-François Millet",
                    year: 1859,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/JEAN-FRAN%C3%87OIS_MILLET_-_El_%C3%81ngelus_%28Museo_de_Orsay%2C_1857-1859%29.jpg/800px-JEAN-FRAN%C3%87OIS_MILLET_-_El_%C3%81ngelus_%28Museo_de_Orsay%2C_1857-1859%29.jpg",
                    descFr: "Deux paysans prient dans un champ au coucher du soleil. Cette image simple et émouvante est devenue l'une des plus reproduites au monde.",
                    descEn: "Two peasants pray in a field at sunset. This simple and moving image became one of the most reproduced in the world."
                }
            ],
            vocab: [
                { word: "un ouvrier", meaning: "a worker" },
                { word: "un champ", meaning: "a field" },
                { word: "le coucher du soleil", meaning: "sunset" },
                { word: "prier", meaning: "to pray" },
                { word: "quotidien(ne)", meaning: "daily/everyday" },
                { word: "ordinaire", meaning: "ordinary" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Je ne ___ pas français.", answer: "parle", options: ["parle", "parles", "parlons", "parlent"] },
            { type: "fill", prompt: "Elle ne mange ___ de viande.", answer: "jamais", options: ["jamais", "pas", "rien", "plus"] },
            { type: "fill", prompt: "Il n'y a ___ dans le frigo.", answer: "rien", options: ["rien", "pas", "jamais", "personne"] },
            { type: "translate", en: "I don't understand.", answer: "Je ne comprends pas.", accept: ["je ne comprends pas", "je comprends pas"] },
            { type: "translate", en: "We no longer work there.", answer: "Nous ne travaillons plus là.", accept: ["nous ne travaillons plus là", "nous ne travaillons plus la", "on ne travaille plus là", "on ne travaille plus la"] },
            { type: "history", fr: "La démocratie n'existait nulle part ailleurs.", answer: "Democracy didn't exist anywhere else.", options: ["Democracy didn't exist anywhere else.", "Democracy didn't exist in Athens.", "Democracy didn't exist before Greece.", "Democracy didn't exist without Socrates."] },
            { type: "fill", prompt: "Je ne ___ pas cette ville.", answer: "connais", options: ["connais", "connaît", "sais", "sait"] },
            { type: "fill", prompt: "Nous ne ___ pas cette histoire.", answer: "croyons", options: ["croyons", "crois", "croit", "croient"] },
            { type: "translate", en: "I don't believe this story.", answer: "Je ne crois pas cette histoire.", accept: ["je ne crois pas cette histoire"] },
            { type: "history", fr: "Les anciens Jeux Olympiques interdisaient aux femmes de participer.", answer: "The ancient Olympic Games banned women from competing.", options: ["The ancient Olympic Games banned women from competing.", "The ancient Olympic Games were held every year.", "The ancient Olympic Games included swimming.", "The ancient Olympic Games were in Rome."] },
            { type: "fill", prompt: "Elle ne ___ rien à cette leçon.", answer: "comprend", options: ["comprend", "comprends", "comprenons", "comprennent"] },
            { type: "fill", prompt: "Je ne ___ jamais de cadeaux.", answer: "reçois", options: ["reçois", "reçoit", "recevons", "reçoivent"] },
            { type: "translate", en: "I never receive letters.", answer: "Je ne reçois jamais de lettres.", accept: ["je ne reçois jamais de lettres", "je ne recois jamais de lettres"] },
            { type: "translate", en: "She doesn't understand anything about this problem.", answer: "Elle ne comprend rien à ce problème.", accept: ["elle ne comprend rien à ce problème", "elle ne comprend rien a ce probleme", "elle ne comprend rien à ce probleme"] }
        ]
    },

    // ===== LESSON 7: Passé Composé =====
    {
        id: 7,
        title: "Le Passé Composé — Past Tense",
        desc: "Talk about what happened — with avoir and être.",
        frenchFocus: {
            verb: "Passé composé",
            conjugation: {
                "j'ai mangé": "I ate",
                "tu as fini": "you finished",
                "il a pris": "he took",
                "je suis allé(e)": "I went",
                "elle est venue": "she came",
                "ils sont partis": "they left"
            },
            pattern: "Subject + avoir/être + past participle",
            examples: [
                { fr: "J'ai étudié toute la journée.", en: "I studied all day." },
                { fr: "Elle a compris la leçon.", en: "She understood the lesson." },
                { fr: "Nous sommes allés au musée.", en: "We went to the museum." },
                { fr: "Tu es arrivée en retard.", en: "You arrived late. (fem)" },
                { fr: "Ils ont fini le travail.", en: "They finished the work." },
                { fr: "Elle est née en France.", en: "She was born in France." }
            ],
            tips: "Most verbs use 'avoir.' Movement verbs use 'être' (aller, venir, partir, arriver, naître, mourir...). With 'être,' the past participle agrees with the subject: 'elle est allée' (extra -e for feminine).",
            homonyms: [],
            synonyms: [],
            extraVerbs: [
                {
                    verb: "manger", meaning: "to eat",
                    conjugation: { "je": "mange", "tu": "manges", "il/elle": "mange", "nous": "mangeons", "vous": "mangez", "ils/elles": "mangent" },
                    examples: [{ fr: "J'ai mangé un croissant ce matin.", en: "I ate a croissant this morning." }, { fr: "Nous mangeons à midi.", en: "We eat at noon." }],
                    homonyms: [],
                    synonyms: [{ word: "dévorer", meaning: "to devour" }, { word: "consommer", meaning: "to consume" }]
                },
                {
                    verb: "boire", meaning: "to drink",
                    conjugation: { "je": "bois", "tu": "bois", "il/elle": "boit", "nous": "buvons", "vous": "buvez", "ils/elles": "boivent" },
                    examples: [{ fr: "J'ai bu un café ce matin.", en: "I drank a coffee this morning." }, { fr: "Nous buvons de l'eau.", en: "We drink water." }],
                    homonyms: [],
                    synonyms: [{ word: "déguster", meaning: "to taste/savor" }, { word: "consommer", meaning: "to consume" }]
                },
                {
                    verb: "partir", meaning: "to leave / to depart",
                    conjugation: { "je": "pars", "tu": "pars", "il/elle": "part", "nous": "partons", "vous": "partez", "ils/elles": "partent" },
                    examples: [{ fr: "Je suis parti à huit heures.", en: "I left at eight o'clock." }, { fr: "Nous partons en vacances demain.", en: "We are leaving on vacation tomorrow." }],
                    homonyms: [],
                    synonyms: [{ word: "quitter", meaning: "to leave" }, { word: "s'en aller", meaning: "to go away" }]
                },
                {
                    verb: "voir", meaning: "to see",
                    conjugation: { "je": "vois", "tu": "vois", "il/elle": "voit", "nous": "voyons", "vous": "voyez", "ils/elles": "voient" },
                    examples: [{ fr: "J'ai vu un film hier soir.", en: "I saw a movie last night." }, { fr: "Nous voyons la mer.", en: "We see the sea." }],
                    homonyms: [],
                    synonyms: [{ word: "apercevoir", meaning: "to notice" }, { word: "regarder", meaning: "to watch" }]
                }
            ]
        },
        history: {
            period: "The Moon Landing (1969)",
            fr: "Le 20 juillet 1969, Neil Armstrong a marché sur la Lune. Il a dit une phrase célèbre en posant le pied sur le sol lunaire. Les États-Unis ont gagné la course à l'espace contre l'Union soviétique. Plus de 600 millions de personnes ont regardé cet événement à la télévision.",
            en: "On July 20, 1969, Neil Armstrong walked on the Moon. He said a famous sentence while setting foot on the lunar soil. The United States won the space race against the Soviet Union. More than 600 million people watched this event on television.",
            vocab: [
                { word: "la Lune", meaning: "the Moon" },
                { word: "une phrase", meaning: "a sentence" },
                { word: "le sol lunaire", meaning: "the lunar soil" },
                { word: "la course à l'espace", meaning: "the space race" },
                { word: "la télévision", meaning: "television" }
            ],
            funFact: "The computers used for the Apollo 11 mission had less processing power than a modern smartphone!",
            facts: [
                "Buzz Aldrin took communion on the Moon — he brought a tiny communion kit and it was the first food and drink consumed on the lunar surface.",
                "The Apollo astronauts had to go through U.S. customs when they returned to Earth, declaring their cargo as 'moon rocks and moon dust.'",
                "The American flag planted on the Moon has likely been bleached completely white by decades of unfiltered solar radiation.",
                "The Apollo 11 crew spent 21 days in quarantine after returning to Earth because NASA feared they might bring back dangerous lunar microbes.",
                "Neil Armstrong's heart rate spiked to 150 beats per minute during the final moments of the lunar landing as he manually guided the craft to avoid a boulder field.",
                "The Soviet Union secretly tried to beat the US to the Moon but their N1 rocket exploded on all four launch attempts, and the program was covered up for decades."
            ]
        },
        currentEvents: [
            { fr: "La NASA et SpaceX préparent une mission pour envoyer des humains sur Mars.", en: "NASA and SpaceX are preparing a mission to send humans to Mars." },
            { fr: "Le télescope James Webb découvre de nouvelles exoplanètes habitables.", en: "The James Webb telescope discovers new habitable exoplanets." },
            { fr: "L'Inde et la Chine développent leurs programmes spatiaux rapidement.", en: "India and China are rapidly developing their space programs." },
            { fr: "La station spatiale internationale accueille des expériences scientifiques de dizaines de pays.", en: "The International Space Station hosts scientific experiments from dozens of countries." }
        ],
        vocabulary: [
            {
                word: "mangé", partOfSpeech: "past participle", meaning: "eaten (from manger)",
                example: { fr: "J'ai mangé un croissant.", en: "I ate a croissant." },
                homonyms: [],
                synonyms: [{ word: "dévoré", meaning: "devoured" }, { word: "consommé", meaning: "consumed" }]
            },
            {
                word: "allé", partOfSpeech: "past participle", meaning: "gone (from aller)",
                example: { fr: "Nous sommes allés au musée.", en: "We went to the museum." },
                homonyms: [{ word: "allée", meaning: "path/walkway (noun)", example: "L'allée du jardin. (The garden path.)" }],
                synonyms: [{ word: "parti", meaning: "left/departed" }]
            },
            {
                word: "compris", partOfSpeech: "past participle", meaning: "understood (from comprendre)",
                example: { fr: "Elle a compris la leçon.", en: "She understood the lesson." },
                homonyms: [{ word: "compris", meaning: "included", example: "Service compris. (Service included.)" }],
                synonyms: [{ word: "saisi", meaning: "grasped" }, { word: "assimilé", meaning: "assimilated" }]
            },
            {
                word: "née", partOfSpeech: "past participle (f)", meaning: "born",
                example: { fr: "Elle est née en France.", en: "She was born in France." },
                homonyms: [{ word: "nez", meaning: "nose", example: "Il a un grand nez. (He has a big nose.)" }],
                synonyms: []
            },
            {
                word: "arrivée", partOfSpeech: "past participle (f) / noun", meaning: "arrived / arrival",
                example: { fr: "Tu es arrivée en retard.", en: "You arrived late." },
                homonyms: [{ word: "arrivée", meaning: "arrival (noun)", example: "L'arrivée du train. (The arrival of the train.)" }],
                synonyms: [{ word: "venue", meaning: "coming" }, { word: "parvenue", meaning: "reached" }]
            }
        ],
        artHistory: {
            period: "Le Baroque Français (1600–1750)",
            periodEn: "French Baroque (1600–1750)",
            context: "Le Baroque français est grandiose et majestueux. Sous Louis XIV, l'art sert la gloire du roi. Le château de Versailles est le symbole ultime de cette période avec ses peintures, sculptures et jardins somptueux.",
            contextEn: "French Baroque is grand and majestic. Under Louis XIV, art serves the glory of the king. The Palace of Versailles is the ultimate symbol of this period with its paintings, sculptures, and sumptuous gardens.",
            artworks: [
                {
                    title: "Le Tricheur à l'as de carreau",
                    titleEn: "The Cheat with the Ace of Diamonds",
                    artist: "Georges de La Tour",
                    year: 1635,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Georges_de_La_Tour_-_The_Cheat_with_the_Ace_of_Diamonds_-_Google_Art_Project.jpg/800px-Georges_de_La_Tour_-_The_Cheat_with_the_Ace_of_Diamonds_-_Google_Art_Project.jpg",
                    descFr: "La Tour peint une scène de tromperie autour d'une table de jeu. Le jeu de lumière et d'ombre (clair-obscur) crée une atmosphère dramatique.",
                    descEn: "La Tour paints a scene of deception around a gaming table. The play of light and shadow (chiaroscuro) creates a dramatic atmosphere."
                },
                {
                    title: "Et in Arcadia ego",
                    titleEn: "The Arcadian Shepherds",
                    artist: "Nicolas Poussin",
                    year: 1638,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Nicolas_Poussin_-_Et_in_Arcadia_ego_%28deuxi%C3%A8me_version%29.jpg/800px-Nicolas_Poussin_-_Et_in_Arcadia_ego_%28deuxi%C3%A8me_version%29.jpg",
                    descFr: "Des bergers découvrent une tombe dans un paysage idéal. Le message rappelle que même au paradis, la mort existe. Poussin est le maître du classicisme français.",
                    descEn: "Shepherds discover a tomb in an ideal landscape. The message reminds us that even in paradise, death exists. Poussin is the master of French classicism."
                }
            ],
            vocab: [
                { word: "un château", meaning: "a castle/palace" },
                { word: "la gloire", meaning: "glory" },
                { word: "un berger", meaning: "a shepherd" },
                { word: "la lumière", meaning: "light" },
                { word: "l'ombre", meaning: "shadow" },
                { word: "somptueux", meaning: "sumptuous/lavish" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "J'ai ___ un bon livre hier.", answer: "lu", options: ["lu", "lire", "lis", "lit"] },
            { type: "fill", prompt: "Elle est ___ au cinéma.", answer: "allée", options: ["allée", "allé", "aller", "allés"] },
            { type: "fill", prompt: "Nous avons ___ le film.", answer: "regardé", options: ["regardé", "regarder", "regarde", "regardés"] },
            { type: "translate", en: "I studied all day.", answer: "J'ai étudié toute la journée.", accept: ["j'ai étudié toute la journée", "j'ai etudié toute la journee", "j'ai étudié toute la journee", "j'ai etudie toute la journee"] },
            { type: "translate", en: "She understood the lesson.", answer: "Elle a compris la leçon.", accept: ["elle a compris la leçon", "elle a compris la lecon"] },
            { type: "history", fr: "Neil Armstrong a marché sur la Lune.", answer: "Neil Armstrong walked on the Moon.", options: ["Neil Armstrong walked on the Moon.", "Neil Armstrong flew to Mars.", "Neil Armstrong discovered the Moon.", "Neil Armstrong photographed the Moon."] },
            { type: "fill", prompt: "Ils sont ___ à la fête hier soir.", answer: "partis", options: ["partis", "parti", "partir", "partons"] },
            { type: "fill", prompt: "J'ai ___ un beau coucher de soleil.", answer: "vu", options: ["vu", "voir", "vois", "voit"] },
            { type: "fill", prompt: "Elle a ___ un café au lait.", answer: "bu", options: ["bu", "boire", "bois", "boit"] },
            { type: "translate", en: "I left at eight o'clock.", answer: "Je suis parti à huit heures.", accept: ["je suis parti à huit heures", "je suis parti a huit heures", "je suis partie à huit heures", "je suis partie a huit heures"] },
            { type: "translate", en: "We saw the sea.", answer: "Nous avons vu la mer.", accept: ["nous avons vu la mer", "on a vu la mer"] },
            { type: "translate", en: "They ate at the restaurant.", answer: "Ils ont mangé au restaurant.", accept: ["ils ont mangé au restaurant", "ils ont mange au restaurant", "elles ont mangé au restaurant"] },
            { type: "history", fr: "Les astronautes d'Apollo ont dû passer la douane américaine en revenant sur Terre.", answer: "The Apollo astronauts had to go through U.S. customs when returning to Earth.", options: ["The Apollo astronauts had to go through U.S. customs when returning to Earth.", "The Apollo astronauts had to quarantine for a year.", "The Apollo astronauts had to pay for their trip.", "The Apollo astronauts had to learn Russian."] },
            { type: "fill", prompt: "Nous sommes ___ au musée hier.", answer: "allés", options: ["allés", "allé", "aller", "allons"] }
        ]
    },

    // ===== LESSON 8: Questions =====
    {
        id: 8,
        title: "Poser des Questions — Asking Questions",
        desc: "Who, what, where, when, why, how — the essential question words.",
        frenchFocus: {
            verb: "Question words",
            conjugation: {
                "Qui ?": "Who?",
                "Quoi / Que ?": "What?",
                "Où ?": "Where?",
                "Quand ?": "When?",
                "Pourquoi ?": "Why?",
                "Comment ?": "How?"
            },
            pattern: "Question word + est-ce que + subject + verb | Question word + verb + subject (formal)",
            examples: [
                { fr: "Où est-ce que tu habites ?", en: "Where do you live?" },
                { fr: "Pourquoi est-ce qu'il est parti ?", en: "Why did he leave?" },
                { fr: "Comment vous appelez-vous ?", en: "What is your name? (formal)" },
                { fr: "Quand est-ce que le train arrive ?", en: "When does the train arrive?" },
                { fr: "Qui est cette personne ?", en: "Who is this person?" },
                { fr: "Combien ça coûte ?", en: "How much does it cost?" }
            ],
            tips: "Three ways to ask questions: 1) Add '?' to a statement (Tu parles français ?), 2) Add 'Est-ce que' (Est-ce que tu parles français ?), 3) Invert subject-verb (Parles-tu français ?). Method 1 is casual, 3 is formal.",
            homonyms: [],
            synonyms: [],
            extraVerbs: [
                {
                    verb: "demander", meaning: "to ask",
                    conjugation: { "je": "demande", "tu": "demandes", "il/elle": "demande", "nous": "demandons", "vous": "demandez", "ils/elles": "demandent" },
                    examples: [{ fr: "Je demande l'addition.", en: "I ask for the check." }, { fr: "Elle demande des informations.", en: "She asks for information." }],
                    homonyms: [],
                    synonyms: [{ word: "questionner", meaning: "to question" }, { word: "interroger", meaning: "to interrogate" }]
                },
                {
                    verb: "répondre", meaning: "to answer / to reply",
                    conjugation: { "je": "réponds", "tu": "réponds", "il/elle": "répond", "nous": "répondons", "vous": "répondez", "ils/elles": "répondent" },
                    examples: [{ fr: "Il répond à la question.", en: "He answers the question." }, { fr: "Nous répondons au téléphone.", en: "We answer the phone." }],
                    homonyms: [],
                    synonyms: [{ word: "répliquer", meaning: "to reply" }, { word: "rétorquer", meaning: "to retort" }]
                },
                {
                    verb: "chercher", meaning: "to look for / to search",
                    conjugation: { "je": "cherche", "tu": "cherches", "il/elle": "cherche", "nous": "cherchons", "vous": "cherchez", "ils/elles": "cherchent" },
                    examples: [{ fr: "Je cherche mes clés.", en: "I am looking for my keys." }, { fr: "Nous cherchons un restaurant.", en: "We are looking for a restaurant." }],
                    homonyms: [],
                    synonyms: [{ word: "rechercher", meaning: "to search for" }, { word: "explorer", meaning: "to explore" }]
                },
                {
                    verb: "trouver", meaning: "to find",
                    conjugation: { "je": "trouve", "tu": "trouves", "il/elle": "trouve", "nous": "trouvons", "vous": "trouvez", "ils/elles": "trouvent" },
                    examples: [{ fr: "Tu trouves la réponse facilement.", en: "You find the answer easily." }, { fr: "Ils trouvent le chemin.", en: "They find the way." }],
                    homonyms: [],
                    synonyms: [{ word: "découvrir", meaning: "to discover" }, { word: "dénicher", meaning: "to unearth" }]
                }
            ]
        },
        history: {
            period: "The Enlightenment (1700s)",
            fr: "Au dix-huitième siècle, les philosophes se sont posé des questions fondamentales. Qui gouverne la société ? Pourquoi les rois ont-ils tout le pouvoir ? Comment créer un monde plus juste ? Voltaire et Rousseau ont changé la façon dont les gens pensaient. Ces questions ont inspiré la Révolution française et la Révolution américaine.",
            en: "In the eighteenth century, philosophers asked fundamental questions. Who governs society? Why do kings have all the power? How to create a fairer world? Voltaire and Rousseau changed the way people thought. These questions inspired the French Revolution and the American Revolution.",
            vocab: [
                { word: "les philosophes", meaning: "the philosophers" },
                { word: "gouverner", meaning: "to govern" },
                { word: "le pouvoir", meaning: "the power" },
                { word: "juste", meaning: "fair/just" },
                { word: "la façon", meaning: "the way/manner" }
            ],
            funFact: "Voltaire reportedly drank 40 cups of coffee a day while writing. He lived to 83, which was remarkable for the 1700s!",
            facts: [
                "Voltaire and Rousseau, two of the Enlightenment's greatest thinkers, despised each other and exchanged vicious letters for decades.",
                "Denis Diderot spent over 25 years creating the Encyclopédie, one of the first general encyclopedias — the French government tried to ban it multiple times.",
                "The Enlightenment introduced the radical idea that ordinary people could reason for themselves, which directly challenged the divine right of kings.",
                "Benjamin Franklin was a celebrity in Enlightenment-era Paris — French women wore wigs styled to look like his famous fur cap.",
                "The philosopher Montesquieu proposed the separation of powers into executive, legislative, and judicial branches — an idea that shaped the U.S. Constitution.",
                "During the Enlightenment, coffeehouses became known as 'penny universities' because for the price of a coffee, you could listen to brilliant debates and lectures."
            ]
        },
        currentEvents: [
            { fr: "Les débats sur la liberté d'expression continuent de façonner les lois dans le monde entier.", en: "Debates about freedom of expression continue to shape laws around the world." },
            { fr: "Les universités françaises modernisent leurs programmes pour attirer des étudiants internationaux.", en: "French universities are modernizing their programs to attract international students." },
            { fr: "La pensée critique est considérée comme une compétence essentielle dans l'éducation moderne.", en: "Critical thinking is considered an essential skill in modern education." },
            { fr: "Des intellectuels du monde entier se réunissent pour discuter de l'avenir de la démocratie.", en: "Intellectuals from around the world gather to discuss the future of democracy." }
        ],
        vocabulary: [
            {
                word: "où", partOfSpeech: "adverb", meaning: "where",
                example: { fr: "Où est-ce que tu habites ?", en: "Where do you live?" },
                homonyms: [{ word: "ou", meaning: "or (conjunction, no accent)", example: "Thé ou café ? (Tea or coffee?)" }],
                synonyms: []
            },
            {
                word: "comment", partOfSpeech: "adverb", meaning: "how",
                example: { fr: "Comment allez-vous ?", en: "How are you?" },
                homonyms: [],
                synonyms: [{ word: "de quelle manière", meaning: "in what way" }]
            },
            {
                word: "pourquoi", partOfSpeech: "adverb", meaning: "why",
                example: { fr: "Pourquoi tu apprends le français ?", en: "Why are you learning French?" },
                homonyms: [],
                synonyms: [{ word: "pour quelle raison", meaning: "for what reason" }]
            },
            {
                word: "quand", partOfSpeech: "adverb", meaning: "when",
                example: { fr: "Quand est-ce que tu pars ?", en: "When are you leaving?" },
                homonyms: [{ word: "quant", meaning: "as for (quant à)", example: "Quant à moi, je reste. (As for me, I'm staying.)" }],
                synonyms: [{ word: "à quel moment", meaning: "at what moment" }]
            },
            {
                word: "combien", partOfSpeech: "adverb", meaning: "how much / how many",
                example: { fr: "Combien ça coûte ?", en: "How much does it cost?" },
                homonyms: [],
                synonyms: [{ word: "quel prix", meaning: "what price" }]
            },
            {
                word: "est-ce que", partOfSpeech: "expression", meaning: "question marker (do/does/is)",
                example: { fr: "Est-ce que tu parles français ?", en: "Do you speak French?" },
                homonyms: [],
                synonyms: []
            }
        ],
        artHistory: {
            period: "L'Art Nouveau (1890–1910)",
            periodEn: "Art Nouveau (1890–1910)",
            context: "L'Art Nouveau est un mouvement décoratif né à Paris. Il s'inspire des formes organiques de la nature — fleurs, plantes, courbes — pour créer un style élégant dans l'architecture, les affiches et les objets du quotidien.",
            contextEn: "Art Nouveau is a decorative movement born in Paris. It draws inspiration from organic forms of nature — flowers, plants, curves — to create an elegant style in architecture, posters, and everyday objects.",
            artworks: [
                {
                    title: "Gismonda (affiche)",
                    titleEn: "Gismonda (poster)",
                    artist: "Alphonse Mucha",
                    year: 1894,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Alfons_Mucha_-_1894_-_Gismonda.jpg/400px-Alfons_Mucha_-_1894_-_Gismonda.jpg",
                    descFr: "Cette affiche pour le théâtre parisien montre une femme entourée de motifs floraux. Mucha a popularisé l'Art Nouveau à travers ses affiches iconiques.",
                    descEn: "This poster for a Parisian theater shows a woman surrounded by floral motifs. Mucha popularized Art Nouveau through his iconic posters."
                },
                {
                    title: "Entrées du Métro de Paris",
                    titleEn: "Paris Metro Entrances",
                    artist: "Hector Guimard",
                    year: 1900,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Edicule_Guimard_Abbesses.jpg/600px-Edicule_Guimard_Abbesses.jpg",
                    descFr: "Les entrées du métro parisien conçues par Guimard sont des exemples célèbres de l'Art Nouveau architectural. Les formes en fer forgé imitent des plantes et des fleurs.",
                    descEn: "The Parisian metro entrances designed by Guimard are famous examples of architectural Art Nouveau. The wrought iron forms imitate plants and flowers."
                }
            ],
            vocab: [
                { word: "une affiche", meaning: "a poster" },
                { word: "une fleur", meaning: "a flower" },
                { word: "une courbe", meaning: "a curve" },
                { word: "le fer forgé", meaning: "wrought iron" },
                { word: "un motif", meaning: "a pattern/motif" },
                { word: "décoratif", meaning: "decorative" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "___ est-ce que tu habites ?", answer: "Où", options: ["Où", "Qui", "Quand", "Comment"] },
            { type: "fill", prompt: "___ est cette femme ?", answer: "Qui", options: ["Qui", "Que", "Où", "Quand"] },
            { type: "fill", prompt: "___ est-ce que le magasin ferme ?", answer: "Quand", options: ["Quand", "Comment", "Pourquoi", "Combien"] },
            { type: "translate", en: "Where do you live?", answer: "Où est-ce que tu habites ?", accept: ["où est-ce que tu habites", "ou est-ce que tu habites", "où habites-tu", "tu habites où", "ou habites-tu"] },
            { type: "translate", en: "How much does it cost?", answer: "Combien ça coûte ?", accept: ["combien ça coûte", "combien ca coute", "combien ça coute", "combien est-ce que ça coûte", "combien est-ce que ca coute"] },
            { type: "history", fr: "Les philosophes se sont posé des questions fondamentales.", answer: "The philosophers asked fundamental questions.", options: ["The philosophers asked fundamental questions.", "The philosophers wrote fundamental books.", "The philosophers taught fundamental lessons.", "The philosophers discovered fundamental truths."] },
            { type: "fill", prompt: "Je ___ des informations sur ce sujet.", answer: "demande", options: ["demande", "demandes", "demandons", "demandez"] },
            { type: "fill", prompt: "Il ___ toujours aux questions.", answer: "répond", options: ["répond", "réponds", "répondons", "répondent"] },
            { type: "fill", prompt: "___ est-ce que tu étudies le français ?", answer: "Pourquoi", options: ["Pourquoi", "Combien", "Qui", "Où"] },
            { type: "fill", prompt: "Nous ___ un bon restaurant.", answer: "cherchons", options: ["cherchons", "cherche", "cherchez", "cherchent"] },
            { type: "translate", en: "I am looking for my keys.", answer: "Je cherche mes clés.", accept: ["je cherche mes clés", "je cherche mes cles"] },
            { type: "translate", en: "He answers the question.", answer: "Il répond à la question.", accept: ["il répond à la question", "il repond a la question", "il répond a la question"] },
            { type: "translate", en: "Why did he leave?", answer: "Pourquoi est-ce qu'il est parti ?", accept: ["pourquoi est-ce qu'il est parti", "pourquoi il est parti", "pourquoi est-il parti"] },
            { type: "history", fr: "Montesquieu a proposé la séparation des pouvoirs.", answer: "Montesquieu proposed the separation of powers.", options: ["Montesquieu proposed the separation of powers.", "Montesquieu proposed the abolition of monarchy.", "Montesquieu proposed a new religion.", "Montesquieu proposed free education."] }
        ]
    },

    // ===== LESSON 9: Everyday Sentences =====
    {
        id: 9,
        title: "Phrases Utiles — Useful Daily Phrases",
        desc: "Restaurant, shopping, directions — real-life French you'll actually use.",
        frenchFocus: {
            verb: "Everyday phrases",
            conjugation: {
                "L'addition, s'il vous plaît.": "The check, please.",
                "Je cherche...": "I'm looking for...",
                "Excusez-moi...": "Excuse me...",
                "C'est combien ?": "How much is it?",
                "Où se trouve... ?": "Where is... located?",
                "Je voudrais réserver...": "I'd like to reserve..."
            },
            pattern: "Polite phrases + context-specific vocabulary",
            examples: [
                { fr: "Excusez-moi, où se trouve la gare ?", en: "Excuse me, where is the train station?" },
                { fr: "Je voudrais réserver une table pour deux.", en: "I'd like to reserve a table for two." },
                { fr: "Est-ce que vous avez ça en rouge ?", en: "Do you have this in red?" },
                { fr: "L'addition, s'il vous plaît.", en: "The check, please." },
                { fr: "Je suis désolée, je ne parle pas bien français.", en: "I'm sorry, I don't speak French well." },
                { fr: "Pourriez-vous parler plus lentement ?", en: "Could you speak more slowly?" }
            ],
            tips: "'S'il vous plaît' (formal) and 's'il te plaît' (informal) both mean 'please.' Always add it — French people really appreciate politeness! 'Pourriez-vous...' is the polite way to ask for something.",
            homonyms: [],
            synonyms: [],
            extraVerbs: [
                {
                    verb: "acheter", meaning: "to buy",
                    conjugation: { "je": "achète", "tu": "achètes", "il/elle": "achète", "nous": "achetons", "vous": "achetez", "ils/elles": "achètent" },
                    examples: [{ fr: "J'achète du pain à la boulangerie.", en: "I buy bread at the bakery." }, { fr: "Nous achetons des souvenirs.", en: "We buy souvenirs." }],
                    homonyms: [],
                    synonyms: [{ word: "acquérir", meaning: "to acquire" }, { word: "se procurer", meaning: "to obtain" }]
                },
                {
                    verb: "payer", meaning: "to pay",
                    conjugation: { "je": "paie", "tu": "paies", "il/elle": "paie", "nous": "payons", "vous": "payez", "ils/elles": "paient" },
                    examples: [{ fr: "Je paie par carte bancaire.", en: "I pay by credit card." }, { fr: "Vous payez combien ?", en: "How much do you pay?" }],
                    homonyms: [],
                    synonyms: [{ word: "régler", meaning: "to settle (a bill)" }, { word: "rembourser", meaning: "to reimburse" }]
                },
                {
                    verb: "essayer", meaning: "to try",
                    conjugation: { "je": "essaie", "tu": "essaies", "il/elle": "essaie", "nous": "essayons", "vous": "essayez", "ils/elles": "essaient" },
                    examples: [{ fr: "J'essaie cette robe.", en: "I try on this dress." }, { fr: "Nous essayons un nouveau restaurant.", en: "We try a new restaurant." }],
                    homonyms: [],
                    synonyms: [{ word: "tenter", meaning: "to attempt" }, { word: "goûter", meaning: "to taste/try" }]
                },
                {
                    verb: "attendre", meaning: "to wait",
                    conjugation: { "je": "attends", "tu": "attends", "il/elle": "attend", "nous": "attendons", "vous": "attendez", "ils/elles": "attendent" },
                    examples: [{ fr: "J'attends le bus depuis dix minutes.", en: "I have been waiting for the bus for ten minutes." }, { fr: "Nous attendons notre commande.", en: "We are waiting for our order." }],
                    homonyms: [],
                    synonyms: [{ word: "patienter", meaning: "to be patient" }, { word: "espérer", meaning: "to hope/wait for" }]
                }
            ]
        },
        history: {
            period: "Medieval Europe (1000-1400)",
            fr: "Au Moyen Âge, les gens voyageaient rarement. Les marchés étaient le centre de la vie sociale. On pouvait y trouver de la nourriture, des tissus et des nouvelles. Les cathédrales gothiques comme Notre-Dame de Paris ont été construites pendant cette période. Il fallait souvent plus de cent ans pour les terminer.",
            en: "In the Middle Ages, people rarely traveled. Markets were the center of social life. You could find food, fabrics, and news there. Gothic cathedrals like Notre-Dame de Paris were built during this period. It often took more than a hundred years to finish them.",
            vocab: [
                { word: "le Moyen Âge", meaning: "the Middle Ages" },
                { word: "les marchés", meaning: "the markets" },
                { word: "les tissus", meaning: "fabrics" },
                { word: "les cathédrales", meaning: "cathedrals" },
                { word: "terminer", meaning: "to finish" }
            ],
            funFact: "Notre-Dame de Paris took 182 years to build (1163-1345) and survived the French Revolution, two World Wars, and a devastating fire in 2019.",
            facts: [
                "Medieval knights' armor weighed about 25 kilograms (55 pounds) and they needed help mounting their horses while wearing it.",
                "The Black Death killed roughly one-third of Europe's entire population between 1347 and 1351 — about 25 million people.",
                "Medieval peasants actually bathed more often than commonly believed — public bathhouses were popular social gathering places across Europe.",
                "The average medieval European drank about 300 liters of beer per year because it was often safer than the local water supply.",
                "Cats were sometimes put on trial in medieval courts for crimes like witchcraft, and could be sentenced to death.",
                "The medieval spice trade was so valuable that a pound of saffron cost as much as a horse, and peppercorns were used as currency."
            ]
        },
        currentEvents: [
            { fr: "La restauration de Notre-Dame de Paris après l'incendie de 2019 avance à grands pas.", en: "The restoration of Notre-Dame de Paris after the 2019 fire is making great progress." },
            { fr: "Les marchés médiévaux et les fêtes historiques attirent des milliers de touristes en France.", en: "Medieval markets and historical festivals attract thousands of tourists in France." },
            { fr: "Les châteaux forts de France sont de plus en plus visités grâce aux réseaux sociaux.", en: "France's medieval castles are increasingly visited thanks to social media." },
            { fr: "Les historiens utilisent l'intelligence artificielle pour déchiffrer des manuscrits médiévaux.", en: "Historians are using artificial intelligence to decipher medieval manuscripts." }
        ],
        vocabulary: [
            {
                word: "bonjour", partOfSpeech: "interjection", meaning: "hello / good morning",
                example: { fr: "Bonjour, comment allez-vous ?", en: "Hello, how are you?" },
                homonyms: [],
                synonyms: [{ word: "salut", meaning: "hi (informal)" }, { word: "coucou", meaning: "hey (familiar)" }]
            },
            {
                word: "s'il vous plaît", partOfSpeech: "expression", meaning: "please (formal)",
                example: { fr: "Un café, s'il vous plaît.", en: "A coffee, please." },
                homonyms: [],
                synonyms: [{ word: "s'il te plaît", meaning: "please (informal)" }]
            },
            {
                word: "merci", partOfSpeech: "interjection", meaning: "thank you",
                example: { fr: "Merci beaucoup !", en: "Thank you very much!" },
                homonyms: [],
                synonyms: [{ word: "je vous remercie", meaning: "I thank you (formal)" }]
            },
            {
                word: "excusez-moi", partOfSpeech: "expression", meaning: "excuse me",
                example: { fr: "Excusez-moi, où est la gare ?", en: "Excuse me, where is the station?" },
                homonyms: [],
                synonyms: [{ word: "pardon", meaning: "sorry/pardon" }, { word: "pardonnez-moi", meaning: "forgive me" }]
            },
            {
                word: "gare", partOfSpeech: "noun (f)", meaning: "train station",
                example: { fr: "La gare est à gauche.", en: "The station is on the left." },
                homonyms: [{ word: "gare !", meaning: "watch out! (interjection)", example: "Gare à toi ! (Watch out!)" }],
                synonyms: [{ word: "station", meaning: "station (metro)" }]
            },
            {
                word: "addition", partOfSpeech: "noun (f)", meaning: "the bill/check (restaurant)",
                example: { fr: "L'addition, s'il vous plaît.", en: "The check, please." },
                homonyms: [{ word: "addition", meaning: "addition (math)", example: "Faire une addition. (To do an addition.)" }],
                synonyms: [{ word: "note", meaning: "bill" }, { word: "facture", meaning: "invoice" }]
            }
        ],
        artHistory: {
            period: "Le Fauvisme (1904–1908)",
            periodEn: "Fauvism (1904–1908)",
            context: "Le Fauvisme est un mouvement audacieux né à Paris. Les peintres utilisent des couleurs pures et éclatantes, appliquées directement du tube, pour créer des œuvres expressives. Les critiques les ont surnommés 'les fauves' (les bêtes sauvages).",
            contextEn: "Fauvism is a bold movement born in Paris. Painters use pure, brilliant colors applied directly from the tube to create expressive works. Critics nicknamed them 'les fauves' (the wild beasts).",
            artworks: [
                {
                    title: "La Femme au chapeau",
                    titleEn: "Woman with a Hat",
                    artist: "Henri Matisse",
                    year: 1905,
                    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Woman_with_a_Hat_by_Henri_Matisse%2C_1905.jpg/400px-Woman_with_a_Hat_by_Henri_Matisse%2C_1905.jpg",
                    descFr: "Matisse peint sa femme avec des couleurs audacieuses et non naturelles — du vert, du rouge et du bleu sur le visage. Ce portrait a choqué le public lors du Salon d'Automne de 1905.",
                    descEn: "Matisse paints his wife with bold, unnatural colors — green, red, and blue on the face. This portrait shocked the public at the 1905 Salon d'Automne."
                },
                {
                    title: "La Danse",
                    titleEn: "The Dance",
                    artist: "Henri Matisse",
                    year: 1910,
                    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Matissedance.jpg/800px-Matissedance.jpg",
                    descFr: "Cinq figures dansent en cercle avec seulement trois couleurs : rouge, bleu et vert. La simplicité exprime la joie pure du mouvement.",
                    descEn: "Five figures dance in a circle with only three colors: red, blue, and green. The simplicity expresses the pure joy of movement."
                }
            ],
            vocab: [
                { word: "audacieux", meaning: "bold/daring" },
                { word: "éclatant(e)", meaning: "brilliant/bright" },
                { word: "un chapeau", meaning: "a hat" },
                { word: "danser", meaning: "to dance" },
                { word: "le mouvement", meaning: "movement" },
                { word: "sauvage", meaning: "wild" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Excusez-moi, ___ se trouve la gare ?", answer: "où", options: ["où", "qui", "que", "comment"] },
            { type: "fill", prompt: "Je voudrais ___ une table pour deux.", answer: "réserver", options: ["réserver", "manger", "trouver", "acheter"] },
            { type: "fill", prompt: "L'addition, ___ vous plaît.", answer: "s'il", options: ["s'il", "si", "comme", "merci"] },
            { type: "translate", en: "The check, please.", answer: "L'addition, s'il vous plaît.", accept: ["l'addition, s'il vous plaît", "l'addition s'il vous plaît", "l'addition, s'il vous plait", "l'addition s'il vous plait"] },
            { type: "translate", en: "Could you speak more slowly?", answer: "Pourriez-vous parler plus lentement ?", accept: ["pourriez-vous parler plus lentement", "pouvez-vous parler plus lentement", "tu peux parler plus lentement"] },
            { type: "history", fr: "Les cathédrales gothiques ont été construites au Moyen Âge.", answer: "Gothic cathedrals were built in the Middle Ages.", options: ["Gothic cathedrals were built in the Middle Ages.", "Gothic cathedrals were built in the Renaissance.", "Gothic cathedrals were destroyed in the Middle Ages.", "Gothic cathedrals were discovered in the Middle Ages."] },
            { type: "fill", prompt: "J'___ du pain chaque matin.", answer: "achète", options: ["achète", "achètes", "achetons", "achetez"] },
            { type: "fill", prompt: "Nous ___ par carte bancaire.", answer: "payons", options: ["payons", "paie", "payez", "paient"] },
            { type: "fill", prompt: "J'___ le bus depuis vingt minutes.", answer: "attends", options: ["attends", "attend", "attendons", "attendent"] },
            { type: "fill", prompt: "Elle ___ une nouvelle robe.", answer: "essaie", options: ["essaie", "essaies", "essayons", "essaient"] },
            { type: "translate", en: "I buy bread at the bakery.", answer: "J'achète du pain à la boulangerie.", accept: ["j'achète du pain à la boulangerie", "j'achete du pain a la boulangerie", "j'achète du pain a la boulangerie"] },
            { type: "translate", en: "We are waiting for our order.", answer: "Nous attendons notre commande.", accept: ["nous attendons notre commande", "on attend notre commande"] },
            { type: "translate", en: "I'm sorry, I don't speak French well.", answer: "Je suis désolée, je ne parle pas bien français.", accept: ["je suis désolée, je ne parle pas bien français", "je suis désolée je ne parle pas bien français", "je suis desolee je ne parle pas bien francais", "je suis désolé je ne parle pas bien français"] },
            { type: "history", fr: "La peste noire a tué environ un tiers de la population européenne.", answer: "The Black Death killed roughly one-third of Europe's population.", options: ["The Black Death killed roughly one-third of Europe's population.", "The Black Death affected only France.", "The Black Death lasted for one year.", "The Black Death was easily cured by medieval doctors."] }
        ]
    },

    // ===== LESSON 10: Expressing Opinions =====
    {
        id: 10,
        title: "Donner son Avis — Expressing Opinions",
        desc: "Agree, disagree, express your thoughts like a native speaker.",
        frenchFocus: {
            verb: "Opinion expressions",
            conjugation: {
                "Je pense que...": "I think that...",
                "À mon avis...": "In my opinion...",
                "Je suis d'accord.": "I agree.",
                "Je ne suis pas d'accord.": "I disagree.",
                "Il me semble que...": "It seems to me that...",
                "Je trouve que...": "I find that..."
            },
            pattern: "Opinion expression + que + subject + verb (indicative)",
            examples: [
                { fr: "Je pense que c'est une bonne idée.", en: "I think it's a good idea." },
                { fr: "À mon avis, ce film est excellent.", en: "In my opinion, this movie is excellent." },
                { fr: "Je ne suis pas d'accord avec toi.", en: "I disagree with you." },
                { fr: "Je trouve que la vie à Paris est chère.", en: "I find that life in Paris is expensive." },
                { fr: "Il me semble que tu as raison.", en: "It seems to me that you're right." },
                { fr: "C'est vrai, mais d'un autre côté...", en: "That's true, but on the other hand..." }
            ],
            tips: "To sound more natural, vary your expressions: don't always use 'je pense.' Try 'il me semble,' 'je trouve,' 'à mon avis.' Use 'd'un autre côté' (on the other hand) to show nuance — the French love nuance!",
            homonyms: [],
            synonyms: [{ word: "exprimer", meaning: "to express" }, { word: "formuler", meaning: "to formulate" }],
            extraVerbs: [
                {
                    verb: "préférer", meaning: "to prefer",
                    conjugation: { "je": "préfère", "tu": "préfères", "il/elle": "préfère", "nous": "préférons", "vous": "préférez", "ils/elles": "préfèrent" },
                    examples: [{ fr: "Je préfère le théâtre au cinéma.", en: "I prefer theater to cinema." }, { fr: "Nous préférons rester à la maison.", en: "We prefer to stay at home." }],
                    homonyms: [],
                    synonyms: [{ word: "favoriser", meaning: "to favor" }, { word: "privilégier", meaning: "to prioritize" }]
                },
                {
                    verb: "détester", meaning: "to hate / to detest",
                    conjugation: { "je": "déteste", "tu": "détestes", "il/elle": "déteste", "nous": "détestons", "vous": "détestez", "ils/elles": "détestent" },
                    examples: [{ fr: "Je déteste les embouteillages.", en: "I hate traffic jams." }, { fr: "Elle déteste le froid.", en: "She hates the cold." }],
                    homonyms: [],
                    synonyms: [{ word: "haïr", meaning: "to hate" }, { word: "abhorrer", meaning: "to abhor" }]
                },
                {
                    verb: "adorer", meaning: "to love / to adore",
                    conjugation: { "je": "adore", "tu": "adores", "il/elle": "adore", "nous": "adorons", "vous": "adorez", "ils/elles": "adorent" },
                    examples: [{ fr: "J'adore la musique classique.", en: "I love classical music." }, { fr: "Ils adorent voyager.", en: "They love traveling." }],
                    homonyms: [],
                    synonyms: [{ word: "aimer passionnément", meaning: "to love passionately" }, { word: "vénérer", meaning: "to worship" }]
                },
                {
                    verb: "espérer", meaning: "to hope",
                    conjugation: { "je": "espère", "tu": "espères", "il/elle": "espère", "nous": "espérons", "vous": "espérez", "ils/elles": "espèrent" },
                    examples: [{ fr: "J'espère que tu vas bien.", en: "I hope you are doing well." }, { fr: "Nous espérons réussir.", en: "We hope to succeed." }],
                    homonyms: [],
                    synonyms: [{ word: "souhaiter", meaning: "to wish" }, { word: "compter sur", meaning: "to count on" }]
                }
            ]
        },
        history: {
            period: "The American Revolution (1776)",
            fr: "Les colons américains pensaient que les taxes britanniques étaient injustes. À leur avis, ils méritaient une représentation au Parlement. Thomas Jefferson a écrit la Déclaration d'Indépendance en 1776. Il trouvait que tous les hommes étaient créés égaux. La France était d'accord et a aidé les Américains dans leur guerre contre l'Angleterre.",
            en: "The American colonists thought that British taxes were unfair. In their opinion, they deserved representation in Parliament. Thomas Jefferson wrote the Declaration of Independence in 1776. He found that all men were created equal. France agreed and helped the Americans in their war against England.",
            vocab: [
                { word: "les colons", meaning: "the colonists" },
                { word: "les taxes", meaning: "taxes" },
                { word: "injuste", meaning: "unfair" },
                { word: "mériter", meaning: "to deserve" },
                { word: "égaux", meaning: "equal" }
            ],
            funFact: "France sent so much money to help the American Revolution that it contributed to France's own financial crisis — which helped spark the French Revolution just 13 years later!",
            facts: [
                "Benjamin Franklin was 70 years old when he helped draft the Declaration of Independence — he was by far the oldest of the Founding Fathers.",
                "The original Declaration of Independence included a passage condemning slavery, but it was removed to gain support from Southern colonies.",
                "During the American Revolution, about one-third of colonists supported independence, one-third remained loyal to Britain, and one-third tried to stay neutral.",
                "France sent over 12,000 soldiers and 32,000 sailors to fight alongside the Americans — without French help, the Revolution might have failed.",
                "The word 'Yankee' was originally a British insult for American colonists, but the Americans proudly adopted it as their own.",
                "George Washington's troops at Valley Forge were so poorly supplied that many soldiers had no shoes and left bloody footprints in the snow."
            ]
        },
        currentEvents: [
            { fr: "Les États-Unis célèbrent le 250e anniversaire de leur indépendance en 2026.", en: "The United States celebrates the 250th anniversary of its independence in 2026." },
            { fr: "Les débats sur les droits constitutionnels restent au cœur de la politique américaine.", en: "Debates over constitutional rights remain at the heart of American politics." },
            { fr: "La relation diplomatique entre la France et les États-Unis continue d'évoluer au XXIe siècle.", en: "The diplomatic relationship between France and the United States continues to evolve in the 21st century." },
            { fr: "De nouveaux musées consacrés à l'histoire de la Révolution américaine ouvrent leurs portes.", en: "New museums dedicated to the history of the American Revolution are opening their doors." }
        ],
        vocabulary: [
            {
                word: "penser", partOfSpeech: "verb", meaning: "to think",
                example: { fr: "Je pense que c'est vrai.", en: "I think that it's true." },
                homonyms: [{ word: "panser", meaning: "to bandage/dress (a wound)", example: "Panser une blessure. (To dress a wound.)" }],
                synonyms: [{ word: "croire", meaning: "to believe" }, { word: "réfléchir", meaning: "to reflect" }]
            },
            {
                word: "avis", partOfSpeech: "noun (m)", meaning: "opinion",
                example: { fr: "À mon avis, c'est important.", en: "In my opinion, it's important." },
                homonyms: [],
                synonyms: [{ word: "opinion", meaning: "opinion" }, { word: "point de vue", meaning: "point of view" }]
            },
            {
                word: "trouver", partOfSpeech: "verb", meaning: "to find / to think (opinion)",
                example: { fr: "Je trouve que c'est intéressant.", en: "I find that it's interesting." },
                homonyms: [],
                synonyms: [{ word: "considérer", meaning: "to consider" }, { word: "estimer", meaning: "to estimate/judge" }]
            },
            {
                word: "accord", partOfSpeech: "noun (m)", meaning: "agreement",
                example: { fr: "Je suis d'accord avec toi.", en: "I agree with you." },
                homonyms: [{ word: "accord", meaning: "chord (music)", example: "Un accord de guitare. (A guitar chord.)" }],
                synonyms: [{ word: "entente", meaning: "understanding" }, { word: "consensus", meaning: "consensus" }]
            },
            {
                word: "raison", partOfSpeech: "noun (f)", meaning: "reason / right",
                example: { fr: "Tu as raison.", en: "You are right." },
                homonyms: [],
                synonyms: [{ word: "motif", meaning: "motive" }, { word: "cause", meaning: "cause" }]
            }
        ],
        artHistory: {
            period: "Le Cubisme (1907–1920)",
            periodEn: "Cubism (1907–1920)",
            context: "Le Cubisme, inventé à Paris par Picasso et Braque, décompose les objets en formes géométriques et les montre sous plusieurs angles simultanément. C'est une révolution totale dans la façon de voir le monde.",
            contextEn: "Cubism, invented in Paris by Picasso and Braque, breaks objects down into geometric shapes and shows them from multiple angles simultaneously. It is a total revolution in the way of seeing the world.",
            artworks: [
                {
                    title: "Les Demoiselles d'Avignon",
                    titleEn: "The Young Ladies of Avignon",
                    artist: "Pablo Picasso",
                    year: 1907,
                    image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Les_Demoiselles_d%27Avignon.jpg",
                    descFr: "Ce tableau montre cinq femmes aux visages anguleux inspirés de l'art africain. Peint à Paris, il est considéré comme le point de départ du cubisme.",
                    descEn: "This painting shows five women with angular faces inspired by African art. Painted in Paris, it is considered the starting point of cubism."
                },
                {
                    title: "Maisons à l'Estaque",
                    titleEn: "Houses at l'Estaque",
                    artist: "Georges Braque",
                    year: 1908,
                    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Georges_Braque%2C_1908%2C_Maisons_%C3%A0_l%27Estaque_%28Houses_at_l%27Estaque%29.jpg/400px-Georges_Braque%2C_1908%2C_Maisons_%C3%A0_l%27Estaque_%28Houses_at_l%27Estaque%29.jpg",
                    descFr: "Braque réduit les maisons et les arbres à des cubes et des formes géométriques. C'est ce tableau qui a inspiré le nom 'cubisme'.",
                    descEn: "Braque reduces houses and trees to cubes and geometric shapes. It was this painting that inspired the name 'cubism'."
                }
            ],
            vocab: [
                { word: "un angle", meaning: "an angle" },
                { word: "une forme", meaning: "a shape" },
                { word: "décomposer", meaning: "to break down" },
                { word: "simultanément", meaning: "simultaneously" },
                { word: "un cube", meaning: "a cube" },
                { word: "géométrique", meaning: "geometric" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Je ___ que c'est une bonne idée.", answer: "pense", options: ["pense", "suis", "trouve", "vais"] },
            { type: "fill", prompt: "Je ne suis pas ___ avec toi.", answer: "d'accord", options: ["d'accord", "content", "sûr", "certain"] },
            { type: "fill", prompt: "À mon ___, ce restaurant est le meilleur.", answer: "avis", options: ["avis", "idée", "opinion", "pensée"] },
            { type: "translate", en: "I think it's a good idea.", answer: "Je pense que c'est une bonne idée.", accept: ["je pense que c'est une bonne idée", "je pense que c'est une bonne idee"] },
            { type: "translate", en: "I disagree with you.", answer: "Je ne suis pas d'accord avec toi.", accept: ["je ne suis pas d'accord avec toi", "je ne suis pas d'accord avec vous"] },
            { type: "history", fr: "La France était d'accord et a aidé les Américains.", answer: "France agreed and helped the Americans.", options: ["France agreed and helped the Americans.", "France disagreed and fought the Americans.", "France agreed but didn't help the Americans.", "France agreed and traded with the Americans."] },
            { type: "fill", prompt: "Je ___ le café au thé.", answer: "préfère", options: ["préfère", "préfères", "préférons", "préférez"] },
            { type: "fill", prompt: "Elle ___ les embouteillages.", answer: "déteste", options: ["déteste", "détestes", "détestons", "détestent"] },
            { type: "fill", prompt: "J'___ la cuisine française.", answer: "adore", options: ["adore", "adores", "adorons", "adorez"] },
            { type: "fill", prompt: "Nous ___ réussir l'examen.", answer: "espérons", options: ["espérons", "espère", "espérez", "espèrent"] },
            { type: "translate", en: "I prefer theater to cinema.", answer: "Je préfère le théâtre au cinéma.", accept: ["je préfère le théâtre au cinéma", "je prefere le theatre au cinema", "je préfère le théâtre au cinéma"] },
            { type: "translate", en: "I hope you are doing well.", answer: "J'espère que tu vas bien.", accept: ["j'espère que tu vas bien", "j'espere que tu vas bien"] },
            { type: "translate", en: "In my opinion, this movie is excellent.", answer: "À mon avis, ce film est excellent.", accept: ["à mon avis ce film est excellent", "a mon avis ce film est excellent", "à mon avis, ce film est excellent"] },
            { type: "history", fr: "La Déclaration d'Indépendance a été écrite en 1776.", answer: "The Declaration of Independence was written in 1776.", options: ["The Declaration of Independence was written in 1776.", "The Declaration of Independence was written in 1789.", "The Declaration of Independence was written in London.", "The Declaration of Independence was written by France."] }
        ]
    },

    // ===== LESSON 11: Savoir & Connaître =====
    {
        id: 11,
        title: "Savoir & Connaître — To Know",
        desc: "Two ways to say 'to know' — facts vs. familiarity.",
        frenchFocus: {
            verb: "savoir / connaître",
            conjugation: {
                "je": "sais / connais",
                "tu": "sais / connais",
                "il/elle": "sait / connaît",
                "nous": "savons / connaissons",
                "vous": "savez / connaissez",
                "ils/elles": "savent / connaissent"
            },
            pattern: "savoir + fact/how to | connaître + person/place",
            examples: [
                { fr: "Je sais parler français.", en: "I know how to speak French." },
                { fr: "Tu sais la réponse?", en: "Do you know the answer?" },
                { fr: "Elle connaît bien Paris.", en: "She knows Paris well." },
                { fr: "Nous connaissons cet avocat.", en: "We know that lawyer." },
                { fr: "Vous savez que c'est important.", en: "You know that it's important." },
                { fr: "Ils ne connaissent pas ma famille.", en: "They don't know my family." }
            ],
            tips: "Use 'savoir' for facts, information, and skills (savoir + infinitive = 'to know how to'). Use 'connaître' for people, places, and things you're familiar with.",
            homonyms: [{ word: "savoir", meaning: "knowledge (noun)", example: "Le savoir est précieux. (Knowledge is precious.)" }],
            synonyms: [{ word: "connaître", meaning: "to know (person/place)" }, { word: "comprendre", meaning: "to understand" }],
            extraVerbs: [
                {
                    verb: "découvrir", meaning: "to discover",
                    conjugation: { "je": "découvre", "tu": "découvres", "il/elle": "découvre", "nous": "découvrons", "vous": "découvrez", "ils/elles": "découvrent" },
                    examples: [{ fr: "Je découvre une nouvelle ville.", en: "I discover a new city." }, { fr: "Nous découvrons la vérité.", en: "We discover the truth." }],
                    homonyms: [],
                    synonyms: [{ word: "trouver", meaning: "to find" }, { word: "révéler", meaning: "to reveal" }]
                },
                {
                    verb: "apprendre", meaning: "to learn",
                    conjugation: { "je": "apprends", "tu": "apprends", "il/elle": "apprend", "nous": "apprenons", "vous": "apprenez", "ils/elles": "apprennent" },
                    examples: [{ fr: "J'apprends le français.", en: "I am learning French." }, { fr: "Ils apprennent vite.", en: "They learn quickly." }],
                    homonyms: [],
                    synonyms: [{ word: "étudier", meaning: "to study" }, { word: "assimiler", meaning: "to assimilate" }]
                },
                {
                    verb: "reconnaître", meaning: "to recognize",
                    conjugation: { "je": "reconnais", "tu": "reconnais", "il/elle": "reconnaît", "nous": "reconnaissons", "vous": "reconnaissez", "ils/elles": "reconnaissent" },
                    examples: [{ fr: "Je reconnais cette chanson.", en: "I recognize this song." }, { fr: "Elle reconnaît son erreur.", en: "She recognizes her mistake." }],
                    homonyms: [],
                    synonyms: [{ word: "identifier", meaning: "to identify" }, { word: "admettre", meaning: "to admit" }]
                },
                {
                    verb: "croire", meaning: "to believe",
                    conjugation: { "je": "crois", "tu": "crois", "il/elle": "croit", "nous": "croyons", "vous": "croyez", "ils/elles": "croient" },
                    examples: [{ fr: "Je crois que c'est vrai.", en: "I believe it is true." }, { fr: "Nous croyons en la science.", en: "We believe in science." }],
                    homonyms: [],
                    synonyms: [{ word: "penser", meaning: "to think" }, { word: "estimer", meaning: "to consider" }]
                }
            ]
        },
        history: {
            period: "The Renaissance (1400s–1600s)",
            fr: "La Renaissance était une période de renouveau culturel en Europe. Les artistes comme Léonard de Vinci savaient peindre, sculpter et inventer. Les gens connaissaient les œuvres de Michel-Ange et de Raphaël. C'était une époque de curiosité et de savoir.",
            en: "The Renaissance was a period of cultural renewal in Europe. Artists like Leonardo da Vinci knew how to paint, sculpt, and invent. People knew the works of Michelangelo and Raphael. It was an era of curiosity and knowledge.",
            vocab: [
                { word: "le renouveau", meaning: "renewal" },
                { word: "peindre", meaning: "to paint" },
                { word: "sculpter", meaning: "to sculpt" },
                { word: "les œuvres", meaning: "the works" },
                { word: "le savoir", meaning: "knowledge" }
            ],
            funFact: "Leonardo da Vinci wrote his notebooks in mirror writing — you need a mirror to read them!",
            facts: [
                "The printing press, invented by Gutenberg around 1440, revolutionized learning by making books affordable and widely available for the first time.",
                "Leonardo da Vinci designed flying machines, tanks, and solar power concentrators — centuries before the technology existed to build them.",
                "During the Renaissance, Florence was the banking capital of Europe, and the Medici family funded many of the greatest artists and architects.",
                "Michelangelo painted the ceiling of the Sistine Chapel while lying on his back on scaffolding for four years (1508–1512).",
                "The Renaissance began in Italy partly because Italian city-states grew wealthy from Mediterranean trade routes.",
                "Galileo Galilei, a Renaissance scientist, improved the telescope and confirmed that the Earth orbits the Sun, challenging the Church\'s teachings."
            ]
        },
        currentEvents: [
            { fr: "Les musées français utilisent la réalité virtuelle pour présenter l\'art de la Renaissance.", en: "French museums use virtual reality to showcase Renaissance art." },
            { fr: "Les scientifiques découvrent de nouveaux manuscrits de Léonard de Vinci.", en: "Scientists discover new Leonardo da Vinci manuscripts." },
            { fr: "L\'Italie restaure des œuvres d\'art célèbres de la Renaissance.", en: "Italy restores famous Renaissance artworks." },
            { fr: "Les écoles européennes apprennent l\'histoire de la Renaissance avec des outils numériques.", en: "European schools learn Renaissance history with digital tools." }
        ],
        vocabulary: [
            {
                word: "savoir", partOfSpeech: "verb", meaning: "to know (fact/how to)",
                example: { fr: "Je sais parler français.", en: "I know how to speak French." },
                homonyms: [{ word: "savoir", meaning: "knowledge (noun)", example: "Le savoir est important. (Knowledge is important.)" }],
                synonyms: [{ word: "connaître", meaning: "to know (person/place)" }]
            },
            {
                word: "connaître", partOfSpeech: "verb", meaning: "to know (person/place)",
                example: { fr: "Elle connaît bien Paris.", en: "She knows Paris well." },
                homonyms: [],
                synonyms: [{ word: "reconnaître", meaning: "to recognize" }, { word: "être familier avec", meaning: "to be familiar with" }]
            },
            {
                word: "réponse", partOfSpeech: "noun (f)", meaning: "answer",
                example: { fr: "Tu sais la réponse ?", en: "Do you know the answer?" },
                homonyms: [],
                synonyms: [{ word: "solution", meaning: "solution" }, { word: "résultat", meaning: "result" }]
            },
            {
                word: "peindre", partOfSpeech: "verb", meaning: "to paint",
                example: { fr: "Il sait peindre.", en: "He knows how to paint." },
                homonyms: [],
                synonyms: [{ word: "dessiner", meaning: "to draw" }, { word: "illustrer", meaning: "to illustrate" }]
            },
            {
                word: "œuvre", partOfSpeech: "noun (f)", meaning: "work (of art)",
                example: { fr: "Les œuvres de Michel-Ange.", en: "The works of Michelangelo." },
                homonyms: [],
                synonyms: [{ word: "création", meaning: "creation" }, { word: "chef-d'œuvre", meaning: "masterpiece" }]
            }
        ],
        artHistory: {
            period: "La Renaissance Française (1494–1610)",
            periodEn: "The French Renaissance (1494–1610)",
            context: "La Renaissance française s'inspire de l'Italie. Le roi François Ier invite Léonard de Vinci en France et lance de grands projets de châteaux. L'art français devient plus raffiné avec un mélange d'influences italiennes et françaises.",
            contextEn: "The French Renaissance draws inspiration from Italy. King Francis I invites Leonardo da Vinci to France and launches grand castle projects. French art becomes more refined with a blend of Italian and French influences.",
            artworks: [
                {
                    title: "La Joconde (Mona Lisa)",
                    titleEn: "Mona Lisa",
                    artist: "Léonard de Vinci",
                    year: 1519,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/400px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
                    descFr: "Le tableau le plus célèbre du monde est conservé au Louvre à Paris. Léonard l'a apporté en France quand François Ier l'a invité au Château du Clos Lucé.",
                    descEn: "The most famous painting in the world is kept at the Louvre in Paris. Leonardo brought it to France when Francis I invited him to the Château du Clos Lucé."
                },
                {
                    title: "Diana Chasseresse",
                    titleEn: "Diana the Huntress",
                    artist: "École de Fontainebleau",
                    year: 1550,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/%C3%89cole_de_Fontainebleau_-_Diane_chasseresse_%28Mus%C3%A9e_du_Louvre%29.jpg/400px-%C3%89cole_de_Fontainebleau_-_Diane_chasseresse_%28Mus%C3%A9e_du_Louvre%29.jpg",
                    descFr: "Cette peinture de l'École de Fontainebleau représente la déesse Diane. Le style mélange la grâce italienne avec l'élégance française de la cour.",
                    descEn: "This painting from the School of Fontainebleau depicts the goddess Diana. The style blends Italian grace with the French elegance of the court."
                }
            ],
            vocab: [
                { word: "un roi", meaning: "a king" },
                { word: "un musée", meaning: "a museum" },
                { word: "célèbre", meaning: "famous" },
                { word: "raffiné(e)", meaning: "refined" },
                { word: "la cour", meaning: "the court" },
                { word: "inviter", meaning: "to invite" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Je ___ parler trois langues.", answer: "sais", options: ["sais", "connais", "savons", "connaît"] },
            { type: "fill", prompt: "Elle ___ bien cette ville.", answer: "connaît", options: ["sait", "connaît", "savez", "connaissent"] },
            { type: "fill", prompt: "Nous ___ la réponse.", answer: "savons", options: ["connaissons", "savons", "savent", "connaissez"] },
            { type: "translate", en: "I know how to cook.", answer: "Je sais cuisiner.", accept: ["je sais cuisiner"] },
            { type: "translate", en: "Do you know Paris?", answer: "Tu connais Paris?", accept: ["tu connais paris", "vous connaissez paris", "est-ce que tu connais paris"] },
            { type: "history", fr: "Les artistes savaient peindre et sculpter.", answer: "The artists knew how to paint and sculpt.", options: ["The artists knew how to paint and sculpt.", "The artists knew many famous people.", "The artists knew how to read and write.", "The artists knew the king personally."] },
            { type: "fill", prompt: "Vous ___ où se trouve le musée?", answer: "savez", options: ["savez", "connaissez", "savent", "connaissent"] },
            { type: "fill", prompt: "Tu ___ cet artiste?", answer: "connais", options: ["sais", "connais", "connaît", "savons"] },
            { type: "fill", prompt: "Nous ___ une nouvelle ville.", answer: "découvrons", options: ["découvrons", "découvre", "découvrez", "découvrent"] },
            { type: "fill", prompt: "J\' ___ le français depuis deux ans.", answer: "apprends", options: ["apprends", "apprend", "apprenons", "apprennent"] },
            { type: "translate", en: "They know Paris well.", answer: "Ils connaissent bien Paris.", accept: ["ils connaissent bien paris", "elles connaissent bien paris"] },
            { type: "translate", en: "I believe it is true.", answer: "Je crois que c\'est vrai.", accept: ["je crois que c'est vrai"] },
            { type: "translate", en: "She recognizes her mistake.", answer: "Elle reconnaît son erreur.", accept: ["elle reconnait son erreur", "elle reconnaît son erreur"] },
            { type: "history", fr: "Gutenberg a inventé l\'imprimerie vers 1440.", answer: "Gutenberg invented the printing press around 1440.", options: ["Gutenberg invented the printing press around 1440.", "Gutenberg invented the telescope around 1440.", "Gutenberg invented painting around 1440.", "Gutenberg invented the compass around 1440."] }
        ]
    },

    // ===== LESSON 12: Prendre =====
    {
        id: 12,
        title: "Prendre — To Take",
        desc: "A key irregular verb used for taking, eating, drinking, and decisions.",
        frenchFocus: {
            verb: "prendre",
            conjugation: {
                "je": "prends",
                "tu": "prends",
                "il/elle": "prend",
                "nous": "prenons",
                "vous": "prenez",
                "ils/elles": "prennent"
            },
            pattern: "Subject + prendre + object (food, transport, decision)",
            examples: [
                { fr: "Je prends un café.", en: "I'm having a coffee." },
                { fr: "Tu prends le métro?", en: "Are you taking the metro?" },
                { fr: "Elle prend une décision.", en: "She is making a decision." },
                { fr: "Nous prenons le petit déjeuner.", en: "We are having breakfast." },
                { fr: "Vous prenez du sucre?", en: "Do you take sugar?" },
                { fr: "Ils prennent l'avion demain.", en: "They are taking a plane tomorrow." }
            ],
            tips: "Prendre is used for meals (prendre le déjeuner), transport (prendre le bus), and decisions (prendre une décision). Its family: apprendre (to learn), comprendre (to understand).",
            homonyms: [],
            synonyms: [{ word: "saisir", meaning: "to seize" }, { word: "attraper", meaning: "to catch" }, { word: "emporter", meaning: "to take away" }],
            extraVerbs: [
                {
                    verb: "comprendre", meaning: "to understand",
                    conjugation: { "je": "comprends", "tu": "comprends", "il/elle": "comprend", "nous": "comprenons", "vous": "comprenez", "ils/elles": "comprennent" },
                    examples: [{ fr: "Je comprends le problème.", en: "I understand the problem." }, { fr: "Vous comprenez cette leçon?", en: "Do you understand this lesson?" }],
                    homonyms: [{ word: "comprendre", meaning: "to include", example: "Le prix comprend le dessert. (The price includes dessert.)" }],
                    synonyms: [{ word: "saisir", meaning: "to grasp" }, { word: "capter", meaning: "to get (informal)" }]
                },
                {
                    verb: "surprendre", meaning: "to surprise",
                    conjugation: { "je": "surprends", "tu": "surprends", "il/elle": "surprend", "nous": "surprenons", "vous": "surprenez", "ils/elles": "surprennent" },
                    examples: [{ fr: "Cette nouvelle me surprend.", en: "This news surprises me." }, { fr: "Ils surprennent leurs amis.", en: "They surprise their friends." }],
                    homonyms: [],
                    synonyms: [{ word: "étonner", meaning: "to astonish" }, { word: "stupéfier", meaning: "to stupefy" }]
                },
                {
                    verb: "conquérir", meaning: "to conquer",
                    conjugation: { "je": "conquiers", "tu": "conquiers", "il/elle": "conquiert", "nous": "conquérons", "vous": "conquérez", "ils/elles": "conquièrent" },
                    examples: [{ fr: "Napoléon conquiert l\'Europe.", en: "Napoleon conquers Europe." }, { fr: "Ils conquièrent de nouveaux territoires.", en: "They conquer new territories." }],
                    homonyms: [],
                    synonyms: [{ word: "vaincre", meaning: "to defeat" }, { word: "soumettre", meaning: "to subjugate" }]
                },
                {
                    verb: "perdre", meaning: "to lose",
                    conjugation: { "je": "perds", "tu": "perds", "il/elle": "perd", "nous": "perdons", "vous": "perdez", "ils/elles": "perdent" },
                    examples: [{ fr: "Je perds mes clés souvent.", en: "I often lose my keys." }, { fr: "Il perd la bataille.", en: "He loses the battle." }],
                    homonyms: [],
                    synonyms: [{ word: "égarer", meaning: "to misplace" }, { word: "manquer", meaning: "to miss" }]
                }
            ]
        },
        history: {
            period: "Napoleon Bonaparte (1799–1815)",
            fr: "Napoléon a pris le pouvoir en France en 1799. Il a pris la décision d'envahir l'Égypte et la Russie. Son armée a pris beaucoup de territoires en Europe. Mais la campagne de Russie a été un désastre — il a perdu plus de cinq cent mille soldats.",
            en: "Napoleon took power in France in 1799. He made the decision to invade Egypt and Russia. His army took many territories in Europe. But the Russian campaign was a disaster — he lost more than five hundred thousand soldiers.",
            vocab: [
                { word: "le pouvoir", meaning: "power" },
                { word: "envahir", meaning: "to invade" },
                { word: "une armée", meaning: "an army" },
                { word: "un désastre", meaning: "a disaster" },
                { word: "les soldats", meaning: "soldiers" }
            ],
            funFact: "Napoleon was not actually short — he was about 5'7\", which was average height for his time.",
            facts: [
                "Napoleon created the Napoleonic Code, a civil law system that still forms the basis of legal systems in over 70 countries today.",
                "Napoleon sold the Louisiana Territory to the United States in 1803 for about 15 million dollars, doubling the size of the young nation.",
                "During Napoleon's invasion of Russia in 1812, the Russian army used a scorched-earth strategy, burning their own cities and crops to starve the French.",
                "Napoleon was exiled twice — first to the island of Elba in 1814, and then to Saint Helena in 1815 after his defeat at Waterloo.",
                "The Rosetta Stone, discovered during Napoleon's Egyptian campaign in 1799, became the key to decoding ancient Egyptian hieroglyphs.",
                "Napoleon crowned himself Emperor in 1804, taking the crown from the Pope and placing it on his own head during the ceremony."
            ]
        },
        currentEvents: [
            { fr: "La France célèbre le bicentenaire de la mort de Napoléon avec des expositions.", en: "France celebrates the bicentennial of Napoleon's death with exhibitions." },
            { fr: "Les historiens débattent de l'héritage de Napoléon en Europe.", en: "Historians debate Napoleon's legacy in Europe." },
            { fr: "Un nouveau film sur Napoléon attire des millions de spectateurs.", en: "A new film about Napoleon attracts millions of viewers." },
            { fr: "Les archéologues découvrent des artefacts de la campagne de Russie.", en: "Archaeologists discover artifacts from the Russian campaign." }
        ],
        vocabulary: [
            {
                word: "prendre", partOfSpeech: "verb", meaning: "to take",
                example: { fr: "Je prends un café.", en: "I'm having a coffee." },
                homonyms: [],
                synonyms: [{ word: "saisir", meaning: "to seize" }, { word: "attraper", meaning: "to catch" }]
            },
            {
                word: "décision", partOfSpeech: "noun (f)", meaning: "decision",
                example: { fr: "Elle prend une décision.", en: "She is making a decision." },
                homonyms: [],
                synonyms: [{ word: "choix", meaning: "choice" }, { word: "résolution", meaning: "resolution" }]
            },
            {
                word: "métro", partOfSpeech: "noun (m)", meaning: "subway/metro",
                example: { fr: "Tu prends le métro ?", en: "Are you taking the metro?" },
                homonyms: [],
                synonyms: [{ word: "transport en commun", meaning: "public transport" }]
            },
            {
                word: "pouvoir", partOfSpeech: "noun (m)", meaning: "power",
                example: { fr: "Il a pris le pouvoir.", en: "He took power." },
                homonyms: [{ word: "pouvoir", meaning: "to be able (verb)", example: "Je peux aider. (I can help.)" }],
                synonyms: [{ word: "autorité", meaning: "authority" }, { word: "puissance", meaning: "might" }]
            },
            {
                word: "avion", partOfSpeech: "noun (m)", meaning: "airplane",
                example: { fr: "Ils prennent l'avion.", en: "They are taking a plane." },
                homonyms: [],
                synonyms: [{ word: "aéronef", meaning: "aircraft" }, { word: "vol", meaning: "flight" }]
            }
        ],
        artHistory: {
            period: "Le Surréalisme (1920–1960)",
            periodEn: "Surrealism (1920–1960)",
            context: "Le Surréalisme est né à Paris sous l'influence d'André Breton. Les artistes explorent les rêves, l'inconscient et l'imagination sans limites. Ils créent des images étranges et poétiques qui défient la logique.",
            contextEn: "Surrealism was born in Paris under the influence of André Breton. Artists explore dreams, the unconscious, and limitless imagination. They create strange and poetic images that defy logic.",
            artworks: [
                {
                    title: "La Persistance de la mémoire",
                    titleEn: "The Persistence of Memory",
                    artist: "Salvador Dalí",
                    year: 1931,
                    image: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
                    descFr: "Les montres molles de Dalí symbolisent la fluidité du temps dans les rêves. Ce tableau est devenu l'icône du mouvement surréaliste, créé pendant son séjour à Paris.",
                    descEn: "Dalí's soft watches symbolize the fluidity of time in dreams. This painting became the icon of the surrealist movement, created during his time in Paris."
                },
                {
                    title: "Le Fils de l'homme",
                    titleEn: "The Son of Man",
                    artist: "René Magritte",
                    year: 1964,
                    image: "https://upload.wikimedia.org/wikipedia/en/e/e5/Magritte_TheSonOfMan.jpg",
                    descFr: "Un homme en costume avec une pomme verte cachant son visage. Magritte, lié au mouvement parisien, explore le conflit entre le visible et le caché.",
                    descEn: "A man in a suit with a green apple hiding his face. Magritte, linked to the Parisian movement, explores the conflict between the visible and the hidden."
                }
            ],
            vocab: [
                { word: "un rêve", meaning: "a dream" },
                { word: "l'inconscient", meaning: "the unconscious" },
                { word: "étrange", meaning: "strange" },
                { word: "une montre", meaning: "a watch" },
                { word: "le visage", meaning: "the face" },
                { word: "caché(e)", meaning: "hidden" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Je ___ un café chaque matin.", answer: "prends", options: ["prends", "prend", "prenons", "prennent"] },
            { type: "fill", prompt: "Ils ___ l'avion à midi.", answer: "prennent", options: ["prend", "prenons", "prenez", "prennent"] },
            { type: "fill", prompt: "Nous ___ le petit déjeuner ensemble.", answer: "prenons", options: ["prenons", "prends", "prenez", "prennent"] },
            { type: "translate", en: "She is making a decision.", answer: "Elle prend une décision.", accept: ["elle prend une decision"] },
            { type: "translate", en: "Do you take the metro?", answer: "Tu prends le métro?", accept: ["tu prends le metro", "vous prenez le metro", "vous prenez le métro", "est-ce que tu prends le métro"] },
            { type: "history", fr: "Napoléon a pris le pouvoir en 1799.", answer: "Napoleon took power in 1799.", options: ["Napoleon took power in 1799.", "Napoleon lost power in 1799.", "Napoleon took a vacation in 1799.", "Napoleon took an army in 1799."] },
            { type: "fill", prompt: "Elle ___ le bus pour aller au travail.", answer: "prend", options: ["prends", "prend", "prenons", "prennent"] },
            { type: "fill", prompt: "Vous ___ du sucre dans votre café?", answer: "prenez", options: ["prends", "prend", "prenez", "prennent"] },
            { type: "fill", prompt: "Je ___ le problème maintenant.", answer: "comprends", options: ["comprends", "comprend", "comprenons", "comprennent"] },
            { type: "fill", prompt: "Il ___ la bataille de Waterloo.", answer: "perd", options: ["perds", "perd", "perdons", "perdent"] },
            { type: "translate", en: "We are having breakfast.", answer: "Nous prenons le petit déjeuner.", accept: ["nous prenons le petit dejeuner", "nous prenons le petit déjeuner"] },
            { type: "translate", en: "This news surprises me.", answer: "Cette nouvelle me surprend.", accept: ["cette nouvelle me surprend"] },
            { type: "translate", en: "Do you understand this lesson?", answer: "Vous comprenez cette leçon?", accept: ["vous comprenez cette lecon", "vous comprenez cette leçon", "tu comprends cette leçon", "tu comprends cette lecon"] },
            { type: "history", fr: "Napoléon a vendu la Louisiane aux États-Unis en 1803.", answer: "Napoleon sold Louisiana to the United States in 1803.", options: ["Napoleon sold Louisiana to the United States in 1803.", "Napoleon conquered Louisiana in 1803.", "Napoleon visited Louisiana in 1803.", "Napoleon lost Louisiana in a battle in 1803."] }
        ]
    },

    // ===== LESSON 13: Devoir =====
    {
        id: 13,
        title: "Devoir — Must / To Have To",
        desc: "Express obligation, duty, and what you owe — essential for legal French.",
        frenchFocus: {
            verb: "devoir",
            conjugation: {
                "je": "dois",
                "tu": "dois",
                "il/elle": "doit",
                "nous": "devons",
                "vous": "devez",
                "ils/elles": "doivent"
            },
            pattern: "Subject + devoir + infinitive (obligation) / noun (debt)",
            examples: [
                { fr: "Je dois étudier ce soir.", en: "I must study tonight." },
                { fr: "Tu dois respecter la loi.", en: "You must respect the law." },
                { fr: "Elle doit partir à huit heures.", en: "She has to leave at eight." },
                { fr: "Nous devons trouver une solution.", en: "We must find a solution." },
                { fr: "Vous devez signer le contrat.", en: "You must sign the contract." },
                { fr: "Ils doivent payer l'amende.", en: "They must pay the fine." }
            ],
            tips: "Devoir + infinitive = must/have to. Devoir + noun = to owe. 'Je dois 50 euros' = 'I owe 50 euros.' In legal contexts it means 'duty' — 'le devoir' as a noun means 'duty' or 'homework.'",
            homonyms: [{ word: "devoir", meaning: "homework / duty (noun)", example: "Fais tes devoirs ! (Do your homework!)" }],
            synonyms: [{ word: "falloir", meaning: "to be necessary" }, { word: "être obligé de", meaning: "to be obligated to" }],
            extraVerbs: [
                {
                    verb: "falloir", meaning: "to be necessary (impersonal)",
                    conjugation: { "je": "—", "tu": "—", "il/elle": "faut", "nous": "—", "vous": "—", "ils/elles": "—" },
                    examples: [{ fr: "Il faut étudier.", en: "It is necessary to study. / One must study." }, { fr: "Il faut respecter la loi.", en: "One must respect the law." }],
                    homonyms: [],
                    synonyms: [{ word: "devoir", meaning: "to must" }, { word: "être nécessaire", meaning: "to be necessary" }]
                },
                {
                    verb: "protéger", meaning: "to protect",
                    conjugation: { "je": "protège", "tu": "protèges", "il/elle": "protège", "nous": "protégeons", "vous": "protégez", "ils/elles": "protègent" },
                    examples: [{ fr: "La loi protège les citoyens.", en: "The law protects the citizens." }, { fr: "Nous protégeons nos droits.", en: "We protect our rights." }],
                    homonyms: [],
                    synonyms: [{ word: "défendre", meaning: "to defend" }, { word: "sauvegarder", meaning: "to safeguard" }]
                },
                {
                    verb: "obéir", meaning: "to obey",
                    conjugation: { "je": "obéis", "tu": "obéis", "il/elle": "obéit", "nous": "obéissons", "vous": "obéissez", "ils/elles": "obéissent" },
                    examples: [{ fr: "Tu dois obéir à la loi.", en: "You must obey the law." }, { fr: "Les soldats obéissent aux ordres.", en: "The soldiers obey orders." }],
                    homonyms: [],
                    synonyms: [{ word: "se soumettre", meaning: "to submit" }, { word: "respecter", meaning: "to respect" }]
                },
                {
                    verb: "interdire", meaning: "to forbid",
                    conjugation: { "je": "interdis", "tu": "interdis", "il/elle": "interdit", "nous": "interdisons", "vous": "interdisez", "ils/elles": "interdisent" },
                    examples: [{ fr: "La loi interdit la discrimination.", en: "The law forbids discrimination." }, { fr: "On interdit de fumer ici.", en: "Smoking is forbidden here." }],
                    homonyms: [],
                    synonyms: [{ word: "défendre", meaning: "to forbid" }, { word: "prohiber", meaning: "to prohibit" }]
                }
            ]
        },
        history: {
            period: "The Magna Carta (1215)",
            fr: "En 1215, les barons anglais ont forcé le roi Jean à signer la Magna Carta. Ce document disait que le roi devait respecter certaines lois. Il devait protéger les droits des citoyens. Ce document est devenu la base de la démocratie moderne.",
            en: "In 1215, the English barons forced King John to sign the Magna Carta. This document said that the king had to respect certain laws. He had to protect citizens' rights. This document became the foundation of modern democracy.",
            vocab: [
                { word: "les barons", meaning: "the barons" },
                { word: "forcer", meaning: "to force" },
                { word: "les droits", meaning: "rights" },
                { word: "les citoyens", meaning: "citizens" },
                { word: "la démocratie", meaning: "democracy" }
            ],
            funFact: "Only four original copies of the 1215 Magna Carta survive today — two are held by the British Library.",
            facts: [
                "The Magna Carta was originally written in Latin on parchment made from sheepskin, and sealed with the royal seal rather than signed.",
                "King John agreed to the Magna Carta under pressure but asked the Pope to annul it just ten weeks later, sparking a civil war.",
                "The Magna Carta established the principle that no one, not even the king, is above the law — a foundation of modern democracy.",
                "The document originally had 63 clauses, but only three are still part of English law today, including the right to a fair trial.",
                "The Magna Carta directly influenced the United States Constitution and the Bill of Rights, written over 500 years later.",
                "In 1217, a revised version called the Charter of the Forest was issued alongside the Magna Carta, protecting the rights of common people to use royal forests."
            ]
        },
        currentEvents: [
            { fr: "Les démocraties du monde entier célèbrent les principes de la Magna Carta.", en: "Democracies around the world celebrate the principles of the Magna Carta." },
            { fr: "Les avocats débattent des droits fondamentaux dans les cours internationales.", en: "Lawyers debate fundamental rights in international courts." },
            { fr: "Les citoyens doivent voter pour protéger leurs droits démocratiques.", en: "Citizens must vote to protect their democratic rights." },
            { fr: "Le Royaume-Uni réforme ses lois sur les droits de l\'homme.", en: "The United Kingdom reforms its human rights laws." }
        ],
        vocabulary: [
            {
                word: "devoir", partOfSpeech: "verb", meaning: "to must / to owe",
                example: { fr: "Je dois étudier.", en: "I must study." },
                homonyms: [{ word: "devoir", meaning: "homework / duty (noun)", example: "Fais tes devoirs ! (Do your homework!)" }],
                synonyms: [{ word: "falloir", meaning: "to be necessary" }, { word: "être obligé de", meaning: "to be obligated to" }]
            },
            {
                word: "loi", partOfSpeech: "noun (f)", meaning: "law",
                example: { fr: "Tu dois respecter la loi.", en: "You must respect the law." },
                homonyms: [],
                synonyms: [{ word: "règle", meaning: "rule" }, { word: "droit", meaning: "right/law" }]
            },
            {
                word: "contrat", partOfSpeech: "noun (m)", meaning: "contract",
                example: { fr: "Vous devez signer le contrat.", en: "You must sign the contract." },
                homonyms: [],
                synonyms: [{ word: "accord", meaning: "agreement" }, { word: "pacte", meaning: "pact" }]
            },
            {
                word: "droits", partOfSpeech: "noun (m pl)", meaning: "rights",
                example: { fr: "Les droits des citoyens.", en: "Citizens' rights." },
                homonyms: [{ word: "droit", meaning: "straight / right (direction)", example: "Allez tout droit. (Go straight ahead.)" }],
                synonyms: [{ word: "libertés", meaning: "freedoms" }, { word: "privilèges", meaning: "privileges" }]
            },
            {
                word: "amende", partOfSpeech: "noun (f)", meaning: "fine (penalty)",
                example: { fr: "Ils doivent payer l'amende.", en: "They must pay the fine." },
                homonyms: [{ word: "amande", meaning: "almond", example: "Un gâteau aux amandes. (An almond cake.)" }],
                synonyms: [{ word: "pénalité", meaning: "penalty" }, { word: "contravention", meaning: "ticket/fine" }]
            }
        ],
        artHistory: {
            period: "L'Art Gothique Français (1140–1500)",
            periodEn: "French Gothic Art (1140–1500)",
            context: "L'art gothique est né en France au XIIe siècle. Les cathédrales majestueuses comme Notre-Dame de Paris présentent des vitraux colorés, des sculptures détaillées et des arcs brisés qui s'élèvent vers le ciel.",
            contextEn: "Gothic art was born in France in the 12th century. Majestic cathedrals like Notre-Dame de Paris feature colorful stained glass windows, detailed sculptures, and pointed arches that rise toward the sky.",
            artworks: [
                {
                    title: "Les Vitraux de la Sainte-Chapelle",
                    titleEn: "Stained Glass of Sainte-Chapelle",
                    artist: "Artisans médiévaux",
                    year: 1248,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sainte_Chapelle_-_Upper_Chapel.jpg/600px-Sainte_Chapelle_-_Upper_Chapel.jpg",
                    descFr: "La Sainte-Chapelle à Paris possède les plus beaux vitraux médiévaux du monde. Plus de 1 100 scènes bibliques racontent des histoires en lumière et en couleur.",
                    descEn: "The Sainte-Chapelle in Paris has the most beautiful medieval stained glass in the world. Over 1,100 biblical scenes tell stories in light and color."
                },
                {
                    title: "Les Très Riches Heures du Duc de Berry",
                    titleEn: "The Very Rich Hours of the Duke of Berry",
                    artist: "Les Frères Limbourg",
                    year: 1416,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_Janvier.jpg/400px-Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_Janvier.jpg",
                    descFr: "Ce manuscrit enluminé est un chef-d'œuvre de l'art médiéval français. Chaque page illustre un mois de l'année avec des scènes de la vie quotidienne et des châteaux.",
                    descEn: "This illuminated manuscript is a masterpiece of French medieval art. Each page illustrates a month of the year with scenes of daily life and castles."
                }
            ],
            vocab: [
                { word: "un vitrail (des vitraux)", meaning: "a stained glass window" },
                { word: "une cathédrale", meaning: "a cathedral" },
                { word: "un arc", meaning: "an arch" },
                { word: "médiéval(e)", meaning: "medieval" },
                { word: "un manuscrit", meaning: "a manuscript" },
                { word: "enluminé(e)", meaning: "illuminated" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Je ___ finir ce travail avant vendredi.", answer: "dois", options: ["dois", "doit", "devons", "doivent"] },
            { type: "fill", prompt: "Vous ___ signer ici.", answer: "devez", options: ["dois", "doit", "devez", "doivent"] },
            { type: "fill", prompt: "Ils ___ respecter les règles.", answer: "doivent", options: ["doit", "devons", "devez", "doivent"] },
            { type: "translate", en: "We must find a solution.", answer: "Nous devons trouver une solution.", accept: ["nous devons trouver une solution"] },
            { type: "translate", en: "She has to leave.", answer: "Elle doit partir.", accept: ["elle doit partir"] },
            { type: "history", fr: "Le roi devait respecter certaines lois.", answer: "The king had to respect certain laws.", options: ["The king had to respect certain laws.", "The king had to write new laws.", "The king had to ignore the laws.", "The king had to change the laws."] },
            { type: "fill", prompt: "Tu ___ être à l\'heure pour le cours.", answer: "dois", options: ["dois", "doit", "devons", "devez"] },
            { type: "fill", prompt: "Nous ___ protéger l\'environnement.", answer: "devons", options: ["dois", "doit", "devons", "doivent"] },
            { type: "fill", prompt: "Il ___ étudier pour réussir.", answer: "faut", options: ["faut", "doit", "dois", "devons"] },
            { type: "fill", prompt: "La loi ___ les citoyens.", answer: "protège", options: ["protège", "protégeons", "protégez", "protègent"] },
            { type: "translate", en: "The soldiers obey orders.", answer: "Les soldats obéissent aux ordres.", accept: ["les soldats obéissent aux ordres", "les soldats obeissent aux ordres"] },
            { type: "translate", en: "The law forbids discrimination.", answer: "La loi interdit la discrimination.", accept: ["la loi interdit la discrimination"] },
            { type: "translate", en: "One must respect the law.", answer: "Il faut respecter la loi.", accept: ["il faut respecter la loi"] },
            { type: "history", fr: "La Magna Carta a influencé la Constitution américaine.", answer: "The Magna Carta influenced the American Constitution.", options: ["The Magna Carta influenced the American Constitution.", "The Magna Carta replaced the American Constitution.", "The Magna Carta was written in America.", "The Magna Carta was destroyed in 1776."] }
        ]
    },

    // ===== LESSON 14: Dire & Parler =====
    {
        id: 14,
        title: "Dire & Parler — To Say & To Speak",
        desc: "Two verbs of communication — what you say and how you speak.",
        frenchFocus: {
            verb: "dire / parler",
            conjugation: {
                "je": "dis / parle",
                "tu": "dis / parles",
                "il/elle": "dit / parle",
                "nous": "disons / parlons",
                "vous": "dites / parlez",
                "ils/elles": "disent / parlent"
            },
            pattern: "dire + que/à (specific words) | parler + de/à (general speech)",
            examples: [
                { fr: "Je dis la vérité.", en: "I tell the truth." },
                { fr: "Qu'est-ce que tu dis?", en: "What are you saying?" },
                { fr: "Elle parle trois langues.", en: "She speaks three languages." },
                { fr: "Nous disons au revoir.", en: "We say goodbye." },
                { fr: "Vous parlez très bien français.", en: "You speak French very well." },
                { fr: "Ils disent que c'est important.", en: "They say it's important." }
            ],
            tips: "Use 'dire' for specific words or messages (dire la vérité, dire que...). Use 'parler' for the act of speaking (parler français, parler à quelqu'un). Note: 'vous dites' is irregular — not 'vous disez!'",
            homonyms: [],
            synonyms: [{ word: "raconter", meaning: "to tell (a story)" }, { word: "affirmer", meaning: "to state" }, { word: "discuter", meaning: "to discuss" }],
            extraVerbs: [
                {
                    verb: "raconter", meaning: "to tell / to narrate",
                    conjugation: { "je": "raconte", "tu": "racontes", "il/elle": "raconte", "nous": "racontons", "vous": "racontez", "ils/elles": "racontent" },
                    examples: [{ fr: "Elle raconte une histoire.", en: "She tells a story." }, { fr: "Raconte-moi ta journée.", en: "Tell me about your day." }],
                    homonyms: [],
                    synonyms: [{ word: "narrer", meaning: "to narrate" }, { word: "relater", meaning: "to recount" }]
                },
                {
                    verb: "expliquer", meaning: "to explain",
                    conjugation: { "je": "explique", "tu": "expliques", "il/elle": "explique", "nous": "expliquons", "vous": "expliquez", "ils/elles": "expliquent" },
                    examples: [{ fr: "Le professeur explique la leçon.", en: "The teacher explains the lesson." }, { fr: "Peux-tu expliquer ce mot?", en: "Can you explain this word?" }],
                    homonyms: [],
                    synonyms: [{ word: "clarifier", meaning: "to clarify" }, { word: "éclaircir", meaning: "to elucidate" }]
                },
                {
                    verb: "répondre", meaning: "to answer / to respond",
                    conjugation: { "je": "réponds", "tu": "réponds", "il/elle": "répond", "nous": "répondons", "vous": "répondez", "ils/elles": "répondent" },
                    examples: [{ fr: "Je réponds à la question.", en: "I answer the question." }, { fr: "Il ne répond pas au téléphone.", en: "He does not answer the phone." }],
                    homonyms: [],
                    synonyms: [{ word: "répliquer", meaning: "to reply" }, { word: "rétorquer", meaning: "to retort" }]
                },
                {
                    verb: "crier", meaning: "to shout / to yell",
                    conjugation: { "je": "crie", "tu": "cries", "il/elle": "crie", "nous": "crions", "vous": "criez", "ils/elles": "crient" },
                    examples: [{ fr: "Ne crie pas!", en: "Don't shout!" }, { fr: "La foule crie de joie.", en: "The crowd shouts with joy." }],
                    homonyms: [],
                    synonyms: [{ word: "hurler", meaning: "to scream" }, { word: "s'exclamer", meaning: "to exclaim" }]
                }
            ]
        },
        history: {
            period: "Martin Luther King Jr. (1963)",
            fr: "En 1963, Martin Luther King Jr. a parlé devant des milliers de personnes à Washington. Il a dit les mots célèbres de son discours. Il parlait de justice et d'égalité pour tous. Son discours a changé l'histoire des droits civiques aux États-Unis.",
            en: "In 1963, Martin Luther King Jr. spoke in front of thousands of people in Washington. He said the famous words of his speech. He spoke about justice and equality for all. His speech changed the history of civil rights in the United States.",
            vocab: [
                { word: "un discours", meaning: "a speech" },
                { word: "des milliers", meaning: "thousands" },
                { word: "la justice", meaning: "justice" },
                { word: "l'égalité", meaning: "equality" },
                { word: "les droits civiques", meaning: "civil rights" }
            ],
            funFact: "The March on Washington in 1963 drew over 250,000 people — one of the largest political rallies in American history.",
            facts: [
                "Martin Luther King Jr. was only 35 years old when he received the Nobel Peace Prize in 1964, making him one of the youngest recipients at that time.",
                "The Civil Rights Act of 1964 outlawed discrimination based on race, color, religion, sex, or national origin in the United States.",
                "Rosa Parks refused to give up her bus seat in Montgomery, Alabama in 1955, sparking the Montgomery Bus Boycott that lasted 381 days.",
                "The Voting Rights Act of 1965 eliminated literacy tests and other barriers that had prevented African Americans from exercising their right to vote.",
                "Martin Luther King Jr. was inspired by Mahatma Gandhi\'s philosophy of nonviolent resistance and traveled to India in 1959 to study his methods.",
                "The March on Washington was originally planned as a protest, but President Kennedy convinced organizers to make it a more positive demonstration of unity."
            ]
        },
        currentEvents: [
            { fr: "Les Américains célèbrent le jour de Martin Luther King chaque année en janvier.", en: "Americans celebrate Martin Luther King Day every year in January." },
            { fr: "Les militants parlent de justice sociale dans les manifestations modernes.", en: "Activists speak about social justice at modern demonstrations." },
            { fr: "Les écoles enseignent l\'histoire des droits civiques aux élèves.", en: "Schools teach the history of civil rights to students." },
            { fr: "Les dirigeants du monde entier disent que l\'égalité reste un objectif important.", en: "Leaders around the world say that equality remains an important goal." }
        ],
        vocabulary: [
            {
                word: "dire", partOfSpeech: "verb", meaning: "to say / to tell",
                example: { fr: "Je dis la vérité.", en: "I tell the truth." },
                homonyms: [],
                synonyms: [{ word: "raconter", meaning: "to tell (a story)" }, { word: "affirmer", meaning: "to affirm" }, { word: "déclarer", meaning: "to declare" }]
            },
            {
                word: "parler", partOfSpeech: "verb", meaning: "to speak / to talk",
                example: { fr: "Elle parle trois langues.", en: "She speaks three languages." },
                homonyms: [],
                synonyms: [{ word: "discuter", meaning: "to discuss" }, { word: "causer", meaning: "to chat" }, { word: "bavarder", meaning: "to chatter" }]
            },
            {
                word: "vérité", partOfSpeech: "noun (f)", meaning: "truth",
                example: { fr: "Je dis la vérité.", en: "I tell the truth." },
                homonyms: [],
                synonyms: [{ word: "réalité", meaning: "reality" }, { word: "fait", meaning: "fact" }]
            },
            {
                word: "discours", partOfSpeech: "noun (m)", meaning: "speech",
                example: { fr: "Il a fait un discours.", en: "He gave a speech." },
                homonyms: [],
                synonyms: [{ word: "allocution", meaning: "address" }, { word: "conférence", meaning: "lecture" }]
            },
            {
                word: "langue", partOfSpeech: "noun (f)", meaning: "language / tongue",
                example: { fr: "Elle parle trois langues.", en: "She speaks three languages." },
                homonyms: [{ word: "langue", meaning: "tongue (body part)", example: "Tire la langue. (Stick out your tongue.)" }],
                synonyms: [{ word: "idiome", meaning: "idiom/language" }, { word: "dialecte", meaning: "dialect" }]
            }
        ],
        artHistory: {
            period: "L'Art Moderne et Contemporain (1945–aujourd'hui)",
            periodEn: "Modern and Contemporary Art (1945–present)",
            context: "Après la Seconde Guerre mondiale, Paris reste un centre artistique majeur. De nouveaux mouvements comme le Nouveau Réalisme et l'art conceptuel émergent. Des artistes comme Yves Klein et Louise Bourgeois redéfinissent l'art.",
            contextEn: "After World War II, Paris remains a major artistic center. New movements like New Realism and conceptual art emerge. Artists like Yves Klein and Louise Bourgeois redefine art.",
            artworks: [
                {
                    title: "IKB 79 (Bleu International Klein)",
                    titleEn: "IKB 79 (International Klein Blue)",
                    artist: "Yves Klein",
                    year: 1959,
                    image: "https://upload.wikimedia.org/wikipedia/en/3/38/IKB_191.jpg",
                    descFr: "Yves Klein a inventé sa propre couleur bleue, l'International Klein Blue. Ses monochromes bleus explorent l'infini et l'immatériel à travers une seule couleur pure.",
                    descEn: "Yves Klein invented his own shade of blue, International Klein Blue. His blue monochromes explore infinity and the immaterial through a single pure color."
                },
                {
                    title: "Maman",
                    titleEn: "Maman (Mother)",
                    artist: "Louise Bourgeois",
                    year: 1999,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Maman_at_Mus%C3%A9e_des_beaux-arts_du_Canada.jpg/600px-Maman_at_Mus%C3%A9e_des_beaux-arts_du_Canada.jpg",
                    descFr: "Cette sculpture géante d'araignée de 9 mètres représente la mère de l'artiste. Bourgeois, née à Paris, explore les thèmes de la famille, la protection et la vulnérabilité.",
                    descEn: "This giant 9-meter spider sculpture represents the artist's mother. Bourgeois, born in Paris, explores themes of family, protection, and vulnerability."
                }
            ],
            vocab: [
                { word: "une sculpture", meaning: "a sculpture" },
                { word: "contemporain(e)", meaning: "contemporary" },
                { word: "l'infini", meaning: "infinity" },
                { word: "une araignée", meaning: "a spider" },
                { word: "la vulnérabilité", meaning: "vulnerability" },
                { word: "redéfinir", meaning: "to redefine" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Je ___ toujours la vérité.", answer: "dis", options: ["dis", "dit", "parle", "disons"] },
            { type: "fill", prompt: "Elle ___ français et anglais.", answer: "parle", options: ["dit", "parle", "dis", "parlent"] },
            { type: "fill", prompt: "Vous ___ que c'est facile?", answer: "dites", options: ["disez", "dites", "disons", "parlons"] },
            { type: "translate", en: "We say goodbye.", answer: "Nous disons au revoir.", accept: ["nous disons au revoir"] },
            { type: "translate", en: "You speak French very well.", answer: "Vous parlez très bien français.", accept: ["vous parlez tres bien francais", "tu parles très bien français", "tu parles tres bien francais"] },
            { type: "history", fr: "Martin Luther King a parlé de justice et d'égalité.", answer: "MLK spoke about justice and equality.", options: ["MLK spoke about justice and equality.", "MLK spoke about war and peace.", "MLK spoke about science and art.", "MLK spoke about religion and faith."] },
            { type: "fill", prompt: "Nous ___ au revoir à nos amis.", answer: "disons", options: ["disons", "disent", "dites", "dis"] },
            { type: "fill", prompt: "Tu ___ français à la maison?", answer: "parles", options: ["dis", "parles", "parle", "parlons"] },
            { type: "fill", prompt: "Elle ___ une histoire à ses enfants.", answer: "raconte", options: ["raconte", "dit", "parle", "explique"] },
            { type: "fill", prompt: "Le professeur ___ la grammaire.", answer: "explique", options: ["explique", "dit", "parle", "raconte"] },
            { type: "translate", en: "I answer the question.", answer: "Je réponds à la question.", accept: ["je réponds à la question", "je reponds a la question"] },
            { type: "translate", en: "The crowd shouts with joy.", answer: "La foule crie de joie.", accept: ["la foule crie de joie"] },
            { type: "translate", en: "Tell me about your day.", answer: "Raconte-moi ta journée.", accept: ["raconte-moi ta journée", "raconte-moi ta journee", "racontez-moi votre journée"] },
            { type: "history", fr: "Rosa Parks a refusé de céder sa place dans le bus en 1955.", answer: "Rosa Parks refused to give up her seat on the bus in 1955.", options: ["Rosa Parks refused to give up her seat on the bus in 1955.", "Rosa Parks drove a bus in 1955.", "Rosa Parks spoke at a rally in 1955.", "Rosa Parks wrote a book in 1955."] }
        ]
    },

    // ===== LESSON 15: Venir & Revenir =====
    {
        id: 15,
        title: "Venir — To Come",
        desc: "Coming, returning, and talking about what just happened.",
        frenchFocus: {
            verb: "venir",
            conjugation: {
                "je": "viens",
                "tu": "viens",
                "il/elle": "vient",
                "nous": "venons",
                "vous": "venez",
                "ils/elles": "viennent"
            },
            pattern: "venir + de + place (origin) | venir de + infinitive (just did)",
            examples: [
                { fr: "Je viens de France.", en: "I come from France." },
                { fr: "Tu viens avec nous?", en: "Are you coming with us?" },
                { fr: "Elle vient de terminer.", en: "She just finished." },
                { fr: "Nous venons d'arriver.", en: "We just arrived." },
                { fr: "Vous venez de quelle ville?", en: "What city do you come from?" },
                { fr: "Ils viennent demain.", en: "They are coming tomorrow." }
            ],
            tips: "Venir de + infinitive = 'to have just done something.' 'Je viens de manger' = 'I just ate.' This is called the passé récent — a very useful construction! Family: revenir (come back), devenir (become).",
            homonyms: [],
            synonyms: [{ word: "arriver", meaning: "to arrive" }, { word: "se présenter", meaning: "to show up" }, { word: "approcher", meaning: "to approach" }],
            extraVerbs: [
                {
                    verb: "revenir", meaning: "to come back / to return",
                    conjugation: { "je": "reviens", "tu": "reviens", "il/elle": "revient", "nous": "revenons", "vous": "revenez", "ils/elles": "reviennent" },
                    examples: [{ fr: "Je reviens dans cinq minutes.", en: "I\'ll be back in five minutes." }, { fr: "Ils reviennent de vacances.", en: "They are coming back from vacation." }],
                    homonyms: [],
                    synonyms: [{ word: "retourner", meaning: "to go back" }, { word: "rentrer", meaning: "to go home" }]
                },
                {
                    verb: "devenir", meaning: "to become",
                    conjugation: { "je": "deviens", "tu": "deviens", "il/elle": "devient", "nous": "devenons", "vous": "devenez", "ils/elles": "deviennent" },
                    examples: [{ fr: "Elle devient médecin.", en: "She is becoming a doctor." }, { fr: "La ville devient plus grande.", en: "The city is becoming bigger." }],
                    homonyms: [],
                    synonyms: [{ word: "se transformer en", meaning: "to turn into" }, { word: "évoluer", meaning: "to evolve" }]
                },
                {
                    verb: "partir", meaning: "to leave / to depart",
                    conjugation: { "je": "pars", "tu": "pars", "il/elle": "part", "nous": "partons", "vous": "partez", "ils/elles": "partent" },
                    examples: [{ fr: "Je pars demain matin.", en: "I am leaving tomorrow morning." }, { fr: "Nous partons en voyage.", en: "We are leaving on a trip." }],
                    homonyms: [],
                    synonyms: [{ word: "quitter", meaning: "to leave" }, { word: "s'en aller", meaning: "to go away" }]
                },
                {
                    verb: "arriver", meaning: "to arrive",
                    conjugation: { "je": "arrive", "tu": "arrives", "il/elle": "arrive", "nous": "arrivons", "vous": "arrivez", "ils/elles": "arrivent" },
                    examples: [{ fr: "Le train arrive à midi.", en: "The train arrives at noon." }, { fr: "Nous arrivons bientôt.", en: "We are arriving soon." }],
                    homonyms: [],
                    synonyms: [{ word: "venir", meaning: "to come" }, { word: "parvenir", meaning: "to reach" }]
                }
            ]
        },
        history: {
            period: "Immigration to America (1892–1954)",
            fr: "Des millions de personnes sont venues en Amérique par Ellis Island. Ils venaient d'Europe — d'Italie, d'Irlande, de Pologne et d'ailleurs. Ils venaient de quitter leur pays pour chercher une vie meilleure. Ellis Island est devenu un symbole d'espoir.",
            en: "Millions of people came to America through Ellis Island. They came from Europe — Italy, Ireland, Poland, and elsewhere. They had just left their country to seek a better life. Ellis Island became a symbol of hope.",
            vocab: [
                { word: "des millions", meaning: "millions" },
                { word: "chercher", meaning: "to seek" },
                { word: "une vie meilleure", meaning: "a better life" },
                { word: "l'espoir", meaning: "hope" },
                { word: "quitter", meaning: "to leave" }
            ],
            funFact: "Over 12 million immigrants were processed at Ellis Island between 1892 and 1954.",
            facts: [
                "Ellis Island opened as an immigration station on January 1, 1892, and Annie Moore, a 15-year-old girl from Ireland, was the very first person processed.",
                "Immigrants at Ellis Island went through medical and legal inspections that lasted three to five hours, and about 2% were denied entry.",
                "Many immigrants had their names changed or misspelled by officials at Ellis Island who could not understand foreign languages.",
                "The peak year for immigration through Ellis Island was 1907, when over one million people arrived in a single year.",
                "Ellis Island closed as an immigration station in 1954 and was abandoned for years before being reopened as a museum in 1990.",
                "Immigrants often carried all their belongings in a single trunk or suitcase, leaving behind everything they knew for a chance at a new life."
            ]
        },
        currentEvents: [
            { fr: "Des millions de personnes viennent aux États-Unis chaque année pour travailler et étudier.", en: "Millions of people come to the United States every year to work and study." },
            { fr: "Les débats sur l\'immigration deviennent de plus en plus importants.", en: "Debates about immigration are becoming increasingly important." },
            { fr: "Le musée d\'Ellis Island accueille des visiteurs du monde entier.", en: "The Ellis Island museum welcomes visitors from around the world." },
            { fr: "Les familles d\'immigrants reviennent à Ellis Island pour retrouver leur histoire.", en: "Immigrant families return to Ellis Island to rediscover their history." }
        ],
        vocabulary: [
            {
                word: "venir", partOfSpeech: "verb", meaning: "to come",
                example: { fr: "Je viens de France.", en: "I come from France." },
                homonyms: [],
                synonyms: [{ word: "arriver", meaning: "to arrive" }, { word: "se présenter", meaning: "to show up" }]
            },
            {
                word: "espoir", partOfSpeech: "noun (m)", meaning: "hope",
                example: { fr: "Ellis Island est un symbole d'espoir.", en: "Ellis Island is a symbol of hope." },
                homonyms: [],
                synonyms: [{ word: "espérance", meaning: "hope/expectation" }, { word: "optimisme", meaning: "optimism" }]
            },
            {
                word: "vie", partOfSpeech: "noun (f)", meaning: "life",
                example: { fr: "Chercher une vie meilleure.", en: "To seek a better life." },
                homonyms: [{ word: "vis", meaning: "screw (noun) / live (verb)", example: "Je vis à Paris. (I live in Paris.)" }],
                synonyms: [{ word: "existence", meaning: "existence" }]
            },
            {
                word: "quitter", partOfSpeech: "verb", meaning: "to leave (a place/person)",
                example: { fr: "Ils venaient de quitter leur pays.", en: "They had just left their country." },
                homonyms: [],
                synonyms: [{ word: "partir de", meaning: "to depart from" }, { word: "abandonner", meaning: "to abandon" }]
            },
            {
                word: "chercher", partOfSpeech: "verb", meaning: "to seek / to look for",
                example: { fr: "Ils cherchent une vie meilleure.", en: "They are looking for a better life." },
                homonyms: [],
                synonyms: [{ word: "rechercher", meaning: "to search for" }, { word: "explorer", meaning: "to explore" }]
            }
        ],
        artHistory: {
            period: "L'Art Déco (1920–1940)",
            periodEn: "Art Deco (1920–1940)",
            context: "L'Art Déco est né à Paris lors de l'Exposition internationale des Arts décoratifs de 1925. Ce style géométrique et luxueux influence l'architecture, la mode, le design et les affiches. Il symbolise la modernité et l'élégance.",
            contextEn: "Art Deco was born in Paris at the 1925 International Exhibition of Decorative Arts. This geometric and luxurious style influences architecture, fashion, design, and posters. It symbolizes modernity and elegance.",
            artworks: [
                {
                    title: "Le Grand Salon du Paquebot Normandie",
                    titleEn: "The Grand Salon of the SS Normandie",
                    artist: "Jean Dunand & Jean Dupas",
                    year: 1935,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/SS_Normandie_color.jpg/800px-SS_Normandie_color.jpg",
                    descFr: "Le paquebot Normandie était un chef-d'œuvre flottant de l'Art Déco français. Son grand salon était décoré de panneaux laqués, de dorures et de motifs géométriques luxueux.",
                    descEn: "The SS Normandie was a floating masterpiece of French Art Deco. Its grand salon was decorated with lacquered panels, gilding, and luxurious geometric patterns."
                },
                {
                    title: "La Tour Eiffel illuminée (style Art Déco Citroën)",
                    titleEn: "The Eiffel Tower illuminated (Citroën Art Deco style)",
                    artist: "Fernand Jacopozzi",
                    year: 1925,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_eiffel_at_night.jpg/400px-Tour_eiffel_at_night.jpg",
                    descFr: "Pendant l'exposition de 1925, la Tour Eiffel a été illuminée avec le nom Citroën en lettres lumineuses Art Déco. C'était la plus grande publicité du monde à l'époque.",
                    descEn: "During the 1925 exhibition, the Eiffel Tower was illuminated with the Citroën name in Art Deco light letters. It was the world's largest advertisement at the time."
                }
            ],
            vocab: [
                { word: "géométrique", meaning: "geometric" },
                { word: "luxueux/luxueuse", meaning: "luxurious" },
                { word: "la mode", meaning: "fashion" },
                { word: "une exposition", meaning: "an exhibition" },
                { word: "doré(e)", meaning: "golden/gilded" },
                { word: "la modernité", meaning: "modernity" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Je ___ de Paris.", answer: "viens", options: ["viens", "vient", "venons", "viennent"] },
            { type: "fill", prompt: "Nous ___ d'arriver à la maison.", answer: "venons", options: ["viens", "venons", "venez", "viennent"] },
            { type: "fill", prompt: "Ils ___ demain matin.", answer: "viennent", options: ["vient", "venons", "venez", "viennent"] },
            { type: "translate", en: "She just finished.", answer: "Elle vient de terminer.", accept: ["elle vient de terminer", "elle vient de finir"] },
            { type: "translate", en: "Are you coming with us?", answer: "Tu viens avec nous?", accept: ["tu viens avec nous", "vous venez avec nous", "est-ce que tu viens avec nous"] },
            { type: "history", fr: "Les immigrants venaient d'Europe pour chercher une vie meilleure.", answer: "Immigrants came from Europe to seek a better life.", options: ["Immigrants came from Europe to seek a better life.", "Immigrants came from Europe to start a war.", "Immigrants came from Europe to visit briefly.", "Immigrants came from Europe to study art."] },
            { type: "fill", prompt: "Elle ___ dans cinq minutes.", answer: "revient", options: ["reviens", "revient", "revenons", "reviennent"] },
            { type: "fill", prompt: "Nous ___ en voyage demain.", answer: "partons", options: ["pars", "part", "partons", "partent"] },
            { type: "fill", prompt: "Le train ___ à midi.", answer: "arrive", options: ["arrive", "arrives", "arrivons", "arrivent"] },
            { type: "fill", prompt: "La ville ___ plus grande chaque année.", answer: "devient", options: ["deviens", "devient", "devenons", "deviennent"] },
            { type: "translate", en: "I am leaving tomorrow morning.", answer: "Je pars demain matin.", accept: ["je pars demain matin"] },
            { type: "translate", en: "They are coming back from vacation.", answer: "Ils reviennent de vacances.", accept: ["ils reviennent de vacances", "elles reviennent de vacances"] },
            { type: "translate", en: "We are arriving soon.", answer: "Nous arrivons bientôt.", accept: ["nous arrivons bientot", "nous arrivons bientôt"] },
            { type: "history", fr: "Annie Moore était la première immigrante à Ellis Island en 1892.", answer: "Annie Moore was the first immigrant at Ellis Island in 1892.", options: ["Annie Moore was the first immigrant at Ellis Island in 1892.", "Annie Moore built Ellis Island in 1892.", "Annie Moore closed Ellis Island in 1892.", "Annie Moore was born at Ellis Island in 1892."] }
        ]
    },

    // ===== LESSON 11: Savoir & Connaître =====
    {
        id: 11,
        title: "Savoir & Connaître — To Know",
        desc: "Two ways to say 'to know' — facts vs. familiarity.",
        frenchFocus: {
            verb: "savoir / connaître",
            conjugation: {
                "je": "sais / connais",
                "tu": "sais / connais",
                "il/elle": "sait / connaît",
                "nous": "savons / connaissons",
                "vous": "savez / connaissez",
                "ils/elles": "savent / connaissent"
            },
            pattern: "savoir + fact/how to | connaître + person/place",
            examples: [
                { fr: "Je sais parler français.", en: "I know how to speak French." },
                { fr: "Tu sais la réponse?", en: "Do you know the answer?" },
                { fr: "Elle connaît bien Paris.", en: "She knows Paris well." },
                { fr: "Nous connaissons cet avocat.", en: "We know that lawyer." },
                { fr: "Vous savez que c'est important.", en: "You know that it's important." },
                { fr: "Ils ne connaissent pas ma famille.", en: "They don't know my family." }
            ],
            tips: "Use 'savoir' for facts, information, and skills (savoir + infinitive = 'to know how to'). Use 'connaître' for people, places, and things you're familiar with.",
            homonyms: [{ word: "savoir", meaning: "knowledge (noun)", example: "Le savoir est précieux. (Knowledge is precious.)" }],
            synonyms: [{ word: "connaître", meaning: "to know (person/place)" }, { word: "comprendre", meaning: "to understand" }]
        },
        history: {
            period: "The Renaissance (1400s–1600s)",
            fr: "La Renaissance était une période de renouveau culturel en Europe. Les artistes comme Léonard de Vinci savaient peindre, sculpter et inventer. Les gens connaissaient les œuvres de Michel-Ange et de Raphaël. C'était une époque de curiosité et de savoir.",
            en: "The Renaissance was a period of cultural renewal in Europe. Artists like Leonardo da Vinci knew how to paint, sculpt, and invent. People knew the works of Michelangelo and Raphael. It was an era of curiosity and knowledge.",
            vocab: [
                { word: "le renouveau", meaning: "renewal" },
                { word: "peindre", meaning: "to paint" },
                { word: "sculpter", meaning: "to sculpt" },
                { word: "les œuvres", meaning: "the works" },
                { word: "le savoir", meaning: "knowledge" }
            ],
            funFact: "Leonardo da Vinci wrote his notebooks in mirror writing — you need a mirror to read them!"
        },
        vocabulary: [
            {
                word: "savoir", partOfSpeech: "verb", meaning: "to know (fact/how to)",
                example: { fr: "Je sais parler français.", en: "I know how to speak French." },
                homonyms: [{ word: "savoir", meaning: "knowledge (noun)", example: "Le savoir est important. (Knowledge is important.)" }],
                synonyms: [{ word: "connaître", meaning: "to know (person/place)" }]
            },
            {
                word: "connaître", partOfSpeech: "verb", meaning: "to know (person/place)",
                example: { fr: "Elle connaît bien Paris.", en: "She knows Paris well." },
                homonyms: [],
                synonyms: [{ word: "reconnaître", meaning: "to recognize" }, { word: "être familier avec", meaning: "to be familiar with" }]
            },
            {
                word: "réponse", partOfSpeech: "noun (f)", meaning: "answer",
                example: { fr: "Tu sais la réponse ?", en: "Do you know the answer?" },
                homonyms: [],
                synonyms: [{ word: "solution", meaning: "solution" }, { word: "résultat", meaning: "result" }]
            },
            {
                word: "peindre", partOfSpeech: "verb", meaning: "to paint",
                example: { fr: "Il sait peindre.", en: "He knows how to paint." },
                homonyms: [],
                synonyms: [{ word: "dessiner", meaning: "to draw" }, { word: "illustrer", meaning: "to illustrate" }]
            },
            {
                word: "œuvre", partOfSpeech: "noun (f)", meaning: "work (of art)",
                example: { fr: "Les œuvres de Michel-Ange.", en: "The works of Michelangelo." },
                homonyms: [],
                synonyms: [{ word: "création", meaning: "creation" }, { word: "chef-d'œuvre", meaning: "masterpiece" }]
            }
        ],
        artHistory: {
            period: "La Renaissance Française (1494–1610)",
            periodEn: "The French Renaissance (1494–1610)",
            context: "La Renaissance française s'inspire de l'Italie. Le roi François Ier invite Léonard de Vinci en France et lance de grands projets de châteaux. L'art français devient plus raffiné avec un mélange d'influences italiennes et françaises.",
            contextEn: "The French Renaissance draws inspiration from Italy. King Francis I invites Leonardo da Vinci to France and launches grand castle projects. French art becomes more refined with a blend of Italian and French influences.",
            artworks: [
                {
                    title: "La Joconde (Mona Lisa)",
                    titleEn: "Mona Lisa",
                    artist: "Léonard de Vinci",
                    year: 1519,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/400px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
                    descFr: "Le tableau le plus célèbre du monde est conservé au Louvre à Paris. Léonard l'a apporté en France quand François Ier l'a invité au Château du Clos Lucé.",
                    descEn: "The most famous painting in the world is kept at the Louvre in Paris. Leonardo brought it to France when Francis I invited him to the Château du Clos Lucé."
                },
                {
                    title: "Diana Chasseresse",
                    titleEn: "Diana the Huntress",
                    artist: "École de Fontainebleau",
                    year: 1550,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/%C3%89cole_de_Fontainebleau_-_Diane_chasseresse_%28Mus%C3%A9e_du_Louvre%29.jpg/400px-%C3%89cole_de_Fontainebleau_-_Diane_chasseresse_%28Mus%C3%A9e_du_Louvre%29.jpg",
                    descFr: "Cette peinture de l'École de Fontainebleau représente la déesse Diane. Le style mélange la grâce italienne avec l'élégance française de la cour.",
                    descEn: "This painting from the School of Fontainebleau depicts the goddess Diana. The style blends Italian grace with the French elegance of the court."
                }
            ],
            vocab: [
                { word: "un roi", meaning: "a king" },
                { word: "un musée", meaning: "a museum" },
                { word: "célèbre", meaning: "famous" },
                { word: "raffiné(e)", meaning: "refined" },
                { word: "la cour", meaning: "the court" },
                { word: "inviter", meaning: "to invite" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Je ___ parler trois langues.", answer: "sais", options: ["sais", "connais", "savons", "connaît"] },
            { type: "fill", prompt: "Elle ___ bien cette ville.", answer: "connaît", options: ["sait", "connaît", "savez", "connaissent"] },
            { type: "fill", prompt: "Nous ___ la réponse.", answer: "savons", options: ["connaissons", "savons", "savent", "connaissez"] },
            { type: "translate", en: "I know how to cook.", answer: "Je sais cuisiner.", accept: ["je sais cuisiner"] },
            { type: "translate", en: "Do you know Paris?", answer: "Tu connais Paris?", accept: ["tu connais paris", "vous connaissez paris", "est-ce que tu connais paris"] },
            { type: "history", fr: "Les artistes savaient peindre et sculpter.", answer: "The artists knew how to paint and sculpt.", options: ["The artists knew how to paint and sculpt.", "The artists knew many famous people.", "The artists knew how to read and write.", "The artists knew the king personally."] }
        ]
    },

    // ===== LESSON 12: Prendre =====
    {
        id: 12,
        title: "Prendre — To Take",
        desc: "A key irregular verb used for taking, eating, drinking, and decisions.",
        frenchFocus: {
            verb: "prendre",
            conjugation: {
                "je": "prends",
                "tu": "prends",
                "il/elle": "prend",
                "nous": "prenons",
                "vous": "prenez",
                "ils/elles": "prennent"
            },
            pattern: "Subject + prendre + object (food, transport, decision)",
            examples: [
                { fr: "Je prends un café.", en: "I'm having a coffee." },
                { fr: "Tu prends le métro?", en: "Are you taking the metro?" },
                { fr: "Elle prend une décision.", en: "She is making a decision." },
                { fr: "Nous prenons le petit déjeuner.", en: "We are having breakfast." },
                { fr: "Vous prenez du sucre?", en: "Do you take sugar?" },
                { fr: "Ils prennent l'avion demain.", en: "They are taking a plane tomorrow." }
            ],
            tips: "Prendre is used for meals (prendre le déjeuner), transport (prendre le bus), and decisions (prendre une décision). Its family: apprendre (to learn), comprendre (to understand).",
            homonyms: [],
            synonyms: [{ word: "saisir", meaning: "to seize" }, { word: "attraper", meaning: "to catch" }, { word: "emporter", meaning: "to take away" }]
        },
        history: {
            period: "Napoleon Bonaparte (1799–1815)",
            fr: "Napoléon a pris le pouvoir en France en 1799. Il a pris la décision d'envahir l'Égypte et la Russie. Son armée a pris beaucoup de territoires en Europe. Mais la campagne de Russie a été un désastre — il a perdu plus de cinq cent mille soldats.",
            en: "Napoleon took power in France in 1799. He made the decision to invade Egypt and Russia. His army took many territories in Europe. But the Russian campaign was a disaster — he lost more than five hundred thousand soldiers.",
            vocab: [
                { word: "le pouvoir", meaning: "power" },
                { word: "envahir", meaning: "to invade" },
                { word: "une armée", meaning: "an army" },
                { word: "un désastre", meaning: "a disaster" },
                { word: "les soldats", meaning: "soldiers" }
            ],
            funFact: "Napoleon was not actually short — he was about 5'7\", which was average height for his time."
        },
        vocabulary: [
            {
                word: "prendre", partOfSpeech: "verb", meaning: "to take",
                example: { fr: "Je prends un café.", en: "I'm having a coffee." },
                homonyms: [],
                synonyms: [{ word: "saisir", meaning: "to seize" }, { word: "attraper", meaning: "to catch" }]
            },
            {
                word: "décision", partOfSpeech: "noun (f)", meaning: "decision",
                example: { fr: "Elle prend une décision.", en: "She is making a decision." },
                homonyms: [],
                synonyms: [{ word: "choix", meaning: "choice" }, { word: "résolution", meaning: "resolution" }]
            },
            {
                word: "métro", partOfSpeech: "noun (m)", meaning: "subway/metro",
                example: { fr: "Tu prends le métro ?", en: "Are you taking the metro?" },
                homonyms: [],
                synonyms: [{ word: "transport en commun", meaning: "public transport" }]
            },
            {
                word: "pouvoir", partOfSpeech: "noun (m)", meaning: "power",
                example: { fr: "Il a pris le pouvoir.", en: "He took power." },
                homonyms: [{ word: "pouvoir", meaning: "to be able (verb)", example: "Je peux aider. (I can help.)" }],
                synonyms: [{ word: "autorité", meaning: "authority" }, { word: "puissance", meaning: "might" }]
            },
            {
                word: "avion", partOfSpeech: "noun (m)", meaning: "airplane",
                example: { fr: "Ils prennent l'avion.", en: "They are taking a plane." },
                homonyms: [],
                synonyms: [{ word: "aéronef", meaning: "aircraft" }, { word: "vol", meaning: "flight" }]
            }
        ],
        artHistory: {
            period: "Le Surréalisme (1920–1960)",
            periodEn: "Surrealism (1920–1960)",
            context: "Le Surréalisme est né à Paris sous l'influence d'André Breton. Les artistes explorent les rêves, l'inconscient et l'imagination sans limites. Ils créent des images étranges et poétiques qui défient la logique.",
            contextEn: "Surrealism was born in Paris under the influence of André Breton. Artists explore dreams, the unconscious, and limitless imagination. They create strange and poetic images that defy logic.",
            artworks: [
                {
                    title: "La Persistance de la mémoire",
                    titleEn: "The Persistence of Memory",
                    artist: "Salvador Dalí",
                    year: 1931,
                    image: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
                    descFr: "Les montres molles de Dalí symbolisent la fluidité du temps dans les rêves. Ce tableau est devenu l'icône du mouvement surréaliste, créé pendant son séjour à Paris.",
                    descEn: "Dalí's soft watches symbolize the fluidity of time in dreams. This painting became the icon of the surrealist movement, created during his time in Paris."
                },
                {
                    title: "Le Fils de l'homme",
                    titleEn: "The Son of Man",
                    artist: "René Magritte",
                    year: 1964,
                    image: "https://upload.wikimedia.org/wikipedia/en/e/e5/Magritte_TheSonOfMan.jpg",
                    descFr: "Un homme en costume avec une pomme verte cachant son visage. Magritte, lié au mouvement parisien, explore le conflit entre le visible et le caché.",
                    descEn: "A man in a suit with a green apple hiding his face. Magritte, linked to the Parisian movement, explores the conflict between the visible and the hidden."
                }
            ],
            vocab: [
                { word: "un rêve", meaning: "a dream" },
                { word: "l'inconscient", meaning: "the unconscious" },
                { word: "étrange", meaning: "strange" },
                { word: "une montre", meaning: "a watch" },
                { word: "le visage", meaning: "the face" },
                { word: "caché(e)", meaning: "hidden" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Je ___ un café chaque matin.", answer: "prends", options: ["prends", "prend", "prenons", "prennent"] },
            { type: "fill", prompt: "Ils ___ l'avion à midi.", answer: "prennent", options: ["prend", "prenons", "prenez", "prennent"] },
            { type: "fill", prompt: "Nous ___ le petit déjeuner ensemble.", answer: "prenons", options: ["prenons", "prends", "prenez", "prennent"] },
            { type: "translate", en: "She is making a decision.", answer: "Elle prend une décision.", accept: ["elle prend une decision"] },
            { type: "translate", en: "Do you take the metro?", answer: "Tu prends le métro?", accept: ["tu prends le metro", "vous prenez le metro", "vous prenez le métro", "est-ce que tu prends le métro"] },
            { type: "history", fr: "Napoléon a pris le pouvoir en 1799.", answer: "Napoleon took power in 1799.", options: ["Napoleon took power in 1799.", "Napoleon lost power in 1799.", "Napoleon took a vacation in 1799.", "Napoleon took an army in 1799."] }
        ]
    },

    // ===== LESSON 13: Devoir =====
    {
        id: 13,
        title: "Devoir — Must / To Have To",
        desc: "Express obligation, duty, and what you owe — essential for legal French.",
        frenchFocus: {
            verb: "devoir",
            conjugation: {
                "je": "dois",
                "tu": "dois",
                "il/elle": "doit",
                "nous": "devons",
                "vous": "devez",
                "ils/elles": "doivent"
            },
            pattern: "Subject + devoir + infinitive (obligation) / noun (debt)",
            examples: [
                { fr: "Je dois étudier ce soir.", en: "I must study tonight." },
                { fr: "Tu dois respecter la loi.", en: "You must respect the law." },
                { fr: "Elle doit partir à huit heures.", en: "She has to leave at eight." },
                { fr: "Nous devons trouver une solution.", en: "We must find a solution." },
                { fr: "Vous devez signer le contrat.", en: "You must sign the contract." },
                { fr: "Ils doivent payer l'amende.", en: "They must pay the fine." }
            ],
            tips: "Devoir + infinitive = must/have to. Devoir + noun = to owe. 'Je dois 50 euros' = 'I owe 50 euros.' In legal contexts it means 'duty' — 'le devoir' as a noun means 'duty' or 'homework.'",
            homonyms: [{ word: "devoir", meaning: "homework / duty (noun)", example: "Fais tes devoirs ! (Do your homework!)" }],
            synonyms: [{ word: "falloir", meaning: "to be necessary" }, { word: "être obligé de", meaning: "to be obligated to" }]
        },
        history: {
            period: "The Magna Carta (1215)",
            fr: "En 1215, les barons anglais ont forcé le roi Jean à signer la Magna Carta. Ce document disait que le roi devait respecter certaines lois. Il devait protéger les droits des citoyens. Ce document est devenu la base de la démocratie moderne.",
            en: "In 1215, the English barons forced King John to sign the Magna Carta. This document said that the king had to respect certain laws. He had to protect citizens' rights. This document became the foundation of modern democracy.",
            vocab: [
                { word: "les barons", meaning: "the barons" },
                { word: "forcer", meaning: "to force" },
                { word: "les droits", meaning: "rights" },
                { word: "les citoyens", meaning: "citizens" },
                { word: "la démocratie", meaning: "democracy" }
            ],
            funFact: "Only four original copies of the 1215 Magna Carta survive today — two are held by the British Library."
        },
        vocabulary: [
            {
                word: "devoir", partOfSpeech: "verb", meaning: "to must / to owe",
                example: { fr: "Je dois étudier.", en: "I must study." },
                homonyms: [{ word: "devoir", meaning: "homework / duty (noun)", example: "Fais tes devoirs ! (Do your homework!)" }],
                synonyms: [{ word: "falloir", meaning: "to be necessary" }, { word: "être obligé de", meaning: "to be obligated to" }]
            },
            {
                word: "loi", partOfSpeech: "noun (f)", meaning: "law",
                example: { fr: "Tu dois respecter la loi.", en: "You must respect the law." },
                homonyms: [],
                synonyms: [{ word: "règle", meaning: "rule" }, { word: "droit", meaning: "right/law" }]
            },
            {
                word: "contrat", partOfSpeech: "noun (m)", meaning: "contract",
                example: { fr: "Vous devez signer le contrat.", en: "You must sign the contract." },
                homonyms: [],
                synonyms: [{ word: "accord", meaning: "agreement" }, { word: "pacte", meaning: "pact" }]
            },
            {
                word: "droits", partOfSpeech: "noun (m pl)", meaning: "rights",
                example: { fr: "Les droits des citoyens.", en: "Citizens' rights." },
                homonyms: [{ word: "droit", meaning: "straight / right (direction)", example: "Allez tout droit. (Go straight ahead.)" }],
                synonyms: [{ word: "libertés", meaning: "freedoms" }, { word: "privilèges", meaning: "privileges" }]
            },
            {
                word: "amende", partOfSpeech: "noun (f)", meaning: "fine (penalty)",
                example: { fr: "Ils doivent payer l'amende.", en: "They must pay the fine." },
                homonyms: [{ word: "amande", meaning: "almond", example: "Un gâteau aux amandes. (An almond cake.)" }],
                synonyms: [{ word: "pénalité", meaning: "penalty" }, { word: "contravention", meaning: "ticket/fine" }]
            }
        ],
        artHistory: {
            period: "L'Art Gothique Français (1140–1500)",
            periodEn: "French Gothic Art (1140–1500)",
            context: "L'art gothique est né en France au XIIe siècle. Les cathédrales majestueuses comme Notre-Dame de Paris présentent des vitraux colorés, des sculptures détaillées et des arcs brisés qui s'élèvent vers le ciel.",
            contextEn: "Gothic art was born in France in the 12th century. Majestic cathedrals like Notre-Dame de Paris feature colorful stained glass windows, detailed sculptures, and pointed arches that rise toward the sky.",
            artworks: [
                {
                    title: "Les Vitraux de la Sainte-Chapelle",
                    titleEn: "Stained Glass of Sainte-Chapelle",
                    artist: "Artisans médiévaux",
                    year: 1248,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sainte_Chapelle_-_Upper_Chapel.jpg/600px-Sainte_Chapelle_-_Upper_Chapel.jpg",
                    descFr: "La Sainte-Chapelle à Paris possède les plus beaux vitraux médiévaux du monde. Plus de 1 100 scènes bibliques racontent des histoires en lumière et en couleur.",
                    descEn: "The Sainte-Chapelle in Paris has the most beautiful medieval stained glass in the world. Over 1,100 biblical scenes tell stories in light and color."
                },
                {
                    title: "Les Très Riches Heures du Duc de Berry",
                    titleEn: "The Very Rich Hours of the Duke of Berry",
                    artist: "Les Frères Limbourg",
                    year: 1416,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_Janvier.jpg/400px-Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_Janvier.jpg",
                    descFr: "Ce manuscrit enluminé est un chef-d'œuvre de l'art médiéval français. Chaque page illustre un mois de l'année avec des scènes de la vie quotidienne et des châteaux.",
                    descEn: "This illuminated manuscript is a masterpiece of French medieval art. Each page illustrates a month of the year with scenes of daily life and castles."
                }
            ],
            vocab: [
                { word: "un vitrail (des vitraux)", meaning: "a stained glass window" },
                { word: "une cathédrale", meaning: "a cathedral" },
                { word: "un arc", meaning: "an arch" },
                { word: "médiéval(e)", meaning: "medieval" },
                { word: "un manuscrit", meaning: "a manuscript" },
                { word: "enluminé(e)", meaning: "illuminated" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Je ___ finir ce travail avant vendredi.", answer: "dois", options: ["dois", "doit", "devons", "doivent"] },
            { type: "fill", prompt: "Vous ___ signer ici.", answer: "devez", options: ["dois", "doit", "devez", "doivent"] },
            { type: "fill", prompt: "Ils ___ respecter les règles.", answer: "doivent", options: ["doit", "devons", "devez", "doivent"] },
            { type: "translate", en: "We must find a solution.", answer: "Nous devons trouver une solution.", accept: ["nous devons trouver une solution"] },
            { type: "translate", en: "She has to leave.", answer: "Elle doit partir.", accept: ["elle doit partir"] },
            { type: "history", fr: "Le roi devait respecter certaines lois.", answer: "The king had to respect certain laws.", options: ["The king had to respect certain laws.", "The king had to write new laws.", "The king had to ignore the laws.", "The king had to change the laws."] }
        ]
    },

    // ===== LESSON 14: Dire & Parler =====
    {
        id: 14,
        title: "Dire & Parler — To Say & To Speak",
        desc: "Two verbs of communication — what you say and how you speak.",
        frenchFocus: {
            verb: "dire / parler",
            conjugation: {
                "je": "dis / parle",
                "tu": "dis / parles",
                "il/elle": "dit / parle",
                "nous": "disons / parlons",
                "vous": "dites / parlez",
                "ils/elles": "disent / parlent"
            },
            pattern: "dire + que/à (specific words) | parler + de/à (general speech)",
            examples: [
                { fr: "Je dis la vérité.", en: "I tell the truth." },
                { fr: "Qu'est-ce que tu dis?", en: "What are you saying?" },
                { fr: "Elle parle trois langues.", en: "She speaks three languages." },
                { fr: "Nous disons au revoir.", en: "We say goodbye." },
                { fr: "Vous parlez très bien français.", en: "You speak French very well." },
                { fr: "Ils disent que c'est important.", en: "They say it's important." }
            ],
            tips: "Use 'dire' for specific words or messages (dire la vérité, dire que...). Use 'parler' for the act of speaking (parler français, parler à quelqu'un). Note: 'vous dites' is irregular — not 'vous disez!'",
            homonyms: [],
            synonyms: [{ word: "raconter", meaning: "to tell (a story)" }, { word: "affirmer", meaning: "to state" }, { word: "discuter", meaning: "to discuss" }]
        },
        history: {
            period: "Martin Luther King Jr. (1963)",
            fr: "En 1963, Martin Luther King Jr. a parlé devant des milliers de personnes à Washington. Il a dit les mots célèbres de son discours. Il parlait de justice et d'égalité pour tous. Son discours a changé l'histoire des droits civiques aux États-Unis.",
            en: "In 1963, Martin Luther King Jr. spoke in front of thousands of people in Washington. He said the famous words of his speech. He spoke about justice and equality for all. His speech changed the history of civil rights in the United States.",
            vocab: [
                { word: "un discours", meaning: "a speech" },
                { word: "des milliers", meaning: "thousands" },
                { word: "la justice", meaning: "justice" },
                { word: "l'égalité", meaning: "equality" },
                { word: "les droits civiques", meaning: "civil rights" }
            ],
            funFact: "The March on Washington in 1963 drew over 250,000 people — one of the largest political rallies in American history."
        },
        vocabulary: [
            {
                word: "dire", partOfSpeech: "verb", meaning: "to say / to tell",
                example: { fr: "Je dis la vérité.", en: "I tell the truth." },
                homonyms: [],
                synonyms: [{ word: "raconter", meaning: "to tell (a story)" }, { word: "affirmer", meaning: "to affirm" }, { word: "déclarer", meaning: "to declare" }]
            },
            {
                word: "parler", partOfSpeech: "verb", meaning: "to speak / to talk",
                example: { fr: "Elle parle trois langues.", en: "She speaks three languages." },
                homonyms: [],
                synonyms: [{ word: "discuter", meaning: "to discuss" }, { word: "causer", meaning: "to chat" }, { word: "bavarder", meaning: "to chatter" }]
            },
            {
                word: "vérité", partOfSpeech: "noun (f)", meaning: "truth",
                example: { fr: "Je dis la vérité.", en: "I tell the truth." },
                homonyms: [],
                synonyms: [{ word: "réalité", meaning: "reality" }, { word: "fait", meaning: "fact" }]
            },
            {
                word: "discours", partOfSpeech: "noun (m)", meaning: "speech",
                example: { fr: "Il a fait un discours.", en: "He gave a speech." },
                homonyms: [],
                synonyms: [{ word: "allocution", meaning: "address" }, { word: "conférence", meaning: "lecture" }]
            },
            {
                word: "langue", partOfSpeech: "noun (f)", meaning: "language / tongue",
                example: { fr: "Elle parle trois langues.", en: "She speaks three languages." },
                homonyms: [{ word: "langue", meaning: "tongue (body part)", example: "Tire la langue. (Stick out your tongue.)" }],
                synonyms: [{ word: "idiome", meaning: "idiom/language" }, { word: "dialecte", meaning: "dialect" }]
            }
        ],
        artHistory: {
            period: "L'Art Moderne et Contemporain (1945–aujourd'hui)",
            periodEn: "Modern and Contemporary Art (1945–present)",
            context: "Après la Seconde Guerre mondiale, Paris reste un centre artistique majeur. De nouveaux mouvements comme le Nouveau Réalisme et l'art conceptuel émergent. Des artistes comme Yves Klein et Louise Bourgeois redéfinissent l'art.",
            contextEn: "After World War II, Paris remains a major artistic center. New movements like New Realism and conceptual art emerge. Artists like Yves Klein and Louise Bourgeois redefine art.",
            artworks: [
                {
                    title: "IKB 79 (Bleu International Klein)",
                    titleEn: "IKB 79 (International Klein Blue)",
                    artist: "Yves Klein",
                    year: 1959,
                    image: "https://upload.wikimedia.org/wikipedia/en/3/38/IKB_191.jpg",
                    descFr: "Yves Klein a inventé sa propre couleur bleue, l'International Klein Blue. Ses monochromes bleus explorent l'infini et l'immatériel à travers une seule couleur pure.",
                    descEn: "Yves Klein invented his own shade of blue, International Klein Blue. His blue monochromes explore infinity and the immaterial through a single pure color."
                },
                {
                    title: "Maman",
                    titleEn: "Maman (Mother)",
                    artist: "Louise Bourgeois",
                    year: 1999,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Maman_at_Mus%C3%A9e_des_beaux-arts_du_Canada.jpg/600px-Maman_at_Mus%C3%A9e_des_beaux-arts_du_Canada.jpg",
                    descFr: "Cette sculpture géante d'araignée de 9 mètres représente la mère de l'artiste. Bourgeois, née à Paris, explore les thèmes de la famille, la protection et la vulnérabilité.",
                    descEn: "This giant 9-meter spider sculpture represents the artist's mother. Bourgeois, born in Paris, explores themes of family, protection, and vulnerability."
                }
            ],
            vocab: [
                { word: "une sculpture", meaning: "a sculpture" },
                { word: "contemporain(e)", meaning: "contemporary" },
                { word: "l'infini", meaning: "infinity" },
                { word: "une araignée", meaning: "a spider" },
                { word: "la vulnérabilité", meaning: "vulnerability" },
                { word: "redéfinir", meaning: "to redefine" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Je ___ toujours la vérité.", answer: "dis", options: ["dis", "dit", "parle", "disons"] },
            { type: "fill", prompt: "Elle ___ français et anglais.", answer: "parle", options: ["dit", "parle", "dis", "parlent"] },
            { type: "fill", prompt: "Vous ___ que c'est facile?", answer: "dites", options: ["disez", "dites", "disons", "parlons"] },
            { type: "translate", en: "We say goodbye.", answer: "Nous disons au revoir.", accept: ["nous disons au revoir"] },
            { type: "translate", en: "You speak French very well.", answer: "Vous parlez très bien français.", accept: ["vous parlez tres bien francais", "tu parles très bien français", "tu parles tres bien francais"] },
            { type: "history", fr: "Martin Luther King a parlé de justice et d'égalité.", answer: "MLK spoke about justice and equality.", options: ["MLK spoke about justice and equality.", "MLK spoke about war and peace.", "MLK spoke about science and art.", "MLK spoke about religion and faith."] }
        ]
    },

    // ===== LESSON 15: Venir & Revenir =====
    {
        id: 15,
        title: "Venir — To Come",
        desc: "Coming, returning, and talking about what just happened.",
        frenchFocus: {
            verb: "venir",
            conjugation: {
                "je": "viens",
                "tu": "viens",
                "il/elle": "vient",
                "nous": "venons",
                "vous": "venez",
                "ils/elles": "viennent"
            },
            pattern: "venir + de + place (origin) | venir de + infinitive (just did)",
            examples: [
                { fr: "Je viens de France.", en: "I come from France." },
                { fr: "Tu viens avec nous?", en: "Are you coming with us?" },
                { fr: "Elle vient de terminer.", en: "She just finished." },
                { fr: "Nous venons d'arriver.", en: "We just arrived." },
                { fr: "Vous venez de quelle ville?", en: "What city do you come from?" },
                { fr: "Ils viennent demain.", en: "They are coming tomorrow." }
            ],
            tips: "Venir de + infinitive = 'to have just done something.' 'Je viens de manger' = 'I just ate.' This is called the passé récent — a very useful construction! Family: revenir (come back), devenir (become).",
            homonyms: [],
            synonyms: [{ word: "arriver", meaning: "to arrive" }, { word: "se présenter", meaning: "to show up" }, { word: "approcher", meaning: "to approach" }]
        },
        history: {
            period: "Immigration to America (1892–1954)",
            fr: "Des millions de personnes sont venues en Amérique par Ellis Island. Ils venaient d'Europe — d'Italie, d'Irlande, de Pologne et d'ailleurs. Ils venaient de quitter leur pays pour chercher une vie meilleure. Ellis Island est devenu un symbole d'espoir.",
            en: "Millions of people came to America through Ellis Island. They came from Europe — Italy, Ireland, Poland, and elsewhere. They had just left their country to seek a better life. Ellis Island became a symbol of hope.",
            vocab: [
                { word: "des millions", meaning: "millions" },
                { word: "chercher", meaning: "to seek" },
                { word: "une vie meilleure", meaning: "a better life" },
                { word: "l'espoir", meaning: "hope" },
                { word: "quitter", meaning: "to leave" }
            ],
            funFact: "Over 12 million immigrants were processed at Ellis Island between 1892 and 1954."
        },
        vocabulary: [
            {
                word: "venir", partOfSpeech: "verb", meaning: "to come",
                example: { fr: "Je viens de France.", en: "I come from France." },
                homonyms: [],
                synonyms: [{ word: "arriver", meaning: "to arrive" }, { word: "se présenter", meaning: "to show up" }]
            },
            {
                word: "espoir", partOfSpeech: "noun (m)", meaning: "hope",
                example: { fr: "Ellis Island est un symbole d'espoir.", en: "Ellis Island is a symbol of hope." },
                homonyms: [],
                synonyms: [{ word: "espérance", meaning: "hope/expectation" }, { word: "optimisme", meaning: "optimism" }]
            },
            {
                word: "vie", partOfSpeech: "noun (f)", meaning: "life",
                example: { fr: "Chercher une vie meilleure.", en: "To seek a better life." },
                homonyms: [{ word: "vis", meaning: "screw (noun) / live (verb)", example: "Je vis à Paris. (I live in Paris.)" }],
                synonyms: [{ word: "existence", meaning: "existence" }]
            },
            {
                word: "quitter", partOfSpeech: "verb", meaning: "to leave (a place/person)",
                example: { fr: "Ils venaient de quitter leur pays.", en: "They had just left their country." },
                homonyms: [],
                synonyms: [{ word: "partir de", meaning: "to depart from" }, { word: "abandonner", meaning: "to abandon" }]
            },
            {
                word: "chercher", partOfSpeech: "verb", meaning: "to seek / to look for",
                example: { fr: "Ils cherchent une vie meilleure.", en: "They are looking for a better life." },
                homonyms: [],
                synonyms: [{ word: "rechercher", meaning: "to search for" }, { word: "explorer", meaning: "to explore" }]
            }
        ],
        artHistory: {
            period: "L'Art Déco (1920–1940)",
            periodEn: "Art Deco (1920–1940)",
            context: "L'Art Déco est né à Paris lors de l'Exposition internationale des Arts décoratifs de 1925. Ce style géométrique et luxueux influence l'architecture, la mode, le design et les affiches. Il symbolise la modernité et l'élégance.",
            contextEn: "Art Deco was born in Paris at the 1925 International Exhibition of Decorative Arts. This geometric and luxurious style influences architecture, fashion, design, and posters. It symbolizes modernity and elegance.",
            artworks: [
                {
                    title: "Le Grand Salon du Paquebot Normandie",
                    titleEn: "The Grand Salon of the SS Normandie",
                    artist: "Jean Dunand & Jean Dupas",
                    year: 1935,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/SS_Normandie_color.jpg/800px-SS_Normandie_color.jpg",
                    descFr: "Le paquebot Normandie était un chef-d'œuvre flottant de l'Art Déco français. Son grand salon était décoré de panneaux laqués, de dorures et de motifs géométriques luxueux.",
                    descEn: "The SS Normandie was a floating masterpiece of French Art Deco. Its grand salon was decorated with lacquered panels, gilding, and luxurious geometric patterns."
                },
                {
                    title: "La Tour Eiffel illuminée (style Art Déco Citroën)",
                    titleEn: "The Eiffel Tower illuminated (Citroën Art Deco style)",
                    artist: "Fernand Jacopozzi",
                    year: 1925,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_eiffel_at_night.jpg/400px-Tour_eiffel_at_night.jpg",
                    descFr: "Pendant l'exposition de 1925, la Tour Eiffel a été illuminée avec le nom Citroën en lettres lumineuses Art Déco. C'était la plus grande publicité du monde à l'époque.",
                    descEn: "During the 1925 exhibition, the Eiffel Tower was illuminated with the Citroën name in Art Deco light letters. It was the world's largest advertisement at the time."
                }
            ],
            vocab: [
                { word: "géométrique", meaning: "geometric" },
                { word: "luxueux/luxueuse", meaning: "luxurious" },
                { word: "la mode", meaning: "fashion" },
                { word: "une exposition", meaning: "an exhibition" },
                { word: "doré(e)", meaning: "golden/gilded" },
                { word: "la modernité", meaning: "modernity" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Je ___ de Paris.", answer: "viens", options: ["viens", "vient", "venons", "viennent"] },
            { type: "fill", prompt: "Nous ___ d'arriver à la maison.", answer: "venons", options: ["viens", "venons", "venez", "viennent"] },
            { type: "fill", prompt: "Ils ___ demain matin.", answer: "viennent", options: ["vient", "venons", "venez", "viennent"] },
            { type: "translate", en: "She just finished.", answer: "Elle vient de terminer.", accept: ["elle vient de terminer", "elle vient de finir"] },
            { type: "translate", en: "Are you coming with us?", answer: "Tu viens avec nous?", accept: ["tu viens avec nous", "vous venez avec nous", "est-ce que tu viens avec nous"] },
            { type: "history", fr: "Les immigrants venaient d'Europe pour chercher une vie meilleure.", answer: "Immigrants came from Europe to seek a better life.", options: ["Immigrants came from Europe to seek a better life.", "Immigrants came from Europe to start a war.", "Immigrants came from Europe to visit briefly.", "Immigrants came from Europe to study art."] }
        ]
    }
];