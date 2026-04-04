// ===== Victor Spanish — Lesson Content =====
// 15 progressive lessons: Spanish grammar + World History

const SPANISH_LESSONS = [
    // ===== LESSON 1: Ser =====
    {
        id: 1,
        title: "Ser \u2014 To Be (permanent)",
        desc: "The most essential Spanish verb for identity, origin, and characteristics.",
        spanishFocus: {
            verb: "ser",
            conjugation: {
                "yo": "soy",
                "t\u00fa": "eres",
                "el/ella": "es",
                "nosotros": "somos",
                "vosotros": "sois",
                "ellos/ellas": "son"
            },
            pattern: "Subject + ser + adjective / noun",
            examples: [
                { es: "Yo soy estudiante.", en: "I am a student." },
                { es: "T\u00fa eres muy inteligente.", en: "You are very intelligent." },
                { es: "Ella es espa\u00f1ola.", en: "She is Spanish." },
                { es: "Nosotros somos amigos.", en: "We are friends." },
                { es: "Vosotros sois fuertes.", en: "You all are strong." },
                { es: "Ellos son felices.", en: "They are happy." }
            ],
            tips: "Spanish has two verbs for 'to be': ser (permanent traits, identity, origin) and estar (temporary states, location). 'Soy alto' = I am tall (always). 'Estoy cansado' = I am tired (right now).",
            homonyms: [],
            synonyms: [{ word: "existir", meaning: "to exist" }, { word: "resultar", meaning: "to turn out to be" }],
            extraVerbs: [
                {
                    verb: "estar", meaning: "to be (temporary/location)",
                    conjugation: { "yo": "estoy", "t\u00fa": "est\u00e1s", "el/ella": "est\u00e1", "nosotros": "estamos", "vosotros": "est\u00e1is", "ellos/ellas": "est\u00e1n" },
                    examples: [{ es: "Yo estoy cansado.", en: "I am tired." }, { es: "Ella est\u00e1 en casa.", en: "She is at home." }],
                    homonyms: [],
                    synonyms: [{ word: "encontrarse", meaning: "to find oneself / to be located" }, { word: "hallarse", meaning: "to be situated" }]
                },
                {
                    verb: "parecer", meaning: "to seem / to appear",
                    conjugation: { "yo": "parezco", "t\u00fa": "pareces", "el/ella": "parece", "nosotros": "parecemos", "vosotros": "parec\u00e9is", "ellos/ellas": "parecen" },
                    examples: [{ es: "T\u00fa pareces cansado.", en: "You seem tired." }, { es: "Ellos parecen contentos.", en: "They seem happy." }],
                    homonyms: [],
                    synonyms: [{ word: "aparentar", meaning: "to look like" }, { word: "semejar", meaning: "to resemble" }]
                },
                {
                    verb: "quedar", meaning: "to stay / to remain",
                    conjugation: { "yo": "quedo", "t\u00fa": "quedas", "el/ella": "queda", "nosotros": "quedamos", "vosotros": "qued\u00e1is", "ellos/ellas": "quedan" },
                    examples: [{ es: "Me quedo en casa.", en: "I stay at home." }, { es: "Nos quedamos tranquilos.", en: "We stay calm." }],
                    homonyms: [],
                    synonyms: [{ word: "permanecer", meaning: "to remain" }, { word: "mantenerse", meaning: "to keep oneself" }]
                }
            ]
        },
        history: {
            period: "Spanish Conquest of the Americas (1492)",
            fr: "En 1492, Crist\u00f3bal Col\u00f3n lleg\u00f3 a las Am\u00e9ricas. Espa\u00f1a era una potencia mundial. Los conquistadores exploraron nuevos territorios. Este evento cambi\u00f3 la historia del mundo para siempre.",
            en: "In 1492, Christopher Columbus arrived in the Americas. Spain was a world power. The conquistadors explored new territories. This event changed the history of the world forever.",
            vocab: [
                { word: "el pueblo", meaning: "the people / the town" },
                { word: "una potencia", meaning: "a power (nation)" },
                { word: "los conquistadores", meaning: "the conquerors" },
                { word: "el territorio", meaning: "the territory" },
                { word: "un evento", meaning: "an event" }
            ],
            funFact: "Columbus thought he had reached Asia \u2014 that's why the Caribbean islands were called the 'West Indies.'",
            facts: [
                "Columbus made four voyages to the Americas between 1492 and 1504, but he never set foot on mainland North America.",
                "The Spanish Empire became the first truly global empire, spanning territories across Europe, the Americas, Africa, and Asia.",
                "The Columbian Exchange introduced tomatoes, potatoes, and chocolate to Europe, while bringing horses and wheat to the Americas.",
                "Queen Isabella of Castile funded Columbus's voyage after he was rejected by Portugal, England, and France.",
                "The Treaty of Tordesillas in 1494 divided the New World between Spain and Portugal \u2014 which is why Brazil speaks Portuguese.",
                "Spanish is now the second most spoken native language in the world, with over 475 million native speakers."
            ]
        },
        currentEvents: [
            { es: "Espa\u00f1a celebra nuevos avances en energ\u00eda solar con r\u00e9cords de producci\u00f3n.", en: "Spain celebrates new advances in solar energy with production records." },
            { es: "La inteligencia artificial transforma el mercado laboral en todo el mundo.", en: "Artificial intelligence is transforming the job market worldwide." },
            { es: "Los pa\u00edses latinoamericanos fortalecen sus lazos comerciales.", en: "Latin American countries strengthen their trade ties." },
            { es: "El Museo del Prado recibe millones de visitantes cada a\u00f1o.", en: "The Prado Museum receives millions of visitors each year." }
        ],
        vocabulary: [
            {
                word: "soy", partOfSpeech: "verb", meaning: "am (from ser)",
                example: { es: "Yo soy estudiante.", en: "I am a student." },
                homonyms: [{ word: "soy", meaning: "soy (the plant)", example: "La leche de soy. (Soy milk.)" }],
                synonyms: [{ word: "existo", meaning: "I exist" }]
            },
            {
                word: "amigo", partOfSpeech: "noun (m)", meaning: "friend",
                example: { es: "Nosotros somos amigos.", en: "We are friends." },
                homonyms: [],
                synonyms: [{ word: "compa\u00f1ero", meaning: "companion" }, { word: "colega", meaning: "colleague/buddy" }]
            },
            {
                word: "feliz", partOfSpeech: "adjective", meaning: "happy",
                example: { es: "Ellos son felices.", en: "They are happy." },
                homonyms: [],
                synonyms: [{ word: "contento", meaning: "glad" }, { word: "alegre", meaning: "cheerful" }, { word: "dichoso", meaning: "fortunate/happy" }]
            },
            {
                word: "fuerte", partOfSpeech: "adjective", meaning: "strong",
                example: { es: "T\u00fa eres fuerte.", en: "You are strong." },
                homonyms: [{ word: "fuerte", meaning: "fort (noun)", example: "El fuerte est\u00e1 en la colina. (The fort is on the hill.)" }],
                synonyms: [{ word: "poderoso", meaning: "powerful" }, { word: "robusto", meaning: "robust" }]
            },
            {
                word: "cansado", partOfSpeech: "adjective", meaning: "tired",
                example: { es: "Estoy cansado.", en: "I am tired." },
                homonyms: [],
                synonyms: [{ word: "agotado", meaning: "exhausted" }, { word: "fatigado", meaning: "fatigued" }]
            },
            {
                word: "casa", partOfSpeech: "noun (f)", meaning: "house/home",
                example: { es: "Ella est\u00e1 en casa.", en: "She is at home." },
                homonyms: [{ word: "casa", meaning: "marries (from casar)", example: "Ella se casa ma\u00f1ana. (She gets married tomorrow.)" }],
                synonyms: [{ word: "hogar", meaning: "home" }, { word: "vivienda", meaning: "dwelling" }]
            }
        ],
        artHistory: {
            period: "El Renacimiento Espa\u00f1ol (1500\u20131600)",
            periodEn: "The Spanish Renaissance (1500\u20131600)",
            context: "El Renacimiento espa\u00f1ol floreci\u00f3 durante el Siglo de Oro. Los artistas combinaron influencias italianas con el realismo espa\u00f1ol. El Greco fue una figura central, creando obras de intensidad emocional \u00fanica.",
            contextEn: "The Spanish Renaissance flourished during the Golden Age. Artists combined Italian influences with Spanish realism. El Greco was a central figure, creating works of unique emotional intensity.",
            artworks: [
                {
                    title: "El entierro del Conde de Orgaz",
                    titleEn: "The Burial of the Count of Orgaz",
                    artist: "El Greco",
                    year: 1586,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/El_Greco_-_The_Burial_of_the_Count_of_Orgaz.JPG/400px-El_Greco_-_The_Burial_of_the_Count_of_Orgaz.JPG",
                    descEs: "Esta obra maestra muestra el entierro milagroso de un noble espa\u00f1ol. La parte inferior muestra la escena terrenal y la superior la gloria celestial.",
                    descEn: "This masterpiece depicts the miraculous burial of a Spanish nobleman. The lower part shows the earthly scene and the upper part the celestial glory."
                },
                {
                    title: "Vista de Toledo",
                    titleEn: "View of Toledo",
                    artist: "El Greco",
                    year: 1600,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/El_Greco_View_of_Toledo.jpg/400px-El_Greco_View_of_Toledo.jpg",
                    descEs: "Uno de los primeros paisajes puros de la pintura espa\u00f1ola. El Greco pint\u00f3 Toledo con un cielo dram\u00e1tico y tormentoso.",
                    descEn: "One of the first pure landscapes in Spanish painting. El Greco painted Toledo with a dramatic, stormy sky."
                }
            ],
            vocab: [
                { word: "un cuadro", meaning: "a painting" },
                { word: "un pintor", meaning: "a painter" },
                { word: "una obra maestra", meaning: "a masterpiece" },
                { word: "el siglo", meaning: "the century" },
                { word: "el oro", meaning: "gold" },
                { word: "el cielo", meaning: "the sky / heaven" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Yo ___ estudiante.", answer: "soy", options: ["soy", "eres", "es", "somos"] },
            { type: "fill", prompt: "Nosotros ___ amigos.", answer: "somos", options: ["sois", "soy", "somos", "son"] },
            { type: "fill", prompt: "Ellas ___ espa\u00f1olas.", answer: "son", options: ["es", "somos", "son", "sois"] },
            { type: "translate", en: "You are intelligent.", answer: "T\u00fa eres inteligente.", accept: ["tu eres inteligente", "t\u00fa eres inteligente", "usted es inteligente"] },
            { type: "translate", en: "She is Spanish.", answer: "Ella es espa\u00f1ola.", accept: ["ella es espa\u00f1ola", "ella es espanola"] },
            { type: "history", fr: "Col\u00f3n lleg\u00f3 a las Am\u00e9ricas en 1492.", answer: "Columbus arrived in the Americas in 1492.", options: ["Columbus arrived in the Americas in 1492.", "Columbus arrived in Africa in 1492.", "Columbus arrived in Asia in 1492.", "Columbus arrived in the Americas in 1592."] },
            { type: "fill", prompt: "Yo ___ cansado hoy.", answer: "estoy", options: ["estoy", "est\u00e1s", "est\u00e1n", "estamos"] },
            { type: "fill", prompt: "Ella ___ en casa.", answer: "est\u00e1", options: ["est\u00e1", "estoy", "est\u00e1n", "estamos"] },
            { type: "translate", en: "I stay at home.", answer: "Me quedo en casa.", accept: ["me quedo en casa", "yo me quedo en casa"] },
            { type: "history", fr: "Espa\u00f1a fue el primer imperio verdaderamente global.", answer: "Spain became the first truly global empire.", options: ["Spain became the first truly global empire.", "Spain became the last European empire.", "Spain only controlled territories in Europe.", "Spain never had colonies outside Europe."] },
            { type: "fill", prompt: "T\u00fa ___ cansado.", answer: "pareces", options: ["pareces", "parezco", "parecemos", "parecen"] },
            { type: "translate", en: "They seem happy.", answer: "Ellos parecen contentos.", accept: ["ellos parecen contentos", "ellas parecen contentas", "ellos parecen felices"] }
        ]
    },

    // ===== LESSON 2: Tener =====
    {
        id: 2,
        title: "Tener \u2014 To Have",
        desc: "Essential for expressing possession, age, and many Spanish expressions.",
        spanishFocus: {
            verb: "tener",
            conjugation: {
                "yo": "tengo",
                "t\u00fa": "tienes",
                "el/ella": "tiene",
                "nosotros": "tenemos",
                "vosotros": "ten\u00e9is",
                "ellos/ellas": "tienen"
            },
            pattern: "Subject + tener + noun / expression",
            examples: [
                { es: "Yo tengo una pregunta.", en: "I have a question." },
                { es: "T\u00fa tienes raz\u00f3n.", en: "You are right. (lit: You have reason)" },
                { es: "Ella tiene treinta a\u00f1os.", en: "She is thirty years old. (lit: She has thirty years)" },
                { es: "Nosotros tenemos hambre.", en: "We are hungry. (lit: We have hunger)" },
                { es: "Vosotros ten\u00e9is suerte.", en: "You all are lucky. (lit: You have luck)" },
                { es: "Ellos tienen miedo.", en: "They are afraid. (lit: They have fear)" }
            ],
            tips: "Like French 'avoir,' Spanish uses 'tener' for age, hunger, thirst, fear, and being right. 'Tengo hambre' = 'I have hunger' (I'm hungry). 'Tengo 25 a\u00f1os' = 'I have 25 years' (I'm 25).",
            homonyms: [],
            synonyms: [{ word: "poseer", meaning: "to possess" }, { word: "contar con", meaning: "to count on / to have" }],
            extraVerbs: [
                {
                    verb: "tomar", meaning: "to take / to drink",
                    conjugation: { "yo": "tomo", "t\u00fa": "tomas", "el/ella": "toma", "nosotros": "tomamos", "vosotros": "tom\u00e1is", "ellos/ellas": "toman" },
                    examples: [{ es: "Yo tomo un caf\u00e9.", en: "I'm having a coffee." }, { es: "Ella toma el autob\u00fas.", en: "She takes the bus." }],
                    homonyms: [],
                    synonyms: [{ word: "coger", meaning: "to take/grab" }, { word: "beber", meaning: "to drink" }]
                },
                {
                    verb: "dar", meaning: "to give",
                    conjugation: { "yo": "doy", "t\u00fa": "das", "el/ella": "da", "nosotros": "damos", "vosotros": "dais", "ellos/ellas": "dan" },
                    examples: [{ es: "Te doy mi n\u00famero.", en: "I give you my number." }, { es: "Ellos dan regalos.", en: "They give gifts." }],
                    homonyms: [],
                    synonyms: [{ word: "ofrecer", meaning: "to offer" }, { word: "entregar", meaning: "to deliver/hand over" }]
                },
                {
                    verb: "guardar", meaning: "to keep / to save",
                    conjugation: { "yo": "guardo", "t\u00fa": "guardas", "el/ella": "guarda", "nosotros": "guardamos", "vosotros": "guard\u00e1is", "ellos/ellas": "guardan" },
                    examples: [{ es: "Yo guardo un buen recuerdo.", en: "I keep a good memory." }, { es: "Ellos guardan el secreto.", en: "They keep the secret." }],
                    homonyms: [],
                    synonyms: [{ word: "conservar", meaning: "to preserve" }, { word: "retener", meaning: "to retain" }]
                },
                {
                    verb: "perder", meaning: "to lose",
                    conjugation: { "yo": "pierdo", "t\u00fa": "pierdes", "el/ella": "pierde", "nosotros": "perdemos", "vosotros": "perd\u00e9is", "ellos/ellas": "pierden" },
                    examples: [{ es: "Yo pierdo mis llaves todo el tiempo.", en: "I lose my keys all the time." }, { es: "Nosotros perdemos la paciencia.", en: "We are losing patience." }],
                    homonyms: [],
                    synonyms: [{ word: "extraviar", meaning: "to misplace" }, { word: "desperdiciar", meaning: "to waste" }]
                }
            ]
        },
        history: {
            period: "Ancient Egypt (3000 BCE)",
            fr: "Los antiguos egipcios ten\u00edan una civilizaci\u00f3n extraordinaria. Ten\u00edan conocimientos avanzados en matem\u00e1ticas y arquitectura. Las pir\u00e1mides de Guiza tienen m\u00e1s de cuatro mil a\u00f1os. Los egipcios tambi\u00e9n ten\u00edan un sistema de escritura: los jerogl\u00edficos.",
            en: "The ancient Egyptians had an extraordinary civilization. They had advanced knowledge in mathematics and architecture. The pyramids of Giza are more than four thousand years old. The Egyptians also had a writing system: hieroglyphs.",
            vocab: [
                { word: "los antiguos", meaning: "the ancient" },
                { word: "extraordinario", meaning: "extraordinary" },
                { word: "los conocimientos", meaning: "knowledge" },
                { word: "la escritura", meaning: "writing" },
                { word: "los jerogl\u00edficos", meaning: "hieroglyphs" }
            ],
            funFact: "The Great Pyramid of Giza was the tallest man-made structure in the world for over 3,800 years.",
            facts: [
                "The ancient Egyptians invented one of the first writing systems, hieroglyphs, around 3200 BCE.",
                "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid.",
                "Ancient Egyptians mummified not only humans but also cats, dogs, crocodiles, and even baboons.",
                "The Rosetta Stone, discovered in 1799, was the key to deciphering Egyptian hieroglyphs.",
                "Ancient Egyptian women had more rights than women in many later civilizations \u2014 they could own property and initiate divorce.",
                "The Egyptians used a 365-day calendar, remarkably similar to the one we use today."
            ]
        },
        currentEvents: [
            { es: "Nuevos descubrimientos arqueol\u00f3gicos en Egipto revelan tumbas de m\u00e1s de tres mil a\u00f1os.", en: "New archaeological discoveries in Egypt reveal tombs over three thousand years old." },
            { es: "La tecnolog\u00eda de inteligencia artificial ayuda a descifrar textos antiguos.", en: "AI technology helps decipher ancient texts." },
            { es: "El turismo en Egipto crece despu\u00e9s de la apertura del Gran Museo Egipcio.", en: "Tourism in Egypt grows after the opening of the Grand Egyptian Museum." }
        ],
        vocabulary: [
            {
                word: "tengo", partOfSpeech: "verb", meaning: "I have (from tener)",
                example: { es: "Yo tengo hambre.", en: "I am hungry." },
                homonyms: [],
                synonyms: [{ word: "poseo", meaning: "I possess" }]
            },
            {
                word: "hambre", partOfSpeech: "noun (f)", meaning: "hunger",
                example: { es: "Tenemos hambre.", en: "We are hungry." },
                homonyms: [],
                synonyms: [{ word: "apetito", meaning: "appetite" }, { word: "gana de comer", meaning: "desire to eat" }]
            },
            {
                word: "miedo", partOfSpeech: "noun (m)", meaning: "fear",
                example: { es: "Ellos tienen miedo.", en: "They are afraid." },
                homonyms: [],
                synonyms: [{ word: "temor", meaning: "dread" }, { word: "terror", meaning: "terror" }, { word: "susto", meaning: "fright" }]
            },
            {
                word: "raz\u00f3n", partOfSpeech: "noun (f)", meaning: "reason / right",
                example: { es: "T\u00fa tienes raz\u00f3n.", en: "You are right." },
                homonyms: [{ word: "raz\u00f3n", meaning: "ratio (math)", example: "La raz\u00f3n entre dos y cuatro. (The ratio between two and four.)" }],
                synonyms: [{ word: "motivo", meaning: "motive" }, { word: "l\u00f3gica", meaning: "logic" }]
            },
            {
                word: "suerte", partOfSpeech: "noun (f)", meaning: "luck",
                example: { es: "Ten\u00e9is suerte.", en: "You all are lucky." },
                homonyms: [{ word: "suerte", meaning: "fate/destiny", example: "La suerte est\u00e1 echada. (The die is cast.)" }],
                synonyms: [{ word: "fortuna", meaning: "fortune" }, { word: "destino", meaning: "destiny" }]
            },
            {
                word: "a\u00f1o", partOfSpeech: "noun (m)", meaning: "year",
                example: { es: "Ella tiene treinta a\u00f1os.", en: "She is thirty years old." },
                homonyms: [],
                synonyms: [{ word: "curso", meaning: "course (academic year)" }]
            }
        ],
        artHistory: {
            period: "El Barroco Espa\u00f1ol (1600\u20131750)",
            periodEn: "The Spanish Baroque (1600\u20131750)",
            context: "El Barroco espa\u00f1ol fue una \u00e9poca de grandeza art\u00edstica. Vel\u00e1zquez se convirti\u00f3 en el pintor m\u00e1s importante de la corte espa\u00f1ola, creando obras que combinaban realismo con profundidad psicol\u00f3gica.",
            contextEn: "The Spanish Baroque was an era of artistic grandeur. Vel\u00e1zquez became the most important painter of the Spanish court, creating works that combined realism with psychological depth.",
            artworks: [
                {
                    title: "Las Meninas",
                    titleEn: "The Ladies-in-Waiting",
                    artist: "Diego Vel\u00e1zquez",
                    year: 1656,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/400px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg",
                    descEs: "Esta es posiblemente la pintura m\u00e1s famosa de Espa\u00f1a. Vel\u00e1zquez se pint\u00f3 a s\u00ed mismo pintando a la familia real.",
                    descEn: "This is arguably Spain's most famous painting. Vel\u00e1zquez painted himself painting the royal family."
                },
                {
                    title: "La rendici\u00f3n de Breda",
                    titleEn: "The Surrender of Breda",
                    artist: "Diego Vel\u00e1zquez",
                    year: 1635,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Velazquez-The_Surrender_of_Breda.jpg/400px-Velazquez-The_Surrender_of_Breda.jpg",
                    descEs: "Esta obra muestra la rendici\u00f3n de la ciudad holandesa de Breda ante las tropas espa\u00f1olas, con un gesto de magnanimidad del vencedor.",
                    descEn: "This work shows the surrender of the Dutch city of Breda to Spanish troops, with a gesture of magnanimity from the victor."
                }
            ],
            vocab: [
                { word: "un cuadro", meaning: "a painting" },
                { word: "la corte", meaning: "the court" },
                { word: "el pintor", meaning: "the painter" },
                { word: "la grandeza", meaning: "grandeur" },
                { word: "el realismo", meaning: "realism" },
                { word: "la rendici\u00f3n", meaning: "the surrender" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Yo ___ una pregunta.", answer: "tengo", options: ["tengo", "tienes", "tiene", "tenemos"] },
            { type: "fill", prompt: "Nosotros ___ hambre.", answer: "tenemos", options: ["ten\u00e9is", "tengo", "tenemos", "tienen"] },
            { type: "fill", prompt: "Ellos ___ miedo.", answer: "tienen", options: ["tiene", "tenemos", "tienen", "ten\u00e9is"] },
            { type: "translate", en: "You are right.", answer: "T\u00fa tienes raz\u00f3n.", accept: ["tu tienes razon", "t\u00fa tienes raz\u00f3n", "usted tiene raz\u00f3n"] },
            { type: "translate", en: "She is thirty years old.", answer: "Ella tiene treinta a\u00f1os.", accept: ["ella tiene treinta a\u00f1os", "ella tiene treinta anos", "ella tiene 30 a\u00f1os"] },
            { type: "history", fr: "Los egipcios ten\u00edan un sistema de escritura avanzado.", answer: "The Egyptians had an advanced writing system.", options: ["The Egyptians had an advanced writing system.", "The Egyptians had no writing system.", "The Egyptians used the Roman alphabet.", "The Egyptians only used spoken language."] },
            { type: "fill", prompt: "Yo ___ un caf\u00e9 cada ma\u00f1ana.", answer: "tomo", options: ["tomo", "tomas", "toman", "tomamos"] },
            { type: "fill", prompt: "Te ___ mi n\u00famero.", answer: "doy", options: ["doy", "das", "dan", "damos"] },
            { type: "translate", en: "I keep a good memory.", answer: "Yo guardo un buen recuerdo.", accept: ["yo guardo un buen recuerdo", "guardo un buen recuerdo"] },
            { type: "history", fr: "La Gran Pir\u00e1mide fue la estructura m\u00e1s alta del mundo durante 3.800 a\u00f1os.", answer: "The Great Pyramid was the tallest structure in the world for 3,800 years.", options: ["The Great Pyramid was the tallest structure in the world for 3,800 years.", "The Great Pyramid was only 100 years old.", "The Great Pyramid was built by the Romans.", "The Great Pyramid was destroyed in ancient times."] },
            { type: "fill", prompt: "Yo ___ mis llaves todo el tiempo.", answer: "pierdo", options: ["pierdo", "pierdes", "pierde", "perdemos"] },
            { type: "translate", en: "They give gifts.", answer: "Ellos dan regalos.", accept: ["ellos dan regalos", "ellas dan regalos", "dan regalos"] }
        ]
    },

    // ===== LESSON 3: Ir =====
    {
        id: 3,
        title: "Ir \u2014 To Go",
        desc: "Movement, future plans, and getting around in Spanish.",
        spanishFocus: {
            verb: "ir",
            conjugation: {
                "yo": "voy",
                "t\u00fa": "vas",
                "el/ella": "va",
                "nosotros": "vamos",
                "vosotros": "vais",
                "ellos/ellas": "van"
            },
            pattern: "Subject + ir + a + place / infinitive",
            examples: [
                { es: "Yo voy al supermercado.", en: "I go to the supermarket." },
                { es: "T\u00fa vas a estudiar.", en: "You are going to study." },
                { es: "Ella va a la escuela.", en: "She goes to school." },
                { es: "Nosotros vamos a la playa.", en: "We go to the beach." },
                { es: "\u00bfVosotros vais al cine?", en: "Are you all going to the movies?" },
                { es: "Ellos van a viajar.", en: "They are going to travel." }
            ],
            tips: "'Ir a + infinitive' is the simplest way to express the future in Spanish: 'Voy a comer' = 'I'm going to eat.' Also, '\u00a1Vamos!' means 'Let's go!' and is used all the time.",
            homonyms: [],
            synonyms: [{ word: "dirigirse", meaning: "to head towards" }, { word: "marcharse", meaning: "to leave" }],
            extraVerbs: [
                {
                    verb: "venir", meaning: "to come",
                    conjugation: { "yo": "vengo", "t\u00fa": "vienes", "el/ella": "viene", "nosotros": "venimos", "vosotros": "ven\u00eds", "ellos/ellas": "vienen" },
                    examples: [{ es: "\u00bfVienes a la fiesta?", en: "Are you coming to the party?" }, { es: "Ellos vienen de Espa\u00f1a.", en: "They come from Spain." }],
                    homonyms: [],
                    synonyms: [{ word: "llegar", meaning: "to arrive" }, { word: "acudir", meaning: "to go to / to come" }]
                },
                {
                    verb: "salir", meaning: "to leave / to go out",
                    conjugation: { "yo": "salgo", "t\u00fa": "sales", "el/ella": "sale", "nosotros": "salimos", "vosotros": "sal\u00eds", "ellos/ellas": "salen" },
                    examples: [{ es: "Yo salgo a las ocho.", en: "I leave at eight." }, { es: "Nosotros salimos esta noche.", en: "We're going out tonight." }],
                    homonyms: [],
                    synonyms: [{ word: "partir", meaning: "to depart" }, { word: "irse", meaning: "to go away" }]
                },
                {
                    verb: "llegar", meaning: "to arrive",
                    conjugation: { "yo": "llego", "t\u00fa": "llegas", "el/ella": "llega", "nosotros": "llegamos", "vosotros": "lleg\u00e1is", "ellos/ellas": "llegan" },
                    examples: [{ es: "Yo llego a las nueve.", en: "I arrive at nine." }, { es: "Ellos llegan tarde.", en: "They arrive late." }],
                    homonyms: [],
                    synonyms: [{ word: "arribar", meaning: "to arrive (formal)" }, { word: "alcanzar", meaning: "to reach" }]
                }
            ]
        },
        history: {
            period: "Renaissance Italy (1400\u20131600)",
            fr: "El Renacimiento comenz\u00f3 en Italia en el siglo XV. Fue una \u00e9poca de grandes avances en el arte, la ciencia y la filosof\u00eda. Leonardo da Vinci, Miguel \u00c1ngel y Rafael crearon obras maestras que a\u00fan admiramos hoy.",
            en: "The Renaissance began in Italy in the 15th century. It was an era of great advances in art, science, and philosophy. Leonardo da Vinci, Michelangelo, and Raphael created masterpieces we still admire today.",
            vocab: [
                { word: "el renacimiento", meaning: "the renaissance / rebirth" },
                { word: "el siglo", meaning: "the century" },
                { word: "los avances", meaning: "the advances" },
                { word: "la ciencia", meaning: "the science" },
                { word: "las obras maestras", meaning: "the masterpieces" }
            ],
            funFact: "Leonardo da Vinci wrote his notebooks in mirror writing \u2014 you needed a mirror to read them!",
            facts: [
                "The Mona Lisa has no eyebrows \u2014 it was the fashion in Renaissance Florence to shave them off.",
                "Michelangelo painted the Sistine Chapel ceiling while standing, not lying on his back as commonly believed.",
                "Leonardo da Vinci was left-handed and wrote backwards from right to left.",
                "The Renaissance word 'Rinascimento' literally means 'rebirth' in Italian.",
                "Gutenberg's printing press (1440) helped spread Renaissance ideas across Europe far faster than handwritten manuscripts could.",
                "Florence's Medici family were bankers who became the most powerful patrons of Renaissance art."
            ]
        },
        currentEvents: [
            { es: "Italia restaura monumentos hist\u00f3ricos con tecnolog\u00eda avanzada.", en: "Italy restores historic monuments with advanced technology." },
            { es: "Los museos de Florencia ofrecen tours virtuales gratuitos.", en: "Florence museums offer free virtual tours." },
            { es: "El turismo cultural crece en toda Europa.", en: "Cultural tourism grows throughout Europe." }
        ],
        vocabulary: [
            {
                word: "voy", partOfSpeech: "verb", meaning: "I go (from ir)",
                example: { es: "Yo voy al mercado.", en: "I go to the market." },
                homonyms: [],
                synonyms: [{ word: "me dirijo", meaning: "I head towards" }]
            },
            {
                word: "playa", partOfSpeech: "noun (f)", meaning: "beach",
                example: { es: "Vamos a la playa.", en: "We go to the beach." },
                homonyms: [],
                synonyms: [{ word: "costa", meaning: "coast" }, { word: "orilla", meaning: "shore" }]
            },
            {
                word: "escuela", partOfSpeech: "noun (f)", meaning: "school",
                example: { es: "Ella va a la escuela.", en: "She goes to school." },
                homonyms: [],
                synonyms: [{ word: "colegio", meaning: "school (primary)" }, { word: "instituto", meaning: "high school" }]
            },
            {
                word: "fiesta", partOfSpeech: "noun (f)", meaning: "party",
                example: { es: "\u00bfVienes a la fiesta?", en: "Are you coming to the party?" },
                homonyms: [],
                synonyms: [{ word: "celebraci\u00f3n", meaning: "celebration" }, { word: "reuni\u00f3n", meaning: "gathering" }]
            },
            {
                word: "tarde", partOfSpeech: "adverb/noun", meaning: "late / afternoon",
                example: { es: "Ellos llegan tarde.", en: "They arrive late." },
                homonyms: [{ word: "tarde", meaning: "afternoon (noun)", example: "Buenas tardes. (Good afternoon.)" }],
                synonyms: [{ word: "atrasado", meaning: "delayed" }]
            }
        ],
        artHistory: {
            period: "El Romanticismo Espa\u00f1ol (1800\u20131850)",
            periodEn: "Spanish Romanticism (1800\u20131850)",
            context: "El Romanticismo espa\u00f1ol estuvo marcado por la obra de Francisco de Goya. Sus pinturas evolucionaron desde escenas alegres hasta las oscuras 'Pinturas Negras', reflejando los horrores de la guerra y la condici\u00f3n humana.",
            contextEn: "Spanish Romanticism was marked by the work of Francisco de Goya. His paintings evolved from cheerful scenes to the dark 'Black Paintings,' reflecting the horrors of war and the human condition.",
            artworks: [
                {
                    title: "El tres de mayo de 1808",
                    titleEn: "The Third of May 1808",
                    artist: "Francisco de Goya",
                    year: 1814,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg/400px-El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg",
                    descEs: "Esta pintura muestra la ejecuci\u00f3n de civiles espa\u00f1oles por soldados franceses. Es un s\u00edmbolo poderoso de la resistencia contra la opresi\u00f3n.",
                    descEn: "This painting shows the execution of Spanish civilians by French soldiers. It is a powerful symbol of resistance against oppression."
                },
                {
                    title: "Saturno devorando a su hijo",
                    titleEn: "Saturn Devouring His Son",
                    artist: "Francisco de Goya",
                    year: 1823,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg/400px-Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg",
                    descEs: "Una de las famosas 'Pinturas Negras' de Goya. Muestra al dios romano Saturno en un acto de horror y locura.",
                    descEn: "One of Goya's famous 'Black Paintings.' It shows the Roman god Saturn in an act of horror and madness."
                }
            ],
            vocab: [
                { word: "la guerra", meaning: "the war" },
                { word: "la resistencia", meaning: "the resistance" },
                { word: "la opresi\u00f3n", meaning: "the oppression" },
                { word: "oscuro", meaning: "dark" },
                { word: "la locura", meaning: "the madness" },
                { word: "el horror", meaning: "the horror" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Yo ___ al supermercado.", answer: "voy", options: ["voy", "vas", "va", "vamos"] },
            { type: "fill", prompt: "Nosotros ___ a la playa.", answer: "vamos", options: ["vais", "voy", "vamos", "van"] },
            { type: "fill", prompt: "Ellos ___ a viajar.", answer: "van", options: ["va", "vamos", "van", "vais"] },
            { type: "translate", en: "She goes to school.", answer: "Ella va a la escuela.", accept: ["ella va a la escuela", "ella va al colegio"] },
            { type: "translate", en: "Are you coming to the party?", answer: "\u00bfVienes a la fiesta?", accept: ["vienes a la fiesta", "\u00bfvienes a la fiesta?", "tu vienes a la fiesta"] },
            { type: "history", fr: "El Renacimiento comenz\u00f3 en Italia.", answer: "The Renaissance began in Italy.", options: ["The Renaissance began in Italy.", "The Renaissance began in Spain.", "The Renaissance began in France.", "The Renaissance began in England."] },
            { type: "fill", prompt: "Yo ___ a las ocho.", answer: "salgo", options: ["salgo", "sales", "salen", "salimos"] },
            { type: "fill", prompt: "Yo ___ a las nueve.", answer: "llego", options: ["llego", "llegas", "llega", "llegamos"] },
            { type: "translate", en: "I leave at eight.", answer: "Yo salgo a las ocho.", accept: ["yo salgo a las ocho", "salgo a las ocho"] },
            { type: "history", fr: "Leonardo da Vinci escrib\u00eda al rev\u00e9s.", answer: "Leonardo da Vinci wrote backwards.", options: ["Leonardo da Vinci wrote backwards.", "Leonardo da Vinci only painted.", "Leonardo da Vinci was a musician.", "Leonardo da Vinci wrote in French."] },
            { type: "fill", prompt: "Ellos ___ de Espa\u00f1a.", answer: "vienen", options: ["vienen", "vengo", "venimos", "vienes"] },
            { type: "translate", en: "They arrive late.", answer: "Ellos llegan tarde.", accept: ["ellos llegan tarde", "ellas llegan tarde", "llegan tarde"] }
        ]
    },

    // ===== LESSON 4: Hacer =====
    {
        id: 4,
        title: "Hacer \u2014 To Do / To Make",
        desc: "Actions, weather, and time expressions in Spanish.",
        spanishFocus: {
            verb: "hacer",
            conjugation: {
                "yo": "hago",
                "t\u00fa": "haces",
                "el/ella": "hace",
                "nosotros": "hacemos",
                "vosotros": "hac\u00e9is",
                "ellos/ellas": "hacen"
            },
            pattern: "Subject + hacer + noun / activity",
            examples: [
                { es: "Yo hago la tarea.", en: "I do the homework." },
                { es: "T\u00fa haces ejercicio.", en: "You exercise. (lit: You do exercise)" },
                { es: "Hace buen tiempo.", en: "The weather is nice. (lit: It makes good weather)" },
                { es: "Nosotros hacemos una fiesta.", en: "We are having a party. (lit: We make a party)" },
                { es: "\u00bfQu\u00e9 hac\u00e9is?", en: "What are you all doing?" },
                { es: "Ellos hacen mucho ruido.", en: "They make a lot of noise." }
            ],
            tips: "Hacer is used for weather: 'Hace fr\u00edo' (it's cold), 'Hace calor' (it's hot), 'Hace sol' (it's sunny). Also for time: 'Hace dos a\u00f1os' (two years ago).",
            homonyms: [],
            synonyms: [{ word: "realizar", meaning: "to carry out" }, { word: "fabricar", meaning: "to manufacture" }],
            extraVerbs: [
                {
                    verb: "poner", meaning: "to put / to place",
                    conjugation: { "yo": "pongo", "t\u00fa": "pones", "el/ella": "pone", "nosotros": "ponemos", "vosotros": "pon\u00e9is", "ellos/ellas": "ponen" },
                    examples: [{ es: "Yo pongo la mesa.", en: "I set the table." }, { es: "Ella pone m\u00fasica.", en: "She puts on music." }],
                    homonyms: [],
                    synonyms: [{ word: "colocar", meaning: "to place" }, { word: "situar", meaning: "to situate" }]
                },
                {
                    verb: "traer", meaning: "to bring",
                    conjugation: { "yo": "traigo", "t\u00fa": "traes", "el/ella": "trae", "nosotros": "traemos", "vosotros": "tra\u00e9is", "ellos/ellas": "traen" },
                    examples: [{ es: "Yo traigo el postre.", en: "I bring the dessert." }, { es: "Ellos traen regalos.", en: "They bring gifts." }],
                    homonyms: [],
                    synonyms: [{ word: "llevar", meaning: "to carry/bring" }, { word: "aportar", meaning: "to contribute" }]
                },
                {
                    verb: "crear", meaning: "to create",
                    conjugation: { "yo": "creo", "t\u00fa": "creas", "el/ella": "crea", "nosotros": "creamos", "vosotros": "cre\u00e1is", "ellos/ellas": "crean" },
                    examples: [{ es: "Yo creo arte.", en: "I create art." }, { es: "Ellos crean soluciones.", en: "They create solutions." }],
                    homonyms: [{ word: "creo", meaning: "I believe (from creer)", example: "Yo creo que s\u00ed. (I think so.)" }],
                    synonyms: [{ word: "inventar", meaning: "to invent" }, { word: "producir", meaning: "to produce" }]
                }
            ]
        },
        history: {
            period: "World War I (1914\u20131918)",
            fr: "La Primera Guerra Mundial fue un conflicto devastador. M\u00e1s de 16 millones de personas murieron. Las nuevas tecnolog\u00edas b\u00e9licas, como los tanques y el gas venenoso, hicieron la guerra m\u00e1s mortal que nunca.",
            en: "World War I was a devastating conflict. More than 16 million people died. New war technologies, such as tanks and poison gas, made war more deadly than ever.",
            vocab: [
                { word: "la guerra", meaning: "the war" },
                { word: "devastador", meaning: "devastating" },
                { word: "las tecnolog\u00edas", meaning: "the technologies" },
                { word: "b\u00e9lico", meaning: "warlike/military" },
                { word: "mortal", meaning: "deadly" }
            ],
            funFact: "During the Christmas Truce of 1914, soldiers from both sides played football together in no man's land.",
            facts: [
                "The assassination of Archduke Franz Ferdinand in Sarajevo in 1914 triggered the start of WWI.",
                "More than 65 million men were mobilized during World War I from over 30 countries.",
                "World War I saw the first widespread use of chemical weapons, particularly mustard gas.",
                "The war led directly to the fall of four great empires: Russian, Ottoman, Austro-Hungarian, and German.",
                "Pigeons were used to carry messages during WWI \u2014 one named Cher Ami saved nearly 200 American soldiers.",
                "The Treaty of Versailles in 1919 imposed harsh penalties on Germany, which many historians link to the rise of WWII."
            ]
        },
        currentEvents: [
            { es: "Se conmemora el aniversario del armisticio con ceremonias internacionales.", en: "The armistice anniversary is commemorated with international ceremonies." },
            { es: "Nuevos documentos revelan historias desconocidas de la Primera Guerra Mundial.", en: "New documents reveal unknown stories from World War I." },
            { es: "Los museos de guerra actualizan sus exposiciones con realidad virtual.", en: "War museums update their exhibitions with virtual reality." }
        ],
        vocabulary: [
            {
                word: "hago", partOfSpeech: "verb", meaning: "I do/make (from hacer)",
                example: { es: "Yo hago la tarea.", en: "I do the homework." },
                homonyms: [],
                synonyms: [{ word: "realizo", meaning: "I carry out" }]
            },
            {
                word: "tiempo", partOfSpeech: "noun (m)", meaning: "time / weather",
                example: { es: "Hace buen tiempo.", en: "The weather is nice." },
                homonyms: [{ word: "tiempo", meaning: "time", example: "No tengo tiempo. (I don't have time.)" }],
                synonyms: [{ word: "clima", meaning: "climate" }, { word: "momento", meaning: "moment" }]
            },
            {
                word: "ruido", partOfSpeech: "noun (m)", meaning: "noise",
                example: { es: "Hacen mucho ruido.", en: "They make a lot of noise." },
                homonyms: [],
                synonyms: [{ word: "sonido", meaning: "sound" }, { word: "esc\u00e1ndalo", meaning: "racket" }]
            },
            {
                word: "tarea", partOfSpeech: "noun (f)", meaning: "homework / task",
                example: { es: "Hago la tarea.", en: "I do the homework." },
                homonyms: [],
                synonyms: [{ word: "deber", meaning: "duty / homework" }, { word: "trabajo", meaning: "work" }]
            }
        ],
        artHistory: {
            period: "El Modernismo Catal\u00e1n (1888\u20131911)",
            periodEn: "Catalan Modernism (1888\u20131911)",
            context: "El Modernismo catal\u00e1n fue un movimiento art\u00edstico centrado en Barcelona. Antoni Gaud\u00ed fue su figura m\u00e1s emblem\u00e1tica, creando edificios que combinaban naturaleza, arquitectura y espiritualidad.",
            contextEn: "Catalan Modernism was an artistic movement centered in Barcelona. Antoni Gaud\u00ed was its most iconic figure, creating buildings that combined nature, architecture, and spirituality.",
            artworks: [
                {
                    title: "La Sagrada Familia",
                    titleEn: "The Sacred Family",
                    artist: "Antoni Gaud\u00ed",
                    year: 1882,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Sagrada_Familia_nave_roof_detail.jpg/400px-Sagrada_Familia_nave_roof_detail.jpg",
                    descEs: "La bas\u00edlica m\u00e1s famosa de Barcelona, a\u00fan en construcci\u00f3n despu\u00e9s de m\u00e1s de 140 a\u00f1os. Gaud\u00ed dedic\u00f3 los \u00faltimos 43 a\u00f1os de su vida a este proyecto.",
                    descEn: "Barcelona's most famous basilica, still under construction after over 140 years. Gaud\u00ed dedicated the last 43 years of his life to this project."
                },
                {
                    title: "El Parque G\u00fcell",
                    titleEn: "Park G\u00fcell",
                    artist: "Antoni Gaud\u00ed",
                    year: 1914,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/ParcGuell-Lizard01.jpg/400px-ParcGuell-Lizard01.jpg",
                    descEs: "Un parque p\u00fablico con mosaicos coloridos y arquitectura org\u00e1nica. El famoso drag\u00f3n de mosaico es un s\u00edmbolo de Barcelona.",
                    descEn: "A public park with colorful mosaics and organic architecture. The famous mosaic dragon is a symbol of Barcelona."
                }
            ],
            vocab: [
                { word: "la bas\u00edlica", meaning: "the basilica" },
                { word: "el mosaico", meaning: "the mosaic" },
                { word: "la construcci\u00f3n", meaning: "the construction" },
                { word: "la naturaleza", meaning: "nature" },
                { word: "el edificio", meaning: "the building" },
                { word: "la espiritualidad", meaning: "spirituality" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Yo ___ la tarea.", answer: "hago", options: ["hago", "haces", "hace", "hacemos"] },
            { type: "fill", prompt: "___ buen tiempo hoy.", answer: "Hace", options: ["Hace", "Hago", "Hacen", "Hacemos"] },
            { type: "fill", prompt: "Ellos ___ mucho ruido.", answer: "hacen", options: ["hace", "hacemos", "hacen", "hac\u00e9is"] },
            { type: "translate", en: "I set the table.", answer: "Yo pongo la mesa.", accept: ["yo pongo la mesa", "pongo la mesa"] },
            { type: "translate", en: "I bring the dessert.", answer: "Yo traigo el postre.", accept: ["yo traigo el postre", "traigo el postre"] },
            { type: "history", fr: "M\u00e1s de 16 millones de personas murieron en la Primera Guerra Mundial.", answer: "Over 16 million people died in WWI.", options: ["Over 16 million people died in WWI.", "About 1 million people died in WWI.", "No one died in WWI.", "Over 100 million people died in WWI."] },
            { type: "fill", prompt: "Yo ___ la mesa.", answer: "pongo", options: ["pongo", "pones", "ponen", "ponemos"] },
            { type: "fill", prompt: "Yo ___ el postre.", answer: "traigo", options: ["traigo", "traes", "traen", "traemos"] },
            { type: "translate", en: "I create art.", answer: "Yo creo arte.", accept: ["yo creo arte", "creo arte"] },
            { type: "history", fr: "Durante la Navidad de 1914, soldados de ambos bandos jugaron al f\u00fatbol juntos.", answer: "Soldiers from both sides played football together.", options: ["Soldiers from both sides played football together.", "Soldiers continued fighting during Christmas.", "Christmas was cancelled during the war.", "Soldiers exchanged weapons during Christmas."] }
        ]
    },

    // ===== LESSON 5: Querer =====
    {
        id: 5,
        title: "Querer \u2014 To Want / To Love",
        desc: "Expressing desires, wishes, and love in Spanish.",
        spanishFocus: {
            verb: "querer",
            conjugation: {
                "yo": "quiero",
                "t\u00fa": "quieres",
                "el/ella": "quiere",
                "nosotros": "queremos",
                "vosotros": "quer\u00e9is",
                "ellos/ellas": "quieren"
            },
            pattern: "Subject + querer + noun / infinitive",
            examples: [
                { es: "Yo quiero aprender espa\u00f1ol.", en: "I want to learn Spanish." },
                { es: "T\u00fa quieres un caf\u00e9.", en: "You want a coffee." },
                { es: "Ella quiere viajar.", en: "She wants to travel." },
                { es: "Nosotros queremos pizza.", en: "We want pizza." },
                { es: "Te quiero mucho.", en: "I love you a lot." },
                { es: "Ellos quieren bailar.", en: "They want to dance." }
            ],
            tips: "'Te quiero' means 'I love you' (for family, friends, partners). 'Te amo' is more intense, usually romantic. 'Querer' is a stem-changing verb: e\u2192ie in most forms.",
            homonyms: [],
            synonyms: [{ word: "desear", meaning: "to wish/desire" }, { word: "amar", meaning: "to love (deeply)" }],
            extraVerbs: [
                {
                    verb: "poder", meaning: "to be able to / can",
                    conjugation: { "yo": "puedo", "t\u00fa": "puedes", "el/ella": "puede", "nosotros": "podemos", "vosotros": "pod\u00e9is", "ellos/ellas": "pueden" },
                    examples: [{ es: "\u00bfPuedo ayudarte?", en: "Can I help you?" }, { es: "No podemos ir.", en: "We can't go." }],
                    homonyms: [],
                    synonyms: [{ word: "lograr", meaning: "to manage to" }, { word: "conseguir", meaning: "to succeed in" }]
                },
                {
                    verb: "necesitar", meaning: "to need",
                    conjugation: { "yo": "necesito", "t\u00fa": "necesitas", "el/ella": "necesita", "nosotros": "necesitamos", "vosotros": "necesit\u00e1is", "ellos/ellas": "necesitan" },
                    examples: [{ es: "Necesito ayuda.", en: "I need help." }, { es: "Ellos necesitan descansar.", en: "They need to rest." }],
                    homonyms: [],
                    synonyms: [{ word: "requerir", meaning: "to require" }, { word: "precisar", meaning: "to need (formal)" }]
                },
                {
                    verb: "preferir", meaning: "to prefer",
                    conjugation: { "yo": "prefiero", "t\u00fa": "prefieres", "el/ella": "prefiere", "nosotros": "preferimos", "vosotros": "prefer\u00eds", "ellos/ellas": "prefieren" },
                    examples: [{ es: "Yo prefiero t\u00e9.", en: "I prefer tea." }, { es: "Ellos prefieren quedarse.", en: "They prefer to stay." }],
                    homonyms: [],
                    synonyms: [{ word: "elegir", meaning: "to choose" }, { word: "optar por", meaning: "to opt for" }]
                }
            ]
        },
        history: {
            period: "Napoleon Bonaparte (1799\u20131815)",
            fr: "Napole\u00f3n Bonaparte quer\u00eda conquistar toda Europa. Se convirti\u00f3 en emperador de Francia en 1804. Su invasi\u00f3n de Espa\u00f1a en 1808 provoc\u00f3 la Guerra de la Independencia Espa\u00f1ola, que inspir\u00f3 las guerras de independencia en Am\u00e9rica Latina.",
            en: "Napoleon Bonaparte wanted to conquer all of Europe. He became Emperor of France in 1804. His invasion of Spain in 1808 triggered the Spanish War of Independence, which inspired the independence wars in Latin America.",
            vocab: [
                { word: "conquistar", meaning: "to conquer" },
                { word: "el emperador", meaning: "the emperor" },
                { word: "la invasi\u00f3n", meaning: "the invasion" },
                { word: "la independencia", meaning: "the independence" },
                { word: "inspirar", meaning: "to inspire" }
            ],
            funFact: "Napoleon wasn't actually short \u2014 at 5'7\" he was average height for the time. British propaganda created the myth.",
            facts: [
                "Napoleon's invasion of Spain in 1808 triggered independence movements across Latin America.",
                "Napoleon introduced the Napoleonic Code, which influenced legal systems across the world and is still the basis of law in many countries.",
                "Napoleon sold the Louisiana Territory to the United States in 1803 for just $15 million, doubling the size of the country.",
                "During his exile on Elba, Napoleon escaped and returned to power for 100 days before his final defeat at Waterloo.",
                "Napoleon was an avid reader and reportedly read books while riding in his carriage during military campaigns.",
                "The Rosetta Stone was discovered during Napoleon's Egyptian campaign, which eventually led to the deciphering of hieroglyphs."
            ]
        },
        currentEvents: [
            { es: "Nuevos estudios sobre Napole\u00f3n revelan detalles desconocidos de su vida.", en: "New studies about Napoleon reveal unknown details of his life." },
            { es: "Los museos napole\u00f3nicos modernizan sus colecciones con tecnolog\u00eda digital.", en: "Napoleonic museums modernize their collections with digital technology." },
            { es: "Pa\u00edses latinoamericanos celebran el bicentenario de su independencia.", en: "Latin American countries celebrate the bicentennial of their independence." }
        ],
        vocabulary: [
            {
                word: "quiero", partOfSpeech: "verb", meaning: "I want / I love (from querer)",
                example: { es: "Yo quiero aprender.", en: "I want to learn." },
                homonyms: [],
                synonyms: [{ word: "deseo", meaning: "I wish" }, { word: "anhelo", meaning: "I long for" }]
            },
            {
                word: "aprender", partOfSpeech: "verb", meaning: "to learn",
                example: { es: "Quiero aprender espa\u00f1ol.", en: "I want to learn Spanish." },
                homonyms: [],
                synonyms: [{ word: "estudiar", meaning: "to study" }, { word: "instruirse", meaning: "to educate oneself" }]
            },
            {
                word: "bailar", partOfSpeech: "verb", meaning: "to dance",
                example: { es: "Ellos quieren bailar.", en: "They want to dance." },
                homonyms: [],
                synonyms: [{ word: "danzar", meaning: "to dance (formal)" }]
            },
            {
                word: "ayuda", partOfSpeech: "noun (f)", meaning: "help",
                example: { es: "Necesito ayuda.", en: "I need help." },
                homonyms: [{ word: "ayuda", meaning: "helps (verb)", example: "\u00c9l me ayuda. (He helps me.)" }],
                synonyms: [{ word: "socorro", meaning: "assistance" }, { word: "apoyo", meaning: "support" }]
            }
        ],
        artHistory: {
            period: "El Surrealismo Espa\u00f1ol (1920\u20131960)",
            periodEn: "Spanish Surrealism (1920\u20131960)",
            context: "El surrealismo espa\u00f1ol produjo dos de los artistas m\u00e1s famosos del siglo XX: Salvador Dal\u00ed y Joan Mir\u00f3. Sus obras exploraban los sue\u00f1os, el subconsciente y la imaginaci\u00f3n sin l\u00edmites.",
            contextEn: "Spanish Surrealism produced two of the most famous artists of the 20th century: Salvador Dal\u00ed and Joan Mir\u00f3. Their works explored dreams, the subconscious, and limitless imagination.",
            artworks: [
                {
                    title: "La persistencia de la memoria",
                    titleEn: "The Persistence of Memory",
                    artist: "Salvador Dal\u00ed",
                    year: 1931,
                    image: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
                    descEs: "Los famosos 'relojes blandos' de Dal\u00ed representan la fluidez del tiempo en los sue\u00f1os. Es una de las obras m\u00e1s reconocibles del arte moderno.",
                    descEn: "Dal\u00ed's famous 'soft watches' represent the fluidity of time in dreams. It is one of the most recognizable works of modern art."
                },
                {
                    title: "El gran masturbador",
                    titleEn: "The Great Masturbator",
                    artist: "Salvador Dal\u00ed",
                    year: 1929,
                    image: "https://upload.wikimedia.org/wikipedia/en/3/3c/The_Great_Masturbator.jpg",
                    descEs: "Una obra provocadora que explora temas de deseo y ansiedad. La figura central es una autorrepresentaci\u00f3n distorsionada de Dal\u00ed.",
                    descEn: "A provocative work exploring themes of desire and anxiety. The central figure is a distorted self-representation of Dal\u00ed."
                }
            ],
            vocab: [
                { word: "el sue\u00f1o", meaning: "the dream" },
                { word: "el reloj", meaning: "the clock/watch" },
                { word: "la imaginaci\u00f3n", meaning: "the imagination" },
                { word: "el subconsciente", meaning: "the subconscious" },
                { word: "el artista", meaning: "the artist" },
                { word: "blando", meaning: "soft" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Yo ___ aprender espa\u00f1ol.", answer: "quiero", options: ["quiero", "quieres", "quiere", "queremos"] },
            { type: "fill", prompt: "Nosotros ___ pizza.", answer: "queremos", options: ["quer\u00e9is", "quiero", "queremos", "quieren"] },
            { type: "fill", prompt: "Ellos ___ bailar.", answer: "quieren", options: ["quiere", "queremos", "quieren", "quer\u00e9is"] },
            { type: "translate", en: "I love you a lot.", answer: "Te quiero mucho.", accept: ["te quiero mucho", "te amo mucho"] },
            { type: "translate", en: "Can I help you?", answer: "\u00bfPuedo ayudarte?", accept: ["puedo ayudarte", "\u00bfpuedo ayudarte?", "puedo ayudarle"] },
            { type: "history", fr: "Napole\u00f3n invadi\u00f3 Espa\u00f1a en 1808.", answer: "Napoleon invaded Spain in 1808.", options: ["Napoleon invaded Spain in 1808.", "Napoleon invaded Spain in 1789.", "Napoleon never invaded Spain.", "Napoleon invaded Spain in 1848."] },
            { type: "fill", prompt: "\u00bfT\u00fa ___ ayudarme?", answer: "puedes", options: ["puedes", "puedo", "pueden", "podemos"] },
            { type: "fill", prompt: "Yo ___ ayuda.", answer: "necesito", options: ["necesito", "necesitas", "necesitan", "necesitamos"] },
            { type: "translate", en: "I prefer tea.", answer: "Yo prefiero t\u00e9.", accept: ["yo prefiero t\u00e9", "prefiero te", "yo prefiero te"] },
            { type: "history", fr: "Napole\u00f3n vendi\u00f3 Luisiana a Estados Unidos por 15 millones de d\u00f3lares.", answer: "Napoleon sold Louisiana to the US for $15 million.", options: ["Napoleon sold Louisiana to the US for $15 million.", "Napoleon gave Louisiana to Spain.", "Napoleon sold Louisiana for $1 billion.", "Napoleon kept Louisiana forever."] }
        ]
    },

    // ===== LESSON 6: Saber / Conocer =====
    {
        id: 6,
        title: "Saber & Conocer \u2014 To Know",
        desc: "Two ways to say 'to know' in Spanish — facts vs familiarity.",
        spanishFocus: {
            verb: "saber",
            conjugation: {
                "yo": "s\u00e9",
                "t\u00fa": "sabes",
                "el/ella": "sabe",
                "nosotros": "sabemos",
                "vosotros": "sab\u00e9is",
                "ellos/ellas": "saben"
            },
            pattern: "Saber = facts/skills | Conocer = people/places",
            examples: [
                { es: "Yo s\u00e9 la respuesta.", en: "I know the answer." },
                { es: "\u00bfSabes nadar?", en: "Do you know how to swim?" },
                { es: "Ella sabe cocinar muy bien.", en: "She knows how to cook very well." },
                { es: "Yo conozco a Mar\u00eda.", en: "I know Mar\u00eda. (I'm acquainted with her)" },
                { es: "\u00bfConoces Madrid?", en: "Do you know Madrid? (Have you been there?)" },
                { es: "Ellos conocen la verdad.", en: "They know the truth. (They are aware of it)" }
            ],
            tips: "Saber = knowing facts, information, or how to do something. Conocer = being familiar with people, places, or things. 'S\u00e9 hablar espa\u00f1ol' (I know how to speak Spanish) vs 'Conozco Espa\u00f1a' (I know/am familiar with Spain).",
            homonyms: [{ word: "s\u00e9", meaning: "imperative of ser (be!)", example: "\u00a1S\u00e9 fuerte! (Be strong!)" }],
            synonyms: [{ word: "entender", meaning: "to understand" }, { word: "comprender", meaning: "to comprehend" }],
            extraVerbs: [
                {
                    verb: "conocer", meaning: "to know (be familiar with)",
                    conjugation: { "yo": "conozco", "t\u00fa": "conoces", "el/ella": "conoce", "nosotros": "conocemos", "vosotros": "conoc\u00e9is", "ellos/ellas": "conocen" },
                    examples: [{ es: "Conozco un buen restaurante.", en: "I know a good restaurant." }, { es: "\u00bfConoces a mi hermano?", en: "Do you know my brother?" }],
                    homonyms: [],
                    synonyms: [{ word: "reconocer", meaning: "to recognize" }, { word: "distinguir", meaning: "to distinguish" }]
                },
                {
                    verb: "pensar", meaning: "to think",
                    conjugation: { "yo": "pienso", "t\u00fa": "piensas", "el/ella": "piensa", "nosotros": "pensamos", "vosotros": "pens\u00e1is", "ellos/ellas": "piensan" },
                    examples: [{ es: "\u00bfQu\u00e9 piensas?", en: "What do you think?" }, { es: "Pienso que tienes raz\u00f3n.", en: "I think you're right." }],
                    homonyms: [],
                    synonyms: [{ word: "creer", meaning: "to believe" }, { word: "opinar", meaning: "to opine" }]
                },
                {
                    verb: "recordar", meaning: "to remember",
                    conjugation: { "yo": "recuerdo", "t\u00fa": "recuerdas", "el/ella": "recuerda", "nosotros": "recordamos", "vosotros": "record\u00e1is", "ellos/ellas": "recuerdan" },
                    examples: [{ es: "\u00bfRecuerdas eso?", en: "Do you remember that?" }, { es: "No recuerdo su nombre.", en: "I don't remember his name." }],
                    homonyms: [],
                    synonyms: [{ word: "acordarse de", meaning: "to remember" }, { word: "memorizar", meaning: "to memorize" }]
                }
            ]
        },
        history: {
            period: "Ancient Greece (500 BCE)",
            fr: "La antigua Grecia fue la cuna de la democracia, la filosof\u00eda y los Juegos Ol\u00edmpicos. S\u00f3crates, Plat\u00f3n y Arist\u00f3teles sentaron las bases del pensamiento occidental. Atenas fue el centro de la cultura y el conocimiento.",
            en: "Ancient Greece was the cradle of democracy, philosophy, and the Olympic Games. Socrates, Plato, and Aristotle laid the foundations of Western thought. Athens was the center of culture and knowledge.",
            vocab: [
                { word: "la cuna", meaning: "the cradle" },
                { word: "la democracia", meaning: "the democracy" },
                { word: "la filosof\u00eda", meaning: "the philosophy" },
                { word: "el pensamiento", meaning: "the thought/thinking" },
                { word: "el conocimiento", meaning: "the knowledge" }
            ],
            funFact: "The ancient Olympic athletes competed completely naked \u2014 the word 'gymnasium' comes from the Greek 'gymnos' meaning 'naked.'",
            facts: [
                "Athenian democracy only allowed male citizens to vote \u2014 women, slaves, and foreigners were excluded.",
                "Ancient Greeks invented theater, performing tragedies and comedies in massive open-air amphitheaters.",
                "The Hippocratic Oath, still used by doctors today, was created in Ancient Greece around 400 BCE.",
                "Alexander the Great, tutored by Aristotle, created one of the largest empires in history by age 30.",
                "The Greeks calculated the circumference of the Earth with remarkable accuracy over 2,000 years ago.",
                "The marathon race commemorates a Greek soldier who ran from Marathon to Athens (about 25 miles) to announce a military victory."
            ]
        },
        currentEvents: [
            { es: "Grecia descubre nuevos tesoros arqueol\u00f3gicos en el fondo del mar.", en: "Greece discovers new archaeological treasures on the sea floor." },
            { es: "La filosof\u00eda griega experimenta un renacimiento en las universidades modernas.", en: "Greek philosophy experiences a renaissance in modern universities." },
            { es: "Los Juegos Ol\u00edmpicos contin\u00faan la tradici\u00f3n que comenz\u00f3 en Grecia hace miles de a\u00f1os.", en: "The Olympic Games continue the tradition that began in Greece thousands of years ago." }
        ],
        vocabulary: [
            {
                word: "s\u00e9", partOfSpeech: "verb", meaning: "I know (from saber)",
                example: { es: "Yo s\u00e9 la respuesta.", en: "I know the answer." },
                homonyms: [{ word: "s\u00e9", meaning: "be! (imperative of ser)", example: "\u00a1S\u00e9 valiente! (Be brave!)" }],
                synonyms: [{ word: "entiendo", meaning: "I understand" }]
            },
            {
                word: "conozco", partOfSpeech: "verb", meaning: "I know / am familiar with (from conocer)",
                example: { es: "Conozco Madrid.", en: "I know Madrid." },
                homonyms: [],
                synonyms: [{ word: "reconozco", meaning: "I recognize" }]
            },
            {
                word: "nadar", partOfSpeech: "verb", meaning: "to swim",
                example: { es: "\u00bfSabes nadar?", en: "Do you know how to swim?" },
                homonyms: [],
                synonyms: [{ word: "bucear", meaning: "to dive" }]
            },
            {
                word: "verdad", partOfSpeech: "noun (f)", meaning: "truth",
                example: { es: "Conocen la verdad.", en: "They know the truth." },
                homonyms: [],
                synonyms: [{ word: "realidad", meaning: "reality" }, { word: "certeza", meaning: "certainty" }]
            }
        ],
        artHistory: {
            period: "El Cubismo de Picasso (1907\u20131930)",
            periodEn: "Picasso's Cubism (1907\u20131930)",
            context: "Pablo Picasso, nacido en M\u00e1laga, revolucion\u00f3 el arte con el cubismo. Esta t\u00e9cnica fragmentaba los objetos en formas geom\u00e9tricas, mostrando m\u00faltiples perspectivas al mismo tiempo.",
            contextEn: "Pablo Picasso, born in M\u00e1laga, revolutionized art with Cubism. This technique fragmented objects into geometric shapes, showing multiple perspectives at the same time.",
            artworks: [
                {
                    title: "Guernica",
                    titleEn: "Guernica",
                    artist: "Pablo Picasso",
                    year: 1937,
                    image: "https://upload.wikimedia.org/wikipedia/en/7/74/Guernica.jpg",
                    descEs: "Una denuncia del bombardeo de la ciudad vasca de Guernica durante la Guerra Civil Espa\u00f1ola. Es un s\u00edmbolo universal contra la guerra.",
                    descEn: "A denunciation of the bombing of the Basque city of Guernica during the Spanish Civil War. It is a universal symbol against war."
                },
                {
                    title: "Las se\u00f1oritas de Avignon",
                    titleEn: "Les Demoiselles d'Avignon",
                    artist: "Pablo Picasso",
                    year: 1907,
                    image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Les_Demoiselles_d%27Avignon.jpg",
                    descEs: "Considerada la obra que inici\u00f3 el cubismo. Las cinco figuras femeninas est\u00e1n representadas con formas angulares y fragmentadas.",
                    descEn: "Considered the work that started Cubism. The five female figures are depicted with angular and fragmented forms."
                }
            ],
            vocab: [
                { word: "la forma", meaning: "the shape/form" },
                { word: "la perspectiva", meaning: "the perspective" },
                { word: "geom\u00e9trico", meaning: "geometric" },
                { word: "la guerra civil", meaning: "the civil war" },
                { word: "el bombardeo", meaning: "the bombing" },
                { word: "fragmentar", meaning: "to fragment" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Yo ___ la respuesta.", answer: "s\u00e9", options: ["s\u00e9", "sabes", "sabe", "sabemos"] },
            { type: "fill", prompt: "\u00bfT\u00fa ___ nadar?", answer: "sabes", options: ["sabes", "s\u00e9", "saben", "sabemos"] },
            { type: "fill", prompt: "Yo ___ a Mar\u00eda.", answer: "conozco", options: ["conozco", "conoces", "conoce", "conocemos"] },
            { type: "translate", en: "She knows how to cook.", answer: "Ella sabe cocinar.", accept: ["ella sabe cocinar", "sabe cocinar"] },
            { type: "translate", en: "Do you know Madrid?", answer: "\u00bfConoces Madrid?", accept: ["conoces madrid", "\u00bfconoces madrid?"] },
            { type: "history", fr: "La antigua Grecia fue la cuna de la democracia.", answer: "Ancient Greece was the cradle of democracy.", options: ["Ancient Greece was the cradle of democracy.", "Ancient Rome was the cradle of democracy.", "Ancient Egypt was the cradle of democracy.", "Ancient China was the cradle of democracy."] },
            { type: "fill", prompt: "\u00bfQu\u00e9 ___?", answer: "piensas", options: ["piensas", "pienso", "piensan", "pensamos"] },
            { type: "fill", prompt: "No ___ su nombre.", answer: "recuerdo", options: ["recuerdo", "recuerdas", "recuerdan", "recordamos"] },
            { type: "translate", en: "I think you're right.", answer: "Pienso que tienes raz\u00f3n.", accept: ["pienso que tienes raz\u00f3n", "pienso que tienes razon", "creo que tienes raz\u00f3n"] },
            { type: "history", fr: "Los griegos calcularon la circunferencia de la Tierra con gran precisi\u00f3n.", answer: "The Greeks calculated Earth's circumference with remarkable accuracy.", options: ["The Greeks calculated Earth's circumference with remarkable accuracy.", "The Greeks never studied astronomy.", "The Greeks thought the Earth was flat.", "The Greeks believed the Earth was a cube."] }
        ]
    },

    // ===== LESSON 7: Hablar =====
    {
        id: 7,
        title: "Hablar \u2014 To Speak",
        desc: "Communication, regular -AR verbs, and expressing yourself.",
        spanishFocus: {
            verb: "hablar",
            conjugation: {
                "yo": "hablo",
                "t\u00fa": "hablas",
                "el/ella": "habla",
                "nosotros": "hablamos",
                "vosotros": "habl\u00e1is",
                "ellos/ellas": "hablan"
            },
            pattern: "Subject + hablar + language / con + person",
            examples: [
                { es: "Yo hablo espa\u00f1ol.", en: "I speak Spanish." },
                { es: "T\u00fa hablas muy r\u00e1pido.", en: "You speak very fast." },
                { es: "Ella habla tres idiomas.", en: "She speaks three languages." },
                { es: "Nosotros hablamos de pol\u00edtica.", en: "We talk about politics." },
                { es: "\u00bfHabl\u00e1is ingl\u00e9s?", en: "Do you all speak English?" },
                { es: "Ellos hablan con el profesor.", en: "They talk with the professor." }
            ],
            tips: "Hablar is a regular -AR verb \u2014 the most common verb type in Spanish. Learn this pattern and you can conjugate thousands of verbs: -o, -as, -a, -amos, -\u00e1is, -an.",
            homonyms: [],
            synonyms: [{ word: "decir", meaning: "to say/tell" }, { word: "conversar", meaning: "to converse" }],
            extraVerbs: [
                {
                    verb: "escuchar", meaning: "to listen",
                    conjugation: { "yo": "escucho", "t\u00fa": "escuchas", "el/ella": "escucha", "nosotros": "escuchamos", "vosotros": "escuch\u00e1is", "ellos/ellas": "escuchan" },
                    examples: [{ es: "Yo escucho m\u00fasica.", en: "I listen to music." }, { es: "\u00a1Escucha!", en: "Listen!" }],
                    homonyms: [],
                    synonyms: [{ word: "o\u00edr", meaning: "to hear" }, { word: "atender", meaning: "to pay attention" }]
                },
                {
                    verb: "leer", meaning: "to read",
                    conjugation: { "yo": "leo", "t\u00fa": "lees", "el/ella": "lee", "nosotros": "leemos", "vosotros": "le\u00e9is", "ellos/ellas": "leen" },
                    examples: [{ es: "Yo leo un libro.", en: "I read a book." }, { es: "Ella lee el peri\u00f3dico.", en: "She reads the newspaper." }],
                    homonyms: [],
                    synonyms: [{ word: "estudiar", meaning: "to study" }, { word: "ojear", meaning: "to browse/skim" }]
                },
                {
                    verb: "escribir", meaning: "to write",
                    conjugation: { "yo": "escribo", "t\u00fa": "escribes", "el/ella": "escribe", "nosotros": "escribimos", "vosotros": "escrib\u00eds", "ellos/ellas": "escriben" },
                    examples: [{ es: "Yo escribo una carta.", en: "I write a letter." }, { es: "Ellos escriben un ensayo.", en: "They write an essay." }],
                    homonyms: [],
                    synonyms: [{ word: "redactar", meaning: "to draft/compose" }, { word: "anotar", meaning: "to note down" }]
                }
            ]
        },
        history: {
            period: "Moon Landing (1969)",
            fr: "El 20 de julio de 1969, Neil Armstrong camin\u00f3 sobre la Luna. La misi\u00f3n Apollo 11 fue un logro extraordinario de la humanidad. M\u00e1s de 600 millones de personas vieron el evento por televisi\u00f3n.",
            en: "On July 20, 1969, Neil Armstrong walked on the Moon. The Apollo 11 mission was an extraordinary achievement for humanity. More than 600 million people watched the event on television.",
            vocab: [
                { word: "la Luna", meaning: "the Moon" },
                { word: "caminar", meaning: "to walk" },
                { word: "un logro", meaning: "an achievement" },
                { word: "la humanidad", meaning: "humanity" },
                { word: "la televisi\u00f3n", meaning: "television" }
            ],
            funFact: "The computers used for the Apollo 11 mission had less processing power than a modern smartphone.",
            facts: [
                "Buzz Aldrin took communion on the Moon, making it the first religious ceremony in space.",
                "The American flag planted on the Moon has since been bleached completely white by solar radiation.",
                "Neil Armstrong's famous first words were actually misquoted \u2014 he said 'That's one small step for a man,' but the 'a' was lost in transmission.",
                "The Apollo astronauts had to go through customs when they returned to Earth, declaring 'Moon rocks and Moon dust.'",
                "The Moon landing was broadcast live on television to an estimated 600 million viewers worldwide.",
                "The footprints left on the Moon will last for millions of years because there's no wind or rain to erode them."
            ]
        },
        currentEvents: [
            { es: "La NASA y SpaceX preparan nuevas misiones a la Luna y Marte.", en: "NASA and SpaceX prepare new missions to the Moon and Mars." },
            { es: "China y Europa avanzan en sus programas espaciales independientes.", en: "China and Europe advance in their independent space programs." },
            { es: "El turismo espacial se convierte en realidad con vuelos comerciales.", en: "Space tourism becomes reality with commercial flights." }
        ],
        vocabulary: [
            {
                word: "hablo", partOfSpeech: "verb", meaning: "I speak (from hablar)",
                example: { es: "Yo hablo espa\u00f1ol.", en: "I speak Spanish." },
                homonyms: [],
                synonyms: [{ word: "digo", meaning: "I say" }, { word: "converso", meaning: "I converse" }]
            },
            {
                word: "idioma", partOfSpeech: "noun (m)", meaning: "language",
                example: { es: "Habla tres idiomas.", en: "She speaks three languages." },
                homonyms: [],
                synonyms: [{ word: "lengua", meaning: "language/tongue" }]
            },
            {
                word: "libro", partOfSpeech: "noun (m)", meaning: "book",
                example: { es: "Yo leo un libro.", en: "I read a book." },
                homonyms: [],
                synonyms: [{ word: "obra", meaning: "work" }, { word: "texto", meaning: "text" }]
            },
            {
                word: "carta", partOfSpeech: "noun (f)", meaning: "letter",
                example: { es: "Escribo una carta.", en: "I write a letter." },
                homonyms: [{ word: "carta", meaning: "menu (at a restaurant)", example: "La carta del restaurante. (The restaurant menu.)" }],
                synonyms: [{ word: "mensaje", meaning: "message" }, { word: "ep\u00edstola", meaning: "epistle" }]
            }
        ],
        artHistory: {
            period: "El Arte Contempor\u00e1neo Espa\u00f1ol (1960\u2013presente)",
            periodEn: "Spanish Contemporary Art (1960\u2013present)",
            context: "El arte contempor\u00e1neo espa\u00f1ol est\u00e1 marcado por la diversidad de estilos y la experimentaci\u00f3n. Artistas como Antoni T\u00e0pies exploraron el arte abstracto usando materiales no convencionales.",
            contextEn: "Spanish contemporary art is marked by diversity of styles and experimentation. Artists like Antoni T\u00e0pies explored abstract art using unconventional materials.",
            artworks: [
                {
                    title: "Gran pintura gris",
                    titleEn: "Large Grey Painting",
                    artist: "Antoni T\u00e0pies",
                    year: 1955,
                    image: "https://upload.wikimedia.org/wikipedia/en/4/40/Tapies_-_Grey_Ochre.jpg",
                    descEs: "T\u00e0pies usaba arena, polvo de m\u00e1rmol y objetos cotidianos en sus pinturas, creando texturas \u00fanicas que desafiaban las ideas tradicionales del arte.",
                    descEn: "T\u00e0pies used sand, marble dust, and everyday objects in his paintings, creating unique textures that challenged traditional ideas of art."
                }
            ],
            vocab: [
                { word: "contempor\u00e1neo", meaning: "contemporary" },
                { word: "abstracto", meaning: "abstract" },
                { word: "la experimentaci\u00f3n", meaning: "experimentation" },
                { word: "la textura", meaning: "texture" },
                { word: "el material", meaning: "the material" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Yo ___ espa\u00f1ol.", answer: "hablo", options: ["hablo", "hablas", "habla", "hablamos"] },
            { type: "fill", prompt: "Ella ___ tres idiomas.", answer: "habla", options: ["habla", "hablo", "hablan", "hablamos"] },
            { type: "fill", prompt: "Nosotros ___ de pol\u00edtica.", answer: "hablamos", options: ["habl\u00e1is", "hablo", "hablamos", "hablan"] },
            { type: "translate", en: "I listen to music.", answer: "Yo escucho m\u00fasica.", accept: ["yo escucho m\u00fasica", "escucho musica", "yo escucho musica"] },
            { type: "translate", en: "I write a letter.", answer: "Yo escribo una carta.", accept: ["yo escribo una carta", "escribo una carta"] },
            { type: "history", fr: "Neil Armstrong camin\u00f3 sobre la Luna en 1969.", answer: "Armstrong walked on the Moon in 1969.", options: ["Armstrong walked on the Moon in 1969.", "Armstrong walked on Mars in 1969.", "Armstrong walked on the Moon in 1959.", "Armstrong never went to space."] },
            { type: "fill", prompt: "Yo ___ m\u00fasica.", answer: "escucho", options: ["escucho", "escuchas", "escuchan", "escuchamos"] },
            { type: "fill", prompt: "Yo ___ un libro.", answer: "leo", options: ["leo", "lees", "leen", "leemos"] },
            { type: "translate", en: "She reads the newspaper.", answer: "Ella lee el peri\u00f3dico.", accept: ["ella lee el peri\u00f3dico", "ella lee el periodico"] },
            { type: "history", fr: "M\u00e1s de 600 millones de personas vieron el alunizaje por televisi\u00f3n.", answer: "Over 600 million people watched the Moon landing on TV.", options: ["Over 600 million people watched the Moon landing on TV.", "Only 1,000 people watched the landing.", "Nobody watched the Moon landing.", "The landing was never televised."] }
        ]
    },

    // ===== LESSON 8: Comer =====
    {
        id: 8,
        title: "Comer \u2014 To Eat",
        desc: "Food, regular -ER verbs, and Spanish cuisine vocabulary.",
        spanishFocus: {
            verb: "comer",
            conjugation: {
                "yo": "como",
                "t\u00fa": "comes",
                "el/ella": "come",
                "nosotros": "comemos",
                "vosotros": "com\u00e9is",
                "ellos/ellas": "comen"
            },
            pattern: "Subject + comer + food / adverb",
            examples: [
                { es: "Yo como paella.", en: "I eat paella." },
                { es: "T\u00fa comes demasiado r\u00e1pido.", en: "You eat too fast." },
                { es: "Ella come frutas todos los d\u00edas.", en: "She eats fruit every day." },
                { es: "Nosotros comemos a las dos.", en: "We eat at two o'clock." },
                { es: "\u00bfCom\u00e9is en casa?", en: "Do you all eat at home?" },
                { es: "Ellos comen tapas.", en: "They eat tapas." }
            ],
            tips: "Comer is a regular -ER verb. Pattern: -o, -es, -e, -emos, -\u00e9is, -en. In Spain, lunch (la comida) is the biggest meal, usually around 2 PM.",
            homonyms: [],
            synonyms: [{ word: "alimentarse", meaning: "to nourish oneself" }, { word: "degustar", meaning: "to taste/savor" }],
            extraVerbs: [
                {
                    verb: "beber", meaning: "to drink",
                    conjugation: { "yo": "bebo", "t\u00fa": "bebes", "el/ella": "bebe", "nosotros": "bebemos", "vosotros": "beb\u00e9is", "ellos/ellas": "beben" },
                    examples: [{ es: "Yo bebo agua.", en: "I drink water." }, { es: "Ella bebe jugo de naranja.", en: "She drinks orange juice." }],
                    homonyms: [],
                    synonyms: [{ word: "tomar", meaning: "to have/drink" }, { word: "ingerir", meaning: "to ingest" }]
                },
                {
                    verb: "cocinar", meaning: "to cook",
                    conjugation: { "yo": "cocino", "t\u00fa": "cocinas", "el/ella": "cocina", "nosotros": "cocinamos", "vosotros": "cocin\u00e1is", "ellos/ellas": "cocinan" },
                    examples: [{ es: "Yo cocino los fines de semana.", en: "I cook on weekends." }, { es: "Ella cocina muy bien.", en: "She cooks very well." }],
                    homonyms: [{ word: "cocina", meaning: "kitchen (noun)", example: "La cocina est\u00e1 limpia. (The kitchen is clean.)" }],
                    synonyms: [{ word: "preparar", meaning: "to prepare" }, { word: "guisar", meaning: "to stew/cook" }]
                },
                {
                    verb: "pedir", meaning: "to ask for / to order",
                    conjugation: { "yo": "pido", "t\u00fa": "pides", "el/ella": "pide", "nosotros": "pedimos", "vosotros": "ped\u00eds", "ellos/ellas": "piden" },
                    examples: [{ es: "Yo pido la cuenta.", en: "I ask for the check." }, { es: "Ella pide un caf\u00e9.", en: "She orders a coffee." }],
                    homonyms: [],
                    synonyms: [{ word: "solicitar", meaning: "to request" }, { word: "ordenar", meaning: "to order" }]
                }
            ]
        },
        history: {
            period: "The Enlightenment (1685\u20131815)",
            fr: "La Ilustraci\u00f3n fue una \u00e9poca de raz\u00f3n y ciencia. Los fil\u00f3sofos como Voltaire y Rousseau cuestionaron la autoridad tradicional. Estas ideas influyeron en las revoluciones americana y francesa.",
            en: "The Enlightenment was an era of reason and science. Philosophers like Voltaire and Rousseau questioned traditional authority. These ideas influenced the American and French revolutions.",
            vocab: [
                { word: "la Ilustraci\u00f3n", meaning: "the Enlightenment" },
                { word: "la raz\u00f3n", meaning: "reason" },
                { word: "cuestionar", meaning: "to question" },
                { word: "la autoridad", meaning: "the authority" },
                { word: "influir", meaning: "to influence" }
            ],
            funFact: "Voltaire reportedly drank 40 cups of coffee a day and lived to be 83 years old.",
            facts: [
                "The Enlightenment promoted reason, science, and individual rights over tradition and religious authority.",
                "The Encyclopedia, edited by Diderot, was an attempt to compile all human knowledge into one work.",
                "Benjamin Franklin was a key figure connecting the American and European Enlightenments.",
                "The concept of separation of church and state emerged from Enlightenment thinking.",
                "Many Enlightenment thinkers were persecuted \u2014 Voltaire was imprisoned in the Bastille twice.",
                "The Enlightenment laid the groundwork for modern human rights, democracy, and scientific method."
            ]
        },
        currentEvents: [
            { es: "La gastronom\u00eda espa\u00f1ola gana reconocimiento mundial con nuevos restaurantes estrella Michelin.", en: "Spanish gastronomy gains worldwide recognition with new Michelin-starred restaurants." },
            { es: "La dieta mediterr\u00e1nea es reconocida como una de las m\u00e1s saludables del mundo.", en: "The Mediterranean diet is recognized as one of the healthiest in the world." },
            { es: "Las tapas espa\u00f1olas conquistan restaurantes en todo el mundo.", en: "Spanish tapas conquer restaurants around the world." }
        ],
        vocabulary: [
            {
                word: "como", partOfSpeech: "verb", meaning: "I eat (from comer)",
                example: { es: "Yo como paella.", en: "I eat paella." },
                homonyms: [{ word: "como", meaning: "like / as", example: "Es grande como un elefante. (It's big like an elephant.)" }],
                synonyms: [{ word: "devoro", meaning: "I devour" }]
            },
            {
                word: "paella", partOfSpeech: "noun (f)", meaning: "paella (rice dish)",
                example: { es: "Como paella los domingos.", en: "I eat paella on Sundays." },
                homonyms: [],
                synonyms: []
            },
            {
                word: "agua", partOfSpeech: "noun (f)", meaning: "water",
                example: { es: "Bebo agua.", en: "I drink water." },
                homonyms: [],
                synonyms: [{ word: "l\u00edquido", meaning: "liquid" }]
            },
            {
                word: "cuenta", partOfSpeech: "noun (f)", meaning: "check / bill / account",
                example: { es: "Pido la cuenta.", en: "I ask for the check." },
                homonyms: [{ word: "cuenta", meaning: "counts (verb)", example: "\u00c9l cuenta hasta diez. (He counts to ten.)" }],
                synonyms: [{ word: "factura", meaning: "invoice" }]
            }
        ],
        artHistory: {
            period: "El Muralismo Espa\u00f1ol (1920\u20131940)",
            periodEn: "Spanish Muralism (1920\u20131940)",
            context: "Aunque el muralismo se asocia m\u00e1s con M\u00e9xico, artistas espa\u00f1oles como Josep Maria Sert crearon murales monumentales que decoraban edificios p\u00fablicos e instituciones internacionales.",
            contextEn: "Although muralism is more associated with Mexico, Spanish artists like Josep Maria Sert created monumental murals that decorated public buildings and international institutions.",
            artworks: [
                {
                    title: "Murales del Rockefeller Center",
                    titleEn: "Rockefeller Center Murals",
                    artist: "Josep Maria Sert",
                    year: 1937,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Rockefeller_Center_MAM_jbread_lobby.jpg/400px-Rockefeller_Center_MAM_jhead_lobby.jpg",
                    descEs: "Sert pint\u00f3 enormes murales en el Rockefeller Center de Nueva York, reemplazando la obra destruida de Diego Rivera.",
                    descEn: "Sert painted enormous murals at New York's Rockefeller Center, replacing the destroyed work of Diego Rivera."
                }
            ],
            vocab: [
                { word: "el mural", meaning: "the mural" },
                { word: "monumental", meaning: "monumental" },
                { word: "decorar", meaning: "to decorate" },
                { word: "el edificio", meaning: "the building" },
                { word: "p\u00fablico", meaning: "public" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Yo ___ paella.", answer: "como", options: ["como", "comes", "come", "comemos"] },
            { type: "fill", prompt: "Nosotros ___ a las dos.", answer: "comemos", options: ["com\u00e9is", "como", "comemos", "comen"] },
            { type: "fill", prompt: "Ellos ___ tapas.", answer: "comen", options: ["come", "comemos", "comen", "com\u00e9is"] },
            { type: "translate", en: "I drink water.", answer: "Yo bebo agua.", accept: ["yo bebo agua", "bebo agua"] },
            { type: "translate", en: "She cooks very well.", answer: "Ella cocina muy bien.", accept: ["ella cocina muy bien", "cocina muy bien"] },
            { type: "history", fr: "La Ilustraci\u00f3n promov\u00eda la raz\u00f3n y la ciencia.", answer: "The Enlightenment promoted reason and science.", options: ["The Enlightenment promoted reason and science.", "The Enlightenment rejected science.", "The Enlightenment promoted war.", "The Enlightenment was about art only."] },
            { type: "fill", prompt: "Yo ___ agua.", answer: "bebo", options: ["bebo", "bebes", "beben", "bebemos"] },
            { type: "fill", prompt: "Yo ___ la cuenta.", answer: "pido", options: ["pido", "pides", "piden", "pedimos"] },
            { type: "translate", en: "I ask for the check.", answer: "Yo pido la cuenta.", accept: ["yo pido la cuenta", "pido la cuenta"] },
            { type: "history", fr: "Voltaire beb\u00eda 40 tazas de caf\u00e9 al d\u00eda.", answer: "Voltaire drank 40 cups of coffee a day.", options: ["Voltaire drank 40 cups of coffee a day.", "Voltaire never drank coffee.", "Voltaire drank only water.", "Voltaire hated coffee."] }
        ]
    },

    // ===== LESSON 9: Vivir =====
    {
        id: 9,
        title: "Vivir \u2014 To Live",
        desc: "Regular -IR verbs, talking about where you live and daily life.",
        spanishFocus: {
            verb: "vivir",
            conjugation: {
                "yo": "vivo",
                "t\u00fa": "vives",
                "el/ella": "vive",
                "nosotros": "vivimos",
                "vosotros": "viv\u00eds",
                "ellos/ellas": "viven"
            },
            pattern: "Subject + vivir + en + place",
            examples: [
                { es: "Yo vivo en Madrid.", en: "I live in Madrid." },
                { es: "T\u00fa vives con tu familia.", en: "You live with your family." },
                { es: "Ella vive en un apartamento.", en: "She lives in an apartment." },
                { es: "Nosotros vivimos bien.", en: "We live well." },
                { es: "\u00bfD\u00f3nde viv\u00eds?", en: "Where do you all live?" },
                { es: "Ellos viven en M\u00e9xico.", en: "They live in Mexico." }
            ],
            tips: "Vivir is a regular -IR verb. Pattern: -o, -es, -e, -imos, -\u00eds, -en. Notice -IR verbs are almost identical to -ER verbs except for nosotros (-imos vs -emos) and vosotros (-\u00eds vs -\u00e9is).",
            homonyms: [],
            synonyms: [{ word: "residir", meaning: "to reside" }, { word: "habitar", meaning: "to inhabit" }],
            extraVerbs: [
                {
                    verb: "abrir", meaning: "to open",
                    conjugation: { "yo": "abro", "t\u00fa": "abres", "el/ella": "abre", "nosotros": "abrimos", "vosotros": "abr\u00eds", "ellos/ellas": "abren" },
                    examples: [{ es: "Yo abro la puerta.", en: "I open the door." }, { es: "Ella abre el libro.", en: "She opens the book." }],
                    homonyms: [],
                    synonyms: [{ word: "destaper", meaning: "to uncover" }]
                },
                {
                    verb: "compartir", meaning: "to share",
                    conjugation: { "yo": "comparto", "t\u00fa": "compartes", "el/ella": "comparte", "nosotros": "compartimos", "vosotros": "compart\u00eds", "ellos/ellas": "comparten" },
                    examples: [{ es: "Yo comparto mi comida.", en: "I share my food." }, { es: "Ellos comparten un piso.", en: "They share an apartment." }],
                    homonyms: [],
                    synonyms: [{ word: "repartir", meaning: "to distribute" }, { word: "dividir", meaning: "to divide" }]
                },
                {
                    verb: "decidir", meaning: "to decide",
                    conjugation: { "yo": "decido", "t\u00fa": "decides", "el/ella": "decide", "nosotros": "decidimos", "vosotros": "decid\u00eds", "ellos/ellas": "deciden" },
                    examples: [{ es: "Yo decido r\u00e1pido.", en: "I decide quickly." }, { es: "Nosotros decidimos juntos.", en: "We decide together." }],
                    homonyms: [],
                    synonyms: [{ word: "elegir", meaning: "to choose" }, { word: "determinar", meaning: "to determine" }]
                }
            ]
        },
        history: {
            period: "Medieval Europe (500\u20131500)",
            fr: "La Europa medieval fue una \u00e9poca de castillos, caballeros y la Iglesia cat\u00f3lica. La Reconquista espa\u00f1ola dur\u00f3 casi 800 a\u00f1os, hasta que los Reyes Cat\u00f3licos tomaron Granada en 1492.",
            en: "Medieval Europe was an era of castles, knights, and the Catholic Church. The Spanish Reconquista lasted nearly 800 years, until the Catholic Monarchs took Granada in 1492.",
            vocab: [
                { word: "el castillo", meaning: "the castle" },
                { word: "el caballero", meaning: "the knight" },
                { word: "la Iglesia", meaning: "the Church" },
                { word: "la Reconquista", meaning: "the Reconquest" },
                { word: "los Reyes Cat\u00f3licos", meaning: "the Catholic Monarchs" }
            ],
            funFact: "The Alhambra in Granada, the last Moorish palace in Spain, has running water systems that were more advanced than anything in Europe at the time.",
            facts: [
                "The Spanish Reconquista lasted from 711 to 1492 \u2014 nearly 800 years of conflict between Christian and Muslim kingdoms.",
                "During the Middle Ages, the Islamic civilization in Spain (Al-Andalus) was one of the most advanced in the world.",
                "The Black Death killed about one-third of Europe's population in the 14th century.",
                "Medieval Spanish cities like C\u00f3rdoba and Toledo were centers of learning where Christians, Muslims, and Jews coexisted.",
                "The Camino de Santiago pilgrimage route has been walked for over 1,000 years and is still popular today.",
                "Castilian Spanish became the dominant language during the Reconquista and evolved into modern Spanish."
            ]
        },
        currentEvents: [
            { es: "La Alhambra de Granada es el monumento m\u00e1s visitado de Espa\u00f1a.", en: "The Alhambra in Granada is Spain's most visited monument." },
            { es: "El Camino de Santiago atrae a peregrinos de todo el mundo.", en: "The Camino de Santiago attracts pilgrims from around the world." },
            { es: "Nuevas excavaciones revelan tesoros medievales en ciudades espa\u00f1olas.", en: "New excavations reveal medieval treasures in Spanish cities." }
        ],
        vocabulary: [
            {
                word: "vivo", partOfSpeech: "verb/adj", meaning: "I live (from vivir) / alive",
                example: { es: "Yo vivo en Madrid.", en: "I live in Madrid." },
                homonyms: [{ word: "vivo", meaning: "alive / vivid (adjective)", example: "El color es muy vivo. (The color is very vivid.)" }],
                synonyms: [{ word: "resido", meaning: "I reside" }]
            },
            {
                word: "familia", partOfSpeech: "noun (f)", meaning: "family",
                example: { es: "Vives con tu familia.", en: "You live with your family." },
                homonyms: [],
                synonyms: [{ word: "parientes", meaning: "relatives" }, { word: "hogar", meaning: "household" }]
            },
            {
                word: "puerta", partOfSpeech: "noun (f)", meaning: "door",
                example: { es: "Abro la puerta.", en: "I open the door." },
                homonyms: [],
                synonyms: [{ word: "entrada", meaning: "entrance" }, { word: "portal", meaning: "gateway" }]
            },
            {
                word: "piso", partOfSpeech: "noun (m)", meaning: "apartment / floor",
                example: { es: "Comparten un piso.", en: "They share an apartment." },
                homonyms: [{ word: "piso", meaning: "floor/ground", example: "El piso est\u00e1 mojado. (The floor is wet.)" }],
                synonyms: [{ word: "apartamento", meaning: "apartment" }, { word: "planta", meaning: "floor (level)" }]
            }
        ],
        artHistory: {
            period: "El Arte Mud\u00e9jar (1100\u20131600)",
            periodEn: "Mud\u00e9jar Art (1100\u20131600)",
            context: "El arte mud\u00e9jar es una fusi\u00f3n \u00fanica de estilos isl\u00e1micos y cristianos que solo existe en Espa\u00f1a. Representa la convivencia de culturas durante la Edad Media en la Pen\u00ednsula Ib\u00e9rica.",
            contextEn: "Mud\u00e9jar art is a unique fusion of Islamic and Christian styles that only exists in Spain. It represents the coexistence of cultures during the Middle Ages in the Iberian Peninsula.",
            artworks: [
                {
                    title: "La Alhambra de Granada",
                    titleEn: "The Alhambra of Granada",
                    artist: "Arquitectos nazar\u00edes",
                    year: 1370,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Patio_de_los_Leones_2014.jpg/400px-Patio_de_los_Leones_2014.jpg",
                    descEs: "El Patio de los Leones es una de las joyas de la arquitectura isl\u00e1mica en Espa\u00f1a. Sus 124 columnas de m\u00e1rmol blanco rodean una fuente central.",
                    descEn: "The Court of the Lions is one of the jewels of Islamic architecture in Spain. Its 124 white marble columns surround a central fountain."
                }
            ],
            vocab: [
                { word: "la fusi\u00f3n", meaning: "the fusion" },
                { word: "la convivencia", meaning: "coexistence" },
                { word: "la columna", meaning: "the column" },
                { word: "la fuente", meaning: "the fountain" },
                { word: "el m\u00e1rmol", meaning: "marble" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Yo ___ en Madrid.", answer: "vivo", options: ["vivo", "vives", "vive", "vivimos"] },
            { type: "fill", prompt: "Nosotros ___ bien.", answer: "vivimos", options: ["viv\u00eds", "vivo", "vivimos", "viven"] },
            { type: "fill", prompt: "Ellos ___ en M\u00e9xico.", answer: "viven", options: ["vive", "vivimos", "viven", "viv\u00eds"] },
            { type: "translate", en: "I open the door.", answer: "Yo abro la puerta.", accept: ["yo abro la puerta", "abro la puerta"] },
            { type: "translate", en: "I share my food.", answer: "Yo comparto mi comida.", accept: ["yo comparto mi comida", "comparto mi comida"] },
            { type: "history", fr: "La Reconquista dur\u00f3 casi 800 a\u00f1os.", answer: "The Reconquista lasted nearly 800 years.", options: ["The Reconquista lasted nearly 800 years.", "The Reconquista lasted 100 years.", "The Reconquista lasted 50 years.", "The Reconquista never happened."] },
            { type: "fill", prompt: "Yo ___ la puerta.", answer: "abro", options: ["abro", "abres", "abren", "abrimos"] },
            { type: "fill", prompt: "Ellos ___ un piso.", answer: "comparten", options: ["comparten", "comparto", "compartimos", "compartes"] },
            { type: "translate", en: "We decide together.", answer: "Nosotros decidimos juntos.", accept: ["nosotros decidimos juntos", "decidimos juntos"] },
            { type: "history", fr: "La Alhambra ten\u00eda sistemas de agua corriente m\u00e1s avanzados que en el resto de Europa.", answer: "The Alhambra had more advanced water systems than the rest of Europe.", options: ["The Alhambra had more advanced water systems than the rest of Europe.", "The Alhambra had no water.", "The Alhambra was built in modern times.", "The Alhambra was a military fort only."] }
        ]
    },

    // ===== LESSON 10: Decir =====
    {
        id: 10,
        title: "Decir \u2014 To Say / To Tell",
        desc: "Expressing thoughts, opinions, and reporting what others say.",
        spanishFocus: {
            verb: "decir",
            conjugation: {
                "yo": "digo",
                "t\u00fa": "dices",
                "el/ella": "dice",
                "nosotros": "decimos",
                "vosotros": "dec\u00eds",
                "ellos/ellas": "dicen"
            },
            pattern: "Subject + decir + que + clause / noun",
            examples: [
                { es: "Yo digo la verdad.", en: "I tell the truth." },
                { es: "\u00bfQu\u00e9 dices?", en: "What are you saying?" },
                { es: "Ella dice que s\u00ed.", en: "She says yes." },
                { es: "Nosotros decimos adi\u00f3s.", en: "We say goodbye." },
                { es: "\u00bfQu\u00e9 dec\u00eds vosotros?", en: "What do you all say?" },
                { es: "Ellos dicen que es f\u00e1cil.", en: "They say it's easy." }
            ],
            tips: "Decir is irregular: yo digo (not 'deco'). It's a stem-changing verb (e\u2192i). Common phrases: '\u00bfC\u00f3mo se dice...?' (How do you say...?), 'Es decir' (That is to say).",
            homonyms: [],
            synonyms: [{ word: "contar", meaning: "to tell/narrate" }, { word: "expresar", meaning: "to express" }],
            extraVerbs: [
                {
                    verb: "preguntar", meaning: "to ask (a question)",
                    conjugation: { "yo": "pregunto", "t\u00fa": "preguntas", "el/ella": "pregunta", "nosotros": "preguntamos", "vosotros": "pregunt\u00e1is", "ellos/ellas": "preguntan" },
                    examples: [{ es: "Yo pregunto la hora.", en: "I ask the time." }, { es: "\u00bfPuedo preguntar algo?", en: "Can I ask something?" }],
                    homonyms: [],
                    synonyms: [{ word: "cuestionar", meaning: "to question" }, { word: "interrogar", meaning: "to interrogate" }]
                },
                {
                    verb: "contestar", meaning: "to answer",
                    conjugation: { "yo": "contesto", "t\u00fa": "contestas", "el/ella": "contesta", "nosotros": "contestamos", "vosotros": "contest\u00e1is", "ellos/ellas": "contestan" },
                    examples: [{ es: "Yo contesto el tel\u00e9fono.", en: "I answer the phone." }, { es: "Ella contesta r\u00e1pido.", en: "She answers quickly." }],
                    homonyms: [],
                    synonyms: [{ word: "responder", meaning: "to respond" }, { word: "replicar", meaning: "to reply" }]
                },
                {
                    verb: "explicar", meaning: "to explain",
                    conjugation: { "yo": "explico", "t\u00fa": "explicas", "el/ella": "explica", "nosotros": "explicamos", "vosotros": "explic\u00e1is", "ellos/ellas": "explican" },
                    examples: [{ es: "\u00bfPuedes explicar?", en: "Can you explain?" }, { es: "El profesor explica la lecci\u00f3n.", en: "The professor explains the lesson." }],
                    homonyms: [],
                    synonyms: [{ word: "aclarar", meaning: "to clarify" }, { word: "describir", meaning: "to describe" }]
                }
            ]
        },
        history: {
            period: "American Revolution (1775\u20131783)",
            fr: "La Revoluci\u00f3n Americana fue una lucha por la independencia de Gran Breta\u00f1a. Espa\u00f1a apoy\u00f3 a los colonos americanos contra los brit\u00e1nicos. La Declaraci\u00f3n de Independencia de 1776 inspir\u00f3 movimientos de libertad en todo el mundo.",
            en: "The American Revolution was a fight for independence from Great Britain. Spain supported the American colonists against the British. The Declaration of Independence of 1776 inspired freedom movements around the world.",
            vocab: [
                { word: "la lucha", meaning: "the fight/struggle" },
                { word: "la independencia", meaning: "the independence" },
                { word: "apoyar", meaning: "to support" },
                { word: "los colonos", meaning: "the colonists" },
                { word: "la libertad", meaning: "the freedom" }
            ],
            funFact: "Spain secretly sent money, weapons, and supplies to the American revolutionaries. Bernardo de G\u00e1lvez, the Spanish governor of Louisiana, led troops against the British.",
            facts: [
                "Spain was a key ally of the American Revolution, fighting the British in Florida, the Mississippi, and the Gulf of Mexico.",
                "The Declaration of Independence was signed on July 4, 1776, though most delegates actually signed it on August 2.",
                "George Washington's army nearly collapsed during the brutal winter at Valley Forge in 1777-78.",
                "France and Spain both allied with the colonists against Britain, making it a global conflict.",
                "The American Revolution inspired later independence movements in Latin America, led by Sim\u00f3n Bol\u00edvar and others.",
                "Benjamin Franklin served as ambassador to France and helped secure the crucial French alliance."
            ]
        },
        currentEvents: [
            { es: "Se celebra el aniversario de la Declaraci\u00f3n de Independencia con eventos especiales.", en: "The anniversary of the Declaration of Independence is celebrated with special events." },
            { es: "Historiadores redescubren el papel de Espa\u00f1a en la Revoluci\u00f3n Americana.", en: "Historians rediscover Spain's role in the American Revolution." },
            { es: "Los valores de libertad e igualdad siguen inspirando movimientos sociales.", en: "The values of freedom and equality continue to inspire social movements." }
        ],
        vocabulary: [
            {
                word: "digo", partOfSpeech: "verb", meaning: "I say (from decir)",
                example: { es: "Yo digo la verdad.", en: "I tell the truth." },
                homonyms: [],
                synonyms: [{ word: "cuento", meaning: "I tell" }, { word: "expreso", meaning: "I express" }]
            },
            {
                word: "verdad", partOfSpeech: "noun (f)", meaning: "truth",
                example: { es: "Digo la verdad.", en: "I tell the truth." },
                homonyms: [{ word: "\u00bfverdad?", meaning: "right? / isn't it?", example: "Es bonito, \u00bfverdad? (It's pretty, right?)" }],
                synonyms: [{ word: "realidad", meaning: "reality" }, { word: "certeza", meaning: "certainty" }]
            },
            {
                word: "adi\u00f3s", partOfSpeech: "interjection", meaning: "goodbye",
                example: { es: "Decimos adi\u00f3s.", en: "We say goodbye." },
                homonyms: [],
                synonyms: [{ word: "hasta luego", meaning: "see you later" }, { word: "chao", meaning: "bye" }]
            },
            {
                word: "hora", partOfSpeech: "noun (f)", meaning: "hour / time",
                example: { es: "Pregunto la hora.", en: "I ask the time." },
                homonyms: [],
                synonyms: [{ word: "momento", meaning: "moment" }, { word: "tiempo", meaning: "time" }]
            }
        ],
        artHistory: {
            period: "El Costumbrismo Espa\u00f1ol (1830\u20131870)",
            periodEn: "Spanish Costumbrism (1830\u20131870)",
            context: "El costumbrismo retrat\u00f3 las costumbres y tradiciones populares de Espa\u00f1a. Los artistas capturaron escenas de la vida cotidiana, fiestas y el folclore regional.",
            contextEn: "Costumbrism portrayed the customs and popular traditions of Spain. Artists captured scenes of daily life, festivals, and regional folklore.",
            artworks: [
                {
                    title: "La maja desnuda",
                    titleEn: "The Nude Maja",
                    artist: "Francisco de Goya",
                    year: 1800,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Goya_Maja_desnuda2.jpg/400px-Goya_Maja_desnuda2.jpg",
                    descEs: "Una de las primeras representaciones del desnudo femenino sin justificaci\u00f3n mitol\u00f3gica en el arte occidental. Goya cre\u00f3 tambi\u00e9n una versi\u00f3n vestida.",
                    descEn: "One of the first representations of the female nude without mythological justification in Western art. Goya also created a clothed version."
                }
            ],
            vocab: [
                { word: "las costumbres", meaning: "customs/habits" },
                { word: "la tradici\u00f3n", meaning: "tradition" },
                { word: "la vida cotidiana", meaning: "daily life" },
                { word: "el folclore", meaning: "folklore" },
                { word: "la fiesta", meaning: "the festival/party" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Yo ___ la verdad.", answer: "digo", options: ["digo", "dices", "dice", "decimos"] },
            { type: "fill", prompt: "Ella ___ que s\u00ed.", answer: "dice", options: ["dice", "digo", "dicen", "decimos"] },
            { type: "fill", prompt: "Ellos ___ que es f\u00e1cil.", answer: "dicen", options: ["dice", "decimos", "dicen", "dec\u00eds"] },
            { type: "translate", en: "What are you saying?", answer: "\u00bfQu\u00e9 dices?", accept: ["que dices", "\u00bfqu\u00e9 dices?", "que dices tu"] },
            { type: "translate", en: "I ask the time.", answer: "Yo pregunto la hora.", accept: ["yo pregunto la hora", "pregunto la hora"] },
            { type: "history", fr: "Espa\u00f1a apoy\u00f3 a los colonos americanos contra los brit\u00e1nicos.", answer: "Spain supported the American colonists against the British.", options: ["Spain supported the American colonists against the British.", "Spain supported the British against the colonists.", "Spain was neutral in the American Revolution.", "Spain fought against both sides."] },
            { type: "fill", prompt: "Yo ___ la hora.", answer: "pregunto", options: ["pregunto", "preguntas", "preguntan", "preguntamos"] },
            { type: "fill", prompt: "Yo ___ el tel\u00e9fono.", answer: "contesto", options: ["contesto", "contestas", "contestan", "contestamos"] },
            { type: "translate", en: "The professor explains the lesson.", answer: "El profesor explica la lecci\u00f3n.", accept: ["el profesor explica la lecci\u00f3n", "el profesor explica la leccion"] },
            { type: "history", fr: "La Declaraci\u00f3n de Independencia fue firmada el 4 de julio de 1776.", answer: "The Declaration of Independence was signed July 4, 1776.", options: ["The Declaration of Independence was signed July 4, 1776.", "The Declaration was signed in 1800.", "The Declaration was signed in 1492.", "The Declaration was never signed."] }
        ]
    },

    // ===== LESSON 11: Gustar =====
    {
        id: 11,
        title: "Gustar \u2014 To Like",
        desc: "Expressing likes and dislikes with Spanish's unique structure.",
        spanishFocus: {
            verb: "gustar",
            conjugation: {
                "me": "gusta / gustan",
                "te": "gusta / gustan",
                "le": "gusta / gustan",
                "nos": "gusta / gustan",
                "os": "gusta / gustan",
                "les": "gusta / gustan"
            },
            pattern: "Indirect object + gusta(n) + subject",
            examples: [
                { es: "Me gusta el caf\u00e9.", en: "I like coffee. (lit: Coffee pleases me)" },
                { es: "Te gustan los perros.", en: "You like dogs." },
                { es: "Le gusta bailar.", en: "He/She likes to dance." },
                { es: "Nos gusta la m\u00fasica.", en: "We like music." },
                { es: "Os gusta viajar.", en: "You all like to travel." },
                { es: "Les gustan las pel\u00edculas.", en: "They like movies." }
            ],
            tips: "Gustar literally means 'to please' \u2014 the thing you like is the subject! Use 'gusta' for singular/infinitive and 'gustan' for plural. 'Me gusta el caf\u00e9' = 'Coffee pleases me' = 'I like coffee.'",
            homonyms: [],
            synonyms: [{ word: "encantar", meaning: "to love (stronger)" }, { word: "agradar", meaning: "to please" }],
            extraVerbs: [
                {
                    verb: "encantar", meaning: "to love / to enchant",
                    conjugation: { "me": "encanta / encantan", "te": "encanta / encantan", "le": "encanta / encantan", "nos": "encanta / encantan", "os": "encanta / encantan", "les": "encanta / encantan" },
                    examples: [{ es: "Me encanta la pizza.", en: "I love pizza." }, { es: "Nos encantan las vacaciones.", en: "We love vacations." }],
                    homonyms: [],
                    synonyms: [{ word: "fascinar", meaning: "to fascinate" }, { word: "apasionar", meaning: "to be passionate about" }]
                },
                {
                    verb: "interesar", meaning: "to interest",
                    conjugation: { "me": "interesa / interesan", "te": "interesa / interesan", "le": "interesa / interesan", "nos": "interesa / interesan", "os": "interesa / interesan", "les": "interesa / interesan" },
                    examples: [{ es: "Me interesa la historia.", en: "I'm interested in history." }, { es: "Nos interesan los idiomas.", en: "We're interested in languages." }],
                    homonyms: [],
                    synonyms: [{ word: "importar", meaning: "to matter" }, { word: "atraer", meaning: "to attract" }]
                },
                {
                    verb: "molestar", meaning: "to bother / to annoy",
                    conjugation: { "me": "molesta / molestan", "te": "molesta / molestan", "le": "molesta / molestan", "nos": "molesta / molestan", "os": "molesta / molestan", "les": "molesta / molestan" },
                    examples: [{ es: "Me molesta el ruido.", en: "The noise bothers me." }, { es: "Les molestan los mosquitos.", en: "Mosquitoes bother them." }],
                    homonyms: [],
                    synonyms: [{ word: "irritar", meaning: "to irritate" }, { word: "fastidiar", meaning: "to annoy" }]
                }
            ]
        },
        history: {
            period: "Magna Carta (1215)",
            fr: "La Carta Magna fue firmada en 1215 en Inglaterra. Limitaba el poder del rey y establec\u00eda derechos para los nobles. Este documento influy\u00f3 en las constituciones modernas, incluida la Constituci\u00f3n espa\u00f1ola de 1978.",
            en: "The Magna Carta was signed in 1215 in England. It limited the king's power and established rights for nobles. This document influenced modern constitutions, including the Spanish Constitution of 1978.",
            vocab: [
                { word: "firmar", meaning: "to sign" },
                { word: "el poder", meaning: "the power" },
                { word: "el derecho", meaning: "the right" },
                { word: "la constituci\u00f3n", meaning: "the constitution" },
                { word: "limitar", meaning: "to limit" }
            ],
            funFact: "Only four original copies of the 1215 Magna Carta survive today \u2014 two are in the British Library.",
            facts: [
                "The Magna Carta established the principle that no one, not even the king, is above the law.",
                "It was originally written in Latin and sealed with the king's seal rather than signed.",
                "The Magna Carta influenced the US Bill of Rights and the Universal Declaration of Human Rights.",
                "King John of England was forced to agree to the Magna Carta by rebellious barons.",
                "The document was reissued several times in the following years with changes.",
                "Spain's own Constitution of 1978, written after the Franco dictatorship, established democracy and individual rights."
            ]
        },
        currentEvents: [
            { es: "Los derechos humanos son tema central en debates internacionales.", en: "Human rights are a central topic in international debates." },
            { es: "Espa\u00f1a celebra el aniversario de su Constituci\u00f3n democr\u00e1tica.", en: "Spain celebrates the anniversary of its democratic Constitution." },
            { es: "Nuevas generaciones estudian los or\u00edgenes de los derechos civiles.", en: "New generations study the origins of civil rights." }
        ],
        vocabulary: [
            {
                word: "gusta", partOfSpeech: "verb", meaning: "pleases / is liked (from gustar)",
                example: { es: "Me gusta el caf\u00e9.", en: "I like coffee." },
                homonyms: [],
                synonyms: [{ word: "agrada", meaning: "pleases" }]
            },
            {
                word: "perro", partOfSpeech: "noun (m)", meaning: "dog",
                example: { es: "Me gustan los perros.", en: "I like dogs." },
                homonyms: [],
                synonyms: [{ word: "can", meaning: "dog (formal)" }, { word: "cachorro", meaning: "puppy" }]
            },
            {
                word: "pel\u00edcula", partOfSpeech: "noun (f)", meaning: "movie / film",
                example: { es: "Les gustan las pel\u00edculas.", en: "They like movies." },
                homonyms: [],
                synonyms: [{ word: "filme", meaning: "film" }, { word: "cinta", meaning: "movie (colloquial)" }]
            },
            {
                word: "vacaciones", partOfSpeech: "noun (f.pl)", meaning: "vacation / holidays",
                example: { es: "Nos encantan las vacaciones.", en: "We love vacations." },
                homonyms: [],
                synonyms: [{ word: "descanso", meaning: "rest/break" }, { word: "d\u00edas libres", meaning: "days off" }]
            }
        ],
        artHistory: {
            period: "El Impresionismo Espa\u00f1ol (1870\u20131910)",
            periodEn: "Spanish Impressionism (1870\u20131910)",
            context: "El impresionismo espa\u00f1ol fue representado por artistas como Joaqu\u00edn Sorolla, conocido como 'el pintor de la luz.' Sus obras capturan la luminosidad del Mediterr\u00e1neo espa\u00f1ol con pinceladas sueltas y colores vibrantes.",
            contextEn: "Spanish Impressionism was represented by artists like Joaqu\u00edn Sorolla, known as 'the painter of light.' His works capture the luminosity of the Spanish Mediterranean with loose brushstrokes and vibrant colors.",
            artworks: [
                {
                    title: "Paseo a orillas del mar",
                    titleEn: "Walk on the Beach",
                    artist: "Joaqu\u00edn Sorolla",
                    year: 1909,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Joaqu%C3%ADn_Sorolla_y_Bastida_-_Strolling_along_the_Seashore_-_Google_Art_Project.jpg/400px-Joaqu%C3%ADn_Sorolla_y_Bastida_-_Strolling_along_the_Seashore_-_Google_Art_Project.jpg",
                    descEs: "Dos mujeres pasean por la playa con vestidos blancos. Sorolla captura perfectamente la luz del sol reflejada en el agua y la tela.",
                    descEn: "Two women stroll along the beach in white dresses. Sorolla perfectly captures the sunlight reflected on the water and fabric."
                }
            ],
            vocab: [
                { word: "la luz", meaning: "the light" },
                { word: "la pincelada", meaning: "the brushstroke" },
                { word: "el mar", meaning: "the sea" },
                { word: "luminoso", meaning: "luminous" },
                { word: "vibrante", meaning: "vibrant" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Me ___ el caf\u00e9.", answer: "gusta", options: ["gusta", "gustan", "gusto", "gustas"] },
            { type: "fill", prompt: "Te ___ los perros.", answer: "gustan", options: ["gusta", "gustan", "gusto", "gustas"] },
            { type: "fill", prompt: "Me ___ la pizza.", answer: "encanta", options: ["encanta", "encantan", "encanto", "encantas"] },
            { type: "translate", en: "I like music.", answer: "Me gusta la m\u00fasica.", accept: ["me gusta la m\u00fasica", "me gusta la musica"] },
            { type: "translate", en: "I love vacations.", answer: "Me encantan las vacaciones.", accept: ["me encantan las vacaciones"] },
            { type: "history", fr: "La Carta Magna fue firmada en 1215.", answer: "The Magna Carta was signed in 1215.", options: ["The Magna Carta was signed in 1215.", "The Magna Carta was signed in 1776.", "The Magna Carta was signed in 1492.", "The Magna Carta was signed in 1066."] },
            { type: "fill", prompt: "Me ___ la historia.", answer: "interesa", options: ["interesa", "interesan", "intereso", "interesas"] },
            { type: "fill", prompt: "Me ___ el ruido.", answer: "molesta", options: ["molesta", "molestan", "molesto", "molestas"] },
            { type: "translate", en: "The noise bothers me.", answer: "Me molesta el ruido.", accept: ["me molesta el ruido"] },
            { type: "history", fr: "La Constituci\u00f3n espa\u00f1ola se estableci\u00f3 en 1978.", answer: "The Spanish Constitution was established in 1978.", options: ["The Spanish Constitution was established in 1978.", "The Spanish Constitution was established in 1900.", "Spain never had a constitution.", "The Spanish Constitution was established in 1215."] }
        ]
    },

    // ===== LESSON 12: Dormir =====
    {
        id: 12,
        title: "Dormir \u2014 To Sleep",
        desc: "Stem-changing verbs (o\u2192ue), daily routines, and reflexive verbs.",
        spanishFocus: {
            verb: "dormir",
            conjugation: {
                "yo": "duermo",
                "t\u00fa": "duermes",
                "el/ella": "duerme",
                "nosotros": "dormimos",
                "vosotros": "dorm\u00eds",
                "ellos/ellas": "duermen"
            },
            pattern: "Subject + dormir + time expression",
            examples: [
                { es: "Yo duermo ocho horas.", en: "I sleep eight hours." },
                { es: "T\u00fa duermes poco.", en: "You sleep little." },
                { es: "Ella duerme la siesta.", en: "She takes a nap." },
                { es: "Nosotros dormimos bien.", en: "We sleep well." },
                { es: "\u00bfDorm\u00eds temprano?", en: "Do you all sleep early?" },
                { es: "Ellos duermen tarde.", en: "They sleep late." }
            ],
            tips: "Dormir is an o\u2192ue stem-changing verb. The 'o' changes to 'ue' in all forms except nosotros and vosotros. Other o\u2192ue verbs: poder, volver, encontrar.",
            homonyms: [],
            synonyms: [{ word: "descansar", meaning: "to rest" }, { word: "reposar", meaning: "to repose" }],
            extraVerbs: [
                {
                    verb: "despertarse", meaning: "to wake up",
                    conjugation: { "yo": "me despierto", "t\u00fa": "te despiertas", "el/ella": "se despierta", "nosotros": "nos despertamos", "vosotros": "os despert\u00e1is", "ellos/ellas": "se despiertan" },
                    examples: [{ es: "Me despierto a las siete.", en: "I wake up at seven." }, { es: "Se despierta temprano.", en: "He/She wakes up early." }],
                    homonyms: [],
                    synonyms: [{ word: "levantarse", meaning: "to get up" }]
                },
                {
                    verb: "acostarse", meaning: "to go to bed",
                    conjugation: { "yo": "me acuesto", "t\u00fa": "te acuestas", "el/ella": "se acuesta", "nosotros": "nos acostamos", "vosotros": "os acost\u00e1is", "ellos/ellas": "se acuestan" },
                    examples: [{ es: "Me acuesto a las once.", en: "I go to bed at eleven." }, { es: "Se acuestan tarde.", en: "They go to bed late." }],
                    homonyms: [],
                    synonyms: [{ word: "irse a dormir", meaning: "to go to sleep" }]
                },
                {
                    verb: "so\u00f1ar", meaning: "to dream",
                    conjugation: { "yo": "sue\u00f1o", "t\u00fa": "sue\u00f1as", "el/ella": "sue\u00f1a", "nosotros": "so\u00f1amos", "vosotros": "so\u00f1\u00e1is", "ellos/ellas": "sue\u00f1an" },
                    examples: [{ es: "Yo sue\u00f1o con viajar.", en: "I dream of traveling." }, { es: "\u00bfQu\u00e9 sue\u00f1as?", en: "What do you dream of?" }],
                    homonyms: [],
                    synonyms: [{ word: "imaginar", meaning: "to imagine" }, { word: "fantasear", meaning: "to fantasize" }]
                }
            ]
        },
        history: {
            period: "Martin Luther King Jr. (1963)",
            fr: "Martin Luther King Jr. lider\u00f3 el movimiento por los derechos civiles en Estados Unidos. Su famoso discurso de 1963 inspir\u00f3 a millones. La lucha por la igualdad racial cambi\u00f3 las leyes y la sociedad americana.",
            en: "Martin Luther King Jr. led the civil rights movement in the United States. His famous 1963 speech inspired millions. The fight for racial equality changed American laws and society.",
            vocab: [
                { word: "el movimiento", meaning: "the movement" },
                { word: "los derechos civiles", meaning: "civil rights" },
                { word: "el discurso", meaning: "the speech" },
                { word: "la igualdad", meaning: "equality" },
                { word: "la sociedad", meaning: "society" }
            ],
            funFact: "MLK improvised the most famous part of his speech. When singer Mahalia Jackson shouted 'Tell them about the dream, Martin!', he departed from his prepared text.",
            facts: [
                "Martin Luther King Jr. was only 25 when he led the Montgomery Bus Boycott in 1955.",
                "He won the Nobel Peace Prize in 1964 at age 35, the youngest person to do so at that time.",
                "The Civil Rights Act of 1964 outlawed discrimination based on race, color, religion, sex, or national origin.",
                "King was influenced by Mahatma Gandhi's philosophy of nonviolent resistance.",
                "The March on Washington in 1963 drew over 250,000 people to the National Mall.",
                "Martin Luther King Day became a federal holiday in the US in 1986."
            ]
        },
        currentEvents: [
            { es: "Los movimientos por los derechos civiles contin\u00faan en todo el mundo.", en: "Civil rights movements continue around the world." },
            { es: "Nuevas generaciones se inspiran en el legado de Martin Luther King.", en: "New generations are inspired by Martin Luther King's legacy." },
            { es: "La lucha por la igualdad racial sigue siendo un tema central en la pol\u00edtica global.", en: "The fight for racial equality remains a central issue in global politics." }
        ],
        vocabulary: [
            {
                word: "duermo", partOfSpeech: "verb", meaning: "I sleep (from dormir)",
                example: { es: "Duermo ocho horas.", en: "I sleep eight hours." },
                homonyms: [],
                synonyms: [{ word: "descanso", meaning: "I rest" }]
            },
            {
                word: "siesta", partOfSpeech: "noun (f)", meaning: "nap / siesta",
                example: { es: "Ella duerme la siesta.", en: "She takes a nap." },
                homonyms: [],
                synonyms: [{ word: "descanso", meaning: "rest" }, { word: "cabezada", meaning: "doze" }]
            },
            {
                word: "sue\u00f1o", partOfSpeech: "noun (m)", meaning: "dream / sleep",
                example: { es: "Tengo sue\u00f1o.", en: "I'm sleepy." },
                homonyms: [{ word: "sue\u00f1o", meaning: "I dream (from so\u00f1ar)", example: "Sue\u00f1o con viajar. (I dream of traveling.)" }],
                synonyms: [{ word: "fantas\u00eda", meaning: "fantasy" }, { word: "ilusi\u00f3n", meaning: "illusion/dream" }]
            },
            {
                word: "temprano", partOfSpeech: "adverb", meaning: "early",
                example: { es: "Se despierta temprano.", en: "He/She wakes up early." },
                homonyms: [],
                synonyms: [{ word: "pronto", meaning: "soon/early" }, { word: "de madrugada", meaning: "at dawn" }]
            }
        ],
        artHistory: {
            period: "El Expresionismo Espa\u00f1ol (1900\u20131950)",
            periodEn: "Spanish Expressionism (1900\u20131950)",
            context: "Artistas espa\u00f1oles como Ignacio Zuloaga exploraron el expresionismo, representando la Espa\u00f1a profunda con colores intensos y figuras dram\u00e1ticas que reflejaban las emociones y tensiones de la \u00e9poca.",
            contextEn: "Spanish artists like Ignacio Zuloaga explored expressionism, depicting deep Spain with intense colors and dramatic figures that reflected the emotions and tensions of the era.",
            artworks: [
                {
                    title: "El enano Gregorio",
                    titleEn: "Gregorio the Dwarf",
                    artist: "Ignacio Zuloaga",
                    year: 1908,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ignacio_Zuloaga_-_The_Dwarf_Do%C3%B1a_Mercedes_-_Google_Art_Project.jpg/400px-Ignacio_Zuloaga_-_The_Dwarf_Do%C3%B1a_Mercedes_-_Google_Art_Project.jpg",
                    descEs: "Zuloaga retrataba personajes de la Espa\u00f1a rural con honestidad y dignidad, siguiendo la tradici\u00f3n de Vel\u00e1zquez.",
                    descEn: "Zuloaga portrayed characters from rural Spain with honesty and dignity, following the tradition of Vel\u00e1zquez."
                }
            ],
            vocab: [
                { word: "el expresionismo", meaning: "expressionism" },
                { word: "la emoci\u00f3n", meaning: "emotion" },
                { word: "intenso", meaning: "intense" },
                { word: "dram\u00e1tico", meaning: "dramatic" },
                { word: "la dignidad", meaning: "dignity" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Yo ___ ocho horas.", answer: "duermo", options: ["duermo", "duermes", "duerme", "dormimos"] },
            { type: "fill", prompt: "Ella ___ la siesta.", answer: "duerme", options: ["duerme", "duermo", "duermen", "dormimos"] },
            { type: "fill", prompt: "Ellos ___ tarde.", answer: "duermen", options: ["duerme", "dormimos", "duermen", "dorm\u00eds"] },
            { type: "translate", en: "I wake up at seven.", answer: "Me despierto a las siete.", accept: ["me despierto a las siete", "me despierto a las 7"] },
            { type: "translate", en: "I go to bed at eleven.", answer: "Me acuesto a las once.", accept: ["me acuesto a las once", "me acuesto a las 11"] },
            { type: "history", fr: "El discurso de MLK fue en 1963.", answer: "MLK's speech was in 1963.", options: ["MLK's speech was in 1963.", "MLK's speech was in 1973.", "MLK's speech was in 1953.", "MLK's speech was in 1943."] },
            { type: "fill", prompt: "Me ___ a las siete.", answer: "despierto", options: ["despierto", "despiertas", "despiertan", "despertamos"] },
            { type: "fill", prompt: "Yo ___ con viajar.", answer: "sue\u00f1o", options: ["sue\u00f1o", "sue\u00f1as", "sue\u00f1an", "so\u00f1amos"] },
            { type: "translate", en: "I dream of traveling.", answer: "Sue\u00f1o con viajar.", accept: ["sue\u00f1o con viajar", "yo sue\u00f1o con viajar"] },
            { type: "history", fr: "King gan\u00f3 el Premio Nobel de la Paz en 1964.", answer: "King won the Nobel Peace Prize in 1964.", options: ["King won the Nobel Peace Prize in 1964.", "King won the Nobel Prize in 1974.", "King never won a Nobel Prize.", "King won the Nobel Prize in 1954."] }
        ]
    },

    // ===== LESSON 13: Trabajar =====
    {
        id: 13,
        title: "Trabajar \u2014 To Work",
        desc: "Jobs, professions, and talking about work in Spanish.",
        spanishFocus: {
            verb: "trabajar",
            conjugation: {
                "yo": "trabajo",
                "t\u00fa": "trabajas",
                "el/ella": "trabaja",
                "nosotros": "trabajamos",
                "vosotros": "trabaj\u00e1is",
                "ellos/ellas": "trabajan"
            },
            pattern: "Subject + trabajar + en/como + place/profession",
            examples: [
                { es: "Yo trabajo en una oficina.", en: "I work in an office." },
                { es: "T\u00fa trabajas como programador.", en: "You work as a programmer." },
                { es: "Ella trabaja mucho.", en: "She works a lot." },
                { es: "Nosotros trabajamos juntos.", en: "We work together." },
                { es: "\u00bfD\u00f3nde trabaj\u00e1is?", en: "Where do you all work?" },
                { es: "Ellos trabajan desde casa.", en: "They work from home." }
            ],
            tips: "Trabajar is a regular -AR verb. Common work phrases: 'trabajo a tiempo completo' (full-time), 'trabajo a tiempo parcial' (part-time), 'estoy buscando trabajo' (I'm looking for work).",
            homonyms: [],
            synonyms: [{ word: "laborar", meaning: "to labor" }, { word: "currar", meaning: "to work (colloquial Spain)" }],
            extraVerbs: [
                {
                    verb: "estudiar", meaning: "to study",
                    conjugation: { "yo": "estudio", "t\u00fa": "estudias", "el/ella": "estudia", "nosotros": "estudiamos", "vosotros": "estudi\u00e1is", "ellos/ellas": "estudian" },
                    examples: [{ es: "Yo estudio espa\u00f1ol.", en: "I study Spanish." }, { es: "Ella estudia medicina.", en: "She studies medicine." }],
                    homonyms: [],
                    synonyms: [{ word: "aprender", meaning: "to learn" }, { word: "investigar", meaning: "to research" }]
                },
                {
                    verb: "ganar", meaning: "to earn / to win",
                    conjugation: { "yo": "gano", "t\u00fa": "ganas", "el/ella": "gana", "nosotros": "ganamos", "vosotros": "gan\u00e1is", "ellos/ellas": "ganan" },
                    examples: [{ es: "Yo gano un buen sueldo.", en: "I earn a good salary." }, { es: "Ella gana el premio.", en: "She wins the prize." }],
                    homonyms: [],
                    synonyms: [{ word: "obtener", meaning: "to obtain" }, { word: "lograr", meaning: "to achieve" }]
                },
                {
                    verb: "ense\u00f1ar", meaning: "to teach / to show",
                    conjugation: { "yo": "ense\u00f1o", "t\u00fa": "ense\u00f1as", "el/ella": "ense\u00f1a", "nosotros": "ense\u00f1amos", "vosotros": "ense\u00f1\u00e1is", "ellos/ellas": "ense\u00f1an" },
                    examples: [{ es: "Ella ense\u00f1a matem\u00e1ticas.", en: "She teaches math." }, { es: "Te ense\u00f1o la ciudad.", en: "I show you the city." }],
                    homonyms: [],
                    synonyms: [{ word: "instruir", meaning: "to instruct" }, { word: "mostrar", meaning: "to show" }]
                }
            ]
        },
        history: {
            period: "Immigration to the Americas (1800s\u20131900s)",
            fr: "Millones de europeos emigraron a Am\u00e9rica en los siglos XIX y XX. Muchos espa\u00f1oles fueron a Argentina, Cuba y M\u00e9xico. Buscaban una vida mejor y nuevas oportunidades de trabajo.",
            en: "Millions of Europeans emigrated to America in the 19th and 20th centuries. Many Spaniards went to Argentina, Cuba, and Mexico. They were looking for a better life and new work opportunities.",
            vocab: [
                { word: "emigrar", meaning: "to emigrate" },
                { word: "buscar", meaning: "to look for" },
                { word: "una vida mejor", meaning: "a better life" },
                { word: "las oportunidades", meaning: "the opportunities" },
                { word: "el trabajo", meaning: "the work/job" }
            ],
            funFact: "Argentina received more Spanish immigrants than any other country in the Americas \u2014 over 2 million between 1857 and 1940.",
            facts: [
                "Between 1880 and 1930, over 4 million Spaniards emigrated to Latin America.",
                "Buenos Aires, Argentina, became known as the 'Paris of South America' partly due to European immigration.",
                "Many Spanish immigrants worked in agriculture, commerce, and the restaurant industry in Latin America.",
                "Ellis Island processed over 12 million immigrants arriving in the United States between 1892 and 1954.",
                "The Spanish diaspora created cultural connections between Spain and Latin America that remain strong today.",
                "Immigrant neighborhoods in cities like Buenos Aires, Havana, and Mexico City preserved Spanish regional traditions."
            ]
        },
        currentEvents: [
            { es: "El teletrabajo transforma la cultura laboral en Espa\u00f1a y Am\u00e9rica Latina.", en: "Remote work transforms work culture in Spain and Latin America." },
            { es: "J\u00f3venes espa\u00f1oles emigran en busca de mejores oportunidades laborales.", en: "Young Spaniards emigrate in search of better job opportunities." },
            { es: "La econom\u00eda digital crea nuevas profesiones en todo el mundo hispanohablante.", en: "The digital economy creates new professions across the Spanish-speaking world." }
        ],
        vocabulary: [
            {
                word: "trabajo", partOfSpeech: "noun/verb", meaning: "work / I work",
                example: { es: "Yo trabajo mucho.", en: "I work a lot." },
                homonyms: [{ word: "trabajo", meaning: "work/job (noun)", example: "Busco trabajo. (I'm looking for a job.)" }],
                synonyms: [{ word: "empleo", meaning: "employment" }, { word: "labor", meaning: "labor" }]
            },
            {
                word: "oficina", partOfSpeech: "noun (f)", meaning: "office",
                example: { es: "Trabajo en una oficina.", en: "I work in an office." },
                homonyms: [],
                synonyms: [{ word: "despacho", meaning: "office/study" }]
            },
            {
                word: "sueldo", partOfSpeech: "noun (m)", meaning: "salary",
                example: { es: "Gano un buen sueldo.", en: "I earn a good salary." },
                homonyms: [],
                synonyms: [{ word: "salario", meaning: "salary" }, { word: "paga", meaning: "pay" }]
            }
        ],
        artHistory: {
            period: "El Arte Pop Espa\u00f1ol (1960\u20131980)",
            periodEn: "Spanish Pop Art (1960\u20131980)",
            context: "El movimiento pop lleg\u00f3 a Espa\u00f1a en los a\u00f1os 60. Artistas como Eduardo Arroyo y el Equipo Cr\u00f3nica usaron im\u00e1genes populares para criticar la dictadura franquista y la sociedad de consumo.",
            contextEn: "The pop movement arrived in Spain in the 1960s. Artists like Eduardo Arroyo and Equipo Cr\u00f3nica used popular images to criticize the Franco dictatorship and consumer society.",
            artworks: [
                {
                    title: "La salita",
                    titleEn: "The Living Room",
                    artist: "Equipo Cr\u00f3nica",
                    year: 1971,
                    image: "https://upload.wikimedia.org/wikipedia/en/7/7e/Equipo_Cr%C3%B3nica_La_Salita_1970.jpg",
                    descEs: "Equipo Cr\u00f3nica mezclaba im\u00e1genes de la cultura popular con referencias al arte cl\u00e1sico espa\u00f1ol, creando una cr\u00edtica social ir\u00f3nica.",
                    descEn: "Equipo Cr\u00f3nica mixed popular culture images with references to classical Spanish art, creating an ironic social critique."
                }
            ],
            vocab: [
                { word: "la cr\u00edtica", meaning: "criticism" },
                { word: "la dictadura", meaning: "the dictatorship" },
                { word: "el consumo", meaning: "consumption" },
                { word: "la imagen", meaning: "the image" },
                { word: "popular", meaning: "popular" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Yo ___ en una oficina.", answer: "trabajo", options: ["trabajo", "trabajas", "trabaja", "trabajamos"] },
            { type: "fill", prompt: "Ella ___ mucho.", answer: "trabaja", options: ["trabaja", "trabajo", "trabajan", "trabajamos"] },
            { type: "fill", prompt: "Ellos ___ desde casa.", answer: "trabajan", options: ["trabaja", "trabajamos", "trabajan", "trabaj\u00e1is"] },
            { type: "translate", en: "I study Spanish.", answer: "Yo estudio espa\u00f1ol.", accept: ["yo estudio espa\u00f1ol", "estudio espanol", "yo estudio espanol"] },
            { type: "translate", en: "She teaches math.", answer: "Ella ense\u00f1a matem\u00e1ticas.", accept: ["ella ense\u00f1a matem\u00e1ticas", "ella ensena matematicas"] },
            { type: "history", fr: "Millones de espa\u00f1oles emigraron a Am\u00e9rica Latina.", answer: "Millions of Spaniards emigrated to Latin America.", options: ["Millions of Spaniards emigrated to Latin America.", "No Spaniards ever left Spain.", "Spaniards only went to Africa.", "Spaniards only went to Asia."] },
            { type: "fill", prompt: "Yo ___ espa\u00f1ol.", answer: "estudio", options: ["estudio", "estudias", "estudian", "estudiamos"] },
            { type: "fill", prompt: "Yo ___ un buen sueldo.", answer: "gano", options: ["gano", "ganas", "ganan", "ganamos"] },
            { type: "translate", en: "I earn a good salary.", answer: "Yo gano un buen sueldo.", accept: ["yo gano un buen sueldo", "gano un buen sueldo"] },
            { type: "history", fr: "Argentina recibi\u00f3 m\u00e1s de 2 millones de inmigrantes espa\u00f1oles.", answer: "Argentina received over 2 million Spanish immigrants.", options: ["Argentina received over 2 million Spanish immigrants.", "Argentina received no immigrants.", "Argentina only received Italian immigrants.", "Argentina received 100 Spanish immigrants."] }
        ]
    },

    // ===== LESSON 14: Sentir =====
    {
        id: 14,
        title: "Sentir \u2014 To Feel",
        desc: "Emotions, feelings, and expressing how you feel in Spanish.",
        spanishFocus: {
            verb: "sentir",
            conjugation: {
                "yo": "siento",
                "t\u00fa": "sientes",
                "el/ella": "siente",
                "nosotros": "sentimos",
                "vosotros": "sent\u00eds",
                "ellos/ellas": "sienten"
            },
            pattern: "Subject + sentir(se) + adjective / noun",
            examples: [
                { es: "Me siento feliz.", en: "I feel happy." },
                { es: "\u00bfC\u00f3mo te sientes?", en: "How do you feel?" },
                { es: "Ella siente nostalgia.", en: "She feels nostalgia." },
                { es: "Lo sentimos mucho.", en: "We are very sorry." },
                { es: "\u00bfOs sent\u00eds mejor?", en: "Do you all feel better?" },
                { es: "Ellos se sienten orgullosos.", en: "They feel proud." }
            ],
            tips: "Sentir is e\u2192ie stem-changing. 'Sentirse' (reflexive) = to feel an emotion. 'Lo siento' = I'm sorry (I feel it). 'Sentir' (non-reflexive) = to feel/sense something.",
            homonyms: [],
            synonyms: [{ word: "percibir", meaning: "to perceive" }, { word: "experimentar", meaning: "to experience" }],
            extraVerbs: [
                {
                    verb: "llorar", meaning: "to cry",
                    conjugation: { "yo": "lloro", "t\u00fa": "lloras", "el/ella": "llora", "nosotros": "lloramos", "vosotros": "llor\u00e1is", "ellos/ellas": "lloran" },
                    examples: [{ es: "No llores.", en: "Don't cry." }, { es: "Ella llora de alegr\u00eda.", en: "She cries with joy." }],
                    homonyms: [],
                    synonyms: [{ word: "sollozar", meaning: "to sob" }, { word: "lagrimear", meaning: "to tear up" }]
                },
                {
                    verb: "re\u00edr", meaning: "to laugh",
                    conjugation: { "yo": "r\u00edo", "t\u00fa": "r\u00edes", "el/ella": "r\u00ede", "nosotros": "re\u00edmos", "vosotros": "re\u00eds", "ellos/ellas": "r\u00eden" },
                    examples: [{ es: "Me r\u00edo mucho.", en: "I laugh a lot." }, { es: "Ellos r\u00eden juntos.", en: "They laugh together." }],
                    homonyms: [],
                    synonyms: [{ word: "carcajear", meaning: "to guffaw" }, { word: "sonre\u00edr", meaning: "to smile" }]
                },
                {
                    verb: "amar", meaning: "to love (deeply)",
                    conjugation: { "yo": "amo", "t\u00fa": "amas", "el/ella": "ama", "nosotros": "amamos", "vosotros": "am\u00e1is", "ellos/ellas": "aman" },
                    examples: [{ es: "Te amo.", en: "I love you." }, { es: "Amo la vida.", en: "I love life." }],
                    homonyms: [],
                    synonyms: [{ word: "querer", meaning: "to love/want" }, { word: "adorar", meaning: "to adore" }]
                }
            ]
        },
        history: {
            period: "Spanish Civil War (1936\u20131939)",
            fr: "La Guerra Civil Espa\u00f1ola fue un conflicto entre republicanos y nacionalistas. Franco gan\u00f3 y estableci\u00f3 una dictadura que dur\u00f3 hasta 1975. La guerra inspir\u00f3 obras como Guernica de Picasso.",
            en: "The Spanish Civil War was a conflict between republicans and nationalists. Franco won and established a dictatorship that lasted until 1975. The war inspired works like Picasso's Guernica.",
            vocab: [
                { word: "la guerra civil", meaning: "the civil war" },
                { word: "los republicanos", meaning: "the republicans" },
                { word: "los nacionalistas", meaning: "the nationalists" },
                { word: "la dictadura", meaning: "the dictatorship" },
                { word: "inspirar", meaning: "to inspire" }
            ],
            funFact: "The International Brigades brought over 35,000 volunteers from 50 countries to fight alongside the Spanish Republic.",
            facts: [
                "The Spanish Civil War lasted from 1936 to 1939 and killed an estimated 500,000 people.",
                "It served as a testing ground for WWII weapons and tactics, including the bombing of Guernica by Nazi aircraft.",
                "Ernest Hemingway and George Orwell both went to Spain to witness or fight in the war.",
                "Franco's dictatorship lasted 36 years, from 1939 until his death in 1975.",
                "Spain's transition to democracy after Franco is considered one of the most successful in modern history.",
                "The Pact of Forgetting (Pacto del Olvido) was an informal agreement to not revisit the war's crimes during the transition."
            ]
        },
        currentEvents: [
            { es: "Espa\u00f1a contin\u00faa el debate sobre la memoria hist\u00f3rica de la Guerra Civil.", en: "Spain continues the debate about the historical memory of the Civil War." },
            { es: "Se descubren nuevas fosas comunes de la \u00e9poca de Franco.", en: "New mass graves from the Franco era are discovered." },
            { es: "La democracia espa\u00f1ola celebra d\u00e9cadas de estabilidad.", en: "Spanish democracy celebrates decades of stability." }
        ],
        vocabulary: [
            {
                word: "siento", partOfSpeech: "verb", meaning: "I feel / I'm sorry (from sentir)",
                example: { es: "Lo siento.", en: "I'm sorry." },
                homonyms: [{ word: "siento", meaning: "I sit (from sentar)", example: "Me siento aqu\u00ed. (I sit here.)" }],
                synonyms: [{ word: "percibo", meaning: "I perceive" }]
            },
            {
                word: "feliz", partOfSpeech: "adjective", meaning: "happy",
                example: { es: "Me siento feliz.", en: "I feel happy." },
                homonyms: [],
                synonyms: [{ word: "contento", meaning: "glad" }, { word: "alegre", meaning: "cheerful" }]
            },
            {
                word: "orgulloso", partOfSpeech: "adjective", meaning: "proud",
                example: { es: "Se sienten orgullosos.", en: "They feel proud." },
                homonyms: [],
                synonyms: [{ word: "satisfecho", meaning: "satisfied" }]
            },
            {
                word: "vida", partOfSpeech: "noun (f)", meaning: "life",
                example: { es: "Amo la vida.", en: "I love life." },
                homonyms: [],
                synonyms: [{ word: "existencia", meaning: "existence" }]
            }
        ],
        artHistory: {
            period: "El Informalismo Espa\u00f1ol (1950\u20131970)",
            periodEn: "Spanish Informalism (1950\u20131970)",
            context: "Despu\u00e9s de la Guerra Civil, artistas como Antonio Saura exploraron el informalismo, un arte abstracto y gestual que expresaba las emociones crudas de una Espa\u00f1a traumatizada.",
            contextEn: "After the Civil War, artists like Antonio Saura explored Informalism, an abstract and gestural art that expressed the raw emotions of a traumatized Spain.",
            artworks: [
                {
                    title: "Gran crucifixi\u00f3n",
                    titleEn: "Great Crucifixion",
                    artist: "Antonio Saura",
                    year: 1963,
                    image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Antonio_Saura_Crucifixion.jpg",
                    descEs: "Saura usaba pinceladas violentas y colores oscuros para expresar el sufrimiento y la angustia existencial.",
                    descEn: "Saura used violent brushstrokes and dark colors to express suffering and existential anguish."
                }
            ],
            vocab: [
                { word: "el sufrimiento", meaning: "suffering" },
                { word: "la angustia", meaning: "anguish" },
                { word: "abstracto", meaning: "abstract" },
                { word: "gestual", meaning: "gestural" },
                { word: "traumatizado", meaning: "traumatized" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Me ___ feliz.", answer: "siento", options: ["siento", "sientes", "siente", "sentimos"] },
            { type: "fill", prompt: "Ellos se ___ orgullosos.", answer: "sienten", options: ["siente", "sentimos", "sienten", "sent\u00eds"] },
            { type: "fill", prompt: "Lo ___ mucho.", answer: "sentimos", options: ["sent\u00eds", "siento", "sentimos", "sienten"] },
            { type: "translate", en: "How do you feel?", answer: "\u00bfC\u00f3mo te sientes?", accept: ["c\u00f3mo te sientes", "\u00bfc\u00f3mo te sientes?", "como te sientes"] },
            { type: "translate", en: "I love you.", answer: "Te amo.", accept: ["te amo", "te quiero"] },
            { type: "history", fr: "La Guerra Civil Espa\u00f1ola dur\u00f3 de 1936 a 1939.", answer: "The Spanish Civil War lasted from 1936 to 1939.", options: ["The Spanish Civil War lasted from 1936 to 1939.", "The Spanish Civil War lasted from 1914 to 1918.", "The Spanish Civil War lasted from 1939 to 1975.", "The Spanish Civil War lasted from 1800 to 1810."] },
            { type: "fill", prompt: "No ___.", answer: "llores", options: ["llores", "lloro", "lloran", "lloramos"] },
            { type: "fill", prompt: "Me ___ mucho.", answer: "r\u00edo", options: ["r\u00edo", "r\u00edes", "r\u00eden", "re\u00edmos"] },
            { type: "translate", en: "She cries with joy.", answer: "Ella llora de alegr\u00eda.", accept: ["ella llora de alegr\u00eda", "ella llora de alegria"] },
            { type: "history", fr: "La dictadura de Franco dur\u00f3 hasta 1975.", answer: "Franco's dictatorship lasted until 1975.", options: ["Franco's dictatorship lasted until 1975.", "Franco's dictatorship lasted until 1950.", "Franco's dictatorship lasted until 2000.", "Franco's dictatorship ended in 1945."] }
        ]
    },

    // ===== LESSON 15: Jugar =====
    {
        id: 15,
        title: "Jugar \u2014 To Play",
        desc: "Sports, games, hobbies, and leisure activities in Spanish.",
        spanishFocus: {
            verb: "jugar",
            conjugation: {
                "yo": "juego",
                "t\u00fa": "juegas",
                "el/ella": "juega",
                "nosotros": "jugamos",
                "vosotros": "jug\u00e1is",
                "ellos/ellas": "juegan"
            },
            pattern: "Subject + jugar + a + sport/game",
            examples: [
                { es: "Yo juego al f\u00fatbol.", en: "I play soccer." },
                { es: "T\u00fa juegas videojuegos.", en: "You play video games." },
                { es: "Ella juega al tenis.", en: "She plays tennis." },
                { es: "Nosotros jugamos juntos.", en: "We play together." },
                { es: "\u00bfJug\u00e1is al baloncesto?", en: "Do you all play basketball?" },
                { es: "Ellos juegan en el parque.", en: "They play in the park." }
            ],
            tips: "Jugar is a u\u2192ue stem-changing verb (unique!). Use 'jugar a' + sport: 'juego al f\u00fatbol.' For musical instruments, use 'tocar': 'toco la guitarra' (I play the guitar).",
            homonyms: [],
            synonyms: [{ word: "divertirse", meaning: "to have fun" }, { word: "entretenerse", meaning: "to entertain oneself" }],
            extraVerbs: [
                {
                    verb: "correr", meaning: "to run",
                    conjugation: { "yo": "corro", "t\u00fa": "corres", "el/ella": "corre", "nosotros": "corremos", "vosotros": "corr\u00e9is", "ellos/ellas": "corren" },
                    examples: [{ es: "Yo corro por las ma\u00f1anas.", en: "I run in the mornings." }, { es: "Ella corre r\u00e1pido.", en: "She runs fast." }],
                    homonyms: [],
                    synonyms: [{ word: "trotar", meaning: "to jog" }, { word: "sprint\u00e1r", meaning: "to sprint" }]
                },
                {
                    verb: "nadar", meaning: "to swim",
                    conjugation: { "yo": "nado", "t\u00fa": "nadas", "el/ella": "nada", "nosotros": "nadamos", "vosotros": "nad\u00e1is", "ellos/ellas": "nadan" },
                    examples: [{ es: "Yo nado en la piscina.", en: "I swim in the pool." }, { es: "Ellos nadan en el mar.", en: "They swim in the sea." }],
                    homonyms: [{ word: "nada", meaning: "nothing", example: "No tengo nada. (I have nothing.)" }],
                    synonyms: [{ word: "bucear", meaning: "to dive" }]
                },
                {
                    verb: "tocar", meaning: "to play (instrument) / to touch",
                    conjugation: { "yo": "toco", "t\u00fa": "tocas", "el/ella": "toca", "nosotros": "tocamos", "vosotros": "toc\u00e1is", "ellos/ellas": "tocan" },
                    examples: [{ es: "Yo toco la guitarra.", en: "I play the guitar." }, { es: "\u00a1No toques eso!", en: "Don't touch that!" }],
                    homonyms: [{ word: "toca", meaning: "it's your turn", example: "Te toca a ti. (It's your turn.)" }],
                    synonyms: [{ word: "interpretar", meaning: "to perform" }]
                }
            ]
        },
        history: {
            period: "Fall of the Berlin Wall (1989)",
            fr: "El 9 de noviembre de 1989, cay\u00f3 el Muro de Berl\u00edn. Este evento marc\u00f3 el fin de la Guerra Fr\u00eda y la reunificaci\u00f3n de Alemania. El mundo celebr\u00f3 el triunfo de la libertad sobre la opresi\u00f3n.",
            en: "On November 9, 1989, the Berlin Wall fell. This event marked the end of the Cold War and the reunification of Germany. The world celebrated the triumph of freedom over oppression.",
            vocab: [
                { word: "el muro", meaning: "the wall" },
                { word: "la ca\u00edda", meaning: "the fall" },
                { word: "la reunificaci\u00f3n", meaning: "the reunification" },
                { word: "el triunfo", meaning: "the triumph" },
                { word: "la opresi\u00f3n", meaning: "the oppression" }
            ],
            funFact: "The Berlin Wall fell partly by accident \u2014 a confused government spokesman announced that borders were open 'immediately,' and thousands rushed to cross.",
            facts: [
                "The Berlin Wall stood for 28 years, from 1961 to 1989, dividing East and West Berlin.",
                "At least 140 people died trying to cross the Berlin Wall.",
                "Pieces of the Berlin Wall can now be found in museums and public spaces around the world.",
                "The fall of the Wall led to German reunification on October 3, 1990.",
                "Spain's own transition from dictatorship to democracy (1975-1982) is often compared to Eastern European transitions.",
                "The fall of the Berlin Wall is considered one of the most important events of the 20th century."
            ]
        },
        currentEvents: [
            { es: "Europa celebra el aniversario de la ca\u00edda del Muro de Berl\u00edn.", en: "Europe celebrates the anniversary of the fall of the Berlin Wall." },
            { es: "Los debates sobre la libertad y la democracia contin\u00faan en todo el mundo.", en: "Debates about freedom and democracy continue around the world." },
            { es: "El f\u00fatbol espa\u00f1ol sigue siendo uno de los mejores del mundo.", en: "Spanish football remains one of the best in the world." }
        ],
        vocabulary: [
            {
                word: "juego", partOfSpeech: "verb/noun", meaning: "I play / game",
                example: { es: "Yo juego al f\u00fatbol.", en: "I play soccer." },
                homonyms: [{ word: "juego", meaning: "game (noun)", example: "Es un juego divertido. (It's a fun game.)" }],
                synonyms: [{ word: "partido", meaning: "match/game" }]
            },
            {
                word: "f\u00fatbol", partOfSpeech: "noun (m)", meaning: "soccer / football",
                example: { es: "Juego al f\u00fatbol.", en: "I play soccer." },
                homonyms: [],
                synonyms: [{ word: "balompi\u00e9", meaning: "football (formal)" }]
            },
            {
                word: "guitarra", partOfSpeech: "noun (f)", meaning: "guitar",
                example: { es: "Toco la guitarra.", en: "I play the guitar." },
                homonyms: [],
                synonyms: []
            },
            {
                word: "parque", partOfSpeech: "noun (m)", meaning: "park",
                example: { es: "Juegan en el parque.", en: "They play in the park." },
                homonyms: [],
                synonyms: [{ word: "jard\u00edn", meaning: "garden" }, { word: "plaza", meaning: "square/plaza" }]
            }
        ],
        artHistory: {
            period: "El Arte Urbano Espa\u00f1ol (2000\u2013presente)",
            periodEn: "Spanish Urban Art (2000\u2013present)",
            context: "El arte urbano espa\u00f1ol ha ganado reconocimiento internacional. Artistas como Okuda San Miguel transforman edificios y espacios p\u00fablicos con sus coloridos murales geom\u00e9tricos.",
            contextEn: "Spanish urban art has gained international recognition. Artists like Okuda San Miguel transform buildings and public spaces with their colorful geometric murals.",
            artworks: [
                {
                    title: "La Iglesia del Skate",
                    titleEn: "The Skate Church",
                    artist: "Okuda San Miguel",
                    year: 2015,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Interior_Kaos_Temple.jpg/400px-Interior_Kaos_Temple.jpg",
                    descEs: "Una iglesia abandonada en Asturias convertida en un parque de skate decorado con los murales coloridos y geom\u00e9tricos de Okuda.",
                    descEn: "An abandoned church in Asturias converted into a skate park decorated with Okuda's colorful geometric murals."
                }
            ],
            vocab: [
                { word: "el arte urbano", meaning: "urban art / street art" },
                { word: "el mural", meaning: "the mural" },
                { word: "el espacio p\u00fablico", meaning: "public space" },
                { word: "colorido", meaning: "colorful" },
                { word: "transformar", meaning: "to transform" }
            ]
        },
        exercises: [
            { type: "fill", prompt: "Yo ___ al f\u00fatbol.", answer: "juego", options: ["juego", "juegas", "juega", "jugamos"] },
            { type: "fill", prompt: "Ella ___ al tenis.", answer: "juega", options: ["juega", "juego", "juegan", "jugamos"] },
            { type: "fill", prompt: "Ellos ___ en el parque.", answer: "juegan", options: ["juega", "jugamos", "juegan", "jug\u00e1is"] },
            { type: "translate", en: "I play the guitar.", answer: "Yo toco la guitarra.", accept: ["yo toco la guitarra", "toco la guitarra"] },
            { type: "translate", en: "I run in the mornings.", answer: "Yo corro por las ma\u00f1anas.", accept: ["yo corro por las ma\u00f1anas", "corro por las mananas", "yo corro por las mananas"] },
            { type: "history", fr: "El Muro de Berl\u00edn cay\u00f3 en 1989.", answer: "The Berlin Wall fell in 1989.", options: ["The Berlin Wall fell in 1989.", "The Berlin Wall fell in 1999.", "The Berlin Wall fell in 1979.", "The Berlin Wall fell in 1969."] },
            { type: "fill", prompt: "Yo ___ por las ma\u00f1anas.", answer: "corro", options: ["corro", "corres", "corren", "corremos"] },
            { type: "fill", prompt: "Yo ___ en la piscina.", answer: "nado", options: ["nado", "nadas", "nadan", "nadamos"] },
            { type: "translate", en: "I swim in the pool.", answer: "Yo nado en la piscina.", accept: ["yo nado en la piscina", "nado en la piscina"] },
            { type: "history", fr: "El muro dividi\u00f3 Berl\u00edn durante 28 a\u00f1os.", answer: "The wall divided Berlin for 28 years.", options: ["The wall divided Berlin for 28 years.", "The wall divided Berlin for 10 years.", "The wall divided Berlin for 50 years.", "The wall divided Berlin for 5 years."] }
        ]
    }
];
