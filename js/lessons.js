// ===== Bianca French — Lesson Content =====
// 10 progressive lessons: French grammar + World History

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
    }
];
