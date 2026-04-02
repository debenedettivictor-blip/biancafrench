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
            tips: "In French, you don't use 'a/an' before professions: 'Je suis avocate' (not 'Je suis une avocate'). Adjectives agree in gender — add -e for feminine."
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
            funFact: "The Bastille only held 7 prisoners on the day it was stormed — but it was what it represented that mattered."
        },
        exercises: [
            { type: "fill", prompt: "Je ___ avocate.", answer: "suis", options: ["suis", "es", "est", "sommes"] },
            { type: "fill", prompt: "Nous ___ prêts pour l'examen.", answer: "sommes", options: ["êtes", "suis", "sommes", "sont"] },
            { type: "fill", prompt: "Elles ___ françaises.", answer: "sont", options: ["est", "sommes", "sont", "êtes"] },
            { type: "translate", en: "You are intelligent.", answer: "Tu es intelligente.", accept: ["tu es intelligent", "tu es intelligente", "vous êtes intelligent", "vous êtes intelligente"] },
            { type: "translate", en: "She is a lawyer.", answer: "Elle est avocate.", accept: ["elle est avocate"] },
            { type: "history", fr: "La Bastille était une prison royale.", answer: "The Bastille was a royal prison.", options: ["The Bastille was a royal prison.", "The Bastille was a royal palace.", "The Bastille was a royal church.", "The Bastille was a royal garden."] }
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
            tips: "French uses 'avoir' (to have) for age, hunger, thirst, fear, and being right/wrong. Think of it as 'possessing' a state: 'J'ai faim' = 'I have hunger.'"
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
            funFact: "The Great Pyramid of Giza was the tallest man-made structure in the world for over 3,800 years."
        },
        exercises: [
            { type: "fill", prompt: "J'___ une question importante.", answer: "ai", options: ["ai", "as", "a", "avons"] },
            { type: "fill", prompt: "Elle ___ vingt-cinq ans.", answer: "a", options: ["est", "a", "ai", "as"] },
            { type: "fill", prompt: "Nous ___ besoin de temps.", answer: "avons", options: ["avons", "avez", "ont", "ai"] },
            { type: "translate", en: "I am hungry.", answer: "J'ai faim.", accept: ["j'ai faim"] },
            { type: "translate", en: "You are right.", answer: "Tu as raison.", accept: ["tu as raison", "vous avez raison"] },
            { type: "history", fr: "Les Égyptiens avaient des connaissances avancées.", answer: "The Egyptians had advanced knowledge.", options: ["The Egyptians had advanced knowledge.", "The Egyptians had ancient temples.", "The Egyptians had golden treasures.", "The Egyptians had powerful armies."] }
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
            tips: "Use 'aller + infinitive' for near future: 'Je vais étudier' = 'I'm going to study.' Use 'au' (à + le) for masculine places, 'à la' for feminine, 'en' for countries."
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
            funFact: "Leonardo da Vinci wrote all his notes backwards in mirror script — you need a mirror to read them!"
        },
        exercises: [
            { type: "fill", prompt: "Je ___ au restaurant ce soir.", answer: "vais", options: ["vais", "vas", "va", "allons"] },
            { type: "fill", prompt: "Nous ___ étudier le français.", answer: "allons", options: ["allons", "allez", "vont", "vais"] },
            { type: "fill", prompt: "Comment ___-vous ?", answer: "allez", options: ["allez", "allons", "vont", "vas"] },
            { type: "translate", en: "She is going to France.", answer: "Elle va en France.", accept: ["elle va en france"] },
            { type: "translate", en: "We are going to eat.", answer: "Nous allons manger.", accept: ["nous allons manger", "on va manger"] },
            { type: "history", fr: "Les artistes allaient à Florence pour étudier l'art.", answer: "Artists went to Florence to study art.", options: ["Artists went to Florence to study art.", "Artists went to Rome to study law.", "Artists went to Florence to sell paintings.", "Artists went to Paris to study music."] }
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
            tips: "'Faire' is used for weather (il fait chaud/froid/beau), activities (faire du sport, faire la cuisine), and many set expressions. It's one of the most versatile French verbs!"
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
            funFact: "During WWI, the French built a fake Paris near the city to confuse German bombers flying at night."
        },
        exercises: [
            { type: "fill", prompt: "Je ___ du yoga chaque matin.", answer: "fais", options: ["fais", "fait", "faisons", "font"] },
            { type: "fill", prompt: "Il ___ très chaud en été.", answer: "fait", options: ["fais", "fait", "faites", "font"] },
            { type: "fill", prompt: "Qu'est-ce que vous ___ ?", answer: "faites", options: ["faites", "faisons", "fais", "font"] },
            { type: "translate", en: "The weather is nice today.", answer: "Il fait beau aujourd'hui.", accept: ["il fait beau aujourd'hui", "il fait beau"] },
            { type: "translate", en: "We are cooking.", answer: "Nous faisons la cuisine.", accept: ["nous faisons la cuisine", "on fait la cuisine"] },
            { type: "history", fr: "Les femmes faisaient le travail dans les usines.", answer: "Women did the work in the factories.", options: ["Women did the work in the factories.", "Women did the cooking in the kitchens.", "Women did the farming in the fields.", "Women did the nursing in the hospitals."] }
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
            tips: "'Je voudrais' (I would like) is the polite form of 'je veux' (I want). Always use 'voudrais' in shops and restaurants! These verbs are always followed by an infinitive."
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
            funFact: "Napoleon was not actually short — at 5'7\" he was average height for his time. The myth came from British propaganda!"
        },
        exercises: [
            { type: "fill", prompt: "Je ___ vous aider.", answer: "peux", options: ["peux", "veux", "peut", "paux"] },
            { type: "fill", prompt: "Elle ___ un verre d'eau.", answer: "veut", options: ["veut", "peut", "veux", "voulez"] },
            { type: "fill", prompt: "Nous ne ___ pas venir demain.", answer: "pouvons", options: ["pouvons", "voulons", "pouvez", "peuvent"] },
            { type: "translate", en: "I would like a coffee.", answer: "Je voudrais un café.", accept: ["je voudrais un café", "je voudrais un cafe"] },
            { type: "translate", en: "Can you repeat?", answer: "Pouvez-vous répéter ?", accept: ["pouvez-vous répéter", "pouvez-vous repeter", "tu peux répéter", "tu peux repeter"] },
            { type: "history", fr: "Napoléon voulait conquérir toute l'Europe.", answer: "Napoleon wanted to conquer all of Europe.", options: ["Napoleon wanted to conquer all of Europe.", "Napoleon wanted to explore all of Africa.", "Napoleon wanted to unite all of Europe.", "Napoleon wanted to defend all of France."] }
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
            tips: "In spoken French, people often drop the 'ne': 'Je comprends pas' instead of 'Je ne comprends pas.' But always write the 'ne' in formal contexts!"
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
            funFact: "In ancient Athens, citizens could vote to banish someone for 10 years — it was called 'ostracism,' and names were written on pottery shards."
        },
        exercises: [
            { type: "fill", prompt: "Je ne ___ pas français.", answer: "parle", options: ["parle", "parles", "parlons", "parlent"] },
            { type: "fill", prompt: "Elle ne mange ___ de viande.", answer: "jamais", options: ["jamais", "pas", "rien", "plus"] },
            { type: "fill", prompt: "Il n'y a ___ dans le frigo.", answer: "rien", options: ["rien", "pas", "jamais", "personne"] },
            { type: "translate", en: "I don't understand.", answer: "Je ne comprends pas.", accept: ["je ne comprends pas", "je comprends pas"] },
            { type: "translate", en: "We no longer work there.", answer: "Nous ne travaillons plus là.", accept: ["nous ne travaillons plus là", "nous ne travaillons plus la", "on ne travaille plus là", "on ne travaille plus la"] },
            { type: "history", fr: "La démocratie n'existait nulle part ailleurs.", answer: "Democracy didn't exist anywhere else.", options: ["Democracy didn't exist anywhere else.", "Democracy didn't exist in Athens.", "Democracy didn't exist before Greece.", "Democracy didn't exist without Socrates."] }
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
            tips: "Most verbs use 'avoir.' Movement verbs use 'être' (aller, venir, partir, arriver, naître, mourir...). With 'être,' the past participle agrees with the subject: 'elle est allée' (extra -e for feminine)."
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
            funFact: "The computers used for the Apollo 11 mission had less processing power than a modern smartphone!"
        },
        exercises: [
            { type: "fill", prompt: "J'ai ___ un bon livre hier.", answer: "lu", options: ["lu", "lire", "lis", "lit"] },
            { type: "fill", prompt: "Elle est ___ au cinéma.", answer: "allée", options: ["allée", "allé", "aller", "allés"] },
            { type: "fill", prompt: "Nous avons ___ le film.", answer: "regardé", options: ["regardé", "regarder", "regarde", "regardés"] },
            { type: "translate", en: "I studied all day.", answer: "J'ai étudié toute la journée.", accept: ["j'ai étudié toute la journée", "j'ai etudié toute la journee", "j'ai étudié toute la journee", "j'ai etudie toute la journee"] },
            { type: "translate", en: "She understood the lesson.", answer: "Elle a compris la leçon.", accept: ["elle a compris la leçon", "elle a compris la lecon"] },
            { type: "history", fr: "Neil Armstrong a marché sur la Lune.", answer: "Neil Armstrong walked on the Moon.", options: ["Neil Armstrong walked on the Moon.", "Neil Armstrong flew to Mars.", "Neil Armstrong discovered the Moon.", "Neil Armstrong photographed the Moon."] }
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
            tips: "Three ways to ask questions: 1) Add '?' to a statement (Tu parles français ?), 2) Add 'Est-ce que' (Est-ce que tu parles français ?), 3) Invert subject-verb (Parles-tu français ?). Method 1 is casual, 3 is formal."
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
            funFact: "Voltaire reportedly drank 40 cups of coffee a day while writing. He lived to 83, which was remarkable for the 1700s!"
        },
        exercises: [
            { type: "fill", prompt: "___ est-ce que tu habites ?", answer: "Où", options: ["Où", "Qui", "Quand", "Comment"] },
            { type: "fill", prompt: "___ est cette femme ?", answer: "Qui", options: ["Qui", "Que", "Où", "Quand"] },
            { type: "fill", prompt: "___ est-ce que le magasin ferme ?", answer: "Quand", options: ["Quand", "Comment", "Pourquoi", "Combien"] },
            { type: "translate", en: "Where do you live?", answer: "Où est-ce que tu habites ?", accept: ["où est-ce que tu habites", "ou est-ce que tu habites", "où habites-tu", "tu habites où", "ou habites-tu"] },
            { type: "translate", en: "How much does it cost?", answer: "Combien ça coûte ?", accept: ["combien ça coûte", "combien ca coute", "combien ça coute", "combien est-ce que ça coûte", "combien est-ce que ca coute"] },
            { type: "history", fr: "Les philosophes se sont posé des questions fondamentales.", answer: "The philosophers asked fundamental questions.", options: ["The philosophers asked fundamental questions.", "The philosophers wrote fundamental books.", "The philosophers taught fundamental lessons.", "The philosophers discovered fundamental truths."] }
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
            tips: "'S'il vous plaît' (formal) and 's'il te plaît' (informal) both mean 'please.' Always add it — French people really appreciate politeness! 'Pourriez-vous...' is the polite way to ask for something."
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
            funFact: "Notre-Dame de Paris took 182 years to build (1163-1345) and survived the French Revolution, two World Wars, and a devastating fire in 2019."
        },
        exercises: [
            { type: "fill", prompt: "Excusez-moi, ___ se trouve la gare ?", answer: "où", options: ["où", "qui", "que", "comment"] },
            { type: "fill", prompt: "Je voudrais ___ une table pour deux.", answer: "réserver", options: ["réserver", "manger", "trouver", "acheter"] },
            { type: "fill", prompt: "L'addition, ___ vous plaît.", answer: "s'il", options: ["s'il", "si", "comme", "merci"] },
            { type: "translate", en: "The check, please.", answer: "L'addition, s'il vous plaît.", accept: ["l'addition, s'il vous plaît", "l'addition s'il vous plaît", "l'addition, s'il vous plait", "l'addition s'il vous plait"] },
            { type: "translate", en: "Could you speak more slowly?", answer: "Pourriez-vous parler plus lentement ?", accept: ["pourriez-vous parler plus lentement", "pouvez-vous parler plus lentement", "tu peux parler plus lentement"] },
            { type: "history", fr: "Les cathédrales gothiques ont été construites au Moyen Âge.", answer: "Gothic cathedrals were built in the Middle Ages.", options: ["Gothic cathedrals were built in the Middle Ages.", "Gothic cathedrals were built in the Renaissance.", "Gothic cathedrals were destroyed in the Middle Ages.", "Gothic cathedrals were discovered in the Middle Ages."] }
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
            tips: "To sound more natural, vary your expressions: don't always use 'je pense.' Try 'il me semble,' 'je trouve,' 'à mon avis.' Use 'd'un autre côté' (on the other hand) to show nuance — the French love nuance!"
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
            funFact: "France sent so much money to help the American Revolution that it contributed to France's own financial crisis — which helped spark the French Revolution just 13 years later!"
        },
        exercises: [
            { type: "fill", prompt: "Je ___ que c'est une bonne idée.", answer: "pense", options: ["pense", "suis", "trouve", "vais"] },
            { type: "fill", prompt: "Je ne suis pas ___ avec toi.", answer: "d'accord", options: ["d'accord", "content", "sûr", "certain"] },
            { type: "fill", prompt: "À mon ___, ce restaurant est le meilleur.", answer: "avis", options: ["avis", "idée", "opinion", "pensée"] },
            { type: "translate", en: "I think it's a good idea.", answer: "Je pense que c'est une bonne idée.", accept: ["je pense que c'est une bonne idée", "je pense que c'est une bonne idee"] },
            { type: "translate", en: "I disagree with you.", answer: "Je ne suis pas d'accord avec toi.", accept: ["je ne suis pas d'accord avec toi", "je ne suis pas d'accord avec vous"] },
            { type: "history", fr: "La France était d'accord et a aidé les Américains.", answer: "France agreed and helped the Americans.", options: ["France agreed and helped the Americans.", "France disagreed and fought the Americans.", "France agreed but didn't help the Americans.", "France agreed and traded with the Americans."] }
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
            tips: "Use 'savoir' for facts, information, and skills (savoir + infinitive = 'to know how to'). Use 'connaître' for people, places, and things you're familiar with."
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
            tips: "Prendre is used for meals (prendre le déjeuner), transport (prendre le bus), and decisions (prendre une décision). Its family: apprendre (to learn), comprendre (to understand)."
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
            tips: "Devoir + infinitive = must/have to. Devoir + noun = to owe. 'Je dois 50 euros' = 'I owe 50 euros.' In legal contexts it means 'duty' — 'le devoir' as a noun means 'duty' or 'homework.'"
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
            tips: "Use 'dire' for specific words or messages (dire la vérité, dire que...). Use 'parler' for the act of speaking (parler français, parler à quelqu'un). Note: 'vous dites' is irregular — not 'vous disez!'"
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
            tips: "Venir de + infinitive = 'to have just done something.' 'Je viens de manger' = 'I just ate.' This is called the passé récent — a very useful construction! Family: revenir (come back), devenir (become)."
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
